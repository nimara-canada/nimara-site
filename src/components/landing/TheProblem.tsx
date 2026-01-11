import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TheProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-background"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-6"
        >
          The Problem
        </motion.p>

        {/* Main Statement */}
        <motion.h2
          id="problem-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 text-foreground"
        >
          Most nonprofits can't show <br className="hidden md:block" />
          <span className="text-primary">where the money went.</span>
        </motion.h2>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Not because they did anything wrong. But because no one built the system to track it.
        </motion.p>
      </div>
    </section>
  );
}
