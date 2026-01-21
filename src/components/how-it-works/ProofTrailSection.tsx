import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const trailSteps = [
  'Decision',
  'Receipt',
  'Approval',
  'Payment',
  'Deliverable',
  'Report',
];

const ProofTrailSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-secondary-background overflow-hidden"
      aria-labelledby="proof-trail-heading"
    >
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.08) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4"
          >
            The Chain
          </motion.p>
          <motion.h2 
            id="proof-trail-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] text-white mb-6"
          >
            Proof <span className="text-accent">Trail</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            One clear chain from decision to report.
          </motion.p>
        </div>

        {/* Trail chips - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="hidden sm:flex items-center justify-center gap-3 mb-10"
        >
          {trailSteps.map((step, index) => (
            <React.Fragment key={step}>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                className="px-5 py-3 rounded-full bg-white text-nim-navy font-semibold text-sm"
              >
                {step}
              </motion.span>
              {index < trailSteps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-white/40 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Trail chips - Mobile (wrapped) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex sm:hidden flex-wrap items-center justify-center gap-2 mb-10"
        >
          {trailSteps.map((step, index) => (
            <React.Fragment key={step}>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                className="px-4 py-2 rounded-full bg-white text-nim-navy font-semibold text-sm"
              >
                {step}
              </motion.span>
              {index < trailSteps.length - 1 && (
                <span className="text-white/40 text-sm">→</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-white/60 italic text-lg"
        >
          The chain is not complete until the deliverable is saved.
        </motion.p>
      </div>
    </section>
  );
};

export default ProofTrailSection;
