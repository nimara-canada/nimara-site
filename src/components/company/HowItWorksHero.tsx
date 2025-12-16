import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] mb-8"
          >
            A Simple Way To Go From
            <br />
            <span className="font-normal italic text-white/70">"We Need Help"</span>
            <br />
            To <span className="font-normal italic text-white/70">"This Works."</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 leading-relaxed mb-12 max-w-xl"
          >
            This page walks through The Nimara Model, the steps in a typical project, and how we manage quality, risk, and refunds.
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
              className="group inline-flex items-center gap-3 text-white font-medium"
            >
              <span className="group-hover:text-accent transition-colors">Learn About Health Check</span>
              <span className="w-8 h-px bg-white group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
            </Link>

            <a
              href="https://www.notion.so/Nimara-Refund-Policy-2bc227f1ee3a80f299fbc42501d338ac"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-white/50 font-medium hover:text-white/70 transition-colors"
            >
              <span>See Refund Policy</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Helper text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-white/40">
              New To Nimara?{' '}
              <Link 
                to="/company" 
                className="text-white/70 hover:text-accent transition-colors underline underline-offset-4"
              >
                Learn Who We Are
              </Link>
            </p>
          </motion.div>
        </div>

        {/* Large decorative question mark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-1/2 right-0 lg:right-8 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
          aria-hidden="true"
        >
          <span className="text-[24rem] font-extralight leading-none text-white/[0.06]">
            ?
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
