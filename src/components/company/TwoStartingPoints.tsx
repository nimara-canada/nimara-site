import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const TwoStartingPoints: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cards = [
    {
      title: "I have a clear request",
      body: "We already know what we want to build or improve. We just need a partner to help us do it right.",
      examples: "Examples: a policy, a tracker, board minutes, a simple grant file system.",
      bullets: [
        "Tell us what you want to build",
        "We review it or build it with you",
        "You leave with something ready to use"
      ],
      cta: "Book a free call",
      note: "Best when you know the deliverable.",
      link: "/path-a",
      primary: true
    },
    {
      title: "I want to see where we stand",
      body: "Not sure what to fix first? Take a quick check. You'll see what's strong and what needs work.",
      examples: null,
      bullets: [
        "Free and takes 6 minutes",
        "Answer it yourself (no documents needed)",
        "Get a clear next step"
      ],
      cta: "Take the free check",
      note: "Upgrade available with document review.",
      link: "/path-b",
      primary: false
    }
  ];

  return (
    <section 
      ref={sectionRef}
      aria-labelledby="start-here-heading"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Simplified background - better contrast */}
      <div className="absolute inset-0 bg-muted/30" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header - Improved hierarchy for scanning */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-sm font-semibold tracking-widest uppercase text-primary mb-4"
          >
            Start Here
          </motion.p>
          
          <motion.h2
            id="start-here-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 text-foreground"
          >
            Choose your starting point.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Most nonprofits with 0–50 staff fall into one of these two situations.
          </motion.p>
        </div>

        {/* Two Cards - High contrast, clear hierarchy */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8" role="list">
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
              className="group relative"
            >
              {/* Card container - solid background for better contrast */}
              <div className="relative h-full rounded-2xl bg-card border border-border p-8 lg:p-10 transition-shadow duration-300 hover:shadow-lg">
                
                {/* Card number - accessible contrast */}
                <div className="mb-6">
                  <span className="text-sm font-medium text-muted-foreground" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  {/* Title - Large and bold for instant scanning */}
                  <h3 className="text-2xl lg:text-[26px] font-bold text-foreground mb-4 tracking-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground leading-relaxed mb-3">
                    {card.body}
                  </p>
                  
                  {card.examples && (
                    <p className="text-sm text-muted-foreground italic mb-6">
                      {card.examples}
                    </p>
                  )}
                  
                  {!card.examples && <div className="mb-6" />}

                  {/* Bullets - readable size with proper spacing */}
                  <ul className="space-y-3 mb-8" aria-label={`Benefits for ${card.title}`}>
                    {card.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <span 
                          className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0"
                          aria-hidden="true"
                        >
                          <Check className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
                        </span>
                        <span className="text-base text-foreground leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA area - clear focus states */}
                  <div className="space-y-3">
                    <Link
                      to={card.link}
                      className={`inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                        card.primary 
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {card.cta}
                      <span aria-hidden="true">→</span>
                    </Link>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      {card.note}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom note - accessible contrast */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Built for Canadian nonprofits with 0–50 staff
        </motion.p>
      </div>
    </section>
  );
};

export default TwoStartingPoints;
