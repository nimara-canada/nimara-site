import { Shield } from "lucide-react";

const expertTypes = [
  "Former EDs/COOs",
  "CPAs/Finance leads",
  "Evaluators",
  "CRM admins",
  "Fundraising strategists",
  "Privacy/compliance advisors",
];

export const ExpertsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Who you'll work with (vetted Canadian experts)
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {expertTypes.map((type, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium"
              >
                {type}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground text-lg">
            We verify references and recent nonprofit work before anyone joins the bench.
          </p>
        </div>
      </div>
    </section>
  );
};
