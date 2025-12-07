import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  ChevronDown, 
  MessageCircleQuestion,
  Search,
  ArrowRight
} from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
  category: 'getting-started' | 'process' | 'pricing' | 'support';
};

const faqs: FaqItem[] = [
  {
    question: "Do we have to start with a health check?",
    answer: "Short answer: No. If you have one urgent problem (a scary email, audit, funder deadline, policy gap), we use Fast Help – a short project that does not require a full health check. If you want to upgrade your systems (finance, governance, HR, programs), we start with the Nimara Organizational Health Check (NOHC). The health check shows where each system sits, then we design a system install around that.",
    category: 'getting-started'
  },
  {
    question: "What's the difference between Fast Help and a Health Check & Systems project?",
    answer: "Fast Help (Path A): One clear problem, 1–4 weeks. You get a small 'bundle' of tools, files, and steps that solve that problem. Health Check & Systems (NOHC + Path B): Bigger questions about how your org runs. Start with NOHC to see your 'Tiers' in each area. 8–12 week system installs that make you audit- and funder-ready.",
    category: 'process'
  },
  {
    question: "Who is Nimara for? Are we the right size?",
    answer: "We work with small and mid-size nonprofits in Canada: Usually 2–100 staff (mix of paid staff and active volunteers). Doing real community or program work. Big enough that audits, funders, and HR issues are on the table. If you're very early (no stable staff, still just an idea), we'll usually share light tools and point you to other supports instead of selling a full install.",
    category: 'getting-started'
  },
  {
    question: "What kinds of problems can you help with?",
    answer: "Most of our work sits in these areas: Board & governance (rules, roles, minutes, policies), Money & compliance (basic finance systems, grants, audits, CRA), HR & people (staff files, hiring, safety, conflict), Programs & reporting (intake, trackers, funder reports). Fast Help is for one of these problems. Health Check & Systems is for when you know several of these are weak.",
    category: 'process'
  },
  {
    question: "How long does it take, and what do we actually get at the end?",
    answer: "Fast Help: 1–4 weeks. You get a small Acceptance Bundle – the policies, templates, trackers, and steps needed to fix that one problem. Health Check & Systems: 2–3 weeks for NOHC, then 8–12 weeks per system install. You get a Tier score, a clear plan, and a bigger Acceptance Bundle that your team can run without us. No 'advice only.' Every project ends in files and routines that live in your systems.",
    category: 'process'
  },
  {
    question: "How does pricing work? Can a funder pay for this?",
    answer: "We use flat project fees, not open-ended hourly billing. Fast Help = smaller fixed fee for one problem. Health Check & Systems = fixed fee for the NOHC, plus fixed fees for each system install bundle. Yes, funders can pay. Many orgs use capacity-building grants, admin lines, or special project funds. We can give you a simple one-page description to include in proposals or to share with your funder.",
    category: 'pricing'
  }
];

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'process', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'support', label: 'Support' }
];

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
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="faq" 
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-background"
      aria-labelledby="faq-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-48 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-48 right-1/4 w-96 h-96 rounded-full bg-muted/50 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <MessageCircleQuestion size={16} className="text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              FAQ
            </span>
          </div>
          
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6"
          >
            Questions you may have
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about working with Nimara. Can't find what you're looking for? 
            <a href="#contact" className="text-primary hover:text-primary/80 font-medium ml-1 transition-colors">
              Reach out to us
            </a>.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-border bg-muted text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-background transition-all duration-200"
              aria-label="Search frequently asked questions"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                ${activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          className="space-y-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const questionId = `faq-question-${index}`;
                const answerId = `faq-answer-${index}`;
                const isOpen = openIndex === index;

                return (
                  <motion.div 
                    key={faq.question}
                    variants={itemVariants}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`
                      rounded-2xl border-2 overflow-hidden transition-all duration-300
                      ${isOpen 
                        ? 'bg-primary/5 border-primary/20 shadow-sm' 
                        : 'bg-card border-border hover:border-border/80'
                      }
                    `}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary rounded-2xl"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      id={questionId}
                    >
                      <div className="flex items-start gap-4">
                        {/* Number indicator */}
                        <span className={`
                          flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors duration-300
                          ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
                        `}>
                          {index + 1}
                        </span>
                        <span className={`font-semibold leading-relaxed transition-colors duration-200 ${
                          isOpen ? 'text-foreground' : 'text-foreground'
                        }`}>
                          {faq.question}
                        </span>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`
                          flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300
                          ${isOpen ? 'bg-primary' : 'bg-muted'}
                        `}
                      >
                        <ChevronDown 
                          size={18} 
                          className={isOpen ? 'text-primary-foreground' : 'text-muted-foreground'} 
                        />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div 
                          id={answerId}
                          role="region"
                          aria-labelledby={questionId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-5 md:pb-6">
                            <div className="pl-12 border-l-2 border-primary/20">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-muted-foreground" />
                </div>
                <p className="text-foreground font-medium mb-2">No questions found</p>
                <p className="text-sm text-muted-foreground">
                  Try a different search term or{' '}
                  <button 
                    type="button"
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    clear filters
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-muted border border-border">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-foreground">Still have questions?</p>
              <p className="text-sm text-muted-foreground">We're happy to help you figure out if Nimara is right for you.</p>
            </div>
            <a
              href="https://calendly.com/hello-nimara/30min"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 whitespace-nowrap"
            >
              Book a call
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
