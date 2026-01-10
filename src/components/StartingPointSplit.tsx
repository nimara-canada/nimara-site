import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, FolderOpen, ClipboardCheck, FileText, Users, PieChart } from 'lucide-react';

// Visual 1: Simple folder stack with icons
const FundingFolderVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center py-12 md:py-0">
    {/* Purple blob background */}
    <div className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full bg-[hsl(var(--nim-purple))]/20 blur-3xl" />
    
    {/* Main card stack */}
    <div className="relative z-10">
      {/* Back card */}
      <div className="absolute -top-3 -left-3 w-[200px] md:w-[240px] h-[140px] md:h-[160px] bg-[hsl(var(--nim-purple))]/30 rounded-2xl transform rotate-[-6deg]" />
      
      {/* Middle card */}
      <div className="absolute -top-1.5 -left-1.5 w-[200px] md:w-[240px] h-[140px] md:h-[160px] bg-[hsl(var(--nim-purple))]/50 rounded-2xl transform rotate-[-3deg]" />
      
      {/* Front card */}
      <div className="relative w-[200px] md:w-[240px] bg-white rounded-2xl shadow-xl p-5 md:p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[hsl(var(--nim-purple))] flex items-center justify-center">
            <FolderOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm md:text-base">Your project</p>
            <p className="text-xs text-muted-foreground">Ready to build</p>
          </div>
        </div>
        
        {/* Progress items */}
        <div className="space-y-2">
          {[
            { icon: FileText, label: 'Grant tracker', done: true },
            { icon: Users, label: 'Board portal', done: true },
            { icon: PieChart, label: 'Budget template', done: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${item.done ? 'bg-[hsl(var(--nim-purple))]' : 'bg-muted'}`}>
                <item.icon className={`w-3 h-3 ${item.done ? 'text-white' : 'text-muted-foreground'}`} />
              </div>
              <span className={`text-xs md:text-sm ${item.done ? 'text-foreground' : 'text-muted-foreground'}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Visual 2: Simple health check result card
const QuickCheckVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center py-12 md:py-0">
    {/* Mint blob background */}
    <div className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full bg-[hsl(var(--nim-mint))]/40 blur-3xl" />
    
    {/* Result card */}
    <div className="relative z-10 w-[220px] md:w-[260px] bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-[hsl(var(--nim-purple))] px-5 py-4">
        <div className="flex items-center gap-2 text-white">
          <ClipboardCheck className="w-5 h-5" />
          <span className="font-semibold text-sm">Health Check</span>
        </div>
      </div>
      
      {/* Score */}
      <div className="px-5 py-5">
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-4xl md:text-5xl font-bold text-[hsl(var(--nim-navy))]">62</span>
          <span className="text-lg text-muted-foreground">/100</span>
        </div>
        
        {/* Priority areas */}
        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide font-medium">Priority areas</p>
        <div className="flex flex-wrap gap-1.5">
          {['Board', 'Finance', 'Docs'].map((area) => (
            <span 
              key={area}
              className="px-2.5 py-1 bg-[hsl(var(--nim-mint))]/40 text-[hsl(var(--nim-navy))] rounded-full text-xs font-medium"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
      
      {/* Next step */}
      <div className="bg-muted/50 px-5 py-3 border-t">
        <p className="text-xs text-muted-foreground mb-0.5">Suggested next step</p>
        <p className="text-sm font-medium text-foreground">Set up grant tracking</p>
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

        {/* Card 2: I want to see what's missing - Light lavender background */}
        <motion.div
          variants={itemVariants}
          className="bg-[hsl(var(--nim-purple))]/10 w-full border-b border-border/50"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 min-h-[550px] md:min-h-[600px]">
              {/* Visual - Left side with phone mockup */}
              <div className="relative order-1 min-h-[300px] lg:min-h-0 overflow-visible">
                <QuickCheckVisual />
              </div>
              
              {/* Text Content - Right side */}
              <div className="flex items-center px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 order-2">
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
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StartingPointSplit;
