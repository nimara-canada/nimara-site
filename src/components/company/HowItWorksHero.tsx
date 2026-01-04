import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HowItWorksHero: React.FC = () => {
  return (
    <section 
      aria-labelledby="how-it-works-heading"
      className="relative w-full bg-secondary-background text-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        {/* Editorial layout */}
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">
              How Nimara Works
            </span>
            <div className="h-px w-16 bg-white/20" />
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            id="how-it-works-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] mb-8 text-white"
          >
            A simple way to get your
            <br />
            <span className="font-normal italic">basics working.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 leading-relaxed mb-12 max-w-xl"
          >
            We help you set up simple systems for money, files, and reporting — so funding is easier to win and manage.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            {/* Primary CTA */}
            <Link
              to="/start-here"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-secondary-background font-medium rounded-full hover:bg-accent/90 transition-colors"
            >
              Get Started
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/grant-setup"
              className="group inline-flex items-center gap-3 text-white font-medium"
            >
              <span className="group-hover:text-accent transition-colors">See Grant Setup</span>
              <span className="w-8 h-px bg-white group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
            </Link>
          </motion.div>

          {/* Small link */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10"
          >
            <Link 
              to="/organization-check" 
              className="text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-4"
            >
              See Organization Check →
            </Link>
          </motion.div>

          {/* Helper text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-white/40">
              New to Nimara?{' '}
              <Link 
                to="/company" 
                className="text-white/70 hover:text-accent transition-colors underline underline-offset-4"
              >
                Learn who we are
              </Link>
            </p>
          </motion.div>
        </div>

        {/* Large decorative arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-1/2 right-0 lg:right-8 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
          aria-hidden="true"
        >
          <span className="text-[24rem] font-extralight leading-none text-white/[0.06]">
            →
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
