import { Check } from "lucide-react";
interface PricingSectionProps {
  onOpenPackagesWaitlist?: () => void;
}
export const PricingSection = ({
  onOpenPackagesWaitlist
}: PricingSectionProps) => {
  return <section id="pricing" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pricing, made simple — and auditable</h2>
          
          <p className="text-lg mb-4">
            Quotes are free. You only pay if you move forward with a project.
          </p>

          <p className="text-lg mb-12">
            When you do, your proposal includes one clear line for Nimara's platform and project oversight fee — so delivery is <strong>transparent, trackable, and audit-friendly.</strong>
          </p>

          <div className="border-t border-border pt-12 mb-12">
            <h3 className="text-2xl font-semibold mb-2">Single-category projects</h3>
            
            <p className="text-muted-foreground mb-6">
              (That's one area like Finance, Systems, or Strategy)
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-lg">
                <strong>Nimara project minimum cap:</strong> $1,250
              </li>
              <li className="text-lg">
                <strong>Platform & PM fee:</strong> 22–28%
              </li>
              
            </ul>
          </div>

          <div className="border-t border-border pt-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-primary" />
              What the Nimara fee covers:
            </h3>
            
            <ul className="space-y-3">
              <li className="text-lg">
                Briefing + consultant matching
              </li>
              <li className="text-lg">
                Light project management (oversight, check-ins)
              </li>
              <li className="text-lg">
                Secure payment + records
              </li>
              <li className="text-lg">
                Final delivery confirmation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
};