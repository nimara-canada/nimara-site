import { 
  DollarSign, 
  MessageSquare, 
  Cloud, 
  Database, 
  Mail, 
  CheckSquare, 
  FileSignature, 
  Video 
} from "lucide-react";

const integrations = [
  {
    name: "QuickBooks",
    subtitle: "Sync financial data automatically.",
    icon: DollarSign,
  },
  {
    name: "Slack",
    subtitle: "Get updates where your team chats.",
    icon: MessageSquare,
  },
  {
    name: "Google Workspace",
    subtitle: "Store and share files in one place.",
    icon: Cloud,
  },
  {
    name: "Salesforce",
    subtitle: "Connect and clean your donor data.",
    icon: Database,
  },
  {
    name: "Outlook",
    subtitle: "Link your calendar and email.",
    icon: Mail,
  },
  {
    name: "Asana",
    subtitle: "Track tasks and project steps.",
    icon: CheckSquare,
  },
  {
    name: "DocuSign",
    subtitle: "Collect secure digital signatures.",
    icon: FileSignature,
  },
  {
    name: "Zoom",
    subtitle: "Schedule and run live sessions.",
    icon: Video,
  },
];

export const IntegrationsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted" aria-labelledby="integrations-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="text-center mb-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              Integrations
            </span>
          </div>

          {/* Headline */}
          <h2 
            id="integrations-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-6"
          >
            Works with the tools you already use
          </h2>

          {/* Subtitle */}
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Nimara connects to your existing software so your team does not need to change how it works.
          </p>

          {/* Integration Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {integrations.map((integration) => {
              const Icon = integration.icon;
              return (
                <article
                  key={integration.name}
                  className="bg-card rounded-2xl p-6 text-center shadow-soft border border-border hover:shadow-md transition-shadow duration-200"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-foreground mb-2 text-base">
                    {integration.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {integration.subtitle}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
