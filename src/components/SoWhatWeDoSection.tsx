import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const SoWhatWeDoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      className="bg-background h-screen flex flex-col items-center justify-center snap-start snap-always relative overflow-hidden"
    >
      {/* Decorative line above */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-16 h-px bg-foreground/20 origin-center"
      />

      <motion.div 
        style={{ scale, opacity }}
        className="max-w-6xl mx-auto text-center px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-black tracking-[-0.04em] leading-[0.9] uppercase text-[clamp(2rem,10vw,7rem)]"
          style={{ color: '#000000' }}
        >
          SO WHAT DO WE DO, EXACTLY?
        </motion.h2>

        {/* Pulsing accent dot */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#6945D8' }}
          />
        </motion.div>
      </motion.div>

      {/* Decorative line below */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-16 h-px bg-foreground/20 origin-center"
      />
    </section>
  );
};

export default SoWhatWeDoSection;
