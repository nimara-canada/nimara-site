import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

const faqs = [
  {
    question: "How long does this take?",
    answer: "Most buildouts take 4–8 weeks, depending on scope. A single area can be done in 2–3 weeks."
  },
  {
    question: "What if it doesn't work?",
    answer: "If we don't deliver what we scoped, you get your money back. No fine print."
  },
  {
    question: "Can a grant pay for this?",
    answer: "Yes. We invoice as capacity building, which is eligible under most operational and capacity grants."
  },
  {
    question: "Do you write grants?",
    answer: "No. We don't write grants or do fundraising. We build the systems that make grant management easier."
  },
  {
    question: "Will you judge us for being messy?",
    answer: "No. We've seen it all. Most nonprofits are messy — not because they don't care, but because no one built the system."
  },
];

export default function SimpleFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="faq"
      className="py-24 md:py-32 lg:py-40 bg-background"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight"
          >
            Questions
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <dl>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="border-b border-border/50"
              >
                <dt>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-6 md:py-7 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="text-base md:text-lg font-normal text-foreground pr-4">
                      {faq.question}
                    </span>

                    <span 
                      className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-foreground flex items-center justify-center shrink-0 transition-transform duration-200"
                      aria-hidden="true"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        className="text-background"
                      >
                        <path 
                          d="M8 3V13M3 8H13" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-16">
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
