import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const tiers = [
  {
    level: "4",
    title: "Complex or multi-site",
    description: "Larger, more complex orgs with many programs, sites, or partners.",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    level: "3",
    title: "Growth-ready",
    description: "The org can handle more funding, staff, and programs without breaking.",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    level: "2",
    title: "Audit-ready",
    description: "Core systems across all 7 domains can stand up to audits and funder checks.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    level: "1",
    title: "Basic stability",
    description: "Some basics are in place, but systems are informal and fragile.",
    gradient: "from-amber-500 to-amber-600",
  },
  {
    level: "0",
    title: "Too early / DIY support",
    description: "Very early or fragile. We share tools and light support instead of deep installs.",
    gradient: "from-rose-500 to-rose-600",
  },
];

const paths = [
  {
    letter: "A",
    title: "Fast fixes",
    description: "Short, clearly scoped modules to solve one main problem, like cash flow, board basics, or simple HR setup.",
    timeline: "1–4 weeks",
    isAccent: true,
  },
  {
    letter: "B",
    title: "Tiered packages",
    description: "Deeper, pre-built bundles for organizations that need a full install across multiple domains.",
    timeline: "8–12 weeks",
    isAccent: false,
  },
];

export const TheNimaraModel: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 bg-secondary text-secondary-foreground overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-secondary/98" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Editorial Header */}
          <div className="text-center mb-20 lg:mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-[0.15em] uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              The Framework
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              The Nimara Model
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-secondary-foreground/60 max-w-2xl mx-auto"
            >
              A shared framework to match each organization with the right kind of support. 
              First we place you in a tier. Then we choose the right path.
            </motion.p>
          </div>

          {/* Five Tiers Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-24 lg:mb-32"
          >
            <div className="flex items-center gap-6 mb-10">
              <span className="text-sm font-medium text-secondary-foreground/40 uppercase tracking-wider">01</span>
              <h3 className="text-2xl font-semibold">Five Tiers</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-secondary-foreground/20 to-transparent" />
            </div>

            {/* Tier Cards - Horizontal on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.level}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  <div className="h-full p-6 rounded-2xl bg-secondary-foreground/[0.03] border border-secondary-foreground/10 backdrop-blur-sm transition-all duration-300 hover:bg-secondary-foreground/[0.06] hover:border-secondary-foreground/20">
                    {/* Tier badge */}
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center text-white font-bold text-sm mb-4 shadow-lg`}>
                      {tier.level}
                    </div>
                    
                    <h4 className="font-semibold text-secondary-foreground mb-2 text-sm lg:text-base">
                      {tier.title}
                    </h4>
                    
                    <p className="text-xs lg:text-sm text-secondary-foreground/50 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`} />
                </motion.div>
              ))}
            </div>

            {/* Arrow indicator */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-4 text-secondary-foreground/30 text-xs uppercase tracking-wider">
                <span>Complex</span>
                <div className="w-32 h-px bg-gradient-to-r from-emerald-500/50 via-blue-500/50 to-rose-500/50" />
                <span>Early</span>
              </div>
            </div>
          </motion.div>

          {/* Two Paths Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-6 mb-10">
              <span className="text-sm font-medium text-secondary-foreground/40 uppercase tracking-wider">02</span>
              <h3 className="text-2xl font-semibold">Two Paths</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-secondary-foreground/20 to-transparent" />
            </div>

            {/* Paths Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {paths.map((path, index) => (
                <motion.div
                  key={path.letter}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative"
                >
                  <div className={`h-full p-8 lg:p-10 rounded-2xl border transition-all duration-300 ${
                    path.isAccent 
                      ? 'border-accent/30 bg-gradient-to-br from-accent/5 to-accent/[0.02] hover:border-accent/50' 
                      : 'border-primary/30 bg-gradient-to-br from-primary/5 to-primary/[0.02] hover:border-primary/50'
                  }`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold ${
                        path.isAccent 
                          ? 'bg-accent/20 text-accent' 
                          : 'bg-primary/20 text-primary'
                      }`}>
                        {path.letter}
                      </div>
                      <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                        path.isAccent
                          ? 'bg-accent/10 text-accent'
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {path.timeline}
                      </span>
                    </div>
                    
                    <h4 className="text-xl lg:text-2xl font-semibold text-secondary-foreground mb-3">
                      {path.title}
                    </h4>
                    
                    <p className="text-secondary-foreground/60 leading-relaxed">
                      {path.description}
                    </p>

                    {/* Learn more link */}
                    <div className="mt-6 pt-6 border-t border-secondary-foreground/10">
                      <a 
                        href={path.isAccent ? "/path-a" : "/path-b"}
                        className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                          path.isAccent ? 'text-accent hover:text-accent/80' : 'text-primary hover:text-primary/80'
                        }`}
                      >
                        Learn about Path {path.letter}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="text-secondary-foreground/50 mb-4">Not sure which path fits?</p>
            <a
              href="/health-score"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Take the health check
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
