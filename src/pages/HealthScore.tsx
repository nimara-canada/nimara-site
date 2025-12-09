import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, Users, FileText, MessageSquare, ChevronDown, ArrowRight, 
  Check, Activity, DollarSign, Calendar, ArrowUp, Shield, 
  Target, Zap, AlertCircle, HelpCircle, Briefcase, CheckCircle2,
  XCircle, ArrowRightLeft, Wallet
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const faqs = [
  {
    question: "Can we use the Snapshot to fix things ourselves?",
    answer: "You'll get a clear Tier table, priority areas, and suggested steps. Some orgs use it to drive internal improvements. Others ask us to help with Path A or Path B. Both are fine."
  },
  {
    question: "How much time will this take from our team?",
    answer: "Roughly 3–4 hours of calls plus pulling a small set of documents over about two weeks."
  },
  {
    question: "Can a funder pay for this?",
    answer: "Yes. Many funders now support capacity and systems. We can provide a brief version of the Snapshot Summary tuned for funder reporting if needed."
  }
];

const deliverables = [
  {
    number: 1,
    title: "Scoping call",
    duration: "30–45 minutes",
    description: "We meet with your ED or lead to hear what's going on, confirm the main domains to focus on, and set expectations about what this Snapshot will and won't do."
  },
  {
    number: 2,
    title: "Two focused health-check sessions",
    duration: "60–90 minutes each",
    description: "Two conversations with your ED and 1–2 key staff. We walk through plain-language questions across:",
    domains: [
      "Board & governance",
      "Money, books & compliance",
      "People & HR",
      "Programs & services",
      "Data & reporting",
      "Volunteers (if relevant)",
      "Systems, tech & records"
    ],
    extra: "We also look at a few real examples: a board pack, a budget, 1–2 key policies, and a program or service document."
  },
  {
    number: 3,
    title: "Tier table across your core systems",
    description: "We score each domain on a simple ladder:",
    tiers: [
      { tier: "Tier 0", name: "Getting by", desc: "in heads, improvised tools" },
      { tier: "Tier 1", name: "Pieces in place", desc: "inconsistent, person-dependent" },
      { tier: "Tier 2", name: "Working basics", desc: "simple, written, repeatable for a small–mid nonprofit" }
    ],
    extra: "Most orgs have a mix of 0, 1, and 2. You'll see exactly where you land."
  },
  {
    number: 4,
    title: "2–3 page NOHC Snapshot Summary",
    description: "You get a short, plain-language document that includes:",
    items: [
      "Your Tier table by domain",
      "Top strengths (what's holding up)",
      "Top risks (where things could break)",
      "1–3 priority areas to tackle first",
      "Suggested paths: Fast Help (Path A), System Phase (Path B), or \"Not now\" with basics you can do on your own"
    ],
    extra: "It's written so you can share it with your board or a funder without translation."
  },
  {
    number: 5,
    title: "Walkthrough call",
    duration: "45–60 minutes",
    description: "We walk through your Snapshot, answer questions, and talk through realistic options and timing. We'll be honest if we think you should not do a big project right now."
  }
];

const timelineSteps = [
  {
    number: 1,
    title: "Quick fit check",
    duration: "7–9 minutes",
    description: "You fill out a short online form so we understand your context and don't waste time on the call."
  },
  {
    number: 2,
    title: "Intro call",
    duration: "20–30 minutes",
    description: "We confirm fit, answer early questions, and agree on timing. If it's not the right tool, we'll say so."
  },
  {
    number: 3,
    title: "Agreement and kickoff",
    description: "We send a simple agreement with a fixed fee of $2,500 CAD + tax and a clear timeline. Once signed, we book your health-check sessions."
  },
  {
    number: 4,
    title: "Health check conversations",
    description: "Over the next week, we run your two health-check sessions and look at the 5–7 key documents you send."
  },
  {
    number: 5,
    title: "Snapshot Summary",
    description: "Within about 10 business days of the first session, we send your 2–3 page NOHC Snapshot Summary."
  },
  {
    number: 6,
    title: "Walkthrough and decision",
    description: "We walk through the Snapshot with you and talk through options: Fast Help (Path A), System Phase (Path B), or \"not now\". You decide what happens next."
  }
];

