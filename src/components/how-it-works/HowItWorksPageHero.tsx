import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useMotionPreferences, DROPBOX_EASING_CSS } from '@/hooks/use-scroll-reveal';

const HowItWorksPageHero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { reducedMotion } = useMotionPreferences();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: reducedMotion ? 1000 : 100,
    damping: reducedMotion ? 100 : 30,
    restDelta: 0.001
  });

  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, reducedMotion ? 1 : 0]);
  const heroY = useTransform(smoothProgress, [0, 1], [0, reducedMotion ? 0 : 100]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const revealStyle = (delay: number = 0): React.CSSProperties => reducedMotion ? {
    opacity: 1,
    transform: 'none'
  } : {
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 700ms ${DROPBOX_EASING_CSS} ${delay}ms, transform 700ms ${DROPBOX_EASING_CSS} ${delay}ms`
  };

  return (
    <section 
      ref={heroRef}
      aria-labelledby="page-heading"
      className="min-h-[70vh] relative overflow-hidden bg-secondary-background"
    >
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.08) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <motion.div 
        className="relative z-10 min-h-[70vh] flex flex-col"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="flex-1 w-full max-w-4xl mx-auto px-6 lg:px-12 py-24 lg:py-32 flex flex-col justify-center">
          <div className="text-center">
            {/* Eyebrow */}
            <p 
              style={revealStyle(100)} 
              className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-6"
            >
              How Nimara Works
            </p>

            {/* Main Headline */}
            <h1 
              id="page-heading"
              style={revealStyle(200)} 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-[-0.02em] mb-8"
            >
              6 steps to systems
              <br />
              <span className="text-accent">that stick.</span>
            </h1>

            {/* Subhead */}
            <p 
              style={revealStyle(300)} 
              className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-10"
            >
              A clear flow from first call to handover. No surprises.
            </p>

            {/* Trust line */}
            <p 
              style={revealStyle(400)} 
              className="text-sm text-white/50"
            >
              For Canadian nonprofits with 0–50 staff.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: useTransform(smoothProgress, [0, 0.15], [1, 0]) }}
        aria-hidden="true"
      >
        <span style={revealStyle(600)} className="text-[11px] uppercase tracking-[0.2em] text-white/60">
          Scroll
        </span>
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorksPageHero;
