import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const glossaryTerms = [
  {
    term: "NOHC",
    fullName: "Nimara Organizational Health Check",
    definition:
      "A structured assessment that scores your nonprofit across key system areas (finance, governance, HR, programs). It takes 2–3 weeks and shows where each system sits on the Tier ladder.",
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
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export const Glossary = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">
              Key Terms
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Glossary
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quick definitions for the terms we use across Nimara.
          </p>
        </motion.div>

        {/* Terms list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {glossaryTerms.map((item, index) => (
            <motion.div
              key={item.term}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-5 md:p-6 transition-all duration-300 hover:shadow-md hover:border-primary/30">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                  {/* Term badge */}
                  <div className="shrink-0">
                    <span className="inline-block px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-semibold text-sm">
                      {item.term}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-1.5">
                    <h3 className="font-semibold text-foreground text-base md:text-lg">
                      {item.fullName}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {item.definition}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Glossary;
