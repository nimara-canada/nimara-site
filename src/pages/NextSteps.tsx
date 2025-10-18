import { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Check } from "lucide-react";
import { OptionalInfoModal, type OptionalData } from "@/components/OptionalInfoModal";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function NextSteps() {
  const [showOptionalModal, setShowOptionalModal] = useState(false);
  const optionalButtonRef = useRef<HTMLButtonElement>(null);

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
      (window as any).gtag("event", "next_steps_optional_details_submitted", {
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
      (window as any).gtag("event", "next_steps_optional_details_opened");
    }
    setShowOptionalModal(true);
  };

  const handleOptionalClose = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "next_steps_optional_details_skipped");
    }
    setShowOptionalModal(false);
  };

  // Track page view
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "next_steps_viewed");
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

      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="bg-[hsl(var(--nim-navy))] text-white py-12">
          <div className="mx-auto max-w-[880px] px-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(var(--nim-mint))] flex items-center justify-center">
                <Check className="w-6 h-6 text-[hsl(var(--nim-navy))]" strokeWidth={3} />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                  Thanks—your request is in.
                </h1>
                <p className="text-lg opacity-90">
                  Expect a quick scoping call within 48 hours so we can match you with the right consultant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="mx-auto max-w-[880px] px-5 py-12 space-y-12">
          
          {/* What Happens Next */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--nim-navy))] mb-6">
              What happens next
            </h2>
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[hsl(var(--nim-purple))] text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(var(--nim-navy))] mb-1">
                    Scoping call (15–20 min)
                  </h3>
                  <p className="text-[hsl(var(--nim-slate))]">
                    We confirm goals, budget range, timeline, and any constraints. Plain English is perfect.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[hsl(var(--nim-purple))] text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(var(--nim-navy))] mb-1">
                    We shortlist vetted consultants
                  </h3>
                  <p className="text-[hsl(var(--nim-slate))]">
                    We send up to 3 comparable proposals you can review side-by-side.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[hsl(var(--nim-purple))] text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(var(--nim-navy))] mb-1">
                    You choose; we oversee delivery
                  </h3>
                  <p className="text-[hsl(var(--nim-slate))]">
                    Nimara provides PM oversight and audit-ready documentation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Schedule Call CTA */}
          <section className="rounded-2xl border border-[hsl(var(--nim-mist))] bg-white p-6 sm:p-8 shadow-soft">
            <h2 className="text-xl font-bold text-[hsl(var(--nim-navy))] mb-3">
              Schedule your scoping call
            </h2>
            <p className="text-[hsl(var(--nim-slate))] mb-6">
              Book a time that works for you, or we'll reach out within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleScheduleCallClick}
                className="inline-flex items-center justify-center rounded-xl bg-[hsl(var(--nim-purple))] px-6 py-3 font-bold text-white hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nim-purple))] focus:ring-offset-2 min-h-[44px]"
              >
                Schedule my scoping call
              </button>
              <a
                href="mailto:support@nimara.ca"
                className="inline-flex items-center justify-center rounded-xl border border-[hsl(var(--nim-mist))] bg-white px-6 py-3 font-semibold text-[hsl(var(--nim-navy))] hover:bg-[hsl(var(--nim-cloud))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nim-purple))] focus:ring-offset-2 min-h-[44px]"
              >
                Prefer email? We'll reach out
              </a>
            </div>
          </section>

          {/* Optional Info Card */}
          <section className="rounded-2xl border border-[hsl(var(--nim-mint))] bg-[hsl(162,91%,97%)] p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[hsl(var(--nim-navy))] mb-2">
              Improve your match (optional)
            </h2>
            <p className="text-[hsl(var(--nim-slate))] mb-4">
              Share a few details—takes ~30 seconds.
            </p>
            <button
              ref={optionalButtonRef}
              onClick={handleOptionalOpen}
              className="inline-flex items-center justify-center rounded-xl bg-[hsl(var(--nim-purple))] px-6 py-3 font-bold text-white hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nim-purple))] focus:ring-offset-2 min-h-[44px]"
            >
              Add details (30s)
            </button>
            <p className="text-xs text-[hsl(var(--nim-slate))] mt-3">
              Skipping won't affect your request.
            </p>
          </section>

          {/* Trust Strip */}
          <div className="text-center text-sm text-[hsl(var(--nim-slate))]">
            Data in Canada • Records kept 7 years • Vetted senior consultants • PM oversight
          </div>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-[hsl(var(--nim-navy))] mb-6">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold text-[hsl(var(--nim-navy))]">
                  How fast are quotes?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--nim-slate))]">
                  Typically 3–5 business days after the scoping call.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold text-[hsl(var(--nim-navy))]">
                  Do I have to pick one of the consultants?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--nim-slate))]">
                  No—there's no obligation. Review the proposals and choose what works best for your organization.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold text-[hsl(var(--nim-navy))]">
                  Is there a cost for getting quotes?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--nim-slate))]">
                  No—quotes are free. You only pay if you choose to work with one of our consultants.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold text-[hsl(var(--nim-navy))]">
                  What if my need is urgent?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--nim-slate))]">
                  Tell us in the scoping call—we can fast-track matches for time-sensitive projects.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Contact */}
          <div className="text-center text-sm text-[hsl(var(--nim-slate))]">
            Questions? Email{" "}
            <a
              href="mailto:support@nimara.ca"
              className="text-[hsl(var(--nim-purple))] hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nim-purple))] focus:ring-offset-2 rounded"
            >
              support@nimara.ca
            </a>
          </div>
        </div>
      </div>

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
