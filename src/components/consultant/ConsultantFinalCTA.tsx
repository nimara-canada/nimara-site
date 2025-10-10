import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ConsultantApplyModal } from "./ConsultantApplyModal";
import { CheckEligibilityModal } from "./CheckEligibilityModal";

export const ConsultantFinalCTA = () => {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [eligibilityModalOpen, setEligibilityModalOpen] = useState(false);

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to join our founding bench?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Start working on meaningful projects with clear scopes, dedicated support, and guaranteed payment terms.
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

          <p className="text-sm text-muted-foreground">
            Questions?{" "}
            <a href="mailto:hello@nimara.ca" className="text-primary hover:underline">
              hello@nimara.ca
            </a>
          </p>
        </div>
      </section>

      <ConsultantApplyModal open={applyModalOpen} onOpenChange={setApplyModalOpen} />
      <CheckEligibilityModal open={eligibilityModalOpen} onOpenChange={setEligibilityModalOpen} />
    </>
  );
};
