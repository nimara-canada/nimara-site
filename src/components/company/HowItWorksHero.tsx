import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksHero: React.FC = () => {
  return (
    <section className="relative w-full bg-background overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-6">
              How Nimara works
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-[1.1] mb-8">
              A clear system for getting from{' '}
              <span className="text-primary italic">'we need help'</span>{' '}
              to{' '}
              <span className="text-primary italic">'this works now'</span>
            </h1>

            <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-xl">
              This page walks through the Nimara model, the steps in a typical project, and how we manage quality, risk, and refunds.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/health-score"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-secondary-background text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-secondary-background/20"
              >
                Learn about Health Check
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="https://www.notion.so/Nimara-Refund-Policy-2bc227f1ee3a80f299fbc42501d338ac"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 h-14 px-6 text-foreground font-medium"
              >
                <span className="relative">
                  See refund policy
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
                </span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              New to Nimara?{' '}
              <Link to="/company" className="text-primary hover:underline">
                Learn who we are
              </Link>
            </p>
          </motion.div>

          {/* Visual - Process Steps */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-6">
              {[
                { num: '01', label: 'Assess', desc: 'Understand where you stand' },
                { num: '02', label: 'Match', desc: 'Find the right support' },
                { num: '03', label: 'Execute', desc: 'Build systems that last' },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-border hover:shadow-lg"
                >
                  <span className="text-4xl font-light text-primary/40 tabular-nums">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-medium text-foreground text-lg">{step.label}</p>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
