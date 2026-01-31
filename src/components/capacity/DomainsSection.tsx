import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Domain {
  id: string;
  title: string;
  signal: string;
  outcomes: [string, string];
}

const DOMAINS: Domain[] = [
  {
    id: 'governance',
    title: 'Board & Governance',
    signal: 'Decisions that stick.',
    outcomes: ['Minutes + decision log', 'Actions owned + tracked']
  },
  {
    id: 'money',
    title: 'Money / Books',
    signal: 'Spending proof, always.',
    outcomes: ['Approval → invoice → payment', 'Month-end close made simple']
  },
  {
    id: 'grants',
    title: 'Grants',
    signal: 'No scramble at reporting.',
    outcomes: ['Evidence collected as you go', 'Repeatable reporting pack']
  },
  {
    id: 'people',
    title: 'People / HR',
    signal: 'Roles stay clear.',
    outcomes: ['Hiring + onboarding basics', 'Performance expectations']
  },
  {
    id: 'programs',
    title: 'Programs',
    signal: 'Delivery you can prove.',
    outcomes: ['Outputs + outcomes tracked', 'Simple program dashboards']
  },
  {
    id: 'fundraising',
    title: 'Fundraising',
    signal: 'Revenue becomes predictable.',
    outcomes: ['Pipeline + stewardship system', 'Campaign routines']
  },
  {
    id: 'systems',
    title: 'Systems & Records',
    signal: 'Find anything fast.',
    outcomes: ['Source-of-truth folders', 'Naming rules everyone follows']
  }
];

interface DomainsSectionProps {
  selectedDomains: string[];
  onDomainsChange: (domains: string[]) => void;
}

const DomainsSection = ({ selectedDomains, onDomainsChange }: DomainsSectionProps) => {
  const { toast } = useToast();

  const toggleDomain = (id: string) => {
    if (selectedDomains.includes(id)) {
      // Deselect
      onDomainsChange(selectedDomains.filter(d => d !== id));
    } else {
      // Try to select
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
      id="domains" 
      className="bg-background py-16 sm:py-20 md:py-24"
      aria-labelledby="domains-heading"
    >
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">
        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-14">
          <p className="text-[12px] font-medium tracking-[0.1em] uppercase text-muted-foreground mb-3">
            Nimara framework
          </p>
          <h2 
            id="domains-heading"
            className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-foreground leading-[1.15] tracking-[-0.02em] mb-3"
          >
            The 7 domains we install
          </h2>
          <p className="text-[16px] sm:text-[17px] text-muted-foreground">
            Pick what's breaking. We'll install the system.
          </p>
        </div>

        {/* Domain Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8">
          {DOMAINS.map((domain) => {
            const isSelected = selectedDomains.includes(domain.id);
            
            return (
              <motion.button
                key={domain.id}
                onClick={() => toggleDomain(domain.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.995 }}
                className={cn(
                  "group text-left p-5 sm:p-6 rounded-xl border-2 transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  isSelected
                    ? "border-accent bg-accent/5 shadow-[0_0_20px_rgba(172,252,227,0.15)]"
                    : "border-border bg-card hover:border-foreground/20 hover:shadow-md"
                )}
                aria-pressed={isSelected}
                aria-label={`${domain.title}: ${domain.signal}`}
              >
                {/* Title */}
                <h3 className="text-[17px] sm:text-[18px] font-semibold text-foreground mb-2 leading-tight">
                  {domain.title}
                </h3>
                
                {/* Signal line */}
                <p className={cn(
                  "text-[14px] sm:text-[15px] font-medium mb-4 transition-colors duration-200",
                  isSelected ? "text-accent" : "text-primary"
                )}>
                  {domain.signal}
                </p>
                
                {/* Outcomes */}
                <ul className="space-y-1.5">
                  {domain.outcomes.map((outcome, idx) => (
                    <li 
                      key={idx}
                      className="text-[13px] sm:text-[14px] text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-accent mt-0.5" aria-hidden="true">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.button>
            );
          })}
        </div>

        {/* Footer row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          {/* Selection counter */}
          <p className="text-[14px] text-muted-foreground">
            Selected: <span className="font-medium text-foreground">{selectedDomains.length}/2</span>
          </p>
          
          {/* Continue link */}
          <a 
            href="#recommended-path"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('recommended-path')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-foreground hover:text-accent transition-colors duration-200 group"
          >
            Continue
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
