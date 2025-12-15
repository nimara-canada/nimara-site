import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const expertiseItems = [
  {
    id: 'governance',
    title: "Board & Governance",
    description: "Clear roles, rules, and meetings so your board and leaders pull in the same direction.",
    bullets: [
      "Board roles and responsibilities",
      "Simple yearly board calendar and agendas",
      "Conflict of interest and code of conduct",
      "Signing authority and decision rules",
      "ED review and simple succession plan"
    ]
  },
  {
    id: 'finance',
    title: "Money, Books & Compliance",
    description: "Basic money systems so you can pass a funder check or audit without panic.",
    bullets: [
      "Budget and approval process",
      "Month-end close and reconciliations",
      "Spending and signing controls",
      "Financial reports for board and funders",
      "Audit / review readiness checklist"
    ]
  },
  {
    id: 'hr',
    title: "People & HR",
    description: "Clear rules and steps for the people who work with you.",
    bullets: [
      "Job descriptions and contracts",
      "Hiring and onboarding steps",
      "HR policy in plain language",
      "Performance and feedback basics",
      "Offboarding and records"
    ]
  },
  {
    id: 'programs',
    title: "Programs & Services",
    description: "Clear, safe ways to plan, deliver, and review your programs.",
    bullets: [
      "Simple list of programs and who they're for",
      "Clear intake and eligibility steps",
      "Basic program delivery checklists",
      "Incident and safety logging",
      "A simple way to review what's working each year"
    ]
  },
  {
    id: 'fundraising',
    title: "Fundraising & Donors",
    description: "Safe, simple ways to accept, record, receipt, and thank gifts.",
    bullets: [
      "Gift acceptance rules",
      "Simple donor and funder records",
      "Receipting and acknowledgment checklists",
      "A basic log of gifts and grants",
      "Simple reporting for board and funders"
    ]
  },
  {
    id: 'volunteers',
    title: "Volunteers",
    description: "Clear paths for people who help you, from sign-up to exit.",
    bullets: [
      "Volunteer roles and agreements",
      "Recruitment and screening",
      "Training and supervision",
      "Safety and incident response",
      "Recognition and exit steps"
    ]
  },
  {
    id: 'systems',
    title: "Systems, Data & Records",
    description: "Simple tools so you can find what you need and protect records.",
    bullets: [
      "Shared drive and folder structure",
      "File and folder naming rules",
      "Where key records live",
      "Simple dashboards for funders and board",
      "A basic log of changes and decisions"
    ]
  }
];

export const Expertise = () => {
  const [openItems, setOpenItems] = useState<string[]>([expertiseItems[0].id]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-36 bg-muted/30 overflow-hidden"
      aria-labelledby="expertise-heading"
      id="expertise"
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
        <div className="mb-14 lg:mb-18">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              What We Cover
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="expertise-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Seven Domains
            <br />
            <span className="font-normal italic text-muted-foreground">That Keep Nonprofits Running</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            We Focus On The Boring But Critical Systems That Keep Your Nonprofit Safe, 
            Fundable, And Easier To Run.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {expertiseItems.map((item, index) => {
            const isOpen = openItems.includes(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="border-t border-border"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-6 lg:py-8 flex items-start gap-6 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  {/* Number */}
                  <span className={`
                    text-2xl lg:text-3xl font-extralight tabular-nums transition-colors duration-300
                    ${isOpen ? 'text-primary' : 'text-muted-foreground/40 group-hover:text-muted-foreground/60'}
                  `}>
                    0{index + 1}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`
                      text-xl lg:text-2xl font-medium mb-2 transition-colors duration-300
                      ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'}
                    `}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm lg:text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* Toggle indicator */}
                  <span className={`
                    text-2xl font-extralight transition-colors duration-300 mt-1
                    ${isOpen ? 'text-primary' : 'text-muted-foreground/40 group-hover:text-muted-foreground'}
                  `}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-14 lg:pl-20">
                        <ul className="space-y-2">
                          {item.bullets.map((bullet, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-3 text-muted-foreground text-sm"
                            >
                              <span className="w-1 h-1 rounded-full bg-primary/50" />
                              {bullet}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          <div className="border-t border-border" />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-lg font-medium text-foreground mb-1">
                All 7 domains covered in one check
              </p>
              <p className="text-sm text-muted-foreground">
                The free 4-minute check shows where you stand in each area
              </p>
            </div>
            <a
              href="/book-a-call"
              className="group inline-flex items-center gap-3 text-foreground font-medium"
            >
              <span className="group-hover:text-primary transition-colors">Start the free check</span>
              <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
