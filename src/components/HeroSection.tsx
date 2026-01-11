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
            <h1 id="hero-heading" style={revealStyle(100)} className="mb-8 md:mb-10 xl:mb-12 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-[1.05] tracking-tight">
              We make funding easier to <span className="text-accent">win</span> — and <span className="text-accent">manage</span>.
            </h1>

            {/* Subheadline */}
            <p style={revealStyle(200)} className="text-lg md:text-xl leading-snug max-w-[50ch] mx-auto mb-10 text-white/80">
              Every receipt, approval, and payment — documented and ready.
            </p>

            {/* Bullets */}
            <ul style={revealStyle(250)} className="space-y-3 mb-6 max-w-md mx-auto text-left" aria-label="Key benefits">
              <li className="flex items-start gap-3 text-white/70">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>Find proof of payment in minutes</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>Track grant spending without guesswork</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>Pull reports when funders ask</span>
              </li>
            </ul>

            {/* Proof Trail */}
            <div style={revealStyle(275)} className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.12em] text-white/40 mb-8" aria-label="Proof trail flow">
              <span>Receipt</span>
              <span className="text-white/25">→</span>
              <span>Approval</span>
              <span className="text-white/25">→</span>
              <span>Payment</span>
              <span className="text-white/25">→</span>
              <span>Report</span>
            </div>

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
              <p className="text-sm text-white/60 tracking-[0.01em]">
                For Canadian nonprofits with 0–50 staff. Not an audit firm.
              </p>
            </div>
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