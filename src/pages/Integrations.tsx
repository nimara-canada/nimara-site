import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import quickbooksLogo from "@/assets/integrations/quickbooks.svg";
import slackLogo from "@/assets/integrations/slack.svg";
import googleLogo from "@/assets/integrations/google.svg";
import softrLogo from "@/assets/integrations/softr.svg";
import outlookLogo from "@/assets/integrations/outlook.svg";
import mondayLogo from "@/assets/integrations/monday.svg";
import docusignLogo from "@/assets/integrations/docusign.svg";
import salesforceLogo from "@/assets/integrations/salesforce.svg";
import asanaLogo from "@/assets/integrations/asana.svg";

type Category = "All" | "Accounting & Finance" | "CRM & Fundraising" | "Communication" | "Productivity" | "Project Management" | "Document Management" | "No-Code Tools";

interface Integration {
  id: string;
  name: string;
  subtitle: string;
  logo: string;
  category: Category;
  description: string;
  benefits: string[];
  setupGuide: string;
}

const categories: Category[] = [
  "All",
  "Accounting & Finance",
  "CRM & Fundraising",
  "Communication",
  "Productivity",
  "Project Management",
  "Document Management",
  "No-Code Tools"
];

const integrations: Integration[] = [
  {
    id: "quickbooks",
    name: "QuickBooks",
    subtitle: "Sync financial data automatically.",
    logo: quickbooksLogo,
    category: "Accounting & Finance",
    description: "QuickBooks integration ensures your financial data flows seamlessly between your accounting system and Nimara's management platform. Maintain accurate records without manual data entry.",
    benefits: [
      "Automatic synchronization of transactions and balances",
      "Real-time visibility into financial health",
      "Reduced errors from manual data entry",
      "Simplified month-end reconciliation processes"
    ],
    setupGuide: "Connect your QuickBooks account using secure OAuth authentication. Grant Nimara read access to your financial data. The integration syncs automatically every hour to keep your records current."
  },
  {
    id: "salesforce",
    name: "Salesforce",
    subtitle: "Connect donor and CRM data.",
    logo: salesforceLogo,
    category: "CRM & Fundraising",
    description: "The Salesforce integration brings your donor relationships and CRM data into Nimara's ecosystem, enabling better stewardship and more informed decision-making across your organization.",
    benefits: [
      "Unified view of donor relationships and interactions",
      "Automated donor communication tracking",
      "Enhanced gift processing workflows",
      "Better insights into donor engagement patterns"
    ],
    setupGuide: "Authorize Nimara to connect with your Salesforce instance through their secure API. Select which objects and fields to sync (contacts, donations, campaigns). Data refreshes automatically to keep donor information up-to-date."
  },
  {
    id: "slack",
    name: "Slack",
    subtitle: "Get updates where your team chats.",
    logo: slackLogo,
    category: "Communication",
    description: "Stay informed with real-time notifications delivered directly to your Slack workspace. Keep your team aligned on important updates without switching between applications.",
    benefits: [
      "Real-time alerts for critical updates and deadlines",
      "Team collaboration on tasks without leaving Slack",
      "Customizable notification preferences by channel",
      "Quick status updates and approvals via Slack"
    ],
    setupGuide: "Install the Nimara app from the Slack App Directory to your workspace. Choose which channels receive specific notification types. Configure alert preferences for your team's workflow needs."
  },
  {
    id: "google",
    name: "Google Workspace",
    subtitle: "Store and share files in one place.",
    logo: googleLogo,
    category: "Productivity",
    description: "Connect your Google Workspace to centralize document storage, enable seamless file sharing, and maintain version control across your organization's important files.",
    benefits: [
      "Centralized document storage and management",
      "Real-time collaboration on shared files",
      "Automatic version history and backup",
      "Integrated calendar and email workflows"
    ],
    setupGuide: "Connect your Google Workspace account via OAuth. Grant permissions for Drive, Calendar, and Gmail access as needed. Select folders to sync with Nimara for organized file management."
  },
  {
    id: "softr",
    name: "Softr",
    subtitle: "Build client portals without code.",
    logo: softrLogo,
    category: "No-Code Tools",
    description: "Create custom client portals and member areas using Softr's no-code platform, powered by data from Nimara. Give stakeholders secure access to relevant information without technical complexity.",
    benefits: [
      "No-code portal creation for donors and stakeholders",
      "Secure, role-based access to information",
      "Branded experience matching your organization",
      "Real-time data sync from Nimara databases"
    ],
    setupGuide: "Link your Softr account to Nimara's data sources through API connection. Map data fields to portal views and configure access permissions. Customize the portal design to match your brand."
  },
  {
    id: "microsoft365",
    name: "Microsoft 365",
    subtitle: "Connect calendar, email, and productivity tools.",
    logo: outlookLogo,
    category: "Productivity",
    description: "Integrate Microsoft 365 to sync calendars, automate email communications, and connect productivity tools across your organization's workflow.",
    benefits: [
      "Synchronized calendars and meeting schedules",
      "Automated email workflows and templates",
      "SharePoint document integration",
      "Teams collaboration space connections"
    ],
    setupGuide: "Authenticate your Microsoft 365 account through secure OAuth. Select services to integrate (Outlook, Calendar, SharePoint, Teams). Configure sync preferences and notification settings for your workflow."
  },
  {
    id: "monday",
    name: "Monday.com",
    subtitle: "Track tasks and project steps.",
    logo: mondayLogo,
    category: "Project Management",
    description: "Connect Monday.com to track projects, manage tasks, and maintain visibility across your nonprofit's operational workflow from within Nimara's platform.",
    benefits: [
      "Centralized project and task management",
      "Visual workflow tracking and status updates",
      "Automated task assignments and reminders",
      "Cross-team collaboration and accountability"
    ],
    setupGuide: "Connect your Monday.com workspace through API authentication. Choose which boards and items to sync with Nimara. Set up automation rules to trigger updates between platforms."
  },
  {
    id: "docusign",
    name: "DocuSign",
    subtitle: "Collect secure digital signatures.",
    logo: docusignLogo,
    category: "Document Management",
    description: "Streamline document signing with DocuSign integration. Send, track, and manage legally binding signatures without printing, scanning, or mailing documents.",
    benefits: [
      "Legally binding electronic signatures",
      "Automated signature request workflows",
      "Real-time document tracking and status updates",
      "Secure audit trails for compliance"
    ],
    setupGuide: "Link your DocuSign account via OAuth connection. Configure document templates and signing workflows. Set up automatic triggers for signature requests based on Nimara workflows."
  },
  {
    id: "asana",
    name: "Asana",
    subtitle: "Manage projects and workflows.",
    logo: asanaLogo,
    category: "Project Management",
    description: "Integrate Asana to coordinate projects, assign tasks, and maintain team accountability across your nonprofit's operations from Nimara's centralized platform.",
    benefits: [
      "Streamlined project planning and execution",
      "Clear task ownership and deadlines",
      "Progress tracking across multiple initiatives",
      "Team workload balancing and capacity planning"
    ],
    setupGuide: "Authorize Nimara to access your Asana workspace through API connection. Select projects and tasks to sync. Configure bidirectional updates to keep both platforms current."
  }
];

