import { CheckCircle } from "lucide-react";

const points = [
  "You remain an independent consultant",
  "Nimara provides the platform, PM, and templates",
  "We align delivery and evidence to common Canadian funder requirements",
  "We don't provide legal, tax, or assurance advice"
];

export const IndependenceCompliance = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Independence & compliance
        </h2>

        <div className="space-y-4">
          {points.map((point, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
