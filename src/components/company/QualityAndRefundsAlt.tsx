import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
      className="relative py-32 sm:py-40 lg:py-48 bg-background overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Editorial Header */}
        <div className="mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Our Guardrails
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8"
          >
            How we manage
            <br />
            <span className="font-normal italic text-muted-foreground">quality & risk</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            We design Nimara so that support is clear, fair, and safe for organizations, 
            funders, and our Practice Partners.
          </motion.p>
        </div>

        {/* Guardrails List */}
        <div className="mb-16 lg:mb-20">
          <div className="space-y-0">
            {guardrails.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 border-t border-border hover:bg-muted/30 transition-colors duration-300">
                  {/* Number */}
                  <div className="col-span-2 lg:col-span-1">
                    <span className="text-3xl lg:text-4xl font-extralight text-muted-foreground/40 group-hover:text-foreground/60 transition-colors">
                      {item.number}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <div className="col-span-10 lg:col-span-4">
                    <h3 className="text-lg lg:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <div className="col-span-12 lg:col-span-7 mt-3 lg:mt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Bottom border */}
            <div className="border-t border-border" />
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-muted-foreground">
              Want the full details?
            </p>
            <a
              href="https://www.notion.so/Nimara-Refund-Policy-2bc227f1ee3a80f299fbc42501d338ac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-foreground font-medium group"
            >
              <span className="group-hover:text-primary transition-colors">Read the full refund policy</span>
              <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityAndRefundsAlt;
