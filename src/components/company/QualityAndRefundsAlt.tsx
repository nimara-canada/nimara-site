import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react';

const guardrails = [
  {
    number: "01",
    label: "Standard scopes",
    description: "Every project uses a written Statement of Work (SOW) with clear deliverables, timelines, and fees.",
  },
  {
    number: "02",
    label: "Fix-first approach",
    description: "If a deliverable is off, we try to fix it first. If we cannot fix it, we may refund the fee for that part of the work.",
  },
  {
    number: "03",
    label: "14-day review + 3-month support",
    description: "You have 14 days after project completion to flag issues, plus about three months of light support so systems do not die on day one.",
  },
  {
    number: "04",
    label: "Plain-language Refund Policy",
    description: "We publish a public refund and fix policy so nonprofits, funders, and partners know what to expect.",
  },
];

const QualityAndRefundsAlt: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      id="quality-section"
      className="relative py-24 sm:py-32 lg:py-40 bg-background text-foreground overflow-hidden"
    >
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Editorial Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-[0.15em] uppercase mb-6"
          >
            <Shield className="w-3.5 h-3.5" />
            Our Guardrails
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            How we manage <span className="text-primary italic">quality & risk</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We design Nimara so that support is clear, fair, and safe for organizations, 
            funders, and our Practice Partners.
          </motion.p>
        </div>

        {/* Guardrails Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-16">
          {guardrails.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="text-sm font-bold text-primary-foreground">
                      {item.number}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                      {item.label}
                    </h3>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed pl-16">
                  {item.description}
                </p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <a
            href="https://www.notion.so/Nimara-Refund-Policy-2bc227f1ee3a80f299fbc42501d338ac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/90 transition-colors"
          >
            Read the full refund policy
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityAndRefundsAlt;
