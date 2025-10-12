import { Target, FileCheck, Users, FileText, DollarSign, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Target,
    title: "Qualified nonprofit leads (Canada-first)",
    description: "Work with vetted Canadian nonprofits ready for your expertise."
  },
  {
    icon: FileCheck,
    title: "Standard briefs with clear acceptance",
    description: "Know exactly what success looks like before you start."
  },
  {
    icon: Users,
    title: "PM oversight to keep delivery on track",
    description: "A Nimara PM ensures smooth execution and milestone reviews."
  },
  {
    icon: FileText,
    title: "Simple paperwork, lightweight SOWs",
    description: "No complex contracts—just clear, simple agreements."
  },
  {
    icon: DollarSign,
    title: "Net-15 payment after acceptance",
    description: "Get paid within 15 days of project acceptance."
  },
  {
    icon: Wrench,
    title: "Independence: no exclusivity; bring your tools",
    description: "Stay independent. Use your tools. Work your way."
  }
];

export const WhatYouGet = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          What you'll get
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
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
