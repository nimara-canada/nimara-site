import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const levels = [
  { level: 0, name: "Starting out", description: "New or rebuilding from scratch" },
  { level: 1, name: "Getting by", description: "Basic pieces exist but gaps show up" },
  { level: 2, name: "Growing steady", description: "Systems work but need polish" },
  { level: 3, name: "Running smooth", description: "Team can handle most things on their own" },
  { level: 4, name: "Scaling up", description: "Ready to grow without breaking" },
];

const LevelsOverview: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-24 bg-muted/30 overflow-hidden"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              The Levels
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-light tracking-tight leading-[1.1] mb-4"
          >
            Where you are → where you're going
          </motion.h2>
        </div>

        {/* Levels list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 mb-10"
        >
          {levels.map((item, index) => (
            <div 
              key={item.level}
              className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                {item.level}
              </span>
              <div className="flex-1 min-w-0">
                <span className="font-medium text-foreground">{item.name}</span>
                <span className="text-muted-foreground mx-2">—</span>
                <span className="text-muted-foreground">{item.description}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bundle explanation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 bg-primary/5 border border-primary/10 rounded-xl"
        >
          <p className="text-foreground text-center">
            <span className="font-medium">Bundles</span> are the build projects we use to move you up one level at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LevelsOverview;
