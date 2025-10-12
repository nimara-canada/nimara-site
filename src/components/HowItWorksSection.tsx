import { ClipboardList, FileText, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Scope (≈10 minutes)",
    description: "We turn your outcome into a simple, standard brief.",
  },
  {
    icon: FileText,
    title: "Up to 3 proposals (72 hours)",
    description: "Comparable quotes: price, timeline, outcomes, \"done\" checklist.",
  },
  {
    icon: CheckCircle2,
    title: "Pick & proceed (PM oversight)",
    description: "You choose; a Nimara PM runs delivery and quality.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-muted-foreground text-lg">
              Three simple steps to get your project done right.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <step.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground italic">
            Note: No RFP needed for quotes.
          </p>
        </div>
      </div>
    </section>
  );
};
