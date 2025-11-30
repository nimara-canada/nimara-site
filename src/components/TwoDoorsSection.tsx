import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Check, ChevronDown, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pathAIncludes = [
  'Health check on one area (board, money, HR, fundraising, volunteers, or systems)',
  '1-3 clear things done (like a policy, a budget, or a volunteer flow)',
  '2-4 week plan that fits your team',
  '3 months of support to help you use what we built'
];

const pathAGuarantees = [
  "If we don't finish what we promised, you get your money back",
  '3 months of support is always included'
];

const pathBIncludes = [
  'Full health check on board, money, people, fundraising, volunteers, and systems',
  'A set of modules that match your size and stage (Tier 0-4)',
  'An 8-12 week plan with clear jobs for board and staff',
  '3 months of support after the build, with an option for 12-month follow-up'
];

const pathBGuarantees = [
  "If we don't finish what we promised, you get your money back",
  '3 months of support included',
  'You see the full price and scope before we start. No hidden extras'
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
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const TwoDoorsSection = () => {
  const [expandedPathA, setExpandedPathA] = useState(false);
  const [expandedPathB, setExpandedPathB] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      const form = document.getElementById('form_3quotes');
      form?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-[hsl(var(--nimara-navy))]"
      aria-labelledby="two-doors-heading"
      aria-describedby="two-doors-description"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-48 right-1/4 w-96 h-96 rounded-full bg-[hsl(var(--nimara-purple))]/10 blur-3xl" />
        <div className="absolute -bottom-48 left-1/4 w-96 h-96 rounded-full bg-[hsl(var(--nimara-mint))]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2
            id="two-doors-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Two Doors. One System.
          </h2>
          
          <p id="two-doors-description" className="text-lg text-[hsl(var(--nim-slate))] leading-relaxed">
            Pick what you need right now. Go fast on one problem or build your full system.
          </p>
        </motion.div>

        {/* Two Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* Path A Card */}
          <motion.article 
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
            variants={fadeInUp}
            aria-labelledby="path-a-heading"
          >
            {/* Tag */}
            <div className="absolute top-6 right-6" aria-hidden="true">
              <span className="inline-block px-3 py-1 rounded-full bg-[hsl(var(--nimara-mint))] text-[hsl(var(--nimara-navy))] text-xs font-bold uppercase tracking-wider">
                Rapid Response
              </span>
            </div>

            <div className="p-8">
              {/* Title */}
              <h3 id="path-a-heading" className="text-2xl font-bold text-white mb-4 mt-6">
                Path A: Fast Help
              </h3>

              {/* Description */}
              <p className="text-[hsl(var(--nim-slate))] leading-relaxed mb-6">
                We fix one big problem fast. Think audits, grants, or one key policy.
              </p>

              <dl className="space-y-3 mb-8">
                <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-white/5">
                  <dt className="text-sm font-medium text-white">Timeline</dt>
                  <dd className="text-sm font-semibold text-[hsl(var(--nimara-mint))]">1-4 weeks</dd>
                </div>
                <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-white/5">
                  <dt className="text-sm font-medium text-white">The Asset</dt>
                  <dd className="text-sm font-semibold text-[hsl(var(--nimara-mint))]">Mini Acceptance Bundle</dd>
                </div>
              </dl>

              {/* CTA Button */}
              <Button
                onClick={scrollToContact}
                className="w-full mb-4 bg-[hsl(var(--nimara-mint))] hover:bg-[hsl(var(--nimara-mint))]/90 text-[hsl(var(--nimara-navy))] font-semibold shadow-lg"
                size="lg"
              >
                Start Path A
                <ArrowRight size={16} className="ml-2" />
              </Button>

              {/* Expandable Section */}
              <button
                onClick={() => setExpandedPathA(!expandedPathA)}
                aria-expanded={expandedPathA}
                aria-controls="path-a-details"
                className="flex items-center justify-center gap-2 w-full text-sm text-[hsl(var(--nimara-mint))] hover:text-white transition-colors mb-6 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nimara-purple))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--nimara-navy))] rounded"
              >
                <span>See what's included</span>
                <motion.div
                  animate={{ rotate: expandedPathA ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <motion.div
                id="path-a-details"
                role="region"
                aria-labelledby="path-a-heading"
                initial={false}
                animate={{ 
                  height: expandedPathA ? 'auto' : 0,
                  opacity: expandedPathA ? 1 : 0,
                  marginBottom: expandedPathA ? 24 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="space-y-3" role="list">
                  {pathAIncludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[hsl(var(--nimara-mint))]/20 flex items-center justify-center mt-0.5" aria-hidden="true">
                        <Check size={12} className="text-[hsl(var(--nimara-mint))]" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-[hsl(var(--nim-slate))] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Guarantees */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white mb-3">Our Promise</h4>
                <ul className="space-y-2" role="list">
                  {pathAGuarantees.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check size={14} className="text-[hsl(var(--nimara-mint))] flex-shrink-0 mt-0.5" aria-hidden="true" strokeWidth={3} />
                      <span className="text-xs text-[hsl(var(--nim-slate))]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>

          {/* Path B Card */}
          <motion.article 
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-[hsl(var(--nimara-purple))]/30 overflow-hidden"
            variants={fadeInUp}
            aria-labelledby="path-b-heading"
          >
            {/* Tag */}
            <div className="absolute top-6 right-6" aria-hidden="true">
              <span className="inline-block px-3 py-1 rounded-full bg-[hsl(var(--nimara-purple))] text-white text-xs font-bold uppercase tracking-wider">
                Most Popular
              </span>
            </div>

            {/* Accent glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--nimara-purple))]/5 to-transparent pointer-events-none" aria-hidden="true" />

            <div className="p-8 relative z-10">
              {/* Title */}
              <h3 id="path-b-heading" className="text-2xl font-bold text-white mb-4 mt-6">
                Path B: System Build
              </h3>

              {/* Description */}
              <p className="text-[hsl(var(--nim-slate))] leading-relaxed mb-6">
                We build your full system so you can move up a Tier.
              </p>

              <dl className="space-y-3 mb-8">
                <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-white/5">
                  <dt className="text-sm font-medium text-white">Timeline</dt>
                  <dd className="text-sm font-semibold text-[hsl(var(--nimara-purple))]">8-12 weeks</dd>
                </div>
                <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-white/5">
                  <dt className="text-sm font-medium text-white">The Asset</dt>
                  <dd className="text-sm font-semibold text-[hsl(var(--nimara-purple))]">Full Acceptance Bundle + NOHC Score</dd>
                </div>
              </dl>

              {/* CTA Button */}
              <Button
                onClick={scrollToContact}
                className="w-full mb-4 bg-[hsl(var(--nimara-purple))] hover:bg-[hsl(var(--nimara-purple))]/90 text-white font-semibold shadow-lg"
                size="lg"
              >
                Start Path B
                <ArrowRight size={16} className="ml-2" />
              </Button>

              {/* Expandable Section */}
              <button
                onClick={() => setExpandedPathB(!expandedPathB)}
                aria-expanded={expandedPathB}
                aria-controls="path-b-details"
                className="flex items-center justify-center gap-2 w-full text-sm text-[hsl(var(--nimara-purple))] hover:text-white transition-colors mb-6 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nimara-purple))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--nimara-navy))] rounded"
              >
                <span>See what's included</span>
                <motion.div
                  animate={{ rotate: expandedPathB ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <motion.div
                id="path-b-details"
                role="region"
                aria-labelledby="path-b-heading"
                initial={false}
                animate={{ 
                  height: expandedPathB ? 'auto' : 0,
                  opacity: expandedPathB ? 1 : 0,
                  marginBottom: expandedPathB ? 24 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="space-y-3" role="list">
                  {pathBIncludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[hsl(var(--nimara-purple))]/20 flex items-center justify-center mt-0.5" aria-hidden="true">
                        <Check size={12} className="text-[hsl(var(--nimara-purple))]" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-[hsl(var(--nim-slate))] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Guarantees */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white mb-3">Our Promise</h4>
                <ul className="space-y-2" role="list">
                  {pathBGuarantees.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check size={14} className="text-[hsl(var(--nimara-purple))] flex-shrink-0 mt-0.5" aria-hidden="true" strokeWidth={3} />
                      <span className="text-xs text-[hsl(var(--nim-slate))]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        </motion.div>

        {/* Nimara Promise Banner */}
        <motion.aside 
          className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          aria-labelledby="nimara-promise-heading"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[hsl(var(--nimara-mint))]/20 flex items-center justify-center mb-4" aria-hidden="true">
              <Shield size={24} className="text-[hsl(var(--nimara-mint))]" />
            </div>
            <h3 id="nimara-promise-heading" className="text-xl font-bold text-white mb-3">
              The Nimara Promise
            </h3>
            <p className="text-[hsl(var(--nim-slate))] max-w-2xl">
              Every project comes with a 14-Day Acceptance Bundle, a Fix-Loop, and a fair refund promise.
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};
