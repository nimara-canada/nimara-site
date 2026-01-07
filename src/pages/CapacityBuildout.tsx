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
      id="hero"
      ref={ref} 
      className="min-h-[100vh] bg-background relative overflow-hidden flex items-center pt-16"
    >
      {/* Premium layered background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large primary orb - top right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-32 -right-32 w-[900px] h-[700px] bg-gradient-to-bl from-primary/[0.08] via-primary/[0.03] to-transparent rounded-full blur-3xl" 
        />
        {/* Accent orb - bottom left */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-32 -left-32 w-[700px] h-[500px] bg-gradient-to-tr from-accent/[0.06] via-accent/[0.02] to-transparent rounded-full blur-3xl" 
        />
        {/* Center subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-primary/[0.02] to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Premium grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="text-center">
          {/* Eyebrow */}
          <motion.div
            style={getItemStyle(0)}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground/80">
              For Canadian Nonprofits and Charities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            style={getItemStyle(1)}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.06] tracking-[-0.02em] mb-8"
          >
            <span className="block">Build funder-ready systems in</span>
            <span className="relative inline-block mt-2">
              <motion.span 
                className="relative z-10 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                6 weeks
              </motion.span>
              <motion.span 
                className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-gradient-to-r from-primary/20 to-accent/15 -z-0 rounded-md"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
            </span>
            <span className="block text-muted-foreground font-normal mt-2 text-3xl sm:text-4xl lg:text-5xl">— without the chaos.</span>
          </motion.h1>

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
          <motion.div
            style={getItemStyle(4)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <motion.a
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground font-semibold rounded-2xl shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/35 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">Book a 20-min Fit Call</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-4 bg-card/50 backdrop-blur-sm border border-border/60 text-foreground font-medium rounded-2xl transition-all hover:bg-card hover:border-primary/30 hover:shadow-lg"
            >
              Start the Free NOHC (10 min)
            </motion.a>
          </motion.div>

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
          <motion.div 
            style={getItemStyle(1)}
            className="bg-white rounded-2xl p-8 shadow-sm border border-mint-dark/10"
            whileHover={{ 
              y: -4, 
              boxShadow: "0 12px 32px -8px hsl(var(--mint-dark) / 0.15)",
              borderColor: "hsl(var(--mint-dark) / 0.25)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
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
          </motion.div>

          {/* Not For You */}
          <motion.div 
            style={getItemStyle(2 + forYou.length)}
            className="bg-white/60 rounded-2xl p-8 border border-border/50"
            whileHover={{ 
              y: -4, 
              boxShadow: "0 8px 24px -8px hsl(var(--foreground) / 0.08)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
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

// 11) FINAL CTA Section
const FinalCTASection = () => {
  const { ref, getItemStyle } = useStaggeredReveal(4, { staggerDelay: 100, baseDelay: 0 });

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
          <h2
            style={getItemStyle(0)}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-[-0.02em] mb-6"
          >
            Want this off your plate?
          </h2>

          <p
            style={getItemStyle(1)}
            className="text-lg sm:text-xl text-white/60 mb-12 max-w-xl mx-auto"
          >
            Book a 20-min Fit Call. We'll recommend Core 3, Core 5, or Premium 7.
          </p>

          <div
            style={getItemStyle(2)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
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
              <span className="relative">Book a 20-min Fit Call</span>
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
              Start the Free NOHC
            </motion.a>
          </div>

          <p style={getItemStyle(3)} className="text-sm text-white/40">
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
