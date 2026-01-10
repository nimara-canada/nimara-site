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

// Visual 2: Phone mockup with floating elements (matching reference)
const QuickCheckVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center py-12 md:py-0 overflow-visible">
    {/* Mint organic shape behind */}
    <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[280px] md:w-[240px] md:h-[340px] lg:w-[280px] lg:h-[400px]">
      <svg viewBox="0 0 280 400" className="w-full h-full" fill="none">
        <path
          d="M140 20C200 20 260 80 260 160C260 240 220 320 160 360C100 400 40 380 20 300C0 220 20 120 80 60C120 20 140 20 140 20Z"
          fill="hsl(var(--nim-mint))"
          className="opacity-80"
        />
      </svg>
    </div>
    
    {/* Second mint shape - right side */}
    <div className="absolute top-1/2 right-8 md:right-12 -translate-y-1/3 w-[100px] h-[160px] md:w-[140px] md:h-[200px] lg:w-[160px] lg:h-[240px]">
      <svg viewBox="0 0 160 240" className="w-full h-full" fill="none">
        <path
          d="M80 20C120 20 150 60 150 120C150 180 120 220 80 220C40 220 10 180 10 120C10 60 40 20 80 20Z"
          fill="hsl(var(--nim-mint))"
          className="opacity-60"
        />
      </svg>
    </div>
    
    {/* Phone mockup */}
    <div className="relative z-10 w-[180px] md:w-[200px] lg:w-[220px] bg-white rounded-[28px] shadow-2xl border-[6px] border-gray-100 overflow-hidden">
      {/* Phone notch */}
      <div className="flex items-center justify-center gap-2 py-2 bg-gray-50">
        <div className="w-12 h-1 bg-gray-300 rounded-full" />
        <div className="w-2 h-2 bg-gray-300 rounded-full" />
      </div>
      
      {/* Notification card */}
      <div className="mx-2 mt-2 bg-gray-900 text-white rounded-lg p-2">
        <div className="flex items-center gap-1 mb-1">
          <div className="w-3 h-3 rounded-full bg-[hsl(var(--nim-mint))] flex items-center justify-center">
            <CheckCircle className="w-2 h-2 text-gray-900" />
          </div>
          <span className="text-[8px] font-medium">Nimara</span>
        </div>
        <p className="text-[7px] leading-tight opacity-90">Your health check is ready!</p>
      </div>
      
      {/* App icon */}
      <div className="flex justify-center my-3">
        <div className="w-10 h-10 rounded-xl bg-[hsl(var(--nim-purple))] shadow-md flex items-center justify-center">
          <FileText className="w-5 h-5 text-white" />
        </div>
      </div>
      
      {/* Result summary */}
      <div className="px-3 pb-4">
        <p className="text-[9px] font-semibold text-gray-900 mb-1">Health Check Summary</p>
        <div className="flex justify-between text-[7px] text-gray-500 mb-0.5">
          <span>Score</span>
          <span className="font-medium text-gray-900">62/100</span>
        </div>
        <div className="flex justify-between text-[7px] text-gray-500">
          <span>Priority areas</span>
          <span className="font-medium text-gray-900">3</span>
        </div>
      </div>
    </div>
    
    {/* Profile circle - overlapping phone */}
    <div className="absolute top-1/3 right-8 md:right-16 lg:right-20 z-20 w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
      <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--nim-purple))]/20 to-[hsl(var(--nim-mint))]/30 flex items-center justify-center">
        <span className="text-2xl md:text-3xl">👤</span>
      </div>
    </div>
    
    {/* Floating icon - left bottom (N logo style) */}
    <div className="absolute bottom-16 md:bottom-20 left-4 md:left-8 z-20 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-900 shadow-lg flex items-center justify-center transform -rotate-6">
      <span className="text-red-600 font-bold text-xl md:text-2xl">N</span>
    </div>
    
    {/* Floating icon - bottom center */}
    <div className="absolute bottom-8 md:bottom-12 left-1/3 z-20 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-800 shadow-lg flex items-center justify-center">
      <div className="w-5 h-7 md:w-6 md:h-8 bg-gradient-to-b from-gray-600 to-gray-400 rounded-sm" />
    </div>
    
    {/* Floating icon - right bottom (Bolt style) */}
    <div className="absolute bottom-20 md:bottom-24 right-4 md:right-8 z-20 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[hsl(var(--nim-mint))] shadow-lg flex items-center justify-center">
      <span className="text-gray-900 font-bold text-sm md:text-base">Bolt</span>
    </div>
    
    {/* Decorative dots */}
    <div className="absolute top-12 left-16 w-2 h-2 rounded-full bg-[hsl(var(--nim-purple))]" />
    <div className="absolute top-8 right-1/3 w-1.5 h-1.5 rounded-full bg-gray-900" />
    <div className="absolute bottom-1/3 right-12 w-2 h-2 rounded-full bg-[hsl(var(--nim-purple))]" />
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

        {/* Card 2: I want to see what's missing - Light lavender background */}
        <motion.div
          variants={itemVariants}
          className="bg-[hsl(var(--nim-purple))]/10 w-full border-b border-border/50"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 min-h-[550px] md:min-h-[600px]">
              {/* Text Content - Left side */}
              <div className="flex items-center px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 order-2 lg:order-1">
                <div className="max-w-lg">
                  {/* Badge */}
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-[hsl(var(--nim-purple))]/20 text-[hsl(var(--nim-purple))]">
                    02
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-foreground">
                    I want to see what's missing
                  </h3>
                  
                  {/* One-liner */}
                  <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                    Take a quick check. Get a clear next step.
                  </p>
                  
                  {/* Bullets */}
                  <ul className="space-y-3 mb-10">
                    {['Free • 6 minutes', 'No documents needed', 'Get a clear next step'].map((bullet, i) => (
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
                    <a href="https://tally.so/r/wa9dLv">
                      Take the free check
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                  
                  {/* Helper text */}
                  <p className="text-sm md:text-base text-muted-foreground">
                    Upgrade available (we review your documents).
                  </p>
                </div>
              </div>
              
              {/* Visual - Right side with phone mockup */}
              <div className="relative order-1 lg:order-2 min-h-[300px] lg:min-h-0 overflow-visible">
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
