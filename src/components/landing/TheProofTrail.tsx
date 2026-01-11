import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Receipt, CheckCircle, CreditCard, FileSpreadsheet, FileText, ArrowRight } from "lucide-react";

const proofSteps = [
  { 
    icon: Receipt, 
    label: "Receipt",
    description: "What was bought"
  },
  { 
    icon: CheckCircle, 
    label: "Approval",
    description: "Who said yes"
  },
  { 
    icon: CreditCard, 
    label: "Payment",
    description: "Proof it was paid"
  },
  { 
    icon: FileSpreadsheet, 
    label: "Budget",
    description: "Which grant line"
  },
  { 
    icon: FileText, 
    label: "Report",
    description: "What it delivered"
  },
];

export default function TheProofTrail() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-secondary-background"
      aria-labelledby="proof-trail-heading"
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
            The Solution
          </motion.p>

          <motion.h2
            id="proof-trail-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6 text-white"
          >
            The Proof Trail
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            Every dollar documented from purchase to outcome.
          </motion.p>
        </div>

        {/* Proof Trail Visual */}
        <div className="relative">
          {/* Connecting Line */}
          <motion.div 
            className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 hidden md:block"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />

          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            {proofSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 relative z-10">
                  <step.icon className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                </div>

                {/* Label */}
                <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                  {step.label}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-white/50">
                  {step.description}
                </p>

                {/* Arrow (mobile only between pairs) */}
                {index < proofSteps.length - 1 && index !== 1 && index !== 3 && (
                  <ArrowRight className="absolute -right-3 top-8 w-4 h-4 text-white/20 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16 md:mt-20 text-white/40 text-sm max-w-lg mx-auto"
        >
          The chain isn't complete until the outcome is documented. That's what funders actually want to see.
        </motion.p>
      </div>
    </section>
  );
}
