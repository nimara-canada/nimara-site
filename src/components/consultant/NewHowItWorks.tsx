import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

const steps = [
  {
    title: "Apply",
    description: "Share your background and what work you want"
  },
  {
    title: "Short call", 
    description: "We confirm fit and availability"
  },
  {
    title: "Get matched",
    description: "We send projects that match your skills"
  },
  {
    title: "Deliver",
    description: "You follow Nimara's playbook with clear scope"
  },
  {
    title: "Grow",
    description: "As trust builds, you get bigger projects"
  }
];

export const NewHowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
  const progressWidth = useTransform(smoothProgress, [0.2, 0.7], ['0%', '100%']);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-40 bg-background overflow-hidden border-t border-border/30"
    >
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
              Process
            </span>
            <div className="h-px flex-1 bg-border relative overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-primary"
                style={{ width: progressWidth }}
              />
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-foreground"
          >
            How It <span className="italic font-light text-muted-foreground">Works</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground/70 mt-6 text-base font-light"
          >
            We prefer fewer, stronger consultants over a huge directory.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => {
            const cardY = useTransform(
              smoothProgress,
              [0.1 + index * 0.04, 0.3 + index * 0.04],
              [30, 0]
            );
            const cardOpacity = useTransform(
              smoothProgress,
              [0.1 + index * 0.04, 0.25 + index * 0.04],
              [0, 1]
            );

            return (
              <motion.div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ y: cardY, opacity: cardOpacity }}
                className="group grid grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/30 last:border-b-0 hover:bg-muted/20 transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-default"
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="text-muted-foreground/15 text-4xl md:text-5xl font-light group-hover:text-primary/30 transition-colors">
                    {index + 1}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-11 pt-2">
                  <h3 className="text-foreground/90 font-medium text-base mb-2 tracking-wide group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground/60 leading-relaxed font-light text-sm group-hover:text-muted-foreground transition-colors">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
