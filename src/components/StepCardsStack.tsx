import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";
import { ArrowUpRight, Check, Search, Wrench, RefreshCw } from "lucide-react";

const cards = [
  {
    step: 1,
    title: "Diagnose",
    description: "We find the gaps that make funding stressful. We review your finances, decisions, files, and reporting — then give you a scorecard and the exact order to fix it.",
    tools: ["Google Drive", "Microsoft 365", "Sheets", "Excel"],
    kidLine: "We look for the mess.",
    youGet: "A clear scorecard showing what to fix first.",
    icon: Search,
    visual: {
      color: 'hsl(var(--nim-navy))',
      lineColor: 'hsl(165, 40%, 60%)',
      statNumber: '0→4',
      statLabel: 'tier score',
      substat: 'Know where you stand',
      badge: { text: 'Health Check', color: 'mint' },
    }
  },
  {
    step: 2,
    title: "Build",
    description: "We don't teach. We install. We build working systems inside your tools — trackers, templates, folders, and dashboards your team can actually use.",
    tools: ["Google Drive", "Microsoft 365", "Templates", "Dashboards"],
    kidLine: "We build the helper machine.",
    youGet: "Working tools and routines your team can use.",
    icon: Wrench,
    visual: {
      color: 'hsl(var(--nim-purple))',
      lineColor: 'hsl(262, 50%, 70%)',
      statNumber: '7',
      statLabel: 'domains',
      substat: 'Systems installed',
      badge: { text: 'Ready to use', color: 'purple' },
      subTexts: ["Governance", "Finance", "HR", "Data", "Fundraising", "Volunteers", "Programs"],
    }
  },
  {
    step: 3,
    title: "Maintain",
    description: "Systems fail when people leave. Yours won't. You get a playbook and a rhythm that keeps everything running — so you stay funder-ready, year after year.",
    tools: ["Checklists", "Monthly rhythm", "Quarterly tune-up"],
    kidLine: "We make sure it doesn't break.",
    youGet: "Confidence that your systems stick.",
    icon: RefreshCw,
    visual: {
      color: 'hsl(var(--nim-mint))',
      lineColor: 'hsl(165, 40%, 40%)',
      statNumber: '90',
      statLabel: 'days support',
      substat: 'Quarterly check-ins',
      badge: { text: 'You run it', color: 'green' },
    }
  }
];

type BadgeColor = 'green' | 'mint' | 'blue' | 'purple';

const badgeColors: Record<BadgeColor, string> = {
  green: 'bg-green-100 text-green-700',
  mint: 'bg-accent/40 text-secondary-background',
  blue: 'bg-blue-100 text-blue-700',
  purple: 'bg-primary/20 text-primary',
};

