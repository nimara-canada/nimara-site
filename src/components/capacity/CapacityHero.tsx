import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useMotionPreferences, DROPBOX_EASING_CSS } from '@/hooks/use-scroll-reveal';
import { ChevronDown, Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CALENDLY_BOOKING_URL } from '@/constants/urls';

type StaffSize = '0-15' | '16+';

const CapacityHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [staffSize, setStaffSize] = useState<StaffSize>('0-15');
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

  // Dynamic content based on staff size
  const isSmallOrg = staffSize === '0-15';
  const pricing = isSmallOrg ? '$6,999' : 'Custom';
  const ctaText = isSmallOrg ? 'Book a 15-min fit call' : 'Request a custom quote';

  return (
    <section 
      ref={heroRef} 
      id="hero" 
      aria-labelledby="hero-heading" 
      className="min-h-screen relative overflow-hidden bg-secondary-background"
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
        className="relative z-10 min-h-screen flex flex-col" 
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="flex-1 w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 pt-4 sm:pt-6 md:pt-8 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-28 flex flex-col justify-center">
          
          {/* Single Column - Clean Copy */}
          <div className="text-center">
            {/* Eyebrow */}
            <p 
              style={revealStyle(50)} 
              className="text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4 sm:mb-6"
            >
              Capacity-building implementation
            </p>

            {/* Main Headline */}
            <h1 
              id="hero-heading" 
              style={revealStyle(100)} 
              className="mb-6 sm:mb-8 md:mb-10 xl:mb-12 text-[clamp(1.75rem,5vw,4rem)] font-black text-white leading-[1] tracking-[-0.03em]"
            >
              Turn grant funding into systems your team actually uses — <span className="text-accent">in 6 weeks.</span>
            </h1>

            {/* Subheadline */}
            <p 
              style={revealStyle(150)} 
              className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] leading-snug max-w-[52ch] mx-auto mb-8 sm:mb-10 md:mb-12 text-white/80"
            >
              We install funder-ready workflows for spending proof, board decisions, reporting, and file systems — inside the tools you already use.
            </p>

            {/* Bullets */}
            <ul 
              style={revealStyle(200)} 
              className="inline-flex flex-col items-start gap-2 sm:gap-3 mb-8 sm:mb-10 text-left" 
              aria-label="What's included"
            >
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-white/75">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>Works with Google Workspace / Microsoft 365</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-white/75">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>Integrates with QuickBooks / Xero</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-white/75">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>100% virtual — no on-site required</span>
              </li>
            </ul>

            {/* Staff Size Toggle */}
            <div style={revealStyle(250)} className="mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm text-white/50 mb-3">Select your team size</p>
              <div 
                className="inline-flex bg-white/5 rounded-full p-1 border border-white/10" 
                role="radiogroup" 
                aria-label="Select staff size"
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked={staffSize === '0-15'}
                  onClick={() => setStaffSize('0-15')}
                  className={cn(
                    "px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-background",
                    staffSize === '0-15'
                      ? "bg-accent text-secondary-background"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  0–15 staff
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={staffSize === '16+'}
                  onClick={() => setStaffSize('16+')}
                  className={cn(
                    "px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-background",
                    staffSize === '16+'
                      ? "bg-accent text-secondary-background"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  16+ staff
                </button>
              </div>
            </div>

            {/* Dynamic Pricing */}
            <div style={revealStyle(275)} className="mb-6 sm:mb-8">
              <p className="text-white/50 text-sm mb-1">
                {isSmallOrg ? 'Starting at' : 'Pricing'}
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                {pricing}
              </p>
              {!isSmallOrg && (
                <p className="text-white/50 text-sm mt-1">Based on complexity</p>
              )}
            </div>

            {/* CTAs */}
            <div 
              style={revealStyle(300)} 
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6" 
              role="group" 
              aria-label="Get started options"
            >
              {/* Primary CTA */}
              <a 
                href={CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg select-none transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent bg-primary text-primary-foreground"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              {/* Secondary CTA */}
              <a 
                href="#domains"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 text-sm sm:text-base text-white hover:opacity-80 select-none transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
              >
                See the 7 domains
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
            </div>

            {/* Trust line */}
            <div style={revealStyle(400)} className="mt-8 sm:mt-10">
              <p className="text-xs sm:text-sm md:text-[0.9rem] text-white/55 tracking-[0.02em]">
                For Canadian nonprofits with 0–50 staff. Not an audit firm.
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

export default CapacityHero;
