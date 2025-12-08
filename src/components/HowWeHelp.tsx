import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: "Check what's really going on",
    text: "For Fast Help, we start with a short intake around one urgent problem. For system installs, we run the Nimara Organizational Health Check (NOHC) across your core systems so we know where each one stands."
  },
  {
    number: 2,
    title: "Clear, small workplan",
    text: "We turn what we learn into a short workplan. For Fast Help, that's one mini-bundle. For system installs, it's 1–2 system bundles with clear jobs, owners, and dates."
  },
  {
    number: 3,
    title: "Real tools you can use",
    text: "We build real things with you: plain-language policies, checklists, templates, and simple systems your team can use every week."
  },
  {
    number: 4,
    title: "Support and a safety net",
    text: "When the main build is done, we stay long enough to help you use the new tools in real life. Fast Help projects include light follow-up. Bigger system installs usually come with up to 3 months of support and a clear money-back guarantee if we don't finish the work we agreed."
  }
];

const promises = [
  { text: "Money-back guarantee on eligible system installs", highlight: true },
  { text: "Support while you start using the new tools", highlight: false },
  { text: "Optional 12-month follow-up on bigger projects", highlight: false }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const HowWeHelp = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-muted to-background"
      id="how-we-help"
    >
      {/* Subtle accent line removed for smooth transition */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          
          {/* LEFT COLUMN */}
          <motion.div 
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-background shadow-md mb-4">
              <span className="text-xs font-semibold tracking-widest text-primary-foreground uppercase">
                How Nimara Helps
              </span>
            </div>

            <h2 className="heading-2 text-foreground mb-4 sm:mb-6">
              One simple loop behind every Nimara project
            </h2>

            <p className="text-subtitle max-w-md mb-6 sm:mb-8">
              We don't guess. Behind every project we run the same clear loop: check what's going on, plan, build, support. 
              The only thing that changes is which path you're on and how deep we go.
            </p>

            {/* Promise list */}
            <div className="space-y-3">
              {promises.map((promise, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 py-3 transition-colors duration-200 ${
                    promise.highlight ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    promise.highlight ? 'bg-primary' : 'bg-border'
                  }`}>
                    <Check
                      size={12}
                      className={promise.highlight ? 'text-primary-foreground' : 'text-muted-foreground'}
                      strokeWidth={3}
                    />
                  </div>
                  <span className={`text-sm ${promise.highlight ? 'font-semibold' : 'font-medium'}`}>
                    {promise.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN – STEP CARDS */}
          <div className="lg:col-span-7">
            <motion.ol 
              className="relative space-y-6 list-none p-0 m-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {/* Timeline line */}
              <div className="absolute left-3 sm:left-4 top-10 bottom-10 w-px bg-border" />

              {steps.map((step, index) => {
                const isLastStep = index === steps.length - 1;
                const isHovered = hoveredStep === index;
                
                return (
                  <motion.li
                    key={step.number}
                    className="relative"
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <div className="flex gap-4 sm:gap-6">
                      {/* Step number */}
                      <div className="flex-shrink-0 relative z-10">
                        <motion.div 
                          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold ${
                            isLastStep 
                              ? 'bg-accent text-accent-foreground' 
                              : 'bg-primary text-primary-foreground'
                          }`}
                          animate={{ scale: isHovered ? 1.1 : 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {step.number}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <h3 className={`text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 transition-colors duration-200 ${
                          isHovered ? 'text-primary' : 'text-foreground'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-body leading-relaxed">
                          {step.text}
                        </p>
                        
                        {/* Guarantee for last step */}
                        {isLastStep && (
                          <div className="mt-4 inline-flex items-center gap-2 text-primary">
                            <Check size={16} strokeWidth={2.5} />
                            <span className="text-sm font-medium">
                              Money-back guarantee
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ol>

            {/* Footer CTA */}
            <motion.div 
              className="mt-10 pt-8 border-t border-border"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <p className="text-sm text-body-muted">
                <span className="font-medium text-foreground">
                  Check → Plan → Build → Support
                </span>
                <br />
                The simple Nimara loop behind Path A and Path B
              </p>
                <motion.a 
                  href="https://www.notion.so/Nimara-Refund-Policy-2bc227f1ee3a80f299fbc42501d338ac?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Check Out our Refund Policy
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
