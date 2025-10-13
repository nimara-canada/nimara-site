const steps = [
  "You fill out a quick eligibility form",
  "We review your experience & alignment",
  "If it's a fit, we set up a short vetting call",
  "Once onboarded, you get access to scoped project briefs",
  "If selected, you deliver. We back you up."
];

export const NewHowItWorks = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          How it works
        </h2>

        <div className="space-y-6 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <p className="text-foreground text-lg pt-2">{step}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          You decide what projects you take. No quotas. No hidden fees. No shady admin.
        </p>
      </div>
    </section>
  );
};
