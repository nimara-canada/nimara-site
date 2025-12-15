import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const guardrails = [
  {
    number: "01",
    label: "Standard Scopes",
    description: "Every Project Uses A Written Statement Of Work (SOW) With Clear Deliverables, Timelines, And Fees.",
  },
  {
    number: "02",
    label: "Fix-First Approach",
    description: "If A Deliverable Is Off, We Try To Fix It First. If We Cannot Fix It, We May Refund The Fee For That Part Of The Work.",
  },
  {
    number: "03",
    label: "14-Day Review + 3-Month Support",
    description: "You Have 14 Days After Project Completion To Flag Issues, Plus About Three Months Of Light Support So Systems Do Not Die On Day One.",
  },
  {
    number: "04",
    label: "Plain-Language Refund Policy",
    description: "We Publish A Public Refund And Fix Policy So Nonprofits, Funders, And Partners Know What To Expect.",
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
            How We Manage
            <br />
            <span className="font-normal italic text-muted-foreground">Quality & Risk</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            We Design Nimara So That Support Is Clear, Fair, And Safe For Organizations, 
            Funders, And Our Practice Partners.
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
              Want The Full Details?
            </p>
            <a
              href="https://www.notion.so/Nimara-Refund-Policy-2bc227f1ee3a80f299fbc42501d338ac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-foreground font-medium group"
            >
              <span className="group-hover:text-primary transition-colors">Read The Full Refund Policy</span>
              <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityAndRefundsAlt;
