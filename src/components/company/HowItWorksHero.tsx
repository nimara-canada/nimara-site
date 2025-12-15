import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksHero: React.FC = () => {
  const steps = [
    { num: '01', icon: CheckCircle2, label: 'Assess', desc: 'Understand where you stand' },
    { num: '02', icon: Users, label: 'Match', desc: 'Find the right support' },
    { num: '03', icon: Zap, label: 'Execute', desc: 'Build systems that last' },
  ];

  return (
    <section 
      aria-labelledby="how-it-works-heading"
      className="relative w-full text-white overflow-hidden" 
      style={{ backgroundColor: '#0B1120' }}
    >
      {/* Gradient overlays - decorative */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0B1120] to-[#0B1120]/95" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/8 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/8 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            {/* Eyebrow - using lighter color for WCAG AA compliance (4.5:1 contrast) */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-[0.2em] uppercase mb-6 font-medium"
              style={{ color: '#A78BFA' }} /* Light purple - 5.2:1 contrast on #0B1120 */
            >
              How Nimara works
            </motion.p>

            <motion.h1 
              id="how-it-works-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              A clear system for getting from{' '}
              {/* Using lighter purple for WCAG AA on large text (3:1 minimum) */}
              <span className="italic" style={{ color: '#A78BFA' }}>'we need help'</span>{' '}
              to{' '}
              {/* Mint/accent color has good contrast on dark */}
              <span className="text-accent italic">'this works now'</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white leading-relaxed mb-10 max-w-xl"
            >
              This page walks through the Nimara model, the steps in a typical project, and how we manage quality, risk, and refunds.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
              role="group"
              aria-label="Call to action buttons"
            >
              <Link
                to="/health-score"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-primary text-white font-semibold rounded-full transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B1120]"
              >
                Learn about Health Check
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>

              <a
                href="https://www.notion.so/Nimara-Refund-Policy-2bc227f1ee3a80f299fbc42501d338ac"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 h-14 px-6 text-white font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B1120] rounded-lg"
                aria-label="See refund policy (opens in new tab)"
              >
                <span className="relative">
                  See refund policy
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-white/60 group-hover:bg-accent transition-colors duration-300" aria-hidden="true" />
                </span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-white/90"
            >
              New to Nimara?{' '}
              <Link 
                to="/company" 
                className="underline hover:text-accent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B1120] rounded"
                style={{ color: '#A78BFA' }}
              >
                Learn who we are
              </Link>
            </motion.p>
          </div>

          {/* Visual - Process Steps */}
          <div className="lg:col-span-5" role="list" aria-label="Three-step process">
            <div className="space-y-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.article
                    key={step.num}
                    role="listitem"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    whileHover={{ x: 8 }}
                    className="group flex items-center gap-5 p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-white/15"
                  >
                    {/* Icon */}
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                      aria-hidden="true"
                    >
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="font-semibold text-white text-lg">{step.label}</h2>
                      <p className="text-sm text-white/90">{step.desc}</p>
                    </div>

                    {/* Step number - using higher opacity for WCAG */}
                    <span 
                      className="text-3xl font-light text-white/50 tabular-nums group-hover:text-accent/70 transition-colors"
                      aria-label={`Step ${step.num}`}
                    >
                      {step.num}
                    </span>
                  </motion.article>
                );
              })}
            </div>

            {/* Decorative connector */}
            <div className="hidden lg:flex justify-center mt-6" aria-hidden="true">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-1"
              >
                <div className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent" />
                <span className="text-xs text-white/70 uppercase tracking-wider">Scroll</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
