import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { MotionPreferencesProvider, useMotionPreferences, DROPBOX_EASING_CSS } from '@/hooks/use-scroll-reveal';
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL, CONTACT_EMAIL } from '@/constants/urls';
import { 
  Check, X, ArrowRight, ChevronDown,
  ClipboardList, DollarSign, Users, BarChart3, Heart, HandHelping, FolderOpen,
  LucideIcon, Plus
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Scroll reveal wrapper component
function ScrollRevealBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useMotionPreferences();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const style: React.CSSProperties = reducedMotion
    ? { opacity: 1, transform: 'none' }
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 700ms ${DROPBOX_EASING_CSS} ${delay}ms, transform 700ms ${DROPBOX_EASING_CSS} ${delay}ms`,
      };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}

// Area selection data with icons
interface AreaData {
  id: string;
  label: string;
  icon: LucideIcon;
  shortDesc: string;
}

const areas: AreaData[] = [
  { id: 'board', label: 'Board & Governance', icon: ClipboardList, shortDesc: 'Meetings, decisions, approvals' },
  { id: 'money', label: 'Money & Grants', icon: DollarSign, shortDesc: 'Spending, receipts, grant records' },
  { id: 'people', label: 'People', icon: Users, shortDesc: 'Roles, contracts, onboarding' },
  { id: 'programs', label: 'Programs', icon: BarChart3, shortDesc: 'Services, outcomes, tracking' },
  { id: 'fundraising', label: 'Fundraising', icon: Heart, shortDesc: 'Donor records, giving history' },
  { id: 'volunteers', label: 'Volunteers', icon: HandHelping, shortDesc: 'Onboarding, tracking, records' },
  { id: 'tools', label: 'Tools & Files', icon: FolderOpen, shortDesc: 'Folders, templates, routines' },
];

// FAQ data
const faqs = [
  {
    question: "What is an area?",
    answer: "An area is one of seven operational domains we help strengthen: Board/Governance, Money/Grants, People/HR, Programs, Fundraising/Donors, Volunteers, and Tools/Files. Each area includes systems, templates, and training."
  },
  {
    question: "Do I have to pick 2 areas?",
    answer: "Yes, we require a minimum of 2 areas to ensure meaningful impact. Most organizations find that their operational challenges span multiple areas, and addressing them together creates better results."
  },
  {
    question: "Will I get a quote?",
    answer: "Yes. After our call, you'll receive a clear quote with scope, price, and next steps within 48 hours. No hidden fees or surprises."
  },
  {
    question: "Is this Canada-only?",
    answer: "Yes, we exclusively serve Canadian nonprofits and charities. Our systems are designed for Canadian regulatory requirements, funding landscapes, and organizational structures."
  }
];

// 1. Hero Section - Dark Navy matching homepage
const HeroSection = () => {
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
    <section ref={heroRef} id="hero" aria-labelledby="hero-heading" className="min-h-screen relative overflow-hidden bg-secondary-background">
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
        <div className="flex-1 w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 2xl:py-36 flex flex-col justify-center">
          <div className="text-center">
            {/* Main Headline */}
            <h1 
              id="hero-heading" 
              style={revealStyle(100)} 
              className="mb-6 sm:mb-8 md:mb-10 xl:mb-12 text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[6.5rem] font-extrabold text-white leading-[1.05] tracking-[-0.03em]"
            >
              Ready to get <span className="text-accent">funder-ready</span>?
            </h1>

            {/* Subheadline */}
            <p 
              style={revealStyle(200)} 
              className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] leading-snug max-w-[48ch] mx-auto mb-8 sm:mb-10 md:mb-12 text-white/80"
            >
              Built by a former grant fund manager. Nimara helps Canadian nonprofits build the systems funders actually look for.
            </p>

            {/* Bullets */}
            <ul 
              style={revealStyle(250)} 
              className="inline-flex flex-col items-start gap-2 sm:gap-3 mb-6 sm:mb-8 text-left" 
              aria-label="Key benefits"
            >
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-white/75">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>From $6,499 CAD per area</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-white/75">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>Canada-only specialists</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-white/75">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>Not grant writers — we build systems</span>
              </li>
            </ul>

            {/* CTAs */}
            <div 
              style={revealStyle(300)} 
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6" 
              role="group" 
              aria-label="Get started options"
            >
              {/* Primary CTA */}
              <a 
                href="#booking" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg select-none transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent bg-primary text-primary-foreground"
              >
                Book a call
                <span className="text-base sm:text-lg" aria-hidden="true">→</span>
              </a>

              {/* Secondary CTA */}
              <a 
                href={TYPEFORM_HEALTH_CHECK_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center gap-2 text-sm sm:text-base text-white hover:opacity-80 select-none transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
              >
                Or try the 6-minute check first
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Trust line */}
            <div style={revealStyle(400)} className="mt-6 sm:mt-8">
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

// 2. Interactive Area Selection
const AreaSelectionSection = () => {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleArea = (id: string) => {
    setSelectedAreas(prev => 
      prev.includes(id) 
        ? prev.filter(a => a !== id)
        : [...prev, id]
    );
  };

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-36 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <ScrollRevealBlock>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary mb-4 sm:mb-6">
              Choose Your Focus
            </p>
          </ScrollRevealBlock>
          <ScrollRevealBlock delay={50}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8">
              Pick at least <span className="text-primary">2 areas</span>
            </h2>
          </ScrollRevealBlock>
          <ScrollRevealBlock delay={100}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              We'll start with what's most urgent.
            </p>
          </ScrollRevealBlock>
        </div>

        {/* Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-12 md:mb-16">
          {areas.map((area, index) => {
            const isSelected = selectedAreas.includes(area.id);
            const Icon = area.icon;
            return (
              <ScrollRevealBlock key={area.id} delay={150 + index * 40}>
                <motion.button
                  onClick={() => toggleArea(area.id)}
                  whileTap={{ scale: 0.995 }}
                  className={`group relative w-full text-left transition-all duration-300 ${
                    isSelected ? 'z-10' : ''
                  }`}
                >
                  <div 
                    className={`relative p-6 sm:p-8 md:p-10 rounded-xl border-2 overflow-hidden transition-all duration-300 ${
                      isSelected
                        ? 'bg-primary border-primary text-primary-foreground'
                        : 'bg-card border-border hover:border-primary/30 hover:bg-muted/50'
                    }`}
                  >
                    {/* Top row: Icon + Selection indicator */}
                    <div className="flex items-start justify-between mb-6 sm:mb-8">
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${
                        isSelected ? 'text-primary-foreground' : 'text-primary'
                      }`} />
                      
                      {/* Selection circle */}
                      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isSelected 
                          ? 'border-primary-foreground bg-primary-foreground' 
                          : 'border-border group-hover:border-primary/50'
                      }`}>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2.5 h-2.5 rounded-full bg-primary"
                          />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className={`text-xl sm:text-2xl md:text-3xl font-semibold tracking-[-0.02em] mb-2 sm:mb-3 transition-colors duration-300 ${
                        isSelected ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                        {area.label}
                      </h3>
                      <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                        isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'
                      }`}>
                        {area.shortDesc}
                      </p>
                    </div>
                  </div>
                </motion.button>
              </ScrollRevealBlock>
            );
          })}
        </div>

        {/* Selection Counter & CTA */}
        <ScrollRevealBlock delay={500}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 py-6 sm:py-8 border-t border-border">
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Visual counter dots */}
              <div className="flex items-center gap-1.5">
                {areas.map((area) => (
                  <div 
                    key={area.id}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      selectedAreas.includes(area.id) 
                        ? 'bg-primary scale-110' 
                        : 'bg-border'
                    }`}
                  />
                ))}
              </div>
              
              <div className="h-4 w-px bg-border" />
              
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{selectedAreas.length}</span> of {areas.length} selected
                {selectedAreas.length < 2 && (
                  <span className="ml-2 text-muted-foreground/60">· {2 - selectedAreas.length} more required</span>
                )}
              </p>
            </div>

            <Button 
              asChild={selectedAreas.length >= 2}
              size="lg" 
              className={`w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 text-sm font-semibold rounded-lg transition-all duration-300 ${
                selectedAreas.length >= 2 
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                  : 'bg-muted text-muted-foreground cursor-not-allowed pointer-events-none'
              }`}
            >
              {selectedAreas.length >= 2 ? (
                <a href="#booking">
                  Continue →
                </a>
              ) : (
                <span>
                  Continue →
                </span>
              )}
            </Button>
          </div>
        </ScrollRevealBlock>
      </div>
    </section>
  );
};

