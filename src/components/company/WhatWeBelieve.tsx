import { CheckCircle, Shield, Users, Lightbulb, MapPin } from "lucide-react";

const principles = [
  {
    icon: CheckCircle,
    title: "Proof, not hype",
    description: "Deliver, show the evidence, close clean.",
  },
  {
    icon: Shield,
    title: "Audit-ready by design",
    description: "Clear \"done\" from day one.",
  },
  {
    icon: Users,
    title: "Human first",
    description: "People do the work; tools just help.",
  },
  {
    icon: Lightbulb,
    title: "Simple beats clever",
    description: "Fewer steps, better results.",
  },
  {
    icon: MapPin,
    title: "Canada first",
    description: "Data stays in Canada; records kept 7 years.",
  },
];

export const WhatWeBelieve = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          What We Believe
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="p-6 bg-background rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
