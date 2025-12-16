import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const ladderSteps = [
  { 
    level: 0, 
    title: "Getting by", 
    desc: "Work gets done, but it lives in people's heads.",
    youMightBeHereIf: [
      "Nothing is written down",
      "The same task is done 3 different ways",
      "You rely on \"hero\" staff to keep things moving"
    ],
    nextFocus: "Get the basics into simple shared tools.",
    expandedDesc: "Work gets done, but it lives in people's heads. Nothing is written down or done the same way twice.",
    signs: [
      "People can't explain \"how we do things\" without a long conversation",
      "Approvals happen in DMs, texts, or someone's memory",
      "Reporting takes too long because you rebuild it every time"
    ],
    fixes: [
      "Write down the 5–10 tasks you repeat every month",
      "Create one shared place for files and templates (not personal inboxes)",
      "Set one clear approval path for spending and decisions"
    ],
    outcome: "Less scramble. More clarity. A starting point you can build on."
  },
  { 
    level: 1, 
    title: "Pieces in place", 
    desc: "Some tools exist, but they're inconsistent.",
    youMightBeHereIf: [
      "You have templates, but no one uses the same version",
      "Policies exist, but they're outdated or hard to find",
      "Tracking happens, but it's incomplete"
    ],
    nextFocus: "Standardize the basics and make them easy to follow.",
    expandedDesc: "You have some policies, trackers, or templates — but they're inconsistent and hard to use day to day.",
    signs: [
      "Multiple versions of the same document live in different places",
      "People ask \"Which file is the right one?\"",
      "New staff learn by guessing or watching others"
    ],
    fixes: [
      "Create one \"source of truth\" folder and lock old versions",
      "Choose one tracker for each key area (money, staff, reporting)",
      "Assign owners (who keeps each tool up to date)"
    ],
    outcome: "Work becomes repeatable. New staff ramp faster. Fewer dropped balls."
  },
  { 
    level: 2, 
    title: "Working basics", 
    desc: "The core systems work and are written down.",
    youMightBeHereIf: [
      "Monthly work has a routine",
      "Approvals are clearer",
      "Reporting is possible without panic"
    ],
    nextFocus: "Strengthen controls and make reporting easier.",
    expandedDesc: "Your core systems are in place and mostly working. They're simple, written down, and your team can follow them.",
    signs: [
      "You can explain \"how we do things\" in a few steps",
      "Spending approvals and documentation are mostly consistent",
      "Reporting is doable, but still takes effort"
    ],
    fixes: [
      "Tighten financial tracking: budget vs actual, monthly review",
      "Build a clean \"proof pack\" habit (receipt, payment, deliverable)",
      "Create simple dashboards for board and funder reporting"
    ],
    outcome: "Cleaner reporting. Better controls. Less last-minute stress."
  },
  { 
    level: 3, 
    title: "Running smoothly", 
    desc: "Systems are connected and run the same way across the team.",
    youMightBeHereIf: [
      "You have clear roles and routines",
      "Reporting is reliable",
      "Risks are tracked, not guessed"
    ],
    nextFocus: "Improve performance and scale without chaos.",
    expandedDesc: "Systems are integrated across the team. Work is consistent, roles are clear, and reporting is strong.",
    signs: [
      "People know who approves what and why",
      "Data is consistent across programs and reports",
      "Risks and issues are tracked early, not discovered late"
    ],
    fixes: [
      "Improve quality: checklists, QA steps, and review cycles",
      "Strengthen board reporting: fewer pages, clearer signals",
      "Build capacity plans: training, back-up coverage, handoffs"
    ],
    outcome: "Higher trust. Faster decisions. Growth without breaking systems."
  },
  { 
    level: 4, 
    title: "Best-in-class", 
    desc: "Your systems are strong enough to teach others.",
    youMightBeHereIf: [
      "Processes are documented and audited easily",
      "You improve systems on purpose, not by accident",
      "You can scale or replicate programs confidently"
    ],
    nextFocus: "Maintain excellence and mentor others.",
    expandedDesc: "Your systems are strong, documented, and easy to audit. You don't just operate well — you improve on purpose.",
    signs: [
      "Audits and funder reviews are smooth and predictable",
      "The organization can scale because systems don't depend on one person",
      "You measure performance and adjust quickly"
    ],
    fixes: [
      "Keep systems current: annual policy and process reviews",
      "Share your model: playbooks, training, peer learning",
      "Invest in continuous improvement (small upgrades, ongoing)"
    ],
    outcome: "Sustainable growth. High credibility. A model others trust."
  },
];

