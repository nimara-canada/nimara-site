import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CALENDLY_BOOKING_URL } from "@/constants/urls";

const glossaryTerms = [
  {
    term: "NOHC",
    fullName: "Nimara Organizational Health Check",
    definition:
      "A Structured Assessment That Scores Your Nonprofit Across 7 Domains: Governance, Finance, HR, Programs, Fundraising, Volunteers, And Systems & Data. It Takes 2–3 Weeks And Shows Where Each System Sits On The Tier Ladder.",
  },
  {
    term: "Tier",
    fullName: "Organizational Health Tier (0–4)",
    definition:
      "A Score From 0 To 4 That Describes How Mature A System Is. Tier 0 Means 'Not Yet Built,' Tier 2 Means 'Functional But Fragile,' And Tier 4 Means 'Running Smoothly At Scale.' We Help You Move Up One Tier At A Time.",
  },
  {
    term: "Bundle",
    fullName: "System Bundle",
    definition:
      "A Package Of Policies, Templates, Trackers, And Step-By-Step Guides Designed To Install Or Upgrade One System Area. Each Bundle Is A Short, Focused Project With Clear Deliverables.",
  },
  {
    term: "Acceptance Bundle",
    fullName: "Acceptance Bundle",
    definition:
      "The Final Set Of Files, Tools, And Routines You Receive At The End Of A Project. Everything Is Ready To Use — No 'Advice Only.' Your Team Can Run These Systems Without Us.",
  },
  {
    term: "Path A",
    fullName: "Fast Help",
    definition:
      "A 1–4 Week Engagement For One Urgent Problem (A Scary Email, Audit, Funder Deadline, Or Policy Gap). No Health Check Required. You Get A Mini-Bundle To Fix That Specific Issue.",
  },
  {
    term: "Path B",
    fullName: "Health Check & Systems",
    definition:
      "An 8–12 Week Per Phase Engagement That Starts With The NOHC, Then Installs 1–2 System Bundles. Best For Orgs That Want To Upgrade Multiple Areas And Become Audit- And Funder-Ready.",
  },
];

export const Glossary = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-40 lg:py-48 bg-muted/30 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div id="glossary" className="relative container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        {/* Editorial Header */}
        <div className="mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Reference
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8"
          >
            Key <span className="font-normal italic text-muted-foreground">Terms</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            Quick Definitions For The Terms We Use Across Nimara. 
            Bookmark This Section For Easy Reference.
          </motion.p>
        </div>

        {/* Terms List */}
        <div className="space-y-0">
          {glossaryTerms.map((item, index) => (
            <motion.div
              key={item.term}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              className="group"
            >
              <div className="grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 border-t border-border hover:bg-background/50 transition-colors duration-300">
                {/* Term badge */}
                <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                  <span className="inline-block px-3 py-1.5 text-sm font-medium bg-foreground text-background">
                    {item.term}
                  </span>
                </div>
                
                {/* Full name */}
                <div className="col-span-12 sm:col-span-9 lg:col-span-3">
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.fullName}
                  </h3>
                </div>
                
                {/* Definition */}
                <div className="col-span-12 lg:col-span-7 mt-2 lg:mt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-muted-foreground">
              Have Questions About A Term?
            </p>
            <a 
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-foreground font-medium group"
            >
              <span className="group-hover:text-primary transition-colors">Get In Touch</span>
              <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Glossary;
