import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

import slackLogo from "@/assets/integrations/slack.svg";
import quickbooksLogo from "@/assets/integrations/quickbooks.svg";
import stripeLogo from "@/assets/integrations/stripe.svg";
import mondayLogo from "@/assets/integrations/monday.svg";
import googleLogo from "@/assets/integrations/google.svg";
import calendarLogo from "@/assets/integrations/google-calendar.svg";

const tools = [
  { name: "Slack", logo: slackLogo, category: "Communication" },
  { name: "QuickBooks", logo: quickbooksLogo, category: "Payroll & Accounting" },
  { name: "Stripe", logo: stripeLogo, category: "Payments" },
  { name: "Monday.com", logo: mondayLogo, category: "Project Tracking" },
  { name: "Google Suite", logo: googleLogo, category: "Productivity" },
  { name: "Calendar", logo: calendarLogo, category: "Scheduling" },
];

export const IntegrationsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-background overflow-hidden" 
      aria-labelledby="integrations-heading"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Integrations
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="integrations-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Works With Your
            <br />
            <span className="font-normal italic text-muted-foreground">Existing Tools</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-lg"
          >
            No big switch. We connect to what you already use and help you make it work better.
          </motion.p>
        </div>

        {/* Tool Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-12"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              className="group relative flex flex-col items-center justify-center p-6 lg:p-8 rounded-2xl border border-border bg-background hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
            >
              <motion.div 
                className="relative w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                animate={{ 
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-xl scale-150 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`}
                  className="relative w-full h-full object-contain"
                />
              </motion.div>
              <span className="text-sm font-medium text-foreground text-center">
                {tool.name}
              </span>
              <span className="text-[10px] text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tool.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-border"
        >
          <Link
            to="/integrations"
            className="group inline-flex items-center gap-3 text-foreground font-medium"
          >
            <span className="group-hover:text-primary transition-colors">See all integrations</span>
            <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};