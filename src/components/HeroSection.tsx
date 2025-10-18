import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { OptionalInfoModal, type OptionalData } from "@/components/OptionalInfoModal";
const categories = ["Governance", "Finance & Audit", "Program Design", "Digital & Data", "Fundraising", "Research", "Legal & Compliance", "Not sure / Other"];
const provinces = [{
  code: "AB",
  name: "Alberta"
}, {
  code: "BC",
  name: "British Columbia"
}, {
  code: "MB",
  name: "Manitoba"
}, {
  code: "NB",
  name: "New Brunswick"
}, {
  code: "NL",
  name: "Newfoundland and Labrador"
}, {
  code: "NS",
  name: "Nova Scotia"
}, {
  code: "NT",
  name: "Northwest Territories"
}, {
  code: "NU",
  name: "Nunavut"
}, {
  code: "ON",
  name: "Ontario"
}, {
  code: "PE",
  name: "Prince Edward Island"
}, {
  code: "QC",
  name: "Quebec"
}, {
  code: "SK",
  name: "Saskatchewan"
}, {
  code: "YT",
  name: "Yukon"
}];
interface HeroFormProps {
  prefillCategory?: string;
}
export const HeroSection = ({
  prefillCategory
}: HeroFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOptionalModal, setShowOptionalModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [showExamples, setShowExamples] = useState(false);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState({
    email: "",
    organization: "",
    region: "",
    category: prefillCategory || "",
    outcome: ""
  });
  const scrollToForm = () => {
    const form = document.getElementById("form_3quotes");
    form?.scrollIntoView({
      behavior: "smooth"
    });

    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_quotes_click', {
        source: 'hero'
      });
    }

    // Focus first empty required field after scroll
    setTimeout(() => {
      const emailField = document.getElementById("q_email") as HTMLInputElement;
      const orgField = document.getElementById("q_org") as HTMLInputElement;
      const categoryField = document.getElementById("q_category") as HTMLInputElement;
      if (!formData.email && emailField) {
        emailField.focus();
      } else if (!formData.organization && orgField) {
        orgField.focus();
      } else if (!formData.category && categoryField) {
        categoryField.focus();
      } else if (emailField) {
        // If all required fields are filled, focus email anyway
        emailField.focus();
      }
    }, 500);
  };

  // Listen for category prefill events from CategoryTiles
  useEffect(() => {
    const handleCategoryPrefill = (e: CustomEvent) => {
      const value = e.detail?.value;
      if (value) {
        setFormData(prev => ({
          ...prev,
          category: value
        }));
      }
    };
    window.addEventListener('categoryPrefill' as any, handleCategoryPrefill);
    return () => window.removeEventListener('categoryPrefill' as any, handleCategoryPrefill);
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.email || !formData.organization || !formData.category) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }
    if (formData.outcome.length > 140) {
      toast.error("Outcome must be 140 characters or less");
      setIsSubmitting(false);
      return;
    }
    try {
      const payload = {
        flow: "3quotes",
        q_email: formData.email,
        q_org: formData.organization,
        q_region: formData.region,
        q_category: formData.category,
        q_outcome: formData.outcome,
        utm_source: new URLSearchParams(window.location.search).get("utm_source"),
        utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
        utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
        referrer: document.referrer,
        timestamp: new Date().toISOString()
      };

      // Send email (non-blocking)
      supabase.functions.invoke("send-form-email", {
        body: {
          formCode: "3QUOTES",
          payload
        }
      }).catch(err => console.error("Email error:", err));
      toast.success("Thanks — expect a project scoping call in the next 48 hours to understand your needs better before matching you with a consultant.");

      // Store email for optional details
      setSubmittedEmail(formData.email);

      // Show the modal after a short delay
      setTimeout(() => {
        setShowOptionalModal(true);
      }, 500);

      // Reset form
      setFormData({
        email: "",
        organization: "",
        region: "",
        category: "",
        outcome: ""
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setTimeout(() => setIsSubmitting(false), 2000);
    }
  };
  const handleSaveOptional = async (data: OptionalData) => {
    const lead_id = sessionStorage.getItem('lead_id');
    const payload = {
      flow: "3quotes_more",
      lead_id: lead_id || null,
      email: submittedEmail,
      note: data.om_note,
      start: data.om_start,
      budget: data.om_budget,
      utm_source: new URLSearchParams(window.location.search).get("utm_source"),
      utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
      utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
      referrer: document.referrer,
      timestamp: new Date().toISOString()
    };

    // POST to webhook
    const response = await fetch("https://example.com/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
      throw new Error("Failed to save");
    }

    toast.success("Thanks — we've added this to your request.");
  };
  return (
    <section 
      aria-labelledby="hero-title" 
      className="bg-[#202654] text-white relative overflow-hidden"
    >
      {/* Skip link for accessibility */}
      <a 
        href="#get-quotes" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-[#202654] focus:px-3 focus:py-2 focus:rounded focus:z-50 focus:outline-none focus:ring-2 focus:ring-[#6945D8] focus:ring-offset-2"
      >
        Skip to form
      </a>

      <div className="mx-auto max-w-[1240px] px-5 py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="space-y-6 lg:space-y-8">
            {/* Eyebrow Pill */}
            <div>
              <span className="inline-block rounded-full bg-[#ACFCE3] text-[#202654] px-3 py-1 text-sm font-semibold">
                For nonprofits & charities • Premium consulting
              </span>
            </div>

            {/* H1 - Stacked Headline */}
            <h1 
              id="hero-title"
              className="font-extrabold tracking-tight leading-[0.95] text-[clamp(40px,5.2vw,64px)] max-w-[22ch]"
              style={{ textWrap: 'balance' }}
            >
              <span>Premium&nbsp;nonprofit</span><br />
              <span>consulting&nbsp;—&nbsp;Get&nbsp;3</span><br />
              <span>quotes&nbsp;in&nbsp;72&nbsp;hours</span>
            </h1>

            {/* Subhead */}
            <p 
              className="max-w-prose"
              style={{
                fontSize: 'clamp(16px, 2.2vw, 20px)',
                lineHeight: '1.45',
                opacity: '0.9'
              }}
            >
              We match you with senior Canadian experts. Clear scope. PM oversight. Audit-ready files.
            </p>

            {/* Primary CTA */}
            <div className="pt-2">
              <button
                onClick={scrollToForm}
                className="rounded-xl bg-[#6945D8] text-white font-bold px-5 py-3 min-h-[44px] min-w-[44px] hover:brightness-95 focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2 transition-all"
              >
                Get 3 free quotes
              </button>
            </div>

            {/* Secondary Link */}
            <div>
              <a 
                href="#pricing" 
                onClick={(e) => {
                  e.preventDefault();
                  const pricingSection = document.getElementById('pricing');
                  pricingSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] focus:ring-offset-2 focus:ring-offset-[#202654] rounded inline-block"
                style={{ fontSize: '16px' }}
              >
                How fees work →
              </a>
            </div>

            {/* Trust Strip */}
            <div className="pt-4">
              <p className="text-[#96A0B5] text-sm">
                Records kept 7 years • Vetted senior consultants • Nimara Project Manager Oversight
              </p>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div 
            id="get-quotes"
            className="rounded-2xl bg-white text-[#202654] border border-[#E9ECF4] p-6 lg:p-8"
            style={{ boxShadow: '0 8px 24px rgba(32, 38, 84, 0.08)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Email Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="q_email"
                  className="block text-sm font-medium text-[#202654]"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="q_email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 text-[#202654] placeholder:text-[#96A0B5] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2"
                  placeholder="you@organization.org"
                />
              </div>

              {/* Organization Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="q_org"
                  className="block text-sm font-medium text-[#202654]"
                >
                  Organization <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="q_org"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 text-[#202654] placeholder:text-[#96A0B5] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2"
                  placeholder="Your organization name"
                />
              </div>

              {/* Province/Territory Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="q_region"
                  className="block text-sm font-medium text-[#202654]"
                >
                  Province/Territory <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <select
                    id="q_region"
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full appearance-none rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 pr-10 text-[#202654] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2 min-h-[44px]"
                  >
                    <option value="">Select a province</option>
                    {provinces.map((province) => (
                      <option key={province.code} value={province.code}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                  <svg 
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-[#96A0B5]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Category Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="q_category"
                  className="block text-sm font-medium text-[#202654]"
                >
                  Category <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <select
                    id="q_category"
                    value={formData.category}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData({ ...formData, category: value });
                      
                      if (value === "not_sure" || value === "Not sure / Other") {
                        setTimeout(() => {
                          document.getElementById("q_outcome")?.focus();
                        }, 100);
                      }
                    }}
                    required
                    className="w-full appearance-none rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 pr-10 text-[#202654] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2 min-h-[44px]"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => {
                      const value = category === "Not sure / Other" ? "not_sure" : category;
                      return (
                        <option key={category} value={value}>
                          {category}
                        </option>
                      );
                    })}
                  </select>
                  <svg 
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-[#96A0B5]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {(formData.category === "not_sure" || formData.category === "Not sure / Other") && (
                  <p className="text-xs text-[#96A0B5]">
                    If you choose "Not sure / Other," just tell us the outcome you want.
                  </p>
                )}
              </div>

              {/* Outcome Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="q_outcome"
                  className="block text-sm font-medium text-[#202654]"
                >
                  What result do you want?
                </label>
                <p className="text-xs text-[#96A0B5]" id="q_outcome_helper">
                  One sentence, up to 140 characters. Plain English is perfect.
                </p>
                <input
                  type="text"
                  id="q_outcome"
                  maxLength={140}
                  value={formData.outcome}
                  onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
                  className="w-full rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 text-[#202654] placeholder:text-[#96A0B5] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2"
                  placeholder="Reconcile Q4 grant spend and be audit-ready by Apr 30."
                  aria-describedby="q_outcome_helper q_outcome_counter"
                />
                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setShowExamples(!showExamples)}
                    className="text-xs text-[#6945D8] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] focus:ring-offset-2 rounded px-1"
                  >
                    {showExamples ? "Hide examples" : "Show examples →"}
                  </button>
                  <p 
                    id="q_outcome_counter" 
                    className={`text-xs ${formData.outcome.length >= 120 ? 'text-[#202654] font-medium' : 'text-[#96A0B5]'}`}
                    aria-live="polite"
                  >
                    {formData.outcome.length} / 140
                  </p>
                </div>

                {/* Examples Panel */}
                {showExamples && (
                  <div className="border border-[#E9ECF4] rounded-xl p-4 space-y-3 bg-[#E9ECF4]/30">
                    <p className="text-xs font-semibold text-[#202654]">Example outcomes by category:</p>
                    
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-medium text-[#202654] mb-1">Finance & Audit</p>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, outcome: "Reconcile Q4 grant spend and be audit-ready by Apr 30." });
                            setShowExamples(false);
                          }}
                          className="text-xs text-[#96A0B5] hover:text-[#202654] transition-colors text-left"
                        >
                          "Reconcile Q4 grant spend and be audit-ready by Apr 30."
                        </button>
                      </div>
                      
                      <div>
                        <p className="text-xs font-medium text-[#202654] mb-1">Digital & Data</p>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, outcome: "Migrate our donor database to a CRM by June 15." });
                            setShowExamples(false);
                          }}
                          className="text-xs text-[#96A0B5] hover:text-[#202654] transition-colors text-left"
                        >
                          "Migrate our donor database to a CRM by June 15."
                        </button>
                      </div>
                      
                      <div>
                        <p className="text-xs font-medium text-[#202654] mb-1">Governance</p>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, outcome: "Update our board policies to meet new ONCA requirements by May 1." });
                            setShowExamples(false);
                          }}
                          className="text-xs text-[#96A0B5] hover:text-[#202654] transition-colors text-left"
                        >
                          "Update our board policies to meet new ONCA requirements by May 1."
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  ref={submitButtonRef}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#6945D8] text-white font-bold px-5 py-3 min-h-[44px] hover:brightness-95 focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Get My Free Quotes"}
                </button>
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-[#96A0B5] leading-relaxed">
                We protect your privacy. By sending this, you agree to Nimara's{' '}
                <a href="/privacy" className="text-[#6945D8] hover:underline focus:outline-none focus:ring-1 focus:ring-[#6945D8] rounded">
                  Privacy Policy
                </a>
                {' '}and{' '}
                <a href="/terms" className="text-[#6945D8] hover:underline focus:outline-none focus:ring-1 focus:ring-[#6945D8] rounded">
                  Terms of Use
                </a>.
              </p>
            </form>
          </div>

        </div>
      </div>

      {/* Optional Info Modal */}
      <OptionalInfoModal
        isOpen={showOptionalModal}
        onClose={() => setShowOptionalModal(false)}
        onSave={handleSaveOptional}
        returnFocusRef={submitButtonRef}
      />

      {/* 
        VARIANT B (Light Alternative - Commented)
        
        To switch to Variant B (light hero with navy band behind card):
        
        1. Change section className from:
           className="bg-[#202654] text-white"
           to:
           className="bg-white text-[#202654] relative"
        
        2. Update left column text colors:
           - Pill: bg-[#ACFCE3] text-[#202654] (stays same)
           - H1: add class "text-[#202654]"
           - Subhead: add class "text-[#96A0B5]"
           - Primary CTA: stays same (purple)
           - Secondary link: change to "text-[#202654]"
           - Trust strip: change to "text-[#96A0B5]"
        
        3. Add navy band behind right column using grid approach:
           - Wrap the grid in a parent div with relative positioning
           - Add a pseudo-element or background div positioned absolutely
           - Set it to span 45-55% width from the right
           - Give it bg-[#202654]
           - Ensure form card has relative z-index to appear above band
        
        Example structure:
        <div className="relative">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#202654] -z-10" />
          <div className="mx-auto max-w-[1240px] px-5 py-16 lg:py-28 relative z-10">
            {/* grid content *\/}
          </div>
        </div>
      */}
    </section>
  );
};