// Premium floating card visual for each step - matching StepsSection style
const StepVisual = ({ card, isInView }: { card: typeof cards[0]; isInView: boolean }) => {
  const Icon = card.icon;
  const isDark = card.step !== 3; // Maintain card has light background

  return (
    <div className="relative h-full w-full flex items-center justify-center p-4 lg:p-6">
      {/* Large rounded panel with texture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative w-full h-full min-h-[320px] lg:min-h-[380px] rounded-[2rem] overflow-hidden"
        style={{ backgroundColor: card.visual.color }}
      >
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Geometric lines */}
        <svg className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="none">
          <line x1="0%" y1="20%" x2="100%" y2="60%" stroke={card.visual.lineColor} strokeWidth="1" />
          <line x1="20%" y1="0%" x2="80%" y2="100%" stroke={card.visual.lineColor} strokeWidth="1" />
          <line x1="60%" y1="0%" x2="100%" y2="40%" stroke={card.visual.lineColor} strokeWidth="1" />
          <line x1="0%" y1="80%" x2="40%" y2="100%" stroke={card.visual.lineColor} strokeWidth="1" />
        </svg>
        
        {/* Floating white card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6 w-[75%] sm:w-[70%] max-w-[280px]"
        >
          {/* Header */}
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-secondary-background">{card.title}</span>
          </div>
          
          {/* Stats box */}
          <div className="bg-muted rounded-lg p-3 border border-border">
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <motion.span
                className="text-3xl sm:text-4xl font-bold text-secondary-background tracking-tight"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {card.visual.statNumber}
              </motion.span>
              <span className="text-xs sm:text-sm text-muted-foreground">{card.visual.statLabel}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">{card.visual.substat}</p>
            
            {/* Domain tags for Build card */}
            {card.visual.subTexts && (
              <div className="flex flex-wrap gap-1 mb-2">
                {card.visual.subTexts.slice(0, 4).map((text, i) => (
                  <span key={i} className="text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary rounded">
                    {text}
                  </span>
                ))}
                {card.visual.subTexts.length > 4 && (
                  <span className="text-[10px] px-1.5 py-0.5 bg-muted text-muted-foreground rounded">
                    +{card.visual.subTexts.length - 4} more
                  </span>
                )}
              </div>
            )}
            
            <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold ${badgeColors[card.visual.badge.color as BadgeColor]}`}>
              <Check className="w-3 h-3" strokeWidth={3} />
              {card.visual.badge.text}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Mobile step card with intersection observer
const MobileStepCard = ({ 
  card, 
  index, 
  isInView, 
  onVisible, 
  isActive 
}: { 
  card: typeof cards[0]; 
  index: number; 
  isInView: boolean;
  onVisible: (index: number) => void;
  isActive: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible(index);
          }
        });
      },
      { threshold: 0.6, rootMargin: '-20% 0px -20% 0px' }
    );

    observer.observe(cardEl);
    return () => observer.disconnect();
  }, [index, onVisible]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
      className={`
        rounded-2xl p-6 border transition-all duration-300
        ${isActive 
          ? 'bg-card border-primary/20 shadow-xl' 
          : 'bg-card/80 border-border'
        }
      `}
    >
      <div className="flex items-center gap-4 mb-4">
        <span className={`
          w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300
          ${isActive 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-primary/10 text-primary'
          }
        `}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className={`
          text-xl font-bold transition-colors duration-300
          ${isActive ? 'text-primary' : 'text-foreground'}
        `}>
          {card.title}
        </h3>
      </div>
      <p className="text-muted-foreground mb-5 leading-relaxed">{card.description}</p>
      <div className="bg-accent/20 rounded-xl p-4 border border-accent/30">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-secondary-background" strokeWidth={3} />
          </div>
          <div>
            <p className="text-xs font-semibold text-secondary-background/60 uppercase tracking-wider mb-1">You get:</p>
            <p className="text-sm text-secondary-background font-medium">{card.youGet}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

// Mobile sticky progress indicator
const MobileProgressIndicator = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <div className="sticky top-20 z-10 lg:hidden mb-6">
      <div className="bg-card/95 backdrop-blur-sm rounded-full py-2 px-4 border border-border shadow-lg mx-auto w-fit">
        <div className="flex items-center gap-2">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`
                h-2 rounded-full transition-all duration-300
                ${index === activeIndex 
                  ? 'bg-primary w-8' 
                  : index < activeIndex 
                    ? 'bg-primary/40 w-2' 
                    : 'bg-muted w-2'
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StepCardsStack = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [activeStep, setActiveStep] = useState(0);
  const [mobileActiveStep, setMobileActiveStep] = useState(0);

  const handleMobileStepVisible = useCallback((index: number) => {
    setMobileActiveStep(index);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#faf8f5' }}
      aria-labelledby="process-heading"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
          >
            Our Process
          </motion.p>
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-foreground"
          >
            How we <span className="text-primary">help</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-muted-foreground mt-4 max-w-lg mx-auto"
          >
            3 steps. One clear path to funder-ready.
          </motion.p>
        </header>

        {/* Desktop: Two-column layout with visual */}
        <div className="hidden lg:grid lg:grid-cols-[340px_1fr_1fr] gap-8">
          {/* Left rail - Step names */}
          <nav className="space-y-2" aria-label="Process steps">
            {cards.map((card, index) => (
              <motion.button
                key={card.step}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                onClick={() => setActiveStep(index)}
                className={`
                  w-full text-left px-5 py-4 rounded-2xl transition-all duration-300
                  flex items-center gap-4 group
                  ${activeStep === index 
                    ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/20' 
                    : 'bg-card hover:bg-card/80 border border-transparent hover:border-border'
                  }
                `}
              >
                <span className={`
                  w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold
                  ${activeStep === index 
                    ? 'bg-white/20 text-primary-foreground' 
                    : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                  }
                `}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`font-semibold text-base ${activeStep === index ? '' : 'text-foreground'}`}>
                  {card.title}
                </span>
              </motion.button>
            ))}
          </nav>

          {/* Middle panel - Step details */}
          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-lg flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                Step {String(activeStep + 1).padStart(2, '0')}
              </span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 tracking-tight">
              {cards[activeStep].title}
            </h3>
            
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              {cards[activeStep].description}
            </p>

            {/* Tool tags */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {cards[activeStep].tools.map((tool, i) => (
                <span key={i} className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-full">
                  {tool}
                </span>
              ))}
            </div>
            
            <div className="bg-accent/20 rounded-2xl p-5 border border-accent/30">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-secondary-background" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary-background/60 uppercase tracking-wider mb-1">
                    You get:
                  </p>
                  <p className="text-secondary-background font-medium text-base lg:text-lg">
                    {cards[activeStep].youGet}
                  </p>
                </div>
              </div>
            </div>

            {/* Learn more link */}
            <a 
              href="/how-nimara-works" 
              className="inline-flex items-center gap-2 mt-8 text-primary font-medium group"
            >
              <span className="group-hover:underline">Learn more about our process</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right panel - Premium floating visual */}
          <div className="flex items-center justify-center">
            <StepVisual card={cards[activeStep]} isInView={isInView} />
          </div>
        </div>

        {/* Mobile: Progress indicator + Vertical list */}
        <div className="lg:hidden">
          <MobileProgressIndicator activeIndex={mobileActiveStep} />
          
          <div className="space-y-4">
            {cards.map((card, index) => (
              <MobileStepCard
                key={card.step}
                card={card}
                index={index}
                isInView={isInView}
                onVisible={handleMobileStepVisible}
                isActive={mobileActiveStep === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepCardsStack;
