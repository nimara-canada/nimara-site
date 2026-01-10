import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { TYPEFORM_HEALTH_CHECK_URL } from '@/constants/urls';

const TwoStartingPoints: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cards = [
    {
      title: "I know what I want to build",
      body: "You tell us the thing. We help you build it right.",
      bullets: [
        "Tell us what you need",
        "We build or fix it with you",
        "You get something ready to use"
      ],
      cta: "Book a free call",
      note: "Best when you know the deliverable.",
      link: "/capacity-buildout",
      primary: true
    },
    {
      title: "I want to see where we stand",
      body: "Take a quick check and get a clear next step.",
      bullets: [
        "Free • 6 minutes",
        "Answer it yourself (no documents)",
        "Get a clear next step"
      ],
      cta: "Take the free check",
      note: "Upgrade available (document review).",
      link: TYPEFORM_HEALTH_CHECK_URL,
      isExternal: true,
      primary: false
    }
  ];

  return (
    <section 
      ref={sectionRef}
      aria-labelledby="start-here-heading"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-muted/30" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <header className="text-center mb-12 lg:mb-16">
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
            For organizations with 0–50 staff, most people start in one of these two places.
          </motion.p>
        </header>

        {/* Two Cards */}
        <ul className="grid md:grid-cols-2 gap-6 lg:gap-8" role="list" aria-label="Starting point options">
          {cards.map((card, index) => (
            <motion.li
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.25 + index * 0.1, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              className="h-full"
            >
              <article className="relative h-full rounded-2xl bg-card border border-border p-8 lg:p-10 transition-shadow duration-300 hover:shadow-lg flex flex-col">
                {/* Card number */}
                <span className="text-sm font-medium text-muted-foreground mb-5" aria-hidden="true">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="text-2xl lg:text-[26px] font-bold text-foreground mb-3 tracking-tight">
                  {card.title}
                </h3>
                
                {/* Body */}
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {card.body}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 mb-8 flex-grow" aria-label={`Steps for ${card.title}`}>
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
                
                {/* CTA */}
                <div className="space-y-3">
                  {card.isExternal ? (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      {card.cta}
                      <span aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <Link
                      to={card.link}
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      {card.cta}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                  
                  <p className="text-sm text-muted-foreground text-center">
                    {card.note}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TwoStartingPoints;
