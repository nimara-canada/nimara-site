import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'Short Health Check',
    text: 'We start with a simple Health Check that looks at your board, money, people, fundraising, volunteers, and tools. No hunting for long documents.'
  },
  {
    number: 2,
    title: 'Clear, small workplan',
    text: 'We turn what we learn into a short workplan. It shows the first jobs to do, who is involved, and when things will be done.'
  },
  {
    number: 3,
    title: 'Real tools you can use',
    text: 'We build real things with you: plain-language policies, checklists, templates, and simple systems your team can use every week.'
  },
  {
    number: 4,
    title: 'Support and a safety net',
    text: 'When the main build is done, we stay for 3 months to help you use the new tools. If we do not finish the work we agreed, you get your money back.'
  }
];

const promises = [
  { text: "Refund if we don't finish the work", highlight: true },
  { text: '3 months of support included', highlight: false },
  { text: 'Optional 12-month follow-up', highlight: false }
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN */}
          <motion.div 
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
          >
            {/* Label */}
            <span className="text-xs font-medium tracking-widest text-primary uppercase mb-4 block">
              How Nimara Helps
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              One simple loop we run with every nonprofit
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              We don't guess—we run the same clear loop each time: check, plan, build, support. 
              The only thing that changes is how much we fix at once.
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
              <div className="absolute left-4 top-10 bottom-10 w-px bg-border" />

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
                    <div className="flex gap-6">
                      {/* Step number */}
                      <div className="flex-shrink-0 relative z-10">
                        <motion.div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
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
                        <h3 className={`text-lg font-semibold mb-2 transition-colors duration-200 ${
                          isHovered ? 'text-primary' : 'text-foreground'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
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
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Check → Plan → Build → Support
                  </span>
                  <br />
                  The complete Nimara loop
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
