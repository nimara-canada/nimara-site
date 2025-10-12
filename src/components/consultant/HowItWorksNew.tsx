import { Send, Phone, FileText } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Send,
    title: "Submit interest",
    description: "Share your category, samples, and availability (Typeform)."
  },
  {
    number: 2,
    icon: Phone,
    title: "Quick screen",
    description: "Short call + references when there's a fit."
  },
  {
    number: 3,
    icon: FileText,
    title: "First brief",
    description: "When demand opens, you'll get a scoped opportunity with timelines and acceptance."
  }
];

export const HowItWorksNew = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          How it works
        </h2>
        
        <p className="text-center text-muted-foreground mb-12">
          Three simple steps to join our roster
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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

        <div className="bg-[#ACFCE3]/20 border-l-4 border-[#ACFCE3] p-4 rounded">
          <p className="text-sm text-muted-foreground">
            If your category is quiet, we'll keep you on the waitlist and check in as demand builds.
          </p>
        </div>
      </div>
    </section>
  );
};
