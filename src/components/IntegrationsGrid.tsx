import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Import logos
import slackLogo from "@/assets/integrations/slack.svg";
import quickbooksLogo from "@/assets/integrations/quickbooks.svg";
import mondayLogo from "@/assets/integrations/monday.svg";
import googleLogo from "@/assets/integrations/google.svg";
import asanaLogo from "@/assets/integrations/asana.svg";
import docusignLogo from "@/assets/integrations/docusign.svg";
import salesforceLogo from "@/assets/integrations/salesforce.svg";
import zoomLogo from "@/assets/integrations/zoom.svg";
import sageLogo from "@/assets/integrations/sage50.svg";
import xeroLogo from "@/assets/integrations/xero.svg";
import mailchimpLogo from "@/assets/integrations/mailchimp.svg";
import notionLogo from "@/assets/integrations/notion.svg";
import surveymonkeyLogo from "@/assets/integrations/surveymonkey.svg";
import blackbaudLogo from "@/assets/integrations/blackbaud.svg";
import microsoftLogo from "@/assets/integrations/microsoft-icon.png";
import dextLogo from "@/assets/integrations/dext.svg";
import plootoLogo from "@/assets/integrations/plooto.svg";
import canadahelpsLogo from "@/assets/integrations/canadahelps.svg";
import keelaLogo from "@/assets/integrations/keela.svg";
import betterImpactLogo from "@/assets/integrations/better-impact.svg";
import diligentLogo from "@/assets/integrations/diligent.svg";

// Categories with their tools
const categories = [
  {
    id: "all",
    name: "All Tools",
    description: "View all 20+ integrations",
  },
  {
    id: "productivity",
    name: "Productivity",
    description: "Collaboration and document tools",
  },
  {
    id: "communication",
    name: "Communication",
    description: "Messaging and video conferencing",
  },
  {
    id: "accounting",
    name: "Accounting & Finance",
    description: "Financial management and payments",
  },
  {
    id: "crm",
    name: "CRM & Fundraising",
    description: "Donor management and fundraising",
  },
  {
    id: "governance",
    name: "Governance",
    description: "Board management and compliance",
  },
  {
    id: "projects",
    name: "Projects",
    description: "Project and task management",
  },
  {
    id: "marketing",
    name: "Marketing & Surveys",
    description: "Email marketing and data collection",
  },
  {
    id: "volunteers",
    name: "Volunteers",
    description: "Volunteer management",
  },
];

const tools = [
  { name: "Microsoft 365", logo: microsoftLogo, category: "productivity", description: "Email, documents, and collaboration" },
  { name: "Google Workspace", logo: googleLogo, category: "productivity", description: "Gmail, Drive, Docs, and more" },
  { name: "Notion", logo: notionLogo, category: "productivity", description: "Notes and knowledge base" },
  { name: "Zoom", logo: zoomLogo, category: "communication", description: "Video conferencing" },
  { name: "Slack", logo: slackLogo, category: "communication", description: "Team messaging" },
  { name: "QuickBooks", logo: quickbooksLogo, category: "accounting", description: "Accounting software" },
  { name: "Sage", logo: sageLogo, category: "accounting", description: "Accounting and payroll" },
  { name: "Xero", logo: xeroLogo, category: "accounting", description: "Cloud accounting" },
  { name: "Dext", logo: dextLogo, category: "accounting", description: "Expense management" },
  { name: "Plooto", logo: plootoLogo, category: "accounting", description: "Payment automation" },
  { name: "Keela", logo: keelaLogo, category: "crm", description: "Nonprofit CRM" },
  { name: "Salesforce", logo: salesforceLogo, category: "crm", description: "CRM and donor management" },
  { name: "Blackbaud", logo: blackbaudLogo, category: "crm", description: "Fundraising platform" },
  { name: "CanadaHelps", logo: canadahelpsLogo, category: "crm", description: "Online donations" },
  { name: "Diligent Boards", logo: diligentLogo, category: "governance", description: "Board management" },
  { name: "DocuSign", logo: docusignLogo, category: "governance", description: "Electronic signatures" },
  { name: "Asana", logo: asanaLogo, category: "projects", description: "Project management" },
  { name: "monday.com", logo: mondayLogo, category: "projects", description: "Work management" },
  { name: "Mailchimp", logo: mailchimpLogo, category: "marketing", description: "Email marketing" },
  { name: "SurveyMonkey", logo: surveymonkeyLogo, category: "marketing", description: "Surveys and forms" },
  { name: "Better Impact", logo: betterImpactLogo, category: "volunteers", description: "Volunteer management" },
];

const ToolCard = ({ tool, index }: { tool: typeof tools[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="group relative bg-white border border-border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Logo */}
      <div className="w-12 h-12 mb-4 flex items-center justify-center">
        <img 
          src={tool.logo} 
          alt={`${tool.name} logo`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
        {tool.name}
      </h3>
      <p className="text-sm text-muted-foreground">
        {tool.description}
      </p>
      
      {/* Hover indicator */}
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
    </motion.div>
  );
};

export const IntegrationsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTools = activeCategory === "all" 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  const activeLabel = categories.find(c => c.id === activeCategory);

  return (
    <section className="mb-20">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Explore by Category
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            {tools.length} tools
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          All Supported Tools
        </h2>
        <p className="text-muted-foreground">
          Filter by category to find the tools you use
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              activeCategory === category.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {category.name}
            {activeCategory === category.id && (
              <span className="ml-2 text-primary-foreground/70">
                ({filteredTools.length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Category Description */}
      {activeLabel && activeLabel.id !== "all" && (
        <p className="text-sm text-muted-foreground mb-6 italic">
          {activeLabel.description}
        </p>
      )}

      {/* Tools Grid */}
      <motion.div 
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        {filteredTools.map((tool, index) => (
          <ToolCard key={tool.name} tool={tool} index={index} />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredTools.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No tools found in this category.</p>
        </div>
      )}

      {/* Footer Note */}
      <p className="text-center text-xs text-muted-foreground/60 mt-8">
        All product names and logos are trademarks of their respective owners.
      </p>
    </section>
  );
};
