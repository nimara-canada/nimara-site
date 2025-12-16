import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ladderSteps = [
  { 
    level: 0, 
    title: "Getting by", 
    desc: "Work gets done, but it lives in people's heads.",
    expandedDesc: "Nothing is written down or done the same way twice.",
    signs: [
      "People can't explain \"how we do things\" without a long conversation",
      "Approvals happen in DMs, texts, or someone's memory",
      "Reporting takes too long because you rebuild it every time"
    ],
    fixes: [
      "Write down the 5–10 tasks you repeat every month",
      "Create one shared place for files and templates",
      "Set one clear approval path for spending and decisions"
    ],
    outcome: "Less scramble. More clarity. A starting point you can build on."
  },
  { 
    level: 1, 
    title: "Pieces in place", 
    desc: "Some tools exist, but they're inconsistent.",
    expandedDesc: "You have some policies, trackers, or templates — but they're inconsistent.",
    signs: [
      "Multiple versions of the same document live in different places",
      "People ask \"Which file is the right one?\"",
      "New staff learn by guessing or watching others"
    ],
    fixes: [
      "Create one \"source of truth\" folder and lock old versions",
      "Choose one tracker for each key area",
      "Assign owners (who keeps each tool up to date)"
    ],
    outcome: "Work becomes repeatable. New staff ramp faster."
  },
  { 
    level: 2, 
    title: "Working basics", 
    desc: "The core systems work and are written down.",
    expandedDesc: "Your core systems are in place and mostly working.",
    signs: [
      "You can explain \"how we do things\" in a few steps",
      "Spending approvals and documentation are mostly consistent",
      "Reporting is doable, but still takes effort"
    ],
    fixes: [
      "Tighten financial tracking: budget vs actual, monthly review",
      "Build a clean \"proof pack\" habit",
      "Create simple dashboards for board and funder reporting"
    ],
    outcome: "Cleaner reporting. Better controls. Less last-minute stress."
  },
  { 
    level: 3, 
    title: "Running smoothly", 
    desc: "Systems are connected and run the same way across the team.",
    expandedDesc: "Systems are integrated. Work is consistent, roles are clear.",
    signs: [
      "People know who approves what and why",
      "Data is consistent across programs and reports",
      "Risks and issues are tracked early"
    ],
    fixes: [
      "Improve quality: checklists, QA steps, and review cycles",
      "Strengthen board reporting: fewer pages, clearer signals",
      "Build capacity plans: training, back-up coverage"
    ],
    outcome: "Higher trust. Faster decisions. Growth without breaking systems."
  },
  { 
    level: 4, 
    title: "Best-in-class", 
    desc: "Your systems are strong enough to teach others.",
    expandedDesc: "You don't just operate well — you improve on purpose.",
    signs: [
      "Audits and funder reviews are smooth and predictable",
      "The organization can scale because systems don't depend on one person",
      "You measure performance and adjust quickly"
    ],
    fixes: [
      "Keep systems current: annual policy and process reviews",
      "Share your model: playbooks, training, peer learning",
      "Invest in continuous improvement"
    ],
    outcome: "Sustainable growth. High credibility. A model others trust."
  },
];

export const SystemLadder = () => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      id="system" 
      className="relative py-24 md:py-32 lg:py-40 bg-secondary-background overflow-hidden"
      aria-labelledby="system-heading"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              The System
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="system-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.1] mb-6"
          >
            Five Tiers Of
            <br />
            <span className="font-normal italic text-white/60">Organizational Health</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl"
          >
            A simple framework to understand where you are—and where you're going.
          </motion.p>
        </div>

        {/* Tier List */}
        <div className="space-y-0">
          {ladderSteps.map((step, index) => {
            const isSelected = selectedLevel === step.level;
            const isNimaraFocus = step.level <= 2;

            return (
              <motion.div
                key={step.level}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              >
                {/* Row */}
                <motion.div
                  onClick={() => setSelectedLevel(isSelected ? null : step.level)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className={`
                    group grid grid-cols-12 gap-4 lg:gap-6 py-6 lg:py-8 border-t border-white/10 cursor-pointer
                    transition-colors duration-300 hover:bg-white/[0.02]
                  `}
                >
                  {/* Tier number & title */}
                  <div className="col-span-12 lg:col-span-4 flex items-start gap-4 lg:gap-6">
                    <span className={`
                      text-4xl lg:text-5xl font-extralight transition-colors duration-300
                      ${isNimaraFocus ? 'text-accent/70' : 'text-white/20'}
                    `}>
                      {step.level}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg lg:text-xl font-medium text-white group-hover:text-white transition-colors">
                          {step.title}
                        </h3>
                        {isNimaraFocus && (
                          <span className="px-2 py-0.5 text-[9px] tracking-wider uppercase text-accent bg-accent/10 rounded">
                            Our Focus
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-white/40">{step.desc}</p>
                    </div>
                  </div>
                  
                  {/* Empty spacer on desktop */}
                  <div className="hidden lg:block lg:col-span-6" />
                  
                  {/* Expand indicator */}
                  <div className="col-span-12 lg:col-span-2 flex items-center lg:justify-end">
                    <button className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white/60 transition-colors">
                      <span className="hidden sm:inline">{isSelected ? 'Close' : 'Details'}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </motion.div>

                {/* Expanded Panel */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 lg:pb-10">
                        <div className="bg-white/[0.03] rounded-xl p-6 lg:p-8 border border-white/[0.06]">
                          {/* Description */}
                          <p className="text-white/70 text-lg mb-8 max-w-2xl">
                            {step.expandedDesc}
                          </p>
                          
                          {/* Three columns */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {/* Signs */}
                            <div>
                              <h5 className="text-xs font-medium uppercase tracking-wider text-white/30 mb-4">
                                Signs you're here
                              </h5>
                              <ul className="space-y-3">
                                {step.signs.map((sign, i) => (
                                  <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                                    <span className="w-1 h-1 rounded-full bg-white/30 mt-2 flex-shrink-0" />
                                    {sign}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Fixes */}
                            <div>
                              <h5 className="text-xs font-medium uppercase tracking-wider text-white/30 mb-4">
                                What to fix next
                              </h5>
                              <ul className="space-y-3">
                                {step.fixes.map((fix, i) => (
                                  <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                                    <span className="w-1 h-1 rounded-full bg-accent/50 mt-2 flex-shrink-0" />
                                    {fix}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Outcome */}
                            <div>
                              <h5 className="text-xs font-medium uppercase tracking-wider text-white/30 mb-4">
                                Outcome
                              </h5>
                              <p className="text-sm text-accent/80 leading-relaxed">
                                {step.outcome}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>

        {/* Focus note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center text-sm text-white/40"
        >
          We specialize in Tiers 0–2: getting your basics written down and working.
        </motion.p>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
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
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemLadder;
