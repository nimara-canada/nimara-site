import React from 'react';
import { motion } from 'framer-motion';

const HowItWorksPageHero: React.FC = () => {
  return (
    <section 
      aria-labelledby="page-heading"
      className="relative w-full bg-background overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            How Nimara Works
          </p>

          {/* Headline */}
          <h1 
            id="page-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Simple systems.
            <br />
            <span className="font-semibold text-primary">Clear steps.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg text-muted-foreground max-w-lg">
            A step-by-step guide to how we work with Canadian nonprofits.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksPageHero;
