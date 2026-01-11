import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, FileCheck } from 'lucide-react';

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
      className="relative py-16 lg:py-24 bg-muted/30 overflow-hidden"
      aria-labelledby="proof-trail-heading"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-primary" />
            </div>
            <h2 
              id="proof-trail-heading"
              className="text-2xl sm:text-3xl font-light tracking-tight"
            >
              Proof <span className="font-semibold text-primary">Trail</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            One clear chain from decision to report.
          </p>
        </motion.div>

        {/* Trail chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6"
        >
          {trailSteps.map((step, index) => (
            <React.Fragment key={step}>
              <span className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-background border border-border text-foreground font-medium text-sm sm:text-base">
                {step}
              </span>
              {index < trailSteps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 hidden sm:block" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-muted-foreground italic"
        >
          The chain is not complete until the deliverable is saved.
        </motion.p>
      </div>
    </section>
  );
};

export default ProofTrailSection;
