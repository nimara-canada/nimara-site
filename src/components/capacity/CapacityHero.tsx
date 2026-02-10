import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useMotionPreferences, DROPBOX_EASING_CSS } from '@/hooks/use-scroll-reveal';
import { ArrowRight } from 'lucide-react';
import { CALENDLY_BOOKING_URL } from '@/constants/urls';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const DOMAIN_CHIPS = [
  { id: 'governance', label: 'Board & Governance' },
  { id: 'money', label: 'Money / Books' },
  { id: 'grants', label: 'Grants' },
  { id: 'people', label: 'People / HR' },
  { id: 'programs', label: 'Programs' },
  { id: 'fundraising', label: 'Fundraising' },
  { id: 'systems', label: 'Systems & Records' },
];

interface CapacityHeroProps {
  selectedDomains: string[];
  onDomainsChange: (domains: string[]) => void;
}

const CapacityHero = ({ selectedDomains, onDomainsChange }: CapacityHeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [teamSize, setTeamSize] = useState<'small' | 'large'>('small');
  const heroRef = useRef<HTMLElement>(null);
  const { reducedMotion } = useMotionPreferences();
  const { toast } = useToast();

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

  const toggleDomain = (id: string) => {
    if (selectedDomains.includes(id)) {
      onDomainsChange(selectedDomains.filter(d => d !== id));
    } else {
      if (selectedDomains.length >= 2) {
        toast({
          description: "Choose up to 2 domains.",
          duration: 2000,
        });
        return;
      }
      onDomainsChange([...selectedDomains, id]);
    }
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
        <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 pt-[60px] sm:pt-[80px] md:pt-[100px] pb-[48px] sm:pb-[60px] md:pb-[80px]">
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Messaging */}
            <div className="max-w-[520px]">
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
                className="text-[clamp(2.2rem,6vw,5rem)] font-black text-white leading-[1.05] tracking-[-0.03em] mb-5 sm:mb-6 uppercase"
              >
                Build funder-ready operations across 7 domains.
              </h1>

              {/* Subhead */}
              <p 
                style={revealStyle(100)} 
                className="text-[15px] sm:text-[17px] md:text-[18px] font-normal leading-[1.5] text-white/70 max-w-[440px] mb-5 sm:mb-6"
              >
                Pick your weak domain. We install the system with you.
              </p>

              {/* Trust line */}
              <p 
                style={revealStyle(150)} 
                className="text-[12px] sm:text-[13px] font-normal text-white/40"
              >
                Google Workspace / Microsoft 365 • QuickBooks / Xero • 100% virtual
              </p>
            </div>

            {/* RIGHT COLUMN: Domain Card */}
            <div 
              style={revealStyle(200)} 
              className="w-full max-w-[440px] lg:max-w-none bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-7 lg:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              {/* Card Header */}
              <div className="mb-5">
                <h2 className="text-[18px] sm:text-[20px] font-semibold text-white mb-1">
                  Pick your domain
                </h2>
                <p className="text-[13px] text-white/50">
                  Select up to 2.
                </p>
              </div>

              {/* Domain Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {DOMAIN_CHIPS.map((domain) => {
                  const isSelected = selectedDomains.includes(domain.id);
                  return (
                    <button
                      key={domain.id}
                      onClick={() => toggleDomain(domain.id)}
                      className={cn(
                        "px-3.5 py-2 text-[13px] sm:text-[14px] font-medium rounded-lg border-2 transition-all duration-200",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-background",
                        isSelected
                          ? "border-accent bg-accent/10 text-accent shadow-[0_0_16px_rgba(172,252,227,0.2)]"
                          : "border-white/15 bg-white/[0.02] text-white/70 hover:border-white/30 hover:bg-white/[0.04] hover:-translate-y-0.5"
                      )}
                      aria-pressed={isSelected}
                    >
                      {domain.label}
                    </button>
                  );
                })}
              </div>

              {/* Selection indicator (shows when user tries to select 3rd) */}
              {selectedDomains.length >= 2 && (
                <p className="text-[12px] text-accent/70 mb-4 -mt-2">
                  ✓ 2 domains selected
                </p>
              )}

              {/* Divider */}
              <div className="h-px bg-white/10 mb-5" />

              {/* Team size label */}
              <p className="text-[12px] font-medium text-white/50 uppercase tracking-[0.1em] mb-3">
                Team size
              </p>

              {/* Segmented Toggle */}
              <div className="flex bg-white/[0.04] rounded-lg p-1 mb-5">
                <button
                  onClick={() => setTeamSize('small')}
                  className={cn(
                    "flex-1 py-2.5 px-4 text-[14px] font-medium rounded-md transition-all duration-200",
                    isSmallTeam 
                      ? "bg-accent text-secondary-background" 
                      : "text-white/60 hover:text-white/80"
                  )}
                >
                  0–15 staff
                </button>
                <button
                  onClick={() => setTeamSize('large')}
                  className={cn(
                    "flex-1 py-2.5 px-4 text-[14px] font-medium rounded-md transition-all duration-200",
                    !isSmallTeam 
                      ? "bg-accent text-secondary-background" 
                      : "text-white/60 hover:text-white/80"
                  )}
                >
                  16+ staff
                </button>
              </div>

              {/* Dynamic price */}
              <p className="text-[18px] sm:text-[20px] font-semibold text-white mb-5">
                {isSmallTeam ? 'Starting at $6,950' : 'Custom pricing (scope-based)'}
              </p>

              {/* Primary CTA */}
              <a 
                href="/capacity-buildout"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-[16px] font-semibold rounded-xl text-white bg-primary transition-all duration-200 hover:bg-[#5838B8] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(105,69,216,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-background"
              >
                {isSmallTeam ? 'Book a 30-min Scope Call' : 'Request a custom quote'}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              {/* Microcopy */}
              <p className="text-[12px] sm:text-[13px] text-white/40 text-center mt-4">
                Leave with a recommended scope, timeline, and budget range.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CapacityHero;
