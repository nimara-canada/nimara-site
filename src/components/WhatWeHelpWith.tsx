import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
  { icon: Wallet, title: "Money & Grants", description: "Track spending, find proof" },
  { icon: UserCog, title: "People", description: "Roles, hiring, handoffs" },
  { icon: LayoutGrid, title: "Programs", description: "Plans, updates, tracking" },
  { icon: Heart, title: "Fundraising", description: "Donors + thank-yous" },
  { icon: HandHeart, title: "Volunteers", description: "Roles + onboarding" },
  { icon: FolderOpen, title: "Tools & Files", description: "Folders + templates" },
];

export const WhatWeHelpWith = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform for fanning effect
  const fanProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background overflow-hidden"
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
            Pick one. Start there. Add more later.
          </motion.p>
        </div>

        {/* Stacking cards - horizontal scroll on mobile, fanned stack on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          {/* Mobile: horizontal scroll */}
          <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-3" style={{ width: 'max-content' }}>
              {areas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className="w-[140px] shrink-0 bg-foreground text-background rounded-2xl p-4"
                  >
                    <Icon className="w-5 h-5 mb-3 opacity-80" strokeWidth={1.5} />
                    <h3 className="text-sm font-medium mb-1">{area.title}</h3>
                    <p className="text-xs opacity-70 leading-snug">{area.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Desktop: fanned stack */}
          <div className="hidden lg:flex justify-center items-center relative h-[280px]">
            {areas.map((area, index) => {
              const Icon = area.icon;
              const totalCards = areas.length;
              const centerIndex = (totalCards - 1) / 2;
              const offset = index - centerIndex;
              
              return (
                <motion.div
                  key={area.title}
                  className="absolute w-[160px] bg-foreground text-background rounded-2xl p-5 cursor-pointer shadow-2xl"
                  initial={{ 
                    opacity: 0,
                    x: 0,
                    rotate: 0,
                    scale: 0.9
                  }}
                  animate={isInView ? { 
                    opacity: 1,
                    x: offset * 85,
                    rotate: offset * 3,
                    scale: 1,
                    y: Math.abs(offset) * 8
                  } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.08,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -16,
                    scale: 1.05,
                    rotate: 0,
                    zIndex: 50,
                    transition: { duration: 0.2 }
                  }}
                  style={{ 
                    zIndex: totalCards - Math.abs(offset),
                    transformOrigin: "center bottom"
                  }}
                >
                  <Icon className="w-6 h-6 mb-4 opacity-80" strokeWidth={1.5} />
                  <h3 className="text-base font-medium mb-1">{area.title}</h3>
                  <p className="text-sm opacity-70 leading-snug">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Helper text + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
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