export default function Integrations() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredIntegrations = selectedCategory === "All" 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Integrations - Nimara</title>
        <meta 
          name="description" 
          content="Connect Nimara with your existing tools. Explore integrations with QuickBooks, Salesforce, Slack, Google Workspace, and more to streamline your nonprofit operations." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Link */}
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Page Header */}
            <div className="max-w-4xl mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Integrations
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect Nimara with the tools you already use. Our integrations help your nonprofit work more efficiently by syncing data, automating workflows, and centralizing information across platforms.
              </p>
            </div>

            {/* Category Filter */}
            <div className="max-w-5xl mx-auto mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="text-sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="max-w-5xl mx-auto mb-4">
              <p className="text-sm text-muted-foreground text-center">
                Showing {filteredIntegrations.length} {filteredIntegrations.length === 1 ? 'integration' : 'integrations'}
              </p>
            </div>

            {/* Integrations Accordion */}
            <div className="max-w-5xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredIntegrations.map((integration) => (
                  <AccordionItem 
                    key={integration.id} 
                    value={integration.id}
                    className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                          <img 
                            src={integration.logo} 
                            alt={`${integration.name} logo`}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-foreground mb-1">
                            {integration.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {integration.subtitle}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-6 pt-4">
                        {/* Description */}
                        <div>
                          <p className="text-muted-foreground leading-relaxed">
                            {integration.description}
                          </p>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            Key Benefits
                          </h4>
                          <ul className="space-y-2">
                            {integration.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-primary mt-1">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Setup Guide */}
                        <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
                          <h4 className="font-semibold text-foreground mb-2">
                            Quick Setup
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {integration.setupGuide}
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* CTA Section */}
            <div className="max-w-3xl mx-auto text-center mt-16 bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Need help with integrations?
              </h2>
              <p className="text-muted-foreground mb-6">
                Our team can help you set up and optimize your integrations for maximum efficiency.
              </p>
              <a
                href="https://calendly.com/hello-nimara/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-[#7A5DE0] font-semibold px-8 py-3 rounded-xl shadow-soft transition-all min-h-[44px]"
              >
                Schedule A Call
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
