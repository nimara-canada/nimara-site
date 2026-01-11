import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const steps = [
  {
    id: 'start',
    name: 'Start',
    line: 'Book a free call or try the 6-minute check.',
    youGet: 'A clear next step — no pressure.',
  },
  {
    id: 'check',
    name: 'Check',
    line: 'We review what you have. (2 weeks for Full Health Check)',
    youGet: "A short report on what's working and what's not.",
  },
  {
    id: 'choose',
    name: 'Choose',
    line: 'Pick the areas that matter most right now.',
    youGet: 'A focused plan — no extras.',
  },
  {
    id: 'setup',
    name: 'Set up',
    line: 'We put simple systems in place. (4–8 weeks)',
    youGet: 'Working tools and routines your team can use.',
  },
  {
    id: 'keep',
    name: 'Keep it going',
    line: 'We train your team and check in for 90 days.',
    youGet: 'Confidence that it sticks.',
  },
  {
    id: 'handover',
    name: 'Handover',
    line: 'You own it. We step back.',
    youGet: 'A system your team runs on their own.',
  },
];

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
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground"
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

        {/* Desktop: Two-column layout */}
        <div className="hidden lg:grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16">
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
                  w-full text-left px-6 py-5 rounded-2xl transition-all duration-300
                  flex items-center gap-4 group
                  ${activeStep === index 
                    ? 'bg-nim-purple text-white shadow-xl shadow-nim-purple/20' 
                    : 'bg-white hover:bg-white/80 border border-transparent hover:border-border'
                  }
                `}
              >
                <span className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                  ${activeStep === index 
                    ? 'bg-white/20 text-white' 
                    : 'bg-nim-purple/10 text-nim-purple group-hover:bg-nim-purple/20'
                  }
                `}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`font-semibold text-lg ${activeStep === index ? '' : 'text-foreground'}`}>
                  {step.name}
                </span>
              </motion.button>
            ))}
          </nav>

          {/* Right panel - Step details */}
          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-10 lg:p-12 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-nim-purple/10 text-nim-purple">
                Step {String(activeStep + 1).padStart(2, '0')}
              </span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-5 tracking-tight">
              {steps[activeStep].name}
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {steps[activeStep].line}
            </p>
            
            <div className="bg-nim-mint/20 rounded-2xl p-6 border border-nim-mint/30">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-nim-mint flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-nim-navy" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-nim-navy/60 uppercase tracking-wider mb-2">
                    You get:
                  </p>
                  <p className="text-nim-navy font-medium text-lg">
                    {steps[activeStep].youGet}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
