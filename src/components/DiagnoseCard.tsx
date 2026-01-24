import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const DiagnoseCard = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="bg-[hsl(var(--nim-navy))] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-[70vh] lg:min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Top: Step Number + Description */}
            <div>
              {/* Step Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center mb-8"
              >
                <span className="text-lg font-medium">1</span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-lg mb-8"
              >
                We find the gaps that make funding stressful. We review your finance flow, board decisions, files, and reporting—then give you a simple scorecard and the exact order to fix it.
              </motion.p>

              {/* Tool Icons Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 text-sm text-white/50"
              >
                <span>Google Drive</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span>Microsoft 365</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span>Sheets</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span>Excel</span>
              </motion.div>
            </div>

            {/* Bottom: Big Word + Learn More */}
            <div className="mt-auto pt-16 lg:pt-24">
              {/* Big Word */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black leading-[0.85] tracking-[-0.04em] uppercase"
                style={{ fontWeight: 900 }}
              >
                Diagnose
              </motion.h2>

              {/* Learn More Link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 pt-6 border-t border-white/20"
              >
                <a 
                  href="/how-nimara-works" 
                  className="inline-flex items-center justify-between w-full group"
                >
                  <span className="text-lg text-white/80 group-hover:text-white transition-colors">
                    Learn more
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </motion.div>

              {/* Kid-language sub-line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-sm text-white/40 mt-4 italic"
              >
                We look for the mess.
              </motion.p>
            </div>
          </div>

          {/* Right Column - Poster Card */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 2 }}
              animate={isInView ? { opacity: 1, x: 0, rotate: 3 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative w-full max-w-[320px] lg:max-w-[380px]"
            >
              {/* Poster Card */}
              <div 
                className="relative rounded-sm overflow-hidden shadow-2xl"
                style={{ 
                  backgroundColor: 'hsl(165, 45%, 75%)',
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
                <div className="absolute top-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-[hsl(var(--nim-navy))]/60 font-medium">
                    Nonprofit Health Check
                  </span>
                </div>

                {/* Center content - Abstract visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Concentric circles made of dots - abstract visual */}
                    <svg width="180" height="180" viewBox="0 0 180 180" className="opacity-40">
                      <circle cx="90" cy="90" r="80" fill="none" stroke="hsl(var(--nim-navy))" strokeWidth="1" strokeDasharray="2 4" />
                      <circle cx="90" cy="90" r="60" fill="none" stroke="hsl(var(--nim-navy))" strokeWidth="1" strokeDasharray="2 4" />
                      <circle cx="90" cy="90" r="40" fill="none" stroke="hsl(var(--nim-navy))" strokeWidth="1" strokeDasharray="2 4" />
                      <circle cx="90" cy="90" r="20" fill="hsl(var(--nim-navy))" opacity="0.2" />
                    </svg>
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <span 
                        className="text-5xl sm:text-6xl font-black tracking-tight"
                        style={{ color: 'hsl(var(--nim-navy))' }}
                      >
                        NOHC
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[hsl(var(--nim-navy))]/60 leading-tight">
                        Tier 0 → 4<br />
                        1 Scorecard
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div 
                  className="absolute top-4 right-4 w-6 h-6 rounded-full"
                  style={{ backgroundColor: 'hsl(var(--nim-navy))' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnoseCard;
