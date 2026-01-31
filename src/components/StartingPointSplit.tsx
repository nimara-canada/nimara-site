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
              {/* Text Content - Left side */}
              <div className="flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-16 order-2 lg:order-1">
                <div className="max-w-lg">
                  {/* Badge */}
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 bg-nim-purple/10 text-nim-purple"
                  >
                    01
                  </motion.span>
                  
                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 text-nim-navy tracking-tight"
                  >
                    I know what we want to fix
                  </motion.h3>
                  
                  {/* One-liner */}
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="text-sm sm:text-base lg:text-lg mb-5 sm:mb-8 text-nim-slate"
                  >
                    Tell us what area you want to improve. We'll help you plan the first steps.
                  </motion.p>
                  
                  {/* Bullets */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-10">
                    {['Pick your area(s)', '30-minute call', 'Clear next steps'].map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-nim-mint flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-nim-navy" strokeWidth={3} />
                        </div>
                        <span className="text-nim-slate-dark text-xs sm:text-sm lg:text-base">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Button 
                      asChild 
                      size="lg" 
                      className="mb-3 sm:mb-4 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full bg-nim-purple text-white hover:bg-nim-purple/90 w-full sm:w-auto"
                    >
                      <a href="https://calendly.com/nimara-ops/capacity-call">
                        Book a 30-min call
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </Button>
                  </motion.div>
                  
                  {/* Helper text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-xs sm:text-sm text-nim-slate"
                  >
                    We may suggest a full check first.
                  </motion.p>
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
              
              {/* Text Content - Right side */}
              <div className="flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-16 order-2">
                <div className="max-w-lg">
                  {/* Badge - mint/navy accent */}
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 bg-nim-mint/30 text-nim-navy"
                  >
                    02
                  </motion.span>
                  
                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 text-nim-navy tracking-tight"
                  >
                    I want to see what's missing
                  </motion.h3>
                  
                  {/* One-liner */}
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="text-sm sm:text-base lg:text-lg mb-5 sm:mb-8 text-nim-slate"
                  >
                    Take a quick check. Get a clear next step.
                  </motion.p>
                  
                  {/* Bullets - mint accent */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-10">
                    {['Free • 6 minutes', 'No documents needed', 'See your top gaps'].map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-nim-mint flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-nim-navy" strokeWidth={3} />
                        </div>
                        <span className="text-nim-slate-dark text-xs sm:text-sm lg:text-base">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Button - navy */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Button 
                      asChild 
                      size="lg" 
                      className="mb-3 sm:mb-4 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full bg-nim-navy text-white hover:bg-nim-navy/90 w-full sm:w-auto"
                    >
                      <a href="https://tally.so/r/wa9dLv">
                        Take the free check
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </Button>
                  </motion.div>
                  
                  {/* Helper text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-xs sm:text-sm text-nim-slate"
                  >
                    Want a deeper review? We can look at your documents.
                  </motion.p>
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