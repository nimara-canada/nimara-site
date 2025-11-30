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
    title: "Idea Stage", 
    desc: "You're just starting out. Big dreams, few systems in place yet.",
    detail: "Perfect time to build right from the start.",
    icon: Sprout,
    color: 'slate'
  },
  { 
    level: 1, 
    title: "Getting Started", 
    desc: "You have some basics, but there are many gaps to fill.",
    detail: "We help you identify and close critical gaps first.",
    icon: Leaf,
    color: 'emerald'
  },
  { 
    level: 2, 
    title: "Growing", 
    desc: "More pieces are in place, but things still feel messy.",
    detail: "Time to organize and connect your systems.",
    icon: TreeDeciduous,
    color: 'teal'
  },
  { 
    level: 3, 
    title: "Strong", 
    desc: "Most systems are working. Ready for optimization.",
    detail: "We fine-tune and strengthen what you have.",
    icon: Trees,
    color: 'violet'
  },
  { 
    level: 4, 
    title: "Very Strong", 
    desc: "You run like a well-oiled machine. Fully fundable.",
    detail: "Maintenance mode—we help you stay there.",
    icon: Mountain,
    color: 'amber'
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string; gradient: string }> = {
  slate: { bg: 'bg-slate-500', text: 'text-slate-400', border: 'border-slate-500/30', light: 'bg-slate-500/10', gradient: 'from-slate-500' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500/30', light: 'bg-emerald-500/10', gradient: 'from-emerald-500' },
  teal: { bg: 'bg-teal-500', text: 'text-teal-400', border: 'border-teal-500/30', light: 'bg-teal-500/10', gradient: 'from-teal-500' },
  violet: { bg: 'bg-violet-500', text: 'text-violet-400', border: 'border-violet-500/30', light: 'bg-violet-500/10', gradient: 'from-violet-500' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-400', border: 'border-amber-500/30', light: 'bg-amber-500/10', gradient: 'from-amber-500' }
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
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-slate-900"
      aria-labelledby="system-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-48 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute -bottom-48 right-1/4 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4 block">
            The Nimara System
          </span>
          
          <h2
            id="system-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Where are you on the ladder?
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed">
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
              
              // Calculate indent for staircase effect
              const indentPercent = (4 - step.level) * 8;

              return (
                <motion.div
                  key={step.level}
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
                      focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900
                      ${isActive 
                        ? `bg-slate-800 ${colors.border} shadow-xl shadow-black/20` 
                        : 'bg-slate-800/60 border-slate-700/50 hover:bg-slate-800/90'
                      }
                    `}
                    aria-pressed={isSelected}
                    aria-label={`Level ${step.level}: ${step.title}`}
                  >
                    {/* Step connector - vertical riser */}
                    {index < reversedSteps.length - 1 && (
                      <motion.div 
                        className="absolute -bottom-3 left-8 w-0.5 h-3 bg-gradient-to-b from-slate-600 to-slate-700"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: index * 0.12 + 0.3 }}
                        style={{ transformOrigin: 'top' }}
                        aria-hidden="true"
                      />
                    )}

                    {/* Level indicator */}
                    <div className="flex-shrink-0 relative">
                      <motion.div 
                        className={`
                          w-14 h-14 rounded-2xl flex items-center justify-center 
                          transition-all duration-300 
                          ${isActive 
                            ? `${colors.bg} shadow-lg` 
                            : 'bg-slate-700/80'
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
                            isActive ? 'text-white' : 'text-slate-400'
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
                            : 'bg-slate-600 text-slate-300'
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
                          isActive ? 'text-white' : 'text-slate-200'
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
                        isActive ? 'text-slate-300' : 'text-slate-400'
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
                        isActive ? colors.text : 'text-slate-600'
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
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden relative max-w-lg mx-auto">
          {/* Vertical ladder rail */}
          <div className="absolute left-5 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-amber-500 via-violet-500 via-teal-500 via-emerald-500 to-slate-500 opacity-30" aria-hidden="true" />
          
          <div className="space-y-3">
            {reversedSteps.map((step, index) => {
              const Icon = step.icon;
              const colors = colorClasses[step.color];
              const isSelected = selectedLevel === step.level;
              const isActive = isSelected;

              return (
                <motion.div
                  key={step.level}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Rung indicator */}
                  <motion.div 
                    className={`absolute left-3 top-6 w-5 h-5 rounded-lg border-2 border-slate-900 transition-all duration-300 ${
                      isActive ? colors.bg : 'bg-slate-700'
                    }`}
                    animate={{ scale: isActive ? 1.2 : 1 }}
                    aria-hidden="true"
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
                      {step.level}
                    </span>
                  </motion.div>

                  <button
                    type="button"
                    onClick={() => setSelectedLevel(isSelected ? null : step.level)}
                    className={`
                      relative w-full p-4 rounded-xl border text-left 
                      transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-violet-500
                      ${isActive 
                        ? `bg-slate-800 ${colors.border}` 
                        : 'bg-slate-800/50 border-slate-700/50'
                      }
                    `}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isActive ? colors.bg : 'bg-slate-700'
                      }`}>
                        <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400'} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                    
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
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <p className="text-slate-300 text-sm">
              Not sure where you fall?{' '}
              <span className="text-white font-medium">Our free Health Check will place you.</span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg shadow-violet-600/25 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Find your level
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p 
          className="mt-10 text-center text-sm text-slate-500"
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