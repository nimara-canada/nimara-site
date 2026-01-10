import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, CheckCircle, Receipt, BarChart3 } from 'lucide-react';

// Visual 1: Your Funding Folder
const FundingFolderVisual = () => (
  <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/20">
    <div className="text-xs font-medium text-white/70 mb-4 uppercase tracking-wide">
      Your funding folder
    </div>
    <div className="grid grid-cols-3 gap-2 md:gap-3">
      {[
        { icon: Receipt, label: 'Receipts' },
        { icon: CheckCircle, label: 'Approvals' },
        { icon: FileText, label: 'Proof of payment' },
      ].map((item) => (
        <div
          key={item.label}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10 flex flex-col items-center gap-2"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/20 flex items-center justify-center">
            <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-[10px] md:text-xs font-medium text-white text-center leading-tight">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// Visual 2: Quick Check Result
const QuickCheckVisual = () => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-[hsl(var(--nim-navy))]/20">
    <div className="text-xs font-medium text-[hsl(var(--nim-navy))]/70 mb-4 uppercase tracking-wide">
      Quick check result
    </div>
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-[hsl(var(--nim-navy))]/10">
      {/* Score */}
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-3xl md:text-4xl font-bold text-[hsl(var(--nim-navy))]">62</span>
        <span className="text-base md:text-lg text-[hsl(var(--nim-navy))]/60 font-medium">/100</span>
      </div>
      
      {/* Labels */}
      <div className="flex flex-wrap gap-2 mb-4">
        {['Board', 'Money', 'Files'].map((label) => (
          <span
            key={label}
            className="px-2.5 py-1 bg-[hsl(var(--nim-navy))]/10 rounded-full text-xs font-medium text-[hsl(var(--nim-navy))]"
          >
            {label}
          </span>
        ))}
      </div>
      
      {/* Next Step Box */}
      <div className="bg-[hsl(var(--nim-navy))]/5 border border-[hsl(var(--nim-navy))]/20 rounded-lg p-2.5 md:p-3">
        <div className="text-[10px] md:text-xs font-semibold text-[hsl(var(--nim-navy))] mb-0.5">Next step</div>
        <div className="text-xs md:text-sm text-[hsl(var(--nim-navy))]/80">Set up your grant tracker</div>
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

  const cards = [
    {
      badge: '01',
      title: 'I know what we need',
      oneLiner: 'Tell us what you want to set up. We help you build it.',
      bullets: [
        'Tell us what you need',
        'We set it up with you',
        'You get something ready to use',
      ],
      buttonText: 'Book a free call',
      buttonHref: 'https://calendly.com/nimara-ops/capacity-call',
      helperText: 'Best if you already know what you want.',
      visual: <FundingFolderVisual />,
      bgClass: 'bg-[hsl(var(--nim-purple))]',
      textClass: 'text-white',
      subtextClass: 'text-white/80',
      buttonVariant: 'secondary' as const,
    },
    {
      badge: '02',
      title: "I want to see what's missing",
      oneLiner: 'Take a quick check. Get a clear next step.',
      bullets: [
        'Free • 6 minutes',
        'No documents needed',
        'Get a clear next step',
      ],
      buttonText: 'Take the free check',
      buttonHref: 'https://tally.so/r/wa9dLv',
      helperText: 'Upgrade available (we review your documents).',
      visual: <QuickCheckVisual />,
      bgClass: 'bg-[hsl(var(--nim-mint))]',
      textClass: 'text-[hsl(var(--nim-navy))]',
      subtextClass: 'text-[hsl(var(--nim-navy))]/70',
      buttonVariant: 'default' as const,
    },
  ];

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
        className="flex flex-col"
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.badge}
            variants={itemVariants}
            className={`${card.bgClass} w-full`}
          >
            {/* Text Content Section */}
            <div className="flex items-start justify-center px-6 md:px-12 lg:px-20 py-16 md:py-24">
              <div className="max-w-2xl w-full">
                {/* Badge */}
                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${
                  index === 0 
                    ? 'bg-white/20 text-white' 
                    : 'bg-[hsl(var(--nim-navy))]/10 text-[hsl(var(--nim-navy))]'
                }`}>
                  {card.badge}
                </span>
                
                {/* Title */}
                <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-5 ${card.textClass}`}>
                  {card.title}
                </h3>
                
                {/* One-liner */}
                <p className={`text-lg md:text-xl lg:text-2xl mb-8 ${card.subtextClass}`}>
                  {card.oneLiner}
                </p>
                
                {/* Bullets */}
                <ul className="space-y-3 mb-10">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className={`flex items-start gap-3 text-lg ${card.textClass}`}>
                      <span className="mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Button */}
                <Button 
                  asChild 
                  size="lg" 
                  variant={card.buttonVariant}
                  className={`mb-4 text-base px-8 py-6 ${
                    index === 0 
                      ? 'bg-white text-[hsl(var(--nim-purple))] hover:bg-white/90' 
                      : ''
                  }`}
                >
                  <a href={card.buttonHref}>
                    {card.buttonText}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                
                {/* Helper text */}
                <p className={`text-sm md:text-base ${card.subtextClass}`}>
                  {card.helperText}
                </p>
              </div>
            </div>
            
            {/* Visual Section - Below the content */}
            <div className="px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
              <div className="max-w-2xl mx-auto">
                {card.visual}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StartingPointSplit;
