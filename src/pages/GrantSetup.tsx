import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { MotionControls } from '@/components/MotionControls';
import { MotionPreferencesProvider, useMotionPreferences } from '@/hooks/use-scroll-reveal';
import { CALENDLY_BOOKING_URL, CONTACT_EMAIL } from '@/constants/urls';
import { Check, FolderOpen, FileSpreadsheet, Receipt, Users, FileText, GraduationCap, ArrowRight } from 'lucide-react';

const DROPBOX_EASE = [0.16, 1, 0.3, 1] as const;

// Hero Section - Dark premium style
const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const { reducedMotion } = useMotionPreferences();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: reducedMotion ? 1000 : 100,
    damping: reducedMotion ? 100 : 30
  });

  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, reducedMotion ? 1 : 0]);
  const heroY = useTransform(smoothProgress, [0, 1], [0, reducedMotion ? 0 : 80]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: DROPBOX_EASE }
    }
  };

  return (
    <section 
      ref={ref} 
      className="min-h-[85vh] bg-secondary-background text-white relative overflow-hidden flex items-center"
    >
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} 
      />

      <motion.div 
        className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 py-20"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <motion.div
          initial={reducedMotion ? false : "hidden"}
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          {/* Tag */}
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-medium rounded-full mb-8"
          >
            About 2 weeks
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Grant Setup
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We set up simple systems for money, files, and reporting — so funding is easier to manage.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <motion.a
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-150 hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Grant Setup
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <Link
              to="/start-here"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-medium"
            >
              Get Started (not sure yet?)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Email line */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-white/40"
          >
            Prefer email?{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/60 hover:text-white underline underline-offset-2 transition-colors">
              {CONTACT_EMAIL}
            </a>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Trust Strip - Light accent
const TrustStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-6 border-b border-border bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm text-muted-foreground"
        >
          Works with: <span className="text-foreground font-medium">Google Drive • Google Sheets • QuickBooks • Xero</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs text-muted-foreground/70 mt-1"
        >
          No new software. We work inside what you already use.
        </motion.p>
      </div>
    </section>
  );
};

// Who This Is For - Editorial style
const WhoThisIsFor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const criteria = [
    "Reporting turns into a scramble near deadlines",
    "Receipts and files are hard to find",
    "Spending approvals happen in texts or DMs",
    "More than one person touches the grant, but nobody knows 'the right place'",
    "You have tools, but the system doesn't stick"
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Header */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Is This For You?
              </span>
              <div className="h-px flex-1 bg-border" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-light tracking-tight leading-[1.1] mb-4"
            >
              This is for you
              <br />
              <span className="font-normal italic text-muted-foreground">if…</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground"
            >
              If 2+ are true, Grant Setup is a good fit.
            </motion.p>
          </div>

          {/* Right - Checklist */}
          <div className="space-y-0">
            {criteria.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: DROPBOX_EASE }}
                className="flex items-start gap-4 py-4 border-b border-border first:border-t"
              >
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <Link to="/start-here" className="group inline-flex items-center gap-3 text-foreground font-medium">
                <span className="group-hover:text-primary transition-colors">Get Started</span>
                <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// What You Get - Premium cards with hover
const WhatYouGet = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const deliverables = [
    { icon: FolderOpen, title: "Clean folder setup", desc: "So files are easy to find" },
    { icon: FileSpreadsheet, title: "Simple grant tracker", desc: "So spending is easy to follow" },
    { icon: Receipt, title: "Receipt + file routine", desc: "So nothing gets lost" },
    { icon: Users, title: "Clear 'who does what'", desc: "So work doesn't get stuck" },
    { icon: FileText, title: "One-page staff guide", desc: "So everyone follows the same steps" },
    { icon: GraduationCap, title: "Short handover training", desc: "So it sticks" }
  ];

  return (
    <section id="what-you-get" className="py-20 md:py-28 bg-muted/30">
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-6"
          >
            Deliverables
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-medium tracking-tight mb-4"
          >
            What you get (and keep)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            You don't just get advice. You get a simple system your team can keep using.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((item, index) => {
            const row = Math.floor(index / 3);
            const cardY = useTransform(smoothProgress, [0.1 + row * 0.05, 0.3 + row * 0.05], [50, 0]);
            const cardOpacity = useTransform(smoothProgress, [0.1 + row * 0.05, 0.25 + row * 0.05], [0, 1]);

            return (
              <motion.div
                key={index}
                style={{ y: cardY, opacity: cardOpacity }}
                className="group bg-card border border-border/60 rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3, ease: DROPBOX_EASE }}
              >
                <motion.div 
                  className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <item.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm text-muted-foreground text-center mt-8"
        >
          Already using the $0 tracker? We can build the full setup around it.
        </motion.p>
      </div>
    </section>
  );
};

