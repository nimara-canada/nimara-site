import { motion, useReducedMotion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, FileCheck, Clock, FolderOpen, ClipboardCheck, AlertCircle } from 'lucide-react';
import { useRef } from 'react';

// Premium Visual for Card 1 - Floating UI composition
const PremiumFolderVisual = ({ isInView }: { isInView: boolean }) => (
  <div className="relative h-full w-full flex items-center justify-center py-8 md:py-0">
    {/* Decorative circle */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute top-4 right-4 lg:top-8 lg:right-8 w-24 h-24 lg:w-40 lg:h-40 rounded-full bg-nim-mint/30"
    />
    
    {/* Main visual container */}
    <div className="relative z-10 w-full max-w-[300px] lg:max-w-[340px]">
      {/* Background shape */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full h-[200px] lg:h-[260px] bg-nim-mist rounded-2xl"
      />

      {/* Floating UI Card - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 20 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute -top-6 right-0 lg:-right-4 bg-white rounded-xl p-4 w-[150px] lg:w-[170px] border border-nim-mist"
      >
        <div className="flex items-center gap-2 mb-2">
          <FolderOpen className="w-4 h-4 text-nim-purple" />
          <span className="text-xs font-semibold text-nim-navy">Your Project</span>
        </div>
        <div className="w-full h-1.5 bg-nim-mist rounded-full overflow-hidden mb-1">
          <motion.div
            className="h-full bg-nim-purple rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "75%" } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          />
        </div>
        <span className="text-[10px] text-nim-slate">3/4 areas ready</span>
      </motion.div>

      {/* Floating UI Card - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: -20, x: -20 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.85 }}
        className="absolute -bottom-6 left-0 lg:-left-6 bg-white rounded-xl p-4 w-[180px] lg:w-[210px] border border-nim-mist"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-nim-navy">Setup Details</span>
          <span className="text-nim-slate">•••</span>
        </div>
        <div className="flex items-center gap-3 lg:gap-4 text-[10px]">
          <div>
            <p className="text-nim-slate uppercase tracking-wide mb-0.5">Area</p>
            <p className="font-medium text-nim-navy flex items-center gap-1">
              <Clock className="w-3 h-3 text-nim-purple" />
              Board
            </p>
          </div>
          <div>
            <p className="text-nim-slate uppercase tracking-wide mb-0.5">Status</p>
            <p className="font-medium text-nim-navy">Ready</p>
          </div>
          <div>
            <p className="text-nim-slate uppercase tracking-wide mb-0.5">Time</p>
            <p className="font-medium text-nim-navy">2 weeks</p>
          </div>
        </div>
      </motion.div>

      {/* Small status badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 1.0, type: "spring", stiffness: 300 }}
        className="absolute top-1/3 -left-2 lg:-left-4 bg-nim-purple text-white rounded-lg px-3 py-1.5 flex items-center gap-1.5"
      >
        <Check className="w-3 h-3" />
        <span className="text-[10px] font-medium">On track</span>
      </motion.div>
    </div>
  </div>
);

// Premium Visual for Card 2 - Health Check floating UI
const PremiumCheckVisual = ({ isInView }: { isInView: boolean }) => (
  <div className="relative h-full w-full flex items-center justify-center py-8 md:py-0">
    {/* Decorative circle */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 w-24 h-24 lg:w-40 lg:h-40 rounded-full bg-nim-mint/30"
    />
    
    {/* Main visual container */}
    <div className="relative z-10 w-full max-w-[300px] lg:max-w-[340px]">
      {/* Background shape */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full h-[200px] lg:h-[260px] bg-nim-navy/5 rounded-2xl"
      />

      {/* Score Card - Top */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute -top-6 left-4 lg:left-0 bg-white rounded-xl p-4 w-[140px] lg:w-[160px] border border-nim-mist"
      >
        <div className="flex items-center gap-2 mb-2">
          <ClipboardCheck className="w-4 h-4 text-nim-navy" />
          <span className="text-xs font-semibold text-nim-navy">Score</span>
        </div>
        <div className="flex items-baseline gap-1">
          <motion.span
            className="text-3xl lg:text-4xl font-bold text-nim-navy"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            62
          </motion.span>
          <span className="text-sm text-nim-slate">/100</span>
        </div>
      </motion.div>

      {/* Priority Areas Card - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: -20, x: 20 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.85 }}
        className="absolute -bottom-6 right-0 lg:-right-4 bg-white rounded-xl p-4 w-[170px] lg:w-[190px] border border-nim-mist"
      >
        <p className="text-[10px] text-nim-slate uppercase tracking-wide mb-2 font-medium">Priority Areas</p>
        <div className="flex flex-wrap gap-1.5">
          {['Board', 'Finance', 'Docs'].map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 1.0 + i * 0.1 }}
              className="px-2.5 py-1 bg-nim-mint/40 text-nim-navy rounded-full text-[10px] font-medium"
            >
              {area}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Alert badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 1.0, type: "spring", stiffness: 300 }}
        className="absolute top-1/2 right-2 lg:right-0 bg-nim-navy text-white rounded-lg px-3 py-1.5 flex items-center gap-1.5"
      >
        <AlertCircle className="w-3 h-3" />
        <span className="text-[10px] font-medium">3 gaps found</span>
      </motion.div>
    </div>
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
    <section ref={sectionRef} className="bg-background">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="text-center py-16 md:py-24 px-6"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">
          Start here
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Choose where to start.
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Most small nonprofits start in one of these two places.
        </p>
      </motion.div>

      {/* Full-width stacked cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-6 lg:gap-8 pb-16 md:pb-24"
      >
        {/* Card 1: I know what we need - Premium card with floating UI */}
        <motion.div
          variants={itemVariants}
          className="w-full px-4 md:px-8"
        >
          <div className="max-w-7xl mx-auto relative rounded-3xl bg-nim-cloud overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[480px] md:min-h-[520px]">
              {/* Text Content - Left side */}
              <div className="flex items-center px-6 md:px-12 lg:px-16 py-12 md:py-16 order-2 lg:order-1">
                <div className="max-w-lg">
                  {/* Badge */}
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-nim-purple/10 text-nim-purple"
                  >
                    01
                  </motion.span>
                  
                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-nim-navy tracking-tight"
                  >
                    I know what we need
                  </motion.h3>
                  
                  {/* One-liner */}
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="text-base lg:text-lg mb-8 text-nim-slate"
                  >
                    Tell us what you want to set up. We help you build it.
                  </motion.p>
                  
                  {/* Bullets */}
                  <ul className="space-y-3 mb-10">
                    {['Tell us what you need', 'We set it up with you', 'You get something ready to use'].map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-nim-mint flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-nim-navy" strokeWidth={3} />
                        </div>
                        <span className="text-nim-slate-dark text-sm lg:text-base">{bullet}</span>
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
                      className="mb-4 text-base px-8 py-6 rounded-full bg-nim-purple text-white hover:bg-nim-purple/90"
                    >
                      <a href="https://calendly.com/nimara-ops/capacity-call">
                        Book a free call
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </a>
                    </Button>
                  </motion.div>
                  
                  {/* Helper text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-sm text-nim-slate"
                  >
                    Best if you already know what you want.
                  </motion.p>
                </div>
              </div>
              
              {/* Visual - Right side with floating UI */}
              <div className="relative order-1 lg:order-2 min-h-[280px] lg:min-h-0 overflow-visible px-4 lg:px-0">
                <PremiumFolderVisual isInView={isInView} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: I want to see what's missing - Premium card with floating UI */}
        <motion.div
          variants={itemVariants}
          className="w-full px-4 md:px-8"
        >
          <div className="max-w-7xl mx-auto relative rounded-3xl bg-nim-cloud overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[480px] md:min-h-[520px]">
              {/* Visual - Left side */}
              <div className="relative order-1 min-h-[280px] lg:min-h-0 overflow-visible px-4 lg:px-0">
                <PremiumCheckVisual isInView={isInView} />
              </div>
              
              {/* Text Content - Right side */}
              <div className="flex items-center px-6 md:px-12 lg:px-16 py-12 md:py-16 order-2">
                <div className="max-w-lg">
                  {/* Badge - mint/navy accent */}
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-nim-mint/30 text-nim-navy"
                  >
                    02
                  </motion.span>
                  
                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-nim-navy tracking-tight"
                  >
                    I want to see what's missing
                  </motion.h3>
                  
                  {/* One-liner */}
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="text-base lg:text-lg mb-8 text-nim-slate"
                  >
                    Take a quick check. Get a clear next step.
                  </motion.p>
                  
                  {/* Bullets - mint accent */}
                  <ul className="space-y-3 mb-10">
                    {['Free • 6 minutes', 'No documents needed', 'Get a clear next step'].map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-nim-mint flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-nim-navy" strokeWidth={3} />
                        </div>
                        <span className="text-nim-slate-dark text-sm lg:text-base">{bullet}</span>
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
                      className="mb-4 text-base px-8 py-6 rounded-full bg-nim-navy text-white hover:bg-nim-navy/90"
                    >
                      <a href="https://tally.so/r/wa9dLv">
                        Take the free check
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </a>
                    </Button>
                  </motion.div>
                  
                  {/* Helper text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-sm text-nim-slate"
                  >
                    Upgrade available (we review your documents).
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