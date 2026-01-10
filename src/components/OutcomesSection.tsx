import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { TYPEFORM_HEALTH_CHECK_URL } from '@/constants/urls';

const OutcomesSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cards = [
    {
      title: "Clear decisions",
      description: "Your board and team can make decisions — and find them later.",
      examples: "Examples: board notes, approvals, meeting routine."
    },
    {
      title: "Proof you can pull fast",
      description: "When a funder asks, you can show proof without scrambling.",
      examples: "Examples: grant records, payment proof, reporting routine."
    },
    {
      title: "A routine your team follows",
      description: "Simple habits so the system stays clean after we leave.",
      examples: "Examples: folders, naming rules, monthly checklist."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      aria-labelledby="outcomes-heading"
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 text-foreground"
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
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-8" role="list">
          {cards.map((card, index) => (
            <motion.article
              key={index}
              role="listitem"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.25 + index * 0.1, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              className="h-full"
            >
              <div className="h-full rounded-2xl bg-card border border-border p-6 lg:p-8 transition-shadow duration-300 hover:shadow-lg flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {card.title}
                </h3>
                
                <p className="text-base text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {card.description}
                </p>
                
                <p className="text-sm text-muted-foreground/70">
                  {card.examples}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mb-6"
        >
          These are examples — not the full list. We can help across board, money & grants, people, programs, fundraising, volunteers, and tools & files.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            to="/capacity-buildout"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Book a free 20-minute call
            <span aria-hidden="true">→</span>
          </Link>
          
          <a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-base text-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
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
