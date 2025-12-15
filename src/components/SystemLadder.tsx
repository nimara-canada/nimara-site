import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

  return (
    <section 
      id="system" 
      className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden"
      aria-labelledby="system-heading"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN - Editorial intro */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm tracking-widest text-slate-500 uppercase mb-4">
              The Nimara system
            </p>

            <h2
              id="system-heading"
              className="text-4xl md:text-5xl font-serif font-medium text-slate-900 leading-[1.1] mb-6"
            >
              Where are you on the ladder?
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              We use a simple 5-tier ladder to understand where your nonprofit stands today. This helps us know exactly where to start and which path fits best.
            </p>

            {/* Nimara focus callout */}
            <div className="mb-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-xs tracking-widest text-emerald-600 uppercase mb-3">
                Our focus
              </p>
              <p className="text-slate-600 leading-relaxed">
                Nimara specializes in moving organizations from Tier 0–1 into solid Tier 2 basics. Tiers 3–4 are aspirational north stars for most clients.
              </p>
            </div>

            {/* CTA */}
            <a
              href="/organizational-health-check"
              className="group inline-flex items-center gap-3 text-slate-900 font-medium"
            >
              <span className="relative">
                Find your tier with the free check
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-slate-300 group-hover:bg-slate-900 transition-colors duration-300" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* RIGHT COLUMN - Ladder visualization */}
          <div className="lg:col-span-7">
            <div className="space-y-0">
              {[...ladderSteps].reverse().map((step, index) => {
                const isHovered = hoveredLevel === step.level;
                const isNimaraFocus = step.level <= 2;
                const showDivider = step.level === 3;

                return (
                  <div key={step.level}>
                    {/* Divider between Tier 3 and Tier 2 */}
                    {showDivider && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative my-8 flex items-center gap-4"
                      >
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
                        <span className="text-xs tracking-widest text-emerald-600 uppercase">
                          Nimara's focus
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-r from-emerald-300 via-transparent to-transparent" />
                      </motion.div>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      onMouseEnter={() => setHoveredLevel(step.level)}
                      onMouseLeave={() => setHoveredLevel(null)}
                      className="group"
                    >
                      <div className={`
                        flex gap-6 py-6 border-b border-slate-200 transition-all duration-300
                        ${isHovered ? 'bg-slate-50 -mx-6 px-6 rounded-2xl border-transparent' : ''}
                      `}>
                        {/* Tier number */}
                        <div className="flex-shrink-0">
                          <span className={`
                            text-5xl md:text-6xl font-light tabular-nums transition-colors duration-500
                            ${isNimaraFocus 
                              ? (isHovered ? 'text-emerald-500' : 'text-emerald-300')
                              : (isHovered ? 'text-slate-400' : 'text-slate-200')
                            }
                          `}>
                            {step.level}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-2">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className={`
                              text-xl md:text-2xl font-serif font-medium transition-colors duration-300
                              ${isHovered ? 'text-slate-900' : 'text-slate-800'}
                            `}>
                              {step.title}
                            </h3>
                            {isNimaraFocus && (
                              <span className="text-[10px] tracking-widest text-emerald-600 uppercase">
                                Our lane
                              </span>
                            )}
                          </div>
                          
                          <p className="text-slate-500 leading-relaxed mb-3">
                            {step.desc}
                          </p>

                          {/* Expanded detail on hover */}
                          <motion.div
                            initial={false}
                            animate={{ 
                              height: isHovered ? 'auto' : 0,
                              opacity: isHovered ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-emerald-600 pt-2">
                              → {step.detail}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Bottom summary */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-slate-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <p className="text-lg font-medium text-slate-900 mb-1">
                    Not sure where you stand?
                  </p>
                  <p className="text-sm text-slate-500">
                    The free 4-minute check will show you
                  </p>
                </div>
                <a
                  href="/organizational-health-check"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#ACFCE3] text-slate-900 font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200"
                >
                  Start the free check
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
