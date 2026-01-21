import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { useMotionPreferences, DROPBOX_EASING_CSS } from "@/hooks/use-scroll-reveal";

export const NewConsultantHero = () => {
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

  const scrollToWhyJoin = () => {
    const element = document.getElementById('why-join');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      id="consultant-hero"
      aria-labelledby="consultant-hero-heading"
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: 'hsl(222, 47%, 7%)' }}
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

      {/* Main Content */}
      <motion.div 
        className="relative z-10 min-h-screen flex flex-col"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="flex-1 w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 2xl:py-36 flex flex-col justify-center">
          
          <div className="text-center">
            {/* Badge */}
            <div style={revealStyle(0)}>
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/40 mb-6 sm:mb-8">
                <span className="w-6 sm:w-8 h-px bg-white/20" />
                For Consultants
                <span className="w-6 sm:w-8 h-px bg-white/20" />
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 
              id="consultant-hero-heading"
              style={revealStyle(100)} 
              className="mb-6 sm:mb-8 md:mb-10 xl:mb-12 text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[6.5rem] font-extrabold text-white leading-[1.05] tracking-[-0.03em]"
            >
              Build working basics
              <br />
              <span className="italic font-light text-accent">for nonprofits.</span>
            </h1>

            {/* Subheadline */}
            <p 
              style={revealStyle(200)} 
              className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] leading-snug max-w-[52ch] mx-auto mb-8 sm:mb-10 md:mb-12 text-white/80"
            >
              Nimara partners with operators to set up simple systems for money, files, and reporting.
            </p>

            {/* Bullets */}
            <ul 
              style={revealStyle(250)} 
              className="inline-flex flex-col items-start gap-2 sm:gap-3 mb-6 sm:mb-8 text-left" 
              aria-label="Key benefits for consultants"
            >
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-white/75">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>Clear scope and defined deliverables</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-white/75">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>Repeatable playbooks and templates</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-white/75">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>Net-15 payment on delivery</span>
              </li>
            </ul>

            {/* Proof Trail */}
            <div 
              style={revealStyle(275)} 
              className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white/40 mb-8 sm:mb-10" 
              aria-label="Work flow"
            >
              <span>Apply</span>
              <span className="text-white/20">→</span>
              <span>Match</span>
              <span className="text-white/20">→</span>
              <span>Deliver</span>
              <span className="text-white/20">→</span>
              <span>Grow</span>
            </div>

            {/* CTAs */}
            <div 
              style={revealStyle(300)} 
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6" 
              role="group" 
              aria-label="Get started options"
            >
              <Link 
                to="/consultants/apply" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg select-none transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary bg-primary text-primary-foreground"
              >
                Apply to Join Nimara
                <span className="text-base sm:text-lg" aria-hidden="true">→</span>
              </Link>

              <a
                href="mailto:hello@nimara.ca"
                className="group inline-flex items-center gap-2 text-sm sm:text-base text-white hover:opacity-80 select-none transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
              >
                Questions? Email us
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Trust line */}
            <div style={revealStyle(400)} className="mt-6 sm:mt-8">
              <p className="text-xs sm:text-sm md:text-[0.9rem] text-white/55 tracking-[0.02em]">
                Remote-first • Project-based • Clear scope
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: useTransform(smoothProgress, [0, 0.15], [1, 0]) }}
        aria-hidden="true"
      >
        <span style={revealStyle(800)} className="text-[11px] uppercase tracking-[0.2em] text-white/60">
          Scroll
        </span>
        <motion.button
          onClick={scrollToWhyJoin}
          className="cursor-pointer"
          animate={reducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/60" />
        </motion.button>
      </motion.div>
    </section>
  );
};
