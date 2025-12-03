import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Layers, 
  Clock, 
  Package, 
  ChevronDown, 
  ChevronUp,
  Shield,
  CheckCircle,
  ArrowRight
} from "lucide-react";

interface PathDetails {
  included: string[];
  guarantee: string[];
}

const pathDetails: { [key: string]: PathDetails } = {
  pathA: {
    included: [
      'Health Check focused on one area (board, money, HR, fundraising, volunteers, or systems)',
      '1-3 clear deliverables, such as a policy set, a simple budget system, or a volunteer flow',
      '2-4 week timeline, built to fit around your team\'s real life',
      '3 months of follow-up support and light evaluation to help you see what we built'
    ],
    guarantee: [
      'Money-back guarantee if we don\'t finish the agreed deliverables',
      '3 months of support included in every project'
    ]
  },
  pathB: {
    included: [
      'Full Health Check across board, money, people, fundraising, volunteers, and systems',
      'Tiered package of modules matched to your size and stage (Tier 0-4)',
      '8-12 week workplan with clear roles for board and staff',
      '3 months of follow-up support and light evaluation after the main build, with an optional 12-month follow-up plan'
    ],
    guarantee: [
      'Money-back guarantee if we don\'t complete the agreed package',
      '3 months of support included, plus optional 12-month follow-up',
      'No hidden extras: price and scope are set before we start'
    ]
  }
};

export const TwoDoorsSection = () => {
  const [expandedPath, setExpandedPath] = useState<string | null>(null);

  const toggleDetails = (path: string) => {
    setExpandedPath(expandedPath === path ? null : path);
  };

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
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Two Doors. One System.
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the speed and depth that fits your reality today.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Path A Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-full">
              {/* Tag */}
              <div className="absolute -top-3 left-6 z-10">
                <span 
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide bg-accent text-accent-foreground"
                >
                  <Zap className="w-3 h-3" />
                  Rapid Response
                </span>
              </div>

              {/* Card Content */}
              <div className="rounded-2xl p-8 h-full flex flex-col border border-border bg-card shadow-soft">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">
                    Path A: Fast Help
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Fix one urgent problem (Audit, Grant, Policy).
                  </p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Timeline</p>
                      <p className="font-semibold text-foreground">1–4 Weeks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 flex-shrink-0 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">The Asset</p>
                      <p className="font-semibold text-foreground">Mini Acceptance Bundle</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  to="/path-a"
                  className="w-full py-4 font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group bg-accent text-accent-foreground hover:opacity-90 mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 min-h-[44px]"
                >
                  Start Path A
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Expandable Details */}
                <button
                  onClick={() => toggleDetails('pathA')}
                  className="text-sm font-medium flex items-center justify-center gap-1 transition-colors text-[hsl(var(--nimara-navy))] hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 min-h-[44px]"
                  aria-expanded={expandedPath === 'pathA'}
                  aria-controls="path-a-details"
                >
                  See what's included
                  {expandedPath === 'pathA' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                  {expandedPath === 'pathA' && (
                    <motion.div
                      id="path-a-details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-border">
                        <h4 className="text-sm font-semibold mb-3 text-muted-foreground">WHAT'S INCLUDED</h4>
                        <ul className="space-y-2">
                          {pathDetails.pathA.included.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Path B Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative h-full">
              {/* Tag */}
              <div className="absolute -top-3 left-6 z-10">
                <span 
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide bg-primary text-primary-foreground"
                >
                  <Layers className="w-3 h-3" />
                  Most Popular
                </span>
              </div>

              {/* Card Content */}
              <div className="rounded-2xl p-8 h-full flex flex-col border border-primary/30 bg-card shadow-soft">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">
                    Path B: System Build
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Install full infrastructure to move up a Tier.
                  </p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Timeline</p>
                      <p className="font-semibold text-foreground">8–12 Weeks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">The Asset</p>
                      <p className="font-semibold text-foreground">Full Acceptance Bundle + NOHC Score</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={scrollToContact}
                  className="w-full py-4 font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group bg-primary text-primary-foreground hover:bg-[#5835B8] mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 min-h-[44px]"
                >
                  Start Path B
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Expandable Details */}
                <button
                  onClick={() => toggleDetails('pathB')}
                  className="text-sm font-medium flex items-center justify-center gap-1 transition-colors text-primary hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 min-h-[44px]"
                  aria-expanded={expandedPath === 'pathB'}
                  aria-controls="path-b-details"
                >
                  See what's included
                  {expandedPath === 'pathB' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                  {expandedPath === 'pathB' && (
                    <motion.div
                      id="path-b-details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-border">
                        <h4 className="text-sm font-semibold mb-3 text-muted-foreground">WHAT'S INCLUDED</h4>
                        <ul className="space-y-2">
                          {pathDetails.pathB.included.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Nimara Promise Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="rounded-2xl p-6 sm:p-8 text-center border border-border bg-card shadow-soft">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shield className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold text-foreground">The Nimara Promise</h3>
            </div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Every project includes a 14-Day Acceptance Bundle, a Fix-Loop window, and a fair refund policy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