// 3. Process Steps
const ProcessSection = () => {
  const steps = [
    {
      title: "Before the call",
      description: "You answer the Nimara Health Check (NOHC).",
      outcome: "A clear starting point."
    },
    {
      title: "On the call",
      description: "We review your NOHC level and pick what to fix first.",
      outcome: "A simple plan."
    },
    {
      title: "After the call",
      description: "We send a quote based on your areas.",
      outcome: "Price + next steps."
    }
  ];

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <ScrollRevealBlock>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary mb-4 sm:mb-6">
              How It Works
            </p>
          </ScrollRevealBlock>
          <ScrollRevealBlock delay={50}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8">
              Simple. Clear. <span className="text-primary">No surprises.</span>
            </h2>
          </ScrollRevealBlock>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {steps.map((step, index) => (
            <ScrollRevealBlock key={step.title} delay={200 + index * 80}>
              <div className="group relative bg-card border border-border p-6 sm:p-8 md:p-10 rounded-xl h-full flex flex-col hover:border-primary/30 transition-colors duration-300">
                {/* Number */}
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-primary mb-8 sm:mb-10">
                  0{index + 1}
                </span>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-foreground mb-3 sm:mb-4">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  {step.description}
                </p>
                
                {/* Outcome */}
                <div className="mt-auto pt-4 sm:pt-6 border-t border-border">
                  <p className="text-xs font-medium tracking-[0.05em] uppercase text-muted-foreground">
                    You get
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-foreground mt-1">
                    {step.outcome}
                  </p>
                </div>
              </div>
            </ScrollRevealBlock>
          ))}
        </div>

        {/* Pricing line */}
        <ScrollRevealBlock delay={500}>
          <p className="text-center text-muted-foreground text-sm tracking-wide">
            From $6,499 CAD per area · Minimum 2 areas
          </p>
        </ScrollRevealBlock>
      </div>
    </section>
  );
};

