import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const areas = [
  { title: "Board", description: "Decisions, minutes, approvals" },
  { title: "Money & Grants", description: "Track spending, find proof fast" },
  { title: "People", description: "Roles, hiring basics, handoffs" },
  { title: "Programs", description: "Plans, updates, simple tracking" },
  { title: "Fundraising", description: "Donor list + thank-you routine" },
  { title: "Volunteers", description: "Clear roles + onboarding" },
  { title: "Tools & Files", description: "Clean folders + templates" },
];

export const WhatWeHelpWith = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background"
      aria-labelledby="help-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.h2
            id="help-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-4"
          >
            What we help with
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            Pick what you want to fix. Start with one area. Add more later.
          </motion.p>
        </div>

        {/* Clean list with dividers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="divide-y divide-border/50">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
                className="py-5 md:py-6 flex items-center justify-between group"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-base md:text-lg font-medium text-foreground">
                    {area.title}
                  </span>
                  <span className="text-muted-foreground text-sm md:text-base">
                    — {area.description}
                  </span>
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-border/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 14 14" 
                    fill="none" 
                    className="text-foreground"
                  >
                    <path 
                      d="M1 7H13M7 1L13 7L7 13" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Helper text + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <p className="text-muted-foreground">
            Not sure where to start?
          </p>

          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            role="group"
            aria-label="Call to action"
          >
            <Button asChild size="lg" className="px-6 rounded-full">
              <a
                href={CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a free call
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-6 rounded-full">
              <a
                href={TYPEFORM_HEALTH_CHECK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Take the free check
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeHelpWith;
