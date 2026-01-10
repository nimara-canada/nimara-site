import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, CheckCircle, Receipt } from 'lucide-react';

// Visual 1: Your Funding Folder (for purple card)
const FundingFolderVisual = () => (
  <div className="h-full w-full flex items-center justify-center p-8 md:p-12">
    <div className="bg-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3 border-2 border-[hsl(var(--nim-purple))]/20">
      <div className="w-10 h-10 rounded-full bg-[hsl(var(--nim-purple))]/10 flex items-center justify-center">
        <Receipt className="w-5 h-5 text-[hsl(var(--nim-purple))]" />
      </div>
      <span className="text-lg md:text-xl font-semibold text-[hsl(var(--nim-navy))]">
        Your funding folder
      </span>
      <span className="text-2xl">👆</span>
    </div>
  </div>
);

// Visual 2: Quick Check Result (for mint card)
const QuickCheckVisual = () => (
  <div className="h-full w-full flex items-center justify-center p-8 md:p-12">
    <div className="bg-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3 border-2 border-[hsl(var(--nim-navy))]/20">
      <div className="w-10 h-10 rounded-full bg-[hsl(var(--nim-mint))]/50 flex items-center justify-center">
        <CheckCircle className="w-5 h-5 text-[hsl(var(--nim-navy))]" />
      </div>
      <span className="text-lg md:text-xl font-semibold text-[hsl(var(--nim-navy))]">
        Take the quick check
      </span>
      <span className="text-2xl">👆</span>
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
      visualBgClass: 'bg-white/20',
      textClass: 'text-white',
      subtextClass: 'text-white/80',
      buttonClass: 'bg-white text-[hsl(var(--nim-purple))] hover:bg-white/90',
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
      bgClass: 'bg-[hsl(var(--nim-navy))]',
      visualBgClass: 'bg-[hsl(var(--nim-mint))]',
      textClass: 'text-white',
      subtextClass: 'text-white/70',
      buttonClass: 'bg-[hsl(var(--nim-mint))] text-[hsl(var(--nim-navy))] hover:bg-[hsl(var(--nim-mint))]/90',
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
        className="flex flex-col px-4 md:px-8 lg:px-12 gap-6 pb-16 md:pb-24"
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.badge}
            variants={itemVariants}
            className={`${card.bgClass} w-full rounded-3xl overflow-hidden`}
          >
            {/* Two-column layout on desktop, stacked on mobile */}
            <div className="grid lg:grid-cols-2 min-h-[500px] md:min-h-[550px]">
              {/* Text Content - Left side */}
              <div className="flex items-center px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 order-2 lg:order-1">
                <div className="max-w-lg">
                  {/* Badge */}
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-white/20 text-white">
                    {card.badge}
                  </span>
                  
                  {/* Title */}
                  <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-5 ${card.textClass}`}>
                    {card.title}
                  </h3>
                  
                  {/* One-liner */}
                  <p className={`text-lg md:text-xl mb-8 ${card.subtextClass}`}>
                    {card.oneLiner}
                  </p>
                  
                  {/* Bullets */}
                  <ul className="space-y-3 mb-10">
                    {card.bullets.map((bullet, i) => (
                      <li key={i} className={`flex items-start gap-3 text-lg ${card.textClass}`}>
                        <span className="mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Button */}
                  <Button 
                    asChild 
                    size="lg" 
                    className={`mb-4 text-base px-8 py-6 rounded-full ${card.buttonClass}`}
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
              
              {/* Visual - Right side */}
              <div className={`${card.visualBgClass} rounded-3xl m-4 md:m-6 flex items-center justify-center order-1 lg:order-2 min-h-[250px] lg:min-h-0`}>
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
