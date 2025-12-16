import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const tiers = [
  { 
    level: "0", 
    title: "Getting by", 
    subtitle: "Work gets done, but it lives in people's heads.",
    isNimaraFocus: true
  },
  { 
    level: "1", 
    title: "Pieces in place", 
    subtitle: "Some tools exist, but they're inconsistent.",
    isNimaraFocus: true
  },
  { 
    level: "2", 
    title: "Working basics", 
    subtitle: "The core systems work and are written down.",
    isNimaraFocus: true
  },
  { 
    level: "3", 
    title: "Running smoothly", 
    subtitle: "Systems are connected and run the same way across the team.",
    isNimaraFocus: false
  },
  { 
    level: "4", 
    title: "Best-in-class", 
    subtitle: "Your systems are strong enough to teach others.",
    isNimaraFocus: false
  },
];

const paths = [
  {
    letter: "A",
    title: "Urgent Fix",
    description: "Fix one urgent issue fast. Grant deadline? Board issue? HR mess? We jump in, solve the problem, and leave you with a simple way to keep it running.",
    timeline: "1–4 Weeks",
    features: ["A deadline is coming up", "Something is broken right now", "You need a clear fix this month"],
  },
  {
    letter: "B",
    title: "Build My Systems",
    description: "For when things feel messy in more than one area—board, money, people, or programs. Start with a free check and decide from there.",
    timeline: "8–12 Weeks",
    features: ["Free 4-minute check", "Deep check from $2,500", "Full setup in 8–12 weeks"],
  },
];

export const TheNimaraModel: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [expandedTier, setExpandedTier] = useState<string | null>("0");

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 lg:py-32 overflow-hidden bg-secondary-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              01 — Five Tiers
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.1] mb-6"
          >
            Organizational
            <br />
            <span className="font-normal italic text-white/60">Health Tiers</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl"
          >
            A shared framework to match each organization with the right support.
          </motion.p>
        </div>

        {/* Tier Rows */}
        <div className="space-y-0 mb-20">
          {tiers.map((tier, index) => {
            const isExpanded = expandedTier === tier.level;

            return (
              <motion.div
                key={tier.level}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              >
                <motion.div
                  onClick={() => setExpandedTier(isExpanded ? null : tier.level)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group grid grid-cols-12 gap-4 lg:gap-6 py-6 lg:py-8 border-t border-white/10 cursor-pointer hover:bg-white/[0.02] transition-colors duration-300"
                >
                  {/* Tier number & title */}
                  <div className="col-span-12 lg:col-span-5 flex items-start gap-4 lg:gap-6">
                    <span className={`
                      text-4xl lg:text-5xl font-extralight transition-colors duration-300
                      ${tier.isNimaraFocus ? 'text-accent/70' : 'text-white/20'}
                    `}>
                      {tier.level}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg lg:text-xl font-medium text-white group-hover:text-white transition-colors">
                          {tier.title}
                        </h3>
                        {tier.isNimaraFocus && (
                          <span className="px-2 py-0.5 text-[9px] tracking-wider uppercase text-accent bg-accent/10 rounded">
                            Our Focus
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-white/40">{tier.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Empty spacer on desktop */}
                  <div className="hidden lg:block lg:col-span-5" />
                  
                  {/* Expand indicator */}
                  <div className="col-span-12 lg:col-span-2 flex items-center lg:justify-end">
                    <button className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white/60 transition-colors">
                      <span className="hidden sm:inline">{isExpanded ? 'Close' : 'Details'}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </motion.div>

                {/* Expanded content placeholder */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 lg:pb-8">
                        <div className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06]">
                          <p className="text-white/60">
                            {tier.subtitle}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          <div className="border-t border-white/10" />
        </div>

        {/* Focus note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20 text-center text-sm text-white/40"
        >
          We specialize in Tiers 0–2: getting your basics written down and working.
        </motion.p>

        {/* Two Paths Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              02 — Two Paths
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-[1.1] mb-10"
          >
            Choose Your
            <span className="font-normal italic text-white/60"> Starting Point</span>
          </motion.h3>
        </div>

        {/* Path Rows */}
        <div className="space-y-0">
          {paths.map((path, index) => (
            <motion.div
              key={path.letter}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <div className="grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 border-t border-white/10 hover:bg-white/[0.02] transition-colors duration-300">
                <div className="col-span-12 lg:col-span-4">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-2 block">
                    {path.timeline}
                  </span>
                  <h4 className="text-xl lg:text-2xl font-medium text-white group-hover:text-white transition-colors">
                    Path {path.letter}: {path.title}
                  </h4>
                </div>
                
                <div className="col-span-12 lg:col-span-5">
                  <p className="text-white/50 leading-relaxed mb-4">
                    {path.description}
                  </p>
                  <ul className="space-y-2">
                    {path.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/40">
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="col-span-12 lg:col-span-3 lg:text-right lg:self-center">
                  <a
                    href={`/path-${path.letter.toLowerCase()}`}
                    className="group/btn inline-flex items-center gap-3 text-white font-medium"
                  >
                    <span className="group-hover/btn:text-accent transition-colors">Learn more</span>
                    <span className="w-8 h-px bg-white group-hover/btn:w-12 group-hover/btn:bg-accent transition-all duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 p-8 lg:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-medium text-white mb-2">
                Not sure where you stand?
              </h3>
              <p className="text-white/50 max-w-lg">
                Take the free 4-minute assessment and find out your tier—plus get a personalized recommendation.
              </p>
            </div>
            <a
              href="/check"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-secondary-background font-medium rounded-full hover:bg-accent/90 transition-colors flex-shrink-0"
            >
              Start the free check
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
