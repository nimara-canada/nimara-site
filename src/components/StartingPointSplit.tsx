import { motion, useReducedMotion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, FileCheck, Clock, FolderOpen, ClipboardCheck, AlertCircle } from 'lucide-react';
import { useRef } from 'react';

// Premium Visual for Card 1 - Deel-style floating UI composition
const PremiumFolderVisual = ({ isInView }: { isInView: boolean }) => (
  <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
    {/* Decorative background panel with subtle texture */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute inset-4 lg:inset-6 rounded-2xl bg-gradient-to-br from-nim-purple/15 via-nim-purple/10 to-nim-mint/20"
      style={{
        backgroundImage: `
          radial-gradient(circle at 30% 20%, hsl(var(--nim-purple) / 0.15) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, hsl(var(--nim-mint) / 0.2) 0%, transparent 50%),
          linear-gradient(135deg, transparent 40%, hsl(var(--nim-purple) / 0.05) 50%, transparent 60%)
        `
      }}
    >
      {/* Subtle geometric lines */}
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `
          linear-gradient(45deg, hsl(var(--nim-purple) / 0.3) 1px, transparent 1px),
          linear-gradient(-45deg, hsl(var(--nim-purple) / 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
    </motion.div>
    
    {/* Main floating card */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="relative z-10 bg-white rounded-2xl shadow-xl p-6 lg:p-8 w-[280px] lg:w-[320px] border border-nim-mist/50"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-nim-purple/10 flex items-center justify-center">
          <FolderOpen className="w-5 h-5 text-nim-purple" />
        </div>
        <span className="text-sm font-semibold text-nim-navy">Your Project:</span>
      </div>
      
      {/* Message */}
      <p className="text-nim-navy text-base lg:text-lg font-medium mb-6 leading-snug">
        Board policies, grant tracking, and file systems — ready in 6 weeks.
      </p>
      
      {/* Stats card */}
      <div className="bg-nim-mist/50 rounded-xl p-4 border border-nim-mist">
        <div className="flex items-baseline gap-2 mb-1">
          <motion.span
            className="text-4xl lg:text-5xl font-bold text-nim-navy"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            3
          </motion.span>
          <span className="text-sm text-nim-slate font-medium">systems built</span>
        </div>
        <p className="text-xs text-nim-slate mb-3">vs. 0 before starting</p>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-nim-mint flex items-center justify-center">
            <ArrowRight className="w-3 h-3 text-nim-navy rotate-[-45deg]" />
          </div>
          <span className="text-sm font-medium text-nim-purple">100% ready for funders</span>
        </div>
      </div>
    </motion.div>
  </div>
);

// Premium Visual for Card 2 - Health Check floating UI
const PremiumCheckVisual = ({ isInView }: { isInView: boolean }) => (
  <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
    {/* Decorative background panel with subtle texture */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute inset-4 lg:inset-6 rounded-2xl bg-gradient-to-br from-nim-mint/20 via-nim-mint/10 to-nim-navy/5"
      style={{
        backgroundImage: `
          radial-gradient(circle at 70% 20%, hsl(var(--nim-mint) / 0.25) 0%, transparent 50%),
          radial-gradient(circle at 30% 80%, hsl(var(--nim-navy) / 0.08) 0%, transparent 50%),
          linear-gradient(-45deg, transparent 40%, hsl(var(--nim-mint) / 0.1) 50%, transparent 60%)
        `
      }}
    >
      {/* Subtle geometric lines */}
      <div className="absolute inset-0 opacity-[0.12]" style={{
        backgroundImage: `
          linear-gradient(45deg, hsl(var(--nim-navy) / 0.2) 1px, transparent 1px),
          linear-gradient(-45deg, hsl(var(--nim-navy) / 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
    </motion.div>
    
    {/* Main floating card */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="relative z-10 bg-white rounded-2xl shadow-xl p-6 lg:p-8 w-[280px] lg:w-[320px] border border-nim-mist/50"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-nim-mint/30 flex items-center justify-center">
          <ClipboardCheck className="w-5 h-5 text-nim-navy" />
        </div>
        <span className="text-sm font-semibold text-nim-navy">Health Check:</span>
      </div>
      
      {/* Message */}
      <p className="text-nim-navy text-base lg:text-lg font-medium mb-6 leading-snug">
        We found 3 gaps that funders usually flag.
      </p>
      
      {/* Stats card */}
      <div className="bg-nim-mist/50 rounded-xl p-4 border border-nim-mist">
        <div className="flex items-baseline gap-2 mb-1">
          <motion.span
            className="text-4xl lg:text-5xl font-bold text-nim-navy"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            62
          </motion.span>
          <span className="text-sm text-nim-slate font-medium">/ 100 score</span>
        </div>
        <p className="text-xs text-nim-slate mb-3">before any fixes</p>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-nim-mint flex items-center justify-center">
            <AlertCircle className="w-3 h-3 text-nim-navy" />
          </div>
          <span className="text-sm font-medium text-nim-navy">3 priority areas to fix</span>
        </div>
      </div>
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