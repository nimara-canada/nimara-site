import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { number: "01", title: "Check", text: "We assess where your systems stand today." },
  { number: "02", title: "Plan", text: "A short workplan with clear jobs, owners, and dates." },
  { number: "03", title: "Build", text: "Real tools: policies, checklists, templates your team can use." },
  { number: "04", title: "Support", text: "We stay to help you use the new tools. Money-back guarantee." }
];

export const HowWeHelp = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-background overflow-hidden"
      id="how-we-help"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-12 lg:mb-16">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            One Simple Loop
            <br />
            <span className="font-normal italic text-muted-foreground">Behind Every Project</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-lg"
          >
            Check, Plan, Build, Support. The only thing that changes is how deep we go.
          </motion.p>
        </div>

        {/* Steps - Compact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group p-6 border border-border rounded-lg hover:border-primary/30 hover:bg-muted/20 transition-all duration-300"
            >
              <span className="text-3xl font-extralight text-muted-foreground/40 group-hover:text-primary/60 transition-colors">
                {step.number}
              </span>
              <h3 className="text-lg font-medium text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-border"
        >
          <a
            href="#hero-form"
            className="group inline-flex items-center gap-3 text-foreground font-medium"
          >
            <span className="group-hover:text-primary transition-colors">Start the free check</span>
            <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};