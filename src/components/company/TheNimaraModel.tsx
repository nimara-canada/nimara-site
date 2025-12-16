import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const tiers = [
  { level: "4", title: "Best-in-class", subtitle: "Your systems are strong enough to teach others." },
  { level: "3", title: "Running smoothly", subtitle: "Systems are connected and run the same way across the team." },
  { level: "2", title: "Working basics", subtitle: "The core systems work and are written down." },
  { level: "1", title: "Pieces in place", subtitle: "Some tools exist, but they're inconsistent." },
  { level: "0", title: "Getting by", subtitle: "Work gets done, but it lives in people's heads." },
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

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{ backgroundColor: '#0B1120' }}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header - Editorial asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 mb-24 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-white/40 text-sm tracking-[0.3em] uppercase block mb-4">
              The Framework
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95]">
              The Nimara
              <br />
              <span className="text-white/30">Model</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 lg:col-start-8 lg:pt-16"
          >
            <p className="text-white/70 text-lg lg:text-xl leading-relaxed">
              A Shared Framework To Match Each Organization With The Right Support. 
              First We Place You In A Tier. Then We Choose The Right Path.
            </p>
          </motion.div>
        </div>

        {/* Tiers - Horizontal strip */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32 lg:mb-44"
        >
          <div className="flex items-baseline gap-4 mb-12">
            <span className="text-8xl lg:text-9xl font-bold text-white/[0.08] leading-none">01</span>
            <span className="text-white text-xl font-medium -ml-8 lg:-ml-12">Five Tiers</span>
          </div>

          {/* Tier strip */}
          <div className="relative">
            {/* Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 lg:bg-transparent">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.level}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group relative bg-[#0B1120] lg:bg-transparent"
                >
                  <div className="p-6 lg:p-8 lg:text-center">
                    {/* Large number */}
                    <span className="block text-6xl lg:text-7xl font-bold text-white/[0.06] group-hover:text-white/10 transition-colors duration-500 leading-none mb-2">
                      {tier.level}
                    </span>
                    
                    {/* Title */}
                    <h4 className="text-white font-semibold text-lg mb-1 -mt-8 lg:-mt-10 relative">
                      {tier.title}
                    </h4>
                    
                    {/* Subtitle */}
                    <p className="text-white/40 text-sm">
                      {tier.subtitle}
                    </p>

                    {/* Dot indicator on line - desktop only */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white/20 bg-[#0B1120] group-hover:border-white/40 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scale labels */}
            <div className="hidden lg:flex justify-between mt-6 text-xs text-white/30 uppercase tracking-wider px-8">
              <span>Most Complex →</span>
              <span>← Early Stage</span>
            </div>
          </div>
        </motion.div>

        {/* Paths - Two columns */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-baseline gap-4 mb-12">
            <span className="text-8xl lg:text-9xl font-bold text-white/[0.08] leading-none">02</span>
            <span className="text-white text-xl font-medium -ml-8 lg:-ml-12">Two Paths</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-white/10">
            {paths.map((path, index) => (
              <motion.div
                key={path.letter}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group bg-[#0B1120] p-8 lg:p-12 relative"
              >
                {/* Letter watermark */}
                <span className="absolute top-6 right-8 text-[12rem] lg:text-[16rem] font-bold text-white/[0.03] leading-none select-none">
                  {path.letter}
                </span>

                <div className="relative">
                  {/* Timeline badge */}
                  <span className="inline-block px-4 py-1.5 border border-white/20 text-white/60 text-sm mb-6">
                    {path.timeline}
                  </span>

                  {/* Title */}
                  <h4 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Path {path.letter}: {path.title}
                  </h4>

                  {/* Description */}
                  <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
                    {path.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-10">
                    {path.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/50 text-sm">
                        <span className="w-1 h-1 bg-white/30 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <a 
                    href={`/path-${path.letter.toLowerCase()}`}
                    className="inline-flex items-center gap-3 text-white font-medium group/link"
                  >
                    <span className="relative">
                      Learn More
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-white group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24 lg:mt-32 text-center"
        >
          <p className="text-white/40 text-sm uppercase tracking-wider mb-6">Not Sure Which Path Fits?</p>
          <a
            href="/health-score"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium hover:bg-white hover:text-[#0B1120] transition-all duration-300"
          >
            Take The Health Check
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
