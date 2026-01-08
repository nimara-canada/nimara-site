import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { MotionControls } from '@/components/MotionControls';
import { PricingSection } from '@/components/PricingSection';

import { 
  MotionPreferencesProvider, 
  useStaggeredReveal,
  TIMING 
} from '@/hooks/use-scroll-reveal';
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL, CONTACT_EMAIL } from '@/constants/urls';
import { 
  Check, X, ArrowRight, FileCheck, ClipboardCheck, Users, Sparkles,
  Building2, DollarSign, UserCog, Briefcase, Database, Heart, HandHeart,
  Shield, Clock, Mail, ChevronDown, GraduationCap
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

// Sticky CTA Header Component - Clean Nimara branding
const StickyCTA = () => {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-nim-navy backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-nim-purple flex items-center justify-center">
            <span className="text-sm font-bold text-white">N</span>
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
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-nim-mint text-nim-navy font-semibold rounded-xl text-sm transition-all hover:bg-nim-mint/90"
        >
          Book a 20-min Fit Call
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.a>
      </div>
    </motion.div>
  );
};

// 1) HERO Section - Clean, minimal, Nimara branded
const HeroSection = () => {
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(8, { staggerDelay: 100, baseDelay: 150 });

  return (
    <section 
      id="hero"
      ref={ref} 
      className="min-h-[100vh] bg-nim-cloud relative overflow-hidden flex items-center pt-20"
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          {/* Tag */}
          <motion.div
            style={getItemStyle(0)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-nim-mint/30 border border-nim-mint rounded-full mb-8"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-nim-navy">
              For Nonprofits and Charities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            style={getItemStyle(1)}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-nim-navy leading-[1.1] tracking-[-0.02em] mb-6"
          >
            Be proof-ready before funders ask in 4 weeks
          </motion.h1>

          {/* Subhead */}
          <motion.p
            style={getItemStyle(2)}
            className="text-lg sm:text-xl text-nim-slate-dark max-w-2xl mx-auto leading-relaxed mb-4"
          >
            We set up your board records, grant tracking, team files, and volunteer systems — then train your staff to keep it running.
          </motion.p>

          {/* Support line */}
          <motion.p
            style={getItemStyle(3)}
            className="text-sm text-nim-slate mb-10"
          >
            Pick the areas you need most. Start with 2. Add more anytime.
          </motion.p>

          {/* CTAs */}
          <motion.div
            style={getItemStyle(4)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            {/* Primary CTA */}
            <motion.a
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-nim-navy text-white font-semibold rounded-xl transition-all hover:bg-nim-navy/90"
            >
              Book a 20-min Fit Call
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            {/* Secondary CTA */}
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 py-3.5 px-4 text-nim-slate hover:text-nim-navy transition-colors"
            >
              <span className="relative font-medium">
                Not sure what you need? Take the Free Health Check
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity" />
              </span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            style={getItemStyle(5)}
            className="flex flex-wrap items-center justify-center gap-4 text-xs text-nim-slate"
          >
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-nim-purple" />
              Canadian nonprofits (0–25 staff)
            </span>
            <span className="hidden sm:inline text-nim-mist">·</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-nim-purple" />
              Pay only for what you need
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 1.5) HOW IT WORKS Section - Clean, premium SaaS aesthetic
const HowItWorksSection = () => {
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(8, { staggerDelay: 80, baseDelay: 100 });

  const steps = [
    {
      number: "01",
      title: "Book a Fit Call",
      description: "A 20-minute call to see if this is right for you. No pressure."
    },
    {
      number: "02",
      title: "We dig in with your team",
      description: "We run a 90-minute discovery session. We ask questions. We listen. We find out what's working and what's not."
    },
    {
      number: "03",
      title: "We build what matters most",
      description: "You choose at least 2 areas to fix. We set up the systems. We train your team. You get back to your mission."
    }
  ];

  return (
    <section 
      id="how-it-works" 
      ref={ref}
      className="py-24 md:py-32 bg-[#F8F9FC] relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            style={getItemStyle(0)}
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-nim-purple mb-4"
          >
            The Process
          </motion.span>
          <motion.h2
            style={getItemStyle(1)}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-nim-navy tracking-tight mb-5"
          >
            How it works
          </motion.h2>
          <motion.p
            style={getItemStyle(2)}
            className="text-lg md:text-xl text-[#1A1A1A]/70 max-w-xl mx-auto leading-relaxed"
          >
            We learn your org first. Then we build what you actually need.
          </motion.p>
        </div>

        {/* Steps grid */}
        <motion.div 
          style={getItemStyle(3)}
          className="relative"
        >
          {/* Connector line - desktop only */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px">
            <div className="w-full h-full border-t-2 border-dashed border-nim-purple/20" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center md:text-left"
              >
                {/* Step number */}
                <div className="flex justify-center md:justify-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-nim-mint flex items-center justify-center">
                    <span className="text-lg font-bold text-nim-navy tracking-tight">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Mobile connector - between steps */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-[72px] w-px h-8 border-l-2 border-dashed border-nim-purple/20" />
                )}

                {/* Content */}
                <h3 className="text-xl font-bold text-nim-navy mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-[15px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer line */}
        <motion.p
          style={getItemStyle(4)}
          className="text-center text-sm text-[#1A1A1A]/50 mt-16 md:mt-20 max-w-2xl mx-auto leading-relaxed"
        >
          The Free Health Check is always available if you want to self-assess first — but the real diagnostic happens when we meet your team.
        </motion.p>
      </div>
    </section>
  );
};

// 1.75) DOMAINS Section - Ultra-clean scannable design
const DomainsSection = () => {
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(12, { staggerDelay: 50, baseDelay: 100 });

  const domains = [
    {
      id: 1,
      title: "Board & Governance",
      icon: ClipboardCheck,
      popular: false,
      outcome: "Your board runs with clear records — no more chasing people.",
      includes: ["Conflict of interest policy", "Minutes template", "Decision log", "Board calendar"],
    },
    {
      id: 2,
      title: "Money & Grants",
      icon: DollarSign,
      popular: true,
      outcome: "Find proof for funders in minutes, not days.",
      includes: ["Grant Proof Pack", "Expense tracker", "Folder system", "Month-end routine"],
    },
    {
      id: 3,
      title: "People & HR",
      icon: UserCog,
      popular: false,
      outcome: "New staff get up to speed fast. Nothing in anyone's head.",
      includes: ["Role clarity docs", "Onboarding checklist", "Handoff guides", "HR file structure"],
    },
    {
      id: 4,
      title: "Volunteers",
      icon: HandHeart,
      popular: true,
      outcome: "Volunteers know what they signed up for — and stay longer.",
      includes: ["Intake process", "Role descriptions", "Appreciation rhythm", "Tracking system"],
    },
    {
      id: 5,
      title: "Tools & Files",
      icon: Database,
      popular: false,
      outcome: "Anyone on your team can find what they need.",
      includes: ["Folder structure", "Naming rules", "Permissions setup", "File audit checklist"],
    },
    {
      id: 6,
      title: "Programs & Ops",
      icon: Briefcase,
      popular: true,
      outcome: "Show what you're doing and whether it's working.",
      includes: ["Program documentation", "Tracking templates", "Reporting formats"],
    },
    {
      id: 7,
      title: "Fundraising & Donors",
      icon: Heart,
      popular: false,
      outcome: "Know who gave, when, and how to keep them giving.",
      includes: ["Donor tracking", "Gift acknowledgment", "Retention calendar"],
    }
  ];

  return (
    <section 
      id="domains" 
      ref={ref}
      className="py-24 md:py-32 bg-white relative"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section header - centered */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            style={getItemStyle(0)}
            className="text-nim-purple text-sm font-medium tracking-wide mb-4"
          >
            What We Fix
          </motion.p>
          <motion.h2
            style={getItemStyle(1)}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-nim-navy tracking-tight mb-6"
          >
            7 areas. You choose.
          </motion.h2>
          <motion.p
            style={getItemStyle(2)}
            className="text-lg text-nim-slate max-w-xl mx-auto"
          >
            Pick where you need the most help. We handle the rest.
          </motion.p>
        </div>

        {/* Domain list - clean vertical stack */}
        <motion.div 
          style={getItemStyle(3)}
          className="space-y-4"
        >
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 lg:p-8 rounded-2xl border transition-all duration-200 ${
                  domain.popular 
                    ? 'bg-nim-mint/5 border-nim-mint/40 hover:border-nim-mint' 
                    : 'bg-white border-nim-mist hover:border-nim-slate/30'
                }`}
              >
                {/* Left: Icon + Title + Badge */}
                <div className="lg:col-span-4 flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    domain.popular ? 'bg-nim-mint/30' : 'bg-nim-cloud'
                  }`}>
                    <IconComponent className="w-5 h-5 text-nim-navy" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-nim-navy">
                        {domain.title}
                      </h3>
                      {domain.popular && (
                        <span className="px-2 py-0.5 bg-nim-mint text-nim-navy text-[10px] font-bold uppercase tracking-wide rounded">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-nim-slate lg:hidden">
                      {domain.outcome}
                    </p>
                  </div>
                </div>

                {/* Middle: Outcome (desktop only) */}
                <div className="hidden lg:flex lg:col-span-4 items-center">
                  <p className="text-[15px] text-nim-slate-dark leading-relaxed">
                    {domain.outcome}
                  </p>
                </div>

                {/* Right: What's included */}
                <div className="lg:col-span-4">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-nim-slate/70 mb-2 lg:mb-3">
                    Includes
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.includes.map((item, i) => (
                      <span 
                        key={i}
                        className="inline-block px-2.5 py-1 bg-nim-cloud/80 text-nim-navy/80 text-xs rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          style={getItemStyle(4)}
          className="mt-16 text-center"
        >
          <p className="text-nim-slate mb-4">
            Not sure which areas you need?
          </p>
          <a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-nim-navy text-white font-medium rounded-xl hover:bg-nim-navy/90 transition-colors group"
          >
            Take the Free Health Check
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// 2) PRICING Section - Clean Nimara branding
const PricingTiersSection = () => {
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(12, { staggerDelay: 60, baseDelay: 100 });

  const tiers = [
    {
      name: "Starter",
      badge: "STARTER",
      price: "$14,900",
      priceSuffix: "CAD",
      bestFor: "Newer orgs or 1–2 active grants",
      features: [
        "Board & Governance setup",
        "Money & Grants (Proof Pack system)",
        "Programs & Ops basics",
        "4–5 week timeline"
      ],
      bgColor: "bg-white",
      borderColor: "border-nim-mist",
      ctaText: "Book a Fit Call",
      ctaLink: CALENDLY_BOOKING_URL,
      highlighted: false
    },
    {
      name: "Core 5",
      badge: "MOST POPULAR",
      price: "$24,900",
      priceSuffix: "CAD",
      bestFor: "1-4 grants or regular funder reporting",
      features: [
        "Everything in Starter",
        "People (Staff & HR)",
        "Tools & Data setup",
        "90-Day Ops Insurance included"
      ],
      bgColor: "bg-nim-mint/15",
      borderColor: "border-nim-mint",
      ctaText: "Book a 20-min Fit Call",
      ctaLink: CALENDLY_BOOKING_URL,
      highlighted: true
    },
    {
      name: "Custom",
      badge: "CUSTOM",
      price: "$34,900+",
      priceSuffix: "CAD",
      bestFor: "5+ grants, multiple programs, or 25+ staff",
      features: [
        "Everything in Core 5",
        "Fundraising & Donors (Optional)",
        "Volunteers (Optional)",
        "6–10 week timeline"
      ],
      bgColor: "bg-white",
      borderColor: "border-nim-mist",
      ctaText: "Request Custom Scope",
      ctaLink: CALENDLY_BOOKING_URL,
      highlighted: false
    }
  ];

  return (
    <section 
      id="pricing" 
      ref={ref}
      className="py-20 md:py-28 bg-nim-cloud relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.h2
            style={getItemStyle(0)}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-nim-navy tracking-tight mb-4"
          >
            Simple pricing. No hidden fees.
          </motion.h2>
          <motion.p
            style={getItemStyle(1)}
            className="text-lg text-nim-slate max-w-2xl mx-auto"
          >
            Systems that protect your funding and save your team hours every month. Often covered by capacity building or operational grants.
          </motion.p>
        </div>

        {/* Tier cards */}
        <motion.div 
          style={getItemStyle(2)}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`relative rounded-2xl p-8 ${tier.bgColor} border-2 ${tier.borderColor} overflow-hidden`}
            >
              <div className="flex flex-col h-full">
                {/* Badge */}
                <span className={`inline-block w-fit px-3 py-1 text-[10px] font-bold uppercase tracking-wide rounded-full mb-6 ${
                  tier.highlighted 
                    ? "bg-nim-navy text-white" 
                    : "bg-nim-mist text-nim-navy"
                }`}>
                  {tier.badge}
                </span>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-nim-navy tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-lg text-nim-slate ml-1">{tier.priceSuffix}</span>
                </div>

                {/* Best for */}
                <p className="text-sm text-nim-slate mb-6">
                  <span className="font-medium text-nim-navy">Best for:</span> {tier.bestFor}
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-8 flex-grow">
                  <p className="text-xs font-semibold uppercase tracking-wide text-nim-slate mb-2">What's included:</p>
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-nim-purple mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-sm text-nim-slate-dark">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href={tier.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl transition-all ${
                    tier.highlighted
                      ? "bg-nim-mint text-nim-navy hover:bg-nim-mint/90"
                      : "bg-nim-navy text-white hover:bg-nim-navy/90"
                  }`}
                >
                  {tier.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Payment line */}
        <motion.p
          style={getItemStyle(3)}
          className="text-center text-sm font-medium text-nim-navy mb-6"
        >
          50% to start. 50% at delivery. Invoiced as capacity building.
        </motion.p>

        {/* ROI line */}
        <motion.div
          style={getItemStyle(4)}
          className="max-w-2xl mx-auto bg-white border border-nim-mist rounded-xl p-6 mb-8"
        >
          <p className="text-center text-nim-slate-dark">
            <span className="font-semibold text-nim-navy">One missing receipt can cost you $20,000 in clawbacks.</span>
            {" "}These systems pay for themselves the first time a funder asks for proof.
          </p>
        </motion.div>

        {/* Escape hatch */}
        <motion.div
          style={getItemStyle(5)}
          className="text-center space-y-2"
        >
          <a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-nim-slate hover:text-nim-navy transition-colors group"
          >
            <span className="relative">
              Not sure yet? Take the Free Health Check (10 min)
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity" />
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <p className="text-xs text-nim-slate/70">
            We have different packages for medium-size teams — check{" "}
            <a 
              href="https://nimara.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-nim-navy transition-colors"
            >
              nimara.ca
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// 1.75) WHAT WE INSTALL Section
const WhatWeInstallSection = () => {
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(12, { staggerDelay: 60, baseDelay: 100 });

  const domains = [
    {
      number: "1",
      title: "Board & Governance",
      install: "Minutes template + decision log + policy tracker",
      meaning: "Your board meetings have clear records. Decisions are tracked. Nothing falls through."
    },
    {
      number: "2",
      title: "Money & Grants",
      install: "Grant Proof Pack (tracker + folders + naming system + pull checklist)",
      meaning: "When a funder asks for proof, you find it in minutes — not days."
    },
    {
      number: "3",
      title: "People & Roles",
      install: "Role clarity docs + handoff guides + basic HR checklist",
      meaning: "Everyone knows what they own. New staff can get up to speed fast."
    },
    {
      number: "4",
      title: "Programs & Ops",
      install: "Simple program plans + tracking templates + reusable reporting formats",
      meaning: "You can show what you're doing and whether it's working — without starting from scratch each time."
    },
    {
      number: "5",
      title: "Tools & Files",
      install: "Folder structure + naming rules + file access setup",
      meaning: "Your team can find what they need. So can your next ED."
    }
  ];

  const training = {
    title: "Training & Handoff",
    subtitle: "Included in all packages",
    install: "2–3 live sessions + recordings + written handoff guide",
    meaning: "Your team knows how to use the systems — and we don't leave until it sticks."
  };

  return (
    <section 
      id="what-we-install" 
      ref={ref}
      className="py-20 md:py-28 bg-muted/30 relative"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            style={getItemStyle(0)}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3"
          >
            Deliverables
          </motion.span>
          <motion.h2
            style={getItemStyle(1)}
            className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4"
          >
            What we install (not just advise)
          </motion.h2>
          <motion.p
            style={getItemStyle(2)}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Five systems. One goal: a nonprofit that runs — even when you're not in the room.
          </motion.p>
        </div>

        {/* Domains grid */}
        <div className="space-y-4 mb-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.number}
              style={getItemStyle(3 + index)}
              className="bg-card border border-border rounded-xl p-5 lg:p-6"
            >
              <div className="flex items-start gap-4">
                {/* Number badge */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{domain.number}</span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground mb-3">
                    {domain.title}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* What we install */}
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70 mb-1.5">
                        What we install
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {domain.install}
                      </p>
                    </div>
                    
                    {/* What it means */}
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70 mb-1.5">
                        What it means
                      </p>
                      <p className="text-sm text-foreground/80">
                        {domain.meaning}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Training & Handoff - highlighted */}
        <motion.div
          style={getItemStyle(8)}
          className="bg-primary/[0.04] border border-primary/20 rounded-xl p-5 lg:p-6 mb-10"
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-base font-semibold text-foreground">
                  {training.title}
                </h3>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {training.subtitle}
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* What we install */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70 mb-1.5">
                    What we install
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {training.install}
                  </p>
                </div>
                
                {/* What it means */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70 mb-1.5">
                    What it means
                  </p>
                  <p className="text-sm text-foreground/80">
                    {training.meaning}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.div
          style={getItemStyle(9)}
          className="text-center"
        >
          <p className="text-base md:text-lg font-medium text-foreground max-w-2xl mx-auto italic">
            "Most consultants hand you a report. We hand you a working back office — then we train your team to run it."
          </p>
        </motion.div>

        {/* Disclaimer row */}
        <motion.p
          style={getItemStyle(10)}
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

// 2) WHO THIS IS FOR Section - Clean Nimara branding
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

  return (
    <section id="who-its-for" className="py-24 md:py-32 bg-nim-cloud relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-nim-navy tracking-tight mb-4"
          >
            Is this right for you?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-nim-slate max-w-xl mx-auto"
          >
            This program is intense. Let's make sure it's the right fit.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Good Fit */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="rounded-2xl p-8 bg-white border-2 border-nim-mint"
          >
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wide rounded-full bg-nim-mint text-nim-navy mb-6">
              Good Fit
            </span>
            
            <h3 className="text-2xl font-bold text-nim-navy mb-6">
              This is for you if…
            </h3>

            <div className="space-y-3">
              {forYou.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-nim-purple mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-sm text-nim-slate-dark">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Not a Fit */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 }}
            className="rounded-2xl p-8 bg-white border border-nim-mist"
          >
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wide rounded-full bg-nim-mist text-nim-slate mb-6">
              Not a Fit
            </span>
            
            <h3 className="text-2xl font-bold text-nim-slate mb-6">
              Please don't apply if…
            </h3>

            <div className="space-y-3">
              {notForYou.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-nim-slate mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-sm text-nim-slate">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 3) THE OUTCOME Section - Clean Nimara branding
const OutcomeSection = () => {
  const outcomes = [
    { icon: FileCheck, title: "Pull proof fast", desc: "Invoices, receipts, approvals in one place" },
    { icon: ClipboardCheck, title: "Reports match records", desc: "Budget vs actual is clean" },
    { icon: Users, title: "Clear roles + approvals", desc: "People know the steps" },
    { icon: Sparkles, title: "New staff can onboard fast", desc: "Files and SOPs are obvious" }
  ];

  return (
    <section id="outcomes" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-nim-navy mb-4"
          >
            What "done" looks like
          </motion.h2>
        </div>

        {/* Outcomes grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {outcomes.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl p-6 lg:p-7 bg-nim-cloud border border-nim-mist"
            >
              <div 
                className="w-12 h-12 rounded-xl bg-nim-mint/30 flex items-center justify-center mb-5"
              >
                <item.icon className="w-5 h-5 text-nim-navy" strokeWidth={1.8} />
              </div>
              
              <h3 className="text-lg font-semibold text-nim-navy mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-nim-slate leading-relaxed">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4) THE FRAMEWORK Section - Clean Nimara branding
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

  return (
    <section id="framework" className="py-24 md:py-32 bg-nim-cloud relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-nim-navy mb-4"
          >
            The Core 5 Framework
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-nim-slate"
          >
            Plus 2 optional add-ons for complex organizations.
          </motion.p>
        </div>

        {/* Core areas grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-12">
          {coreAreas.filter(a => !a.optional).map((area, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl p-6 lg:p-7 bg-white border border-nim-mist"
            >
              <div className="w-12 h-12 rounded-xl bg-nim-purple/10 flex items-center justify-center mb-5">
                <area.icon className="w-5 h-5 text-nim-purple" strokeWidth={1.8} />
              </div>
              
              <h3 className="text-lg font-semibold text-nim-navy mb-2 tracking-tight">
                {area.title}
              </h3>
              <p className="text-sm text-nim-slate leading-relaxed">
                {area.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Optional areas */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-nim-mist" />
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-nim-slate">
              Premium Add-ons
            </p>
            <div className="h-px w-12 bg-nim-mist" />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {coreAreas.filter(a => a.optional).map((area, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl p-7 bg-white border-2 border-nim-mint overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-wider uppercase text-nim-navy bg-nim-mint px-3 py-1.5 rounded-full">
                  Optional
                </span>
                
                <div className="w-12 h-12 rounded-xl bg-nim-mint/30 flex items-center justify-center mb-5">
                  <area.icon className="w-5 h-5 text-nim-navy" strokeWidth={1.8} />
                </div>
                
                <h3 className="text-lg font-bold text-nim-navy mb-2 tracking-tight">
                  {area.title}
                </h3>
                <p className="text-sm text-nim-slate leading-relaxed">
                  {area.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-nim-slate text-center max-w-lg mx-auto"
        >
          Most teams start with <strong className="text-nim-navy font-medium">Core 3</strong> or{' '}
          <strong className="text-nim-navy font-medium">Core 5</strong>.
        </motion.p>
      </div>
    </section>
  );
};

// 5) PRICING Section - Clean Nimara branding
// Removed local PricingSection - now using imported component from @/components/PricingSection
const DeliverablesSection = () => {
  const coreDomains = [
    {
      title: "Board & Governance",
      review: "Board setup, meeting frequency, existing policies, gaps",
      build: "Conflict of interest policy, minutes template, decision log, board calendar, policy tracker",
      outcome: "Board runs with clear records — without chasing people"
    },
    {
      title: "Money & Grants",
      review: "How grants come in, how spending is tracked, how proof is stored, where things get lost",
      build: "Grant Proof Pack (tracker, folders, naming system, pull checklist), month-end routine",
      outcome: "Find proof in minutes when funders ask"
    },
    {
      title: "People (Staff & HR)",
      review: "Role definitions, onboarding process, what happens when someone leaves",
      build: "Role clarity docs, onboarding checklist, handoff guides, basic HR file structure",
      outcome: "New staff get up to speed fast — nothing lives in one person's head"
    },
    {
      title: "Volunteers",
      review: "Recruitment process, onboarding, appreciation, retention, existing systems",
      build: "Volunteer intake process, onboarding checklist, role descriptions, appreciation rhythm, tracking system",
      outcome: "Volunteers know what they signed up for — and stay longer"
    },
    {
      title: "Tools & Files",
      review: "Current tools, file organization, access permissions",
      build: "Folder structure, naming rules, permissions setup, file audit checklist",
      outcome: "Anyone on team — or next ED — can find what they need"
    }
  ];

  const premiumAddons = [
    {
      title: "Programs & Ops",
      review: "Program structure, tracking methods, reporting process",
      build: "Program documentation, tracking templates, reusable reporting formats",
      outcome: "Show what you're doing and whether it's working — without starting from scratch"
    },
    {
      title: "Fundraising & Donors",
      review: "How donations come in, donor tracking, relationship maintenance",
      build: "Donor tracking system, gift acknowledgment process, retention calendar",
      outcome: "Know who gave, when, and how to keep them giving"
    }
  ];

  return (
    <section 
      id="deliverables" 
      className="py-20 md:py-28 bg-white"
      aria-labelledby="deliverables-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <header className="mb-12 md:mb-16">
          <p className="text-sm font-semibold text-nim-purple uppercase tracking-wide mb-3">
            Deliverables
          </p>
          <h2 
            id="deliverables-heading"
            className="text-3xl md:text-4xl font-bold text-nim-navy mb-4"
          >
            What we install (not just advise)
          </h2>
          <p className="text-lg text-nim-slate max-w-2xl">
            We review what you have, fix what's broken, build what's missing — then train your team to run it.
          </p>
        </header>

        {/* Core 5 Domains */}
        <div className="mb-14" role="region" aria-label="Core 5 Domains">
          <h3 className="text-lg font-bold text-nim-navy mb-6 pb-3 border-b-2 border-nim-navy">
            Core 5 Domains
          </h3>

          <div className="divide-y divide-nim-mist">
            {coreDomains.map((domain, index) => (
              <article 
                key={index}
                className="py-6 first:pt-0 last:pb-0"
              >
                <h4 className="text-xl font-bold text-nim-navy mb-4">
                  {domain.title}
                </h4>
                
                <dl className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                  <div>
                    <dt className="text-sm font-semibold text-nim-slate uppercase tracking-wide mb-1">
                      We review
                    </dt>
                    <dd className="text-base text-nim-slate leading-relaxed">
                      {domain.review}
                    </dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-semibold text-nim-slate uppercase tracking-wide mb-1">
                      We build
                    </dt>
                    <dd className="text-base text-nim-navy leading-relaxed">
                      {domain.build}
                    </dd>
                  </div>
                  
                  <div className="sm:bg-nim-mint/10 sm:rounded-lg sm:p-4 sm:-m-4">
                    <dt className="text-sm font-semibold text-nim-purple uppercase tracking-wide mb-1">
                      You get
                    </dt>
                    <dd className="text-base text-nim-navy font-medium leading-relaxed">
                      {domain.outcome}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>

        {/* Premium Add-Ons */}
        <div className="mb-14" role="region" aria-label="Premium Add-Ons">
          <div className="flex flex-wrap items-center gap-3 mb-6 pb-3 border-b-2 border-nim-mint">
            <h3 className="text-lg font-bold text-nim-navy">
              Premium Add-Ons
            </h3>
            <span className="text-xs font-bold text-nim-navy bg-nim-mint px-3 py-1 rounded-full">
              Custom tier only
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {premiumAddons.map((addon, index) => (
              <article 
                key={index}
                className="p-5 bg-nim-cloud rounded-xl border border-nim-mist"
              >
                <h4 className="text-lg font-bold text-nim-navy mb-4">
                  {addon.title}
                </h4>
                
                <dl className="space-y-3">
                  <div>
                    <dt className="text-xs font-semibold text-nim-slate uppercase tracking-wide">
                      Review
                    </dt>
                    <dd className="text-sm text-nim-slate leading-relaxed mt-0.5">
                      {addon.review}
                    </dd>
                  </div>
                  
                  <div>
                    <dt className="text-xs font-semibold text-nim-slate uppercase tracking-wide">
                      Build
                    </dt>
                    <dd className="text-sm text-nim-navy leading-relaxed mt-0.5">
                      {addon.build}
                    </dd>
                  </div>
                  
                  <div className="bg-nim-mint/15 rounded-lg p-3 -mx-1">
                    <dt className="text-xs font-semibold text-nim-purple uppercase tracking-wide">
                      Outcome
                    </dt>
                    <dd className="text-sm text-nim-navy font-medium leading-relaxed mt-0.5">
                      {addon.outcome}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>

        {/* Training & Handoff */}
        <article 
          className="bg-nim-navy rounded-2xl p-6 md:p-8 mb-12"
          role="region"
          aria-label="Training and Handoff"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-nim-mint/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-nim-mint" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Training & Handoff
              </h3>
              <p className="text-nim-mint text-sm font-medium mt-1">
                Included in all packages
              </p>
            </div>
          </div>

          <dl className="grid sm:grid-cols-2 gap-6">
            <div>
              <dt className="text-xs font-semibold text-white/60 uppercase tracking-wide mb-2">
                What we deliver
              </dt>
              <dd className="text-base text-white/90 leading-relaxed">
                2–3 live sessions, recorded walkthroughs, written handoff guide
              </dd>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <dt className="text-xs font-semibold text-nim-mint uppercase tracking-wide mb-2">
                What you get
              </dt>
              <dd className="text-base text-white font-medium leading-relaxed">
                Team knows how to use systems. We don't leave until it sticks.
              </dd>
            </div>
          </dl>
        </article>

        {/* Closing line */}
        <blockquote className="text-center border-l-0 pl-0">
          <p className="text-lg md:text-xl text-nim-navy font-medium max-w-xl mx-auto leading-relaxed">
            "Most consultants hand you a report and leave. We hand you a working back office — and train your team to run it."
          </p>
        </blockquote>
      </div>
    </section>
  );
};

// 7) TIMELINE Section - Clean Nimara branding
const TimelineSection = () => {
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

  return (
    <section id="timeline" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-nim-purple mb-5"
          >
            Timeline
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-nim-navy mb-4"
          >
            How the 6-week install works
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-nim-slate max-w-2xl mx-auto"
          >
            A structured, proven process that gets you from scattered to organized.
          </motion.p>
        </div>

        {/* Timeline cards - horizontal on desktop */}
        <div className="grid md:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {weeks.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-nim-cloud border border-nim-mist rounded-2xl p-6 transition-all hover:border-nim-mint"
            >
              {/* Week badge */}
              <div className="w-14 h-14 rounded-2xl bg-nim-mint/30 flex items-center justify-center mb-5 transition-colors group-hover:bg-nim-mint/50">
                <span className="text-lg font-bold text-nim-navy">W{item.week}</span>
              </div>
              
              {/* Connector line (hidden on mobile, visible on desktop) */}
              {index < weeks.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-3 lg:-right-4 w-6 lg:w-8 h-0.5 bg-nim-mist" />
              )}
              
              <h3 className="text-lg font-semibold text-nim-navy mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-nim-slate leading-relaxed">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Required Inputs */}
        <motion.div 
          className="bg-nim-cloud border border-nim-mist rounded-2xl p-8 lg:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-nim-purple/10 flex items-center justify-center">
              <ClipboardCheck className="w-6 h-6 text-nim-purple" />
            </div>
            <div>
              <h3 className="font-semibold text-nim-navy text-xl tracking-tight">
                Required inputs from you
              </h3>
              <p className="text-sm text-nim-slate">What we need to get started</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {inputs.map((input, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-nim-mist"
              >
                <div className="w-8 h-8 rounded-lg bg-nim-mint/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-nim-purple" strokeWidth={2.5} />
                </div>
                <span className="text-[15px] text-nim-navy font-medium">{input}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 8) GUARANTEE Section - Clean Nimara branding
const GuaranteeSection = () => {
  const insurance = [
    "2 check-ins per month",
    "48-hour response for questions",
    "One refresh training",
    "Light template/process updates within scope"
  ];

  return (
    <section id="guarantee" className="py-24 md:py-32 bg-nim-cloud relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-nim-purple mb-5"
          >
            Protection
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-nim-navy"
          >
            Built-in guarantees
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Delivery Guarantee */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white border border-nim-mist rounded-2xl p-7 lg:p-8 transition-all hover:border-nim-purple/30"
          >
            <div className="w-12 h-12 rounded-xl bg-nim-purple/10 flex items-center justify-center mb-5">
              <Shield className="w-6 h-6 text-nim-purple" />
            </div>
            
            <h3 className="text-xl font-semibold text-nim-navy mb-4 tracking-tight">
              Delivery guarantee
            </h3>
            <div className="space-y-4 text-[15px] text-nim-slate leading-relaxed">
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white border-2 border-nim-mint rounded-2xl p-7 lg:p-8 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-nim-mint/30 flex items-center justify-center mb-5">
              <Clock className="w-6 h-6 text-nim-navy" />
            </div>
            
            <h3 className="text-xl font-semibold text-nim-navy mb-5 tracking-tight">
              90-Day Ops Insurance
              <span className="ml-2 text-xs font-bold text-nim-navy bg-nim-mint px-2 py-0.5 rounded-full">Included</span>
            </h3>
            <div className="space-y-3">
              {insurance.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-nim-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-nim-purple" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-nim-slate">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-nim-slate text-center mt-10"
        >
          We don't guarantee funding outcomes.
        </motion.p>
      </div>
    </section>
  );
};

// 9) SOCIAL PROOF Section

// 10) FAQ Section - Clean Nimara branding
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

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-nim-purple mb-5"
          >
            FAQ
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-nim-navy"
          >
            Common questions
          </motion.h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`
                group relative bg-nim-cloud border rounded-2xl overflow-hidden transition-all
                ${openFaq === index 
                  ? 'border-nim-purple/30' 
                  : 'border-nim-mist hover:border-nim-purple/20'}
              `}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`
                  font-medium pr-6 transition-colors
                  ${openFaq === index ? 'text-nim-navy' : 'text-nim-slate-dark group-hover:text-nim-navy'}
                `}>
                  {faq.q}
                </span>
                <div className={`
                  flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all
                  ${openFaq === index 
                    ? 'bg-nim-purple/10 text-nim-purple rotate-180' 
                    : 'bg-nim-mist text-nim-slate group-hover:bg-nim-purple/10'}
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
                  <div className="h-px bg-nim-mist mb-4" />
                  <p className="text-[15px] leading-relaxed text-nim-slate">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-nim-slate">
            Have another question?{' '}
            <a 
              href="mailto:hello@nimara.ca" 
              className="text-nim-purple hover:text-nim-navy underline underline-offset-4 transition-colors"
            >
              Reach out directly
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// 11) FINAL CTA Section - Clean Nimara branding
const FinalCTASection = () => {
  return (
    <section id="cta" className="py-28 md:py-36 lg:py-44 bg-nim-navy">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-12">
            Want this off your plate?
            <br />
            <span className="text-nim-mint">We'll handle the buildout.</span>
          </h2>

          <motion.a
            href={CALENDLY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-nim-mint text-nim-navy font-semibold rounded-xl transition-all hover:bg-nim-mint/90"
          >
            Book a 20-min Fit Call
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <p className="text-sm text-white/50 mt-8">
            No pressure. We'll tell you the best next step.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Microcopy - Clean Nimara branding
const FooterMicrocopy = () => {
  return (
    <div className="bg-nim-navy border-t border-white/10 py-6">
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
          <HowItWorksSection />
          <DomainsSection />
          <PricingSection />
          <ScrollSection parallaxStrength={0.15}>
            <WhoThisIsFor />
          </ScrollSection>
          <ScrollSection parallaxStrength={0.1}>
            <OutcomeSection />
          </ScrollSection>
          <ScrollSection parallaxStrength={0.12}>
            <FrameworkSection />
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
