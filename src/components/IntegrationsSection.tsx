import { ArrowRight } from "lucide-react";
import quickbooksLogo from "@/assets/integrations/quickbooks.svg";
import slackLogo from "@/assets/integrations/slack.png";
import googleLogo from "@/assets/integrations/google.jpg";
import softrLogo from "@/assets/integrations/softr.png";
import microsoftLogo from "@/assets/integrations/microsoft-icon.png";
import mondayLogo from "@/assets/integrations/monday.png";
import bamboohrLogo from "@/assets/integrations/bamboohr.webp";
import salesforceLogo from "@/assets/integrations/salesforce.svg";
const integrations = [{
  name: "QuickBooks",
  subtitle: "Sync financial data automatically.",
  logo: quickbooksLogo
}, {
  name: "Salesforce",
  subtitle: "Connect donor and CRM data.",
  logo: salesforceLogo
}, {
  name: "Slack",
  subtitle: "Get updates where your team chats.",
  logo: slackLogo
}, {
  name: "Google Workspace",
  subtitle: "Store and share files in one place.",
  logo: googleLogo
}, {
  name: "Softr",
  subtitle: "Build client portals without code.",
  logo: softrLogo
}, {
  name: "Microsoft 365",
  subtitle: "Connect calendar, email, and productivity tools.",
  logo: microsoftLogo
}, {
  name: "Monday.com",
  subtitle: "Track tasks and project steps.",
  logo: mondayLogo
}, {
  name: "BambooHR",
  subtitle: "Manage employee records and HR workflows.",
  logo: bamboohrLogo
}];
export const IntegrationsSection = () => {
  return <section className="py-16 md:py-24 lg:py-32 bg-muted" aria-labelledby="integrations-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="text-center mb-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              Integrations
            </span>
          </div>

          {/* Headline */}
          <h2 id="integrations-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-6">
            Works with the tools you already use
          </h2>

          {/* Subtitle */}
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Nimara connects to your existing software so your team does not need to change how it works.
          </p>

          {/* Integration Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {integrations.map(integration => {
            return <article key={integration.name} className="bg-card rounded-2xl p-6 text-center shadow-soft border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  {/* Logo */}
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <img src={integration.logo} alt={`${integration.name} logo`} className="w-10 h-10 object-contain" />
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-foreground mb-2 text-base">
                    {integration.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {integration.subtitle}
                  </p>
                </article>;
          })}
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <a href="/integrations" className="inline-flex items-center gap-2 text-base font-semibold text-primary hover:text-primary/80 transition-colors duration-200">
              View all integrations
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};