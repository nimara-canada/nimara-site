import { UserCheck, FileText, FolderCheck } from "lucide-react";

const benefits = [
  {
    icon: UserCheck,
    title: "PM oversight on pace and quality",
  },
  {
    icon: FileText,
    title: "Standard templates for scope, acceptance, handoff",
  },
  {
    icon: FolderCheck,
    title: "Evidence-ready files (deliverables, approvals, simple index)",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            What you get on every project
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 space-y-4 text-center"
              >
                <div className="flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <p className="font-medium">{benefit.title}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/30 border border-accent rounded-xl p-4 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Data stored in Canada</span> · Records
              kept 7 years
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
