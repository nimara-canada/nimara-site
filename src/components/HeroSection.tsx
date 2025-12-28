import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { useMotionPreferences, DROPBOX_EASING_CSS } from "@/hooks/use-scroll-reveal";

const ROTATING_WORDS = ["Funder-Ready", "Audit-Ready", "Report-Ready", "Board-Ready", "Grant-Ready"];

const NimaraHeroPremium = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { reducedMotion } = useMotionPreferences();

  // Scroll-linked animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring for parallax - disabled if reduced motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: reducedMotion ? 1000 : 100,
    damping: reducedMotion ? 100 : 30,
    restDelta: 0.001
  });

  // Transform values based on scroll - reduced if motion preference
  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, reducedMotion ? 1 : 0]);
  const heroY = useTransform(smoothProgress, [0, 1], [0, reducedMotion ? 0 : 100]);
  const heroScale = useTransform(smoothProgress, [0, 0.5], [1, reducedMotion ? 1 : 0.98]);
  const dashboardY = useTransform(smoothProgress, [0, 1], [0, reducedMotion ? 0 : 60]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Rotate words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Reveal animation styles with Dropbox easing
  const revealStyle = (delay: number = 0): React.CSSProperties => 
    reducedMotion ? { opacity: 1, transform: 'none' } : {
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(16px)',
      transition: `opacity 600ms ${DROPBOX_EASING_CSS} ${delay}ms, transform 600ms ${DROPBOX_EASING_CSS} ${delay}ms`,
    };

  return (
    <section 
      ref={heroRef}
      id="hero"
      aria-label="Hero section - Get your nonprofit systems ready"
      className="min-h-screen bg-secondary-background text-white relative overflow-hidden"
    >
      {/* Subtle grid pattern - decorative */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Main Content with scroll transforms */}
      <motion.div 
        className="relative z-10 min-h-screen flex flex-col"
        style={{ 
          opacity: heroOpacity,
          y: heroY,
          scale: heroScale
        }}
      >
        <div className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 flex flex-col">
          
          {/* Two Column Layout */}
          <div className="flex-1 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left - Headlines */}
            <div>
              {/* Main Headline - Bold, large, clean */}
              <h1 
                style={revealStyle(100)}
                className="mb-6 text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight"
              >
                Build systems that make your nonprofit{" "}
                <span className="relative inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: [0.65, 0, 0.45, 1] }}
                      className="inline-block text-accent"
                    >
                      {ROTATING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                  <span>.</span>
                </span>
              </h1>

              {/* Subheadline - Clean, muted */}
              <p 
                style={revealStyle(200)}
                className="text-lg md:text-xl leading-relaxed text-white/60 max-w-xl mb-10"
              >
                We help Canadian nonprofits set up clear systems for board, money, people, and reporting so funding is easier to win and manage.
              </p>

              {/* CTAs - Primary button + Secondary text link */}
              <div style={revealStyle(300)} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Primary CTA Button */}
                <a
                  href="/health-score"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary-background"
                >
                  Get Free Health Check
                  <span className="text-lg" aria-hidden="true">→</span>
                </a>

                {/* Secondary CTA - text link */}
                <a
                  href="/book-a-call"
                  className="group inline-flex items-center gap-2 text-base text-white/60 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary-background rounded"
                >
                  Need urgent help? Book a call
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </a>
              </div>

              {/* Mobile Dashboard Preview - Simplified */}
              <div 
                style={revealStyle(400)}
                className="mt-10 lg:hidden"
              >
                <div className="relative bg-[#0a0a0f] border border-white/10 rounded-xl overflow-hidden shadow-xl">
                  {/* Compact Window Header */}
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/[0.02]">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                    <span className="text-[10px] text-white/40 font-medium ml-auto">Health Score</span>
                  </div>

                  {/* Compact Dashboard Content */}
                  <div className="p-4">
                    {/* Score Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-bold text-white">78</span>
                        <span className="text-sm text-white/40">/100</span>
                      </div>
                      <span className="px-2 py-1 bg-accent/20 text-accent text-[10px] font-medium rounded-full">
                        Tier 3 — Strong
                      </span>
                    </div>

                    {/* Mini Progress Bars */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {[
                        { label: "Governance", value: 85 },
                        { label: "Finance", value: 72 },
                        { label: "Programs", value: 80 },
                        { label: "Operations", value: 68 },
                      ].map((item, i) => (
                        <div key={item.label} className="space-y-1">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-white/60">{item.label}</span>
                            <span className="text-white/40">{item.value}%</span>
                          </div>
                          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                              style={{ 
                                width: isLoaded ? `${item.value}%` : '0%',
                                transition: `width 800ms ${DROPBOX_EASING_CSS} ${500 + i * 100}ms`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Premium Dashboard Mockup (Desktop) with Parallax */}
            <motion.div 
              className="hidden lg:block"
              style={{ y: dashboardY }}
            >
              <div style={revealStyle(300)} className="relative py-8">
                {/* Main Dashboard Window */}
                <div className="relative bg-[#0a0a0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                  {/* Window Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-white/40 font-medium">Health Score Dashboard</span>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 space-y-4">
                    {/* Score Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Overall Score</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-white">78</span>
                          <span className="text-lg text-white/40">/100</span>
                        </div>
                      </div>
                      <div className="px-3 py-1.5 bg-accent/20 text-accent text-xs font-medium rounded-full">
                        Tier 3 — Strong
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-3 pt-2">
                      {[
                        { label: "Governance", value: 85, delay: 600 },
                        { label: "Finance", value: 72, delay: 700 },
                        { label: "Programs", value: 80, delay: 800 },
                        { label: "Operations", value: 68, delay: 900 },
                      ].map((item) => (
                        <div key={item.label} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-white/70">{item.label}</span>
                            <span className="text-white/50">{item.value}%</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                              style={{ 
                                width: isLoaded ? `${item.value}%` : '0%',
                                transition: `width 800ms ${DROPBOX_EASING_CSS} ${item.delay}ms`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Card - Top Fixes */}
                <div 
                  style={revealStyle(700)}
                  className="absolute -right-4 top-2 w-52 bg-white rounded-xl shadow-xl shadow-black/20 p-4 border border-gray-100 z-10"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-xs font-semibold text-gray-900">Top 3 Fixes</span>
                  </div>
                  <div className="space-y-2">
                    {["Board manual", "Monthly reviews", "HR policies"].map((fix, i) => (
                      <div 
                        key={fix}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <span className="w-4 h-4 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        {fix}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Card - Status */}
                <div 
                  style={revealStyle(800)}
                  className="absolute -left-4 bottom-2 bg-white rounded-xl shadow-xl shadow-black/20 p-3 border border-gray-100 z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">Funder Ready</p>
                      <p className="text-[10px] text-gray-500">All docs prepared</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats Section */}
          <div 
            style={revealStyle(500)}
            className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/10"
            role="region"
            aria-label="Service timelines"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-white mb-1">1–4 weeks</span>
                <span className="text-xs uppercase tracking-[0.15em] text-white/60">Fast Fixes</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-white mb-1">8–12 weeks</span>
                <span className="text-xs uppercase tracking-[0.15em] text-white/60">Full Setup</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-white mb-1">Guaranteed</span>
                <span className="text-xs uppercase tracking-[0.15em] text-white/60">If We Can't Help, You Don't Pay</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ 
          opacity: useTransform(smoothProgress, [0, 0.15], [1, 0]),
        }}
      >
        <span 
          style={revealStyle(1000)}
          className="text-[10px] uppercase tracking-widest text-white/40"
        >
          Scroll
        </span>
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NimaraHeroPremium;
