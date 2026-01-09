import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const ladderSteps = [
  { level: 0, title: "Getting by", desc: "Work lives in people's heads" },
  { level: 1, title: "Pieces in place", desc: "Some tools exist, inconsistent use" },
  { level: 2, title: "Working basics", desc: "Core routines are written and followed" },
  { level: 3, title: "Running smoothly", desc: "Systems are consistent across the team" },
  { level: 4, title: "Best-in-class", desc: "Documented, reviewable, scalable" },
];

export const SystemLadder = () => {
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

  const sectionY = useTransform(smoothProgress, [0, 0.25], [80, 0]);
  const sectionOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      id="system" 
      className="relative py-24 md:py-32 lg:py-40 bg-secondary-background overflow-hidden scroll-mt-20"
      aria-labelledby="system-heading"
    >
      <motion.div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: sectionY, opacity: sectionOpacity }}
      >
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              System Ladder
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="system-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.1] mb-6"
          >
            How scoring works (Tier 0–4)
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl"
          >
            Each domain gets a Tier score. It's not judgment — it's a map.
          </motion.p>
        </div>

        {/* Ladder List */}
        <div className="space-y-0">
          {ladderSteps.map((step, index) => {
            const isNimaraFocus = step.level <= 2;

            const rowY = useTransform(
              smoothProgress,
              [0.1 + index * 0.03, 0.25 + index * 0.03],
              [40, 0]
            );
            const rowOpacity = useTransform(
              smoothProgress,
              [0.1 + index * 0.03, 0.2 + index * 0.03],
              [0, 1]
            );

            const numberY = useTransform(
              smoothProgress,
              [0, 1],
              [0, (4 - step.level) * 15]
            );

            return (
              <motion.div
                key={step.level}
                style={{ y: rowY, opacity: rowOpacity }}
                className="grid grid-cols-12 gap-4 lg:gap-6 py-6 lg:py-8 border-t border-white/10"
              >
                <div className="col-span-12 flex items-start gap-4 lg:gap-6">
                  <motion.span 
                    className={`
                      text-4xl lg:text-5xl font-extralight transition-colors duration-300
                      ${isNimaraFocus ? 'text-accent/70' : 'text-white/20'}
                    `}
                    style={{ y: numberY }}
                  >
                    {step.level}
                  </motion.span>
                  <div className="pt-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg lg:text-xl font-medium text-white">
                        Tier {step.level} — {step.title}
                      </h3>
                      {isNimaraFocus && (
                        <span className="px-2 py-0.5 text-[9px] tracking-wider uppercase text-accent bg-accent/10 rounded">
                          Our Focus
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-white/40">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
          
          <div className="border-t border-white/10" />
        </div>

        {/* Focus note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center text-sm text-white/40"
        >
          Not sure where to start? If you're at Level 0–1, start with Grant Setup. If you want a full plan, start with an Organization Check.
        </motion.p>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="mt-16 p-8 lg:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.08] transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-medium text-white mb-2">
                Not sure where you stand?
              </h3>
              <p className="text-white/50 max-w-lg">
                Answer a few questions. We'll point you to the right next step.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-3 flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/start-here"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-secondary-background font-medium rounded-full hover:bg-accent/90 transition-colors"
                >
                  Get Started
                  <span>→</span>
                </Link>
              </motion.div>
              <Link
                to="/free-check"
                className="text-sm text-white/50 hover:text-white/70 transition-colors"
              >
                Try the free check →
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SystemLadder;
