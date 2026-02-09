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
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-secondary-background overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <header className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[10px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/40 mb-4 sm:mb-6"
          >
            How It Works
          </motion.p>
          
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.2rem,6vw,5rem)] font-black tracking-[-0.03em] leading-[1.05] mb-3 sm:mb-4 text-white uppercase"
          >
            CLEAR SYSTEMS IN 4 SIMPLE STEPS.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-white/50"
          >
            Start with a call or a quick check. We guide the rest.
          </motion.p>
        </header>

        {/* Steps */}
        <ol 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 mb-10 sm:mb-12 md:mb-16"
          aria-label="Process steps"
        >
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Step number */}
              <span 
                className="block text-5xl sm:text-6xl lg:text-7xl font-extralight text-white/10 mb-3 sm:mb-4"
                aria-hidden="true"
              >
                {step.number}
              </span>
              
              {/* Step label */}
              <h3 className="text-base sm:text-lg font-medium text-white mb-1.5 sm:mb-2">
                {step.label}
              </h3>
              
              {/* Step text */}
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                {step.text}
              </p>
              
              {/* Areas chips for step 3 */}
              {step.hasAreas && (
                <ul 
                  className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4"
                  aria-label="Service areas"
                >
                  {areas.map((area) => (
                    <li
                      key={area}
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 text-white/50 border border-white/10"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </ol>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          role="group"
          aria-label="Call to action"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-white text-secondary-background hover:bg-white/90 font-medium px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
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
            className="w-full sm:w-auto border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-medium px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
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