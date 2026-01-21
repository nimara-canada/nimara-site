import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
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
    answer: "Take the Free Health Check. It takes 6 minutes and shows you where your gaps are. Or book a Fit Call and we'll figure it out together."
  },
  {
    question: "Will you judge us for being messy?",
    answer: "No. We've seen it all. Most nonprofits are messy — not because they don't care, but because no one showed them what to build. No shame. Just solutions."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-background"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2
          id="faq-heading"
          className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-foreground mb-8 sm:mb-12 md:mb-16 tracking-[-0.03em] leading-[1.05]"
        >
          Questions?
        </h2>

        {/* FAQ Items */}
        <dl>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-border/50"
              >
                <dt>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-4 sm:py-5 md:py-6 lg:py-7 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    {/* Question */}
                    <span className="text-sm sm:text-base md:text-lg font-normal text-foreground pr-3 sm:pr-4">
                      {faq.question}
                    </span>

                    {/* Plus/Minus Button */}
                    <span 
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-foreground flex items-center justify-center shrink-0 transition-transform duration-200"
                      aria-hidden="true"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        className="text-background sm:w-4 sm:h-4"
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

                {/* Answer */}
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
                      <div className="pb-4 sm:pb-5 md:pb-6 pr-10 sm:pr-12 md:pr-16">
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};
