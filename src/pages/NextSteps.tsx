import { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Check } from "lucide-react";
import { OptionalInfoModal, type OptionalData } from "@/components/OptionalInfoModal";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function NextSteps() {
  const [showOptionalModal, setShowOptionalModal] = useState(false);
  const optionalButtonRef = useRef<HTMLButtonElement>(null);

  // Set initial focus to the optional card button on page load
  useState(() => {
    const timer = setTimeout(() => {
      optionalButtonRef.current?.focus();
    }, 150);
    return () => clearTimeout(timer);
  });

  const handleSaveOptional = async (data: OptionalData) => {
    const payload = {
      flow: "3quotes_more",
      note: data.om_note,
      start: data.om_start,
      budget: data.om_budget,
      utm_source: new URLSearchParams(window.location.search).get("utm_source"),
      utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
      utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
    };

    // POST to webhook (replace with actual endpoint)
    const response = await fetch("https://example.com/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to save");
    }

    // Track analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "next_steps_optional_submitted", {
        start: data.om_start,
        budget: data.om_budget,
      });
    }

    toast.success("Thanks — we've added this to your request.");
  };

  const handleScheduleCallClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "next_steps_schedule_call_clicked");
    }
    // Navigate to booking page or open link
    window.open("/book-a-call", "_blank");
  };

  const handleOptionalOpen = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "next_steps_optional_opened");
      (window as any).gtag("event", "next_steps_improve_match_clicked");
    }
    setShowOptionalModal(true);
  };

  const handleOptionalClose = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "next_steps_optional_skipped");
    }
    setShowOptionalModal(false);
  };

  // Track page view and improve match card viewed
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "next_steps_viewed");
    (window as any).gtag("event", "next_steps_improve_match_viewed");
  }

  return (
    <>
      <Helmet>
        <title>Next steps for your Nimara quotes</title>
        <meta
          name="description"
          content="Thanks—here's what happens next. We'll book a quick scoping call, confirm your brief, and send up to 3 consultant quotes."
        />
      </Helmet>

      <Header activeRoute="/next-steps" />

      <main id="main" className="min-h-screen bg-background">
        {/* Success Line */}
        <section className="bg-background pt-12 sm:pt-16 pb-6">
          <div className="mx-auto max-w-[1240px] px-5">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nim-mint flex items-center justify-center">
                <Check className="w-5 h-5 text-nim-navy" strokeWidth={3} />
              </div>
              <p className="text-lg font-semibold text-foreground">
                Thanks—your request is in.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="mx-auto max-w-[1240px] px-5 pb-12 sm:pb-16 space-y-12 sm:space-y-14">
          
          {/* Optional Info Card - Immediate Next Step */}
          <section className="rounded-2xl border-2 border-nim-mint bg-nim-mint/5 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="bg-nim-mint text-nim-navy font-semibold">
                Optional
              </Badge>
            </div>
            <h2 className="text-xl font-bold text-nim-navy mb-2">
              Improve your match (30s)
            </h2>
            <p className="text-muted-foreground mb-6">
              Share a few details—totally optional.
            </p>
            <button
              ref={optionalButtonRef}
              onClick={handleOptionalOpen}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px]"
            >
              Add details (30s)
            </button>
            <p className="text-xs text-muted-foreground mt-4">
              Skipping won't affect your request.
            </p>
          </section>

          {/* What Happens Next */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What happens next
            </h2>
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Scoping call (15–20 min)
                  </h3>
                  <p className="text-muted-foreground">
                    We confirm goals, budget range, and timeline.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    We shortlist vetted consultants
                  </h3>
                  <p className="text-muted-foreground">
                    You get up to 3 comparable proposals.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    You choose; we oversee delivery
                  </h3>
                  <p className="text-muted-foreground">
                    PM oversight and audit-ready files.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Schedule Call CTA */}
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft">
            <h2 className="text-xl font-bold text-card-foreground mb-3">
              Schedule your scoping call
            </h2>
            <p className="text-muted-foreground mb-6">
              Book a time that works for you, or we'll reach out within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleScheduleCallClick}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[44px]"
              >
                Schedule my scoping call
              </button>
              <a
                href="mailto:support@nimara.ca"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 font-semibold text-card-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[44px]"
              >
                Prefer email? We'll reach out within 48 hours
              </a>
            </div>
          </section>

          {/* Trust Strip */}
          <div className="text-center text-sm text-muted-foreground">
            Data in Canada • Records kept 7 years • Vetted senior consultants • PM oversight
          </div>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold text-foreground">
                  How fast are quotes?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Typically 3–5 business days after the scoping call.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold text-foreground">
                  Do I have to pick one of the consultants?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No—there's no obligation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold text-foreground">
                  Is there a cost for getting quotes?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No—quotes are free.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold text-foreground">
                  What if my need is urgent?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Tell us in the call—we can fast-track matches.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Contact */}
          <div className="text-center text-sm text-muted-foreground">
            Questions? Email{" "}
            <a
              href="mailto:support@nimara.ca"
              className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
            >
              support@nimara.ca
            </a>
          </div>
        </div>
      </main>

      <Footer />

      {/* Optional Info Modal */}
      <OptionalInfoModal
        isOpen={showOptionalModal}
        onClose={handleOptionalClose}
        onSave={handleSaveOptional}
        returnFocusRef={optionalButtonRef}
      />
    </>
  );
}
