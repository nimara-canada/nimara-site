import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const faqs = [
  {
    question: "Do we have to start with a Quick Check?",
    answer: "No. If you have one problem you need to fix fast (like an audit coming up or a funder asking questions), we can help with that first. If you want to look at the whole picture — how your board, money, staff, and programs are set up — the Quick Check is a good place to start. It only takes 5 minutes and it's free."
  },
  {
    question: "What's the difference between Quick Check and Deep Check?",
    answer: "The Quick Check is free. It takes about 5 minutes and gives you a score right away. The Deep Check costs $2,500. We look at your actual documents and give you a full report. It takes 2–4 weeks. Think of it this way: Quick Check tells you where to look. Deep Check tells you exactly what to fix."
  },
  {
    question: "Is Nimara right for us? What size do we need to be?",
    answer: "We work with nonprofits in Canada — usually groups with 0–50 staff. If you deal with funders, audits, or staff issues, we can probably help. If you're just getting started and don't have a team yet, we'll point you to free tools instead."
  },
  {
    question: "What kinds of problems can you help with?",
    answer: "We help with 7 main areas: Board (policies, roles, meeting notes), Money (budgets, grants, audits), People (hiring, staff files, safety), Programs (how you track and deliver services), Fundraising (donations, receipts, records), Volunteers (agreements, screening), and Records (files, folders, data safety)."
  },
  {
    question: "How long does it take? What do we get?",
    answer: "Quick Check: 5 minutes, instant results. Deep Check: 2–4 weeks. After that, fixing things usually takes 8–12 weeks per area. You always get real documents and tools you can keep and use — not just advice."
  },
  {
    question: "How much does it cost? Can a funder pay for this?",
    answer: "Quick Check is free. Deep Check is $2,500. After that, we give you a flat price for each area you want to fix — no surprise bills. Yes, funders can pay for this. Many groups use grants or admin money. We can give you a one-page summary for your proposal."
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

            <motion.a
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="/book-a-call"
              className="group inline-flex items-center gap-3 text-foreground font-medium"
            >
              <span className="group-hover:text-primary transition-colors">Book a call to ask us directly</span>
              <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </motion.a>
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
