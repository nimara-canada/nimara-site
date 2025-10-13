import { CheckCircle2 } from "lucide-react";
const consultantFeatures = ["Vetted for nonprofit experience (3–10+ years)", "Trained for audit-ready, EDI-informed delivery", "Based in Canada, bilingual where needed"];
export const HowItWorksSection = () => {
  return <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why It's Free</h2>
            <p className="text-foreground/90 text-lg max-w-3xl mx-auto">
              We don't do vague "consultation" calls. You get real scoping, timelines, and options from real experts — because that's how we earn your trust.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-6 text-left">Our consultants are:</h3>
            <div className="space-y-4">
              {consultantFeatures.map((feature, index) => <div key={index} className="flex items-start gap-3 text-left">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-foreground/90 text-lg">{feature}</p>
                </div>)}
            </div>
          </div>

          <p className="text-lg text-foreground/90 pt-4">You keep the quotes. We hope you choose Nimara — but you don't have to.</p>
        </div>
      </div>
    </section>;
};