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
      title: "I know what I need",
      body: "A policy. A tracking system. A plan that needs a second look. You've already figured out the gap — now you need it built or refined.",
      bullets: [
        "Tell us what you need",
        "We build or review it with you",
        "Walk away with something ready to use"
      ],
      cta: "Build with us",
      note: "Works for one project or a bigger plan.",
      link: "/path-a",
      primary: true
    },
    {
      title: "I want to see where we stand",
      body: "You're curious. Maybe you want to stay ready, attract new funding, or just make sure your systems are solid.",
      bullets: [
        "Free and takes 6 minutes",
        "Answer questions yourself (no documents needed)",
        "See what's strong and what needs work"
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
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      
      {/* Refined dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary/80 mb-5 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10"
          >
            Start Here
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-[-0.02em] leading-[1.2] mb-5 text-foreground"
          >
            Choose your starting point.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base lg:text-lg text-muted-foreground max-w-md mx-auto font-light"
          >
            Most nonprofits with 0–50 staff fall into one of these two situations.
          </motion.p>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-14">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative"
            >
              {/* Card glow effect on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div className="relative bg-card/80 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-border/60 group-hover:border-primary/20 group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col">
                {/* Card number indicator */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">{index + 1}</span>
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 tracking-[-0.01em] pr-10">
                  {card.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-7 text-[15px]">
                  {card.body}
                </p>

                {/* Bullets with refined styling */}
                <ul className="space-y-3.5 mb-8 flex-grow">
                  {card.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <span className="mt-1.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-foreground/75 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3 mt-auto">
                  <Link
                    to={card.link}
                    className={`inline-flex items-center justify-center gap-2.5 w-full px-6 py-4 font-medium rounded-xl transition-all duration-300 group/btn ${
                      card.primary 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5' 
                        : 'bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/10 hover:shadow-xl hover:shadow-foreground/20 hover:-translate-y-0.5'
                    }`}
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </Link>
                  
                  <p className="text-[11px] text-muted-foreground/70 text-center tracking-wide">
                    {card.note}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Microcopy with divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="h-px w-12 bg-border/50" />
          <p className="text-center text-xs text-muted-foreground/60 tracking-wide">
            Built for nonprofits with 0–50 staff in Canada. Practical support, not paperwork.
          </p>
          <div className="h-px w-12 bg-border/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default TwoStartingPoints;
