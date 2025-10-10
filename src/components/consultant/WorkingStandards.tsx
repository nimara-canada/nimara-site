import { Database, Shield, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const standards = [
  {
    icon: Database,
    title: "Data & records",
    description: "Project data stays in Canada; records kept 7 years."
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "We align delivery and evidence to most Canadian funders' requirements."
  },
  {
    icon: CheckCircle,
    title: "Quality",
    description: "A Nimara PM reviews milestones and acceptance before close-out."
  }
];

export const WorkingStandards = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
          Working standards
        </h2>
        
        <p className="text-center text-muted-foreground mb-12">
          Plain English commitments that protect everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {standards.map((standard, index) => {
            const Icon = standard.icon;
            return (
              <Card key={index} className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {standard.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {standard.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
