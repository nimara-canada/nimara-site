import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

export const CompanyHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(smoothProgress, [0, 1], [0, 100]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const revealStyle = (delay: number = 0): React.CSSProperties => ({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 700ms cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}ms, transform 700ms cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}ms`
  });

  return (
    <section 
      ref={heroRef}
      className="min-h-[90vh] relative overflow-hidden bg-secondary-background"
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
        className="relative z-10 min-h-[90vh] flex flex-col"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="flex-1 w-full max-w-4xl mx-auto px-6 lg:px-12 py-24 lg:py-32 flex flex-col justify-center">
          <div className="text-center">
            {/* Label */}
            <p 
              style={revealStyle(50)}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-6"
            >
              About Nimara
            </p>

            {/* Main Headline */}
            <h1 
              style={revealStyle(100)}
              className="mb-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-[-0.02em]"
            >
              We help nonprofits get the <span className="text-accent">basics</span> working.
            </h1>

            {/* Subheadline */}
            <p 
              style={revealStyle(200)}
              className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-white/70"
            >
              Simple systems for money, files, and reporting — so funding is easier to win and manage.
            </p>

            {/* CTAs */}
            <div 
              style={revealStyle(300)}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/start-here"
                className="inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full bg-accent text-secondary-background transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <a
                href="mailto:hello@nimara.ca"
                className="group inline-flex items-center gap-2 text-white/80 font-medium transition-colors duration-300 hover:text-white"
              >
                <span className="relative">
                  Prefer email? hello@nimara.ca
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-white/30 group-hover:bg-white transition-colors duration-300" />
                </span>
              </a>
            </div>

            {/* Trust line */}
            <p 
              style={revealStyle(400)}
              className="mt-8 text-sm text-white/40 italic"
            >
              Built once. Used again.
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
        <span 
          style={revealStyle(600)}
          className="text-[11px] uppercase tracking-[0.2em] text-white/50"
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};
