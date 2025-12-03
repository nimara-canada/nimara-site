import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  Gavel, 
  Banknote, 
  Users, 
  Heart, 
  HandHelping,
  Database,
  ChevronRight
} from 'lucide-react';

const expertiseItems = [
  {
    id: 'governance',
    icon: Gavel,
    title: "Board & Governance",
    description: "Clear roles, rules, and meetings so your board and leaders pull in the same direction.",
    color: 'violet',
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
    icon: Banknote,
    title: "Money, Books & Compliance",
    description: "Basic money systems so you can pass a funder check or audit without panic.",
    color: 'emerald',
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
    icon: Users,
    title: "People & HR",
    description: "Clear rules and steps for the people who work with you.",
    color: 'sky',
    bullets: [
      "Job descriptions and contracts",
      "Hiring and onboarding steps",
      "HR policy in plain language",
      "Performance and feedback basics",
      "Offboarding and records"
    ]
  },
  {
    id: 'fundraising',
    icon: Heart,
    title: "Fundraising & Donor Standards",
    description: "Safe, simple ways to accept, track, and thank gifts.",
    color: 'rose',
    bullets: [
      "Gift acceptance rules",
      "Receipting and CRA-compliant records",
      "Donor data and privacy",
      "Thank-you and stewardship process",
      "Events and online fundraising basics"
    ]
  },
  {
    id: 'volunteers',
    icon: HandHelping,
    title: "Volunteers",
    description: "Clear paths for people who help you, from sign-up to exit.",
    color: 'amber',
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
    icon: Database,
    title: "Systems, Data & Records",
    description: "Simple tools so you can find what you need and show what changed.",
    color: 'teal',
    bullets: [
      "File storage and access rules",
      "Contact list or CRM setup",
      "Basic data protection and backups",
      "Simple dashboards and reports",
      "Retention and destruction of records"
    ]
  }
];

const colorClasses: Record<string, { bg: string; text: string; light: string; border: string }> = {
  violet: { bg: 'bg-violet-500', text: 'text-violet-600', light: 'bg-violet-50', border: 'border-violet-200' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-200' },
  sky: { bg: 'bg-sky-500', text: 'text-sky-600', light: 'bg-sky-50', border: 'border-sky-200' },
  rose: { bg: 'bg-rose-500', text: 'text-rose-600', light: 'bg-rose-50', border: 'border-rose-200' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600', light: 'bg-amber-50', border: 'border-amber-200' },
  teal: { bg: 'bg-teal-500', text: 'text-teal-600', light: 'bg-teal-50', border: 'border-teal-200' }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

type AccordionItemProps = {
  item: typeof expertiseItems[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
};

const AccordionItem = ({ item, isOpen, onToggle, index }: AccordionItemProps) => {
  const headerId = `expertise-header-${index}`;
  const panelId = `expertise-panel-${index}`;
  const Icon = item.icon;
  const colors = colorClasses[item.color];

  return (
    <motion.div 
      variants={itemVariants}
      className={`
        rounded-xl border-2 transition-all duration-300 overflow-hidden
        ${isOpen 
          ? `${colors.light} ${colors.border} shadow-sm` 
          : 'bg-card border-border hover:border-muted-foreground/30 hover:shadow-sm'
        }
      `}
    >
      <button
        onClick={onToggle}
        className="w-full p-5 flex items-start gap-4 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-xl"
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={headerId}
      >
        {/* Icon */}
        <motion.div 
          className={`
            flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300
            ${isOpen ? colors.bg : 'bg-muted'}
          `}
          animate={{ rotate: isOpen ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon 
            size={22} 
            className={`transition-colors duration-300 ${isOpen ? 'text-white' : 'text-muted-foreground'}`} 
          />
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className={`text-base font-semibold transition-colors duration-200 ${
            isOpen ? colors.text : 'text-foreground'
          }`}>
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Toggle icon */}
        <motion.div 
          className={`
            flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300
            ${isOpen ? colors.bg : 'bg-muted'}
          `}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <Minus size={16} className="text-white" strokeWidth={2.5} />
          ) : (
            <Plus size={16} className="text-muted-foreground" strokeWidth={2.5} />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">
              <div className="ml-15 pl-4 border-l-2 border-border">
                <ul className="space-y-2.5">
                  {item.bullets.map((bullet, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 text-card-foreground text-sm leading-relaxed"
                    >
                      <ChevronRight size={14} className={`${colors.text} mt-0.5 flex-shrink-0`} />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Expertise = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const expandAll = () => {
    setOpenItems(expertiseItems.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenItems([]);
  };

  // Split items into two columns for desktop layout
  const midPoint = Math.ceil(expertiseItems.length / 2);
  const leftColumnItems = expertiseItems.slice(0, midPoint);
  const rightColumnItems = expertiseItems.slice(midPoint);

  return (
    <section 
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-muted"
      aria-labelledby="expertise-heading"
      id="expertise"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
            Our Domains
          </span>
          
          <h2
            id="expertise-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6"
          >
            What we help you fix
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            We focus on the boring but critical systems that keep your nonprofit safe, fundable, and ready for growth.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div 
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            type="button"
            onClick={expandAll}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-3 py-1.5"
          >
            Expand all
          </button>
          <span className="text-border">|</span>
          <button
            type="button"
            onClick={collapseAll}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-3 py-1.5"
          >
            Collapse all
          </button>
        </motion.div>

        {/* Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Left Column */}
          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {leftColumnItems.map((item, index) => (
              <AccordionItem 
                key={item.id} 
                item={item} 
                isOpen={openItems.includes(index)}
                onToggle={() => toggleItem(index)}
                index={index}
              />
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {rightColumnItems.map((item, index) => {
              const globalIndex = index + midPoint;
              return (
                <AccordionItem 
                  key={item.id} 
                  item={item} 
                  isOpen={openItems.includes(globalIndex)}
                  onToggle={() => toggleItem(globalIndex)}
                  index={globalIndex}
                />
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm">
            <div className="flex -space-x-2" aria-hidden="true">
              {expertiseItems.slice(0, 4).map((item, i) => {
                const colors = colorClasses[item.color];
                return (
                  <div 
                    key={i}
                    className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center ring-2 ring-card`}
                  >
                    <item.icon size={14} className="text-white" />
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">All 6 domains</span> covered in our Health Check
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Get your Health Check
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
