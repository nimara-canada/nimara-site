import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useMotionPreferences, DROPBOX_EASING_CSS } from '@/hooks/use-scroll-reveal';
import { ArrowRight } from 'lucide-react';
import { CALENDLY_BOOKING_URL } from '@/constants/urls';

const CapacityHero = () => {
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
  const heroY = useTransform(smoothProgress, [0, 1], [0, reducedMotion ? 0 : 50]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const revealStyle = (delay: number = 0): React.CSSProperties => reducedMotion ? {
    opacity: 1,
    transform: 'none'
  } : {
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 600ms ${DROPBOX_EASING_CSS} ${delay}ms, transform 600ms ${DROPBOX_EASING_CSS} ${delay}ms`
  };

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
        {/* Container with exact specs: max-w-[1200px], py-[120px/80px], px-[40px] */}
        <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 pt-[60px] sm:pt-[80px] md:pt-[120px] pb-[48px] sm:pb-[60px] md:pb-[80px]">
          
          <div className="text-center">
            {/* Headline: 56px desktop, 36px mobile, weight 700, line-height 1.1, tracking -0.02em */}
            <h1 
              id="hero-heading" 
              style={revealStyle(0)} 
              className="text-[36px] sm:text-[42px] md:text-[56px] font-bold text-white leading-[1.1] tracking-[-0.02em] max-w-[800px] mx-auto mb-6 sm:mb-8"
            >
              Build systems funders trust — in 6 weeks.
            </h1>

            {/* Subhead: 20px desktop, 18px mobile, weight 400, line-height 1.5, mint color */}
            <p 
              style={revealStyle(50)} 
              className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.5] text-accent max-w-[640px] mx-auto mb-9 sm:mb-12"
            >
              We install proof-ready workflows inside the tools you already use. No new software. No guesswork.
            </p>

            {/* Actions container */}
            <div style={revealStyle(100)} className="flex flex-col items-center gap-4">
              {/* Primary CTA: 18px, weight 600, purple bg, 18px/36px padding, 8px radius */}
              <a 
                href={CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-[18px] text-[18px] font-semibold rounded-lg text-white bg-primary transition-all duration-200 hover:bg-[#5838B8] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(105,69,216,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-background"
              >
                Book a 15-min fit call
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              {/* Secondary Link: 16px, weight 400, slate color, hover mint + underline */}
              <a 
                href="#domains"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[16px] font-normal text-[#96A0B5] transition-all duration-200 hover:text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-background rounded"
              >
                See the 7 domains
              </a>
            </div>

            {/* Pricing Note: 14px, weight 400, slate color, opacity 0.8 */}
            <p 
              style={revealStyle(150)} 
              className="mt-6 text-[14px] font-normal text-[#96A0B5]/80"
            >
              Starting at $6,999
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CapacityHero;
