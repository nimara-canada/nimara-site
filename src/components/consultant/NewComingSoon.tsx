import { Check } from "lucide-react";

const perks = [
  "Peer learning sessions",
  "Shared resources (templates, tools)",
  "Preferred vendor access",
  "Co-branded proposal support"
];

export const NewComingSoon = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-accent/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Coming soon: Consultant packages & perks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {perks.map((perk, index) => (
            <div key={index} className="flex gap-3 items-center">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-foreground">{perk}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground font-medium">
          Want in early? Now's the time to apply.
        </p>
      </div>
    </section>
  );
};