const HealthScore = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load Typeform embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>NOHC Snapshot – $2,500 Fixed-Fee Health Check | Nimara</title>
        <meta name="description" content="Get a clear picture of your nonprofit's core systems in about 2 weeks. The NOHC Snapshot is a fixed-fee check-up of governance, finance, HR, programs, and more." />
      </Helmet>

      <Header />

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="h-1 bg-nimara-mint/20">
          <motion.div 
            className="h-full bg-gradient-to-r from-nimara-mint via-nimara-mint to-nimara-purple"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </motion.div>

      <main className="pt-16 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center py-20 md:py-28 bg-gradient-to-br from-secondary-background via-secondary-background to-[hsl(var(--nimara-navy))]">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent/40 to-primary/20 rounded-full blur-3xl" 
            />
            <motion.div 
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} 
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
              className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-primary/30 to-accent/20 rounded-full blur-3xl" 
            />
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.9 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                className="flex justify-center mb-8"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider rounded-full border border-white/20">
                  <Activity className="w-4 h-4 text-accent" />
                  NOHC Snapshot
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1, duration: 0.6 }} 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
              >
                Get a clear picture of your systems{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-accent via-[#9DFFD6] to-accent bg-clip-text text-transparent">
                    in about 2 weeks.
                  </span>
                  <motion.span 
                    className="absolute -inset-1 bg-accent/20 rounded-lg blur-lg" 
                    animate={{ opacity: [0.5, 0.8, 0.5] }} 
                    transition={{ duration: 2, repeat: Infinity }} 
                  />
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }} 
                className="text-lg sm:text-xl text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                The Nimara NOHC Snapshot is a short, fixed-fee check-up of your core systems – governance, money, people, programs, data, volunteers, and tools – so you can see what's strong, what's fragile, and what kind of support actually makes sense.
              </motion.p>

              {/* Badges row */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3 }} 
                className="flex flex-wrap gap-3 justify-center mb-10"
              >
                {[
                  { icon: DollarSign, text: "Fixed fee: $2,500 CAD" },
                  { icon: Calendar, text: "Usually completed in ~2 weeks" },
                  { icon: MessageSquare, text: "2–3 short conversations" },
                  { icon: FileText, text: "Plain-language summary you can share" }
                ].map((badge, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    className="flex items-center gap-2.5 px-4 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-accent/30 transition-colors"
                  >
                    <badge.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-white/90">{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Primary CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4 }} 
                className="flex flex-col items-center gap-4"
              >
                <Link to="/book-a-call">
                  <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(172, 252, 227, 0.3)" }} 
                    whileTap={{ scale: 0.98 }} 
                    className="group relative px-8 py-4 bg-accent text-secondary-background font-semibold rounded-xl overflow-hidden shadow-lg shadow-accent/20 text-base sm:text-lg"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Talk about a NOHC Snapshot
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                </Link>
                
                <p className="text-white/60 text-sm">
                  Prefer to start with a quick fit check instead?{" "}
                  <a href="#fit-check-form" className="text-accent hover:text-accent/80 underline underline-offset-2">
                    Take it here
                  </a>
                </p>
                
                <p className="text-white/50 text-xs max-w-md mt-2">
                  We'll start with a short 7–9 minute fit check so we don't waste your time on the call.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section: What the NOHC Snapshot is */}
        <section className="py-20 md:py-28 bg-background relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 text-foreground mb-6">
                What is the NOHC Snapshot?
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-body text-lg leading-relaxed mb-6">
                The NOHC Snapshot is a light but real health check of how your nonprofit's core systems are working today.
              </p>
              
              <p className="text-body-muted mb-4 font-medium">In plain language:</p>
              
              <p className="text-body leading-relaxed mb-6">
                It's a ~2-week project where we talk with your team, look at a few real examples, score your systems on a simple Tier ladder, and give you a short, honest summary you can share with your board or funder.
              </p>
              
              <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                <p className="text-body leading-relaxed">
                  <strong className="text-foreground">It is not</strong> a giant 40-page report. It's the minimum you need to stop guessing and make good decisions about Path A (Fast Help) or Path B (System Installs).
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: Who it's for */}
        <section className="py-20 md:py-28 bg-muted/30 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 text-foreground mb-4">
                Who is this for?
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <p className="text-body-muted font-medium mb-4">The NOHC Snapshot is a good fit if:</p>
                <ul className="space-y-3">
                  {[
                    "You know your org is doing real work, but the back-end feels fragile.",
                    "You're juggling board expectations, funder asks, audits, HR, and reporting with too few people.",
                    "You're not sure if you need one strong fix or a bigger system phase.",
                    "Your board or funders are asking, \"Are our systems ready for more funding?\""
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <p className="text-body-muted font-medium mb-4">Typical orgs:</p>
                <ul className="space-y-2">
                  {[
                    "Small–mid nonprofits (roughly 2–100 staff).",
                    "Mix of paid staff and volunteers.",
                    "Some policies and tools exist, but practice is inconsistent."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-body text-center italic border-l-2 border-accent/50 pl-4">
                If that sounds like you, the Snapshot gives you a real baseline before you spend 15–25k on deeper work.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section: What you get for $2,500 */}
        <section className="py-20 md:py-28 bg-background relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 text-foreground mb-2">
                What you get for $2,500
              </h2>
              <p className="text-subtitle">One fixed-fee package. No hidden extras.</p>
            </motion.div>

            <div className="space-y-6">
              {deliverables.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{item.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        {item.duration && (
                          <span className="text-sm text-primary font-medium">({item.duration})</span>
                        )}
                      </div>
                      <p className="text-body mb-4">{item.description}</p>
                      
                      {item.domains && (
                        <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                          {item.domains.map((domain, i) => (
                            <li key={i} className="flex items-center gap-2 text-body-muted">
                              <Check className="w-4 h-4 text-accent flex-shrink-0" />
                              {domain}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {item.tiers && (
                        <div className="grid sm:grid-cols-3 gap-3 mb-4">
                          {item.tiers.map((tier, i) => (
                            <div key={i} className="bg-muted/50 rounded-xl p-4 border border-border">
                              <span className="text-primary font-bold text-sm">{tier.tier}</span>
                              <p className="font-semibold text-foreground">{tier.name}</p>
                              <p className="text-sm text-body-muted">{tier.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {item.items && (
                        <ul className="space-y-2 mb-4">
                          {item.items.map((listItem, i) => (
                            <li key={i} className="flex items-start gap-2 text-body">
                              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {item.extra && (
                        <p className="text-body-muted text-sm italic">{item.extra}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: What this is not */}
        <section className="py-20 md:py-28 bg-muted/30 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 text-foreground mb-4">
                What the Snapshot is not
              </h2>
              <p className="text-subtitle">To protect both you and us:</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {[
                "It is not a legal or audit opinion.",
                "It is not a 40-page strategy or governance report.",
                "It is not a promise to fix every system in one phase.",
                "It is not a free pre-project \"nice to have\" – it is a real piece of work."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-body">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center text-body mt-8 bg-primary/5 rounded-2xl p-6 border border-primary/10"
            >
              <strong className="text-foreground">It is</strong> a focused, honest check-up so you can decide whether to invest in Fast Help, a System Phase, or hold off.
            </motion.p>
          </div>
        </section>

        {/* Section: How it works (timeline) */}
        <section className="py-20 md:py-28 bg-nimara-navy relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-nimara-mint/15 to-nimara-purple/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 text-white mb-2">
                How it works in about 2 weeks
              </h2>
              <p className="text-white/70">You can share this straight with your board or funder.</p>
            </motion.div>

            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-nimara-mint/40 via-nimara-mint/20 to-transparent" />
              
              <div className="space-y-6">
                {timelineSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative md:pl-20"
                  >
                    {/* Step number */}
                    <div className="hidden md:flex absolute left-0 top-4 w-16 h-16 rounded-full bg-nimara-mint/20 border border-nimara-mint/40 items-center justify-center">
                      <span className="text-nimara-mint font-bold text-xl">{step.number}</span>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-nimara-mint/30 transition-colors">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="md:hidden text-nimara-mint font-bold">Step {step.number}:</span>
                        <h3 className="font-bold text-white text-lg">{step.title}</h3>
                        {step.duration && (
                          <span className="text-nimara-mint text-sm font-medium">({step.duration})</span>
                        )}
                      </div>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: How it connects to Path A and Path B */}
        <section className="py-20 md:py-28 bg-background relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                <ArrowRightLeft className="w-3.5 h-3.5" />
                Next Steps
              </div>
              <h2 className="heading-2 text-foreground mb-4">
                How this connects to Path A and Path B
              </h2>
              <p className="text-subtitle">The NOHC Snapshot is not the end. It's the bridge into the right path.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Path A */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">If your main issue is one fire</h3>
                </div>
                <p className="text-body mb-4">
                  The Snapshot may show that most systems are "okay enough", but one area is burning (e.g., a funder report, audit, complaint risk, or board gap).
                </p>
                <p className="text-body-muted">
                  In that case, we'll likely recommend a <strong className="text-foreground">Fast Help (Path A)</strong> project: one problem, one mini-bundle, 1–4 weeks.
                </p>
                <Link to="/path-a" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium mt-4">
                  Learn about Path A <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Path B */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">If several systems are fragile</h3>
                </div>
                <p className="text-body mb-4">
                  The Snapshot may show multiple domains sitting at Tier 0–1. Then we'll likely recommend a <strong className="text-foreground">System Phase (Path B)</strong>:
                </p>
                <ul className="space-y-2 text-body-muted">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Start from the Snapshot baseline
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Choose 1–2 domains for the first phase
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Use Nimara bundles to move those domains from Tier 0/1 to Tier 2
                  </li>
                </ul>
                <Link to="/path-b" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mt-4">
                  Learn about Path B <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center text-body-muted mt-8 italic"
            >
              The Snapshot becomes your "before" picture and helps you explain the work to funders and your board.
            </motion.p>
          </div>
        </section>

        {/* Section: Price and credit */}
        <section className="py-20 md:py-28 bg-muted/30 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                <Wallet className="w-3.5 h-3.5" />
                Pricing
              </div>
              <h2 className="heading-2 text-foreground mb-4">
                Price and how credits work
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="font-bold text-foreground text-lg mb-4">Price:</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">$2,500</span>
                  <span className="text-body-muted">CAD + tax per organization</span>
                </div>
                <p className="text-body">Fixed fee, clear scope.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="font-bold text-foreground text-lg mb-4">Credit toward deeper work:</h3>
                <p className="text-body mb-4">
                  If you move ahead into a Path B System Phase above a certain size, we apply part of your Snapshot fee toward that project.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="bg-primary/5 rounded-2xl p-6 border border-primary/10 mt-6"
            >
              <p className="text-body-muted font-medium mb-2">You can explain it internally like this:</p>
              <p className="text-body italic">
                "We'll pay $2,500 for a structured check-up. If we decide to invest in a bigger system phase with Nimara, part of that fee will be rolled into the project."
              </p>
              <p className="text-body-muted text-sm mt-4">
                We'll walk through what that looks like for you on the intro call, based on your size and plans.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section: Is this a good use of our limited budget? */}
        <section className="py-20 md:py-28 bg-background relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 text-foreground mb-4">
                Is this a good use of our limited budget?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Should NOT book */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  You should not book a NOHC Snapshot if:
                </h3>
                <ul className="space-y-3">
                  {[
                    "You already know you won't invest in systems for the next 1–2 years.",
                    "Leadership genuinely doesn't have time for 2–3 short calls.",
                    "You want branding, fundraising campaigns, or strategy retreats (that's not Nimara's lane)."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-body">
                      <XCircle className="w-4 h-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Should consider */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                className="bg-primary/5 rounded-2xl p-6 border border-primary/10"
              >
                <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  You should seriously consider it if:
                </h3>
                <ul className="space-y-3">
                  {[
                    "You're about to ask for more funding or take on more risk.",
                    "You're not sure if your systems can carry that growth.",
                    "Your board or funders are asking \"Are we ready?\"",
                    "You'd rather spend $2,500 now to get a clear map than gamble 15–25k on the wrong project."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-body">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section: Quick Q&A */}
        <section className="py-20 md:py-28 bg-nimara-navy relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-nimara-mint/10 to-nimara-purple/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-nimara-mint/15 text-nimara-mint text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                <HelpCircle className="w-3.5 h-3.5" />
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Quick Q&A
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`bg-white/5 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${openFaq === index ? 'border-nimara-mint/40 shadow-lg shadow-nimara-mint/5' : 'border-white/10 hover:border-nimara-mint/30'}`}>
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)} 
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <span className="font-semibold text-white pr-4">{faq.question}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === index ? 'bg-nimara-mint text-nimara-navy rotate-180' : 'bg-white/10 text-white/70'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                      <div className="px-6 pb-5">
                        <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fit Check Form Section */}
        <section id="fit-check-form" className="py-20 md:py-28 bg-background scroll-mt-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="heading-2 text-foreground mb-4">
                Start with the quick fit check
              </h2>
              <p className="text-subtitle max-w-xl mx-auto">
                Take 7–9 minutes to tell us about your situation. We'll follow up with options.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden border border-border/50">
                <div data-tf-live="01JMFHG9N10TSBPJYKJHKP4BHZ" style={{ width: '100%', height: '600px' }} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-secondary-background via-secondary-background to-[hsl(var(--nimara-navy))] relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
              transition={{ duration: 8, repeat: Infinity }} 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent/30 to-primary/20 rounded-full blur-3xl" 
            />
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Ready to see where your systems really stand?
              </h2>
              <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto">
                Book a short call. We'll check fit, answer questions, and, if it makes sense, schedule your NOHC Snapshot.
              </p>
              <Link to="/book-a-call">
                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(172, 252, 227, 0.3)" }} 
                  whileTap={{ scale: 0.98 }} 
                  className="group inline-flex items-center gap-2 px-10 py-5 bg-accent text-secondary-background font-semibold rounded-xl shadow-lg shadow-accent/20 text-lg"
                >
                  Talk about a NOHC Snapshot
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
              <p className="text-white/50 text-sm">
                Not sure yet? Start with the{" "}
                <a href="#fit-check-form" className="text-accent hover:text-accent/80 underline underline-offset-2">
                  quick 7–9 minute fit check
                </a>{" "}
                and we'll follow up with options.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Floating Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.8, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.8, y: 20 }} 
              onClick={scrollToTop} 
              className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
};

export default HealthScore;
