import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";
import { 
  Users, 
  Wallet, 
  UserCog, 
  LayoutGrid, 
  Heart, 
  HandHeart, 
  FolderOpen 
} from "lucide-react";

const areas = [
  { icon: Users, title: "Board", description: "Decisions, minutes, approvals" },
  { icon: Wallet, title: "Money & Grants", description: "Track spending, find proof fast" },
  { icon: UserCog, title: "People", description: "Roles, hiring basics, handoffs" },
  { icon: LayoutGrid, title: "Programs", description: "Plans, updates, simple tracking" },
  { icon: Heart, title: "Fundraising", description: "Donor list + thank-you routine" },
  { icon: HandHeart, title: "Volunteers", description: "Clear roles + onboarding" },
  { icon: FolderOpen, title: "Tools & Files", description: "Clean folders + templates" },
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
        <div className="mb-12 lg:mb-16">
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
            Pick one. Start there. Add more later.
          </motion.p>
        </div>

        {/* Visual card grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
                  className="group bg-muted/40 hover:bg-muted/70 border border-border/40 rounded-2xl p-5 md:p-6 transition-all duration-200"
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-foreground flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 md:w-5.5 md:h-5.5 text-background" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-foreground mb-1">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
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
