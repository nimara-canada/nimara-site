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
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Premium gradient background - Stripe inspired */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Subtle mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, hsl(var(--primary) / 0.08), transparent)',
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header - Notion inspired clean typography */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-px w-8 bg-primary/40" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-primary">
              Start Here
            </span>
            <span className="h-px w-8 bg-primary/40" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold tracking-[-0.03em] leading-[1.1] mb-4 text-foreground"
          >
            Choose your starting point.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base lg:text-[17px] text-muted-foreground max-w-lg mx-auto leading-relaxed"
          >
            Most nonprofits with 0–50 staff fall into one of these two situations.
          </motion.p>
        </div>

        {/* Two Cards - Premium glass design */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.25 + index * 0.1, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              className="group relative"
            >
              {/* Card container with glass effect */}
              <div className="relative h-full rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 p-8 lg:p-10 transition-all duration-500 hover:border-border hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] hover:bg-card/80">
                
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card number - minimal */}
                <div className="relative mb-8">
                  <span className="text-[13px] font-medium text-muted-foreground/60">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative">
                  <h3 className="text-xl lg:text-[22px] font-semibold text-foreground mb-3 tracking-[-0.01em]">
                    {card.title}
                  </h3>
                  
                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                    {card.body}
                  </p>

                  {/* Bullets - clean and minimal */}
                  <ul className="space-y-3 mb-10">
                    {card.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                        </span>
                        <span className="text-[14px] text-foreground/80 leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA area */}
                  <div className="space-y-3">
                    <Link
                      to={card.link}
                      className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-[15px] font-medium rounded-xl transition-all duration-300 group/btn ${
                        card.primary 
                          ? 'bg-foreground text-background hover:bg-foreground/90' 
                          : 'bg-muted/80 text-foreground hover:bg-muted'
                      }`}
                    >
                      <span>{card.cta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </Link>
                    
                    <p className="text-[12px] text-muted-foreground/60 text-center">
                      {card.note}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note - refined */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-[13px] text-muted-foreground/50 mt-12 tracking-wide"
        >
          Built for Canadian nonprofits with 0–50 staff
        </motion.p>
      </div>
    </section>
  );
};

export default TwoStartingPoints;
