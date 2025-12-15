import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

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
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      id="system" 
      className="relative py-24 md:py-32 lg:py-40 bg-[#0B1120] text-white overflow-hidden"
      aria-labelledby="system-heading"
    >
      {/* Premium gradient orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-accent/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="max-w-3xl mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.25em] uppercase text-accent">
              <span className="w-12 h-px bg-gradient-to-r from-accent to-transparent" />
              The Nimara System
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            id="system-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-8"
          >
            Where does your
            <br />
            <span className="font-medium bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              nonprofit stand?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-2xl"
          >
            A simple 5-tier framework to understand where you are today—and exactly where we can help you go.
          </motion.p>
        </div>

        {/* Progress Bar - Desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block relative mb-8"
        >
          {/* Main progress line */}
          <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
            {/* Animated gradient fill */}
            <motion.div
              initial={{ width: '0%' }}
              animate={isInView ? { width: '60%' } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent via-accent/80 to-accent/40 rounded-full"
            />
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" style={{ backgroundSize: '200% 100%' }} />
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
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Dot with glow effects */}
                  <div className="relative">
                    {/* Outer glow pulse */}
                    {isNimaraFocus && (
                      <>
                        <div className="absolute -inset-2 rounded-full bg-accent/20 animate-pulse" />
                        <div 
                          className="absolute -inset-3 rounded-full bg-accent/10 animate-ping" 
                          style={{ animationDuration: '2s' }}
                        />
                      </>
                    )}
                    
                    {/* Main dot */}
                    <div className={`
                      relative w-5 h-5 rounded-full border-2 transition-all duration-300
                      ${isNimaraFocus 
                        ? 'bg-accent border-accent shadow-[0_0_20px_rgba(172,252,227,0.5)]' 
                        : 'bg-[#0B1120] border-white/30'
                      }
                      ${(isHovered || isSelected) ? 'scale-125 ring-4 ring-accent/20' : ''}
                    `}>
                      {/* Inner glow */}
                      {isNimaraFocus && (
                        <div className="absolute inset-0.5 rounded-full bg-white/30" />
                      )}
                    </div>
                  </div>
                  
                  {/* Tier label */}
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
          
          {/* Focus zone indicator */}
          <div className="absolute -top-1 left-0 w-[60%] flex justify-end">
            <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent" />
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
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onMouseEnter={() => setHoveredLevel(step.level)}
                onMouseLeave={() => setHoveredLevel(null)}
                onClick={() => setSelectedLevel(selectedLevel === step.level ? null : step.level)}
                className="group cursor-pointer"
              >
                {/* Gradient border wrapper */}
                <motion.div
                  className={`
                    relative h-full p-[1px] rounded-2xl transition-all duration-500 overflow-hidden
                    ${isActive 
                      ? (isNimaraFocus 
                          ? 'bg-gradient-to-br from-accent via-accent/50 to-primary/50' 
                          : 'bg-gradient-to-br from-white/40 via-white/20 to-white/10')
                      : 'bg-white/[0.06]'
                    }
                  `}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated gradient on hover */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    ${isNimaraFocus 
                      ? 'bg-[conic-gradient(from_0deg,hsl(var(--accent)),hsl(var(--primary)),hsl(var(--accent)))]' 
                      : 'bg-[conic-gradient(from_0deg,rgba(255,255,255,0.3),rgba(255,255,255,0.1),rgba(255,255,255,0.3))]'
                    }
                  `} style={{ animation: isActive ? 'spin 3s linear infinite' : 'none' }} />
                  
                  {/* Inner card content */}
                  <div className={`
                    relative h-full p-6 lg:p-5 rounded-[15px] transition-all duration-500
                    ${isActive 
                      ? 'bg-[#0B1120] shadow-2xl shadow-white/5' 
                      : 'bg-[#0B1120]'
                    }
                  `}>
                  {/* Glow effect for focused tiers */}
                  {isNimaraFocus && (
                    <div className={`
                      absolute inset-0 rounded-2xl transition-opacity duration-500
                      bg-gradient-to-b from-accent/10 to-transparent
                      ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}
                    `} />
                  )}

                  {/* Tier number with gradient */}
                  <div className="relative mb-4">
                    <span className={`
                      text-6xl lg:text-5xl font-extralight transition-all duration-500
                      ${isNimaraFocus 
                        ? 'bg-gradient-to-br from-accent via-accent/80 to-accent/40 bg-clip-text text-transparent'
                        : 'text-white/15 group-hover:text-white/25'
                      }
                    `}>
                      {step.level}
                    </span>
                    
                    {/* Focus badge */}
                    {isNimaraFocus && (
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-0 right-0 px-2 py-0.5 text-[9px] tracking-widest uppercase bg-accent/20 text-accent rounded-full border border-accent/30"
                      >
                        Focus
                      </motion.span>
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
                  <p className="text-sm text-white/40 leading-relaxed line-clamp-3 group-hover:text-white/50 transition-colors">
                    {step.desc}
                  </p>

                  {/* Expand indicator */}
                  <div className={`
                    absolute bottom-4 right-4 w-6 h-6 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${isActive ? 'bg-accent/20 text-accent' : 'bg-white/5 text-white/30'}
                  `}>
                    <motion.svg
                      animate={{ rotate: isSelected ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </motion.svg>
                  </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Expanded Detail Panel */}
        <AnimatePresence>
          {selectedLevel !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden mb-16"
            >
              <div className="relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent/50 rounded-t-2xl" />
                
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-shrink-0">
                    <span className="text-8xl font-extralight bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">
                      {ladderSteps[selectedLevel].level}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-2xl lg:text-3xl font-medium text-white mb-4">
                      {ladderSteps[selectedLevel].title}
                    </h4>
                    <p className="text-lg text-white/60 leading-relaxed mb-6">
                      {ladderSteps[selectedLevel].desc}
                    </p>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20">
                      <span className="text-accent text-lg">→</span>
                      <p className="text-accent/90 leading-relaxed">
                        {ladderSteps[selectedLevel].detail}
                      </p>
                    </div>
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-accent/30" />
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-accent">
              Tier 0–2: Our primary focus
            </span>
          </div>
          <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-accent/30" />
        </motion.div>

        {/* Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="relative"
        >
          <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            
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
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-accent text-[#0B1120] font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                <span className="relative z-10">Start the free check</span>
                <motion.span
                  className="relative z-10 w-5 h-5 flex items-center justify-center"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.span>
                
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};