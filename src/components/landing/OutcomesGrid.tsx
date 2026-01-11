import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const outcomes = [
  {
    title: "Find any receipt in 2 minutes",
    context: "When a funder asks for proof",
  },
  {
    title: "Show exactly where money went",
    context: "By grant line, by month, by program",
  },
  {
    title: "Pull reports without scrambling",
    context: "Budget vs. actual, ready to share",
  },
  {
    title: "Answer board questions fast",
    context: "With real numbers, not guesses",
  },
  {
    title: "Onboard new staff in days",
    context: "They know where everything lives",
  },
  {
    title: "Sleep before an audit",
    context: "Because the files are already there",
  },
];

export default function OutcomesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-secondary-background"
      aria-labelledby="outcomes-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-6"
          >
            What You Get
          </motion.p>

          <motion.h2
            id="outcomes-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-4"
          >
            After we're done
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-white/60 max-w-xl mx-auto"
          >
            These aren't promises. They're what happens when systems work.
          </motion.p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
            >
              {/* Check Icon */}
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-accent" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {outcome.title}
                </h3>
                <p className="text-sm text-white/50">
                  {outcome.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
