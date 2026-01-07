import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { MotionControls } from '@/components/MotionControls';

import { 
  MotionPreferencesProvider, 
  useStaggeredReveal,
  TIMING 
} from '@/hooks/use-scroll-reveal';
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL, CONTACT_EMAIL } from '@/constants/urls';
import { 
  Check, X, ArrowRight, FileCheck, ClipboardCheck, Users, Sparkles,
  Building2, DollarSign, UserCog, Briefcase, Database, Heart, HandHeart,
  Shield, Clock, Mail, ChevronDown
} from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

// Premium scroll-based section wrapper with parallax and reveal
const ScrollSection = ({ 
  children, 
  className = "",
  parallaxStrength = 0.1,
  fadeIn = true 
}: { 
  children: React.ReactNode; 
  className?: string;
  parallaxStrength?: number;
  fadeIn?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(smoothProgress, [0, 1], [50 * parallaxStrength, -50 * parallaxStrength]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);

  return (
    <motion.div
      ref={ref}
      style={fadeIn ? { y, opacity, scale } : { y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Sticky CTA Header Component
const StickyCTA = () => {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-secondary-background/90 backdrop-blur-xl border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">N</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight group-hover:text-white/80 transition-colors">
            Nimara
          </span>
        </Link>
        <motion.a
          href={CALENDLY_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold rounded-xl text-sm shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
        >
          Book a 20-min Fit Call
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.a>
      </div>
    </motion.div>
  );
};

// 1) HERO Section - Clean, calm, premium
const HeroSection = () => {
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(8, { staggerDelay: 100, baseDelay: 150 });

  return (
    <section 
      id="hero"
      ref={ref} 
      className="min-h-[100vh] bg-background relative overflow-hidden flex items-center pt-20"
    >
      {/* Subtle, calm background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Single soft primary glow */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-bl from-primary/[0.04] via-primary/[0.02] to-transparent rounded-full blur-3xl" 
        />
        {/* Subtle accent glow */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-gradient-to-tr from-accent/[0.03] to-transparent rounded-full blur-3xl" 
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-left">
          {/* Eyebrow */}
          <motion.p
            style={getItemStyle(0)}
            className="text-[11px] font-semibold tracking-[0.15em] uppercase text-primary/80 mb-6"
          >
            Core 5 Capacity Buildout
          </motion.p>

          {/* Headline */}
          <motion.h1
            style={getItemStyle(1)}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-6"
          >
            Build funder-ready systems in 6 weeks.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            style={getItemStyle(2)}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-6"
          >
            We install your core nonprofit systems and train your team to run them — without audit talk.
          </motion.p>

          {/* Support line */}
          <motion.p
            style={getItemStyle(3)}
            className="text-sm text-muted-foreground/70 mb-10"
          >
            Includes 90-Day Ops Insurance (free support after install so it sticks).
          </motion.p>

          {/* CTAs */}
          <motion.div
            style={getItemStyle(4)}
            className="flex flex-col sm:flex-row items-start gap-4 mb-6"
          >
            {/* Primary CTA */}
            <motion.a
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              Book a 20-min Fit Call
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            {/* Secondary CTA - Text link */}
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 py-3.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="relative">
                Take the Free Health Check (10 min)
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity" />
              </span>
            </a>
          </motion.div>

          {/* Micro-trust line */}
          <motion.p
            style={getItemStyle(5)}
            className="text-xs text-muted-foreground/50 mb-8"
          >
            Built for Canadian nonprofits (0–25 staff). No funding guarantees.
          </motion.p>

          {/* Cohort info - subtle */}
          <motion.p
            style={getItemStyle(6)}
            className="text-xs text-muted-foreground/40"
          >
            Next cohort limited to 5 organizations.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

// 1.5) BUILDOUT TIERS Section - Pick your level
const BuildoutTiersSection = () => {
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(8, { staggerDelay: 80, baseDelay: 100 });

  const tiers = [
    {
      name: "Core 3",
      label: "Starter",
      price: "$14,900 CAD",
      bestFor: "Newer orgs or 1–2 grants.",
      includes: [
        "Board & Governance",
        "Money & Grants (Proof Pack system)",
        "Programs & Ops"
      ],
      timeline: "4–5 weeks",
      highlighted: false,
      ctaText: "Book a Fit Call",
      ctaLink: CALENDLY_BOOKING_URL
    },
    {
      name: "Core 5",
      label: "Flagship",
      price: "$24,900 CAD",
      bestFor: "2+ grants or recurring reporting.",
      includes: [
        "Everything in Core 3",
        "People (Staff & HR)",
        "Tools & Data"
      ],
      bonus: "Includes 90-Day Ops Insurance",
      timeline: "6 weeks",
      highlighted: true,
      ctaText: "Book a 20-min Fit Call",
      ctaLink: CALENDLY_BOOKING_URL
    },
    {
      name: "Premium 7",
      label: "Custom",
      price: "From $34,900+ CAD",
      bestFor: "5+ grants, multiple programs, or 25+ staff.",
      includes: [
        "Everything in Core 5",
        "Fundraising & Donors (Optional)",
        "Volunteers (Optional)"
      ],
      timeline: "6–10 weeks (typical)",
      highlighted: false,
      ctaText: "Request Custom Scope",
      ctaLink: CALENDLY_BOOKING_URL
    }
  ];

  return (
    <section 
      id="tiers" 
      ref={ref}
      className="py-20 md:py-28 bg-background relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            style={getItemStyle(0)}
            className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4"
          >
            Pick your buildout level
          </motion.h2>
          <motion.p
            style={getItemStyle(1)}
            className="text-lg text-muted-foreground"
          >
            Most teams with grants choose Core 5.
          </motion.p>
        </div>

        {/* Tier cards */}
        <motion.div 
          style={getItemStyle(2)}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all ${
                tier.highlighted
                  ? "bg-primary/[0.04] border-2 border-primary/30 shadow-lg shadow-primary/5"
                  : "bg-card border border-border"
              }`}
            >
              {/* Most Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wide bg-primary text-primary-foreground rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier header */}
              <div className={tier.highlighted ? "pt-3" : ""}>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {tier.name} <span className="font-normal text-muted-foreground">({tier.label})</span>
                </h3>
                <p className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {tier.price}
                </p>
              </div>

              {/* Best for */}
              <p className="text-sm text-muted-foreground mb-5">
                <span className="font-medium text-foreground">Best for:</span> {tier.bestFor}
              </p>

              {/* Includes */}
              <div className="space-y-3 mb-5">
                {tier.includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* Bonus line */}
              {tier.bonus && (
                <p className="text-sm text-primary font-medium mb-5">
                  {tier.bonus}
                </p>
              )}

              {/* Timeline */}
              <p className="text-sm text-muted-foreground mb-6">
                <span className="font-medium text-foreground">Timeline:</span> {tier.timeline}
              </p>

              {/* CTA */}
              {tier.highlighted ? (
                <motion.a
                  href={tier.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30"
                >
                  {tier.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              ) : (
                <a
                  href={tier.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {tier.ctaText}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Payment microcopy */}
        <motion.p
          style={getItemStyle(3)}
          className="text-center text-sm text-muted-foreground/70 mb-6"
        >
          Payment: 50% to start, 50% at delivery. Invoiced as capacity building.
        </motion.p>

        {/* Not sure link */}
        <motion.div
          style={getItemStyle(4)}
          className="text-center"
        >
          <a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="relative">
              Not sure? Take the Free Health Check (10 min)
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity" />
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// 1.75) WHAT WE INSTALL Section
const WhatWeInstallSection = () => {
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(10, { staggerDelay: 60, baseDelay: 100 });

  const deliverables = [
    {
      title: "Grant Proof Pack System",
      bullets: [
        "Proof tracker set up for your grants",
        "Folder map + file naming rules",
        "Pull checklist (what to send when asked)",
        "Approvals linked to spending"
      ]
    },
    {
      title: "Money & Grants Routine",
      bullets: [
        "Simple coding rules (so numbers match)",
        "Budget vs actual tracking setup",
        "Month-end checklist (30–60 min)",
        "Clear \"how we track\" steps"
      ]
    },
    {
      title: "Governance Basics",
      bullets: [
        "Minutes template + decision log",
        "Policy tracker (what exists / what's missing)",
        "Board folder structure",
        "Clear approval trail"
      ]
    },
    {
      title: "Programs & Ops Basics",
      bullets: [
        "6–10 micro-SOPs (1–2 pages each)",
        "\"Where things live\" guide",
        "Onboarding checklist",
        "Simple weekly/monthly routine"
      ]
    },
    {
      title: "Tools & Data Setup",
      bullets: [
        "Clean shared folders (Drive/SharePoint)",
        "Templates installed where staff work",
        "Simple access + naming rules",
        "Easy handoff for new staff"
      ]
    }
  ];

  const trustPoints = [
    "Plain language (no audit talk)",
    "Works with the tools you already use",
    "Training + handoff so it sticks",
    "90-Day Ops Insurance on Core 5"
  ];

  return (
    <section 
      id="what-we-install" 
      ref={ref}
      className="py-20 md:py-28 bg-muted/30 relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            style={getItemStyle(0)}
            className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4"
          >
            What we install (not just advise)
          </motion.h2>
          <motion.p
            style={getItemStyle(1)}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            You leave with a working system, clear steps, and a team that knows how to run it.
          </motion.p>
        </div>

        {/* 2-column layout */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-12">
          {/* Left: Deliverables grid */}
          <motion.div 
            style={getItemStyle(2)}
            className="grid sm:grid-cols-2 gap-5"
          >
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-card border border-border rounded-xl p-5 lg:p-6"
              >
                <h3 className="text-base font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Trust box */}
          <motion.div 
            style={getItemStyle(3)}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-primary/[0.04] border border-primary/20 rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Built for small teams
              </h3>
              <ul className="space-y-3 mb-6">
                {trustPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Primary CTA */}
              <motion.a
                href={CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30 mb-4"
              >
                Book a 20-min Fit Call
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              {/* Secondary text link */}
              <a
                href={TYPEFORM_HEALTH_CHECK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="relative">
                  Not sure? Take the Free Health Check (10 min)
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity" />
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer row */}
        <motion.p
          style={getItemStyle(4)}
          className="text-center text-xs text-muted-foreground/50 mt-10"
        >
          Not legal, tax, or audit advice. No funding guarantees. Not full bookkeeping cleanup.
        </motion.p>
      </div>

      {/* Subtle divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

// 1.9) SIX-WEEK PROCESS Section
const SixWeekProcessSection = () => {
  const [openWeek, setOpenWeek] = useState<string>("week-1");
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(10, { staggerDelay: 60, baseDelay: 100 });

  const weeks = [
    {
      id: "week-1",
      title: "Week 1 — Set the structure",
      bullets: [
        "Install tracker + folder map + naming rules",
        "Confirm grants, reporting needs, and approvals",
        "Quick win: first \"Proof Pack\" folder set up"
      ]
    },
    {
      id: "week-2",
      title: "Week 2 — Build with real data",
      bullets: [
        "Connect spending to invoices, receipts, and approvals",
        "Set coding rules so reports match records",
        "Start populating proof packs"
      ]
    },
    {
      id: "week-3",
      title: "Week 3 — Make routines simple",
      bullets: [
        "Budget vs actual setup + month-end checklist",
        "Draft micro-SOPs (short steps people follow)",
        "Clean handoffs between staff"
      ]
    },
    {
      id: "week-4",
      title: "Week 4 — Train and roll out",
      bullets: [
        "Train staff on the routine + proof packs",
        "Start using the system in real work",
        "Fix confusion fast"
      ]
    },
    {
      id: "week-5",
      title: "Week 5 — Stabilize",
      bullets: [
        "Tighten rules, permissions, and file hygiene",
        "Review one full grant proof pack end-to-end",
        "Reduce \"special cases\" that break the process"
      ]
    },
    {
      id: "week-6",
      title: "Week 6 — Handoff + prove it works",
      bullets: [
        "Run a \"Funder Request Drill\" (pull proof fast)",
        "Finalize SOPs + handoff guide",
        "Set the 90-day support plan (Core 5)"
      ]
    }
  ];

  const requiredInputs = [
    "List of active grants (or top 3–5)",
    "Access to current files (Drive/SharePoint)",
    "Your current tracking method (sheet/QBO/etc.)",
    "1–2 staff champions to meet weekly"
  ];

  const outcomes = [
    "Proof packs you can pull fast",
    "Clean tracking that matches reporting",
    "Clear steps (SOPs) your team follows",
    "Staff trained to run the system"
  ];

  return (
    <section 
      id="six-week-process" 
      ref={ref}
      className="py-20 md:py-28 bg-background relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            style={getItemStyle(0)}
            className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4"
          >
            How the 6-week install works
          </motion.h2>
          <motion.p
            style={getItemStyle(1)}
            className="text-lg text-muted-foreground"
          >
            We build, train, and stabilize the system so it sticks.
          </motion.p>
        </div>

        {/* 2-column layout */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-12">
          {/* Left: Accordion */}
          <motion.div style={getItemStyle(2)}>
            <div className="space-y-3">
              {weeks.map((week) => (
                <div
                  key={week.id}
                  className={`border rounded-xl overflow-hidden transition-colors ${
                    openWeek === week.id 
                      ? "border-primary/30 bg-primary/[0.02]" 
                      : "border-border bg-card"
                  }`}
                >
                  <button
                    onClick={() => setOpenWeek(openWeek === week.id ? "" : week.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className={`font-semibold ${
                      openWeek === week.id ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {week.title}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        openWeek === week.id ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openWeek === week.id ? "auto" : 0,
                      opacity: openWeek === week.id ? 1 : 0
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4">
                      <ul className="space-y-2">
                        {week.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Sidebar cards */}
          <div className="space-y-5">
            {/* Required inputs card */}
            <motion.div 
              style={getItemStyle(3)}
              className="bg-card border border-border rounded-xl p-5"
            >
              <h3 className="text-base font-semibold text-foreground mb-4">
                What we need from you
              </h3>
              <ul className="space-y-2.5">
                {requiredInputs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What you get card */}
            <motion.div 
              style={getItemStyle(4)}
              className="bg-primary/[0.04] border border-primary/20 rounded-xl p-5"
            >
              <h3 className="text-base font-semibold text-foreground mb-4">
                What you'll have by Week 6
              </h3>
              <ul className="space-y-2.5">
                {outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* CTA row */}
        <motion.div 
          style={getItemStyle(5)}
          className="mt-12 text-center"
        >
          <motion.a
            href={CALENDLY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Book a 20-min Fit Call
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <div className="mt-4">
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="relative">
                Not sure? Take the Free Health Check (10 min)
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity" />
              </span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Micro disclaimer */}
          <p className="text-xs text-muted-foreground/50 mt-6">
            Not legal, tax, or audit advice. No funding guarantees.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// 2) WHO THIS IS FOR Section - with hard filters inspired by Acquisition.com
const WhoThisIsFor = () => {
  const forYou = [
    "You're a Canadian nonprofit or charity",
    "You have 0–25 staff (or heavy volunteer ops)",
    "You have grants or funder reporting requirements",
    "Receipts, approvals, and files are scattered across inboxes",
    "Your reports don't match your records",
    "You want one simple system your team will actually use"
  ];

  const notForYou = [
    "You're looking for guaranteed funding (we don't do that)",
    "You want a big report but no operational change",
    "You need legal, tax, or CRA advice (not our thing)",
    "You need a full bookkeeping cleanup (we're not accountants)",
    "You're over 25 staff (we work with small teams only)"
  ];

  const { ref, getItemStyle } = useStaggeredReveal(forYou.length + notForYou.length + 3, { staggerDelay: 60, baseDelay: 0 });

  return (
    <section id="who-its-for" className="py-24 md:py-32 bg-mint-light relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--mint-dark) / 0.08) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div ref={ref} className="relative max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section header with exclusivity framing */}
        <div className="text-center mb-16">
          <span
            style={getItemStyle(0)}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-mint-dark mb-4"
          >
            Hard Fit Check
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            We're selective about who we work with.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            This program is intense. We want to make sure it's the right fit before we both invest the time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For You */}
          <motion.div 
            style={getItemStyle(1)}
            className="bg-white rounded-2xl p-8 shadow-sm border-2 border-mint-dark/20 relative overflow-hidden"
            whileHover={{ 
              y: -4, 
              boxShadow: "0 12px 32px -8px hsl(var(--mint-dark) / 0.15)",
              borderColor: "hsl(var(--mint-dark) / 0.4)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Recommended badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-mint-dark text-white rounded-full">
                Good Fit
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-8">
              This is for you if…
            </h2>

            <div className="space-y-4">
              {forYou.map((item, index) => (
                <div
                  key={index}
                  style={getItemStyle(2 + index)}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-mint-dark/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-mint-dark" strokeWidth={2.5} />
                  </div>
                  <span className="text-foreground text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Not For You - with stronger language */}
          <motion.div 
            style={getItemStyle(2 + forYou.length)}
            className="bg-white/60 rounded-2xl p-8 border border-red-200/50 relative"
            whileHover={{ 
              y: -4, 
              boxShadow: "0 8px 24px -8px hsl(var(--foreground) / 0.08)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Not a fit badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-600 rounded-full">
                Not a Fit
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-muted-foreground mb-8">
              Please don't apply if…
            </h2>

            <div className="space-y-4">
              {notForYou.map((item, index) => (
                <div
                  key={index}
                  style={getItemStyle(3 + forYou.length + index)}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-500" strokeWidth={2.5} />
                  </div>
                  <span className="text-muted-foreground text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 3) THE OUTCOME Section
const OutcomeSection = () => {
  const outcomes = [
    { icon: FileCheck, title: "Pull proof fast", desc: "Invoices, receipts, approvals in one place" },
    { icon: ClipboardCheck, title: "Reports match records", desc: "Budget vs actual is clean" },
    { icon: Users, title: "Clear roles + approvals", desc: "People know the steps" },
    { icon: Sparkles, title: "New staff can onboard fast", desc: "Files and SOPs are obvious" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  } as const;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 24,
      scale: 0.96
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        mass: 0.8
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="outcomes" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--primary)) 0%, transparent 70%)'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span
            variants={headerVariants}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-5"
          >
            Outcomes
          </motion.span>

          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground"
          >
            What "done" looks like
          </motion.h2>
        </motion.div>

        {/* Outcomes grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {outcomes.map((item, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -4, 
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.08)",
                transition: { duration: 0.2 }
              }}
              className="group relative bg-card border border-border rounded-2xl p-6 lg:p-7 transition-colors duration-300 hover:border-primary/40 focus-within:ring-2 focus-within:ring-primary/20"
            >
              {/* Icon container */}
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-primary/15"
                aria-hidden="true"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <item.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
              </motion.div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 4) THE FRAMEWORK Section
const FrameworkSection = () => {
  const coreAreas = [
    { icon: Building2, title: "Board & Governance", desc: "Clear decisions, minutes, and follow-through.", optional: false },
    { icon: DollarSign, title: "Money & Grants", desc: "Track spending, save proof, make reporting easier.", optional: false },
    { icon: UserCog, title: "People (Staff & HR)", desc: "Clear roles, handoffs, basic HR.", optional: false },
    { icon: Briefcase, title: "Programs & Ops", desc: "Simple plans, tracking, reusable updates.", optional: false },
    { icon: Database, title: "Tools & Data", desc: "Folders, templates, and simple tools people can find.", optional: false },
    { icon: Heart, title: "Fundraising & Donors", desc: "Simple donor tracking + routines.", optional: true },
    { icon: HandHeart, title: "Volunteers", desc: "Onboarding, scheduling, hours tracking.", optional: true }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  } as const;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 24,
      scale: 0.96
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        mass: 0.8
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="framework" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--primary)) 0%, transparent 70%)'
        }}
      />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span
            variants={headerVariants}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-5"
          >
            Framework
          </motion.span>

          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4"
          >
            The Core 5{' '}
            <span className="text-muted-foreground font-normal">(plus 2 optional areas)</span>
          </motion.h2>
        </motion.div>

        {/* Core areas grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {coreAreas.filter(a => !a.optional).map((area, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -4, 
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.08)",
                transition: { duration: 0.2 }
              }}
              className="group relative bg-card border border-border rounded-2xl p-6 lg:p-7 transition-colors duration-300 hover:border-primary/40 focus-within:ring-2 focus-within:ring-primary/20"
            >
              {/* Icon container */}
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-primary/15"
                aria-hidden="true"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <area.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
              </motion.div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                {area.title}
              </h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {area.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Optional areas - Premium styling */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div 
            variants={headerVariants}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
              Premium Add-ons
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {coreAreas.filter(a => a.optional).map((area, index) => (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.25 }
                }}
                className="group relative overflow-hidden bg-gradient-to-br from-primary/[0.06] to-accent/[0.04] border-2 border-primary/20 rounded-2xl p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Premium glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Optional badge - Nimara branded */}
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-wider uppercase text-primary bg-gradient-to-r from-primary/15 to-accent/10 px-3 py-1.5 rounded-full shadow-sm border border-primary/20">
                  ✦ Optional
                </span>
                
                {/* Icon container - Nimara branded */}
                <motion.div 
                  className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/15 flex items-center justify-center mb-5 shadow-sm"
                  aria-hidden="true"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <area.icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
                </motion.div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.desc}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-muted-foreground text-center max-w-lg mx-auto leading-relaxed"
        >
          Most teams start with <strong className="text-foreground font-medium">Core 3</strong> or{' '}
          <strong className="text-foreground font-medium">Core 5</strong>.{' '}
          <span className="text-muted-foreground/80">Premium 7 is for higher complexity.</span>
        </motion.p>
      </div>
    </section>
  );
};

// 5) PRICING Section
const PricingSection = () => {
  const tiers = [
    {
      name: "Core 3",
      subtitle: "Starter",
      price: "$14,900",
      currency: "CAD",
      bestFor: "Newer orgs, 1–2 grants, tight capacity budget.",
      includes: [
        "Board & Governance basics",
        "Money & Grants proof system (includes Proof Tracker setup)",
        "Programs & Ops basics"
      ],
      timeline: "4–5 weeks",
      badge: null,
      cta: "Book a Fit Call (Core 3)"
    },
    {
      name: "Core 5",
      subtitle: "Flagship",
      price: "$24,900",
      currency: "CAD",
      bestFor: "Most orgs with 2+ grants or recurring reporting.",
      includes: [
        "Everything in Core 3",
        "People (Staff & HR) basics",
        "Tools & Data setup",
        "Reporting-ready pack structure"
      ],
      timeline: "6-week install",
      badge: "Most Popular",
      insurance: true,
      cta: "Book a Fit Call (Core 5)"
    },
    {
      name: "Premium 7",
      subtitle: "Custom",
      price: "Custom",
      currency: "",
      bestFor: "Complex orgs, 5+ grants, multiple programs, or 25+ staff.",
      includes: [
        "Everything in Core 5",
        "Fundraising & Donors module",
        "Volunteers module"
      ],
      timeline: "Custom (typically 6–10 weeks)",
      badge: null,
      cta: "Request Custom Scope"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  } as const;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 32,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        mass: 0.9
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="pricing" className="py-28 md:py-36 bg-secondary-background text-white overflow-hidden relative">
      {/* Premium background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial from-primary/[0.06] via-primary/[0.02] to-transparent rounded-full blur-3xl" />
        {/* Accent orb */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-gradient-to-tl from-accent/[0.05] to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} 
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={headerVariants} className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/60" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
              Investment
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent/60" />
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.02em] text-white mb-5"
          >
            Pick your buildout level
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-white/50 max-w-xl mx-auto text-lg"
          >
            We recommend Core 5 for most teams with active grants.
          </motion.p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {tiers.map((tier, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" }
              }}
              className={`group relative bg-white/5 backdrop-blur-sm border rounded-2xl p-7 lg:p-8 transition-colors duration-300 ${
                tier.badge 
                  ? 'border-accent ring-2 ring-accent/30 bg-white/[0.08]' 
                  : 'border-white/10 hover:border-white/25 hover:bg-white/[0.08]'
              }`}
            >
              {tier.badge && (
                <motion.span 
                  className="absolute -top-3.5 left-6 px-4 py-1.5 bg-accent text-secondary-background text-xs font-bold tracking-wide rounded-full shadow-lg shadow-accent/25"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {tier.badge}
                </motion.span>
              )}

              <div className="mb-6">
                <p className="text-sm text-white/50 mb-1 font-medium">{tier.subtitle}</p>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{tier.name}</h3>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-white tracking-tight">{tier.price}</span>
                  <span className="text-sm text-white/50 font-medium">{tier.currency}</span>
                </div>
              </div>

              <p className="text-sm text-white/60 mb-6 pb-6 border-b border-white/10 leading-relaxed">
                <span className="text-white/40 font-medium">Best for:</span> {tier.bestFor}
              </p>

              <div className="space-y-3.5 mb-6">
                {tier.includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-white/75 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-7">
                <div className="flex items-center gap-2.5 text-sm text-white/50">
                  <Clock className="w-4 h-4" />
                  <span>{tier.timeline}</span>
                </div>
                {tier.insurance && (
                  <motion.div 
                    className="flex items-center gap-2.5"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Shield className="w-4 h-4 text-accent" />
                    <span className="text-sm text-accent font-semibold">90-day Ops Insurance included</span>
                  </motion.div>
                )}
              </div>

              <a
                href={CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl text-sm transition-all duration-200 ${
                  tier.badge
                    ? 'bg-accent text-secondary-background hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25'
                    : 'bg-white/10 text-white hover:bg-white/20 hover:shadow-lg hover:shadow-white/10'
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* Footer notes */}
        <motion.div 
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-white/50">
            <span className="text-white/70 font-medium">Payment terms:</span> 50% to start, 50% at delivery.
          </p>
          <p className="text-sm text-white/40">
            We can invoice as capacity building.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// 6) WHAT'S INCLUDED Section
const DeliverablesSection = () => {
  const deliverables = [
    { title: "Grant Proof Pack System", desc: "Tracker + folders + naming + pull checklist" },
    { title: "Simple finance routine", desc: "Coding rules + month-end checklist" },
    { title: "Documentation pack", desc: "6–10 micro-SOPs (1–2 pages each)" },
    { title: "Governance basics", desc: "Minutes template + decision log + policy tracker" },
    { title: "Training + handoff", desc: "2–3 sessions + recordings + handoff guide" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="deliverables" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div 
          className="text-center mb-14 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span
            variants={headerVariants}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-5"
          >
            Deliverables
          </motion.span>

          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground"
          >
            What we install{' '}
            <span className="text-muted-foreground font-normal">(not just advise)</span>
          </motion.h2>
        </motion.div>

        {/* Deliverables list */}
        <motion.div 
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                x: 4,
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
                transition: { duration: 0.2 }
              }}
              className="flex items-start gap-4 p-5 lg:p-6 bg-card border border-border rounded-xl transition-colors duration-300 hover:border-primary/40"
            >
              <motion.div 
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Check className="w-5 h-5 text-primary" strokeWidth={2} />
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">{item.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 7) TIMELINE Section
const TimelineSection = () => {
  const [openWeek, setOpenWeek] = useState<number | null>(0);
  
  const weeks = [
    { week: 1, title: "Map + set structure", desc: "Folders, naming, tracker installed. We audit what you have and build the foundation." },
    { week: "2–3", title: "Build proof packs", desc: "Using your real data to create organized, funder-ready documentation systems." },
    { week: 4, title: "Train staff", desc: "Start using the routine. Hands-on sessions so your team owns the process." },
    { week: "5–6", title: "Stabilize + handoff", desc: "Tighten, document, and transition. Final polish and complete knowledge transfer." }
  ];

  const inputs = [
    "Access to existing files",
    "List of active grants",
    "Your current tracking method",
    "1–2 staff champions"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 24,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="timeline" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span
            variants={headerVariants}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-5"
          >
            Timeline
          </motion.span>

          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4"
          >
            How the 6-week install works
          </motion.h2>
          
          <motion.p
            variants={headerVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A structured, proven process that gets you from scattered to organized.
          </motion.p>
        </motion.div>

        {/* Timeline cards - horizontal on desktop */}
        <motion.div 
          className="grid md:grid-cols-4 gap-4 lg:gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {weeks.map((item, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.25 }
              }}
              className="group relative bg-card border border-border rounded-2xl p-6 transition-colors duration-300 hover:border-primary/40"
            >
              {/* Week badge */}
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-primary/15"
                whileHover={{ scale: 1.05, rotate: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-lg font-bold text-primary">W{item.week}</span>
              </motion.div>
              
              {/* Connector line (hidden on mobile, visible on desktop) */}
              {index < weeks.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-3 lg:-right-4 w-6 lg:w-8 h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Required Inputs */}
        <motion.div 
          className="bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] border border-primary/20 rounded-2xl p-8 lg:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <motion.div 
              className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ClipboardCheck className="w-6 h-6 text-primary" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-foreground text-xl tracking-tight">
                Required inputs from you
              </h3>
              <p className="text-sm text-muted-foreground">What we need to get started</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {inputs.map((input, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-primary/10 transition-colors hover:border-primary/25"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                </div>
                <span className="text-[15px] text-foreground font-medium">{input}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 8) GUARANTEE Section
const GuaranteeSection = () => {
  const insurance = [
    "2 check-ins per month",
    "48-hour response for questions",
    "One refresh training",
    "Light template/process updates within scope"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="guarantee" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/[0.05] rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
        {/* Premium header */}
        <motion.div 
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={headerVariants} className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary">
              Protection
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/60" />
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Built-in guarantees
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Delivery Guarantee */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl p-7 lg:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <motion.div 
              className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5"
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Shield className="w-6 h-6 text-primary" />
            </motion.div>
            
            <h3 className="relative text-xl font-semibold text-foreground mb-4 tracking-tight">
              Delivery guarantee
            </h3>
            <div className="relative space-y-4 text-[15px] text-muted-foreground leading-relaxed">
              <p>
                If we don't deliver the listed deliverables by the end of the install period (with required inputs), you don't pay the final payment until we do.
              </p>
              <p>
                If we still can't deliver within 14 extra days, you can request a refund.
              </p>
            </div>
          </motion.div>

          {/* 90-Day Insurance */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative bg-gradient-to-br from-accent/[0.08] to-accent/[0.02] border border-accent/20 rounded-2xl p-7 lg:p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <motion.div 
              className="relative w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Clock className="w-6 h-6 text-mint-dark" />
            </motion.div>
            
            <h3 className="relative text-xl font-semibold text-foreground mb-5 tracking-tight">
              90-Day Ops Insurance
              <span className="ml-2 text-xs font-medium text-mint-dark bg-accent/30 px-2 py-0.5 rounded-full">Included</span>
            </h3>
            <div className="relative space-y-3">
              {insurance.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-mint-dark" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm text-muted-foreground text-center mt-10"
        >
          We don't guarantee funding outcomes.
        </motion.p>
      </div>
    </section>
  );
};

// 9) SOCIAL PROOF Section

// 10) FAQ Section
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const faqs = [
    { q: "Do you guarantee funding?", a: "No. We help you build systems that make reporting easier and funder relationships smoother, but funding decisions are made by funders." },
    { q: "Are you an audit firm?", a: "No. We're an operations and systems consultancy. We don't provide audit, legal, or tax advice." },
    { q: "How fast can you start?", a: "Usually within 1–2 weeks of signed agreement and deposit. We'll confirm timing on the fit call." },
    { q: "What if we're 25+ staff?", a: "You'll likely need Premium 7 or a custom scope. Book a call and we'll assess together." },
    { q: "What tools do you use?", a: "We work inside the tools you already have: Google Workspace, Microsoft 365, QuickBooks, Xero, etc. No new software required." },
    { q: "Will you work with our internal hire/contractor?", a: "Yes. We can collaborate with your team or train them to maintain the systems we build." },
    { q: "What's not included?", a: "Bookkeeping, tax prep, legal advice, full HR policy development, and custom software builds." },
    { q: "How do payments work?", a: "50% deposit to start, 50% on delivery. We can invoice as capacity building if that helps with funder reporting." }
  ];

  const { ref, getItemStyle } = useStaggeredReveal(faqs.length + 2, { staggerDelay: 50, baseDelay: 0 });

  return (
    <section id="faq" className="py-24 md:py-32 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} 
      />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-6 lg:px-12">
        {/* Premium header */}
        <div className="text-center mb-16">
          <div style={getItemStyle(0)} className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary">
              FAQ
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/60" />
          </div>

          <h2
            style={getItemStyle(1)}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Common questions
          </h2>
        </div>

        {/* FAQ items with premium styling */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              style={getItemStyle(2 + index)}
              initial={false}
              className={`
                group relative bg-card/80 backdrop-blur-sm border rounded-2xl overflow-hidden
                transition-all duration-300 ease-out
                ${openFaq === index 
                  ? 'border-primary/30 shadow-lg shadow-primary/5 ring-1 ring-primary/10' 
                  : 'border-border/40 hover:border-border/80 hover:shadow-md'}
              `}
            >
              {/* Subtle gradient overlay on hover/open */}
              <div className={`
                absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none
                bg-gradient-to-br from-primary/[0.02] via-transparent to-primary/[0.01]
                ${openFaq === index ? 'opacity-100' : 'group-hover:opacity-50'}
              `} />
              
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="relative w-full flex items-center justify-between p-6 text-left transition-colors"
              >
                <span className={`
                  font-medium pr-6 transition-colors duration-200
                  ${openFaq === index ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'}
                `}>
                  {faq.q}
                </span>
                <div className={`
                  flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                  transition-all duration-300
                  ${openFaq === index 
                    ? 'bg-primary/10 text-primary rotate-180' 
                    : 'bg-muted/50 text-muted-foreground group-hover:bg-muted'}
                `}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openFaq === index ? 'auto' : 0,
                  opacity: openFaq === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-border/60 via-border/30 to-transparent mb-4" />
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <div style={getItemStyle(2 + faqs.length)} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Have another question?{' '}
            <a 
              href="mailto:hello@nimara.ca" 
              className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
            >
              Reach out directly
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

// 11) FINAL CTA Section - with urgency and outcome focus
const FinalCTASection = () => {
  const { ref, getItemStyle } = useStaggeredReveal(6, { staggerDelay: 100, baseDelay: 0 });

  return (
    <section id="cta" ref={ref} className="py-24 md:py-32 bg-secondary-background text-white relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large decorative orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/[0.08] via-primary/[0.03] to-transparent rounded-full blur-3xl" />
        {/* Accent orb */}
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[400px] bg-gradient-to-tl from-accent/[0.06] to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} 
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Urgency badge */}
          <motion.div
            style={getItemStyle(0)}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-amber-500/10 border border-amber-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-amber-400">
              Only 5 spots per cohort — Q1 2025 filling up
            </span>
          </motion.div>

          <h2
            style={getItemStyle(1)}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-[-0.02em] mb-4"
          >
            Ready to stop dreading
            <br />
            <span className="text-primary">funder requests?</span>
          </h2>

          <p
            style={getItemStyle(2)}
            className="text-lg sm:text-xl text-white/60 mb-10 max-w-xl mx-auto"
          >
            In 6 weeks, your team will pull proof in minutes — not hours. Book a call to see if you qualify.
          </p>

          <div
            style={getItemStyle(3)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <motion.a
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground font-bold rounded-2xl shadow-2xl shadow-primary/30 transition-all duration-300 hover:shadow-[0_20px_50px_-10px] hover:shadow-primary/40 text-lg overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">I'm Ready to Get Funder-Proof</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-5 bg-white/5 backdrop-blur-sm border border-white/15 text-white font-semibold rounded-2xl transition-all hover:bg-white/10 hover:border-white/25"
            >
              Take the Free Health Check First
            </motion.a>
          </div>

          {/* Trust/authority line */}
          <p style={getItemStyle(4)} className="text-sm text-white/50 mb-6">
            We've helped Canadian nonprofits save <strong className="text-white/70">100+ hours/year</strong> on reporting.
          </p>

          <p style={getItemStyle(5)} className="text-sm text-white/40">
            Questions?{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 hover:text-white/60 transition-colors">
              {CONTACT_EMAIL}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Microcopy
const FooterMicrocopy = () => {
  return (
    <div className="bg-secondary-background border-t border-white/10 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-white/40">
          Nimara Technology Inc — Canada-first, small-team systems.
        </p>
        <p className="text-xs text-white/30 mt-1">
          Not legal, tax, or audit advice.
        </p>
      </div>
    </div>
  );
};

// Main Page Component
const CapacityBuildout = () => {
  return (
    <MotionPreferencesProvider>
      <div className="min-h-screen">
        <ScrollProgress />
        <ScrollToTop />
        <MotionControls />
        
        <Helmet>
          <title>Capacity Buildout | Build Funder-Ready Systems in 6 Weeks | Nimara</title>
          <meta name="description" content="We install your core nonprofit systems (Core 3 / Core 5 / Premium 7) and train your team to run them. 90-day Ops Insurance included." />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://nimara.ca/capacity-buildout" />
          
          <meta property="og:title" content="Capacity Buildout | Build Funder-Ready Systems in 6 Weeks | Nimara" />
          <meta property="og:description" content="We install your core nonprofit systems and train your team to run them. Built for Canadian nonprofits with 0–25 staff." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nimara.ca/capacity-buildout" />
          <meta property="og:image" content="https://nimara.ca/og-image.png" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Capacity Buildout | Build Funder-Ready Systems in 6 Weeks | Nimara" />
          <meta name="twitter:description" content="We install your core nonprofit systems and train your team to run them." />
        </Helmet>
        
        <StickyCTA />
        
        <main id="main" className="overflow-hidden">
          <HeroSection />
          <BuildoutTiersSection />
          <WhatWeInstallSection />
          <SixWeekProcessSection />
          <ScrollSection parallaxStrength={0.15}>
            <WhoThisIsFor />
          </ScrollSection>
          <ScrollSection parallaxStrength={0.1}>
            <OutcomeSection />
          </ScrollSection>
          <ScrollSection parallaxStrength={0.12}>
            <FrameworkSection />
          </ScrollSection>
          <ScrollSection parallaxStrength={0.08}>
            <PricingSection />
          </ScrollSection>
          <ScrollSection parallaxStrength={0.1}>
            <DeliverablesSection />
          </ScrollSection>
          <ScrollSection parallaxStrength={0.12}>
            <TimelineSection />
          </ScrollSection>
          <ScrollSection parallaxStrength={0.08}>
            <GuaranteeSection />
          </ScrollSection>
          <ScrollSection parallaxStrength={0.1}>
            <FAQSection />
          </ScrollSection>
          <ScrollSection parallaxStrength={0.05} fadeIn={false}>
            <FinalCTASection />
          </ScrollSection>
          <FooterMicrocopy />
        </main>
        
        <Footer />
      </div>
    </MotionPreferencesProvider>
  );
};

export default CapacityBuildout;
