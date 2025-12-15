import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";

const glossaryTerms = [
  {
    term: "NOHC",
    fullName: "Nimara Organizational Health Check",
    definition:
      "A structured assessment that scores your nonprofit across 7 domains: governance, finance, HR, programs, fundraising, volunteers, and systems & data. It takes 2–3 weeks and shows where each system sits on the Tier ladder.",
  },
  {
    term: "Tier",
    fullName: "Organizational Health Tier (0–4)",
    definition:
      "A score from 0 to 4 that describes how mature a system is. Tier 0 means 'not yet built,' Tier 2 means 'functional but fragile,' and Tier 4 means 'running smoothly at scale.' We help you move up one Tier at a time.",
  },
  {
    term: "Bundle",
    fullName: "System Bundle",
    definition:
      "A package of policies, templates, trackers, and step-by-step guides designed to install or upgrade one system area. Each bundle is a short, focused project with clear deliverables.",
  },
  {
    term: "Acceptance Bundle",
    fullName: "Acceptance Bundle",
    definition:
      "The final set of files, tools, and routines you receive at the end of a project. Everything is ready to use — no 'advice only.' Your team can run these systems without us.",
  },
  {
    term: "Path A",
    fullName: "Fast Help",
    definition:
      "A 1–4 week engagement for one urgent problem (a scary email, audit, funder deadline, or policy gap). No health check required. You get a mini-bundle to fix that specific issue.",
  },
  {
    term: "Path B",
    fullName: "Health Check & Systems",
    definition:
      "An 8–12 week per phase engagement that starts with the NOHC, then installs 1–2 system bundles. Best for orgs that want to upgrade multiple areas and become audit- and funder-ready.",
  },
];

export const Glossary = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 bg-secondary text-secondary-foreground overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-secondary/98" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent/8 rounded-full blur-[100px]" />
      </div>

      <div id="glossary" className="relative container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        {/* Editorial Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-[0.15em] uppercase mb-6"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Reference
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Key <span className="text-primary italic">Terms</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-secondary-foreground/60 max-w-2xl mx-auto"
          >
            Quick definitions for the terms we use across Nimara. 
            Bookmark this section for easy reference.
          </motion.p>
        </div>

        {/* Terms Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {glossaryTerms.map((item, index) => (
            <motion.div
              key={item.term}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-secondary-foreground/[0.03] border border-secondary-foreground/10 backdrop-blur-sm transition-all duration-300 hover:bg-secondary-foreground/[0.06] hover:border-primary/30">
                {/* Term badge */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="inline-block px-3 py-1.5 rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20">
                    {item.term}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-secondary-foreground text-lg mb-3 group-hover:text-primary transition-colors">
                  {item.fullName}
                </h3>
                <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                  {item.definition}
                </p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-secondary-foreground/40 text-sm mt-12"
        >
          Have questions about a term? <a href="/book-a-call" className="text-primary hover:underline">Get in touch</a>
        </motion.p>
      </div>
    </section>
  );
};

export default Glossary;