// 4. Preparation Section
const PreparationSection = () => {
  const items = [
    "What funding or deadline is coming up",
    "What's messy right now (files, tracking, reporting)",
    "Who will use the system day to day"
  ];

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <ScrollRevealBlock>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-[1.1]">
              What we'll ask <span className="text-primary">on the call</span>
            </h2>
          </ScrollRevealBlock>
        </div>
        
        <ScrollRevealBlock delay={100}>
          <div className="bg-card rounded-xl border border-border p-6 sm:p-8 md:p-10">
            <ul className="space-y-4 sm:space-y-5">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollRevealBlock>
      </div>
    </section>
  );
};

// 5. Pricing Block
const PricingBlock = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <ScrollRevealBlock>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary mb-4 sm:mb-6">
              Investment
            </p>
          </ScrollRevealBlock>
          <ScrollRevealBlock delay={50}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
              Transparent pricing
            </h2>
          </ScrollRevealBlock>
        </div>

        <ScrollRevealBlock delay={100}>
          <div className="bg-card rounded-xl border border-border p-8 sm:p-10 md:p-14 text-center">
            <div className="mb-4 sm:mb-6">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
                $6,499
              </span>
              <span className="text-muted-foreground ml-2 text-base sm:text-lg">CAD / area</span>
            </div>
            <p className="text-foreground font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Minimum 2 areas (starting at $12,998 CAD)
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              Final price depends on what you already have and what's missing.
            </p>
          </div>
        </ScrollRevealBlock>
      </div>
    </section>
  );
};

