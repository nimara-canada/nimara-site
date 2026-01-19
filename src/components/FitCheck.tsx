import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { Play, X, ArrowRight, Check } from 'lucide-react';

const fitCriteria = [
  {
    id: 'proof-scramble',
    text: "You've scrambled to find proof when a funder asked."
  },
  {
    id: 'key-person-risk',
    text: "If one person left, important knowledge would leave with them."
  },
  {
    id: 'reporting-fire-drill',
    text: "Reporting time always feels like a fire drill."
  },
  {
    id: 'board-gaps',
    text: "Board decisions don't always get written down."
  }
];

export const FitCheck = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px"
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  const contentY = useTransform(smoothProgress, [0, 1], [40, -40]);
  const videoY = useTransform(smoothProgress, [0, 1], [60, -30]);
  const quoteY = useTransform(smoothProgress, [0, 1], [30, -15]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const matchCount = checkedItems.length;
  const isGoodFit = matchCount >= 2;

  return (
    <section 
      ref={sectionRef} 
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-[#0F1219] overflow-hidden scroll-mt-20" 
      aria-labelledby="fit-check-heading" 
      id="fit-check"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20">
          {/* Left Column */}
          <motion.div style={{ y: contentY }}>
            {/* Section Tag with Line */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10"
            >
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.1em] sm:tracking-[0.15em] uppercase text-[#A0A0A0]">
                Who We Work With
              </span>
              <div className="h-px flex-1 bg-[#2D3140]" />
            </motion.div>
            
            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="fit-check-heading" 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold tracking-tight leading-[1.1] mb-4 sm:mb-5"
            >
              <span className="text-white">Is Nimara right</span>
              <br />
              <span className="italic text-[#ACFCE3]">for your nonprofit?</span>
            </motion.h2>
            
            {/* Subhead */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#A0A0A0] max-w-lg"
            >
              For Canadian nonprofits with 0–50 staff. If your mission is strong but your back office feels shaky — we can help.
            </motion.p>

            {/* Checklist */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-5">
              {fitCriteria.map((item, index) => {
                const isChecked = checkedItems.includes(item.id);
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.06 }}
                    className={`
                      w-full flex items-start gap-3 sm:gap-4 text-left transition-all duration-300
                      focus:outline-none group
                      ${isChecked ? 'opacity-100' : 'hover:opacity-90'}
                    `}
                    aria-pressed={isChecked}
                  >
                    <div className={`
                      flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded border-2 flex items-center justify-center transition-all duration-300
                      ${isChecked 
                        ? 'bg-[#ACFCE3] border-[#ACFCE3]' 
                        : 'border-[#4B5563] group-hover:border-[#ACFCE3]'}
                    `}>
                      <motion.div
                        initial={false}
                        animate={{
                          scale: isChecked ? 1 : 0,
                          opacity: isChecked ? 1 : 0
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30
                        }}
                      >
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#0F1219]" strokeWidth={3} />
                      </motion.div>
                    </div>

                    <span className="text-sm sm:text-base md:text-[17px] leading-relaxed text-white">
                      {item.text}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Result Indicator */}
            <AnimatePresence mode="wait">
              {matchCount > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4"
                >
                  <span className="text-xs sm:text-sm text-[#A0A0A0]">
                    {matchCount} of {fitCriteria.length} selected
                  </span>
                  {isGoodFit && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      className="text-xs sm:text-sm text-[#ACFCE3] font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#ACFCE3]/15"
                    >
                      ✓ We can help with that
                    </motion.span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4"
            >
              <motion.a 
                href="https://calendly.com/thabani-nimara/fit-call"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-4 
                  border-2 border-[#6945D8] text-white text-sm sm:text-base font-medium rounded-lg
                  transition-all duration-300 w-full sm:w-fit
                  hover:bg-[#6945D8]
                  ${isGoodFit ? 'animate-pulse' : ''}
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a 20-min Fit Call
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>
              
              <a 
                href="https://form.typeform.com/to/hpY1Ikmr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0A0A0] hover:text-white transition-colors text-sm sm:text-[15px] inline-flex items-center gap-1 group"
              >
                Or try the Free Health Check (10 min)
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            style={{ y: videoY }}
            className="flex flex-col justify-center"
          >
            {/* Video Thumbnail */}
            <motion.button 
              type="button"
              onClick={() => setShowVideoModal(true)}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative block w-full aspect-video bg-[#1E2130] group focus:outline-none focus:ring-2 focus:ring-[#6945D8] focus:ring-offset-4 focus:ring-offset-[#0F1219] rounded-lg sm:rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              aria-label="Play Nimara intro video"
              whileHover={{ y: -4, scale: 1.01 }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1600&q=80")'
                }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Time Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                <span className="inline-flex px-2 sm:px-3 py-1 sm:py-1.5 bg-white text-[#1A1A1A] text-[10px] sm:text-xs font-medium rounded-full">
                  1 min
                </span>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Play size={20} className="text-[#1A1A1A] ml-0.5 sm:ml-1 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor" />
                </motion.div>
              </div>

              {/* Caption with Gradient */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-medium text-sm sm:text-base">
                  1-minute overview of how we work.
                </p>
              </div>
            </motion.button>

            {/* Testimonial Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{ y: quoteY }}
              className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#1E2130] rounded-lg sm:rounded-xl border border-[#2D3140]"
            >
              <p className="text-[10px] sm:text-xs text-[#A0A0A0] mb-2 sm:mb-3 font-medium uppercase tracking-[0.1em]">
                Early Feedback
              </p>
              <p className="text-white italic text-base sm:text-lg leading-relaxed mb-2 sm:mb-3">
                "Finally, someone who gets what we actually need."
              </p>
              <p className="text-xs sm:text-sm text-[#A0A0A0]">
                — Executive Director, Youth Services Nonprofit, Alberta
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl bg-[#1E2130] rounded-xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button 
                type="button"
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close video"
              >
                <X size={20} />
              </button>

              <div className="aspect-video bg-[#0F1219] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#ACFCE3] flex items-center justify-center mx-auto mb-4">
                    <Play size={36} className="text-[#0F1219] ml-1" fill="currentColor" />
                  </div>
                  <p className="text-white font-medium text-lg mb-1">Coming Soon</p>
                  <p className="text-[#A0A0A0] text-sm text-center max-w-xs mx-auto">
                    A short video is coming soon. Check back in the next couple of weeks.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
