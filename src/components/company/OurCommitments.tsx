import { CheckCircle } from "lucide-react";

const commitments = [
  {
    title: "Plain language.",
    description: "Forms, briefs, and reports you can read at a glance.",
  },
  {
    title: "Privacy by default.",
    description: "Canada-hosted services; careful with data; no sensitive pasting into AI tools.",
  },
  {
    title: "Equity & access.",
    description: "Templates and timelines that work for small teams.",
  },
  {
    title: "Open hand, not lock-in.",
    description: "You can export your files anytime.",
  },
  {
    title: "Give back.",
    description: "We publish starter policies, checklists, and short guides—free to use, not legal advice.",
  },
];

export const OurCommitments = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Our commitments to the sector
        </h2>
        
        <div className="space-y-4">
          {commitments.map((commitment, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {commitment.title}
                </h3>
                <p className="text-muted-foreground">
                  {commitment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