// How It Works - Dark premium section
const HowItWorks = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { label: "Start", desc: "We learn how you work today (quick call + simple intake)" },
    { label: "Build", desc: "We set up folders, tracking, and a routine" },
    { label: "Run", desc: "We test it with real examples so it works in real life" },
    { label: "Grow", desc: "If you want more support later, we help with the next system" }
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary-background text-white overflow-hidden">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} 
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">
            Process
          </span>
          <div className="h-px flex-1 bg-white/20" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-light tracking-tight mb-16"
        >
          How it works
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: DROPBOX_EASE }}
              className="relative"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-lg font-semibold text-accent">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{step.label}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href={CALENDLY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 bg-white text-primary font-semibold rounded-lg transition-all duration-150 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Grant Setup
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// Timeline - Clean editorial
const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section className="py-20 md:py-28 bg-background">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-light tracking-tight text-center mb-16"
        >
          Timeline <span className="text-muted-foreground font-normal">(about 2 weeks)</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[{ title: "Week 1", items: week1 }, { title: "Week 2", items: week2 }].map((week, weekIndex) => (
            <motion.div
              key={weekIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + weekIndex * 0.15, ease: DROPBOX_EASE }}
              className="bg-card border border-border/60 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-primary mb-5">{week.title}</h3>
              <ul className="space-y-4">
                {week.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing - Premium cards
const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tiers = [
    { name: "Setup Only", desc: "Best if your team can do the filing. Includes the setup + guide + handover." },
    { name: "Setup + Clean-Up", tag: "Most common", desc: "Includes setup + we help organize recent receipts/files so you start clean." },
    { name: "Rescue Setup", desc: "Includes deeper clean-up + extra support." }
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-6"
          >
            Investment
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-medium tracking-tight mb-4"
          >
            Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            We price Grant Setup as a fixed project (no surprises). Pick the level you need:
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: DROPBOX_EASE }}
              whileHover={{ y: -6 }}
              className={`relative bg-card border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${tier.tag ? 'border-primary ring-2 ring-primary/20' : 'border-border/60'}`}
            >
              {tier.tag && (
                <span className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {tier.tag}
                </span>
              )}
              <h3 className="font-semibold text-lg text-foreground mb-3 mt-1">{tier.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tier.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-muted-foreground text-center mt-8"
        >
          We'll confirm the right option on a short call.
        </motion.p>
      </div>
    </section>
  );
};

// Boundaries - Simple and clean
const Boundaries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const items = [
    "We don't do bookkeeping or taxes",
    "We don't judge the past",
    "We don't 'audit' your organization"
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div ref={ref} className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-light tracking-tight mb-8"
        >
          What we <span className="italic text-muted-foreground">don't</span> do
        </motion.h2>

        <div className="space-y-4 mb-8">
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
    </section>
  );
};

// Grant Eligibility
const GrantEligibility = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div ref={ref} className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl font-medium tracking-tight mb-4"
        >
          Can grant funds pay for this?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-3"
        >
          Often, yes. This is capacity-building work: tools, workflow setup, training, and systems your team can reuse.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs text-muted-foreground/70"
        >
          Always follow your funder's rules.
        </motion.p>
      </div>
    </section>
  );
};

// Mini FAQ - Accordion style
const MiniFAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    { q: "Is this only for one grant?", a: "No. We build it once so you can reuse it for every grant." },
    { q: "Do we need new software?", a: "No. We work inside tools you already use." },
    { q: "How long does it take?", a: "Most setups take about 2 weeks." },
    { q: "What if we're not sure this is the right fit?", a: "Start with Get Started. We'll point you to the best next step." }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground"
          >
            Quick Answers
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: DROPBOX_EASE }}
            className="h-px flex-1 bg-border origin-left"
          />
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: DROPBOX_EASE }}
              className="py-6 border-b border-border"
            >
              <h3 className="font-medium text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA - Dark premium
const FinalCTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: DROPBOX_EASE }
    }
  };

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-36 bg-secondary-background text-white relative overflow-hidden">
      {/* Grid pattern */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: DROPBOX_EASE }}
      >
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} 
        />
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Ready to stop
            <br />
            <span className="font-normal italic text-white/70">scrambling?</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-white/60 mb-10 max-w-xl mx-auto"
          >
            Let's set up working basics so funding is easier to manage.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-5"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/start-here"
                className="inline-flex items-center gap-3 px-7 py-4 bg-white text-primary font-semibold rounded-lg transition-all duration-150 hover:bg-white/90 hover:shadow-lg"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <Link to="/free-check" className="text-white/50 hover:text-accent text-sm transition-colors">
              Try the free check →
            </Link>

            <p className="text-sm text-white/40 mt-4">
              Prefer email?{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent transition-colors underline-offset-2 hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </motion.div>
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
          <FinalCTASection />
        </main>
        
        <Footer />
      </div>
    </MotionPreferencesProvider>
  );
};

export default GrantSetup;
