import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { MotionPreferencesProvider, useMotionPreferences, DROPBOX_EASING_CSS } from '@/hooks/use-scroll-reveal';
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL, CONTACT_EMAIL } from '@/constants/urls';
import { 
  Check, X, ArrowRight, Clipboard, MessageSquare, FileCheck, Calendar,
  ClipboardList, DollarSign, Users, BarChart3, Heart, HandHelping, FolderOpen,
  LucideIcon, Plus
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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

// Area selection data with icons and colors matching HelpOrbitCarousel
interface AreaData {
  id: string;
  label: string;
  icon: LucideIcon;
  shortDesc: string;
  color: string;
}

const areas: AreaData[] = [
  { id: 'board', label: 'Board & Governance', icon: ClipboardList, shortDesc: 'Meetings, decisions, approvals', color: 'hsl(220, 53%, 12%)' },
  { id: 'money', label: 'Money & Grants', icon: DollarSign, shortDesc: 'Spending, receipts, grant records', color: 'hsl(220, 40%, 18%)' },
  { id: 'people', label: 'People', icon: Users, shortDesc: 'Roles, contracts, onboarding', color: 'hsl(220, 35%, 24%)' },
  { id: 'programs', label: 'Programs', icon: BarChart3, shortDesc: 'Services, outcomes, tracking', color: 'hsl(220, 53%, 12%)' },
  { id: 'fundraising', label: 'Fundraising', icon: Heart, shortDesc: 'Donor records, giving history', color: 'hsl(262, 45%, 28%)' },
  { id: 'volunteers', label: 'Volunteers', icon: HandHelping, shortDesc: 'Onboarding, tracking, records', color: 'hsl(220, 40%, 18%)' },
  { id: 'tools', label: 'Tools & Files', icon: FolderOpen, shortDesc: 'Folders, templates, routines', color: 'hsl(220, 35%, 24%)' },
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

// Premium Visual Card with noise texture and geometric lines
interface PremiumVisualCardProps {
  color: string;
  lineColor: string;
  isInView: boolean;
  children: React.ReactNode;
}

function PremiumVisualCard({ color, lineColor, isInView, children }: PremiumVisualCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full"
    >
      {/* Main colored panel */}
      <div 
        className="relative rounded-3xl overflow-hidden aspect-[4/3]"
        style={{ backgroundColor: color }}
      >
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Geometric lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke={lineColor} strokeWidth="1" opacity="0.3" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke={lineColor} strokeWidth="1" opacity="0.3" />
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke={lineColor} strokeWidth="1" opacity="0.2" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke={lineColor} strokeWidth="1" opacity="0.2" />
        </svg>

        {/* Content */}
        {children}
      </div>
    </motion.div>
  );
}

// Sticky Header
const StickyHeader = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-nim-navy flex items-center justify-center">
            <span className="text-sm font-bold text-white">N</span>
          </div>
          <span className="text-nim-navy font-semibold text-lg tracking-tight">
            Nimara
          </span>
        </Link>
        <Button asChild size="default" className="bg-nim-navy hover:bg-nim-navy/90 text-white">
          <a href="#booking">
            Book a call
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </motion.header>
  );
};

