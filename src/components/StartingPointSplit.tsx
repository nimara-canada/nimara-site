import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, CheckCircle, Receipt, FolderOpen, FileCheck } from 'lucide-react';

// Visual 1: Overlapping circles with purple accent (matching reference)
const FundingFolderVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center py-12 md:py-0">
    {/* Purple organic shape behind */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]">
      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
        <path
          d="M200 50C280 50 350 100 350 180C350 220 330 280 280 320C230 360 150 380 100 340C50 300 30 240 50 180C70 120 120 50 200 50Z"
          fill="hsl(var(--nim-purple))"
          className="opacity-90"
        />
      </svg>
    </div>
    
    {/* Main large circle */}
    <div className="relative z-10 w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] rounded-full bg-gradient-to-br from-muted to-muted/80 border-4 border-background shadow-xl flex items-center justify-center">
      <div className="text-center">
        <FolderOpen className="w-12 h-12 md:w-16 md:h-16 text-[hsl(var(--nim-purple))] mx-auto mb-2" />
        <span className="text-sm md:text-base font-semibold text-foreground">Your folder</span>
      </div>
    </div>
    
    {/* Top right circle */}
    <div className="absolute top-4 md:top-8 right-4 md:right-8 lg:right-12 z-20 w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-full bg-gradient-to-br from-[hsl(var(--nim-purple))]/20 to-[hsl(var(--nim-purple))]/10 border-4 border-background shadow-lg flex items-center justify-center">
      <Receipt className="w-8 h-8 md:w-10 md:h-10 text-[hsl(var(--nim-purple))]" />
    </div>
    
    {/* Bottom right circle */}
    <div className="absolute bottom-8 md:bottom-12 right-8 md:right-16 lg:right-20 z-20 w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-gradient-to-br from-muted to-background border-4 border-background shadow-lg flex items-center justify-center">
      <FileCheck className="w-6 h-6 md:w-8 md:h-8 text-[hsl(var(--nim-navy))]" />
    </div>
    
    {/* Floating icon badges */}
    <div className="absolute top-12 md:top-16 left-1/2 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[hsl(var(--nim-purple))] shadow-lg flex items-center justify-center">
      <FileText className="w-4 h-4 md:w-5 md:h-5 text-white" />
    </div>
    <div className="absolute bottom-20 md:bottom-24 right-4 md:right-8 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[hsl(var(--nim-purple))]/80 shadow-lg flex items-center justify-center">
      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
    </div>
  </div>
);

// Visual 2: Quick Check Result (for mint/navy card)
const QuickCheckVisual = () => (
  <div className="h-full w-full flex items-center justify-center p-8 md:p-12">
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-[hsl(var(--nim-navy))]/10 max-w-sm w-full">
      {/* Score */}
      <div className="flex items-baseline gap-2 mb-5">
        <span className="text-4xl md:text-5xl font-bold text-[hsl(var(--nim-navy))]">62</span>
        <span className="text-xl text-[hsl(var(--nim-navy))]/50 font-medium">/100</span>
      </div>
      
      {/* Labels */}
      <div className="flex flex-wrap gap-2 mb-5">
        {['Board', 'Money', 'Files'].map((label) => (
          <span
            key={label}
            className="px-3 py-1.5 bg-[hsl(var(--nim-mint))]/50 rounded-full text-sm font-medium text-[hsl(var(--nim-navy))]"
          >
            {label}
          </span>
        ))}
      </div>
      
      {/* Next Step Box */}
      <div className="bg-[hsl(var(--nim-navy))]/5 border border-[hsl(var(--nim-navy))]/10 rounded-xl p-4">
        <div className="text-xs font-semibold text-[hsl(var(--nim-navy))] mb-1 uppercase tracking-wide">Next step</div>
        <div className="text-base text-[hsl(var(--nim-navy))]">Set up your grant tracker</div>
      </div>
    </div>
  </div>
);

const StartingPointSplit = () => {
  const prefersReducedMotion = useReducedMotion();
  
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
    <section className="bg-background">
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
        className="flex flex-col gap-0"
      >
        {/* Card 1: I know what we need - Open layout with circles */}
        <motion.div
          variants={itemVariants}
          className="bg-background w-full border-y border-border/50"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 min-h-[550px] md:min-h-[600px]">
              {/* Text Content - Left side */}
              <div className="flex items-center px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 order-2 lg:order-1">
                <div className="max-w-lg">
                  {/* Badge */}
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-[hsl(var(--nim-purple))]/10 text-[hsl(var(--nim-purple))]">
                    01
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-foreground">
                    I know what we need
                  </h3>
                  
                  {/* One-liner */}
                  <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                    Tell us what you want to set up. We help you build it.
                  </p>
                  
                  {/* Bullets */}
                  <ul className="space-y-3 mb-10">
                    {['Tell us what you need', 'We set it up with you', 'You get something ready to use'].map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg text-foreground">
                        <span className="mt-0.5 text-[hsl(var(--nim-purple))]">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Button */}
                  <Button 
                    asChild 
                    size="lg" 
                    className="mb-4 text-base px-8 py-6 rounded-full bg-[hsl(var(--nim-purple))] text-white hover:bg-[hsl(var(--nim-purple))]/90"
                  >
                    <a href="https://calendly.com/nimara-ops/capacity-call">
                      Book a free call
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                  
                  {/* Helper text */}
                  <p className="text-sm md:text-base text-muted-foreground">
                    Best if you already know what you want.
                  </p>
                </div>
              </div>
              
              {/* Visual - Right side with overlapping circles */}
              <div className="relative order-1 lg:order-2 min-h-[300px] lg:min-h-0 overflow-hidden">
                <FundingFolderVisual />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: I want to see what's missing - Navy background */}
        <motion.div
          variants={itemVariants}
          className="bg-[hsl(var(--nim-navy))] w-full"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 min-h-[550px] md:min-h-[600px] py-8 md:py-12">
              {/* Text Content - Left side */}
              <div className="flex items-center px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 order-2 lg:order-1">
                <div className="max-w-lg">
                  {/* Badge */}
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-white/20 text-white">
                    02
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white">
                    I want to see what's missing
                  </h3>
                  
                  {/* One-liner */}
                  <p className="text-lg md:text-xl mb-8 text-white/70">
                    Take a quick check. Get a clear next step.
                  </p>
                  
                  {/* Bullets */}
                  <ul className="space-y-3 mb-10">
                    {['Free • 6 minutes', 'No documents needed', 'Get a clear next step'].map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg text-white">
                        <span className="mt-0.5 text-[hsl(var(--nim-mint))]">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Button */}
                  <Button 
                    asChild 
                    size="lg" 
                    className="mb-4 text-base px-8 py-6 rounded-full bg-[hsl(var(--nim-mint))] text-[hsl(var(--nim-navy))] hover:bg-[hsl(var(--nim-mint))]/90"
                  >
                    <a href="https://tally.so/r/wa9dLv">
                      Take the free check
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                  
                  {/* Helper text */}
                  <p className="text-sm md:text-base text-white/70">
                    Upgrade available (we review your documents).
                  </p>
                </div>
              </div>
              
              {/* Visual - Right side */}
              <div className="bg-[hsl(var(--nim-mint))] rounded-3xl m-2 md:m-4 flex items-center justify-center order-1 lg:order-2 min-h-[280px] lg:min-h-0">
                <QuickCheckVisual />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StartingPointSplit;