export const SystemLadder = () => {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      id="system" 
      className="relative py-24 md:py-32 lg:py-40 bg-[#0B1120] text-white overflow-hidden"
      aria-labelledby="system-heading"
    >
      {/* Subtle gradient background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.25em] uppercase text-accent">
              <span className="w-12 h-px bg-gradient-to-r from-accent to-transparent" />
              The Nimara System
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="system-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-8"
          >
            Where Does Your
            <br />
            <span className="font-medium">
              Nonprofit Stand?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-2xl"
          >
            A Simple 5-Tier Framework To Understand Where You Are Today—And Exactly Where We Can Help You Go.
          </motion.p>
        </div>

        {/* Progress Bar - Desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block relative mb-8"
        >
          {/* Main progress line */}
          <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={isInView ? { width: '60%' } : {}}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent/40 rounded-full"
            />
          </div>
          
          {/* Progress dots */}
          <div className="absolute -top-2 left-0 right-0 flex justify-between px-[8%]">
            {ladderSteps.map((step, index) => {
              const isNimaraFocus = step.level <= 2;
              const isHovered = hoveredLevel === step.level;
              const isSelected = selectedLevel === step.level;
              
              return (
                <motion.div
                  key={step.level}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="relative flex flex-col items-center"
                >
                  <div className={`
                    w-5 h-5 rounded-full border-2 transition-all duration-300
                    ${isNimaraFocus 
                      ? 'bg-accent border-accent' 
                      : 'bg-[#0B1120] border-white/30'
                    }
                    ${(isHovered || isSelected) ? 'scale-110' : ''}
                  `} />
                  
                  <span className={`
                    mt-2 text-xs font-medium transition-colors duration-300
                    ${isNimaraFocus ? 'text-accent' : 'text-white/40'}
                    ${(isHovered || isSelected) ? 'text-white' : ''}
                  `}>
                    Tier {step.level}
                  </span>
                </motion.div>
              );
            })}
        </div>
        </motion.div>

        {/* Mobile Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:hidden flex items-center justify-center gap-2 mb-8"
        >
          {ladderSteps.map((step) => {
            const isNimaraFocus = step.level <= 2;
            return (
              <div
                key={step.level}
                className={`
                  w-8 h-1.5 rounded-full transition-colors duration-300
                  ${isNimaraFocus ? 'bg-accent' : 'bg-white/20'}
                `}
              />
            );
          })}
        </motion.div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 mb-16">
          {ladderSteps.map((step, index) => {
            const isHovered = hoveredLevel === step.level;
            const isSelected = selectedLevel === step.level;
            const isNimaraFocus = step.level <= 2;
            const isActive = isHovered || isSelected;

            return (
              <motion.div
                key={step.level}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                onMouseEnter={() => setHoveredLevel(step.level)}
                onMouseLeave={() => setHoveredLevel(null)}
                onClick={() => setSelectedLevel(selectedLevel === step.level ? null : step.level)}
                className="group cursor-pointer"
              >
                <div
                  className={`
                    relative h-full p-[1px] rounded-2xl transition-all duration-300 overflow-hidden
                    ${isActive 
                      ? (isNimaraFocus 
                          ? 'bg-gradient-to-br from-accent/60 to-primary/30' 
                          : 'bg-white/20')
                      : 'bg-white/[0.06]'
                    }
                    ${isActive ? 'transform -translate-y-1' : ''}
                  `}
                >
                  {/* Inner card content */}
                  <div className={`
                    relative h-full p-6 lg:p-5 rounded-[15px] transition-all duration-300
                    bg-[#0B1120]
                  `}>
                    {/* Subtle glow for focused tiers */}
                    {isNimaraFocus && isActive && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent" />
                    )}

                    {/* Tier number */}
                    <div className="relative mb-4">
                      <span className={`
                        text-6xl lg:text-5xl font-extralight transition-colors duration-300
                        ${isNimaraFocus 
                          ? 'text-accent/60'
                          : 'text-white/15'
                        }
                      `}>
                        {step.level}
                      </span>
                      
                      {/* Focus badge */}
                      {isNimaraFocus && (
                        <span className="absolute top-0 right-0 px-2 py-0.5 text-[9px] tracking-widest uppercase bg-accent/20 text-accent rounded-full border border-accent/30">
                          Focus
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className={`
                      text-lg font-medium mb-3 transition-colors duration-300
                      ${isActive ? 'text-white' : 'text-white/80'}
                    `}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/40 leading-relaxed mb-3 group-hover:text-white/50 transition-colors duration-300">
                      {step.desc}
                    </p>

                    {/* You might be here if */}
                    <div className="space-y-1.5 mb-3">
                      <p className="text-[10px] uppercase tracking-wider text-white/30 font-medium">You might be here if:</p>
                      <ul className="space-y-1">
                        {step.youMightBeHereIf.slice(0, 2).map((item, i) => (
                          <li key={i} className="text-xs text-white/40 flex items-start gap-1.5">
                            <span className="text-accent/60 mt-0.5">•</span>
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Next focus */}
                    <div className="pt-3 border-t border-white/5">
                      <p className="text-[10px] uppercase tracking-wider text-white/30 font-medium mb-1">Next focus:</p>
                      <p className="text-xs text-accent/80 line-clamp-2">{step.nextFocus}</p>
                    </div>

                    {/* Expand indicator */}
                    <div className={`
                      absolute bottom-4 right-4 w-6 h-6 rounded-full flex items-center justify-center
                      transition-all duration-300
                      ${isActive ? 'bg-accent/20 text-accent' : 'bg-white/5 text-white/30'}
                    `}>
                      <svg
                        className={`w-3 h-3 transition-transform duration-300 ${isSelected ? 'rotate-45' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hint text */}
        <p className="text-center text-sm text-white/30 mb-6">
          Click Any Tier To Learn More
        </p>

        {/* Expanded Detail Panel */}
        <AnimatePresence>
          {selectedLevel !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden mb-16"
            >
              <div className="relative p-8 lg:p-10 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent/50 rounded-t-2xl" />
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <span className="text-7xl lg:text-8xl font-extralight text-accent/60">
                      {ladderSteps[selectedLevel].level}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-2xl lg:text-3xl font-medium text-white mb-2">
                      Tier {ladderSteps[selectedLevel].level} — {ladderSteps[selectedLevel].title}
                    </h4>
                    <p className="text-lg text-white/60 leading-relaxed">
                      {ladderSteps[selectedLevel].expandedDesc}
                    </p>
                  </div>
                </div>

                {/* Three columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {/* Signs you're here */}
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <h5 className="text-sm font-medium text-white/80 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      Signs you're here
                    </h5>
                    <ul className="space-y-3">
                      {ladderSteps[selectedLevel].signs.map((sign, i) => (
                        <li key={i} className="text-sm text-white/50 leading-relaxed flex items-start gap-2">
                          <span className="text-white/30 mt-0.5">•</span>
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What to fix next */}
                  <div className="p-5 rounded-xl bg-accent/5 border border-accent/10">
                    <h5 className="text-sm font-medium text-accent/90 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      What to fix next (simple wins)
                    </h5>
                    <ul className="space-y-3">
                      {ladderSteps[selectedLevel].fixes.map((fix, i) => (
                        <li key={i} className="text-sm text-white/60 leading-relaxed flex items-start gap-2">
                          <span className="text-accent/60 mt-0.5">→</span>
                          <span>{fix}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col">
                    <h5 className="text-sm font-medium text-white/80 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                      Outcome
                    </h5>
                    <p className="text-base text-white/70 leading-relaxed flex-1">
                      {ladderSteps[selectedLevel].outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Focus Indicator Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-accent/30" />
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-medium tracking-wide text-accent">
              We specialize in Tiers 0–2: getting your basics written down and working.
            </span>
          </div>
          <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-accent/30" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative"
        >
          <div className="relative p-8 lg:p-12 rounded-3xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-light text-white mb-3">
                  Not sure where you stand?
                </h3>
                <p className="text-white/50 text-lg max-w-xl">
                  Take the free 4-minute assessment and find out your tier—plus get a personalized recommendation.
                </p>
              </div>
              
              <a
                href="/check"
                className="group inline-flex items-center gap-4 px-8 py-4 bg-accent text-[#0B1120] font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                <span>Start the free check</span>
                <span className="w-5 h-5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
