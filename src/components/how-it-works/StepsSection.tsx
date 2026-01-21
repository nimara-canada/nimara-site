import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Calendar, FileCheck, Settings, Users, HandHeart, FolderOpen } from 'lucide-react';

const steps = [
  {
    id: 'start',
    name: 'Start',
    line: 'Book a free call or try the 6-minute check.',
    youGet: 'A clear next step — no pressure.',
    icon: Calendar,
    visual: {
      color: 'hsl(262, 60%, 85%)',
      lineColor: 'hsl(262, 50%, 50%)',
      statNumber: '15',
      statLabel: 'min call',
      substat: 'or 6-min check',
      badge: { text: 'No prep needed', color: 'green' },
    }
  },
  {
    id: 'check',
    name: 'Check',
    line: 'We review what you have. (2 weeks for Full Health Check)',
    youGet: "A short report on what's working and what's not.",
    icon: FileCheck,
    visual: {
      color: 'hsl(165, 45%, 82%)',
      lineColor: 'hsl(165, 40%, 40%)',
      statNumber: '2',
      statLabel: 'weeks',
      substat: 'Full Health Check',
      badge: { text: '7 areas reviewed', color: 'mint' },
    }
  },
  {
    id: 'choose',
    name: 'Choose',
    line: 'Pick the areas that matter most right now.',
    youGet: 'A focused plan — no extras.',
    icon: Check,
    visual: {
      color: 'hsl(210, 60%, 85%)',
      lineColor: 'hsl(210, 50%, 50%)',
      statNumber: '3',
      statLabel: 'priorities',
      substat: 'you decide what first',
      badge: { text: 'No pressure', color: 'blue' },
    }
  },
  {
    id: 'setup',
    name: 'Set up',
    line: 'We put simple systems in place. (4–8 weeks)',
    youGet: 'Working tools and routines your team can use.',
    icon: Settings,
    visual: {
      color: 'hsl(262, 60%, 85%)',
      lineColor: 'hsl(262, 50%, 50%)',
      statNumber: '4-8',
      statLabel: 'weeks',
      substat: 'systems built',
      badge: { text: 'Ready to use', color: 'purple' },
    }
  },
  {
    id: 'keep',
    name: 'Keep it going',
    line: 'We train your team and check in for 90 days.',
    youGet: 'Confidence that it sticks.',
    icon: Users,
    visual: {
      color: 'hsl(165, 45%, 82%)',
      lineColor: 'hsl(165, 40%, 40%)',
      statNumber: '90',
      statLabel: 'days support',
      substat: 'training included',
      badge: { text: 'Team trained', color: 'mint' },
    }
  },
  {
    id: 'handover',
    name: 'Handover',
    line: 'You own it. We step back.',
    youGet: 'A system your team runs on their own.',
    icon: HandHeart,
    visual: {
      color: 'hsl(210, 60%, 85%)',
      lineColor: 'hsl(210, 50%, 50%)',
      statNumber: '100',
      statLabel: '% yours',
      substat: 'full ownership',
      badge: { text: 'You run it', color: 'green' },
    }
  },
];

