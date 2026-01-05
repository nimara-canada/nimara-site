import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
];

const HowItWorksFAQ: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-24 bg-background overflow-hidden"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-light tracking-tight text-center"
          >
            Common questions
          </motion.h2>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`} 
                className="border border-border rounded-lg overflow-hidden bg-muted/20"
              >
                <AccordionTrigger className="px-5 py-4 text-left hover:no-underline hover:bg-muted/30 transition-colors">
                  <span className="font-medium text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 pt-1">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksFAQ;
