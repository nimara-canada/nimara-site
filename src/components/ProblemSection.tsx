import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="relative pb-0 pt-28 md:pt-40 bg-background">
      <div className="container max-w-5xl mx-auto px-4 text-center pb-28 md:pb-40">
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
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-12"
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
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Not because anyone did something wrong. But because funders look for proof, clarity, and control—not just passion.
        </motion.p>
      </div>
      
      {/* Gradient fade to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 md:h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background) / 0) 100%)"
        }}
      />
    </section>
  );
};

export default ProblemSection;
