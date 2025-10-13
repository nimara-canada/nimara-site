const steps = [
  {
    number: "1",
    title: "You tell us what's broken",
    description: "Budget, systems, compliance, etc.",
  },
  {
    number: "2",
    title: "We match you with 3 quote options",
    description: "From vetted consultants on our bench",
  },
  {
    number: "3",
    title: "You get to compare",
    description: "Approaches, timelines, and pricing — all for free",
  },
];

export const ThreeColumnSection = () => {
  const scrollToForm = () => {
    const form = document.getElementById("form_3quotes");
    form?.scrollIntoView({ behavior: "smooth" });
    
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'needs_help_link_click', {
        target: 'quotes'
      });
    }
  };

  const handleEmailClick = () => {
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'needs_help_link_click', {
        target: 'email'
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What You Get
        </h2>
        <p className="text-center text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
          Here's how it works
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-[0_8px_24px_rgba(32,38,84,0.08)] space-y-4"
            >
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center">
                {step.title}
              </h3>
              <p className="text-foreground/80 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-foreground/90 max-w-2xl mx-auto">
          💡 No pressure. No sales calls. Just real solutions you can act on.
        </p>
      </div>
    </section>
  );
};
