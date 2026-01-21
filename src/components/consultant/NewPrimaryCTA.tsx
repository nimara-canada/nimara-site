import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const NewPrimaryCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  const sectionY = useTransform(smoothProgress, [0, 0.3], [60, 0]);
  const sectionOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-secondary-background overflow-hidden"
    >
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        aria-hidden="true" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.08) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

      {/* Gradient orb */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y: sectionY, opacity: sectionOpacity }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="w-8 h-px bg-white/20" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">
            Apply Now
          </span>
          <span className="w-8 h-px bg-white/20" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-8"
        >
          Ready To <span className="italic font-light text-accent">Join?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-white/60 mb-12 font-light max-w-lg mx-auto"
        >
          If you're an operator who can build working basics, we want to meet you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center"
        >
          <Link 
            to="/consultants/apply"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold rounded-lg select-none transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent bg-primary text-primary-foreground"
          >
            Apply to Join Nimara
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <a
            href="mailto:hello@nimara.ca"
            className="group inline-flex items-center gap-2 text-sm sm:text-base text-white/60 hover:text-white select-none transition-all duration-200"
          >
            Email us
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
