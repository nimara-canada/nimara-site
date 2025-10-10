import { FileText, Send, Play, Package } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Get a brief",
    description: "We send a standard brief in your focus area."
  },
  {
    number: 2,
    icon: Send,
    title: "Submit a proposal",
    description: "One template: price, timeline, outcomes, \"done\" checklist, assumptions."
  },
  {
    number: 3,
    icon: Play,
    title: "Kick off",
    description: "If selected, we set acceptance criteria and schedule with a Nimara PM."
  },
  {
    number: 4,
    icon: Package,
    title: "Deliver & hand off",
    description: "Evidence packaged; on-time pay on acceptance (net-15)."
  }
];

export const ConsultantHowItWorks = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          How it works
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A simple, transparent process from brief to payment.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
