import { FileCheck, Users, BarChart3, FolderSearch, ArrowRight, Check, X, Receipt, Gavel, LineChart, FolderOpen, Plus, Folder, ClipboardList, ShieldCheck, Shield, Calendar, Clock, UserCheck, BadgeCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";

// Institutional Premium Glassmorphism Card Component
const GlassCard = ({ 
  children, 
  className,
  hover = false,
  variant = "default"
}: { 
  children: React.ReactNode; 
  className?: string;
  hover?: boolean;
  variant?: "default" | "dark" | "highlight";
}) => {
  const baseStyles = "rounded-xl backdrop-blur-xl border transition-all duration-300";
  
  const variants = {
    default: "bg-inst-slate/40 border-white/[0.06]",
    dark: "bg-inst-oxford/60 border-white/[0.06]",
    highlight: "bg-inst-blue/10 border-inst-blue/20",
  };
  
  const hoverStyles = hover 
    ? "hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(56,189,248,0.15)] hover:border-inst-blue/30 cursor-pointer" 
    : "";

  return (
    <div className={cn(baseStyles, variants[variant], hoverStyles, className)}>
      {children}
    </div>
  );
};

const SmartTeamCohortHero = () => {
  return (
    <div className="min-h-screen bg-inst-oxford">
      <Header activeRoute="/smart-team-cohort" hideCTA />
      
      {/* Hero Section - Oxford Blue with glassmorphism */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
        {/* Deep Oxford Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-inst-oxford via-inst-oxford to-inst-slate" />
        
        {/* Premium subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(248,250,252,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} 
        />
        
        {/* Radial glow from center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.08)_0%,_transparent_60%)]" />
        
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-inst-blue/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-20 py-32 sm:py-40 md:py-48">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-inst-blue/10 backdrop-blur-xl border border-inst-blue/20 text-inst-blue text-xs sm:text-sm font-medium uppercase tracking-[0.15em] mb-12 sm:mb-16">
              <span className="w-2 h-2 rounded-full bg-inst-blue animate-pulse" />
              For Canadian Nonprofits • 1-15 Staff
            </div>

            {/* Headline - Serif font for authority */}
            <h1 id="hero-heading" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-inst-crisp leading-[1.08] tracking-[-0.02em] mb-10 sm:mb-12">
              Stop Running Your
              <br />
              <span className="text-inst-blue">Nonprofit From Your Head</span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl md:text-2xl text-inst-crisp/70 font-light leading-relaxed mb-16 sm:mb-20 max-w-3xl mx-auto">
              When you can't find a receipt, can't show your impact, or can't explain where the money went — funders notice. And they don't come back. We help you build simple systems that prove you're fundable.
            </p>

            {/* Logistics Bar - Glassmorphic */}
            <GlassCard className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 px-10 sm:px-14 py-6 sm:py-8 mb-16 sm:mb-20">
              <div className="flex items-center gap-3 text-inst-crisp">
                <Calendar className="w-5 h-5 text-inst-blue" aria-hidden="true" />
                <span className="text-base sm:text-lg font-medium">Feb 11, 2026</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/10" />
              <span className="text-inst-crisp/60 text-base sm:text-lg">100% Virtual</span>
              <div className="hidden sm:block w-px h-6 bg-white/10" />
              <span className="text-inst-blue font-semibold text-base sm:text-lg">$9,450 CAD</span>
              <div className="hidden sm:block w-px h-6 bg-white/10" />
              <span className="text-inst-crisp/60 text-base sm:text-lg">15 spots</span>
            </GlassCard>

            {/* Primary CTA */}
            <div className="mb-6">
              <Button size="lg" className="group w-full sm:w-auto bg-inst-blue hover:bg-inst-blue/90 text-inst-oxford rounded-xl px-14 sm:px-20 py-7 sm:py-8 text-lg sm:text-xl font-bold shadow-[0_0_60px_rgba(56,189,248,0.3)] hover:shadow-[0_0_80px_rgba(56,189,248,0.45)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]" asChild>
                <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
                  Apply for a Seat
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </Button>
            </div>

            {/* Microcopy */}
            <p className="text-sm sm:text-base text-inst-crisp/40 font-light">
              SBCCI grant-eligible • Application takes 5 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Sound Familiar? - Slate Charcoal */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-20 py-28 sm:py-36 md:py-44 lg:py-56 bg-inst-slate" aria-labelledby="familiar-heading">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-20 sm:mb-28">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-inst-blue mb-6">
              Sound Familiar?
            </p>
            <h2 id="familiar-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-inst-crisp tracking-[-0.02em] leading-[1.12] mb-6">
              You're Doing Everything From Memory
            </h2>
            <p className="text-xl sm:text-2xl text-inst-crisp/60 font-light">
              And it's exhausting.
            </p>
          </header>

          {/* Pain Point Cards - Bento Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {[
              { title: '"Where\'s that receipt?"', desc: "You spend hours looking for documents every time a funder asks." },
              { title: '"I can\'t take a vacation."', desc: "If you step away, nobody knows how to find anything." },
              { title: '"What if we get audited?"', desc: "You know your records aren't ready. It keeps you up at night." },
              { title: '"We do good work, but..."', desc: "You struggle to prove your impact when funders ask for numbers." },
            ].map((item, idx) => (
              <GlassCard key={idx} hover className="p-8 sm:p-10 border-l-2 border-l-inst-blue">
                <h3 className="text-lg sm:text-xl font-bold text-inst-crisp mb-3">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-inst-crisp/60 font-light leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Solution - What You Get */}
      <section id="what-you-get" className="w-full px-6 sm:px-8 md:px-12 lg:px-20 py-28 sm:py-36 md:py-44 lg:py-56 bg-inst-oxford" aria-labelledby="what-you-get-heading">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-20 sm:mb-28">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-inst-blue mb-6">
              The Solution
            </p>
            <h2 id="what-you-get-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-inst-crisp tracking-[-0.02em] leading-[1.12] mb-6">
              We Don't Teach. We Build With You.
            </h2>
            <p className="text-xl sm:text-2xl text-inst-crisp/60 font-light max-w-3xl mx-auto">
              In 6 weeks, we install 4 systems directly in your Google Drive or Microsoft 365.
            </p>
          </header>

          {/* 6 Feature Cards - Bento Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { icon: <BarChart3 className="w-8 h-8" />, title: "Your Money System", desc: "Tracks every dollar. Receipts go in one place. Grant spending is always up to date. Audit-ready." },
              { icon: <Users className="w-8 h-8" />, title: "Your Board System", desc: "Every decision is logged. Clear rules for who signs what. Board meetings run smoothly." },
              { icon: <FolderOpen className="w-8 h-8" />, title: "Your File System", desc: "One place for everything. Anyone can find any file in under 2 minutes. Even if you're away." },
              { icon: <LineChart className="w-8 h-8" />, title: "Your Impact System", desc: "Shows your results in 3 clicks. Numbers and stories ready for any funder report." },
              { icon: <UserCheck className="w-8 h-8" />, title: "Dedicated Support", desc: "One Ops Lead works with you the whole time. Not a call center. A real person who knows your org." },
              { icon: <BadgeCheck className="w-8 h-8" />, title: "Proven Process", desc: "Built from 50+ nonprofit installs. We know what works. You get systems that stick." },
            ].map((item, idx) => (
              <GlassCard key={idx} hover className="p-8 sm:p-10">
                <div className="text-inst-blue mb-8">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-inst-crisp mb-4">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-inst-crisp/60 font-light leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section id="how-it-works" className="w-full px-6 sm:px-8 md:px-12 lg:px-20 py-28 sm:py-36 md:py-44 lg:py-56 bg-inst-slate" aria-labelledby="how-it-works-heading">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-20 sm:mb-28">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-inst-blue mb-6">
              How It Works
            </p>
            <h2 id="how-it-works-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-inst-crisp tracking-[-0.02em] leading-[1.12] mb-6">
              6 Weeks. 4 Systems. Done With You.
            </h2>
            <p className="text-xl sm:text-2xl text-inst-crisp/60 font-light">
              One Ops Lead works with you the whole time. We build it in your tools.
            </p>
          </header>

          {/* 3-Step Process */}
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 mb-20 sm:mb-28">
            {[
              { num: "01", title: "We Find the Gaps", desc: "Week 1: We look at what you have. We find what's missing." },
              { num: "02", title: "We Build Together", desc: "Weeks 2-5: One system per week. Built with you watching." },
              { num: "03", title: "We Test Everything", desc: "Week 6: We pretend to be an auditor. If it breaks, we fix it." },
            ].map((step, idx) => (
              <GlassCard key={idx} className="p-10 sm:p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-8 rounded-xl bg-inst-blue/10 border border-inst-blue/20 flex items-center justify-center">
                  <span className="text-inst-blue text-xl font-bold font-mono">{step.num}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-inst-crisp mb-4">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-inst-crisp/60 font-light leading-relaxed">
                  {step.desc}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* Time Commitment Card */}
          <GlassCard variant="highlight" className="p-10 sm:p-14 text-center">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-inst-crisp mb-4">
              4 hours a week. <span className="text-inst-blue">100% Online.</span>
            </h3>
            <p className="text-base sm:text-lg text-inst-crisp/60 mb-12">
              Your weekly time commitment:
            </p>
            <div className="grid grid-cols-3 gap-8 sm:gap-12 max-w-2xl mx-auto">
              {[
                { label: "Group Call", value: "90 min" },
                { label: "Build Session", value: "90 min" },
                { label: "Your Prep", value: "1 hour" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-inst-crisp/60 font-medium text-base sm:text-lg mb-2">{item.label}</p>
                  <p className="text-inst-blue font-bold text-xl sm:text-2xl">{item.value}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Section 5: Is This Right For You? */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-20 py-28 sm:py-36 md:py-44 lg:py-56 bg-inst-oxford" aria-labelledby="right-for-you-heading">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-20 sm:mb-28">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-inst-crisp/50 mb-6">
              Is This Right For You?
            </p>
            <h2 id="right-for-you-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-inst-crisp tracking-[-0.02em] leading-[1.12]">
              This Works Best If...
            </h2>
          </header>

          {/* Two Column Cards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Apply If... Card */}
            <GlassCard className="p-8 sm:p-10 md:p-12">
              <h3 className="flex items-center gap-3 text-xl font-bold text-inst-blue mb-8">
                <Check className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
                Apply if you...
              </h3>
              <ul className="space-y-5">
                {[
                  "Have 1-15 staff members",
                  "Use Google or Microsoft for your files",
                  'Are tired of being the "only one who knows"',
                  "Want working systems, not another workshop",
                  "Can commit 4 hours a week for 6 weeks",
                  "Have SBCCI or similar capacity grant",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-inst-blue flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-base sm:text-lg text-inst-crisp/70">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Don't Apply If... Card */}
            <GlassCard className="p-8 sm:p-10 md:p-12">
              <h3 className="flex items-center gap-3 text-xl font-bold text-red-400 mb-8">
                <X className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
                Don't apply if you...
              </h3>
              <ul className="space-y-5">
                {[
                  "Want to figure it out yourself",
                  "Are looking for training videos to watch",
                  "Can't make time for weekly sessions",
                  "Already have smooth-running systems",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-base sm:text-lg text-inst-crisp/70">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Section 6: Ultimate Proof */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-20 py-28 sm:py-36 md:py-44 lg:py-56 bg-inst-slate" aria-labelledby="ultimate-proof-heading">
        <div className="max-w-4xl mx-auto">
          <GlassCard variant="highlight" className="p-10 sm:p-14 md:p-20">
            {/* Shield Icon */}
            <div className="flex justify-center mb-10">
              <div className="w-20 h-20 rounded-2xl bg-inst-blue/10 border border-inst-blue/20 flex items-center justify-center">
                <ShieldCheck className="w-10 h-10 text-inst-blue" />
              </div>
            </div>
            
            <h2 id="ultimate-proof-heading" className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-inst-crisp tracking-[-0.02em] text-center mb-8">
              The "It Has to Work" Promise
            </h2>
            
            <p className="text-lg sm:text-xl text-inst-crisp/70 text-center max-w-2xl mx-auto leading-relaxed">
              In Week 6, we test your systems like an auditor would. We ask for receipts. 
              We ask for board decisions. We ask for files. If your systems can't find 
              things fast, we keep working until they can. No extra cost.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Section 7: Guarantee */}
      <section className="w-full px-6 sm:px-8 md:px-12 lg:px-20 py-28 sm:py-36 md:py-44 lg:py-56 bg-inst-oxford" aria-labelledby="guarantee-heading">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 sm:mb-24">
            <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-inst-blue mb-6">
              Our Promise
            </p>
            <h2 id="guarantee-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-inst-crisp tracking-[-0.02em] leading-[1.08] mb-6">
              We Don't Leave Until It Works.
            </h2>
            <p className="text-lg sm:text-xl text-inst-crisp/40">
              No fine print. No excuses.
            </p>
          </header>

          {/* Main Guarantee Statement */}
          <GlassCard className="p-8 sm:p-12 md:p-16 mb-14">
            <div className="mb-12">
              <p className="text-lg sm:text-xl text-inst-crisp/60 leading-relaxed mb-8">
                In Week 6, we stress-test everything. We act like an auditor. We ask for receipts. We ask for board decisions. We ask for files.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-inst-blue leading-snug">
                If your systems don't pass, we keep working with you — at no extra cost — until they do.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-inst-blue uppercase tracking-[0.2em] mb-8">
                  The 4 systems we build:
                </h4>
                <ul className="space-y-5">
                  {[
                    "Audit-Ready Spending Proof",
                    "Professional Board Decisions",
                    "Find-it-Fast File System",
                    "Simple Funder Reporting",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-inst-crisp/60 text-base sm:text-lg">
                      <span className="w-2 h-2 rounded-full bg-inst-blue flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-inst-crisp uppercase tracking-[0.2em] mb-8">
                  We expect you to:
                </h4>
                <ul className="space-y-5">
                  {[
                    "Attend 5 of the 6 weeks",
                    "Complete the weekly tasks",
                    "Share the documents we need",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-inst-crisp/60 text-base sm:text-lg">
                      <Check className="w-5 h-5 text-inst-blue flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/[0.06]">
              <p className="text-base sm:text-lg text-inst-crisp/40 italic text-center">
                Designed for Executive Directors who need systems that actually work.
              </p>
            </div>
          </GlassCard>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="w-full sm:w-auto bg-inst-blue hover:bg-inst-blue/90 text-inst-oxford rounded-xl px-14 py-7 text-lg font-semibold shadow-[0_0_50px_rgba(56,189,248,0.3)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]" asChild>
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-sm sm:text-base text-inst-crisp/30 mt-8">
              Starts Feb 11 • 15 spots total
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Price and Seats */}
      <section id="price" className="w-full px-6 sm:px-8 md:px-12 lg:px-20 py-28 sm:py-36 md:py-44 lg:py-56 bg-inst-slate" aria-labelledby="price-heading">
        <div className="max-w-xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 sm:mb-24">
            <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-inst-blue mb-6">
              Price and seats
            </p>
            <h2 id="price-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-inst-crisp tracking-[-0.02em] leading-[1.08]">
              Simple and <span className="text-inst-blue">clear.</span>
            </h2>
          </header>

          {/* Main Pricing Card */}
          <GlassCard className="p-8 sm:p-12 md:p-16 mb-10">
            {/* Price */}
            <div className="text-center mb-12">
              <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-inst-crisp tracking-tight mb-3">
                $9,450
              </p>
              <p className="text-inst-crisp/50 text-lg sm:text-xl font-light">
                CAD per organization
              </p>
            </div>

            {/* Seats Badge */}
            <div className="flex justify-center mb-14">
              <span className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold bg-inst-blue/10 text-inst-blue border border-inst-blue/20">
                15 seats per cohort
              </span>
            </div>

            <div className="border-t border-white/[0.06] my-12" />

            {/* What's Included */}
            <div className="mb-12">
              <h4 className="text-xs sm:text-sm font-semibold text-inst-crisp uppercase tracking-[0.2em] mb-8 text-center">
                What's Included
              </h4>
              <ul className="space-y-4">
                {[
                  "6 weekly 90-min group labs",
                  "6 weekly 90-min 1:1 build sessions",
                  "Personal Ops Lead for 6 weeks",
                  "All 4 systems installed",
                  "Week 6 Stress Test",
                  "Funder-ready documentation",
                  "Guarantee: We stay until it works",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-inst-blue flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-base sm:text-lg text-inst-crisp/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/[0.06] my-12" />

            {/* Payment Options */}
            <div className="mb-12">
              <h4 className="text-xs sm:text-sm font-semibold text-inst-crisp uppercase tracking-[0.2em] mb-8 text-center">
                Payment Options
              </h4>
              <ul className="space-y-4">
                {[
                  "Pay in full: $9,450",
                  "2 payments: $4,950 x 2",
                  "Capacity Building Grant eligible",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-inst-blue flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-base sm:text-lg text-inst-crisp/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Cohort Info */}
            <p className="text-sm sm:text-base text-inst-blue text-center mb-12 font-medium">
              Next cohort: Wednesday, February 11, 2026
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-5">
              <Button size="lg" className="w-full bg-inst-blue hover:bg-inst-blue/90 text-inst-oxford rounded-xl px-10 py-7 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" asChild>
                <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
                  Apply for a seat
                  <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
              <a href="#faq" className="text-inst-crisp/50 hover:text-inst-crisp text-base sm:text-lg font-medium transition-colors text-center">
                FAQ
              </a>
            </div>
          </GlassCard>

          {/* Micro note */}
          <p className="text-xs sm:text-sm text-inst-crisp/40 text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section id="faq" className="w-full px-6 sm:px-8 md:px-12 lg:px-20 py-28 sm:py-36 md:py-44 lg:py-56 bg-inst-oxford" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 sm:mb-24">
            <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-inst-crisp/50 mb-6">
              FAQ
            </p>
            <h2 id="faq-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-inst-crisp tracking-[-0.02em] leading-[1.08]">
              Quick <span className="text-inst-blue">answers.</span>
            </h2>
          </header>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mb-16">
            {[
              { q: "How do I know if we can afford the $9,450 CAD tuition?", a: "Most participants use Capacity Building Grants or \"Systems Improvement\" budget lines. We provide the receipts your funder needs." },
              { q: "Can we actually build 4 systems in just 6 weeks?", a: "Yes. We build together in live labs—not lectures. Week 1: your file system is done. Week 6: you pass a live Stress Test." },
              { q: "What happens if our Ops Lead is already at capacity?", a: "4 hours/week for 6 weeks saves 10+ hours/month forever. We fix the systems that waste your time." },
              { q: "Do we need to buy new software or change how we work?", a: "No new software. We use your existing Google Workspace or Microsoft 365—just better organized." },
              { q: 'What is the "Stress Test," and what if we fail it?', a: "Live test: find a key document in under 3 minutes. Can't do it? We stay until it's fixed." },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-inst-slate/40 backdrop-blur-xl border border-white/[0.06] rounded-xl mb-4 px-6 sm:px-8 data-[state=open]:bg-inst-slate/60 transition-all">
                <AccordionTrigger className="text-left text-inst-crisp text-base sm:text-lg md:text-xl font-medium py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-inst-crisp/50">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-inst-crisp/60 text-sm sm:text-base md:text-lg pb-6 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
            <Button size="lg" className="w-full sm:w-auto bg-inst-blue hover:bg-inst-blue/90 text-inst-oxford rounded-xl px-12 py-7 text-lg font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]" asChild>
              <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
                Apply for a seat
                <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-xl px-12 py-7 text-lg font-semibold border-white/10 text-inst-crisp hover:bg-white/5 hover:text-inst-crisp" asChild>
              <a href="/book">
                Book a call
              </a>
            </Button>
          </div>

          {/* Micro note */}
          <p className="text-xs sm:text-sm text-inst-crisp/30 text-center">
            Nimara supports Canadian Non-Profits with 0-50 staff. This cohort is only for organizations with 1-15 staff.
          </p>
        </div>
      </section>

      {/* Section 10: Final CTA Strip */}
      <section id="apply" className="w-full px-6 sm:px-8 md:px-12 lg:px-20 py-28 sm:py-36 md:py-44 lg:py-56 bg-inst-slate" aria-labelledby="apply-heading">
        <div className="max-w-4xl mx-auto text-center">
          {/* Guarantee Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm sm:text-base font-semibold bg-inst-blue/10 text-inst-blue border border-inst-blue/20 mb-10">
            <ShieldCheck className="w-5 h-5 mr-3" aria-hidden="true" />
            Full refund guarantee: $9,450 CAD
          </div>

          {/* Heading */}
          <h2 id="apply-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-inst-crisp tracking-[-0.02em] leading-[1.08] mb-8">
            Ready to get <span className="text-inst-blue">funder-ready?</span>
          </h2>
          <p className="text-lg sm:text-xl text-inst-crisp/50 font-light mb-14 max-w-xl mx-auto">
            Apply now. We'll review your application and send next steps within 2 business days.
          </p>

          {/* Main CTA */}
          <Button size="lg" className="w-full sm:w-auto bg-inst-blue hover:bg-inst-blue/90 text-inst-oxford rounded-xl px-16 py-8 text-xl font-semibold shadow-[0_0_60px_rgba(56,189,248,0.3)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] mb-8" asChild>
            <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
              Apply for a seat
              <ArrowRight className="ml-3 w-6 h-6" aria-hidden="true" />
            </a>
          </Button>

          {/* Time note */}
          <p className="text-inst-crisp/30 text-base sm:text-lg mb-14">
            Takes about 2 minutes.
          </p>

          {/* Trust reinforcement */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-12">
            <span className="inline-flex items-center gap-3 text-inst-crisp/50 text-base sm:text-lg font-medium">
              <Check className="w-5 h-5 text-inst-blue" aria-hidden="true" />
              15 seats only
            </span>
            <span className="inline-flex items-center gap-3 text-inst-crisp/50 text-base sm:text-lg font-medium">
              <Clock className="w-5 h-5 text-inst-blue" aria-hidden="true" />
              6 weeks
            </span>
            <span className="inline-flex items-center gap-3 text-inst-crisp/50 text-base sm:text-lg font-medium">
              <ShieldCheck className="w-5 h-5 text-inst-blue" aria-hidden="true" />
              $9,450 CAD
            </span>
          </div>

          {/* Staff size clarity */}
          <p className="text-xs sm:text-sm text-inst-crisp/20">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-8 md:px-12 lg:px-20 py-16 bg-inst-oxford border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-inst-blue rounded-xl flex items-center justify-center">
              <span className="text-inst-oxford font-bold text-lg">N</span>
            </div>
            <span className="text-lg text-inst-crisp/50">© 2025 Nimara</span>
          </div>
          <nav className="flex items-center gap-12 text-lg text-inst-crisp/30" aria-label="Footer navigation">
            <a href="/privacy" className="hover:text-inst-crisp transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-inst-crisp transition-colors">Terms</a>
            <a href="mailto:hello@nimara.ca" className="hover:text-inst-crisp transition-colors">hello@nimara.ca</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default SmartTeamCohortHero;
