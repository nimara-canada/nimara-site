import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { FileSpreadsheet, ClipboardCheck, Layers, Wrench } from "lucide-react";

const workTypes = [
  {
    icon: FileSpreadsheet,
    title: "Grant Setup support",
    description: "Help install folders, tracking, and simple routines that teams can follow."
  },
  {
    icon: ClipboardCheck,
    title: "Organization Check support",
    description: "Help review docs and workflows, then turn it into clear next steps."
  },
  {
    icon: Layers,
    title: "Build bundles (after the check)",
    description: "Help implement policies, workflows, and tools across key areas."
  },
  {
    icon: Wrench,
    title: "Fix-and-finish projects",
    description: "Short projects to complete missing basics (templates, guides, file cleanup)."
  }
];

export const NewWorkTypes = () => {
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

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-40 bg-secondary-background overflow-hidden"
    >
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        aria-hidden="true" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.08) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

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
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              Types of Work
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-white"
          >
            Types Of <span className="italic font-light text-accent">Work</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 max-w-lg mt-6"
          >
            Most work starts with one of these and grows from there.
          </motion.p>
        </div>

        {/* Work Types Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {workTypes.map((type, index) => {
            const Icon = type.icon;
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

            return (
              <motion.div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ y: cardY, opacity: cardOpacity }}
                className="group relative p-6 sm:p-8 border border-white/10 rounded-xl hover:border-accent/30 hover:bg-white/5 transition-all duration-300 cursor-default"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Progress bar on hover */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-accent/20 overflow-hidden rounded-t-xl"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: 'left' }}
                >
                  <div className="h-full bg-accent" />
                </motion.div>

                {/* Icon */}
                <motion.div 
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-all duration-300"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Icon className="w-5 h-5 text-white/60 group-hover:text-accent transition-colors" />
                </motion.div>

                {/* Number */}
                <span className="text-white/20 text-xs font-light tracking-wider mb-3 block">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="text-white/90 text-lg font-medium mb-3 group-hover:text-white transition-colors">
                  {type.title}
                </h3>
                <p className="text-white/50 text-base leading-relaxed font-light group-hover:text-white/70 transition-colors">
                  {type.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/30 text-sm mt-10 text-center font-light"
        >
          We don't do bookkeeping or audits.
        </motion.p>
      </motion.div>
    </section>
  );
};
