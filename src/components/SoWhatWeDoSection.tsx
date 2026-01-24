import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const SoWhatWeDoSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[hsl(var(--nim-cloud))] relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Card container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-2xl shadow-lg border border-[hsl(var(--nim-mist))] p-12 sm:p-16 lg:p-20 xl:p-24"
        >
          <div className="flex flex-col items-center justify-center text-center">
            {/* Small label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--nim-slate))] font-semibold mb-6"
            >
              The Question
            </motion.span>
            
            {/* Main headline */}
            <h2 
              className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.05] tracking-[-0.03em] uppercase"
              style={{ fontWeight: 900 }}
            >
              So what do we do, exactly?
            </h2>
            
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-[hsl(var(--nim-mint))] rounded-full mt-8"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoWhatWeDoSection;
