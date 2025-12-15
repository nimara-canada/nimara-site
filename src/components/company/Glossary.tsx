import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export const Glossary = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 bg-background">
      <div id="glossary" className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Editorial Header */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
                Reference
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.1]">
                Key{" "}
                <span className="italic">Terms</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-7 lg:pt-8">
              <p className="text-lg text-body-muted leading-relaxed">
                Quick definitions for the terms we use across Nimara. 
                Bookmark this section for easy reference.
              </p>
            </motion.div>
          </div>

          {/* Terms Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-4"
          >
            {glossaryTerms.map((item) => (
              <motion.div
                key={item.term}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="h-full bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-md hover:border-primary/30">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Term badge */}
                    <span className="inline-block px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
                      {item.term}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.fullName}
                  </h3>
                  <p className="text-body-muted text-sm leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Glossary;
