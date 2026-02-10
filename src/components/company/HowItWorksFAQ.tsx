import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from '@/constants/urls';

const faqs = [
  {
    question: "How long does a project take?",
    answer: "Most projects take 2–4 weeks. Grant Setup is usually about 2 weeks. Organization Check takes 2–4 weeks depending on size."
  },
  {
    question: "Do I need to be tech-savvy?",
    answer: "No. We use simple tools you already know (like Google Drive or Excel). We teach your team how to use what we build."
  },
  {
    question: "What if I'm not sure which path is right?",
    answer: "Start with the free Health Check or just reach out. We'll help you figure out what makes sense."
  },
  {
    question: "Can you work with our current tools?",
    answer: "Yes. We work with what you have. No need to buy new software."
  },
  {
    question: "What happens after the project ends?",
    answer: "You own everything we build. We hand over full documentation and training. We're also available for follow-up questions."
  },
  {
    question: "Is there a guarantee?",
    answer: "Yes. If you're not satisfied with the work, we'll refund your fee — no questions asked."
  }
];

const HowItWorksFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-background overflow-hidden"
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Header & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-nim-mint" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  FAQ
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
                Common <span className="italic text-muted-foreground">questions</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Can't find what you're looking for? Let's talk.
              </p>

              {/* CTAs */}
              <div className="space-y-3">
                <Button 
                  asChild
                  className="w-full bg-nim-purple hover:bg-nim-purple/90 text-white rounded-full group"
                >
                  <a href="/capacity-buildout">
                    Book a 20-min Fit Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <a 
                  href={TYPEFORM_HEALTH_CHECK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  Or try the Free Health Check
                  <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="border-t border-border"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 flex items-start justify-between text-left group"
                  >
                    <div className="flex items-start gap-4">
                      <span className={`text-sm font-light transition-colors ${
                        openIndex === index ? 'text-nim-purple' : 'text-muted-foreground'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-lg font-medium group-hover:text-nim-purple transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`flex-shrink-0 ml-4 transition-colors ${
                      openIndex === index ? 'text-nim-purple' : 'text-muted-foreground'
                    }`}>
                      {openIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pb-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              {/* Bottom border for last item */}
              <div className="border-t border-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksFAQ;
