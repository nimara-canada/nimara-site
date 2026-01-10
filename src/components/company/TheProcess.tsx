import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { TYPEFORM_HEALTH_CHECK_URL, CALENDLY_BOOKING_URL } from '@/constants/urls';

const steps = [
  {
    number: "01",
    label: "Start",
    text: "Take the free 6-minute check or book a free call.",
  },
  {
    number: "02",
    label: "Get clear on priorities",
    text: "Already know what you need? We confirm scope together. Not sure yet? We show what's strong and where to start.",
  },
  {
    number: "03",
    label: "Build what you need",
    text: "Pick 1 area or more. We build simple tools your team will use.",
    hasAreas: true,
  },
  {
    number: "04",
    label: "Keep it working",
    text: "We train your team and support you for 90 days so it sticks.",
  },
];

const areas = [
  "Board",
  "Money & Grants",
  "People",
  "Programs",
  "Fundraising",
  "Volunteers",
  "Tools & Files",
];

const TheProcess: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-secondary-background text-white overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-16 lg:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              How It Works
            </span>
          </motion.div>
          
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-4 text-white"
          >
            Clear systems in 4 simple steps.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-white/50"
          >
            Start with a call or a quick check. We guide the rest.
          </motion.p>
        </div>

        {/* Steps - Desktop horizontal, Mobile stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Step number */}
              <div className="text-6xl lg:text-7xl font-extralight text-white/10 mb-4">
                {step.number}
              </div>
              
              {/* Step label */}
              <h3 className="text-lg font-medium text-white mb-2">
                {step.label}
              </h3>
              
              {/* Step text */}
              <p className="text-base text-white/60 leading-relaxed">
                {step.text}
              </p>
              
              {/* Areas chips for step 3 */}
              {step.hasAreas && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          role="group"
          aria-label="Call to action"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-secondary-background hover:bg-white/90 font-medium px-8"
          >
            <a 
              href={CALENDLY_BOOKING_URL} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book a free call
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-medium px-8"
          >
            <a 
              href={TYPEFORM_HEALTH_CHECK_URL} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Take the free check
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TheProcess;
