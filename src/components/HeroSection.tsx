import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useMotionPreferences, DROPBOX_EASING_CSS } from "@/hooks/use-scroll-reveal";

const NimaraHeroPremium = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState("");
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
    <section ref={heroRef} id="hero" aria-labelledby="hero-heading" className="min-h-screen relative overflow-hidden bg-secondary-background -mt-20" style={{ paddingTop: '5rem' }}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.08) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <motion.div className="relative z-10 min-h-screen flex flex-col" style={{ opacity: heroOpacity, y: heroY }}>
        <div className="flex-1 w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-28 flex flex-col justify-center">
          <div className="text-center">
            {/* Main Headline */}
            <h1 id="hero-heading" style={revealStyle(100)} className="mb-6 sm:mb-8 md:mb-10 text-[clamp(2.2rem,6vw,5rem)] font-black text-white leading-[1.05] tracking-[-0.03em]">
              We make funding easier to{" "}
              <span className="text-accent">win</span> — and{" "}
              <span className="text-accent">manage</span>.
            </h1>

            {/* Subheadline */}
            <p style={revealStyle(200)} className="text-base sm:text-lg md:text-xl leading-relaxed max-w-[52ch] mx-auto mb-10 sm:mb-12 md:mb-14 text-white/70">
              Every receipt, approval, and payment — documented and ready.
              <br className="hidden sm:block" />
              For Canadian nonprofits with 0–50 staff.
            </p>

            {/* Inline email + CTA */}
            <div style={revealStyle(300)} className="max-w-xl mx-auto mb-6 sm:mb-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) {
                    window.location.href = `/capacity-buildout?email=${encodeURIComponent(email)}`;
                  }
                }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 h-12 sm:h-14 px-5 rounded-xl sm:rounded-r-none border border-white/20 bg-white/5 text-white placeholder:text-white/40 text-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                />
                <button
                  type="submit"
                  className="h-12 sm:h-14 px-6 sm:px-8 rounded-xl sm:rounded-l-none bg-accent text-accent-foreground font-semibold text-base whitespace-nowrap hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                >
                  Book a free call
                </button>
              </form>
            </div>

            {/* Divider + secondary link */}
            <div style={revealStyle(400)} className="flex items-center justify-center gap-4 mb-6 max-w-xs mx-auto">
              <div className="flex-1 h-px bg-white/15" />
              <span className="text-xs text-white/40 uppercase tracking-widest">or</span>
              <div className="flex-1 h-px bg-white/15" />
            </div>

            <div style={revealStyle(450)}>
              <Link to="/free-check" className="group inline-flex items-center gap-2 text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded">
                Prefer a quick check?{" "}
                <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-white transition-colors">Try the 6-minute assessment</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            {/* Trust line */}
            <div style={revealStyle(550)} className="mt-10 sm:mt-12">
              <p className="text-xs sm:text-sm text-white/40 tracking-wide">
                Not an audit firm. No software to install.
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
        <motion.div animate={reducedMotion ? {} : { y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default NimaraHeroPremium;