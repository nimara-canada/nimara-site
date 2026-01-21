import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

const benefits = [
  "Clear projects. Defined deliverables. No endless 'advice' loops.",
  "Operator-led work. You help build working systems, not slide decks.",
  "Repeatable playbooks. Templates and checklists so delivery is faster.",
  "Respect for time. Fewer meetings, clean handoffs, clear timelines.",
  "Real outcomes. Less scrambling. Easier reporting. More trust."
];

export const NewWhyJoin = () => {
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
      id="why-join" 
      className="relative py-20 md:py-28 lg:py-40 bg-background overflow-hidden scroll-mt-20"
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
              Why Join
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-foreground"
          >
            Why Join <span className="italic font-light text-muted-foreground">Nimara</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-lg mt-6"
          >
            We keep work clear. We keep scope tight. We build things teams will actually use.
          </motion.p>
        </div>

        {/* Benefits List */}
        <div className="space-y-0">
          {benefits.map((benefit, index) => {
            const cardY = useTransform(
              smoothProgress,
              [0.1 + index * 0.03, 0.3 + index * 0.03],
              [30, 0]
            );
            const cardOpacity = useTransform(
              smoothProgress,
              [0.1 + index * 0.03, 0.25 + index * 0.03],
              [0, 1]
            );

            return (
              <motion.div 
                key={index}
                style={{ y: cardY, opacity: cardOpacity }}
                className="group border-t border-border py-6 sm:py-8 first:border-t-0 first:pt-0 hover:bg-muted/20 transition-colors duration-300 px-4 -mx-4 rounded-lg"
              >
                <div className="flex gap-6 sm:gap-10 items-baseline">
                  <span className="text-muted-foreground/30 text-xs font-light tracking-wider w-6 flex-shrink-0 group-hover:text-primary/60 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-foreground/80 text-lg md:text-xl leading-relaxed font-light group-hover:text-foreground transition-colors">
                    {benefit}
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