// 1. Hero Section - Dark Navy with Grid Pattern
const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative min-h-[90vh] flex items-center bg-secondary-background overflow-hidden pt-20"
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

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20 lg:py-28 text-center">
        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.02em] leading-[1.1] mb-6"
        >
          We know what funders look for.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
        >
          Built by a former grant fund manager. Nimara helps Canadian nonprofits build the systems funders actually look for. Simple. Documented. Proof-ready.
        </motion.p>

        {/* Pricing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-full mb-10"
        >
          <span className="text-white font-semibold text-lg">From $6,499 CAD per area</span>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {['Canada-only', 'Not an audit firm', 'Not grant writers'].map((badge) => (
            <span 
              key={badge}
              className="px-4 py-2 bg-white/5 border border-white/10 text-white/60 text-sm font-medium rounded-full"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-5"
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-6 text-base font-semibold rounded-xl">
            <a href="#booking">
              Book a call
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white/80 transition-colors text-sm underline underline-offset-4"
          >
            Try the 6-minute check
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// 2. Interactive Area Selection - Premium Card Grid
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
    <section ref={ref} className="py-24 md:py-32" style={{ backgroundColor: '#f5f5f0' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <ScrollRevealBlock>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Choose Your Focus
            </p>
          </ScrollRevealBlock>
          <ScrollRevealBlock delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight mb-6">
              What areas do you want to{" "}
              <span className="relative inline-block">
                strengthen
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q25,0 50,8 T100,8"
                    stroke="#a78bfa"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ?
            </h2>
          </ScrollRevealBlock>
          <ScrollRevealBlock delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Pick at least 2. We'll start with what's most urgent.
            </p>
          </ScrollRevealBlock>
        </div>

        {/* Area Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {areas.map((area, index) => {
            const isSelected = selectedAreas.includes(area.id);
            const Icon = area.icon;
            return (
              <ScrollRevealBlock key={area.id} delay={300 + index * 50}>
                <motion.button
                  onClick={() => toggleArea(area.id)}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative w-full text-left rounded-2xl overflow-hidden transition-all duration-300 ${
                    isSelected
                      ? 'ring-4 ring-primary ring-offset-2 ring-offset-[#f5f5f0]'
                      : 'hover:shadow-xl'
                  }`}
                  style={{ 
                    backgroundColor: area.color,
                    aspectRatio: '4/3'
                  }}
                >
                  {/* Noise texture overlay */}
                  <div 
                    className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                  {/* Selection indicator */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg"
                    >
                      <Check className="w-5 h-5 text-primary" />
                    </motion.div>
                  )}

                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {area.label}
                    </h3>
                    <p className="text-sm text-white/80">
                      {area.shortDesc}
                    </p>
                  </div>
                </motion.button>
              </ScrollRevealBlock>
            );
          })}
        </div>

        {/* Selection Counter & CTA */}
        <ScrollRevealBlock delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-white rounded-2xl border border-border">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {selectedAreas.length > 0 ? (
                  selectedAreas.slice(0, 4).map((areaId) => {
                    const area = areas.find(a => a.id === areaId);
                    if (!area) return null;
                    return (
                      <div 
                        key={area.id}
                        className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shadow-sm"
                        style={{ backgroundColor: area.color }}
                      >
                        <area.icon className="w-4 h-4 text-white" />
                      </div>
                    );
                  })
                ) : (
                  <div className="w-10 h-10 rounded-full bg-muted border-2 border-white flex items-center justify-center">
                    <ClipboardList className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
                {selectedAreas.length > 4 && (
                  <div className="w-10 h-10 rounded-full bg-secondary-background border-2 border-white flex items-center justify-center text-xs font-semibold text-white">
                    +{selectedAreas.length - 4}
                  </div>
                )}
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {selectedAreas.length} of {areas.length} selected
                </p>
                <p className="text-sm text-muted-foreground">
                  {selectedAreas.length < 2 ? `Select ${2 - selectedAreas.length} more to continue` : 'Ready to book your call'}
                </p>
              </div>
            </div>

            <Button 
              asChild={selectedAreas.length >= 2}
              size="lg" 
              className={`px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 ${
                selectedAreas.length >= 2 
                  ? 'bg-secondary-background hover:bg-secondary-background/90 text-white' 
                  : 'bg-muted text-muted-foreground cursor-not-allowed pointer-events-none'
              }`}
            >
              {selectedAreas.length >= 2 ? (
                <a href="#booking">
                  Continue to booking
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              ) : (
                <span>
                  Continue to booking
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              )}
            </Button>
          </div>
        </ScrollRevealBlock>
      </div>
    </section>
  );
};

