import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
export const TheNimaraModel: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px"
  });

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  const tiers = [{
    level: "4",
    title: "Complex or multi-site",
    description: "Larger, more complex orgs with many programs, sites, or partners.",
    color: "bg-emerald-50 border-emerald-300",
    badgeColor: "bg-emerald-600 text-white"
  }, {
    level: "3",
    title: "Growth-ready",
    description: "The org can handle more funding, staff, and programs without breaking.",
    color: "bg-teal-50 border-teal-300",
    badgeColor: "bg-teal-600 text-white"
  }, {
    level: "2",
    title: "Audit-ready",
    description: "Core systems across all 7 domains can stand up to audits and funder checks.",
    color: "bg-blue-50 border-blue-300",
    badgeColor: "bg-blue-600 text-white"
  }, {
    level: "1",
    title: "Basic stability",
    description: "Some basics are in place, but systems are informal and fragile.",
    color: "bg-amber-50 border-amber-300",
    badgeColor: "bg-amber-600 text-white"
  }, {
    level: "0",
    title: "Too early / DIY support",
    description: "Very early or fragile. We share tools and light support instead of deep installs.",
    color: "bg-rose-50 border-rose-200",
    badgeColor: "bg-rose-500 text-white"
  }];
  const paths = [{
    letter: "A",
    title: "Fast fixes",
    description: "Short, clearly scoped modules to solve one main problem, like cash flow, board basics, or simple HR setup. When possible, we match organizations into these modules within about 72 hours.",
    icon: "",
    color: "from-[#ACFCE3]/20 to-[#ACFCE3]/5 border-[#4CBFA6]"
  }, {
    letter: "B",
    title: "Tiered packages",
    description: "Deeper, pre-built bundles for organizations that need a full install across multiple domains, such as finance + HR + governance + programs for a Tier 2 or Tier 3 team.",
    icon: "",
    color: "from-[#6945D8]/10 to-[#6945D8]/5 border-[#6945D8]"
  }];
  return <section ref={sectionRef} className="w-full pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-white to-slate-50/30">{/* Added subtle gradient background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">The Nimara Model: Tiers and Paths</h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              Nimara uses a shared model so we can match each organization with the right kind of support. 
              First we place you in a tier. Then we choose the right path.
            </p>
          </motion.div>

          {/* Five Tiers Section - Ladder Layout */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">Five Tiers of Organizational Health</h3>
            <p className="text-slate-600 mb-10 max-w-2xl">
              We sort organizations into five tiers, from 'too early' to 'ready for complex work.' 
              This keeps the work at the right size.
            </p>

            {/* Ladder Layout */}
            <div className="max-w-3xl mx-auto">
              <motion.div variants={containerVariants} className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-8 top-20 bottom-20 w-0.5 bg-slate-200 hidden sm:block" />
                
                {/* Top Label */}
                <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300">
                    <div className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-900 uppercase tracking-wide">
                      Most Complex
                    </span>
                  </div>
                </motion.div>
                
                {tiers.map((tier, index) => <React.Fragment key={tier.level}>
                    <motion.div variants={itemVariants} whileHover={{
                  x: 8,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut"
                  }
                }} className="relative" style={{
                  marginLeft: index % 2 === 0 ? '0' : '2rem'
                }}>
                      <div className={`p-6 rounded-xl border-2 transition-all hover:shadow-lg ${tier.color} relative`}>
                        {/* Connector dot */}
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 hidden sm:block">
                          <div className={`w-4 h-4 rounded-full ${tier.badgeColor} ring-4 ring-white`} />
                        </div>
                        
                        <div className="flex items-start gap-4">
                          {/* Tier Badge */}
                          <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold ${tier.badgeColor}`}>
                            {tier.level}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                                Tier {tier.level}
                              </span>
                            </div>
                            
                            {/* Title */}
                            <h4 className="font-bold text-slate-900 mb-2 text-base">
                              {tier.title}
                            </h4>
                            
                            {/* Description */}
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {tier.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Arrow between tiers */}
                    {index < tiers.length - 1 && <motion.div variants={itemVariants} className="flex items-center justify-center py-3 relative">
                        <motion.div className="relative z-10 flex flex-col items-center" animate={{
                    y: [0, 4, 0],
                    opacity: [0.4, 1, 0.4]
                  }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}>
                          <ArrowDown className="w-6 h-6 text-slate-400" strokeWidth={2.5} />
                          <ArrowDown className="w-6 h-6 text-slate-400 -mt-3" strokeWidth={2.5} />
                        </motion.div>
                      </motion.div>}
                  </React.Fragment>)}
                
                {/* Bottom Label */}
                <motion.div variants={itemVariants} className="flex items-center justify-center mt-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 border border-rose-300">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-sm font-semibold text-rose-900 uppercase tracking-wide">
                      Early Stage
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Two Paths Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              Two paths through the system
            </h3>
            <p className="text-slate-600 mb-10 max-w-2xl">
              Once we know your tier, we pick the right path based on how deep the work needs to go.
            </p>

            {/* Paths Grid */}
            <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
              {paths.map(path => <motion.div key={path.letter} variants={itemVariants} whileHover={{
              y: -6,
              transition: {
                duration: 0.2,
                ease: "easeOut"
              }
            }} className="group">
                  <div className={`h-full p-8 rounded-2xl bg-gradient-to-br border-2 transition-all hover:shadow-xl ${path.color}`}>
                    {/* Path Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-slate-500">
                          Path {path.letter}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {path.title}
                      </h4>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                </motion.div>)}
            </motion.div>
          </motion.div>

          {/* Optional Link */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <a href="#nimara-offers" className="inline-flex items-center gap-2 text-[#6945D8] hover:text-[#5a38c7] font-medium transition-colors group">
              See example modules and packages
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};