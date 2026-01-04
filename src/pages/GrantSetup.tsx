import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { MotionControls } from '@/components/MotionControls';
import { MotionPreferencesProvider } from '@/hooks/use-scroll-reveal';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CALENDLY_BOOKING_URL, CONTACT_EMAIL } from '@/constants/urls';
import { Check, FolderOpen, FileSpreadsheet, Receipt, Users, FileText, GraduationCap, ArrowRight } from 'lucide-react';

// Section wrapper for consistent styling
const Section = ({ 
  children, 
  className = '', 
  background = 'default',
  id
}: { 
  children: React.ReactNode; 
  className?: string;
  background?: 'default' | 'muted' | 'gradient';
  id?: string;
}) => {
  const bgClass = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    gradient: 'bg-secondary-background'
  }[background];

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

// Hero Section
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="pt-8 pb-16 md:pt-12 md:pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6"
        >
          About 2 weeks
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6"
        >
          Grant Setup
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          We set up simple systems for money, files, and reporting — so funding is easier to manage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <Button asChild size="lg">
            <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a Grant Setup
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link to="/start-here">
              Get Started (not sure yet?)
            </Link>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-muted-foreground"
        >
          Prefer email?{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
            {CONTACT_EMAIL}
          </a>
        </motion.p>
      </div>
    </section>
  );
};

// Trust Strip
const TrustStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-8 border-y border-border bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm text-muted-foreground mb-2"
        >
          Works with: <span className="text-foreground font-medium">Google Drive • Google Sheets • QuickBooks • Xero</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm text-muted-foreground"
        >
          No new software. We work inside what you already use.
        </motion.p>
      </div>
    </section>
  );
};

// Who This Is For
const WhoThisIsFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const criteria = [
    "Reporting turns into a scramble near deadlines",
    "Receipts and files are hard to find",
    "Spending approvals happen in texts or DMs",
    "More than one person touches the grant, but nobody knows 'the right place'",
    "You have tools, but the system doesn't stick"
  ];

  return (
    <Section background="muted">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-light tracking-tight mb-4"
        >
          This is for you if…
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-8"
        >
          If 2+ are true, Grant Setup is a good fit:
        </motion.p>

        <div className="space-y-4 mb-8">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link to="/start-here" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

// What You Get
const WhatYouGet = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const deliverables = [
    { icon: FolderOpen, title: "Clean folder setup", desc: "So files are easy to find" },
    { icon: FileSpreadsheet, title: "Simple grant tracker", desc: "So spending is easy to follow" },
    { icon: Receipt, title: "Receipt + file routine", desc: "So nothing gets lost" },
    { icon: Users, title: "Clear 'who does what'", desc: "So work doesn't get stuck" },
    { icon: FileText, title: "One-page staff guide", desc: "So everyone follows the same steps" },
    { icon: GraduationCap, title: "Short handover training", desc: "So it sticks" }
  ];

  return (
    <Section id="what-you-get">
      <div ref={ref}>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-light tracking-tight mb-4"
          >
            What you get (and keep)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            You don't just get advice. You get a simple system your team can keep using.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm text-muted-foreground text-center"
        >
          Already using the $0 tracker? We can build the full setup around it.
        </motion.p>
      </div>
    </Section>
  );
};

