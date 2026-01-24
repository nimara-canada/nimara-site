import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const InstallCard = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="bg-[hsl(260,45%,70%)] text-[hsl(var(--nim-navy))] relative overflow-hidden"
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
                <span className="text-lg font-medium text-[hsl(var(--nim-navy))]">2</span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg lg:text-xl text-[hsl(var(--nim-navy))]/80 leading-relaxed max-w-md mb-8"
              >
                We don't teach. We install. We build the system inside your tools—approvals, trackers, board templates, source-of-truth folders, and a proof dashboard your team can actually run.
              </motion.p>

              {/* Tool Icons Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center gap-3 text-sm text-[hsl(var(--nim-navy))]/50"
              >
                <span>Google Drive</span>
                <span className="w-1 h-1 rounded-full bg-[hsl(var(--nim-navy))]/30" />
                <span>Microsoft 365</span>
                <span className="w-1 h-1 rounded-full bg-[hsl(var(--nim-navy))]/30" />
                <span>Templates</span>
                <span className="w-1 h-1 rounded-full bg-[hsl(var(--nim-navy))]/30" />
                <span>Dashboards</span>
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
                Install
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
                    Learn more: Install
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
                We build the helper machine.
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
              {/* Poster Card - Dark theme like reference */}
              <div 
                className="relative rounded-xl overflow-hidden shadow-2xl"
                style={{ 
                  backgroundColor: 'hsl(var(--nim-navy))',
                  aspectRatio: '3/4'
                }}
              >
                {/* Noise texture overlay */}
                <div 
                  className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Top label */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-semibold">
                    System Install
                  </span>
                  {/* Corner accent */}
                  <div 
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: 'hsl(260, 45%, 70%)' }}
                  />
                </div>

                {/* Center content - Hexagon dotted pattern like reference */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="180" height="180" viewBox="0 0 180 180" className="opacity-50">
                    {/* Dotted cube/hexagon pattern */}
                    <g fill="white">
                      {/* Top face */}
                      {Array.from({ length: 8 }).map((_, row) =>
                        Array.from({ length: 8 }).map((_, col) => (
                          <circle
                            key={`top-${row}-${col}`}
                            cx={90 + (col - row) * 6}
                            cy={40 + (col + row) * 4}
                            r="1.5"
                            opacity={row < 4 && col < 4 ? 0.8 : 0.4}
                          />
                        ))
                      )}
                      {/* Left face */}
                      {Array.from({ length: 6 }).map((_, row) =>
                        Array.from({ length: 8 }).map((_, col) => (
                          <circle
                            key={`left-${row}-${col}`}
                            cx={62 + col * 6 - row * 2}
                            cy={80 + row * 8 + col * 2}
                            r="1.5"
                            opacity={0.4}
                          />
                        ))
                      )}
                      {/* Right face */}
                      {Array.from({ length: 6 }).map((_, row) =>
                        Array.from({ length: 8 }).map((_, col) => (
                          <circle
                            key={`right-${row}-${col}`}
                            cx={100 + col * 6 + row * 2}
                            cy={80 + row * 8 - col * 0.5}
                            r="1.5"
                            opacity={0.6}
                          />
                        ))
                      )}
                    </g>
                  </svg>
                </div>

                {/* Bottom stats */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-4">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider mb-1">4 Engines</p>
                    <p className="text-xs text-white/70 font-medium">
                      Money • Leadership • Memory • Trust
                    </p>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span 
                        className="text-4xl sm:text-5xl font-black tracking-tight block text-white"
                      >
                        6
                      </span>
                      <span className="text-xs text-white/60 uppercase tracking-wider">Weeks</span>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] sm:text-xs text-white/60 leading-tight font-medium">
                        Mock Audit<br />
                        Stress test your proof
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

export default InstallCard;
