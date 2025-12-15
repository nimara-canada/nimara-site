import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HowItWorksHero: React.FC = () => {
  return (
    <section 
      aria-labelledby="how-it-works-heading"
      className="relative w-full bg-secondary text-secondary-foreground overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--secondary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--secondary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 lg:py-48">
        {/* Editorial layout */}
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-secondary-foreground/50">
              How Nimara Works
            </span>
            <div className="h-px w-24 bg-secondary-foreground/20" />
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            id="how-it-works-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] mb-8"
          >
            A simple way to go from
            <br />
            <span className="font-normal italic text-secondary-foreground/70">"we need help"</span>
            <br />
            to <span className="font-normal italic text-secondary-foreground/70">"this works."</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary-foreground/60 leading-relaxed mb-16 max-w-2xl"
          >
            This page walks through the Nimara model, the steps in a typical project, 
            and how we manage quality, risk, and refunds.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-8"
          >
            <Link
              to="/health-score"
              className="group inline-flex items-center gap-3 text-secondary-foreground font-medium"
            >
              <span className="group-hover:text-accent transition-colors">Learn about Health Check</span>
              <span className="w-8 h-px bg-secondary-foreground group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
            </Link>

            <a
              href="https://www.notion.so/Nimara-Refund-Policy-2bc227f1ee3a80f299fbc42501d338ac"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-secondary-foreground/60 font-medium"
            >
              <span className="group-hover:text-accent transition-colors">See refund policy</span>
              <span className="w-8 h-px bg-secondary-foreground/40 group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
            </a>
          </motion.div>

          {/* Helper text */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-secondary-foreground/10 text-sm text-secondary-foreground/40"
          >
            New to Nimara?{' '}
            <Link 
              to="/company" 
              className="text-secondary-foreground/60 hover:text-accent transition-colors underline underline-offset-4"
            >
              Learn who we are
            </Link>
          </motion.p>
        </div>

        {/* Large decorative number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-1/2 right-8 lg:right-16 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
          aria-hidden="true"
        >
          <span className="text-[20rem] font-extralight leading-none text-secondary-foreground">
            ?
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
