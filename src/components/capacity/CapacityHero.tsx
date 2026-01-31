import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useMotionPreferences, DROPBOX_EASING_CSS } from '@/hooks/use-scroll-reveal';
import { ArrowRight } from 'lucide-react';
import { CALENDLY_BOOKING_URL } from '@/constants/urls';

const CapacityHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [teamSize, setTeamSize] = useState<'small' | 'large'>('small');
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
  const heroY = useTransform(smoothProgress, [0, 1], [0, reducedMotion ? 0 : 50]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const revealStyle = (delay: number = 0): React.CSSProperties => reducedMotion ? {
    opacity: 1,
    transform: 'none'
  } : {
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 500ms ${DROPBOX_EASING_CSS} ${delay}ms, transform 500ms ${DROPBOX_EASING_CSS} ${delay}ms`
  };

  const isSmallTeam = teamSize === 'small';

  return (
    <section 
      ref={heroRef} 
      id="hero" 
      aria-label="Hero section"
      className="relative overflow-hidden bg-secondary-background"
    >
      <motion.div 
        className="relative z-10" 
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 pt-[60px] sm:pt-[80px] md:pt-[100px] pb-[48px] sm:pb-[60px] md:pb-[80px]">
          
          <div className="text-center max-w-[800px] mx-auto">
            {/* Eyebrow */}
            <p 
              style={revealStyle(0)} 
              className="text-[11px] sm:text-[12px] font-semibold tracking-[0.15em] text-accent/80 uppercase mb-4 sm:mb-5"
            >
              Capacity-Building Implementation
            </p>

            {/* Headline */}
            <h1 
              id="hero-heading" 
              style={revealStyle(50)} 
              className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-5 sm:mb-6"
            >
              Turn grant funding into systems your team actually uses — in 6 weeks.
            </h1>

            {/* Subhead - Single line feel */}
            <p 
              style={revealStyle(100)} 
              className="text-[15px] sm:text-[17px] md:text-[18px] font-normal leading-[1.5] text-white/70 max-w-[600px] mx-auto mb-5 sm:mb-6"
            >
              Install spending proof, board decisions, reporting, and file systems — inside your current tools.
            </p>

            {/* Compatibility line - quiet */}
            <p 
              style={revealStyle(150)} 
              className="text-[12px] sm:text-[13px] font-normal text-white/40 mb-8 sm:mb-10"
            >
              Google Workspace / Microsoft 365 • QuickBooks / Xero • 100% virtual
            </p>

            {/* Offer Card */}
            <div 
              style={revealStyle(200)} 
              className="inline-block w-full max-w-[360px] bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-7"
            >
              {/* Team size label */}
              <p className="text-[12px] font-medium text-white/50 uppercase tracking-[0.1em] mb-3">
                Team size
              </p>

              {/* Segmented Toggle */}
              <div className="flex bg-white/[0.04] rounded-lg p-1 mb-5">
                <button
                  onClick={() => setTeamSize('small')}
                  className={`flex-1 py-2.5 px-4 text-[14px] font-medium rounded-md transition-all duration-200 ${
                    isSmallTeam 
                      ? 'bg-accent text-secondary-background' 
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  0–15 staff
                </button>
                <button
                  onClick={() => setTeamSize('large')}
                  className={`flex-1 py-2.5 px-4 text-[14px] font-medium rounded-md transition-all duration-200 ${
                    !isSmallTeam 
                      ? 'bg-accent text-secondary-background' 
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  16+ staff
                </button>
              </div>

              {/* Dynamic price */}
              <p className="text-[18px] sm:text-[20px] font-semibold text-white mb-5">
                {isSmallTeam ? 'Starting at $6,999' : 'Custom pricing'}
              </p>

              {/* Primary CTA */}
              <a 
                href={isSmallTeam ? CALENDLY_BOOKING_URL : CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-[16px] font-semibold rounded-xl text-white bg-primary transition-all duration-200 hover:bg-[#5838B8] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(105,69,216,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-background"
              >
                {isSmallTeam ? 'Book a 15-min fit call' : 'Request a custom quote'}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              {/* Secondary link */}
              <a 
                href="#domains"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1 mt-4 text-[14px] font-normal text-white/50 transition-all duration-200 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-background rounded"
              >
                See the 7 domains
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CapacityHero;
