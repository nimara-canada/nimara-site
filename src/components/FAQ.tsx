import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "Do we have to start with a Health Check?",
    answer: "No. If you have one urgent problem (a scary email, audit, funder deadline, policy gap), the Urgent Fix path handles it in 1–4 weeks without a full health check. If you want to upgrade systems across multiple areas (governance, finance, HR, programs), you'd start with a health check to see where each system stands. From there, we design the right setup for you."
  },
  {
    question: "What's the difference between Urgent Fix and Build My Systems?",
    answer: "Urgent Fix: One clear problem, 1–4 weeks. You get a small bundle of tools, files, and steps that solve that problem. Build My Systems: Bigger questions about how your org runs. Start with a free 4-minute check, then a paid deep check ($2,500) to see where you stand. Then 8–12 weeks to set up systems that make you audit- and funder-ready."
  },
  {
    question: "Who is Nimara for? Are we the right size?",
    answer: "We work with small and mid-size nonprofits in Canada: Usually 2–100 staff (mix of paid staff and active volunteers). Doing real community or program work. Big enough that audits, funders, and HR issues are on the table. If you're very early (no stable staff, still just an idea), we'll usually share light tools and point you to other supports instead of selling a full install."
  },
  {
    question: "What kinds of problems can you help with?",
    answer: "We work across 7 areas: Board & Governance (rules, roles, minutes, policies), Money & Compliance (finance systems, grants, audits), People & HR (staff files, hiring, safety), Programs & Services (intake, delivery, safety logs), Fundraising & Donors (gift acceptance, receipting, records), Volunteers (agreements, screening, training), and Systems & Records (files, dashboards, data protection)."
  },
  {
    question: "How long does it take, and what do we actually get?",
    answer: "Urgent Fix: 1–4 weeks. You get the policies, templates, trackers, and steps needed to fix that one problem. Build My Systems: ~2 weeks for the deep check, then 8–12 weeks per system. You get a clear plan and tools your team can run without us. No 'advice only.' Every project ends in files and routines that live in your systems."
  },
  {
    question: "How does pricing work? Can a funder pay for this?",
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
      className="relative py-24 md:py-32 bg-background overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-6"
            >
              Common Questions
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] mb-5"
            >
              Questions
              <br />
              <span className="text-body-muted">you might have</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-body mb-8"
            >
              Everything you need to know about working with Nimara.
            </motion.p>

            <motion.a
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="/book-a-call"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-150"
            >
              <span>Book a call to ask us directly</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className="border-t border-border"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full py-6 flex items-start gap-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded group"
                      aria-expanded={isOpen}
                    >
                      {/* Number */}
                      <span className={`
                        text-sm font-semibold tabular-nums transition-colors duration-200 mt-0.5
                        ${isOpen ? 'text-primary' : 'text-body-muted group-hover:text-body'}
                      `}>
                        0{index + 1}
                      </span>

                      {/* Question */}
                      <span className={`
                        flex-1 text-base font-semibold tracking-tight transition-colors duration-200
                        ${isOpen ? 'text-foreground' : 'text-foreground group-hover:text-primary'}
                      `}>
                        {faq.question}
                      </span>

                      {/* Toggle Icon */}
                      <span className={`
                        w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-200
                        ${isOpen 
                          ? 'border-primary bg-primary text-primary-foreground' 
                          : 'border-border text-body-muted group-hover:border-primary group-hover:text-primary'
                        }
                      `}>
                        <span className="text-sm font-medium leading-none">
                          {isOpen ? '−' : '+'}
                        </span>
                      </span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pl-11">
                            <p className="text-base text-body leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
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
