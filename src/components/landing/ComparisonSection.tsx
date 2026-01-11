import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    traditional: "Receipts in email, folders, and drawers",
    nimara: "One place for every receipt",
  },
  {
    traditional: "Approvals happen over Slack or verbally",
    nimara: "Approvals documented and timestamped",
  },
  {
    traditional: "No link between payment and budget line",
    nimara: "Every payment tied to a grant line",
  },
  {
    traditional: "Reports assembled last minute from memory",
    nimara: "Reports pulled from real records",
  },
  {
    traditional: "Outcomes tracked in someone's head",
    nimara: "Outcomes documented and shareable",
  },
];

export default function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-background"
      aria-labelledby="comparison-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-6"
          >
            The Difference
          </motion.p>

          <motion.h2
            id="comparison-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-foreground"
          >
            Traditional vs. Nimara
          </motion.h2>
        </div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-0 md:gap-8 lg:gap-12">
          {/* Traditional Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="sticky top-24 md:relative md:top-0">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-destructive" />
                </span>
                Traditional
              </h3>
              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3 py-4 border-b border-border/50 last:border-0"
                  >
                    <X className="w-4 h-4 mt-0.5 text-destructive/60 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.traditional}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Nimara Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-6 flex items-center gap-2 mt-8 md:mt-0">
              <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-accent-foreground" />
              </span>
              With Nimara
            </h3>
            <ul className="space-y-4">
              {comparisons.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-start gap-3 py-4 border-b border-border/50 last:border-0"
                >
                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item.nimara}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
