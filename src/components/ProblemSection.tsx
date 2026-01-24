import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center snap-start">
      <div 
        className="max-w-5xl mx-auto text-center px-6"
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
          style={{ color: '#6945D8' }}
        >
          The Problem
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ 
            fontSize: '72px',
            fontWeight: 800,
            color: '#202654',
            lineHeight: 1.1,
          }}
          className="tracking-[-0.03em]"
        >
          Good organizations still lose funding{' '}
          <span style={{ color: '#6945D8' }}>when systems are weak.</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ 
            fontSize: '20px',
            color: '#96A0B5',
            maxWidth: '600px',
            marginTop: '32px',
            lineHeight: 1.6,
          }}
          className="mx-auto"
        >
          Not because anyone did something wrong. But because funders look for proof, clarity, and control — not just passion.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
