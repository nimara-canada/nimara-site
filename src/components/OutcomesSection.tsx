import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, Clock, ListChecks } from 'lucide-react';
import { TYPEFORM_HEALTH_CHECK_URL } from '@/constants/urls';

const OutcomesSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: FileCheck,
      title: "Clear decisions",
      description: "Your board and team can make decisions — and find them later.",
      examples: "Board notes, approvals, meeting routine."
    },
    {
      icon: Clock,
      title: "Proof you can pull fast",
      description: "When a funder asks, you can show proof without scrambling.",
      examples: "Grant records, payment proof, reporting routine."
    },
    {
      icon: ListChecks,
      title: "A routine your team follows",
      description: "Simple habits so the system stays clean after we leave.",
      examples: "Folders, naming rules, monthly checklist."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      aria-labelledby="outcomes-heading"
      className="relative py-24 lg:py-32 overflow-hidden bg-muted/30"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <header className="text-center mb-14 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-sm font-semibold tracking-widest uppercase text-primary mb-4"
          >
            What You Get
          </motion.p>
          
          <motion.h2
            id="outcomes-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5 text-foreground"
          >
            Systems that work — in the areas you need.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Start with one area or a few. We match the work to your goal and budget.
          </motion.p>
        </header>

        {/* Cards Grid */}
        <ul className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-10" role="list" aria-label="Outcomes you can expect">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.li
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.08, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                className="h-full"
              >
                <article className="group h-full rounded-2xl bg-card border border-border/60 p-7 lg:p-8 transition-all duration-300 hover:shadow-lg hover:border-border flex flex-col">
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary/15"
                    aria-hidden="true"
                  >
                    <IconComponent className="w-6 h-6 text-primary" strokeWidth={1.75} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl lg:text-[22px] font-semibold text-foreground mb-3 tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed mb-5 flex-grow">
                    {card.description}
                  </p>
                  
                  {/* Examples */}
                  <p className="text-sm text-muted-foreground border-t border-border/40 pt-4">
                    <span className="font-medium text-foreground/70">Examples:</span>{' '}
                    {card.examples}
                  </p>
                </article>
              </motion.li>
            );
          })}
        </ul>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          These are examples — not the full list. We can help across board, money & grants, people, programs, fundraising, volunteers, and tools & files.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          role="group"
          aria-label="Get started options"
        >
          <Link
            to="/capacity-buildout"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Book a free 20-minute call
            <span aria-hidden="true">→</span>
          </Link>
          
          <a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
          >
            Take the free 6-minute check
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OutcomesSection;
