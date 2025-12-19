import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Play, X } from 'lucide-react';

const fitCriteria = [
  {
    id: 'board',
    text: 'Board, money, or HR feels unclear'
  },
  {
    id: 'compliance',
    text: "You're chasing compliance or funder rules"
  },
  {
    id: 'tools',
    text: 'You want tools people actually use'
  }
];

export const FitCheck = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
      className="relative py-20 md:py-28 lg:py-36 bg-primary overflow-hidden" 
      aria-labelledby="fit-check-heading" 
      id="fit-check"
    >

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/70">
              Who We Work With
            </span>
            <div className="h-px flex-1 bg-white/20" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="fit-check-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-5 text-white"
          >
            Is Nimara right
            <br />
            <span className="font-normal italic text-white/80">for your nonprofit?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 max-w-xl"
          >
            If your mission is strong but your systems feel messy, we can help.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Checklist */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs font-medium tracking-[0.15em] uppercase text-white/70 mb-8"
            >
              If 2+ are true, start here:
            </motion.p>

            <div className="space-y-0">
              {fitCriteria.map((item, index) => {
                const isChecked = checkedItems.includes(item.id);
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                    className={`
                      w-full flex items-start gap-4 py-5 text-left transition-all duration-300 border-t border-white/20
                      focus:outline-none group
                      ${isChecked ? 'bg-white/15 -mx-4 px-4' : 'hover:bg-white/10 -mx-4 px-4'}
                    `}
                    aria-pressed={isChecked}
                  >
                    <div className={`
                      flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 mt-0.5
                      ${isChecked 
                        ? 'bg-white border-white' 
                        : 'border-white/40 group-hover:border-white/60'
                      }
                    `}>
                      <motion.svg
                        initial={false}
                        animate={{ scale: isChecked ? 1 : 0, opacity: isChecked ? 1 : 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        className="w-3 h-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </motion.svg>
                    </div>

                    <span className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isChecked ? 'text-white' : 'text-white/80 group-hover:text-white'
                    }`}>
                      {item.text}
                    </span>
                  </motion.button>
                );
              })}
              <div className="border-t border-white/20" />
            </div>

            {/* Result */}
            <AnimatePresence mode="wait">
              {matchCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-8 flex items-center gap-4"
                >
                  <span className="text-sm text-white/70">
                    {matchCount} of {fitCriteria.length} selected
                  </span>
                  {isGoodFit && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-accent font-medium px-3 py-1 rounded-full bg-accent/20"
                    >
                      ✓ Looks like a good fit
                    </motion.span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="/check"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded hover:bg-white/90 transition-colors"
              >
                Start the free check (4 min)
              </a>
              <a
                href="/book-a-call"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Or schedule a call
              </a>
            </motion.div>
          </div>

          {/* Right - Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              type="button"
              onClick={() => setShowVideoModal(true)}
              className="relative block w-full aspect-[4/3] bg-white group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-primary rounded-lg overflow-hidden shadow-lg"
              aria-label="Play Nimara intro video"
              whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(11, 17, 32, 0.25)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1600&q=80")'
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0B1120]/50" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                >
                  <Play size={28} className="text-[#0B1120] ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Duration */}
              <div className="absolute top-6 left-6">
                <span className="inline-block px-3 py-1.5 bg-white text-[#0B1120] text-xs font-medium rounded">
                  1 min
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                <p className="text-white font-medium text-lg">1-minute overview of how we work.</p>
              </div>
            </motion.button>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(11, 17, 32, 0.2)' }}
              transition={{ delay: 0.6, duration: 0.3 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-lg cursor-default"
            >
              <p className="text-[#0B1120]/80 italic leading-relaxed mb-3">
                "Finally, someone who gets what we actually need."
              </p>
              <p className="text-xs text-[#0B1120]/50">
                — Executive Director, Community Nonprofit
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/90"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-secondary"
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center text-secondary-foreground transition-colors"
                aria-label="Close video"
              >
                <X size={20} />
              </button>

              <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent flex items-center justify-center mx-auto mb-4">
                    <Play size={36} className="text-secondary ml-1" fill="currentColor" />
                  </div>
                  <p className="text-secondary-foreground font-medium text-lg mb-1">Coming Soon</p>
                  <p className="text-secondary-foreground/50 text-sm text-center max-w-xs">
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
