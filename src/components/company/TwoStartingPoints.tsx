import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const TwoStartingPoints: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cards = [
    {
      title: "I know what's broken",
      body: "A board issue. Messy receipts. Grant tracking that doesn't match. Files everywhere.",
      bullets: [
        "Fix one urgent problem fast",
        "Clear next steps for your team",
        "No long process"
      ],
      cta: "Get a Quick Fix",
      note: "Best when you have a deadline.",
      link: "/path-a",
      primary: true
    },
    {
      title: "I'm not sure what's wrong",
      body: "You feel behind, but you don't know what to fix first.",
      bullets: [
        "Free 6-minute check",
        "Self-check (no document review)",
        "Get your next step"
      ],
      cta: "Take the free 6-minute check",
      note: "Paid version includes evidence review.",
      link: "/path-b",
      primary: false
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-background overflow-hidden"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4"
          >
            Start Here
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15] mb-4"
          >
            Pick what fits you today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Most nonprofits with 0–50 staff are in one of these two spots.
          </motion.p>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group bg-card p-8 lg:p-10 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl lg:text-2xl font-medium text-foreground mb-4">
                {card.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {card.body}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 mb-8">
                {card.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3">
                <Link
                  to={card.link}
                  className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 font-medium rounded-full transition-colors ${
                    card.primary 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'bg-foreground text-background hover:bg-foreground/90'
                  }`}
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <p className="text-xs text-muted-foreground text-center">
                  {card.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground"
        >
          Built for nonprofits with 0–50 staff in Canada. Practical support, not paperwork.
        </motion.p>
      </div>
    </section>
  );
};

export default TwoStartingPoints;