// Premium floating card visual for each step
const StepVisual: React.FC<{ step: typeof steps[0]; isInView: boolean }> = ({ step, isInView }) => {
  const Icon = step.icon;
  const badgeColors = {
    green: 'bg-green-100 text-green-700',
    mint: 'bg-nim-mint/40 text-nim-navy',
    blue: 'bg-blue-100 text-blue-700',
    purple: 'bg-nim-purple/20 text-nim-purple',
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center p-4 lg:p-6">
      {/* Large rounded panel with texture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative w-full h-full min-h-[320px] lg:min-h-[380px] rounded-[2rem] overflow-hidden"
        style={{ backgroundColor: step.visual.color }}
      >
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Geometric lines */}
        <svg className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="none">
          <line x1="0%" y1="20%" x2="100%" y2="60%" stroke={step.visual.lineColor} strokeWidth="1" />
          <line x1="20%" y1="0%" x2="80%" y2="100%" stroke={step.visual.lineColor} strokeWidth="1" />
          <line x1="60%" y1="0%" x2="100%" y2="40%" stroke={step.visual.lineColor} strokeWidth="1" />
          <line x1="0%" y1="80%" x2="40%" y2="100%" stroke={step.visual.lineColor} strokeWidth="1" />
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
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-nim-purple/15 flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4 text-nim-purple" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-nim-navy">{step.name}</span>
          </div>
          
          {/* Stats box */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <motion.span
                className="text-3xl sm:text-4xl font-bold text-nim-navy tracking-tight"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {step.visual.statNumber}
              </motion.span>
              <span className="text-xs sm:text-sm text-gray-600">{step.visual.statLabel}</span>
            </div>
            <p className="text-xs text-gray-500 mb-2">{step.visual.substat}</p>
            <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold ${badgeColors[step.visual.badge.color as keyof typeof badgeColors]}`}>
              <Check className="w-3 h-3" strokeWidth={3} />
              {step.visual.badge.text}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Mobile step card with intersection observer
const MobileStepCard: React.FC<{
  step: typeof steps[0];
  index: number;
  isInView: boolean;
  onVisible: (index: number) => void;
  isActive: boolean;
}> = ({ step, index, isInView, onVisible, isActive }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

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

    observer.observe(card);
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
          ? 'bg-white border-nim-purple/20 shadow-xl' 
          : 'bg-white/80 border-border'
        }
      `}
    >
      <div className="flex items-center gap-4 mb-4">
        <span className={`
          w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300
          ${isActive 
            ? 'bg-nim-purple text-white' 
            : 'bg-nim-purple/10 text-nim-purple'
          }
        `}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className={`
          text-xl font-bold transition-colors duration-300
          ${isActive ? 'text-nim-purple' : 'text-foreground'}
        `}>
          {step.name}
        </h3>
      </div>
      <p className="text-muted-foreground mb-5 leading-relaxed">{step.line}</p>
      <div className="bg-nim-mint/20 rounded-xl p-4 border border-nim-mint/30">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-nim-mint flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-nim-navy" strokeWidth={3} />
          </div>
          <div>
            <p className="text-xs font-semibold text-nim-navy/60 uppercase tracking-wider mb-1">You get:</p>
            <p className="text-sm text-nim-navy font-medium">{step.youGet}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

// Mobile sticky progress indicator
const MobileProgressIndicator: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  return (
    <div className="sticky top-20 z-10 lg:hidden mb-6">
      <div className="bg-white/95 backdrop-blur-sm rounded-full py-2 px-4 border border-border shadow-lg mx-auto w-fit">
        <div className="flex items-center gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`
                h-2 rounded-full transition-all duration-300
                ${index === activeIndex 
                  ? 'bg-nim-purple w-8' 
                  : index < activeIndex 
                    ? 'bg-nim-purple/40 w-2' 
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

const StepsSection: React.FC = () => {
  const sectionRef = useRef(null);
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
      aria-labelledby="steps-heading"
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
            The Process
          </motion.p>
          <motion.h2
            id="steps-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-foreground"
          >
            How it <span className="text-primary">works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-muted-foreground mt-4 max-w-lg mx-auto"
          >
            6 steps. One clear flow.
          </motion.p>
        </header>

        {/* Desktop: Two-column layout with visual */}
        <div className="hidden lg:grid lg:grid-cols-[340px_1fr_1fr] gap-8">
          {/* Left rail - Step names */}
          <nav className="space-y-2" aria-label="Process steps">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                onClick={() => setActiveStep(index)}
                className={`
                  w-full text-left px-5 py-4 rounded-2xl transition-all duration-300
                  flex items-center gap-4 group
                  ${activeStep === index 
                    ? 'bg-nim-purple text-white shadow-xl shadow-nim-purple/20' 
                    : 'bg-white hover:bg-white/80 border border-transparent hover:border-border'
                  }
                `}
              >
                <span className={`
                  w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold
                  ${activeStep === index 
                    ? 'bg-white/20 text-white' 
                    : 'bg-nim-purple/10 text-nim-purple group-hover:bg-nim-purple/20'
                  }
                `}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`font-semibold text-base ${activeStep === index ? '' : 'text-foreground'}`}>
                  {step.name}
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
            className="bg-white rounded-3xl p-8 lg:p-10 border border-border shadow-lg flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-nim-purple/10 text-nim-purple">
                Step {String(activeStep + 1).padStart(2, '0')}
              </span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 tracking-tight">
              {steps[activeStep].name}
            </h3>
            
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8">
              {steps[activeStep].line}
            </p>
            
            <div className="bg-nim-mint/20 rounded-2xl p-5 border border-nim-mint/30">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-nim-mint flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-nim-navy" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-nim-navy/60 uppercase tracking-wider mb-1">
                    You get:
                  </p>
                  <p className="text-nim-navy font-medium text-base lg:text-lg">
                    {steps[activeStep].youGet}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right panel - Premium floating visual */}
          <div className="flex items-center justify-center">
            <StepVisual step={steps[activeStep]} isInView={isInView} />
          </div>
        </div>

        {/* Mobile: Progress indicator + Vertical list */}
        <div className="lg:hidden">
          <MobileProgressIndicator activeIndex={mobileActiveStep} />
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <MobileStepCard
                key={step.id}
                step={step}
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

export default StepsSection;
