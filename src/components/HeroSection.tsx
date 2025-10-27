import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
const categories = ["Strategy & Planning", "Grant Writing / Reviews", "Financial Systems (QBO) & Controls", "Monday.com Setup & Automation", "Monitoring & Evaluation (M&E)", "Policies, Compliance & Governance", "Training & Workshops", "Website / CRM & Data", "Other"];
const provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Northwest Territories", "Nunavut", "Yukon"];
interface HeroFormProps {
  prefillCategory?: string;
}
export const HeroSection = ({
  prefillCategory
}: HeroFormProps) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const [formRenderedAt] = useState(new Date().toISOString());
  const [formData, setFormData] = useState({
    email: "",
    organization: "",
    region: "",
    category: prefillCategory || "",
    outcome: "",
    honeypot: ""
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
    e.stopPropagation();
    setIsSubmitting(true);

    // Validation
    if (!formData.email || !formData.organization || !formData.region || !formData.category || !formData.outcome) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }
    if (formData.outcome.length > 140) {
      toast.error("Outcome must be 140 characters or less");
      setIsSubmitting(false);
      return;
    }

    // Bot detection - if honeypot is filled, show success but don't send
    if (formData.honeypot) {
      toast.success("Thanks — expect a scoping call within 48 hours so we can match you with the right consultant.", {
        duration: 2000
      });
      setTimeout(() => {
        navigate("/next-steps");
      }, 2000);
      setIsSubmitting(false);
      return;
    }
    try {
      // Get UTM parameters
      const urlParams = new URLSearchParams(window.location.search);

      // Build nested payload for organization
      const payload = {
        form_id: "nimara_free_quote_v2",
        submitted_at: new Date().toISOString(),
        page_url: window.location.href,
        referrer: document.referrer || "",
        utm: {
          source: urlParams.get("utm_source") || null,
          medium: urlParams.get("utm_medium") || null,
          campaign: urlParams.get("utm_campaign") || null,
          term: urlParams.get("utm_term") || null,
          content: urlParams.get("utm_content") || null,
          gclid: urlParams.get("gclid") || null
        },
        client: {
          user_agent: navigator.userAgent
        },
        spam: {
          honeypot_website: formData.honeypot || "",
          form_rendered_at: formRenderedAt
        },
        contact: {
          email: formData.email.trim()
        },
        organization: {
          name: formData.organization.trim(),
          province: formData.region
        },
        project: {
          category: formData.category,
          result_goal: formData.outcome.trim()
        }
      };

      // Flatten payload for Make webhook
      const flatPayload = {
        "email": payload.contact.email,
        "organization": payload.organization.name,
        "province/territory": payload.organization.province,
        "category": payload.project.category,
        "what result would you want?": payload.project.result_goal,
        "submitted_at": payload.submitted_at,
        "page_url": payload.page_url
      };

      // Send to webhook - US2 region
      const response = await fetch("https://hook.us2.make.com/oor7l72qi48e8o5ydnenu56r3y9d27v5", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*"
        },
        body: JSON.stringify(flatPayload),
        keepalive: true
      });

      // Handle response - may be opaque if CORS not exposed
      if (!response.ok && response.type !== "opaque") {
        throw new Error("Webhook request failed");
      }

      // Show success message
      toast.success("Thanks — expect a scoping call within 48 hours so we can match you with the right consultant.", {
        duration: 2000
      });

      // Reset form
      setFormData({
        email: "",
        organization: "",
        region: "",
        category: "",
        outcome: "",
        honeypot: ""
      });

      // Redirect to Next Steps page after brief delay
      setTimeout(() => {
        navigate("/next-steps");
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("We couldn't send your request. Please try again.");
      setIsSubmitting(false);
    }
  };
  return <section aria-labelledby="hero-title" className="bg-[#202654] text-white relative overflow-hidden">
      {/* Skip link for accessibility */}
      <a href="#get-quotes" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-[#202654] focus:px-3 focus:py-2 focus:rounded focus:z-50 focus:outline-none focus:ring-2 focus:ring-[#6945D8] focus:ring-offset-2">
        Skip to form
      </a>

      <div className="mx-auto max-w-[1240px] px-5 py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="space-y-6 lg:space-y-8">
            {/* Eyebrow Pill */}
            <div>
              <span className="inline-block rounded-full bg-[#ACFCE3] text-[#202654] px-3 py-1 text-sm font-semibold">For Nonprofits & Charities - Premium Nonprofit Consulting</span>
            </div>

            {/* H1 - Stacked Headline */}
            <h1 id="hero-title" className="font-extrabold tracking-tight leading-[0.95] text-[clamp(40px,5.2vw,64px)] max-w-[22ch]" style={{
            textWrap: 'balance'
          }}>
              Get up to 3 vetted consultant quotes in 72 hours
            </h1>

            {/* Subhead */}
            <p className="max-w-prose" style={{
            fontSize: 'clamp(16px, 2.2vw, 20px)',
            lineHeight: '1.45',
            opacity: '0.9'
          }}>
              We match you with senior Canadian experts. Clear scope. PM oversight. Audit-ready files.
            </p>

            {/* Primary CTA */}
            <div className="pt-2">
              <button onClick={scrollToForm} className="rounded-xl bg-[#6945D8] text-white font-bold px-5 py-3 min-h-[44px] min-w-[44px] hover:brightness-95 focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2 transition-all">
                Get 3 free quotes
              </button>
            </div>

            {/* Secondary Link */}
            <div>
              <a href="#pricing" onClick={e => {
              e.preventDefault();
              const pricingSection = document.getElementById('pricing');
              pricingSection?.scrollIntoView({
                behavior: 'smooth'
              });
            }} className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] focus:ring-offset-2 focus:ring-offset-[#202654] rounded inline-block" style={{
              fontSize: '16px'
            }}>
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
          <div id="get-quotes" className="rounded-2xl bg-white text-[#202654] border border-[#E9ECF4] p-6 lg:p-8" style={{
          boxShadow: '0 8px 24px rgba(32, 38, 84, 0.08)'
        }}>
            <form id="form_3quotes" onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {/* Honeypot Field - Hidden */}
              <div style={{
              position: 'absolute',
              left: '-9999px'
            }} aria-hidden="true">
                <label htmlFor="q_website">Website</label>
                <input type="text" id="q_website" name="website" tabIndex={-1} autoComplete="off" value={formData.honeypot} onChange={e => setFormData({
                ...formData,
                honeypot: e.target.value
              })} />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="q_email" className="block text-sm font-medium text-[#202654]">
                  Email <span className="text-red-600">*</span>
                </label>
                <input type="email" id="q_email" autoComplete="email" required value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="w-full rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 text-[#202654] placeholder:text-[#96A0B5] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2" placeholder="you@organization.org" />
              </div>

              {/* Organization Field */}
              <div className="space-y-2">
                <label htmlFor="q_org" className="block text-sm font-medium text-[#202654]">
                  Organization <span className="text-red-600">*</span>
                </label>
                <input type="text" id="q_org" required value={formData.organization} onChange={e => setFormData({
                ...formData,
                organization: e.target.value
              })} className="w-full rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 text-[#202654] placeholder:text-[#96A0B5] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2" placeholder="Your organization name" />
              </div>

              {/* Province/Territory Field */}
              <div className="space-y-2">
                <label htmlFor="q_region" className="block text-sm font-medium text-[#202654]">
                  Province/Territory <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <select id="q_region" required value={formData.region} onChange={e => setFormData({
                  ...formData,
                  region: e.target.value
                })} className="w-full appearance-none rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 pr-10 text-[#202654] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2 min-h-[44px]">
                    <option value="">Select a province</option>
                    {provinces.map(province => <option key={province} value={province}>
                        {province}
                      </option>)}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-[#96A0B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Category Field */}
              <div className="space-y-2">
                <label htmlFor="q_category" className="block text-sm font-medium text-[#202654]">
                  Category <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <select id="q_category" value={formData.category} onChange={e => {
                  const value = e.target.value;
                  setFormData({
                    ...formData,
                    category: value
                  });
                  if (value === "Other") {
                    setTimeout(() => {
                      document.getElementById("q_outcome")?.focus();
                    }, 100);
                  }
                }} required className="w-full appearance-none rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 pr-10 text-[#202654] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2 min-h-[44px]">
                    <option value="">Select a category</option>
                    {categories.map(category => <option key={category} value={category}>
                          {category}
                        </option>)}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-[#96A0B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {formData.category === "Other" && <p className="text-xs text-[#96A0B5]">
                    If you choose "Other," just tell us the outcome you want.
                  </p>}
              </div>

              {/* Outcome Field */}
              <div className="space-y-2">
                <label htmlFor="q_outcome" className="block text-sm font-medium text-[#202654]">
                  What result do you want? <span className="text-red-600">*</span>
                </label>
                <p className="text-xs text-[#96A0B5]" id="q_outcome_helper">
                  One sentence, up to 140 characters. Plain English is perfect.
                </p>
                <input type="text" id="q_outcome" required maxLength={140} value={formData.outcome} onChange={e => setFormData({
                ...formData,
                outcome: e.target.value
              })} className="w-full rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 text-[#202654] placeholder:text-[#96A0B5] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2" placeholder="Reconcile Q4 grant spend and be audit-ready by Apr 30." aria-describedby="q_outcome_helper q_outcome_counter" />
                <div className="flex items-center justify-between gap-2">
                  <button type="button" onClick={() => setShowExamples(!showExamples)} className="text-xs text-[#6945D8] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] focus:ring-offset-2 rounded px-1">
                    {showExamples ? "Hide examples" : "Show examples →"}
                  </button>
                  <p id="q_outcome_counter" className={`text-xs ${formData.outcome.length >= 120 ? 'text-[#202654] font-medium' : 'text-[#96A0B5]'}`} aria-live="polite">
                    {formData.outcome.length} / 140
                  </p>
                </div>

                {/* Examples Panel */}
                {showExamples && <div className="border border-[#E9ECF4] rounded-xl p-4 space-y-3 bg-[#E9ECF4]/30">
                    <p className="text-xs font-semibold text-[#202654]">Example outcomes by category:</p>
                    
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-medium text-[#202654] mb-1">Financial Systems (QBO) & Controls</p>
                        <button type="button" onClick={() => {
                      setFormData({
                        ...formData,
                        outcome: "Set up QBO tracking for three separate programs by March 31."
                      });
                      setShowExamples(false);
                    }} className="text-xs text-[#96A0B5] hover:text-[#202654] transition-colors text-left">
                          "Set up QBO tracking for three separate programs by March 31."
                        </button>
                      </div>
                      
                      <div>
                        <p className="text-xs font-medium text-[#202654] mb-1">Website / CRM & Data</p>
                        <button type="button" onClick={() => {
                      setFormData({
                        ...formData,
                        outcome: "Migrate our donor database to a CRM by June 15."
                      });
                      setShowExamples(false);
                    }} className="text-xs text-[#96A0B5] hover:text-[#202654] transition-colors text-left">
                          "Migrate our donor database to a CRM by June 15."
                        </button>
                      </div>
                      
                      <div>
                        <p className="text-xs font-medium text-[#202654] mb-1">Policies, Compliance & Governance</p>
                        <button type="button" onClick={() => {
                      setFormData({
                        ...formData,
                        outcome: "Update our board policies to meet new ONCA requirements by May 1."
                      });
                      setShowExamples(false);
                    }} className="text-xs text-[#96A0B5] hover:text-[#202654] transition-colors text-left">
                          "Update our board policies to meet new ONCA requirements by May 1."
                        </button>
                      </div>
                    </div>
                  </div>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button ref={submitButtonRef} type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-[#6945D8] text-white font-bold px-5 py-3 min-h-[44px] hover:brightness-95 focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
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
    </section>;
};