// 6. Fit Filter
const FitFilterSection = () => {
  const bestFit = [
    "Less stress at reporting time",
    "Clear tracking your team can keep current",
    "A simple, repeatable way to run the work"
  ];

  const notAFit = [
    "Someone to write grants for you",
    "An audit opinion",
    "A one-time document with no upkeep"
  ];

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <ScrollRevealBlock>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary mb-4 sm:mb-6">
              Is This Right For You?
            </p>
          </ScrollRevealBlock>
          <ScrollRevealBlock delay={50}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-4 sm:mb-6">
              Let's make sure we're a <span className="text-primary">good fit</span>
            </h2>
          </ScrollRevealBlock>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* Best Fit */}
          <ScrollRevealBlock delay={100}>
            <div className="h-full bg-card rounded-xl border border-border p-6 sm:p-8 md:p-10">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                Best fit if you want
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {bestFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollRevealBlock>

          {/* Not a Fit */}
          <ScrollRevealBlock delay={200}>
            <div className="h-full bg-card rounded-xl border border-border p-6 sm:p-8 md:p-10">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                Not a fit if you want
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {notAFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-muted-foreground" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollRevealBlock>
        </div>
      </div>
    </section>
  );
};

// 7. Booking Section
const BookingSection = () => {
  return (
    <section id="booking" className="py-20 md:py-28 lg:py-36 bg-secondary-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <ScrollRevealBlock>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-accent mb-4 sm:mb-6">
              Get Started
            </p>
          </ScrollRevealBlock>
          <ScrollRevealBlock delay={50}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Book your call
            </h2>
          </ScrollRevealBlock>
        </div>

        {/* Calendly Embed */}
        <ScrollRevealBlock delay={200}>
          <div className="w-full bg-white border border-white/10 rounded-xl overflow-hidden" style={{ height: '700px' }}>
            <iframe
              src={CALENDLY_BOOKING_URL}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Book a call with Nimara"
              className="w-full h-full"
            />
          </div>
        </ScrollRevealBlock>

        {/* Backup Contact */}
        <ScrollRevealBlock delay={300}>
          <p className="text-center text-white/60 mt-6 sm:mt-8 mb-12 sm:mb-14">
            Prefer email?{' '}
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white font-medium underline underline-offset-4 hover:text-white/80 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </ScrollRevealBlock>

        {/* FAQ Section */}
        <ScrollRevealBlock delay={400}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:gap-12 lg:gap-16">
              {/* Title on the left */}
              <div className="md:w-32 lg:w-48 flex-shrink-0 mb-6 sm:mb-8 md:mb-0">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">FAQs</h3>
              </div>
              
              {/* Accordion on the right */}
              <div className="flex-1">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="border-b-0 border-t border-dashed border-white/20 py-1"
                    >
                      <AccordionTrigger className="text-left text-white hover:no-underline py-4 sm:py-5 text-sm sm:text-base md:text-lg font-medium [&>svg]:hidden group flex justify-between items-center gap-4">
                        <span className="flex-1">{faq.question}</span>
                        <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-data-[state=open]:rotate-45 transition-transform duration-200">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-background" />
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-white/70 pb-4 sm:pb-5 pr-12 sm:pr-14 text-sm sm:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </ScrollRevealBlock>
      </div>
    </section>
  );
};

// Main Page Component
const CapacityBuildout = () => {
  return (
    <MotionPreferencesProvider>
      <div className="min-h-screen bg-background">
        <ScrollToTop />
        
        <Helmet>
          <title>Book a Call | Capacity Buildout | Nimara</title>
          <meta name="description" content="Book a call to get a clear scope and price for strengthening your nonprofit's operations. From $6,499 CAD per area. Canada-only." />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://nimara.ca/capacity-buildout" />
          
          <meta property="og:title" content="Book a Call | Capacity Buildout | Nimara" />
          <meta property="og:description" content="Tell us what you need help with. We'll give you a clear scope and price for your nonprofit." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nimara.ca/capacity-buildout" />
          <meta property="og:image" content="https://nimara.ca/og-image.png" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Book a Call | Capacity Buildout | Nimara" />
          <meta name="twitter:description" content="Tell us what you need help with. We'll give you a clear scope and price." />
        </Helmet>
        
        <Header />
        
        <main id="main" style={{ paddingTop: 'calc(var(--announcement-height, 0px) + 5rem)' }}>
          <HeroSection />
          <AreaSelectionSection />
          <ProcessSection />
          <PreparationSection />
          <PricingBlock />
          <FitFilterSection />
          <BookingSection />
        </main>
        
        <Footer />
      </div>
    </MotionPreferencesProvider>
  );
};

export default CapacityBuildout;
