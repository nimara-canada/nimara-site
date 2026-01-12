import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { MotionControls } from '@/components/MotionControls';
import { PricingSection } from '@/components/PricingSection';
import { WhatYouGetSection } from '@/components/WhatYouGetSection';
import { CapacityFAQ } from '@/components/CapacityFAQ';
import StartHereSection from '@/components/StartHereSection';

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
      className="min-h-[100vh] bg-nim-navy relative overflow-hidden flex items-center pt-20"
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          {/* Tag */}
          <motion.div
            style={getItemStyle(0)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-nim-mint/20 border border-nim-mint/50 rounded-full mb-8"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-nim-mint">
              For Nonprofits and Charities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            style={getItemStyle(1)}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6"
          >
            Be ready when a funder asks.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            style={getItemStyle(2)}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-6"
          >
            We help nonprofits with 0–50 staff set up simple systems for board, money, and files — so you can find proof fast and report with confidence.
          </motion.p>

          {/* Bullets */}
          <motion.ul
            style={getItemStyle(3)}
            className="text-left max-w-xl mx-auto space-y-3 mb-10"
          >
            <li className="flex items-start gap-3 text-white/80">
              <Check className="w-5 h-5 text-nim-mint mt-0.5 flex-shrink-0" />
              <span>Proof-of-payment and grant tracking you can pull in minutes</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <Check className="w-5 h-5 text-nim-mint mt-0.5 flex-shrink-0" />
              <span>Clear board notes and approvals (so decisions don't disappear)</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <Check className="w-5 h-5 text-nim-mint mt-0.5 flex-shrink-0" />
              <span>Simple files and routines your team will actually use</span>
            </li>
          </motion.ul>

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
              className="inline-flex items-center gap-2 px-8 py-4 bg-nim-mint text-nim-navy font-semibold rounded-xl transition-all hover:bg-nim-mint/90"
            >
              Book a 20-minute call
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            {/* Secondary CTA */}
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 py-3.5 px-4 text-white/70 hover:text-white transition-colors"
            >
              <span className="relative font-medium">
                Take the free 6-minute check
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity" />
              </span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            style={getItemStyle(5)}
            className="text-sm text-white/50"
          >
            Built for nonprofits with 0–50 staff in Canada. Not an audit firm.
          </motion.p>
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
      popular: false,
      outcome: "Your board runs with clear records — no more chasing people.",
    },
    {
      id: 2,
      title: "Money & Grants",
      popular: true,
      outcome: "Find proof for funders in minutes, not days.",
    },
    {
      id: 3,
      title: "People & HR",
      popular: false,
      outcome: "New staff get up to speed fast. Nothing in anyone's head.",
    },
    {
      id: 4,
      title: "Volunteers",
      popular: true,
      outcome: "Volunteers know what they signed up for — and stay longer.",
    },
    {
      id: 5,
      title: "Tools & Files",
      popular: false,
      outcome: "Anyone on your team can find what they need.",
    },
    {
      id: 6,
      title: "Programs & Ops",
      popular: true,
      outcome: "Show what you're doing and whether it's working.",
    },
    {
      id: 7,
      title: "Fundraising & Donors",
      popular: false,
      outcome: "Know who gave, when, and how to keep them giving.",
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
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`group flex items-center gap-4 lg:gap-6 p-5 lg:p-6 rounded-xl border transition-all duration-200 ${
                  domain.popular 
                    ? 'bg-nim-mint/5 border-nim-mint/40 hover:border-nim-mint' 
                    : 'bg-white border-nim-mist hover:border-nim-slate/30'
                }`}
              >
                {/* Number indicator */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  domain.popular ? 'bg-nim-mint/30' : 'bg-nim-cloud'
                }`}>
                  <span className="text-lg font-semibold text-nim-navy">{domain.id}</span>
                </div>

                {/* Title + Outcome */}
                <div className="flex-1 min-w-0">
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
                  <p className="text-sm text-nim-slate">
                    {domain.outcome}
                  </p>
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



// 9) SOCIAL PROOF Section

// 10) FAQ Section - imported from component

// 11) FINAL CTA Section - Clean Nimara branding
const FinalCTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-form-email`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formCode: 'CAPACITY_CONTACT',
            payload: {
              ...formData,
              timestamp: new Date().toISOString(),
              source: 'capacity-buildout-footer',
            },
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', organization: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="py-20 md:py-28 lg:py-36 bg-nim-navy">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-[-0.02em] mb-4">
            Want this off your plate?
          </h2>
          <p className="text-lg text-white/70">
            Drop your details and we'll reach out to discuss your buildout.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-lg"
          >
            <div className="w-16 h-16 bg-nim-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-nim-mint" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank you!</h3>
            <p className="text-gray-600">We'll be in touch within 1 business day.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg"
          >
            <div className="grid gap-4 md:gap-5">
              {/* Name */}
              <div>
                <label htmlFor="cta-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Name <span className="text-nim-mint">*</span>
                </label>
                <input
                  type="text"
                  id="cta-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nim-mint/50 focus:border-nim-mint/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="cta-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email <span className="text-nim-mint">*</span>
                </label>
                <input
                  type="email"
                  id="cta-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nim-mint/50 focus:border-nim-mint/50 transition-all"
                  placeholder="you@organization.ca"
                />
              </div>

              {/* Phone (optional) */}
              <div>
                <label htmlFor="cta-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone <span className="text-gray-400 text-xs">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="cta-phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nim-mint/50 focus:border-nim-mint/50 transition-all"
                  placeholder="(123) 456-7890"
                />
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="cta-org" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Organization <span className="text-nim-mint">*</span>
                </label>
                <input
                  type="text"
                  id="cta-org"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nim-mint/50 focus:border-nim-mint/50 transition-all"
                  placeholder="Your nonprofit or charity"
                />
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full mt-6 px-8 py-4 bg-nim-mint text-nim-navy font-semibold rounded-xl transition-all hover:bg-nim-mint/90 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-nim-navy/30 border-t-nim-navy rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>

            <p className="text-xs text-gray-500 text-center mt-4">
              No pressure. We'll tell you the best next step.
            </p>
          </motion.form>
        )}
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
          Nimara Technology Inc — Canada-first, lean-team systems.
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
          <StartHereSection />
          <HowItWorksSection />
          <DomainsSection />
          <WhatYouGetSection />
          <div id="pick-your-buildout">
            <PricingSection />
          </div>
          <ScrollSection parallaxStrength={0.1}>
            <CapacityFAQ />
          </ScrollSection>
          <ScrollSection parallaxStrength={0.05} fadeIn={false} className="bg-nim-purple">
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
