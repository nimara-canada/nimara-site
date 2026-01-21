import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { Check, Plus } from "lucide-react";

const fitCriteria = [
  "You've worked inside nonprofits (ops, admin, finance support, programs, HR support, project work)",
  "You can take messy info and turn it into a clean, usable system",
  "You write in plain language (teams can follow it)",
  "You keep scope tight and ship deliverables",
  "You're comfortable working remotely with deadlines"
];

const niceToHave = [
  "Comfortable with Google Drive/Sheets and simple tool setup",
  "Experience with multi-grant reporting and document tracking",
  "Ability to train a team quickly (short handover)"
];

export const NewWhoWeWant = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  const sectionY = useTransform(smoothProgress, [0, 0.3], [60, 0]);
  const sectionOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-40 bg-background overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent pointer-events-none" />

      <motion.div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: sectionY, opacity: sectionOpacity }}
      >
        {/* Header */}
        <div className="mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Who We're Looking For
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-foreground"
          >
            Who We're <span className="italic font-light text-muted-foreground">Looking For</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-lg mt-6"
          >
            We want people who can make things simple and finish the work.
          </motion.p>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Must have */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-foreground/80 mb-8 pb-4 border-b border-border tracking-wide uppercase">
              You Might Be A Fit If
            </h3>
            <div className="space-y-5">
              {fitCriteria.map((criterion, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                  className="group flex gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-foreground/70 leading-relaxed font-light group-hover:text-foreground transition-colors">
                    {criterion}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Nice to have */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-foreground/80 mb-8 pb-4 border-b border-border tracking-wide uppercase">
              Nice To Have
            </h3>
            <div className="space-y-5">
              {niceToHave.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                  className="group flex gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Plus className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light group-hover:text-foreground/70 transition-colors">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
