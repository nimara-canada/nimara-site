import { FileText, Users, BarChart3, Download } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Standard templates & checklists",
    description: "One scope, one handoff, every time.",
  },
  {
    icon: Users,
    title: "PM oversight on every engagement",
    description: "Pace, quality, acceptance.",
  },
  {
    icon: BarChart3,
    title: "Light dashboards",
    description: "Enough signal for teams and funders.",
  },
  {
    icon: Download,
    title: "Exports on demand",
    description: "CSVs and evidence packs for reviews and audits.",
  },
];

const inlineLinks = [
  { label: "Nonprofits: Get 3 free quotes", href: "/" },
  { label: "Funders: Request demo", href: "/funders" },
  { label: "Consultants: Apply to the bench", href: "/consultants" },
];

export const HowWeWork = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          How We Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 bg-background rounded-2xl shadow-sm border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {inlineLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-primary hover:underline font-medium"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
