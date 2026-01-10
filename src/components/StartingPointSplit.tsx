import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, CheckCircle, Receipt } from 'lucide-react';
import { useMotionPreferences } from '@/hooks/use-scroll-reveal';

// Visual 1: Your Funding Folder
const FundingFolderVisual = () => (
  <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-6 md:p-8 border border-border/50 shadow-soft">
    <div className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide">
      Your funding folder
    </div>
    <div className="grid grid-cols-3 gap-3">
      {[
        { icon: Receipt, label: 'Receipts' },
        { icon: CheckCircle, label: 'Approvals' },
        { icon: FileText, label: 'Proof of payment' },
      ].map((item, i) => (
        <div
          key={item.label}
          className="bg-background rounded-xl p-4 border border-border/30 flex flex-col items-center gap-2 shadow-sm"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs font-medium text-foreground text-center leading-tight">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// Visual 2: Quick Check Result
const QuickCheckVisual = () => (
  <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-6 md:p-8 border border-border/50 shadow-soft">
    <div className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide">
      Quick check result
    </div>
    <div className="bg-background rounded-xl p-5 border border-border/30 shadow-sm">
      {/* Score */}
      <div className="flex items-center gap-4 mb-5">
        <div className="text-4xl font-bold text-primary">62</div>
        <div className="text-lg text-muted-foreground font-medium">/100</div>
      </div>
      
      {/* Labels */}
      <div className="flex gap-2 mb-5">
        {['Board', 'Money', 'Files'].map((label) => (
          <span
            key={label}
            className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium text-muted-foreground"
          >
            {label}
          </span>
        ))}
      </div>
      
      {/* Next Step Box */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
        <div className="text-xs font-semibold text-primary mb-1">Next step</div>
        <div className="text-sm text-foreground">Set up your grant tracker</div>
      </div>
    </div>
  </div>
);

interface RowProps {
  badge: string;
  title: string;
  oneLiner: string;
  bullets: string[];
  buttonText: string;
  buttonHref: string;
  helperText: string;
  visual: React.ReactNode;
  reversed?: boolean;
  index: number;
}

const StartingRow = ({
  badge,
  title,
  oneLiner,
  bullets,
  buttonText,
  buttonHref,
  helperText,
  visual,
  reversed = false,
  index,
}: RowProps) => {
  const { reducedMotion } = useMotionPreferences();
  
  const variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.15 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      whileHover={reducedMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-background rounded-3xl border border-border/60 shadow-soft hover:shadow-lg transition-shadow duration-300 p-6 md:p-10"
    >
      <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reversed ? 'md:flex md:flex-row-reverse' : ''}`}>
        {/* Text Content - shown first on mobile regardless of reversed */}
        <div className={`order-1 ${reversed ? 'md:order-2' : 'md:order-1'}`}>
          {/* Mobile: Title first */}
          <div className="md:hidden mb-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
              {badge}
            </span>
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          </div>
          
          {/* Mobile: Visual second */}
          <div className="md:hidden mb-6">
            {visual}
          </div>
          
          {/* Desktop: Badge and Title */}
          <div className="hidden md:block">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              {badge}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{title}</h3>
          </div>
          
          {/* One-liner */}
          <p className="text-lg text-muted-foreground mb-5">{oneLiner}</p>
          
          {/* Bullets */}
          <ul className="space-y-2 mb-6">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          
          {/* Button */}
          <Button asChild size="lg" className="mb-3">
            <a href={buttonHref}>
              {buttonText}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          
          {/* Helper text */}
          <p className="text-sm text-muted-foreground">{helperText}</p>
        </div>
        
        {/* Visual - desktop only (mobile is handled above) */}
        <div className={`hidden md:block ${reversed ? 'md:order-1' : 'md:order-2'}`}>
          {visual}
        </div>
      </div>
    </motion.div>
  );
};

const StartingPointSplit = () => {
  const { reducedMotion } = useMotionPreferences();
  
  const headerVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const rows = [
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
      reversed: false,
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
      reversed: true,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="text-center mb-14"
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

        {/* Rows */}
        <div className="space-y-8">
          {rows.map((row, index) => (
            <StartingRow key={row.badge} {...row} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartingPointSplit;
