import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from '@/constants/urls';

const faqs = [
  {
    question: "What does Nimara do?",
    answer: "We help Canadian nonprofits set up simple systems for boards, grants, teams, volunteers, and files. You pick the areas you need. We build the systems. We train your team to run them."
  },
  {
    question: "Is this an audit?",
    answer: "No. We're not here to grade you or find problems to report. We're here to fix what's not working — and build what's missing. No judgment. Just solutions."
  },
  {
    question: "What if it doesn't work?",
    answer: "If we don't deliver what we promised, you get your money back. No fine print. No hoops. We only win when your systems actually work."
  },
  {
    question: "Can this be funded by a grant?",
    answer: "Yes. We invoice as capacity building, which is eligible under most operational and capacity grants. Many clients use grant funding to cover part or all of the cost."
  },
  {
    question: "How do I know where to start?",
    answer: "Take the Free Health Check. It takes 10 minutes and shows you where your gaps are. Or book a Fit Call and we'll figure it out together."
  },
  {
    question: "Will you judge us for being messy?",
    answer: "No. We've seen it all. Most nonprofits are messy — not because they don't care, but because no one showed them what to build. No shame. Just solutions."
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
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6"
            >
              Common Questions
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="faq-heading"
              className="text-3xl sm:text-4xl font-light tracking-tight leading-[1.1] mb-5 text-foreground"
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
              Honest answers. No surprises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              <a
                href={CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-foreground font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
              >
                <span className="group-hover:text-primary transition-colors">Book a 20-min Fit Call</span>
                <span 
                  className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" 
                  aria-hidden="true"
                />
              </a>
              <a
                href={TYPEFORM_HEALTH_CHECK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
              >
                Or try the Free Health Check →
              </a>
            </motion.div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-8">
            <dl className="space-y-0">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const staggerDelay = 0.3 + index * 0.1;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: staggerDelay,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="border-t border-border"
                  >
                    <dt>
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full py-6 flex items-start gap-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded group"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        id={`faq-question-${index}`}
                      >
                        {/* Number */}
                        <span 
                          className={`
                            text-lg font-extralight tabular-nums transition-colors duration-300 mt-0.5
                            ${isOpen ? 'text-primary' : 'text-muted-foreground/40 group-hover:text-muted-foreground/60'}
                          `}
                          aria-hidden="true"
                        >
                          0{index + 1}
                        </span>

                        {/* Question */}
                        <span 
                          className={`
                            flex-1 text-lg font-medium transition-colors duration-300
                            ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'}
                          `}
                        >
                          {faq.question}
                        </span>

                        {/* Toggle */}
                        <span 
                          className={`
                            text-2xl font-extralight transition-colors duration-300
                            ${isOpen ? 'text-primary' : 'text-muted-foreground/40 group-hover:text-muted-foreground'}
                          `}
                          aria-hidden="true"
                        >
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                    </dt>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.dd
                          id={`faq-answer-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-10">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.dd>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
              <div className="border-t border-border" aria-hidden="true" />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};