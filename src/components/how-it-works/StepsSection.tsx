import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

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
      {
        threshold: 0.6, // Card needs to be 60% visible
        rootMargin: '-20% 0px -20% 0px', // Focus on center of viewport
      }
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
        rounded-xl p-5 border transition-all duration-300
        ${isActive 
          ? 'bg-primary/5 border-primary/30 shadow-lg shadow-primary/5' 
          : 'bg-muted/30 border-border'
        }
      `}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className={`
          w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300
          ${isActive 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-muted text-muted-foreground'
          }
        `}>
          {index + 1}
        </span>
        <h3 className={`
          text-lg font-semibold transition-colors duration-300
          ${isActive ? 'text-primary' : 'text-foreground'}
        `}>
          {step.name}
        </h3>
      </div>
      <p className="text-muted-foreground mb-4">{step.line}</p>
      <div className={`
        rounded-lg p-3 border transition-all duration-300
        ${isActive 
          ? 'bg-background border-primary/20' 
          : 'bg-background border-border'
        }
      `}>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">You get:</p>
        <p className="text-sm text-foreground font-medium">{step.youGet}</p>
      </div>
    </motion.article>
  );
};

// Mobile sticky progress indicator
const MobileProgressIndicator: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  return (
    <div className="sticky top-20 z-10 lg:hidden mb-6">
      <div className="bg-background/90 backdrop-blur-sm rounded-full p-2 border border-border shadow-sm mx-auto w-fit">
        <div className="flex items-center gap-1.5">
          {steps.map((_, index) => (
            <button
              key={index}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-300
                ${index === activeIndex 
                  ? 'bg-primary w-6' 
                  : index < activeIndex 
                    ? 'bg-primary/40' 
                    : 'bg-muted'
                }
              `}
              aria-label={`Step ${index + 1}: ${steps[index].name}`}
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
      className="relative py-20 lg:py-28 bg-background overflow-hidden"
      aria-labelledby="steps-heading"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <header className="mb-12 lg:mb-16">
          <motion.h2
            id="steps-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1]"
          >
            How it <span className="font-semibold text-primary">works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground mt-3 text-lg"
          >
            6 steps. One clear flow.
          </motion.p>
        </header>

        {/* Desktop: Two-column layout */}
        <div className="hidden lg:grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Left rail - Step names */}
          <nav className="space-y-1" aria-label="Process steps">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                onClick={() => setActiveStep(index)}
                className={`
                  w-full text-left px-5 py-4 rounded-xl transition-all duration-300
                  flex items-center gap-4 group
                  ${activeStep === index 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'hover:bg-muted'
                  }
                `}
              >
                <span className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${activeStep === index 
                    ? 'bg-primary-foreground/20 text-primary-foreground' 
                    : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                  }
                `}>
                  {index + 1}
                </span>
                <span className={`font-medium text-lg ${activeStep === index ? '' : 'text-foreground'}`}>
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
            className="bg-muted/40 rounded-2xl p-8 lg:p-10 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Step {activeStep + 1}
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
              {steps[activeStep].name}
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {steps[activeStep].line}
            </p>
            
            <div className="bg-background rounded-xl p-5 border border-border">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                You get:
              </p>
              <p className="text-foreground font-medium">
                {steps[activeStep].youGet}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Progress indicator + Vertical list with scroll highlighting */}
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
