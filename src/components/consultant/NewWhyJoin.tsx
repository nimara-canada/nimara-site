import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  "You get real projects — not 'maybe' calls or endless RFPs.",
  "We scope + vet all briefs before they reach you.",
  "You only take on what fits your skills and schedule.",
  "You stay freelance — but never alone.",
  "You join a bench of people who care about quality and equity."
];

export const NewWhyJoin = () => {
  return (
    <section id="why-join" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Why join the Nimara bench?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border rounded-[20px] shadow-sm">
              <CardContent className="p-6">
                <p className="text-foreground">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm md:text-base max-w-3xl mx-auto">
          This is not a staffing agency. It's a curated platform for real consultants who actually deliver.
        </p>
      </div>
    </section>
  );
};