// 3. Process Steps - Clean Card Grid
const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Clipboard,
      title: "Before the call",
      description: "You answer the Nimara Health Check (NOHC).",
      outcome: "You get: a clear starting point."
    },
    {
      icon: MessageSquare,
      title: "On the call",
      description: "We review your NOHC level and pick what to fix first.",
      outcome: "You get: a simple plan."
    },
    {
      icon: FileCheck,
      title: "After the call",
      description: "We send a quote based on your areas.",
      outcome: "You get: price + next steps."
    }
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollRevealBlock>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              The Process
            </p>
          </ScrollRevealBlock>
          <ScrollRevealBlock delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Simple. <span className="text-primary">Clear.</span> No surprises.
            </h2>
          </ScrollRevealBlock>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, index) => (
            <ScrollRevealBlock key={step.title} delay={200 + index * 100}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl border border-border p-8 h-full flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                
                {/* Outcome - highlighted */}
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground">
                    {step.outcome}
                  </p>
                </div>
              </motion.div>
            </ScrollRevealBlock>
          ))}
        </div>

        {/* Pricing line */}
        <ScrollRevealBlock delay={500}>
          <p className="text-center text-muted-foreground text-sm">
            From $6,499 CAD per area. Minimum 2 areas.
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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollRevealBlock>
          <div className="bg-nim-cloud rounded-3xl p-8 md:p-12 border border-border">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              What we'll ask on the call
            </h3>
            <ul className="space-y-5">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-accent-foreground" />
                  </div>
                  <span className="text-foreground text-lg">{item}</span>
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32" style={{ backgroundColor: '#faf8f5' }}>
      <div className="max-w-2xl mx-auto px-6">
        <ScrollRevealBlock>
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Transparent Pricing
            </p>
          </div>
        </ScrollRevealBlock>

        <ScrollRevealBlock delay={100}>
          <PremiumVisualCard
            color="hsl(220, 53%, 15%)"
            lineColor="hsl(220, 50%, 40%)"
            isInView={isInView}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-center w-[90%] max-w-[400px]"
            >
              <h3 className="text-lg font-semibold text-muted-foreground mb-4">
                Pricing
              </h3>
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-primary">
                  $6,499
                </span>
                <span className="text-muted-foreground ml-2">CAD / area</span>
              </div>
              <p className="text-foreground font-medium mb-4">
                Minimum 2 areas (starting at $12,998 CAD)
              </p>
              <p className="text-sm text-muted-foreground">
                Final price depends on what you already have and what's missing.
              </p>
            </motion.div>
          </PremiumVisualCard>
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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <ScrollRevealBlock>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Is This Right For You?
            </p>
          </ScrollRevealBlock>
          <ScrollRevealBlock delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Let's make sure we're a <span className="text-primary">good fit</span>
            </h2>
          </ScrollRevealBlock>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Best Fit */}
          <ScrollRevealBlock delay={200}>
            <Card className="h-full border-border bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Best fit if you want
                </h3>
                <ul className="space-y-4">
                  {bestFit.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollRevealBlock>

          {/* Not a Fit */}
          <ScrollRevealBlock delay={300}>
            <Card className="h-full border-border bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Not a fit if you want
                </h3>
                <ul className="space-y-4">
                  {notAFit.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-red-400" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollRevealBlock>
        </div>
      </div>
    </section>
  );
};

// 7. Booking Section
const BookingSection = () => {
  return (
    <section id="booking" className="py-24 md:py-32" style={{ backgroundColor: '#faf8f5' }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <ScrollRevealBlock>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Get Started
            </p>
          </ScrollRevealBlock>
          <ScrollRevealBlock delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Book your call
            </h2>
          </ScrollRevealBlock>
        </div>

        {/* Calendly Embed */}
        <ScrollRevealBlock delay={200}>
          <div className="w-full bg-white border border-border rounded-3xl overflow-hidden shadow-lg" style={{ height: '700px' }}>
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
          <p className="text-center text-muted-foreground mt-8 mb-14">
            Prefer email?{' '}
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </ScrollRevealBlock>

        {/* FAQ Section - Deel-style design */}
        <ScrollRevealBlock delay={400}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:gap-16">
              {/* Title on the left */}
              <div className="md:w-48 flex-shrink-0 mb-8 md:mb-0">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">FAQs</h3>
              </div>
              
              {/* Accordion on the right */}
              <div className="flex-1">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="border-b-0 border-t border-dashed border-foreground/20 py-1"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 text-base md:text-lg font-medium [&>svg]:hidden group flex justify-between items-center gap-4">
                        <span className="flex-1">{faq.question}</span>
                        <span className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 group-data-[state=open]:rotate-45 transition-transform duration-200">
                          <Plus className="w-5 h-5 text-background" />
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 pr-14">
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
      <div className="min-h-screen bg-white">
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
        
        <StickyHeader />
        
        <main id="main">
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
