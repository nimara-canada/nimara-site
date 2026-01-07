import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Sticky CTA Header Component
const StickyCTA = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-secondary-background/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-white font-semibold text-lg">
          Nimara
        </Link>
        <a
          href={CALENDLY_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg text-sm transition-all hover:bg-primary/90"
        >
          Book a 20-min Fit Call
        </a>
      </div>
    </div>
  );
};

// 1) HERO Section
const HeroSection = () => {
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(8, { staggerDelay: 80, baseDelay: 100 });

  const bullets = [
    "Proof-of-payment and grant tracking that's easy to pull",
    "Simple routines your team actually follows",
    "90-day Ops Insurance so it sticks"
  ];

  return (
    <section 
      ref={ref} 
      className="min-h-[90vh] bg-background relative overflow-hidden flex items-center pt-16"
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="text-center">
          {/* Eyebrow */}
          <span
            style={getItemStyle(0)}
            className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6"
          >
            For Canadian Nonprofits and Charities
          </span>

          {/* Headline */}
          <h1
            style={getItemStyle(1)}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.08] tracking-tight mb-8"
          >
            Build funder-ready systems in{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">6 weeks</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/15 -z-0 rounded-sm" />
            </span>
            <br className="hidden sm:block" />
            <span className="text-muted-foreground font-medium"> — without the chaos.</span>
          </h1>

          {/* Subhead */}
          <p
            style={getItemStyle(2)}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-normal"
          >
            We install your core nonprofit systems (Core 3 / Core 5 / Premium 7) and train your team to run them.
          </p>

          {/* Bullets */}
          <div style={getItemStyle(3)} className="flex flex-col items-center gap-4 mb-14">
            {bullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-3 text-foreground/80">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                </div>
                <span className="text-base">{bullet}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            style={getItemStyle(4)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98]"
            >
              Book a 20-min Fit Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 border border-border text-foreground font-medium rounded-xl transition-all hover:bg-muted hover:border-border/80"
            >
              Start the Free NOHC (10 min)
            </a>
          </div>

          {/* Tertiary link */}
          <p style={getItemStyle(5)} className="text-sm text-muted-foreground mb-10">
            <a 
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Download the Proof Tracker
            </a>
          </p>

          {/* Disclaimer */}
          <p
            style={getItemStyle(6)}
            className="text-xs text-muted-foreground/60 max-w-md mx-auto tracking-wide"
          >
            No funding guarantees. Not an audit firm. Built for small teams.
          </p>
        </div>
      </div>
    </section>
  );
};

// 2) WHO THIS IS FOR Section
const WhoThisIsFor = () => {
  const forYou = [
    "0–25 staff",
    "You have grants or funder reporting",
    "Receipts/approvals/files are scattered",
    "Reports don't match records",
    "You want one simple way your team can keep using"
  ];

  const notForYou = [
    "You want guaranteed funding",
    "You want a big report but no change",
    "You need legal/tax advice",
    "You want a full bookkeeping cleanup"
  ];

  const { ref, getItemStyle } = useStaggeredReveal(forYou.length + notForYou.length + 3, { staggerDelay: 60, baseDelay: 0 });

  return (
    <section className="py-24 md:py-32 bg-mint-light relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--mint-dark) / 0.08) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div ref={ref} className="relative max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            style={getItemStyle(0)}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-mint-dark mb-4"
          >
            Fit Check
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For You */}
          <div 
            style={getItemStyle(1)}
            className="bg-white rounded-2xl p-8 shadow-sm border border-mint-dark/10"
          >
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
          </div>

          {/* Not For You */}
          <div 
            style={getItemStyle(2 + forYou.length)}
            className="bg-white/60 rounded-2xl p-8 border border-border/50"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-muted-foreground mb-8">
              Not for you if…
            </h2>

            <div className="space-y-4">
              {notForYou.map((item, index) => (
                <div
                  key={index}
                  style={getItemStyle(3 + forYou.length + index)}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={2.5} />
                  </div>
                  <span className="text-muted-foreground text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
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
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
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
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
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

        {/* Optional areas */}
        <motion.div 
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.p 
            variants={headerVariants}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground text-center mb-5"
          >
            Optional Add-ons
          </motion.p>
          
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {coreAreas.filter(a => a.optional).map((area, index) => (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white border border-dashed border-primary/30 rounded-2xl p-6 transition-colors duration-300 hover:border-primary/50 hover:bg-primary/[0.02] focus-within:ring-2 focus-within:ring-primary/20"
              >
                {/* Optional badge */}
                <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  Optional
                </span>
                
                {/* Icon container */}
                <motion.div 
                  className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/15"
                  aria-hidden="true"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <area.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                </motion.div>
                
                <h3 className="text-base font-semibold text-foreground mb-1.5 tracking-tight">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.desc}
                </p>
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
      price: "From $34,900+",
      currency: "CAD",
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
    <section id="pricing" className="py-24 md:py-32 bg-secondary-background text-white overflow-hidden relative">
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
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
          <motion.span
            variants={headerVariants}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-accent mb-5"
          >
            Investment
          </motion.span>

          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4"
          >
            Pick your buildout level
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-white/60 max-w-xl mx-auto text-lg"
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
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
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
    { week: 1, title: "Map + set structure", desc: "Folders, naming, tracker installed" },
    { week: "2–3", title: "Build proof packs", desc: "Using your real data" },
    { week: 4, title: "Train staff", desc: "Start using the routine" },
    { week: "5–6", title: "Stabilize + handoff", desc: "Tighten, document, transition" }
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
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
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
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
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
            Timeline
          </motion.span>

          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground"
          >
            How the 6-week install works
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <motion.div 
          className="space-y-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {weeks.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-border rounded-xl overflow-hidden transition-colors duration-300 hover:border-primary/30"
            >
              <button
                onClick={() => setOpenWeek(openWeek === index ? null : index)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <motion.span 
                    className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    W{item.week}
                  </motion.span>
                  <span className="font-semibold text-foreground text-lg">{item.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: openWeek === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ 
                  height: openWeek === index ? "auto" : 0,
                  opacity: openWeek === index ? 1 : 0
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 pl-[4.75rem] lg:pl-[5.25rem]">
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Required Inputs */}
        <motion.div 
          className="bg-primary/5 border border-primary/20 rounded-2xl p-6 lg:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-semibold text-foreground text-lg mb-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <ClipboardCheck className="w-5 h-5 text-primary" />
            </div>
            Required inputs from you
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {inputs.map((input, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 text-[15px] text-muted-foreground"
              >
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                </div>
                <span>{input}</span>
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

  const { ref, getItemStyle } = useStaggeredReveal(insurance.length + 4, { staggerDelay: 80, baseDelay: 0 });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Delivery Guarantee */}
          <div style={getItemStyle(0)} className="bg-card border border-border/60 rounded-2xl p-6">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Our delivery guarantee (simple and fair)
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                If we don't deliver the listed deliverables by the end of the install period (with required inputs), you don't pay the final payment until we do.
              </p>
              <p>
                If we still can't deliver within 14 extra days, you can request a refund.
              </p>
            </div>
          </div>

          {/* 90-Day Insurance */}
          <div style={getItemStyle(1)} className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              90-Day Ops Insurance (included)
            </h3>
            <div className="space-y-3">
              {insurance.map((item, index) => (
                <div 
                  key={index}
                  style={getItemStyle(2 + index)}
                  className="flex items-start gap-3"
                >
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p style={getItemStyle(2 + insurance.length)} className="text-xs text-muted-foreground text-center mt-6">
          We don't guarantee funding outcomes.
        </p>
      </div>
    </section>
  );
};

// 9) SOCIAL PROOF Section
const SocialProofSection = () => {
  const testimonials = [
    { before: "[Organization situation before]", after: "[What changed after working with Nimara]" },
    { before: "[Organization situation before]", after: "[What changed after working with Nimara]" },
    { before: "[Organization situation before]", after: "[What changed after working with Nimara]" }
  ];

  const { ref, getItemStyle } = useStaggeredReveal(testimonials.length + 3, { staggerDelay: 80, baseDelay: 0 });

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span
            style={getItemStyle(0)}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-6"
          >
            Results
          </span>

          <h2
            style={getItemStyle(1)}
            className="text-3xl sm:text-4xl font-medium tracking-tight"
          >
            Built for small teams
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={getItemStyle(2 + index)}
              className="bg-card border border-border/60 rounded-2xl p-6"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Before</p>
                  <p className="text-sm text-muted-foreground italic">{item.before}</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">After</p>
                  <p className="text-sm text-foreground">{item.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos placeholder */}
        <div style={getItemStyle(2 + testimonials.length)} className="text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Funders / Partners</p>
          <div className="flex items-center justify-center gap-8 opacity-40">
            <div className="w-24 h-8 bg-muted rounded" />
            <div className="w-24 h-8 bg-muted rounded" />
            <div className="w-24 h-8 bg-muted rounded" />
            <div className="w-24 h-8 bg-muted rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

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
    <section className="py-20 md:py-28 bg-background">
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span
            style={getItemStyle(0)}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-6"
          >
            FAQ
          </span>

          <h2
            style={getItemStyle(1)}
            className="text-3xl sm:text-4xl font-medium tracking-tight"
          >
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={getItemStyle(2 + index)}
              className="bg-card border border-border/60 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 11) FINAL CTA Section
const FinalCTASection = () => {
  const { ref, getItemStyle } = useStaggeredReveal(4, { staggerDelay: 100, baseDelay: 0 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary-background text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} 
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <h2
          style={getItemStyle(0)}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          Want this off your plate?
        </h2>

        <p
          style={getItemStyle(1)}
          className="text-lg text-white/60 mb-10"
        >
          Book a 20-min Fit Call. We'll recommend Core 3, Core 5, or Premium 7.
        </p>

        <div
          style={getItemStyle(2)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href={CALENDLY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-150 hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
          >
            Book a 20-min Fit Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 text-white font-medium rounded-lg transition-all hover:bg-white/5 hover:border-white/30"
          >
            Start the Free NOHC
          </a>
        </div>

        <p style={getItemStyle(3)} className="text-sm text-white/40">
          Questions?{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2 hover:text-white/60 transition-colors">
            {CONTACT_EMAIL}
          </a>
        </p>
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
        
        <main id="main">
          <HeroSection />
          <WhoThisIsFor />
          <OutcomeSection />
          <FrameworkSection />
          <PricingSection />
          <DeliverablesSection />
          <TimelineSection />
          <GuaranteeSection />
          <SocialProofSection />
          <FAQSection />
          <FinalCTASection />
          <FooterMicrocopy />
        </main>
        
        <Footer />
      </div>
    </MotionPreferencesProvider>
  );
};

export default CapacityBuildout;
