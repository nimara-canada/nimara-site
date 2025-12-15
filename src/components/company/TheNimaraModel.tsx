import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const tiers = [
  {
    level: "4",
    title: "Complex or multi-site",
    description: "Larger, more complex orgs with many programs, sites, or partners.",
    badgeColor: "bg-emerald-500",
    dotColor: "bg-emerald-400",
  },
  {
    level: "3",
    title: "Growth-ready",
    description: "The org can handle more funding, staff, and programs without breaking.",
    badgeColor: "bg-teal-500",
    dotColor: "bg-teal-400",
  },
  {
    level: "2",
    title: "Audit-ready",
    description: "Core systems across all 7 domains can stand up to audits and funder checks.",
    badgeColor: "bg-blue-500",
    dotColor: "bg-blue-400",
  },
  {
    level: "1",
    title: "Basic stability",
    description: "Some basics are in place, but systems are informal and fragile.",
    badgeColor: "bg-amber-500",
    dotColor: "bg-amber-400",
  },
  {
    level: "0",
    title: "Too early / DIY support",
    description: "Very early or fragile. We share tools and light support instead of deep installs.",
    badgeColor: "bg-rose-500",
    dotColor: "bg-rose-400",
  },
];

const paths = [
  {
    letter: "A",
    title: "Fast fixes",
    description: "Short, clearly scoped modules to solve one main problem, like cash flow, board basics, or simple HR setup. When possible, we match organizations into these modules within about 72 hours.",
    accentColor: "accent",
  },
  {
    letter: "B",
    title: "Tiered packages",
    description: "Deeper, pre-built bundles for organizations that need a full install across multiple domains, such as finance + HR + governance + programs for a Tier 2 or Tier 3 team.",
    accentColor: "primary",
  },
];

export const TheNimaraModel: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-24 lg:py-32 bg-secondary text-secondary-foreground overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-secondary/95" />
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-accent/5 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Editorial Header */}
          <motion.div variants={itemVariants} className="mb-20">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
              The Framework
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              The Nimara Model:{" "}
              <span className="italic text-primary">Tiers and Paths</span>
            </h2>
            <p className="text-lg text-secondary-foreground/70 max-w-3xl leading-relaxed">
              Nimara uses a shared model so we can match each organization with the right kind of support. 
              First we place you in a tier. Then we choose the right path.
            </p>
          </motion.div>

          {/* Five Tiers Section */}
          <motion.div variants={itemVariants} className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-semibold">
                Five Tiers of Organizational Health
              </h3>
              <div className="flex-1 h-px bg-secondary-foreground/20" />
            </div>
            <p className="text-secondary-foreground/70 mb-12 max-w-2xl">
              We sort organizations into five tiers, from 'too early' to 'ready for complex work.' 
              This keeps the work at the right size.
            </p>

            {/* Ladder Layout */}
            <div className="max-w-3xl mx-auto">
              <motion.div variants={containerVariants} className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-8 top-20 bottom-20 w-0.5 bg-gradient-to-b from-emerald-400/50 via-blue-400/50 to-rose-400/50 hidden sm:block" />
                
                {/* Top Label */}
                <motion.div variants={itemVariants} className="flex items-center justify-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-medium tracking-[0.15em] uppercase text-emerald-300">
                      Most Complex
                    </span>
                  </div>
                </motion.div>
                
                {tiers.map((tier, index) => (
                  <React.Fragment key={tier.level}>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ x: 8 }}
                      className="relative"
                      style={{ marginLeft: index % 2 === 0 ? '0' : '2rem' }}
                    >
                      <div className="p-6 rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-secondary-foreground/10 relative">
                        {/* Connector dot */}
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 hidden sm:block">
                          <div className={`w-4 h-4 rounded-full ${tier.dotColor} ring-4 ring-secondary shadow-lg`} />
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold ${tier.badgeColor} text-white`}>
                            {tier.level}
                          </div>
                          
                          <div className="flex-1">
                            <span className="text-xs font-medium tracking-[0.15em] uppercase text-secondary-foreground/50 mb-1 block">
                              Tier {tier.level}
                            </span>
                            <h4 className="font-semibold text-secondary-foreground mb-2">
                              {tier.title}
                            </h4>
                            <p className="text-sm text-secondary-foreground/60 leading-relaxed">
                              {tier.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Arrow between tiers */}
                    {index < tiers.length - 1 && (
                      <motion.div variants={itemVariants} className="flex items-center justify-center py-3">
                        <motion.div
                          className="flex flex-col items-center"
                          animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                          }}
                        >
                          <ArrowDown className="w-5 h-5 text-secondary-foreground/40" strokeWidth={2} />
                          <ArrowDown className="w-5 h-5 text-secondary-foreground/40 -mt-3" strokeWidth={2} />
                        </motion.div>
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
                
                {/* Bottom Label */}
                <motion.div variants={itemVariants} className="flex items-center justify-center mt-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 border border-rose-400/30">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="text-xs font-medium tracking-[0.15em] uppercase text-rose-300">
                      Early Stage
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Two Paths Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-semibold">
                Two paths through the system
              </h3>
              <div className="flex-1 h-px bg-secondary-foreground/20" />
            </div>
            <p className="text-secondary-foreground/70 mb-12 max-w-2xl">
              Once we know your tier, we pick the right path based on how deep the work needs to go.
            </p>

            {/* Paths Grid */}
            <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
              {paths.map((path) => (
                <motion.div
                  key={path.letter}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className={`h-full p-8 rounded-2xl border transition-all ${
                    path.accentColor === 'accent' 
                      ? 'border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50' 
                      : 'border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50'
                  }`}>
                    <div className="mb-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        path.accentColor === 'accent'
                          ? 'bg-accent/20 text-accent'
                          : 'bg-primary/20 text-primary'
                      }`}>
                        Path {path.letter}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-secondary-foreground mb-4">
                      {path.title}
                    </h4>
                    <p className="text-secondary-foreground/60 leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Link */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <a
              href="#nimara-offers"
              className="inline-flex items-center gap-2 text-primary font-medium group"
            >
              <span className="relative">
                See example modules and packages
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
