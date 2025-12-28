import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Users, FileText, MessageSquare, ArrowRight, Check, Activity, DollarSign, Calendar, ArrowUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
const deliverables = [{
  number: 1,
  title: "Scoping call",
  duration: "30–45 minutes",
  description: "We meet with your ED or lead to hear what's going on, confirm the main domains to focus on, and set expectations about what this Snapshot will and won't do."
}, {
  number: 2,
  title: "Two focused health-check sessions",
  duration: "60–90 minutes each",
  description: "Two conversations with your ED and 1–2 key staff. We walk through plain-language questions across:",
  domains: ["Board & governance", "Money, books & compliance", "People & HR", "Programs & services", "Data & reporting", "Volunteers (if relevant)", "Systems, tech & records"],
  extra: "We also look at a few real examples: a board pack, a budget, 1–2 key policies, and a program or service document."
}, {
  number: 3,
  title: "Tier table across your core systems",
  description: "We score each domain on a simple ladder:",
  tiers: [{
    tier: "Tier 0",
    name: "Getting by",
    desc: "in heads, improvised tools"
  }, {
    tier: "Tier 1",
    name: "Pieces in place",
    desc: "inconsistent, person-dependent"
  }, {
    tier: "Tier 2",
    name: "Working basics",
    desc: "simple, written, repeatable"
  }],
  extra: "Most orgs have a mix of 0, 1, and 2. You'll see exactly where you land."
}, {
  number: 4,
  title: "2–3 page NOHC Snapshot Summary",
  description: "You get a short, plain-language document that includes:",
  items: ["Your Tier table by domain", "Top strengths (what's holding up)", "Top risks (where things could break)", "1–3 priority areas to tackle first", "Suggested paths: Fast Help (Path A), System Phase (Path B), or \"Not now\" with basics you can do on your own"],
  extra: "It's written so you can share it with your board or funder without translation."
}, {
  number: 5,
  title: "Walkthrough call",
  duration: "45–60 minutes",
  description: "We walk through your Snapshot, answer questions, and talk through realistic options and timing. We'll be honest if we think you should not do a big project right now."
}];
const timelineSteps = [{
  number: 1,
  title: "Quick fit check",
  duration: "7–9 minutes",
  description: "You fill out a short online form so we understand your context and don't waste time on the call."
}, {
  number: 2,
  title: "Intro call",
  duration: "20–30 minutes",
  description: "We confirm fit, answer early questions, and agree on timing. If it's not the right tool, we'll say so."
}, {
  number: 3,
  title: "Agreement and kickoff",
  description: "We send a simple agreement with a fixed fee of $2,500 CAD + tax and a clear timeline. Once signed, we book your health-check sessions."
}, {
  number: 4,
  title: "Health check conversations",
  description: "Over the next week, we run your two health-check sessions and look at the 5–7 key documents you send."
}, {
  number: 5,
  title: "Snapshot Summary",
  description: "Within about 10 business days of the first session, we send your 2–3 page NOHC Snapshot Summary."
}, {
  number: 6,
  title: "Walkthrough and decision",
  description: "We walk through the Snapshot with you and talk through options: Fast Help (Path A), System Phase (Path B), or \"not now\". You decide what happens next."
}];
const HealthScore = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <>
      <Helmet>
        <title>NOHC Snapshot – $2,500 Fixed-Fee Health Check | Nimara</title>
        <meta name="description" content="Get a clear picture of your nonprofit's core systems in about 2 weeks. The NOHC Snapshot is a fixed-fee check-up of governance, finance, HR, programs, and more." />
      </Helmet>

      <Header />

      {/* Scroll Progress Indicator */}
      <motion.div className="fixed top-0 left-0 right-0 z-50" initial={{
      opacity: 0
    }} animate={{
      opacity: scrollProgress > 0 ? 1 : 0
    }} transition={{
      duration: 0.2
    }}>
        <div className="h-1 bg-nimara-mint/20">
          <motion.div className="h-full bg-gradient-to-r from-nimara-mint via-nimara-mint to-nimara-purple" style={{
          width: `${scrollProgress}%`
        }} transition={{
          duration: 0.1
        }} />
        </div>
      </motion.div>

      <main className="pt-16 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center py-20 md:py-28 bg-secondary-background bg-secondary-foreground shadow-none rounded-none opacity-100">
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center">
              {/* Badge */}
              <motion.div initial={{
              opacity: 0,
              y: 20,
              scale: 0.9
            }} animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }} className="flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider rounded-full border border-white/20">
                  <Activity className="w-4 h-4 text-accent" />
                  NOHC Snapshot
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1,
              duration: 0.6
            }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                Get a clear picture of your systems{" "}
                <span className="text-accent">in about 2 weeks.</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }} className="text-lg sm:text-xl text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed">
                The Nimara NOHC Snapshot is a short, fixed-fee check-up of your core systems – governance, money, people, programs, data, volunteers, and tools – so you can see what's strong, what's fragile, and what kind of support actually makes sense.
              </motion.p>

              {/* Badges row */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.3
            }} className="flex flex-wrap gap-3 justify-center mb-10">
                {[{
                icon: DollarSign,
                text: "Fixed fee: $2,500 CAD"
              }, {
                icon: Calendar,
                text: "Usually completed in ~2 weeks"
              }, {
                icon: MessageSquare,
                text: "2–3 short conversations"
              }, {
                icon: FileText,
                text: "Plain-language summary you can share"
              }].map((badge, i) => <motion.div key={i} whileHover={{
                scale: 1.05,
                y: -2
              }} className="flex items-center gap-2.5 px-4 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-accent/30 transition-colors">
                    <badge.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-white/90">{badge.text}</span>
                  </motion.div>)}
              </motion.div>

              {/* Primary CTA */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="flex flex-col items-center gap-4">
                <Link to="/book-a-call">
                  <motion.button whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px -10px rgba(172, 252, 227, 0.3)"
                }} whileTap={{
                  scale: 0.98
                }} className="group relative px-8 py-4 bg-accent text-secondary-background font-semibold rounded-xl overflow-hidden shadow-lg shadow-accent/20 text-base sm:text-lg">
                    <span className="relative z-10 flex items-center gap-2">
                      Talk about a NOHC Snapshot
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section: Who it's for */}
        <section className="py-20 md:py-28 bg-muted/30 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-12">
              <h2 className="heading-2 text-foreground mb-4">
                Who is this for?
              </h2>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="space-y-8">
              <div>
                <p className="text-body-muted font-medium mb-4">The NOHC Snapshot is a good fit if:</p>
                <ul className="space-y-3">
                  {["You know your org is doing real work, but the back-end feels fragile.", "You're juggling board expectations, funder asks, audits, HR, and reporting with too few people.", "You're not sure if you need one strong fix or a bigger system phase.", "Your board or funders are asking, \"Are our systems ready for more funding?\""].map((item, i) => <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-body">{item}</span>
                    </li>)}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <p className="text-body-muted font-medium mb-4">Typical orgs:</p>
                <ul className="space-y-2">
                  {["Nonprofits with 0–50 staff.", "Mix of paid staff and volunteers.", "Some policies and tools exist, but practice is inconsistent."].map((item, i) => <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-body">{item}</span>
                    </li>)}
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
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-12">
              <h2 className="heading-2 text-foreground mb-2">
                What you get for $2,500
              </h2>
              <p className="text-subtitle">One fixed-fee package. No hidden extras.</p>
            </motion.div>

            <div className="space-y-6">
              {deliverables.map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{item.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        {item.duration && <span className="text-sm text-primary font-medium">({item.duration})</span>}
                      </div>
                      <p className="text-body mb-4">{item.description}</p>
                      
                      {item.domains && <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                          {item.domains.map((domain, i) => <li key={i} className="flex items-center gap-2 text-body-muted">
                              <Check className="w-4 h-4 text-accent flex-shrink-0" />
                              {domain}
                            </li>)}
                        </ul>}
                      
                      {item.tiers && <div className="grid sm:grid-cols-3 gap-3 mb-4">
                          {item.tiers.map((tier, i) => <div key={i} className="bg-muted/50 rounded-xl p-4 border border-border">
                              <span className="text-primary font-bold text-sm">{tier.tier}</span>
                              <p className="font-semibold text-foreground">{tier.name}</p>
                              <p className="text-sm text-body-muted">{tier.desc}</p>
                            </div>)}
                        </div>}
                      
                      {item.items && <ul className="space-y-2 mb-4">
                          {item.items.map((listItem, i) => <li key={i} className="flex items-start gap-2 text-body">
                              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              {listItem}
                            </li>)}
                        </ul>}
                      
                      {item.extra && <p className="text-body-muted text-sm italic">{item.extra}</p>}
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Section: How it works (timeline) */}
        <section className="py-20 md:py-28 bg-nimara-navy relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-nimara-mint/15 to-nimara-purple/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-12">
              <h2 className="heading-2 text-white mb-2">
                How it works in about 2 weeks
              </h2>
              <p className="text-white/70">You can share this straight with your board or funder.</p>
            </motion.div>

            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-nimara-mint/40 via-nimara-mint/20 to-transparent" />
              
              <div className="space-y-6">
                {timelineSteps.map((step, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }} className="relative md:pl-20">
                    {/* Step number */}
                    <div className="hidden md:flex absolute left-0 top-4 w-16 h-16 rounded-full bg-nimara-mint/20 border border-nimara-mint/40 items-center justify-center">
                      <span className="text-nimara-mint font-bold text-xl">{step.number}</span>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-nimara-mint/30 transition-colors">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="md:hidden text-nimara-mint font-bold">Step {step.number}:</span>
                        <h3 className="font-bold text-white text-lg">{step.title}</h3>
                        {step.duration && <span className="text-nimara-mint text-sm font-medium">({step.duration})</span>}
                      </div>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </div>
        </section>


        {/* Final CTA */}
        <section className="py-20 md:py-28 bg-secondary-background relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }} transition={{
            duration: 8,
            repeat: Infinity
          }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent/30 to-primary/20 rounded-full blur-3xl" />
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Ready to see where your systems really stand?
              </h2>
              <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto">
                Book a short call. We'll check fit, answer questions, and, if it makes sense, schedule your NOHC Snapshot.
              </p>
              <Link to="/book-a-call">
                <motion.button whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px -10px rgba(172, 252, 227, 0.3)"
              }} whileTap={{
                scale: 0.98
              }} className="group inline-flex items-center gap-2 px-10 py-5 bg-accent text-secondary-background font-semibold rounded-xl shadow-lg shadow-accent/20 text-lg">
                  Talk about a NOHC Snapshot
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Floating Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && <motion.button initial={{
          opacity: 0,
          scale: 0.8,
          y: 20
        }} animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }} exit={{
          opacity: 0,
          scale: 0.8,
          y: 20
        }} onClick={scrollToTop} className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" aria-label="Back to top">
              <ArrowUp className="w-5 h-5" />
            </motion.button>}
        </AnimatePresence>
      </main>

      <Footer />
    </>;
};
export default HealthScore;