import { motion, useInView } from 'framer-motion';
import { Check, AlertCircle, FileSearch, Clock, BarChart3 } from 'lucide-react';
import { useRef } from 'react';

const bullets = [
  { text: "Files that are easy to find", icon: FileSearch },
  { text: "Spending rules that are clear", icon: BarChart3 },
  { text: "Tracking that doesn't fall apart", icon: Clock },
  { text: "Reporting that doesn't turn into panic", icon: AlertCircle }
];

// Premium floating visual
const GapVisual = ({ isInView }: { isInView: boolean }) => (
  <div className="relative h-full w-full flex items-center justify-center p-6 lg:p-8">
    {/* Large rounded panel - mint with texture */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative w-full h-full min-h-[360px] lg:min-h-[440px] rounded-[2rem] overflow-hidden"
      style={{ backgroundColor: 'hsl(165, 45%, 82%)' }}
    >
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Geometric lines */}
      <svg className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="none">
        <line x1="100%" y1="30%" x2="0%" y2="70%" stroke="hsl(165, 40%, 40%)" strokeWidth="1" />
        <line x1="80%" y1="0%" x2="20%" y2="100%" stroke="hsl(165, 40%, 40%)" strokeWidth="1" />
        <line x1="40%" y1="0%" x2="0%" y2="50%" stroke="hsl(165, 40%, 40%)" strokeWidth="1" />
      </svg>
      
      {/* Floating white card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6 w-[75%] sm:w-[70%] max-w-[280px]"
      >
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-4 h-4 text-amber-600" />
          </div>
          <span className="text-sm sm:text-base font-semibold text-nim-navy">The Problem:</span>
        </div>
        
        {/* Message */}
        <p className="text-nim-navy text-sm sm:text-base font-medium mb-3 sm:mb-4 leading-snug">
          Strong work, scattered records. Reporting becomes a scramble.
        </p>
        
        {/* Stats box */}
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
          <div className="flex items-baseline gap-1.5 mb-0.5">
            <motion.span
              className="text-3xl sm:text-4xl font-bold text-nim-navy tracking-tight"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              4
            </motion.span>
            <span className="text-xs sm:text-sm text-gray-600">basics we fix</span>
          </div>
          <p className="text-xs text-gray-500">Files • Tracking • Spending • Reports</p>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export const TheGap = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Premium Visual */}
          <div className="hidden lg:block order-2 lg:order-1">
            <GapVisual isInView={isInView} />
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2">
            {/* Label */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
            >
              The Problem
            </motion.p>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-[-0.03em] mb-6"
            >
              The gap we <span className="text-primary">close</span>
            </motion.h2>

            {/* Subhead */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-muted-foreground mb-10"
            >
              Most nonprofits don't need more advice. They need basics that stick.
            </motion.p>

            {/* Bullet cards */}
            <div className="space-y-3 mb-10">
              {bullets.map((bullet, index) => {
                const Icon = bullet.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-nim-mint/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-nim-navy" />
                    </div>
                    <span className="text-foreground font-medium">{bullet.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Closing statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-nim-purple/10 rounded-2xl p-6 border border-nim-purple/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-nim-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <p className="text-nim-navy font-medium text-lg">
                  We set up working basics your team can run.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
