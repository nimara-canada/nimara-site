import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6"
        >
          The Problem
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-8"
        >
          Good organizations still lose funding
          <br />
          <span className="text-primary">when systems are weak.</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Not because anyone did something wrong. But because funders look for proof, clarity, and control—not just passion.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
