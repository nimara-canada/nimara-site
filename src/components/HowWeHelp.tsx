import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Check what's really going on",
    text: "For urgent fixes, we start with a short intake around one problem. For bigger projects, we run a health check across your core systems so we know where each one stands."
  },
  {
    number: "02",
    title: "Clear, small workplan",
    text: "We turn what we learn into a short workplan with clear jobs, owners, and dates. No 50-page reports—just what you need to move forward."
  },
  {
    number: "03",
    title: "Real tools you can use",
    text: "We build real things with you: plain-language policies, checklists, templates, and simple systems your team can use every week."
  },
  {
    number: "04",
    title: "Support and a safety net",
    text: "When the main build is done, we stay long enough to help you use the new tools in real life. Bigger projects come with up to 3 months of support and a money-back guarantee."
  }
];

export const HowWeHelp = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 sm:py-40 lg:py-48 bg-background overflow-hidden"
      id="how-we-help"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Our Process
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8"
          >
            One simple loop
            <br />
            <span className="font-normal italic text-muted-foreground">behind every project</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            We don't guess. Behind every project we run the same clear loop: 
            check what's going on, plan, build, support. The only thing that changes is how deep we go.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-12 border-t border-border hover:bg-muted/30 transition-colors duration-300">
                {/* Number */}
                <div className="col-span-2 lg:col-span-1">
                  <span className="text-4xl lg:text-5xl font-extralight text-muted-foreground/40 group-hover:text-foreground/60 transition-colors">
                    {step.number}
                  </span>
                </div>
                
                {/* Title */}
                <div className="col-span-10 lg:col-span-4">
                  <h3 className="text-lg lg:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="col-span-12 lg:col-span-7 mt-4 lg:mt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.text}
                  </p>
                  
                  {/* Guarantee badge on last step */}
                  {index === steps.length - 1 && (
                    <span className="inline-block mt-4 px-3 py-1.5 bg-foreground text-background text-xs font-medium">
                      Money-back guarantee included
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-lg font-medium text-foreground mb-1">
                Check → Plan → Build → Support
              </p>
              <p className="text-sm text-muted-foreground">
                The simple Nimara loop behind every project
              </p>
            </div>
            <a
              href="/organizational-health-check"
              className="group inline-flex items-center gap-3 text-foreground font-medium"
            >
              <span className="group-hover:text-primary transition-colors">Start the free check</span>
              <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
