import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus } from 'lucide-react';

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

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  return (
    <section 
      className="py-24 md:py-36 lg:py-44 bg-muted/30 relative overflow-hidden"
      aria-labelledby="expertise-heading"
      id="expertise"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-background via-muted/30 to-muted/30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header - editorial style, left-aligned */}
        <motion.div
          className="max-w-2xl mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
            What we cover
          </p>

          <h2
            id="expertise-heading"
            className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-[1.1] mb-6"
          >
            Seven domains that keep nonprofits running
          </h2>

          <p className="text-lg text-body leading-relaxed">
            We focus on the boring but critical systems that keep your nonprofit safe, fundable, and easier to run. Here's what we help you fix.
          </p>
        </motion.div>

        {/* Accordion list - clean, minimal */}
        <div className="max-w-4xl">
          {expertiseItems.map((item, index) => {
            const isOpen = openItems.includes(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-b border-border/50"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-6 flex items-start gap-6 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  {/* Number */}
                  <span className={`
                    text-2xl font-light tabular-nums transition-colors duration-300
                    ${isOpen ? 'text-primary' : 'text-muted-foreground/50 group-hover:text-muted-foreground'}
                  `}>
                    0{index + 1}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`
                      text-xl md:text-2xl font-serif font-medium mb-1 transition-colors duration-300
                      ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'}
                    `}>
                      {item.title}
                    </h3>
                    <p className="text-body text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* Toggle */}
                  <div className={`
                    flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                    ${isOpen ? 'bg-primary text-white' : 'bg-muted text-muted-foreground group-hover:bg-primary/10'}
                  `}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" strokeWidth={2} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={2} />
                    )}
                  </div>
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
                      <div className="pb-8 pl-16 md:pl-20">
                        <ul className="space-y-3">
                          {item.bullets.map((bullet, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-3 text-body text-sm"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
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
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-20 max-w-4xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 rounded-3xl bg-card border border-border/50">
            <div>
              <p className="text-lg font-medium text-foreground mb-1">
                All 7 domains covered in one check
              </p>
              <p className="text-sm text-muted-foreground">
                The free 4-minute check shows where you stand in each area
              </p>
            </div>
            <a
              href="/organizational-health-check"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-secondary-background text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-secondary-background/20 whitespace-nowrap"
            >
              Start the free check
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
