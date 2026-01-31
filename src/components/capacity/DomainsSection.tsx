import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Domain {
  id: string;
  index: string;
  title: string;
  signal: string;
  outcomes: [string, string];
}

const DOMAINS: Domain[] = [
  {
    id: 'governance',
    index: '01',
    title: 'Board & Governance',
    signal: 'Decisions that stick.',
    outcomes: ['Minutes + decision log', 'Actions owned + tracked']
  },
  {
    id: 'money',
    index: '02',
    title: 'Money / Books',
    signal: 'Spending proof, always.',
    outcomes: ['Approval → invoice → payment', 'Month-end close made simple']
  },
  {
    id: 'grants',
    index: '03',
    title: 'Grants',
    signal: 'No scramble at reporting.',
    outcomes: ['Evidence collected as you go', 'Repeatable reporting pack']
  },
  {
    id: 'people',
    index: '04',
    title: 'People / HR',
    signal: 'Roles stay clear.',
    outcomes: ['Hiring + onboarding basics', 'Performance expectations']
  },
  {
    id: 'programs',
    index: '05',
    title: 'Programs',
    signal: 'Delivery you can prove.',
    outcomes: ['Outputs + outcomes tracked', 'Simple program dashboards']
  },
  {
    id: 'fundraising',
    index: '06',
    title: 'Fundraising',
    signal: 'Revenue becomes predictable.',
    outcomes: ['Pipeline + stewardship system', 'Campaign routines']
  },
  {
    id: 'systems',
    index: '07',
    title: 'Systems & Records',
    signal: 'Find anything fast.',
    outcomes: ['Source-of-truth folders', 'Naming rules everyone follows']
  }
];

interface DomainsSectionProps {
  selectedDomains: string[];
  onDomainsChange: (domains: string[]) => void;
}

// Individual domain card with scroll animation
function DomainCard({
  domain,
  isSelected,
  onToggle,
  index
}: {
  domain: Domain;
  isSelected: boolean;
  onToggle: () => void;
  index: number;
}) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.button
      ref={cardRef}
      onClick={onToggle}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative text-left p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 overflow-hidden",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-background",
        isSelected
          ? "border-accent bg-accent/10 shadow-[0_0_40px_rgba(172,252,227,0.15)]"
          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
      )}
      aria-pressed={isSelected}
      aria-label={`${domain.title}: ${domain.signal}`}
    >
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Index number */}
      <span className="text-[11px] font-mono tracking-[0.15em] text-white/30 mb-4 block">
        {domain.index}
      </span>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight tracking-[-0.01em]">
        {domain.title}
      </h3>
      
      {/* Signal line */}
      <p className={cn(
        "text-sm sm:text-base font-medium mb-5 transition-colors duration-200",
        isSelected ? "text-accent" : "text-accent/70"
      )}>
        {domain.signal}
      </p>
      
      {/* Outcomes */}
      <ul className="space-y-2">
        {domain.outcomes.map((outcome, idx) => (
          <li 
            key={idx}
            className="text-[13px] sm:text-sm text-white/50 flex items-start gap-2"
          >
            <span className="text-accent/60 mt-0.5" aria-hidden="true">•</span>
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      {/* Selection indicator */}
      <div className={cn(
        "absolute top-6 right-6 w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center",
        isSelected 
          ? "border-accent bg-accent" 
          : "border-white/20 group-hover:border-white/40"
      )}>
        {isSelected && (
          <motion.svg 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none"
          >
            <path 
              d="M2.5 6L5 8.5L9.5 3.5" 
              stroke="hsl(var(--secondary-background))" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </motion.svg>
        )}
      </div>
    </motion.button>
  );
}

const DomainsSection = ({ selectedDomains, onDomainsChange }: DomainsSectionProps) => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  const toggleDomain = (id: string) => {
    if (selectedDomains.includes(id)) {
      onDomainsChange(selectedDomains.filter(d => d !== id));
    } else {
      if (selectedDomains.length >= 2) {
        toast({
          description: "Choose up to 2 domains.",
          duration: 2000,
        });
        return;
      }
      onDomainsChange([...selectedDomains, id]);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="domains" 
      className="relative bg-secondary-background py-20 sm:py-28 md:py-36"
      aria-labelledby="domains-heading"
    >
      {/* Subtle grid pattern - matches homepage */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.08) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 sm:mb-5">
            Nimara Framework
          </p>
          
          {/* Paper Tiger headline */}
          <h2 
            id="domains-heading"
            className="text-[clamp(2rem,5vw,4rem)] font-black text-white leading-[1] tracking-[-0.03em] uppercase mb-4 sm:mb-5"
          >
            The 7 <span className="text-accent">Domains</span> We Install
          </h2>
          
          {/* Subtext */}
          <p className="text-base sm:text-lg text-white/50 max-w-md">
            Pick what's breaking. We'll install the system.
          </p>
        </motion.div>

        {/* Domain Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">
          {DOMAINS.map((domain, index) => (
            <DomainCard
              key={domain.id}
              domain={domain}
              isSelected={selectedDomains.includes(domain.id)}
              onToggle={() => toggleDomain(domain.id)}
              index={index}
            />
          ))}
        </div>

        {/* Footer row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10"
        >
          {/* Selection counter with dots */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              {DOMAINS.map((domain) => (
                <div 
                  key={domain.id}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    selectedDomains.includes(domain.id) 
                      ? 'bg-accent scale-110' 
                      : 'bg-white/20'
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-white/40">
              Selected: <span className="font-medium text-white/70">{selectedDomains.length}/2</span>
            </span>
          </div>
          
          {/* Continue link */}
          <a 
            href="#recommended-path"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('recommended-path')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[15px] font-medium text-white hover:text-accent transition-colors duration-200 group"
          >
            Continue
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainsSection;
