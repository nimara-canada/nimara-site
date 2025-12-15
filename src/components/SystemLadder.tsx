import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ladderSteps = [
  { 
    level: 0, 
    title: "Getting by", 
    desc: "Work gets done, but it lives in people's heads. Nothing is written down or done the same way twice.",
    detail: "Time to get the basics out of people's heads and into simple, shared tools."
  },
  { 
    level: 1, 
    title: "Pieces in place", 
    desc: "Some policies, templates, or trackers exist, but they're inconsistent and still very person-dependent.",
    detail: "Time to firm up the basics so they work the same way every time."
  },
  { 
    level: 2, 
    title: "Working basics", 
    desc: "The core pieces are in place and mostly working. Systems are simple, written, and repeatable.",
    detail: "Time to keep things tidy and connect key systems so they're easy to hand over."
  },
  { 
    level: 3, 
    title: "Advanced systems", 
    desc: "Systems are integrated across teams with strong reporting. This is more typical of larger organizations.",
    detail: "Nimara mainly helps map and protect these systems; deep redesign is usually led by in-house teams."
  },
  { 
    level: 4, 
    title: "Reference point", 
    desc: "Your systems are strong enough to teach others. You set the standard in your field.",
    detail: "For most clients, Tier 4 is a north star. Nimara focuses on helping you build steady Tier 2 systems first."
  },
];

export const SystemLadder = () => {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      id="system" 
      className="relative py-20 md:py-28 lg:py-36 bg-[#0B1120] text-white overflow-hidden"
      aria-labelledby="system-heading"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-14 lg:mb-18">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">
              The Nimara System
            </span>
            <div className="h-px flex-1 bg-white/20" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="system-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Where are you
            <br />
            <span className="font-normal italic text-white/70">on the ladder?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 max-w-xl"
          >
            We use a simple 5-tier ladder to understand where your nonprofit stands today. 
            This helps us know exactly where to start and which path fits best.
          </motion.p>
        </div>

        {/* Ladder Steps */}
        <div className="space-y-0">
          {[...ladderSteps].reverse().map((step, index) => {
            const isHovered = hoveredLevel === step.level;
            const isNimaraFocus = step.level <= 2;
            const showDivider = step.level === 3;

            return (
              <div key={step.level}>
                {showDivider && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative my-8 flex items-center gap-4"
                  >
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                    <span className="text-xs tracking-widest text-accent uppercase">
                      Nimara's focus
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-accent/40 via-transparent to-transparent" />
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  onMouseEnter={() => setHoveredLevel(step.level)}
                  onMouseLeave={() => setHoveredLevel(null)}
                  className="group"
                >
                  <div className={`
                    grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 border-t border-white/10 transition-colors duration-300
                    ${isHovered ? 'bg-white/5' : ''}
                  `}>
                    {/* Tier number */}
                    <div className="col-span-2 lg:col-span-1">
                      <span className={`
                        text-5xl lg:text-6xl font-extralight transition-colors duration-500
                        ${isNimaraFocus 
                          ? (isHovered ? 'text-accent' : 'text-accent/50')
                          : (isHovered ? 'text-white/60' : 'text-white/20')
                        }
                      `}>
                        {step.level}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <div className="col-span-10 lg:col-span-3">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className={`
                          text-lg lg:text-xl font-medium transition-colors duration-300
                          ${isHovered ? 'text-white' : 'text-white/90'}
                        `}>
                          {step.title}
                        </h3>
                        {isNimaraFocus && (
                          <span className="text-[10px] tracking-widest text-accent uppercase">
                            Our lane
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="col-span-12 lg:col-span-8 mt-2 lg:mt-0">
                      <p className="text-white/60 leading-relaxed">
                        {step.desc}
                      </p>
                      
                      {/* Detail on hover */}
                      <motion.p
                        initial={false}
                        animate={{ 
                          height: isHovered ? 'auto' : 0,
                          opacity: isHovered ? 1 : 0,
                          marginTop: isHovered ? 12 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-accent/90 overflow-hidden"
                      >
                        → {step.detail}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
          <div className="border-t border-white/10" />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-lg font-medium text-white mb-1">
                Not sure where you stand?
              </p>
              <p className="text-sm text-white/50">
                The free 4-minute check will show you
              </p>
            </div>
            <a
              href="/book-a-call"
              className="group inline-flex items-center gap-3 text-white font-medium"
            >
              <span className="group-hover:text-accent transition-colors">Start the free check</span>
              <span className="w-8 h-px bg-white group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
