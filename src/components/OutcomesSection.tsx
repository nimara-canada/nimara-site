import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FolderOpen, TrendingUp, FileCheck } from 'lucide-react';

const outcomes = [
  {
    icon: FolderOpen,
    title: "Clear ownership",
    description: "Roles, records, and files organized — not stuck in one person's head.",
  },
  {
    icon: TrendingUp,
    title: "Clean tracking",
    description: "Budgets, donors, and activities stay current without scrambling.",
  },
  {
    icon: FileCheck,
    title: "Proof on demand",
    description: "Decision → spend → deliverable → report. Ready when funders ask.",
  },
];

const OutcomesSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      aria-labelledby="outcomes-heading"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: 'hsl(270, 60%, 92%)' }}
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.h2
            id="outcomes-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[clamp(1.75rem,5vw,3.5rem)] font-black tracking-[-0.03em] leading-[1] mb-4 text-foreground uppercase"
          >
            Systems that <span className="text-primary">stick</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto"
          >
            Track, prove, and report — without the scramble.
          </motion.p>
        </header>

        {/* Cards Grid */}
        <ul className="grid sm:grid-cols-3 gap-4 sm:gap-6" role="list">
          {outcomes.map((outcome, idx) => (
            <motion.li
              key={outcome.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <article 
                className="h-full rounded-2xl p-6 sm:p-8 border text-center"
                style={{ 
                  backgroundColor: 'hsl(270, 50%, 96%)',
                  borderColor: 'hsl(270, 40%, 88%)'
                }}
              >
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: 'hsl(270, 60%, 60%)' }}
                >
                  <outcome.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {outcome.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {outcome.description}
                </p>
              </article>
            </motion.li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mt-10 sm:mt-12"
        >
          <Link
            to="/capacity-buildout"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all duration-200"
          >
            Book a free call
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OutcomesSection;
