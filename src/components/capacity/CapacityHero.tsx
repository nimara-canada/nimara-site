import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useMotionPreferences, DROPBOX_EASING_CSS } from '@/hooks/use-scroll-reveal';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CALENDLY_BOOKING_URL } from '@/constants/urls';

// Domain data
const domains = [
  { id: 'board', label: 'Board & Governance' },
  { id: 'money', label: 'Money / Books' },
  { id: 'grants', label: 'Grants' },
  { id: 'people', label: 'People / HR' },
  { id: 'programs', label: 'Programs' },
  { id: 'fundraising', label: 'Fundraising' },
  { id: 'systems', label: 'Systems & Records' },
];

type StaffSize = '0-15' | '16+';

const CapacityHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [staffSize, setStaffSize] = useState<StaffSize>('0-15');
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
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

  const toggleDomain = (id: string) => {
    setSelectedDomains(prev => {
      if (prev.includes(id)) {
        return prev.filter(d => d !== id);
      }
      // Allow max 2 selections
      if (prev.length >= 2) {
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  };

  // Dynamic content based on staff size
  const isSmallOrg = staffSize === '0-15';
  const recommendation = isSmallOrg 
    ? 'Recommended: Starter install (foundational domains)'
    : 'Recommended: Custom multi-domain install';
  const pricing = isSmallOrg 
    ? 'Starting at $6,999'
    : 'Custom pricing (based on complexity)';
  const ctaText = isSmallOrg 
    ? 'Book a 15-min fit call'
    : 'Request a custom quote';

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('domains');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        className="relative z-10 min-h-screen flex flex-col justify-center" 
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
          {/* Two-column layout: stacked on mobile, side-by-side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
            
            {/* LEFT COLUMN - Copy */}
            <div className="flex flex-col justify-center">
              {/* Eyebrow */}
              <p 
                style={revealStyle(50)} 
                className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4 sm:mb-6"
              >
                Capacity-building implementation
              </p>

              {/* H1 */}
              <h1 
                id="hero-heading" 
                style={revealStyle(100)} 
                className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-5 sm:mb-6"
              >
                Turn grant funding into systems your team actually uses — in 6 weeks.
              </h1>

              {/* Subhead */}
              <p 
                style={revealStyle(150)} 
                className="text-sm sm:text-base md:text-lg lg:text-[1.1rem] leading-relaxed text-white/75 mb-6 sm:mb-8 max-w-[52ch]"
              >
                We install funder-ready workflows for spending proof, board decisions, reporting, and file systems — inside the tools you already use.
              </p>

              {/* Trust line */}
              <p 
                style={revealStyle(200)} 
                className="text-xs sm:text-[13px] text-white/50 tracking-wide"
              >
                Works with Google Workspace / Microsoft 365 + QuickBooks / Xero. 100% virtual.
              </p>
            </div>

            {/* RIGHT COLUMN - Fit & Path Card */}
            <div style={revealStyle(250)} className="w-full">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/20 border border-white/10">
                {/* Card Title */}
                <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-6">
                  Find your best path
                </h2>

                {/* A) Staff Size Toggle */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Staff size
                  </label>
                  <div className="flex bg-muted rounded-lg p-1" role="radiogroup" aria-label="Select staff size">
                    <button
                      type="button"
                      role="radio"
                      aria-checked={staffSize === '0-15'}
                      onClick={() => setStaffSize('0-15')}
                      className={cn(
                        "flex-1 py-3 px-4 text-sm font-semibold rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                        staffSize === '0-15'
                          ? "bg-white text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
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
                        "flex-1 py-3 px-4 text-sm font-semibold rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                        staffSize === '16+'
                          ? "bg-white text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      16+ staff
                    </button>
                  </div>
                </div>

                {/* B) Domain Picker */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Areas of focus <span className="font-normal">(select 1–2)</span>
                  </label>
                  <div className="flex flex-wrap gap-2" role="group" aria-label="Select areas of focus">
                    {domains.map((domain) => {
                      const isSelected = selectedDomains.includes(domain.id);
                      return (
                        <button
                          key={domain.id}
                          type="button"
                          onClick={() => toggleDomain(domain.id)}
                          aria-pressed={isSelected}
                          className={cn(
                            "px-3.5 py-2 text-[13px] font-medium rounded-full border-2 transition-all duration-200",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                            isSelected
                              ? "bg-accent/10 border-accent text-accent"
                              : "bg-white border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          )}
                        >
                          {domain.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border my-6" />

                {/* C) Dynamic Recommendation */}
                <p className="text-[13px] text-muted-foreground mb-2">
                  {recommendation}
                </p>

                {/* D) Dynamic Pricing */}
                <p className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-6">
                  {pricing}
                </p>

                {/* E) Primary CTA */}
                <a
                  href={CALENDLY_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {ctaText}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                {/* F) Secondary Link */}
                <a
                  href="#domains"
                  onClick={scrollToSection}
                  className="w-full inline-flex items-center justify-center gap-1.5 mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus-visible:underline"
                >
                  See the 7 domains
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator - only on desktop */}
      <motion.div 
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2" 
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
