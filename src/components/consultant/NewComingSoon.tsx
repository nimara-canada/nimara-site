import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

const features = [
  "A project board with clear scopes and timelines",
  "Standard templates you can reuse",
  "Short training guides (Grant Setup + Organization Check)",
  "Quality checks that help you deliver faster",
  "A referral loop for repeat work"
];

export const NewComingSoon = () => {
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
      className="relative py-20 md:py-28 lg:py-40 bg-background overflow-hidden border-t border-border/30"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent pointer-events-none" />

      <motion.div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: sectionY, opacity: sectionOpacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Coming Soon
              </span>
              <div className="h-px flex-1 bg-border" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-foreground"
            >
              Coming <span className="italic font-light text-muted-foreground">Soon</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground mt-6 text-base font-light"
            >
              We're building a simple consultant experience.
            </motion.p>
          </div>
          
          {/* Right column */}
          <div>
            <div className="space-y-4">
              {features.map((feature, index) => {
                const itemY = useTransform(
                  smoothProgress,
                  [0.15 + index * 0.03, 0.3 + index * 0.03],
                  [20, 0]
                );
                const itemOpacity = useTransform(
                  smoothProgress,
                  [0.15 + index * 0.03, 0.25 + index * 0.03],
                  [0, 1]
                );

                return (
                  <motion.div 
                    key={index}
                    style={{ y: itemY, opacity: itemOpacity }}
                    className="group flex items-baseline gap-5 p-4 -mx-4 rounded-lg hover:bg-muted/20 transition-colors duration-300"
                  >
                    <span className="text-muted-foreground/25 text-xs font-light tracking-wider w-5 flex-shrink-0 group-hover:text-primary/50 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-foreground/80 text-base font-light group-hover:text-foreground transition-colors">
                      {feature}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-muted-foreground/50 text-sm mt-10 font-light"
            >
              Want early access?{" "}
              <a 
                href="mailto:hello@nimara.ca" 
                className="text-foreground/70 hover:text-foreground border-b border-foreground/30 hover:border-foreground/50 transition-colors"
              >
                Email hello@nimara.ca
              </a>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
