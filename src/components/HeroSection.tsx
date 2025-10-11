import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
  const [showOneMorePanel, setShowOneMorePanel] = useState(false);
  const [isPanelExpanded, setIsPanelExpanded] = useState(false);
  const [isSavingOptional, setIsSavingOptional] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const panelTitleRef = useRef<HTMLHeadingElement>(null);
  const [formData, setFormData] = useState({
    email: "",
    organization: "",
    region: "",
    category: prefillCategory || "",
    outcome: ""
  });
  const [optionalData, setOptionalData] = useState({
    om_name: "",
    om_role: "",
    om_start: "",
    om_budget: ""
  });
  const scrollToForm = () => {
    const form = document.getElementById("form_3quotes");
    form?.scrollIntoView({
      behavior: "smooth"
    });
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

      // Store lead_id in sessionStorage if available
      // (webhook response would need to be captured if it returns lead_id)

      // Show the inline panel
      setShowOneMorePanel(true);
      setIsPanelExpanded(false);
      setSaveSuccess(false);
      setSaveError("");

      // Focus management - move to panel title after toast
      setTimeout(() => {
        panelTitleRef.current?.focus();
      }, 500);

      // Track analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'one_more_shown');
      }

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
  const handleSkip = () => {
    setIsPanelExpanded(false);

    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'one_more_skip');
    }
  };
  const handleExpandClick = () => {
    setIsPanelExpanded(true);

    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'one_more_expand_click');
    }
  };
  const handleSaveOptional = async () => {
    setIsSavingOptional(true);
    setSaveError("");
    try {
      const lead_id = sessionStorage.getItem('lead_id');
      const payload = {
        flow: "3quotes_more",
        lead_id: lead_id || null,
        email: submittedEmail,
        name: optionalData.om_name,
        role: optionalData.om_role,
        start: optionalData.om_start,
        budget: optionalData.om_budget,
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

      // Track analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'one_more_save', {
          role: optionalData.om_role,
          start: optionalData.om_start,
          budget: optionalData.om_budget
        });
      }

      // Show success
      setSaveSuccess(true);

      // Auto-collapse after 2s
      setTimeout(() => {
        setIsPanelExpanded(false);
      }, 2000);

      // Reset optional data
      setOptionalData({
        om_name: "",
        om_role: "",
        om_start: "",
        om_budget: ""
      });
    } catch (error) {
      setSaveError("Couldn't save right now — you can skip or try again.");
    } finally {
      setIsSavingOptional(false);
    }
  };

  // Handle ESC key to collapse panel
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isPanelExpanded) {
        setIsPanelExpanded(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isPanelExpanded]);
  return <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Hero Content */}
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground font-medium">Audit-ready by design</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Get 3 free quotes in 3 days.nonprofit </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">Tell us what you want. We make a simple plan, get up to 3 quotes from trusted Canadian experts, and our Nimara project manager makes sure it gets done.</p>
            <div className="space-y-4">
              <Button onClick={scrollToForm} size="lg">
                Get 3 free quotes
              </Button>
              <p className="text-sm text-muted-foreground">
                If we deliver fewer than 2 proposals in 72 hours, you get a $500 credit.
              </p>
              <Button variant="link" asChild className="p-0 h-auto">
                <a href="/book-a-call">Prefer a call? Book a 15-minute chat</a>
              </Button>
            </div>
            
            {/* Micro-benefits */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-4">
              <span>Plain brief</span>
              <span>·</span>
              <span>Comparable proposals</span>
              <span>·</span>
              <span>PM oversight</span>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-md" id="form_3quotes">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="q_email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input type="email" id="q_email" autoComplete="email" required value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="rounded-xl" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="q_org">
                  Organization <span className="text-destructive">*</span>
                </Label>
                <Input type="text" id="q_org" required value={formData.organization} onChange={e => setFormData({
                ...formData,
                organization: e.target.value
              })} className="rounded-xl" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="q_region">Province/Territory</Label>
                <Select value={formData.region} onValueChange={value => setFormData({
                ...formData,
                region: value
              })}>
                  <SelectTrigger id="q_region" className="rounded-xl">
                    <SelectValue placeholder="Select a province" />
                  </SelectTrigger>
                  <SelectContent>
                    {provinces.map(province => <SelectItem key={province.code} value={province.code}>
                        {province.name}
                      </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="q_category">
                  Category <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.category} onValueChange={value => {
                setFormData({
                  ...formData,
                  category: value
                });
                console.log("category_select_not_sure", {
                  category: value,
                  source: "hero_select"
                });

                // If "not_sure", focus outcome field
                if (value === "not_sure" || value === "Not sure / Other") {
                  setTimeout(() => {
                    const outcomeField = document.getElementById("q_outcome");
                    outcomeField?.focus();
                  }, 100);
                }
              }} required>
                  <SelectTrigger id="q_category" className="rounded-xl">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => {
                    const value = category === "Not sure / Other" ? "not_sure" : category;
                    return <SelectItem key={category} value={value}>
                          {category}
                        </SelectItem>;
                  })}
                  </SelectContent>
                </Select>
                {(formData.category === "not_sure" || formData.category === "Not sure / Other") && <p className="text-xs text-muted-foreground">
                    If you choose "Not sure / Other," just tell us the outcome you want.
                  </p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="q_outcome">What outcome do you want?</Label>
                <Textarea id="q_outcome" maxLength={140} placeholder="Reconcile funds and be audit-ready by April 31." value={formData.outcome} onChange={e => setFormData({
                ...formData,
                outcome: e.target.value
              })} className="rounded-xl resize-none" rows={3} />
                <p className="text-xs text-muted-foreground">
                  One sentence. {formData.outcome.length}/140 characters.
                </p>
              </div>

              {/* Privacy/Terms Notice */}
              <p id="q_privacy_notice" className="text-xs leading-relaxed max-w-[560px]" style={{
              color: '#96A0B5'
            }}>
                We are committed to protecting your privacy. By providing your information you acknowledge and agree to Nimara's{' '}
                <a href="/privacy" className="underline hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6945D8] focus-visible:ring-offset-2 rounded-sm" onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'privacy_notice_click', {
                    target: 'privacy'
                  });
                }
              }}>
                  Privacy Policy
                </a>
                {' '}and{' '}
                <a href="/terms" className="underline hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6945D8] focus-visible:ring-offset-2 rounded-sm" onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'privacy_notice_click', {
                    target: 'terms'
                  });
                }
              }}>
                  Terms of Use
                </a>.
              </p>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting} id="cta_quotes_submit" aria-describedby="q_privacy_notice">
                {isSubmitting ? "Submitting..." : "Get 3 free quotes"}
              </Button>
            </form>

            {/* Inline Optional Details Panel */}
            {showOneMorePanel && <div className="mt-6 border border-border rounded-2xl p-6 bg-card/50" id="panel_one_more_thing" role="region" aria-label="One more thing">
                <h3 ref={panelTitleRef} tabIndex={-1} className="text-lg font-semibold mb-1">
                  One more thing (30 sec)
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This helps us match you faster. Optional.
                </p>

                {saveSuccess && <Alert className="mb-4 bg-accent/10 border-accent">
                    <AlertDescription>
                      Thanks — we've added this to your request.
                    </AlertDescription>
                  </Alert>}

                {saveError && <Alert className="mb-4 bg-destructive/10 border-destructive">
                    <AlertDescription>{saveError}</AlertDescription>
                  </Alert>}

                <Collapsible open={isPanelExpanded} onOpenChange={setIsPanelExpanded}>
                  {!isPanelExpanded ? <div className="flex items-center gap-3">
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" onClick={handleExpandClick} className="focus:ring-2 focus:ring-primary focus:ring-offset-2">
                          Add details
                        </Button>
                      </CollapsibleTrigger>
                      <Button variant="link" onClick={handleSkip} className="p-0 h-auto">
                        Skip for now
                      </Button>
                    </div> : <CollapsibleContent className="space-y-4 motion-safe:animate-accordion-down motion-reduce:animate-none">
                      <div className="space-y-2">
                        <Label htmlFor="om_name">Full name</Label>
                        <Input type="text" id="om_name" value={optionalData.om_name} onChange={e => setOptionalData({
                    ...optionalData,
                    om_name: e.target.value
                  })} className="rounded-xl" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="om_role">Position/role</Label>
                        <Select value={optionalData.om_role} onValueChange={value => setOptionalData({
                    ...optionalData,
                    om_role: value
                  })}>
                          <SelectTrigger id="om_role" className="rounded-xl">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ED/CEO">ED/CEO</SelectItem>
                            <SelectItem value="Operations">Operations</SelectItem>
                            <SelectItem value="Finance">Finance</SelectItem>
                            <SelectItem value="Program">Program</SelectItem>
                            <SelectItem value="Fundraising">Fundraising</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>When do you want to start?</Label>
                        <RadioGroup value={optionalData.om_start} onValueChange={value => setOptionalData({
                    ...optionalData,
                    om_start: value
                  })}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Immediately" id="start_immediate" />
                            <Label htmlFor="start_immediate" className="font-normal cursor-pointer">
                              Immediately
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="In a few weeks" id="start_weeks" />
                            <Label htmlFor="start_weeks" className="font-normal cursor-pointer">
                              In a few weeks
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Not sure yet" id="start_unsure" />
                            <Label htmlFor="start_unsure" className="font-normal cursor-pointer">
                              Not sure yet
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="om_budget">Budget estimate</Label>
                        <Select value={optionalData.om_budget} onValueChange={value => setOptionalData({
                    ...optionalData,
                    om_budget: value
                  })}>
                          <SelectTrigger id="om_budget" className="rounded-xl">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<$5k">&lt;$5k</SelectItem>
                            <SelectItem value="$5–10k">$5–10k</SelectItem>
                            <SelectItem value="$10–20k">$10–20k</SelectItem>
                            <SelectItem value="$20–40k">$20–40k</SelectItem>
                            <SelectItem value=">$40k">&gt;$40k</SelectItem>
                            <SelectItem value="Not sure">Not sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center gap-3 pt-2 sticky bottom-0 bg-card pb-2">
                        <Button variant="outline" onClick={handleSaveOptional} disabled={isSavingOptional} className="focus:ring-2 focus:ring-primary focus:ring-offset-2">
                          {isSavingOptional ? "Saving..." : "Save details"}
                        </Button>
                        <Button variant="link" onClick={handleSkip} className="p-0 h-auto">
                          Skip for now
                        </Button>
                      </div>
                    </CollapsibleContent>}
                </Collapsible>
              </div>}

            {/* Persistent "Add details" link */}
            {showOneMorePanel && !isPanelExpanded && !saveSuccess && <div className="mt-3 text-center">
                <Button variant="link" onClick={handleExpandClick} className="p-0 h-auto text-sm">
                  Add details (30 sec)
                </Button>
              </div>}
          </div>
        </div>
      </div>
    </section>;
};