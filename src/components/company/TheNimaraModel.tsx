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
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const tiers = [
  {
    level: "4",
    title: "Complex or multi-site",
    description: "Larger, more complex orgs with many programs, sites, or partners.",
    color: "bg-emerald-50 border-emerald-200",
    badgeColor: "bg-emerald-600 text-white",
    dotColor: "bg-emerald-500",
  },
  {
    level: "3",
    title: "Growth-ready",
    description: "The org can handle more funding, staff, and programs without breaking.",
    color: "bg-teal-50 border-teal-200",
    badgeColor: "bg-teal-600 text-white",
    dotColor: "bg-teal-500",
  },
  {
    level: "2",
    title: "Audit-ready",
    description: "Core systems across all 7 domains can stand up to audits and funder checks.",
    color: "bg-blue-50 border-blue-200",
    badgeColor: "bg-blue-600 text-white",
    dotColor: "bg-blue-500",
  },
  {
    level: "1",
    title: "Basic stability",
    description: "Some basics are in place, but systems are informal and fragile.",
    color: "bg-amber-50 border-amber-200",
    badgeColor: "bg-amber-600 text-white",
    dotColor: "bg-amber-500",
  },
  {
    level: "0",
    title: "Too early / DIY support",
    description: "Very early or fragile. We share tools and light support instead of deep installs.",
    color: "bg-rose-50 border-rose-200",
    badgeColor: "bg-rose-500 text-white",
    dotColor: "bg-rose-400",
  },
];

const paths = [
  {
    letter: "A",
    title: "Fast fixes",
    description: "Short, clearly scoped modules to solve one main problem, like cash flow, board basics, or simple HR setup. When possible, we match organizations into these modules within about 72 hours.",
    color: "border-accent bg-accent/5 hover:bg-accent/10",
    badge: "bg-accent/20 text-accent",
  },
  {
    letter: "B",
    title: "Tiered packages",
    description: "Deeper, pre-built bundles for organizations that need a full install across multiple domains, such as finance + HR + governance + programs for a Tier 2 or Tier 3 team.",
    color: "border-primary bg-primary/5 hover:bg-primary/10",
    badge: "bg-primary/20 text-primary",
  },
];

export const TheNimaraModel: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.1] mb-6">
              The Nimara Model:{" "}
              <span className="italic">Tiers and Paths</span>
            </h2>
            <p className="text-lg text-body-muted max-w-3xl leading-relaxed">
              Nimara uses a shared model so we can match each organization with the right kind of support. 
              First we place you in a tier. Then we choose the right path.
            </p>
          </motion.div>

          {/* Five Tiers Section */}
          <motion.div variants={itemVariants} className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-semibold text-foreground">
                Five Tiers of Organizational Health
              </h3>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-body-muted mb-12 max-w-2xl">
              We sort organizations into five tiers, from 'too early' to 'ready for complex work.' 
              This keeps the work at the right size.
            </p>

            {/* Ladder Layout */}
            <div className="max-w-3xl mx-auto">
              <motion.div variants={containerVariants} className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-8 top-20 bottom-20 w-0.5 bg-gradient-to-b from-emerald-300 via-blue-300 to-rose-300 hidden sm:block" />
                
                {/* Top Label */}
                <motion.div variants={itemVariants} className="flex items-center justify-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200">
                    <div className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span className="text-xs font-medium tracking-[0.15em] uppercase text-emerald-800">
                      Most Complex
                    </span>
                  </div>
                </motion.div>
                
                {tiers.map((tier, index) => (
                  <React.Fragment key={tier.level}>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ x: 8, transition: { duration: 0.2 } }}
                      className="relative"
                      style={{ marginLeft: index % 2 === 0 ? '0' : '2rem' }}
                    >
                      <div className={`p-6 rounded-xl border-2 transition-all hover:shadow-lg ${tier.color} relative`}>
                        {/* Connector dot */}
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 hidden sm:block">
                          <div className={`w-4 h-4 rounded-full ${tier.dotColor} ring-4 ring-white shadow-sm`} />
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold ${tier.badgeColor}`}>
                            {tier.level}
                          </div>
                          
                          <div className="flex-1">
                            <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-1 block">
                              Tier {tier.level}
                            </span>
                            <h4 className="font-semibold text-foreground mb-2">
                              {tier.title}
                            </h4>
                            <p className="text-sm text-body-muted leading-relaxed">
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
                          <ArrowDown className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
                          <ArrowDown className="w-5 h-5 text-muted-foreground -mt-3" strokeWidth={2} />
                        </motion.div>
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
                
                {/* Bottom Label */}
                <motion.div variants={itemVariants} className="flex items-center justify-center mt-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 border border-rose-200">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-xs font-medium tracking-[0.15em] uppercase text-rose-800">
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
              <h3 className="text-xl font-semibold text-foreground">
                Two paths through the system
              </h3>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-body-muted mb-12 max-w-2xl">
              Once we know your tier, we pick the right path based on how deep the work needs to go.
            </p>

            {/* Paths Grid */}
            <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
              {paths.map((path) => (
                <motion.div
                  key={path.letter}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <div className={`h-full p-8 rounded-2xl border-2 transition-all ${path.color}`}>
                    <div className="mb-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${path.badge}`}>
                        Path {path.letter}
                      </span>
                    </div>
                    <h4 className="text-xl font-serif font-medium text-foreground mb-4">
                      {path.title}
                    </h4>
                    <p className="text-body-muted leading-relaxed">
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
