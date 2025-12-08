import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Sprout, 
  Leaf, 
  TreeDeciduous, 
  Trees,
  Mountain,
  ArrowRight
} from 'lucide-react';

const ladderSteps = [
  { 
    level: 0, 
    title: "Tier 0 – Getting by", 
    desc: "Work gets done, but it lives in people's heads and improvised tools. Nothing is written down or done the same way twice.",
    detail: "Time to get the basics out of people's heads and into simple, shared tools.",
    icon: Sprout,
    color: 'slate'
  },
  { 
    level: 1, 
    title: "Tier 1 – Pieces in place", 
    desc: "Some policies, templates, or trackers exist, but they're inconsistent and still very person-dependent.",
    detail: "Time to firm up the basics so they work the same way every time, not just when one person is free.",
    icon: Leaf,
    color: 'emerald'
  },
  { 
    level: 2, 
    title: "Tier 2 – Working basics", 
    desc: "The core pieces are in place and mostly working. Systems are simple, written, and repeatable for a small–mid nonprofit, but still rely on a few key people.",
    detail: "Time to keep things tidy and connect key systems so they're easy to teach and hand over.",
    icon: TreeDeciduous,
    color: 'teal'
  },
  { 
    level: 3, 
    title: "Tier 3 – Advanced systems", 
    desc: "Systems are integrated across teams with strong reporting and some automation. This is more typical of larger organizations.",
    detail: "Nimara mainly helps map and protect these systems; deep redesign is usually led by in-house or specialist teams.",
    icon: Trees,
    color: 'violet'
  },
  { 
    level: 4, 
    title: "Tier 4 – Reference point", 
    desc: "Your systems are strong enough to teach others. You set the standard for how this area should run in your field.",
    detail: "For most clients, Tier 4 is a north star. Nimara focuses on helping you build steady Tier 2 systems first.",
    icon: Mountain,
    color: 'amber'
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string; gradient: string }> = {
  slate: { bg: 'bg-slate-500', text: 'text-slate-200', border: 'border-slate-400/40', light: 'bg-slate-500/20', gradient: 'from-slate-500' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-300', border: 'border-emerald-400/40', light: 'bg-emerald-500/20', gradient: 'from-emerald-500' },
  teal: { bg: 'bg-teal-500', text: 'text-teal-300', border: 'border-teal-400/40', light: 'bg-teal-500/20', gradient: 'from-teal-500' },
  violet: { bg: 'bg-violet-500', text: 'text-violet-300', border: 'border-violet-400/40', light: 'bg-violet-500/20', gradient: 'from-violet-500' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-300', border: 'border-amber-400/40', light: 'bg-amber-500/20', gradient: 'from-amber-500' }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const SystemLadder = () => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);

  // Reverse the array so highest level appears at top
  const reversedSteps = [...ladderSteps].reverse();

  return (
    <section 
      id="system" 
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-secondary-background"
      aria-labelledby="system-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-48 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-48 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent shadow-md mb-4">
            <span className="text-xs font-semibold tracking-widest text-accent-foreground uppercase">
              The Nimara System
            </span>
          </div>
          
          <h2
            id="system-heading"
            className="heading-2 text-primary-foreground mb-4 sm:mb-6"
          >
            Where are you on the ladder?
          </h2>
          
          <p className="text-subtitle text-white/90">
            We place every nonprofit on a simple 5-tier ladder so we know exactly where to start and what to build first.
          </p>
        </motion.div>

        {/* Ladder/Staircase Visualization - Desktop */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="relative">
            {reversedSteps.map((step, index) => {
              const Icon = step.icon;
              const colors = colorClasses[step.color];
              const isSelected = selectedLevel === step.level;
              const isHovered = hoveredLevel === step.level;
              const isActive = isSelected || isHovered;
              const isNimaraFocus = step.level <= 2;
              
              // Calculate indent for staircase effect
              const indentPercent = (4 - step.level) * 8;

              // Show divider after Tier 3 (before Tier 2 in reversed order)
              const showDivider = step.level === 3;

              return (
                <div key={step.level}>
                  {/* Divider between Tier 3 and Tier 2 */}
                  {showDivider && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative my-6 flex items-center gap-4"
                      style={{ marginLeft: `${(4 - 2) * 8}%` }}
                    >
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                      <span className="px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-semibold tracking-wide">
                        Nimara's Focus ↓
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-accent/50 via-transparent to-transparent" />
                    </motion.div>
                  )}
                  
                  <motion.div
                    initial={{ opacity: 0, x: -30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="relative mb-3"
                    style={{ marginLeft: `${indentPercent}%` }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedLevel(isSelected ? null : step.level)}
                      onMouseEnter={() => setHoveredLevel(step.level)}
                      onMouseLeave={() => setHoveredLevel(null)}
                      className={`
                        group relative w-full flex items-center gap-5 p-5 rounded-xl border text-left 
                        transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary-background
                        ${isActive 
                          ? `bg-slate-800/95 ${colors.border} shadow-xl shadow-black/20` 
                          : 'bg-slate-800/70 border-white/10 hover:bg-slate-800/85'
                        }
                        ${isNimaraFocus ? 'ring-1 ring-accent/20' : ''}
                      `}
                      aria-pressed={isSelected}
                      aria-label={`Level ${step.level}: ${step.title}`}
                    >
                      {/* Step connector - vertical riser */}
                      {index < reversedSteps.length - 1 && step.level !== 3 && (
                        <motion.div 
                          className="absolute -bottom-3 left-8 w-0.5 h-3 bg-gradient-to-b from-border to-border/70"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.2, delay: index * 0.12 + 0.3 }}
                          style={{ transformOrigin: 'top' }}
                          aria-hidden="true"
                        />
                      )}

                      {/* Nimara Focus badge for Tiers 0-2 */}
                      {isNimaraFocus && (
                        <div className="absolute -top-2 right-4">
                          <span className="px-2 py-0.5 rounded-full bg-accent/90 text-accent-foreground text-[10px] font-bold uppercase tracking-wider shadow-sm">
                            Our Lane
                          </span>
                        </div>
                      )}

                      {/* Level indicator */}
                      <div className="flex-shrink-0 relative">
                        <motion.div 
                          className={`
                            w-14 h-14 rounded-2xl flex items-center justify-center 
                            transition-all duration-300 
                            ${isActive 
                              ? `${colors.bg} shadow-lg` 
                              : 'bg-white/10'
                            }
                          `}
                          animate={{ 
                            scale: isActive ? 1.05 : 1,
                            rotate: isHovered ? 3 : 0
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon 
                            size={26} 
                            className={`transition-colors duration-300 ${
                              isActive ? 'text-white' : 'text-white/70'
                            }`}
                          />
                        </motion.div>
                        
                        {/* Level badge */}
                        <motion.span 
                          className={`
                            absolute -top-1 -right-1 w-6 h-6 rounded-lg flex items-center justify-center 
                            text-xs font-bold transition-all duration-300
                            ${isActive 
                              ? `${colors.bg} text-white shadow-md` 
                              : 'bg-white/20 text-white/80'
                            }
                          `}
                          animate={{ scale: isActive ? 1.1 : 1 }}
                        >
                          {step.level}
                        </motion.span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                        <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-white'
                          }`}>
                            {step.title}
                          </h3>
                          {isActive && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors.light} ${colors.text}`}
                            >
                              {isSelected ? 'Selected' : 'View'}
                            </motion.span>
                          )}
                        </div>
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                          isActive ? 'text-white/90' : 'text-white/70'
                        }`}>
                          {step.desc}
                        </p>
                        
                        {/* Expanded detail */}
                        <motion.div
                          initial={false}
                          animate={{ 
                            height: isActive ? 'auto' : 0,
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? 12 : 0
                          }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className={`p-3 rounded-lg ${colors.light} border ${colors.border}`}>
                            <p className={`text-sm font-medium ${colors.text}`}>
                              → {step.detail}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        animate={{ x: isActive ? 4 : 0, opacity: isActive ? 1 : 0.5 }}
                        className="flex-shrink-0"
                      >
                        <ArrowRight size={20} className={`transition-colors duration-300 ${
                          isActive ? colors.text : 'text-muted-foreground/50'
                        }`} />
                      </motion.div>

                      {/* Glow effect on hover */}
                      {isActive && (
                        <motion.div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.gradient} to-transparent opacity-5`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.05 }}
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden relative max-w-lg mx-auto">
          {/* Vertical ladder rail */}
          <div className="absolute left-5 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-amber-500 via-primary via-teal-500 via-emerald-500 to-muted opacity-30" aria-hidden="true" />
          
          <div className="space-y-3">
            {reversedSteps.map((step, index) => {
              const Icon = step.icon;
              const colors = colorClasses[step.color];
              const isSelected = selectedLevel === step.level;
              const isActive = isSelected;
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
                      className="relative my-4 ml-12 flex items-center gap-3"
                    >
                      <div className="flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent" />
                      <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-[10px] font-semibold tracking-wide">
                        Nimara's Focus ↓
                      </span>
                    </motion.div>
                  )}
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Rung indicator */}
                    <motion.div 
                      className={`absolute left-3 top-6 w-5 h-5 rounded-lg border-2 border-secondary-background transition-all duration-300 ${
                        isActive ? colors.bg : 'bg-muted'
                      }`}
                      animate={{ scale: isActive ? 1.2 : 1 }}
                      aria-hidden="true"
                    >
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                        {step.level}
                      </span>
                    </motion.div>

                    <button
                      type="button"
                      onClick={() => setSelectedLevel(isSelected ? null : step.level)}
                      className={`
                        relative w-full p-3 sm:p-4 rounded-xl border text-left
                        transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-primary
                        ${isActive 
                          ? `bg-slate-800/95 ${colors.border}` 
                          : 'bg-slate-800/70 border-white/10'
                        }
                        ${isNimaraFocus ? 'ring-1 ring-accent/20' : ''}
                      `}
                      aria-pressed={isSelected}
                    >
                      {/* Nimara Focus badge for Tiers 0-2 */}
                      {isNimaraFocus && (
                        <div className="absolute -top-2 right-3">
                          <span className="px-2 py-0.5 rounded-full bg-accent/90 text-accent-foreground text-[9px] font-bold uppercase tracking-wider shadow-sm">
                            Our Lane
                          </span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          isActive ? colors.bg : 'bg-white/10'
                        }`}>
                          <Icon size={18} className={isActive ? 'text-white' : 'text-white/70'} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base font-semibold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-white/70">{step.desc}</p>
                      
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className={`mt-3 p-3 rounded-lg ${colors.light}`}
                        >
                          <p className={`text-sm font-medium ${colors.text}`}>→ {step.detail}</p>
                        </motion.div>
                      )}
                    </button>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-10 sm:mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-slate-800/80 border border-white/10">
            <p className="text-foreground/80 text-xs sm:text-sm text-center sm:text-left">
              Not sure where you fall?{' '}
              <span className="text-primary-foreground font-medium">Our free Health Check will place you.</span>
            </p>
            <a
              href="/health-score"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary-background"
            >
              Find your level
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p 
          className="mt-10 text-center text-sm text-white/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          We use this ladder to choose the right level of help for you—never too much, never too little.
        </motion.p>
      </div>
    </section>
  );
};