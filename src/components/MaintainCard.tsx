import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const MaintainCard = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="bg-[hsl(15,70%,75%)] text-[hsl(var(--nim-navy))] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 min-h-[70vh] lg:min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="flex flex-col justify-between relative z-10">
            
            {/* Top: Step Number + Description */}
            <div>
              {/* Step Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-full border-2 border-[hsl(var(--nim-navy))]/40 flex items-center justify-center mb-8"
              >
                <span className="text-lg font-medium text-[hsl(var(--nim-navy))]">3</span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg lg:text-xl text-[hsl(var(--nim-navy))]/80 leading-relaxed max-w-md mb-8"
              >
                We keep it from falling apart. You get a simple playbook, checklists, and a maintenance rhythm—so when staff change, the system still works.
              </motion.p>

              {/* Tool Icons Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center gap-3 text-sm text-[hsl(var(--nim-navy))]/50"
              >
                <span>Checklists</span>
                <span className="w-1 h-1 rounded-full bg-[hsl(var(--nim-navy))]/30" />
                <span>Monthly rhythm</span>
                <span className="w-1 h-1 rounded-full bg-[hsl(var(--nim-navy))]/30" />
                <span>Quarterly tune-up</span>
              </motion.div>
            </div>

            {/* Bottom: Big Word + Learn More */}
            <div className="mt-auto pt-12 lg:pt-20">
              {/* Big Word */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-black leading-[0.85] tracking-[-0.04em] uppercase text-[hsl(var(--nim-navy))]"
                style={{ fontWeight: 900 }}
              >
                Maintain
              </motion.h2>

              {/* Learn More Link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 pt-6 border-t border-[hsl(var(--nim-navy))]/20 max-w-md"
              >
                <a 
                  href="/how-nimara-works" 
                  className="inline-flex items-center justify-between w-full group"
                >
                  <span className="text-lg text-[hsl(var(--nim-navy))]/80 group-hover:text-[hsl(var(--nim-navy))] transition-colors">
                    Learn more: Maintain
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[hsl(var(--nim-navy))]/60 group-hover:text-[hsl(var(--nim-navy))] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </motion.div>

              {/* Kid-language sub-line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-sm text-[hsl(var(--nim-navy))]/40 mt-4 italic"
              >
                We help you keep it tidy.
              </motion.p>
            </div>
          </div>

          {/* Right Column - Poster Card */}
          <div className="flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 2 }}
              animate={isInView ? { opacity: 1, x: 0, rotate: 3 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]"
            >
              {/* Poster Card - Cream/warm theme */}
              <div 
                className="relative rounded-xl overflow-hidden shadow-2xl"
                style={{ 
                  backgroundColor: 'hsl(30, 30%, 95%)',
                  aspectRatio: '3/4'
                }}
              >
                {/* Noise texture overlay */}
                <div 
                  className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Top label */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--nim-navy))]/70 font-semibold">
                    Maintenance Rhythm
                  </span>
                  {/* Corner accent */}
                  <div 
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: 'hsl(15, 70%, 55%)' }}
                  />
                </div>

                {/* Center content - Calendar/rhythm visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="160" height="140" viewBox="0 0 160 140" className="opacity-40">
                    {/* Calendar grid pattern */}
                    <g stroke="hsl(var(--nim-navy))" strokeWidth="1" fill="none">
                      {/* Grid lines */}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <line key={`h-${i}`} x1="20" y1={30 + i * 22} x2="140" y2={30 + i * 22} opacity="0.3" />
                      ))}
                      {Array.from({ length: 6 }).map((_, i) => (
                        <line key={`v-${i}`} x1={20 + i * 24} y1="30" x2={20 + i * 24} y2="118" opacity="0.3" />
                      ))}
                    </g>
                    {/* Checkmarks in some cells */}
                    <g fill="hsl(var(--nim-navy))" opacity="0.5">
                      <circle cx="44" cy="52" r="6" />
                      <circle cx="92" cy="52" r="6" />
                      <circle cx="68" cy="74" r="6" />
                      <circle cx="116" cy="74" r="6" />
                      <circle cx="44" cy="96" r="6" />
                      <circle cx="92" cy="96" r="6" />
                    </g>
                  </svg>
                </div>

                {/* Bottom stats - stacked layout */}
                <div className="absolute bottom-5 left-5 right-5">
                  {/* Top row stats */}
                  <div className="flex items-start justify-between mb-4 pb-3 border-b border-[hsl(var(--nim-navy))]/10">
                    <div>
                      <span 
                        className="text-2xl sm:text-3xl font-black tracking-tight block"
                        style={{ color: 'hsl(var(--nim-navy))' }}
                      >
                        30 min
                      </span>
                      <span className="text-[10px] text-[hsl(var(--nim-navy))]/50 uppercase tracking-wider">/ month</span>
                    </div>
                    <div className="text-right">
                      <span 
                        className="text-2xl sm:text-3xl font-black tracking-tight block"
                        style={{ color: 'hsl(var(--nim-navy))' }}
                      >
                        1
                      </span>
                      <span className="text-[10px] text-[hsl(var(--nim-navy))]/50 uppercase tracking-wider">Playbook</span>
                    </div>
                  </div>
                  {/* Bottom row */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] text-[hsl(var(--nim-navy))]/50 uppercase tracking-wider mb-1">Quarterly</p>
                      <span 
                        className="text-lg font-bold block"
                        style={{ color: 'hsl(var(--nim-navy))' }}
                      >
                        Check
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] sm:text-xs text-[hsl(var(--nim-navy))]/60 leading-tight font-medium">
                        Stay funder-ready
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintainCard;
