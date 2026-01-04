import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { MotionControls } from '@/components/MotionControls';
import { 
  MotionPreferencesProvider, 
  useScrollReveal, 
  useStaggeredReveal,
  TIMING,
} from '@/hooks/use-scroll-reveal';
import { CALENDLY_BOOKING_URL, CONTACT_EMAIL } from '@/constants/urls';
import { Check, Eye, ClipboardList, Map, Hammer, Users, DollarSign, FolderOpen, Target, Heart, HandshakeIcon, Briefcase, ArrowRight, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Hero Section - Dark premium style with scroll reveal
const HeroSection = () => {
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(6, { staggerDelay: 100, baseDelay: 100 });

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

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center">
          {/* Tag */}
          <span
            style={getItemStyle(0)}
            className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-medium rounded-full mb-8"
          >
            2–4 weeks
          </span>

          {/* Headline */}
          <h1
            style={getItemStyle(1)}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Organization Check
          </h1>

          {/* Subhead */}
          <p
            style={getItemStyle(2)}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A clear look at what's working, what's missing, and what to fix first — so your nonprofit can grow with confidence.
          </p>

          {/* CTAs */}
          <div
            style={getItemStyle(3)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <a
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-150 hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
            >
              Book an Organization Check
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/free-check"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-medium"
            >
              Not sure yet? Take a free Health Check
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Email line */}
          <p
            style={getItemStyle(4)}
            className="text-sm text-white/40 mb-3"
          >
            Prefer email?{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/60 hover:text-white underline underline-offset-2 transition-colors">
              {CONTACT_EMAIL}
            </a>
          </p>

          {/* Small note */}
          <p
            style={getItemStyle(5)}
            className="text-xs text-white/30"
          >
            Also called: Nimara Organization Health Check (NOHC)
          </p>
        </div>
      </div>
    </section>
  );
};

// Who This Is For - Editorial style with scroll reveal
const WhoThisIsFor = () => {
  const criteria = [
    "Problems show up in more than one area (not just one grant)",
    "Your team is busy, and things live in people's heads",
    "Board decisions aren't always written down",
    "It's not clear who approves what",
    "Reporting feels stressful, even when the work is good",
    "You want to grow, but your basics can't keep up yet"
  ];

  const { ref, getItemStyle } = useStaggeredReveal(criteria.length + 4, { staggerDelay: TIMING.stagger, baseDelay: 0 });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Header */}
          <div>
            <div style={getItemStyle(0)} className="flex items-center gap-4 mb-6">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Is This For You?
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <h2
              style={getItemStyle(1)}
              className="text-3xl sm:text-4xl font-light tracking-tight leading-[1.1] mb-4"
            >
              This is for you
              <br />
              <span className="font-normal italic text-muted-foreground">if…</span>
            </h2>

            <p style={getItemStyle(2)} className="text-muted-foreground">
              If 2+ are true, this is a good fit.
            </p>
          </div>

          {/* Right - Checklist */}
          <div className="space-y-0">
            {criteria.map((item, index) => (
              <div
                key={index}
                style={getItemStyle(3 + index)}
                className="flex items-start gap-4 py-4 border-b border-border first:border-t"
              >
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}

            <div style={getItemStyle(3 + criteria.length)} className="pt-6">
              <Link to="/start-here" className="group inline-flex items-center gap-3 text-foreground font-medium">
                <span className="group-hover:text-primary transition-colors">Get Started</span>
                <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// What You Get - Premium cards with hover
const WhatYouGet = () => {
  const deliverables = [
    { icon: Eye, title: "Clear snapshot", desc: "What's working and what's missing" },
    { icon: Target, title: "Top priorities", desc: "What to fix first, second, third" },
    { icon: Map, title: "Simple roadmap", desc: "Your team can follow" },
    { icon: Check, title: "Quick wins", desc: "You can do right away" },
    { icon: Users, title: "Walkthrough call", desc: "To review the plan together" },
    { icon: ArrowRight, title: "Clear next step", desc: "If you want us to build it with you" }
  ];

  const { ref, getItemStyle } = useStaggeredReveal(deliverables.length + 4, { staggerDelay: TIMING.stagger, baseDelay: 0 });

  return (
    <section id="what-you-get" className="py-20 md:py-28 bg-muted/30">
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            style={getItemStyle(0)}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-6"
          >
            Deliverables
          </span>

          <h2
            style={getItemStyle(1)}
            className="text-3xl sm:text-4xl font-medium tracking-tight mb-4"
          >
            What you get (and keep)
          </h2>

          <p
            style={getItemStyle(2)}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            You don't just get a score. You get a clear plan.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((item, index) => (
            <div
              key={index}
              style={getItemStyle(3 + index)}
              className="group bg-card border border-border/60 rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <p
          style={getItemStyle(3 + deliverables.length)}
          className="text-sm text-muted-foreground text-center mt-8"
        >
          We keep it practical. No long reports you'll never use.
        </p>
      </div>
    </section>
  );
};

// What We Check - 7 Areas
const WhatWeCheck = () => {
  const areas = [
    { icon: Users, title: "Board", desc: "Decisions, roles, meeting basics" },
    { icon: DollarSign, title: "Money & Grants", desc: "Tracking, approvals, records" },
    { icon: Briefcase, title: "People", desc: "Roles, handoffs, basic HR" },
    { icon: Target, title: "Programs", desc: "Planning, tracking, reporting" },
    { icon: Heart, title: "Fundraising", desc: "Basic donor systems and routines" },
    { icon: HandshakeIcon, title: "Volunteers", desc: "Roles, onboarding, tracking" },
    { icon: FolderOpen, title: "Tools & Files", desc: "Folders, templates, simple workflows" }
  ];

  const { ref, getItemStyle } = useStaggeredReveal(areas.length + 2, { staggerDelay: TIMING.stagger, baseDelay: 0 });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2
            style={getItemStyle(0)}
            className="text-3xl sm:text-4xl font-medium tracking-tight mb-4"
          >
            What we check
          </h2>

          <p
            style={getItemStyle(1)}
            className="text-muted-foreground"
          >
            We look across 7 areas:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              style={getItemStyle(2 + index)}
              className="group bg-card border border-border/60 rounded-2xl p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                <area.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{area.title}</h3>
              <p className="text-sm text-muted-foreground">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works - Dark premium section
const HowItWorks = () => {
  const steps = [
    { label: "Start", desc: "Quick intake + what you're trying to improve" },
    { label: "Review", desc: "We look at what you already have (docs, files, workflows)" },
    { label: "Plan", desc: "We give you your clear priorities and roadmap" },
    { label: "Build", desc: "(Optional) If you want help, we can build the next system with you" }
  ];

  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(steps.length + 3, { staggerDelay: TIMING.stagger, baseDelay: 0 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary-background text-white overflow-hidden relative">
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
        <div style={getItemStyle(0)} className="flex items-center gap-4 mb-6">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">
            Process
          </span>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        <h2
          style={getItemStyle(1)}
          className="text-3xl sm:text-4xl font-light tracking-tight mb-4"
        >
          How it works
        </h2>

        <p style={getItemStyle(1)} className="text-white/50 mb-16">
          Start → Review → Plan → Build (optional)
        </p>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              style={getItemStyle(2 + index)}
              className="relative"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-lg font-semibold text-accent">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{step.label}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={getItemStyle(2 + steps.length)} className="text-center">
          <a
            href={CALENDLY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 bg-white text-primary font-semibold rounded-lg transition-all duration-150 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Book an Organization Check
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Timeline - Clean editorial
const Timeline = () => {
  const weeks = [
    { title: "Week 1", items: ["Intake + document review begins"] },
    { title: "Weeks 2–3", items: ["Review + draft priorities"] },
    { title: "Week 4", items: ["Final roadmap + walkthrough call"] }
  ];

  const { ref, getItemStyle } = useStaggeredReveal(weeks.length + 2, { staggerDelay: 100, baseDelay: 0 });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2
          style={getItemStyle(0)}
          className="text-3xl sm:text-4xl font-light tracking-tight text-center mb-4"
        >
          Timeline
        </h2>

        <p
          style={getItemStyle(1)}
          className="text-muted-foreground text-center mb-16 max-w-xl mx-auto"
        >
          Most Organization Checks take 2–4 weeks, depending on your team size and how many documents you have.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {weeks.map((week, weekIndex) => (
            <div
              key={weekIndex}
              style={getItemStyle(2 + weekIndex)}
              className="bg-card border border-border/60 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-primary mb-4">{week.title}</h3>
              <ul className="space-y-3">
                {week.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing - Premium cards
const Pricing = () => {
  const tiers = [
    { name: "Standard", desc: "Small teams", price: "From $2,500" },
    { name: "Complex", desc: "10+ staff / more moving parts", price: "Up to $5,000" }
  ];

  const { ref, getItemStyle } = useStaggeredReveal(tiers.length + 3, { staggerDelay: TIMING.stagger, baseDelay: 0 });

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span
            style={getItemStyle(0)}
            className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary mb-6"
          >
            Investment
          </span>

          <h2
            style={getItemStyle(1)}
            className="text-3xl sm:text-4xl font-medium tracking-tight mb-4"
          >
            Pricing
          </h2>

          <p
            style={getItemStyle(2)}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            We price this as a fixed project, based on complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              style={getItemStyle(3 + index)}
              className="relative bg-card border border-border/60 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
            >
              <h3 className="font-semibold text-lg text-foreground mb-1">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tier.desc}</p>
              <p className="text-2xl font-semibold text-primary">{tier.price}</p>
            </div>
          ))}
        </div>

        <p
          style={getItemStyle(3 + tiers.length)}
          className="text-sm text-muted-foreground text-center mt-8"
        >
          We'll confirm the right scope on a short call.
        </p>
      </div>
    </section>
  );
};

// What Happens After
const WhatHappensAfter = () => {
  const options = [
    "Do it yourself (we'll still tell you what to do first)",
    "Get support (we can build the next system with you)"
  ];

  const { ref, getItemStyle } = useStaggeredReveal(options.length + 3, { staggerDelay: 80, baseDelay: 0 });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <h2
          style={getItemStyle(0)}
          className="text-2xl sm:text-3xl font-medium tracking-tight mb-4"
        >
          What happens after the check?
        </h2>

        <p
          style={getItemStyle(1)}
          className="text-muted-foreground mb-8"
        >
          You'll have a clear plan. Then you choose:
        </p>

        <div className="space-y-3 max-w-md mx-auto text-left">
          {options.map((option, index) => (
            <div
              key={index}
              style={getItemStyle(2 + index)}
              className="flex items-start gap-3"
            >
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground">{option}</span>
            </div>
          ))}
        </div>

        <p
          style={getItemStyle(2 + options.length)}
          className="text-sm text-muted-foreground mt-6"
        >
          Many teams choose a build bundle after the check.
        </p>
      </div>
    </section>
  );
};

// Boundaries - Simple and clean
const Boundaries = () => {
  const items = [
    "We don't do bookkeeping or taxes",
    "We don't 'audit' your organization",
    "We don't judge your past"
  ];

  const { ref, getItemStyle } = useStaggeredReveal(items.length + 2, { staggerDelay: 80, baseDelay: 0 });

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div ref={ref} className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
        <h2
          style={getItemStyle(0)}
          className="text-2xl sm:text-3xl font-light tracking-tight mb-8"
        >
          What we don't do
        </h2>

        <ul className="space-y-4 mb-8">
          {items.map((item, index) => (
            <li
              key={index}
              style={getItemStyle(1 + index)}
              className="text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>

        <p
          style={getItemStyle(1 + items.length)}
          className="text-foreground font-medium"
        >
          We help you set up working basics going forward.
        </p>
      </div>
    </section>
  );
};

// Mini FAQ
const MiniFAQ = () => {
  const faqs = [
    { q: "Is this the same as Grant Setup?", a: "No. Grant Setup is one focused setup (about 2 weeks). This is a full look across your organization." },
    { q: "Do we need perfect documents to start?", a: "No. We work with what you have." },
    { q: "Will you tell us what to fix first?", a: "Yes. That's the point — clear priorities, not a long list." },
    { q: "What if we're not sure which service we need?", a: "Start with Get Started. We'll point you to the best first step." }
  ];

  const { ref, getItemStyle } = useStaggeredReveal(faqs.length + 1, { staggerDelay: 80, baseDelay: 0 });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div ref={ref} className="max-w-2xl mx-auto px-6 lg:px-12">
        <h2
          style={getItemStyle(0)}
          className="text-2xl sm:text-3xl font-light tracking-tight text-center mb-12"
        >
          Common questions
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              style={getItemStyle(1 + index)}
              className="bg-card border border-border/60 rounded-xl px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection = () => {
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(5, { staggerDelay: 100, baseDelay: 0 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary-background text-white relative overflow-hidden">
      {/* Grid pattern */}
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
          className="text-3xl sm:text-4xl font-medium tracking-tight mb-4"
        >
          Want a clear plan?
        </h2>

        <p
          style={getItemStyle(1)}
          className="text-white/60 text-lg mb-10 max-w-xl mx-auto"
        >
          Let's find what's working, what's missing, and what to fix first.
        </p>

        <div
          style={getItemStyle(2)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <Link
            to="/start-here"
            className="inline-flex items-center gap-3 px-7 py-4 bg-white text-primary font-semibold rounded-lg transition-all duration-150 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div style={getItemStyle(3)} className="space-y-3">
          <Link to="/free-check" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
            Try the free check
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <p
          style={getItemStyle(4)}
          className="text-sm text-white/40 mt-6"
        >
          Prefer email?{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/60 hover:text-white underline underline-offset-2 transition-colors">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
};

// Main Page Component
const OrganizationCheckPage = () => {
  return (
    <MotionPreferencesProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <Helmet>
          <title>Organization Check | Nimara</title>
          <meta name="description" content="A clear look at what's working, what's missing, and what to fix first — so your nonprofit can grow with confidence. 2–4 weeks." />
        </Helmet>

        <Header />
        <ScrollProgress />

        <main className="relative">
          <HeroSection />
          <WhoThisIsFor />
          <WhatYouGet />
          <WhatWeCheck />
          <HowItWorks />
          <Timeline />
          <Pricing />
          <WhatHappensAfter />
          <Boundaries />
          <MiniFAQ />
          <FinalCTASection />
        </main>

        <Footer />
        <ScrollToTop />
        <MotionControls />
      </div>
    </MotionPreferencesProvider>
  );
};

export default OrganizationCheckPage;
