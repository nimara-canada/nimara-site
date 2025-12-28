import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const faqs = [
  {
    question: "Do We Have To Start With A Health Check?",
    answer: "No. If you have one urgent problem (a scary email, audit, funder deadline, policy gap), the Urgent Fix path handles it in 1–4 weeks without a full health check. If you want to upgrade systems across multiple areas (governance, finance, HR, programs), you'd start with a health check to see where each system stands. From there, we design the right setup for you."
  },
  {
    question: "What's The Difference Between Urgent Fix And Build My Systems?",
    answer: "Urgent Fix: One clear problem, 1–4 weeks. You get a small bundle of tools, files, and steps that solve that problem. Build My Systems: Bigger questions about how your org runs. Start with a free 4-minute check, then a paid deep check ($2,500) to see where you stand. Then 8–12 weeks to set up systems that make you audit- and funder-ready."
  },
  {
    question: "Who Is Nimara For? Are We The Right Size?",
    answer: "We work with small and mid-size nonprofits in Canada: Usually 2–100 staff (mix of paid staff and active volunteers). Doing real community or program work. Big enough that audits, funders, and HR issues are on the table. If you're very early (no stable staff, still just an idea), we'll usually share light tools and point you to other supports instead of selling a full install."
  },
  {
    question: "What Kinds Of Problems Can You Help With?",
    answer: "We work across 7 areas: Board & Governance (rules, roles, minutes, policies), Money & Compliance (finance systems, grants, audits), People & HR (staff files, hiring, safety), Programs & Services (intake, delivery, safety logs), Fundraising & Donors (gift acceptance, receipting, records), Volunteers (agreements, screening, training), and Systems & Records (files, dashboards, data protection)."
  },
  {
    question: "How Long Does It Take, And What Do We Actually Get?",
    answer: "Urgent Fix: 1–4 weeks. You get the policies, templates, trackers, and steps needed to fix that one problem. Build My Systems: ~2 weeks for the deep check, then 8–12 weeks per system. You get a clear plan and tools your team can run without us. No 'advice only.' Every project ends in files and routines that live in your systems."
  },
  {
    question: "How Does Pricing Work? Can A Funder Pay For This?",
    answer: "We use flat project fees, not open-ended hourly billing. Urgent Fix = smaller fixed fee for one problem. Build My Systems = deep check ($2,500) plus fixed fees for each system setup. Yes, funders can pay. Many orgs use capacity-building grants, admin lines, or project funds. We can give you a simple one-page description for proposals."
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
