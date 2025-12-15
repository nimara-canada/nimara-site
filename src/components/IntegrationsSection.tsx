import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import quickbooksLogo from "@/assets/integrations/quickbooks.svg";
import slackLogo from "@/assets/integrations/slack.png";
import googleLogo from "@/assets/integrations/google.jpg";
import softrLogo from "@/assets/integrations/softr.png";
import microsoftLogo from "@/assets/integrations/microsoft-icon.png";
import mondayLogo from "@/assets/integrations/monday.png";
import bamboohrLogo from "@/assets/integrations/bamboohr.webp";
import salesforceLogo from "@/assets/integrations/salesforce.svg";

const integrations = [
  {
    name: "QuickBooks",
    subtitle: "Sync financial data automatically.",
    logo: quickbooksLogo
  },
  {
    name: "Salesforce",
    subtitle: "Connect donor and CRM data.",
    logo: salesforceLogo
  },
  {
    name: "Slack",
    subtitle: "Get updates where your team chats.",
    logo: slackLogo
  },
  {
    name: "Google Workspace",
    subtitle: "Store and share files in one place.",
    logo: googleLogo
  },
  {
    name: "Softr",
    subtitle: "Build client portals without code.",
    logo: softrLogo
  },
  {
    name: "Microsoft 365",
    subtitle: "Connect calendar, email, and productivity.",
    logo: microsoftLogo
  },
  {
    name: "Monday.com",
    subtitle: "Track tasks and project steps.",
    logo: mondayLogo
  },
  {
    name: "BambooHR",
    subtitle: "Manage employee records and HR.",
    logo: bamboohrLogo
  }
];

export const IntegrationsSection = () => {
  return (
    <section 
      className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden" 
      aria-labelledby="integrations-heading"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header - editorial style */}
        <motion.div
          className="max-w-2xl mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm tracking-widest text-slate-500 uppercase mb-4">
            Integrations
          </p>

          <h2
            id="integrations-heading"
            className="text-4xl md:text-5xl font-serif font-medium text-slate-900 leading-[1.1] mb-6"
          >
            Works with tools you already use
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Nimara connects to your existing software so your team doesn't need to change how it works.
          </p>
        </motion.div>

        {/* Integration Grid - clean, minimal cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {integrations.map((integration, index) => (
            <motion.article
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100"
            >
              {/* Logo */}
              <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-slate-50 p-2 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="font-medium text-slate-900 mb-1 text-base">
                {integration.name}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-slate-500 leading-relaxed">
                {integration.subtitle}
              </p>
            </motion.article>
          ))}
        </div>

        {/* View All CTA - minimal link style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="/integrations"
            className="group inline-flex items-center gap-2 text-slate-900 font-medium"
          >
            <span className="relative">
              View all integrations
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-slate-300 group-hover:bg-slate-900 transition-colors duration-300" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
