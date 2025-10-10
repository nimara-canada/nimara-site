import { FileText, Send, CheckSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const documents = [
  {
    icon: FileText,
    title: "Sample brief",
    description: "goal, scope, \"done\" list",
    link: "/assets/nimara-sample-brief.pdf"
  },
  {
    icon: Send,
    title: "Proposal template",
    description: "price, timeline, outcomes, assumptions",
    link: "/assets/nimara-proposal-template.pdf"
  },
  {
    icon: CheckSquare,
    title: "Handoff checklist",
    description: "deliverables, approvals, evidence index",
    link: "/assets/nimara-handoff-checklist.pdf"
  }
];

export const WhatYoullSee = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
          What you'll see
        </h2>
        
        <p className="text-center text-muted-foreground mb-12">
          Preview the documents and templates you'll work with.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <a 
                key={index} 
                href={doc.link}
                className="block transition-transform hover:scale-105"
              >
                <Card className="border-2 h-full hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {doc.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
