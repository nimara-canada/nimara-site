import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="relative pb-0 pt-16 sm:pt-20 md:pt-28 lg:pt-40 bg-background">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center pb-16 sm:pb-20 md:pb-28 lg:pb-40">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary mb-4 sm:mb-6"
        >
          The Problem
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[6.5rem] font-extrabold tracking-[-0.03em] text-foreground leading-[1.05] mb-6 sm:mb-8 md:mb-12"
        >
          Good organizations still lose funding
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <span className="text-primary">when systems are weak.</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Not because anyone did something wrong. But because funders look for proof, clarity, and control—not just passion.
        </motion.p>
      </div>
      
    </section>
  );
};

export default ProblemSection;
