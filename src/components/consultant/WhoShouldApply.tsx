import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckEligibilityModal } from "./CheckEligibilityModal";

const criteria = [
  "3+ relevant nonprofit projects in Canada in your focus area (last 3 years)",
  "2 references we can contact",
  "Plain-English proposals (price, timeline, outcomes, \"done\" checklist, assumptions)",
  "Reliable availability (immediate, <30 days, or 30–60 days)",
  "Data handling basics (store files in Canada; follow our handoff checklist)",
  "PM-led delivery (you're comfortable working with a Nimara PM)",
  "Business ready (can invoice; agree to on-time net-15 on acceptance)"
];

export const WhoShouldApply = () => {
  const [eligibilityModalOpen, setEligibilityModalOpen] = useState(false);

  return (
    <>
      <section id="eligibility" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
            Who should apply
          </h2>
          
          <p className="text-center text-muted-foreground mb-12">
            High-level fit criteria to help you determine if Nimara's founding bench is a good match.
          </p>

          <div className="space-y-4 mb-8">
            {criteria.map((criterion, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground">{criterion}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setEligibilityModalOpen(true)}
            >
              Check eligibility
            </Button>
          </div>
        </div>
      </section>

      <CheckEligibilityModal open={eligibilityModalOpen} onOpenChange={setEligibilityModalOpen} />
    </>
  );
};
