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
    <section className="relative w-full text-white overflow-hidden" style={{ backgroundColor: '#0B1120' }}>
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0B1120] to-[#0B1120]/95" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/8 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/8 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.2em] text-primary uppercase mb-6 font-medium"
            >
              How Nimara works
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              A clear system for getting from{' '}
              <span className="text-primary italic">'we need help'</span>{' '}
              to{' '}
              <span className="text-accent italic">'this works now'</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
            >
              This page walks through the Nimara model, the steps in a typical project, and how we manage quality, risk, and refunds.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                to="/health-score"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                Learn about Health Check
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="https://www.notion.so/Nimara-Refund-Policy-2bc227f1ee3a80f299fbc42501d338ac"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 h-14 px-6 text-white font-medium hover:text-primary transition-colors"
              >
                <span className="relative">
                  See refund policy
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-white/30 group-hover:bg-primary transition-colors duration-300" />
                </span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-white/50"
            >
              New to Nimara?{' '}
              <Link to="/company" className="text-primary hover:underline">
                Learn who we are
              </Link>
            </motion.p>
          </div>

          {/* Visual - Process Steps */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    whileHover={{ x: 8 }}
                    className="group flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/10 cursor-default"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <p className="font-semibold text-white text-lg">{step.label}</p>
                      <p className="text-sm text-white/60">{step.desc}</p>
                    </div>

                    {/* Step number */}
                    <span className="text-3xl font-light text-white/20 tabular-nums group-hover:text-primary/40 transition-colors">
                      {step.num}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Decorative connector */}
            <div className="hidden lg:flex justify-center mt-6">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-1"
              >
                <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                <span className="text-xs text-white/40 uppercase tracking-wider">Scroll</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
