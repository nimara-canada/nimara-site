import { Card, CardContent } from "@/components/ui/card";
import { CheckSquare, Shield, Users, Heart } from "lucide-react";

const expectations = [
  {
    icon: CheckSquare,
    text: "Deliver to the acceptance list and keep evidence tidy"
  },
  {
    icon: Shield,
    text: "Follow data rules and privacy basics"
  },
  {
    icon: Users,
    text: "Join light check-ins with the Nimara PM"
  },
  {
    icon: Heart,
    text: "Be on time, be kind, ship the work"
  }
];

export const ExpectationsNew = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Expectations
        </h2>
        
        <p className="text-center text-muted-foreground mb-12">
          Plain commitments that protect everyone
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {expectations.map((expectation, index) => {
            const Icon = expectation.icon;
            return (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground pt-2">
                      {expectation.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
