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
      examples: "Examples: board notes, approvals"
    },
    {
      title: "Proof you can pull fast",
      examples: "Examples: grant records, payment proof"
    },
    {
      title: "A routine your team follows",
      examples: "Examples: folders, monthly checklist"
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
        <header className="text-center mb-12 lg:mb-16">
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
            Real systems that work.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg text-muted-foreground"
          >
            Start with 1 area or a few.
          </motion.p>
        </header>

        {/* Cards Grid */}
        <ul className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-8" role="list" aria-label="What you get">
          {cards.map((card, index) => (
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
              <article className="h-full rounded-2xl bg-card border border-border/60 p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:border-border">
                <h3 className="text-xl lg:text-[22px] font-semibold text-foreground mb-3 tracking-tight">
                  {card.title}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {card.examples}
                </p>
              </article>
            </motion.li>
          ))}
        </ul>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Examples only. We cover board, money & grants, people, programs, fundraising, volunteers, tools & files.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          role="group"
          aria-label="Get started"
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
