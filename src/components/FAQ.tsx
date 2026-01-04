import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What does Nimara do?",
    answer: "We help Canadian nonprofits set up simple systems for money, files, and reporting — so funding is easier to win and manage."
  },
  {
    question: "Where should we start?",
    answer: "Start with Get Started. We'll point you to the right first step: Grant Setup or an Organization Check."
  },
  {
    question: "Is this an audit?",
    answer: "No. We don't inspect you. We help you set up working systems that your team can run."
  },
  {
    question: "Is this bookkeeping or accounting?",
    answer: "No. We don't do your books or taxes. We organize how you track and store records so it's easier to report."
  },
  {
    question: "Is this only for one grant?",
    answer: "No. We set it up once so you can reuse it for every grant."
  },
  {
    question: "What is \"Grant Setup\"?",
    answer: "A short project (about 2 weeks) where we set up a clear folder system, simple tracking, and a routine your team can follow."
  },
  {
    question: "What is an \"Organization Check\"?",
    answer: "A full review (2–4 weeks) that shows what's working, what's missing, and what to fix first — across your whole nonprofit."
  },
  {
    question: "What happens after the Organization Check?",
    answer: "You get a clear plan. If you want help building what comes next, we offer bundles to put the systems in place."
  },
  {
    question: "Do you work with small nonprofits or volunteer-led teams?",
    answer: "Yes. We keep things simple, clear, and easy to run — even with small teams."
  },
  {
    question: "What if we're not sure we can afford this?",
    answer: "Start with the free check. If you can fix it yourself, we'll tell you. If you need help, we'll show you the smallest next step."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-20 md:py-28 lg:py-36 bg-muted/30 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Common Questions
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="faq-heading"
              className="text-3xl sm:text-4xl font-light tracking-tight leading-[1.1] mb-5"
            >
              Questions
              <br />
              <span className="font-normal italic text-muted-foreground">you might have</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Everything you need to know about working with Nimara.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              <Link
                to="/start-here"
                className="group inline-flex items-center gap-3 text-foreground font-medium"
              >
                <span className="group-hover:text-primary transition-colors">Get Started</span>
                <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
              </Link>
              <Link
                to="/free-check"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Try the free check →
              </Link>
            </motion.div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                // Staggered delay: 100ms between each item after initial 0.3s
                const staggerDelay = 0.3 + index * 0.1;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: staggerDelay,
                      ease: [0.16, 1, 0.3, 1] // Dropbox easing
                    }}
                    className="border-t border-border"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full py-6 flex items-start gap-5 text-left focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      {/* Number */}
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: staggerDelay + 0.1,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className={`
                          text-lg font-extralight tabular-nums transition-colors duration-300 mt-0.5
                          ${isOpen ? 'text-primary' : 'text-muted-foreground/40 group-hover:text-muted-foreground/60'}
                        `}
                      >
                        0{index + 1}
                      </motion.span>

                      {/* Question */}
                      <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: staggerDelay + 0.05,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className={`
                          flex-1 text-lg font-medium transition-colors duration-300
                          ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'}
                        `}
                      >
                        {faq.question}
                      </motion.span>

                      {/* Toggle */}
                      <motion.span 
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={isInView ? { opacity: 1, rotate: 0 } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: staggerDelay + 0.15,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className={`
                          text-2xl font-extralight transition-colors duration-300
                          ${isOpen ? 'text-primary' : 'text-muted-foreground/40 group-hover:text-muted-foreground'}
                        `}
                      >
                        {isOpen ? '−' : '+'}
                      </motion.span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25, delay: 0.1 }}
                            className="pb-8 pl-10"
                          >
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
              <div className="border-t border-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
