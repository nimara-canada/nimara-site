import { CheckCircle } from "lucide-react";

const requirements = [
  {
    title: "Canadian nonprofit experience",
    description: "3+ relevant projects in your category"
  },
  {
    title: "Proof of delivery",
    description: "2 references and a sample close-out or artifact binder"
  },
  {
    title: "Professional setup",
    description: "Able to invoice; Canada-based preferred"
  },
  {
    title: "Data hygiene",
    description: "Canada-hosted tools where possible; no sensitive pasting; follow simple evidence rules"
  },
  {
    title: "Cadence",
    description: "Comfortable with light PM check-ins and acceptance criteria"
  },
  {
    title: "Reliability",
    description: "Clear availability; respect deadlines; plain-language communication"
  },
  {
    title: "Values",
    description: "Equity-minded, privacy-aware, accessible by default (labels, alt text, readable docs)"
  }
];

export const WhoShouldApplyNew = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Who should apply
        </h2>

        <div className="space-y-6 mb-8">
          {requirements.map((req, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {req.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {req.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center">
          If you're early in your practice, you can still check eligibility to see if we're a fit.
        </p>
      </div>
    </section>
  );
};
