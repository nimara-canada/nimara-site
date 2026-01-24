import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const SoWhatWeDoSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-32 lg:py-48 bg-background relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center min-h-[200px]">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.05] tracking-[-0.03em] text-center uppercase"
            style={{ fontWeight: 900 }}
          >
            So what do we do, exactly?
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default SoWhatWeDoSection;
