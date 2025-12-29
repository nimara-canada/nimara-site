import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const steps = [
  { 
    number: "01", 
    title: "Check", 
    text: "We assess where your systems stand today.",
    detail: "For urgent fixes, we start with one problem. For bigger projects, we run a full health check across your core systems."
  },
  { 
    number: "02", 
    title: "Plan", 
    text: "A short workplan with clear jobs, owners, and dates.",
    detail: "No 50-page reports. Just what you need to move forward with confidence."
  },
  { 
    number: "03", 
    title: "Build", 
    text: "Real tools: policies, checklists, templates your team can use.",
    detail: "Plain-language documents and simple systems your team can use every week."
  },
  { 
    number: "04", 
    title: "Support", 
    text: "We stay to help you use the new tools. Money-back guarantee.",
    detail: "Bigger projects come with up to 3 months of support to make sure everything sticks."
  }
];

export const HowWeHelp = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Scroll-linked animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  // Section reveal
  const sectionY = useTransform(smoothProgress, [0, 0.3], [60, 0]);
  const sectionOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);

  // Progress line animation
  const progressWidth = useTransform(smoothProgress, [0.2, 0.7], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-background overflow-hidden scroll-mt-20"
      id="how-we-help"
    >
      <motion.div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: sectionY, opacity: sectionOpacity }}
      >
        {/* Editorial Header */}
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Our Process
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
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            One Simple Loop
            <br />
            <span className="font-normal italic text-muted-foreground">Behind Every Project</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-lg"
          >
            Check, Plan, Build, Support. The only thing that changes is how deep we go.
          </motion.p>
        </div>

        {/* Steps - Compact Grid with Hover Reveal and Scroll-linked Stagger */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            // Individual card scroll animations
            const cardY = useTransform(
              smoothProgress,
              [0.15 + index * 0.05, 0.35 + index * 0.05],
              [50, 0]
            );
            const cardOpacity = useTransform(
              smoothProgress,
              [0.15 + index * 0.05, 0.3 + index * 0.05],
              [0, 1]
            );
            const cardScale = useTransform(
              smoothProgress,
              [0.15 + index * 0.05, 0.35 + index * 0.05],
              [0.95, 1]
            );

            return (
              <motion.div
                key={step.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ y: cardY, opacity: cardOpacity, scale: cardScale }}
                className="group relative p-6 border border-border rounded-lg hover:border-primary/30 hover:bg-muted/20 transition-all duration-300 cursor-default overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Number indicator with progress */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-primary/10 overflow-hidden"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: 'left' }}
                >
                  <div className="h-full bg-primary" />
                </motion.div>

                {/* Default Content */}
                <motion.div
                  animate={{
                    opacity: hoveredIndex === index ? 0 : 1,
                    y: hoveredIndex === index ? -10 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ minHeight: '140px' }}
                >
                  <motion.span 
                    className="text-3xl font-extralight text-muted-foreground/40 group-hover:text-primary/60 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.number}
                  </motion.span>
                  <h3 className="text-lg font-medium text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>

                {/* Revealed Detail on Hover */}
                <motion.div
                  className="absolute inset-0 p-6 flex flex-col justify-center bg-primary/5 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{ pointerEvents: hoveredIndex === index ? 'auto' : 'none' }}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    {step.title}
                  </span>
                  <p className="text-sm text-foreground leading-relaxed">
                    {step.detail}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-border"
        >
          <motion.a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-foreground font-medium"
            whileHover={{ x: 8 }}
          >
            <span className="group-hover:text-primary transition-colors">Start the free check</span>
            <motion.span 
              className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300"
              layoutId="cta-line"
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
