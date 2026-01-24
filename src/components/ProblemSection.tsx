import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section 
      ref={sectionRef}
      className="bg-background h-screen flex flex-col items-center justify-center snap-start snap-always relative overflow-hidden"
      style={{ position: 'relative' }}
    >
      <motion.div 
        style={{ opacity, y }}
        className="max-w-6xl mx-auto text-center px-6"
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-8"
          style={{ color: '#6945D8' }}
        >
          The Problem
        </motion.p>

        {/* Headline - Paper Tiger Style */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-black tracking-[-0.04em] leading-[0.95] text-[clamp(2rem,6.4vw,5.6rem)] uppercase"
          style={{ color: '#202654' }}
        >
          GOOD ORGANIZATIONS STILL LOSE FUNDING{' '}
          <span style={{ color: '#6945D8' }}>WHEN SYSTEMS ARE WEAK.</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl mt-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#96A0B5' }}
        >
          Not because anyone did something wrong. But because funders look for proof, clarity, and control — not just passion.
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: '#96A0B5' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" style={{ color: '#96A0B5' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemSection;
