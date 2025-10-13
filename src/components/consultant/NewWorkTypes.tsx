import { Check } from "lucide-react";

const workTypes = [
  "Budgeting, forecasting, CRA-ready finance",
  "Grant tracking & fundraising systems (Airtable, Notion, etc.)",
  "Operational workflows and tool setup",
  "Strategic planning, evaluation frameworks",
  "Board governance and policy",
  "HR and role design",
  "Compliance and risk processes",
  "Data and metrics dashboards"
];

export const NewWorkTypes = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-accent/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          What kinds of work?
        </h2>

        <div className="bg-background rounded-[24px] p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {workTypes.map((type, index) => (
              <div key={index} className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{type}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
            Projects are time-bounded, scoped, and PM-supported. You focus on delivery — we handle 
            intake, payment, and client ops.
          </p>
        </div>
      </div>
    </section>
  );
};
