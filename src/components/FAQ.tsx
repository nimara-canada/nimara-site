import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "Do we have to start with a health check?",
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 lg:py-40 bg-slate-50 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN - Editorial intro */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm tracking-widest text-slate-500 uppercase mb-4">
              Common questions
            </p>

            <h2
              id="faq-heading"
              className="text-4xl md:text-5xl font-serif font-medium text-slate-900 leading-[1.1] mb-6"
            >
              Questions you might have
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Everything you need to know about working with Nimara. Can't find what you're looking for?
            </p>

            <a
              href="/book-a-call"
              className="group inline-flex items-center gap-2 text-slate-900 font-medium"
            >
              <span className="relative">
                Book a call to ask us directly
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-slate-300 group-hover:bg-slate-900 transition-colors duration-300" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* RIGHT COLUMN - FAQ accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="border-b border-slate-200"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full py-6 flex items-start gap-5 text-left focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      {/* Number */}
                      <span className={`
                        text-lg font-light tabular-nums transition-colors duration-300 mt-0.5
                        ${isOpen ? 'text-purple-600' : 'text-slate-300 group-hover:text-slate-400'}
                      `}>
                        0{index + 1}
                      </span>

                      {/* Question */}
                      <span className={`
                        flex-1 text-lg font-medium transition-colors duration-300
                        ${isOpen ? 'text-purple-600' : 'text-slate-900 group-hover:text-purple-600'}
                      `}>
                        {faq.question}
                      </span>

                      {/* Toggle */}
                      <div className={`
                        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                        ${isOpen ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-purple-50'}
                      `}>
                        {isOpen ? (
                          <Minus className="w-4 h-4" strokeWidth={2} />
                        ) : (
                          <Plus className="w-4 h-4" strokeWidth={2} />
                        )}
                      </div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-10">
                            <p className="text-slate-600 leading-relaxed max-w-2xl">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
