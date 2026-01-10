import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";
import {
  Users,
  DollarSign,
  UserCheck,
  ClipboardList,
  Heart,
  HandHelping,
  FolderOpen,
} from "lucide-react";

const areas = [
  {
    icon: Users,
    title: "Board",
    description: "Decisions, minutes, approvals",
  },
  {
    icon: DollarSign,
    title: "Money & Grants",
    description: "Track spending, find proof fast",
  },
  {
    icon: UserCheck,
    title: "People",
    description: "Roles, hiring basics, handoffs",
  },
  {
    icon: ClipboardList,
    title: "Programs",
    description: "Plans, updates, simple tracking",
  },
  {
    icon: Heart,
    title: "Fundraising",
    description: "Donor list + thank-you routine",
  },
  {
    icon: HandHelping,
    title: "Volunteers",
    description: "Clear roles + onboarding",
  },
  {
    icon: FolderOpen,
    title: "Tools & Files",
    description: "Clean folders + templates",
  },
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4"
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

        {/* 7-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-10">
          {areas.slice(0, 4).map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <area.icon
                className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
              <h3 className="text-lg font-semibold mb-1">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Second row - 3 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-4xl mx-auto mb-12">
          {areas.slice(4).map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <area.icon
                className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
              <h3 className="text-lg font-semibold mb-1">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mb-8"
        >
          Not sure what to start with? Take the free 6-minute check.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeHelpWith;
