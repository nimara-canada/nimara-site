import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.42, 0, 0.58, 1] as const, delay: 0.3 },
  },
};

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
    description: "We close out the project with a handover and next steps. For about three months, we are available for light support and questions. We also ask for feedback so we can improve the Nimara model.",
  },
];

const addOns = [
  {
    title: "12-month Evaluation & Support",
    description: "For a small add-on fee, our team stays close for up to 12 months. We check in at agreed points, help you see what is working, and adjust tools or processes where needed.",
    color: "border-accent bg-accent/5 hover:bg-accent/10",
    badge: "bg-accent/20 text-accent",
  },
  {
    title: "Fractional Partner (Ongoing)",
    description: "For organizations that need more hands-on help, you can hire a Nimara Fractional Partner on an ongoing basis. This person helps manage and update the systems we installed.",
    color: "border-primary bg-primary/5 hover:bg-primary/10",
    badge: "bg-primary/20 text-primary",
  },
];

const YourJourney: React.FC = () => {
  const sectionRef = useRef(null);
  const addOnsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const addOnsInView = useInView(addOnsRef, { once: true, margin: "-50px" });

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-20"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.1] mb-6">
            Your Journey{" "}
            <span className="italic">with Nimara</span>
          </h2>
          <p className="text-lg text-body-muted max-w-3xl leading-relaxed">
            Most projects follow the same basic path. The details change by organization, 
            but these are the main steps from 'we need help' to 'this is working in real life.'
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={sectionRef} className="mb-24">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={lineVariants}
              className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 -translate-y-1/2 origin-left"
            />

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="relative z-10"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-20 last:mb-0`}
                >
                  <div className={`flex items-start gap-6 max-w-xl ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-serif font-medium shadow-lg">
                        {step.number}
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: index % 2 === 0 ? 4 : -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-body-muted leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Timeline */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:hidden relative"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10 origin-top"
            />

            <div className="relative z-10">
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="flex gap-6 mb-10 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-xl font-serif font-medium shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-body-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Add-ons Section */}
        <div ref={addOnsRef}>
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />
          
          <motion.div
            initial="hidden"
            animate={addOnsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                Optional Add-ons
              </span>
              <p className="text-body-muted max-w-2xl">
                Some organizations want deeper follow-up. These add-ons are optional and come with a separate simple fee.
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
              {addOns.map((addon) => (
                <motion.div
                  key={addon.title}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <div className={`h-full p-8 rounded-2xl border-2 transition-all ${addon.color}`}>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${addon.badge}`}>
                      Add-on
                    </span>
                    <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                      {addon.title}
                    </h3>
                    <p className="text-body-muted leading-relaxed text-sm">
                      {addon.description}
                    </p>
                    
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YourJourney;
