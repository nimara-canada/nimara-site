import { motion, useReducedMotion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, FileCheck, Clock, FolderOpen, ClipboardCheck, AlertCircle } from 'lucide-react';
import { useRef } from 'react';

// Premium Visual for Card 1 - Deel-style with light blue panel and floating card
const PremiumFolderVisual = ({ isInView }: { isInView: boolean }) => (
  <div className="relative h-full w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
    {/* Large rounded panel - light blue with texture */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative w-full h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[440px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden"
      style={{ backgroundColor: 'hsl(210, 60%, 85%)' }}
    >
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Geometric lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
        <line x1="0%" y1="20%" x2="100%" y2="60%" stroke="hsl(210, 50%, 50%)" strokeWidth="1" />
        <line x1="20%" y1="0%" x2="80%" y2="100%" stroke="hsl(210, 50%, 50%)" strokeWidth="1" />
        <line x1="60%" y1="0%" x2="100%" y2="40%" stroke="hsl(210, 50%, 50%)" strokeWidth="1" />
        <line x1="0%" y1="80%" x2="40%" y2="100%" stroke="hsl(210, 50%, 50%)" strokeWidth="1" />
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
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-nim-purple/15 flex items-center justify-center flex-shrink-0">
            <FolderOpen className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-nim-purple" />
          </div>
          <span className="text-sm sm:text-base font-semibold text-nim-navy">Your Project:</span>
        </div>
        
        {/* Message */}
        <p className="text-nim-navy text-sm sm:text-base font-medium mb-3 sm:mb-4 leading-snug">
          Board policies, grant tracking, and file systems — ready in 6 weeks.
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
              3
            </motion.span>
            <span className="text-xs sm:text-sm text-gray-600">systems built</span>
          </div>
          <p className="text-xs text-gray-500">vs. 0 before starting</p>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

// Premium Visual for Card 2 - Deel-style with mint panel and floating card
const PremiumCheckVisual = ({ isInView }: { isInView: boolean }) => (
  <div className="relative h-full w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
    {/* Large rounded panel - mint/teal with texture */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative w-full h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[440px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden"
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
        <line x1="100%" y1="70%" x2="60%" y2="100%" stroke="hsl(165, 40%, 40%)" strokeWidth="1" />
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
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-nim-mint/40 flex items-center justify-center flex-shrink-0">
            <ClipboardCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-nim-navy" />
          </div>
          <span className="text-sm sm:text-base font-semibold text-nim-navy">Health Check:</span>
        </div>
        
        {/* Message */}
        <p className="text-nim-navy text-sm sm:text-base font-medium mb-3 sm:mb-4 leading-snug">
          We found 3 gaps that funders usually flag.
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
              62
            </motion.span>
            <span className="text-xs sm:text-sm text-gray-600">/ 100 score</span>
          </div>
          <p className="text-xs text-gray-500">before any fixes</p>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

const StartingPointSplit = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={sectionRef} style={{ backgroundColor: '#faf8f5' }}>
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="text-center py-12 sm:py-16 md:py-24 px-4 sm:px-6"
      >
        <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-2 sm:mb-3 block">
          Start here
        </span>
        <h2 className="text-[clamp(2rem,6.4vw,5.6rem)] font-black tracking-[-0.04em] text-foreground leading-[0.95] mb-3 sm:mb-4 uppercase">
          CHOOSE WHERE TO START.
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          Most nonprofits start in one of these two places.
        </p>
      </motion.div>

      {/* Full-width stacked cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-4 sm:gap-6 lg:gap-8 pb-12 sm:pb-16 md:pb-24"
      >
        {/* Card 1: I know what we want to fix - Premium card with floating UI */}
        <motion.div
          variants={itemVariants}
          className="w-full px-3 sm:px-4 md:px-8"
        >
          <div className="max-w-7xl mx-auto relative overflow-hidden" style={{ backgroundColor: '#faf8f5' }}>
            <div className="grid lg:grid-cols-2">
              {/* Text Content - Left side - Editorial style */}
              <div className="flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 md:py-20 order-2 lg:order-1">
                <div className="max-w-md">
                  {/* Uppercase tracking label */}
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60 mb-4 sm:mb-6"
                  >
                    Option 1
                  </motion.span>
                  
                  {/* Large headline - editorial serif style */}
                  <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold mb-4 sm:mb-6 text-foreground tracking-tight leading-[1.1]"
                  >
                    I know what we want to fix
                  </motion.h3>
                  
                  {/* Description paragraph */}
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed"
                  >
                    Tell us what area you want to improve. We'll help you plan the first steps in a 30-minute call.
                  </motion.p>
                  
                  {/* Ghost/outlined button */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Button 
                      asChild 
                      variant="outline"
                      size="lg" 
                      className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                      <a href="https://calendly.com/nimara-ops/capacity-call">
                        Book a 30-min call
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
              
              {/* Visual - Right side with floating UI */}
              <div className="relative order-1 lg:order-2 min-h-[360px] sm:min-h-[400px] lg:min-h-[480px] overflow-visible px-2 sm:px-4 lg:px-0">
                <PremiumFolderVisual isInView={isInView} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: I want to see what's missing - Premium card with floating UI */}
        <motion.div
          variants={itemVariants}
          className="w-full px-3 sm:px-4 md:px-8"
        >
          <div className="max-w-7xl mx-auto relative overflow-hidden" style={{ backgroundColor: '#faf8f5' }}>
            <div className="grid lg:grid-cols-2">
              {/* Visual - Left side */}
              <div className="relative order-1 min-h-[360px] sm:min-h-[400px] lg:min-h-[480px] overflow-visible px-2 sm:px-4 lg:px-0">
                <PremiumCheckVisual isInView={isInView} />
              </div>
              
              {/* Text Content - Right side - Editorial style */}
              <div className="flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 md:py-20 order-2">
                <div className="max-w-md">
                  {/* Uppercase tracking label */}
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60 mb-4 sm:mb-6"
                  >
                    Option 2
                  </motion.span>
                  
                  {/* Large headline - editorial style */}
                  <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold mb-4 sm:mb-6 text-foreground tracking-tight leading-[1.1]"
                  >
                    I want to see what's missing
                  </motion.h3>
                  
                  {/* Description paragraph */}
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed"
                  >
                    Take a free 6-minute check. No documents needed. See your top gaps and get a clear next step.
                  </motion.p>
                  
                  {/* Ghost/outlined button */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Button 
                      asChild 
                      variant="outline"
                      size="lg" 
                      className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                      <a href="https://tally.so/r/wa9dLv">
                        Take the free check
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StartingPointSplit;