// How It Works
const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const steps = [
    { label: "Start", desc: "We learn how you work today (quick call + simple intake)" },
    { label: "Build", desc: "We set up folders, tracking, and a routine" },
    { label: "Run", desc: "We test it with real examples so it works in real life" },
    { label: "Grow", desc: "If you want more support later, we help with the next system" }
  ];

  return (
    <Section background="muted">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-light tracking-tight text-center mb-12"
        >
          How it works
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-semibold text-primary">{index + 1}</span>
                </div>
                <h3 className="font-semibold mb-2">{step.label}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button asChild size="lg">
            <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a Grant Setup
            </a>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

// Timeline
const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const week1 = [
    "Set up the folder structure",
    "Set up the tracker and intake routine",
    "Define simple rules (who approves what, where files go)"
  ];

  const week2 = [
    "Clean up and file the most recent items (so you start fresh)",
    "Train your team",
    "Handover + next steps"
  ];

  return (
    <Section>
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-light tracking-tight text-center mb-12"
        >
          Timeline (about 2 weeks)
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <h3 className="font-semibold text-primary mb-4">Week 1</h3>
              <ul className="space-y-3">
                {week1.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <h3 className="font-semibold text-primary mb-4">Week 2</h3>
              <ul className="space-y-3">
                {week2.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

// Pricing
const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const tiers = [
    {
      name: "Setup Only",
      desc: "Best if your team can do the filing. Includes the setup + guide + handover."
    },
    {
      name: "Setup + Clean-Up",
      tag: "Most common",
      desc: "Includes setup + we help organize recent receipts/files so you start clean."
    },
    {
      name: "Rescue Setup",
      desc: "Includes deeper clean-up + extra support."
    }
  ];

  return (
    <Section background="muted">
      <div ref={ref}>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-light tracking-tight mb-4"
          >
            Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            We price Grant Setup as a fixed project (no surprises). Pick the level you need:
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className={`h-full ${tier.tag ? 'ring-2 ring-primary' : ''}`}>
                {tier.tag && (
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                    {tier.tag}
                  </span>
                )}
                <h3 className="font-semibold text-lg mb-3">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-muted-foreground text-center"
        >
          We'll confirm the right option on a short call.
        </motion.p>
      </div>
    </Section>
  );
};

// Boundaries
const Boundaries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const items = [
    "We don't do bookkeeping or taxes",
    "We don't judge the past",
    "We don't 'audit' your organization"
  ];

  return (
    <Section>
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-light tracking-tight mb-8"
        >
          What we don't do
        </motion.h2>

        <div className="space-y-3 mb-8">
          {items.map((item, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="text-muted-foreground"
            >
              {item}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-foreground font-medium"
        >
          We build working basics your team can run.
        </motion.p>
      </div>
    </Section>
  );
};

// Grant Eligibility
const GrantEligibility = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Section background="muted">
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-light tracking-tight mb-4"
        >
          Can grant funds pay for this?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-4"
        >
          Often, yes. This is capacity-building work: tools, workflow setup, training, and systems your team can reuse.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-muted-foreground/70"
        >
          Always follow your funder's rules.
        </motion.p>
      </div>
    </Section>
  );
};

// Mini FAQ
const MiniFAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const faqs = [
    { q: "Is this only for one grant?", a: "No. We build it once so you can reuse it for every grant." },
    { q: "Do we need new software?", a: "No. We work inside tools you already use." },
    { q: "How long does it take?", a: "Most setups take about 2 weeks." },
    { q: "What if we're not sure this is the right fit?", a: "Start with Get Started. We'll point you to the best next step." }
  ];

  return (
    <Section>
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-light tracking-tight text-center mb-12"
        >
          Quick answers
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="border-b border-border pb-6 last:border-0"
            >
              <h3 className="font-medium mb-2">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// Final CTA
const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4"
        >
          Ready to stop scrambling?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-white/80 mb-8"
        >
          Let's set up working basics so funding is easier to manage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/start-here">Get Started</Link>
          </Button>
          
          <Link to="/free-check" className="text-white/70 hover:text-white text-sm transition-colors">
            Try the free check →
          </Link>
          
          <p className="text-sm text-white/60 mt-4">
            Prefer email?{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/80 hover:text-white underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
const GrantSetup = () => {
  return (
    <MotionPreferencesProvider>
      <div className="min-h-screen">
        <ScrollProgress />
        <ScrollToTop />
        <MotionControls />
        
        <Helmet>
          <title>Grant Setup | Nimara</title>
          <meta name="description" content="We set up simple systems for money, files, and reporting — so funding is easier to manage. About 2 weeks." />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://nimara.ca/grant-setup" />
          
          <meta property="og:title" content="Grant Setup | Nimara" />
          <meta property="og:description" content="We set up simple systems for money, files, and reporting — so funding is easier to manage." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nimara.ca/grant-setup" />
          <meta property="og:image" content="https://nimara.ca/og-image.png" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Grant Setup | Nimara" />
          <meta name="twitter:description" content="We set up simple systems for money, files, and reporting — so funding is easier to manage." />
        </Helmet>
        
        <Header />
        
        <main id="main" style={{ paddingTop: '5rem' }}>
          <HeroSection />
          <TrustStrip />
          <WhoThisIsFor />
          <WhatYouGet />
          <HowItWorks />
          <Timeline />
          <Pricing />
          <Boundaries />
          <GrantEligibility />
          <MiniFAQ />
          <FinalCTA />
        </main>
        
        <Footer />
      </div>
    </MotionPreferencesProvider>
  );
};

export default GrantSetup;
