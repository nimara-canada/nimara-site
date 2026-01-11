import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const steps = [
  {
    number: "01",
    label: "Start",
    title: "Take the check or book a call",
    description: "Not sure where you stand? Take the free 6-minute check. Already know what you need? Book a call.",
    deliverable: "Clarity on your gaps",
    visual: "check"
  },
  {
    number: "02",
    label: "Scope",
    title: "We confirm what to build",
    description: "Together we pick 1–3 areas to focus on. No upselling. Just what you need right now.",
    deliverable: "Clear scope document",
    visual: "scope"
  },
  {
    number: "03",
    label: "Build",
    title: "We set up your systems",
    description: "We build simple tools you'll actually use. Templates, trackers, folders — all connected.",
    deliverable: "Working tools, not reports",
    visual: "build"
  },
  {
    number: "04",
    label: "Train",
    title: "Your team learns the system",
    description: "We train your team live. No 50-page manual. Just the routines that matter.",
    deliverable: "Training recordings + guide",
    visual: "train"
  },
  {
    number: "05",
    label: "Support",
    title: "We stay for 90 days",
    description: "Questions? Stuck on something? We're here. Support included for 90 days after launch.",
    deliverable: "90-day support access",
    visual: "support"
  },
  {
    number: "06",
    label: "Maintain",
    title: "You keep it running",
    description: "Your team owns the system. It's built on tools you already use — no vendor lock-in.",
    deliverable: "System you fully own",
    visual: "maintain"
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Auto-advance through steps when in view
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-nim-cloud"
      aria-labelledby="process-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-6"
          >
            How It Works
          </motion.p>

          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-foreground mb-4"
          >
            6 steps to funder-ready systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            From first call to full ownership in 4–8 weeks.
          </motion.p>
        </div>

        {/* Process Grid */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Left Rail - Step Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-1"
            role="tablist"
            aria-label="Process steps"
          >
            {steps.map((step, index) => (
              <button
                key={step.number}
                ref={(el) => (stepRefs.current[index] = el)}
                onClick={() => setActiveStep(index)}
                role="tab"
                aria-selected={activeStep === index}
                aria-controls={`step-panel-${index}`}
                id={`step-tab-${index}`}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 group ${
                  activeStep === index
                    ? "bg-white shadow-soft"
                    : "hover:bg-white/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Step Number */}
                  <span 
                    className={`text-xs font-mono transition-colors duration-300 ${
                      activeStep === index ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {step.number}
                  </span>
                  
                  {/* Step Label */}
                  <span 
                    className={`text-sm font-medium transition-colors duration-300 ${
                      activeStep === index ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </span>

                  {/* Progress Bar */}
                  {activeStep === index && (
                    <motion.div 
                      className="ml-auto w-12 h-1 bg-muted rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, ease: "linear" }}
                        key={activeStep}
                      />
                    </motion.div>
                  )}
                </div>
              </button>
            ))}
          </motion.div>

          {/* Right Panel - Step Detail */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-soft min-h-[400px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                id={`step-panel-${activeStep}`}
                role="tabpanel"
                aria-labelledby={`step-tab-${activeStep}`}
              >
                {/* Step Number */}
                <span className="text-6xl md:text-7xl lg:text-8xl font-extralight text-muted/20 block mb-4">
                  {steps[activeStep].number}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {steps[activeStep].title}
                </h3>

                {/* Description */}
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  {steps[activeStep].description}
                </p>

                {/* Deliverable Chip */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">You get:</span>
                  <span>{steps[activeStep].deliverable}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a 
            href={CALENDLY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
          >
            Book a free call
            <span aria-hidden="true">→</span>
          </a>
          <a 
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
          >
            Take the 6-minute check
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
