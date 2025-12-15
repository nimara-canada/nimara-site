import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: "Start the Health Check",
    description: "You complete a short online check about your team, money, systems, and risks. This gives us a clear picture of what is strong and what is fragile.",
  },
  {
    number: 2,
    title: "Confirm your tier and path",
    description: "Together we confirm your tier (0–4) and decide whether you need a fast fix (Path A) or a deeper package (Path B). This keeps the work at the right size and price.",
  },
  {
    number: 3,
    title: "Match with a Practice Partner",
    description: "We match you with a Nimara Practice Partner who has the right skills and context. We agree on scope, timelines, and deliverables in a simple Statement of Work (SOW).",
  },
  {
    number: 4,
    title: "Delivery with check-ins",
    description: "The Practice Partner runs the work using Nimara tools and templates. Your team stays involved. We check progress against the SOW, not vague goals.",
  },
  {
    number: 5,
    title: "Handover, support, and learning",
    description: "We close out the project with a handover and next steps. For about three months, we are available for light support and questions.",
  },
];

const addOns = [
  {
    title: "12-month Evaluation & Support",
    description: "Our team stays close for up to 12 months. We check in at agreed points, help you see what is working, and adjust tools or processes where needed.",
    isAccent: true,
  },
  {
    title: "Fractional Partner (Ongoing)",
    description: "For organizations that need more hands-on help, hire a Nimara Fractional Partner on an ongoing basis to manage and update the systems we installed.",
    isAccent: false,
  },
];

const YourJourney: React.FC = () => {
  const sectionRef = useRef(null);
  const addOnsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const addOnsInView = useInView(addOnsRef, { once: true, margin: "-50px" });

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-secondary text-secondary-foreground overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-secondary/98" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Editorial Header */}
        <div className="text-center mb-20 lg:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium tracking-[0.15em] uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            The Process
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Your Journey with <span className="text-accent italic">Nimara</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-secondary-foreground/60 max-w-2xl mx-auto"
          >
            Most projects follow the same basic path. These are the main steps from 
            'we need help' to 'this is working in real life.'
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={sectionRef} className="mb-24 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 mb-12"
          >
            <span className="text-sm font-medium text-secondary-foreground/40 uppercase tracking-wider">01</span>
            <h3 className="text-2xl font-semibold">Five Steps</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-secondary-foreground/20 to-transparent" />
          </motion.div>

          {/* Timeline Cards */}
          <div className="relative">
            {/* Connecting line - Desktop */}
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="hidden lg:block absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 origin-top"
            />

            {/* Mobile connecting line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="lg:hidden absolute left-[31px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 origin-top"
            />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group relative flex gap-6 lg:gap-8"
                >
                  {/* Number badge */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center text-2xl lg:text-3xl font-bold shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                      {step.number}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 p-6 lg:p-8 rounded-2xl bg-secondary-foreground/[0.03] border border-secondary-foreground/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-secondary-foreground/[0.06] group-hover:border-secondary-foreground/20">
                    <h4 className="text-lg lg:text-xl font-semibold text-secondary-foreground mb-3">
                      {step.title}
                    </h4>
                    <p className="text-sm lg:text-base text-secondary-foreground/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Add-ons Section */}
        <div ref={addOnsRef}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={addOnsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 mb-12"
          >
            <span className="text-sm font-medium text-secondary-foreground/40 uppercase tracking-wider">02</span>
            <h3 className="text-2xl font-semibold">Optional Add-ons</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-secondary-foreground/20 to-transparent" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={addOnsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-secondary-foreground/60 max-w-2xl mb-10"
          >
            Some organizations want deeper follow-up. These add-ons are optional and come with a separate simple fee.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 20 }}
                animate={addOnsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className={`h-full p-8 rounded-2xl border transition-all duration-300 ${
                  addon.isAccent 
                    ? 'border-accent/30 bg-gradient-to-br from-accent/5 to-accent/[0.02] hover:border-accent/50' 
                    : 'border-primary/30 bg-gradient-to-br from-primary/5 to-primary/[0.02] hover:border-primary/50'
                }`}>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium mb-4 ${
                    addon.isAccent
                      ? 'bg-accent/10 text-accent'
                      : 'bg-primary/10 text-primary'
                  }`}>
                    <Check className="w-3 h-3" />
                    Add-on
                  </span>
                  
                  <h4 className="text-xl font-semibold text-secondary-foreground mb-3">
                    {addon.title}
                  </h4>
                  
                  <p className="text-secondary-foreground/60 leading-relaxed text-sm">
                    {addon.description}
                  </p>

                  <div className={`mt-6 inline-flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity ${
                    addon.isAccent ? 'text-accent' : 'text-primary'
                  }`}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl ${
                  addon.isAccent ? 'bg-accent/10' : 'bg-primary/10'
                }`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={addOnsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-secondary-foreground/50 mb-4">Ready to start your journey?</p>
          <a
            href="/book-a-call"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-secondary font-medium rounded-full hover:bg-accent/90 transition-colors"
          >
            Book a discovery call
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default YourJourney;
