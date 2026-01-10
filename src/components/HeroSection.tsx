import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useMotionPreferences, DROPBOX_EASING_CSS } from "@/hooks/use-scroll-reveal";
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";
const NimaraHeroPremium = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const {
    reducedMotion
  } = useMotionPreferences();

  // Scroll-linked animations
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: reducedMotion ? 1000 : 100,
    damping: reducedMotion ? 100 : 30,
    restDelta: 0.001
  });

  // Main container transforms
  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, reducedMotion ? 1 : 0]);
  const heroY = useTransform(smoothProgress, [0, 1], [0, reducedMotion ? 0 : 100]);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Reveal animation styles with Dropbox easing
  const revealStyle = (delay: number = 0): React.CSSProperties => reducedMotion ? {
    opacity: 1,
    transform: 'none'
  } : {
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 700ms ${DROPBOX_EASING_CSS} ${delay}ms, transform 700ms ${DROPBOX_EASING_CSS} ${delay}ms`
  };
  return <section ref={heroRef} id="hero" aria-labelledby="hero-heading" className="min-h-screen relative overflow-hidden bg-secondary-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.08) 1px, transparent 1px)`,
      backgroundSize: '80px 80px'
    }} />

      {/* Main Content */}
      <motion.div className="relative z-10 min-h-screen flex flex-col" style={{
      opacity: heroOpacity,
      y: heroY
    }}>
        <div className="flex-1 w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-6 lg:px-12 xl:px-16 2xl:px-20 py-20 lg:py-28 xl:py-32 2xl:py-36 flex flex-col justify-center">
          
          {/* Single Column - Clean Copy */}
          <div className="text-center">
            {/* Main Headline */}
            <h1 id="hero-heading" style={revealStyle(100)} className="mb-8 md:mb-10 xl:mb-12 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-[1.05] tracking-tight">
              We make funding easier to <span className="text-accent">win</span> — and <span className="text-accent">manage</span>.
            </h1>

            {/* Subheadline */}
            <p style={revealStyle(200)} className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 text-white/70">
              We set up simple systems so your team can apply faster, track spending, and report without stress.
            </p>

            {/* Bullets */}
            <ul style={revealStyle(250)} className="space-y-3 mb-10 max-w-xl mx-auto text-left" aria-label="Key benefits">
              <li className="flex items-start gap-3 text-white/70">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>Find receipts, approvals, and proof of payment in minutes</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>Keep grant budgets and spending clean and easy to track</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>Send reports without scrambling or guessing</span>
              </li>
            </ul>

            {/* CTAs */}
            <div style={revealStyle(300)} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6" role="group" aria-label="Get started options">
              {/* Primary CTA */}
              <Link to="/capacity-buildout" className="inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-lg select-none transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent bg-primary text-primary-foreground">
                Book a free call
                <span className="text-lg" aria-hidden="true">→</span>
              </Link>

              {/* Secondary CTA */}
              <a href={TYPEFORM_HEALTH_CHECK_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-base text-white hover:opacity-80 select-none transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded">
                Try the 6-minute check
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Trust line */}
            <div style={revealStyle(400)} className="mt-6">
              <p className="text-sm text-white/60">
                Built for nonprofits with 0–50 staff in Canada. Not an audit firm.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div style={revealStyle(600)} className="mt-12 md:mt-16 pt-8 border-t border-white/10" role="region" aria-label="Service timelines">
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center">
              <div className="relative sm:border-r sm:border-white/10">
                <dt className="text-[10px] uppercase tracking-[0.15em] text-white/50 mb-1">
                  Capacity Install
                </dt>
                <dd className="text-base md:text-lg font-medium text-white/80 italic">
                  4–8 weeks
                </dd>
              </div>
              <div className="relative sm:border-r sm:border-white/10">
                <dt className="text-[10px] uppercase tracking-[0.15em] text-white/50 mb-1">
                  Health Check
                </dt>
                <dd className="text-base md:text-lg font-medium text-white/80 italic">
                  2 weeks
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.15em] text-white/50 mb-1">
                  Works for every funder
                </dt>
                <dd className="text-base md:text-lg font-medium text-white/80 italic">
                  Built once. Use again.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{
      opacity: useTransform(smoothProgress, [0, 0.15], [1, 0])
    }} aria-hidden="true">
        <span style={revealStyle(800)} className="text-[11px] uppercase tracking-[0.2em] text-white/60">
          Scroll
        </span>
        <motion.div animate={reducedMotion ? {} : {
        y: [0, 6, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
          <ChevronDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>;
};
export default NimaraHeroPremium;