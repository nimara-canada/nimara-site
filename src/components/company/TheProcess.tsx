import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    label: "Start",
    description: "We learn how you work today (quick intake + short call).",
  },
  {
    label: "Build",
    description: "We set up folders, tracking, and simple rules your team can follow.",
  },
  {
    label: "Run",
    description: "We test it with real examples so it works in real life.",
  },
  {
    label: "Grow",
    description: "When you're ready, we build the next system.",
  },
];

const TheProcess: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-secondary-background text-white overflow-hidden"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              The Process
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6 text-white"
          >
            How it <span className="font-normal italic text-white/60">works</span>
          </motion.h2>

          {/* Step labels row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 text-sm text-white/50"
          >
            {steps.map((step, index) => (
              <React.Fragment key={step.label}>
                <span className="text-white font-medium">{step.label}</span>
                {index < steps.length - 1 && (
                  <span className="text-white/30">→</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 border-t border-white/10 hover:bg-white/[0.02] transition-colors duration-300">
                {/* Number */}
                <div className="col-span-2 lg:col-span-1">
                  <span className="text-4xl lg:text-5xl font-extralight text-white/20 group-hover:text-white/40 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Label */}
                <div className="col-span-10 lg:col-span-3">
                  <h3 className="text-xl lg:text-2xl font-medium text-white group-hover:text-accent transition-colors">
                    {step.label}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="col-span-12 lg:col-span-8 mt-3 lg:mt-0">
                  <p className="text-white/50 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

export default TheProcess;
