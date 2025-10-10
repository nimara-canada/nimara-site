import { FileText, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: FileText,
    title: "Standard briefs",
    description: "Clear scope, outcomes, and a plain \"done\" checklist from day one."
  },
  {
    icon: Zap,
    title: "Start quickly",
    description: "Comparable proposals in a simple template; no 30-page RFPs."
  },
  {
    icon: Users,
    title: "PM on every engagement",
    description: "You focus on delivery; we handle coordination and acceptance."
  }
];

export const WhyJoin = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Why join our founding bench?
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience the efficiency of working with clear processes, dedicated support, and transparent payment terms.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center">
          <p className="text-sm text-foreground">
            <strong>Founding cohort helps shape templates and workflow.</strong> Your feedback matters.
          </p>
        </div>
      </div>
    </section>
  );
};
