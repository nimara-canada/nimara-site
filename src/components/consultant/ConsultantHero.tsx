import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ConsultantApplyModal } from "./ConsultantApplyModal";
import { CheckEligibilityModal } from "./CheckEligibilityModal";

export const ConsultantHero = () => {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [eligibilityModalOpen, setEligibilityModalOpen] = useState(false);

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Do good work. Start fast.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join Nimara's <strong>founding bench</strong> of Canadian experts. Standard briefs, clean scopes, PM-led delivery, on-time pay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button 
              size="lg" 
              onClick={() => setApplyModalOpen(true)}
              className="w-full sm:w-auto"
            >
              Apply to join
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setEligibilityModalOpen(true)}
              className="w-full sm:w-auto"
            >
              Check eligibility
            </Button>
          </div>

          <a 
            href="/assets/nimara-sample-brief.pdf" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Want to see the format? <span className="underline">View a sample brief</span>
          </a>
        </div>
      </section>

      <ConsultantApplyModal open={applyModalOpen} onOpenChange={setApplyModalOpen} />
      <CheckEligibilityModal open={eligibilityModalOpen} onOpenChange={setEligibilityModalOpen} />
    </>
  );
};
