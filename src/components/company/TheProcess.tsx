import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { TYPEFORM_HEALTH_CHECK_URL, CALENDLY_BOOKING_URL } from '@/constants/urls';

const steps = [
  {
    number: "01",
    title: "See where you stand",
    subtitle: "We check 7 areas",
    body: "We ask a few questions about how your organization runs. You get a clear picture of what's strong and what needs work — scored from Level 0 to 4.",
  },
  {
    number: "02",
    title: "Pick what to build",
    subtitle: "You choose",
    body: "Start with one area or a few — whatever fits your budget. Most teams begin with board records, grant tracking, or file systems.",
  },
  {
    number: "03",
    title: "We build it with you",
    subtitle: "We set it up and stick around",
    body: "We create the folders, templates, and routines. We train your team. Then we check in for 90 days to make sure it holds.",
  },
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
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              How It Works
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>
          
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-4 text-white"
          >
            Ready to report in <span className="font-normal italic text-white/60">3 steps.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-white/50 mb-8"
          >
            Simple systems. Clear records. Less stress when funders ask.
          </motion.p>

          {/* Process bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm text-white/50"
          >
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <span className="text-white font-medium">{step.title}</span>
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
              key={step.number}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 border-t border-white/10 hover:bg-white/[0.02] transition-colors duration-300">
                {/* Number */}
                <div className="col-span-2 lg:col-span-1">
                  <span className="text-4xl lg:text-5xl font-extralight text-white/20 group-hover:text-white/40 transition-colors">
                    {step.number}
                  </span>
                </div>
                
                {/* Title & Subtitle */}
                <div className="col-span-10 lg:col-span-3">
                  <h3 className="text-xl lg:text-2xl font-medium text-white group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-accent/80 mt-1">
                    {step.subtitle}
                  </p>
                </div>
                
                {/* Body */}
                <div className="col-span-12 lg:col-span-8 mt-3 lg:mt-0">
                  <p className="text-lg leading-relaxed text-white/60">
                    {step.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
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
            className="border-white/20 text-white hover:bg-white/10 font-medium px-8"
          >
            <a 
              href={TYPEFORM_HEALTH_CHECK_URL} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Take the free 6-minute check
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TheProcess;
