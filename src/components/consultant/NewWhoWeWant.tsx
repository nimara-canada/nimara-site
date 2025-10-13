import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fitCriteria = [
  "You have 3–10+ years of experience in nonprofit, public, or consulting work",
  "You're independent, but collaborative",
  "You have deep subject-matter expertise (and can explain it in plain language)",
  "You deliver audit-ready work — not vibes",
  "You care about EDI in practice, not just in theory"
];

const notForCriteria = [
  "If you're new to consulting and figuring it out",
  "If you ghost clients, overpromise, or can't hit deadlines",
  "If you think 'mission' excuses poor execution"
];

export const NewWhoWeWant = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="border-border rounded-[20px] shadow-sm bg-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                You might be a fit if:
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {fitCriteria.map((criterion, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{criterion}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border rounded-[20px] shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Who this is NOT for:
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {notForCriteria.map((criterion, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{criterion}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-foreground font-medium text-lg">
          This bench is built for people who want to do the work — and do it well.
        </p>
      </div>
    </section>
  );
};
