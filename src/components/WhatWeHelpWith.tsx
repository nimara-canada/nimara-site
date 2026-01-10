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
      className="py-20 lg:py-28 bg-background"
      aria-labelledby="help-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4"
          >
            What We Help With
          </motion.span>

          <motion.h2
            id="help-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-3"
          >
            Pick what you want to fix.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-muted-foreground"
          >
            Start with one area. Add more later.
          </motion.p>
        </div>

        {/* Clean list layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-6 lg:gap-y-8">
            {areas.map((area, index) => (
              <div
                key={area.title}
                className="flex items-baseline gap-3"
              >
                <span className="text-primary text-lg">•</span>
                <div>
                  <span className="font-semibold text-foreground">{area.title}</span>
                  <span className="text-muted-foreground"> — {area.description}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Helper text + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Not sure what to start with? Take the free 6-minute check.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            role="group"
            aria-label="Call to action"
          >
            <Button asChild size="lg" className="px-8">
              <a
                href={CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a free call
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
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
