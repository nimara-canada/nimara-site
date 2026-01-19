import { FileCheck, Users, BarChart3, FolderSearch, ArrowRight, Check, X, Receipt, Gavel, LineChart, FolderOpen, Plus, Folder, ClipboardList, ShieldCheck, Calendar, Clock, UserCheck, BadgeCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SmartTeamCohortHero = () => {
  const bullets = [
    {
      main: "Prove spending in minutes",
      sub: "Automated audit trails for every expense."
    },
    {
      main: "Run clean board meetings",
      sub: "Instant minutes, decisions, and action trackers."
    },
    {
      main: "Secure your next grant",
      sub: "Professional reporting templates that funders trust."
    },
  ];

  return (
    <div className="min-h-screen bg-nim-cloud">
      {/* Minimal Header */}
      <header className="w-full px-5 md:px-8 lg:px-12 py-4 md:py-5 flex items-center justify-between bg-nim-navy">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="font-semibold text-white tracking-tight">Nimara</span>
        </div>
        <Button 
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 py-2 text-sm font-semibold transition-all"
          asChild
        >
          <a href="#apply">Apply</a>
        </Button>
      </header>

      {/* Hero Section */}
      <section 
        className="w-full px-5 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-32 lg:py-40 bg-nim-navy"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.12] tracking-[-0.02em] mb-6 sm:mb-8"
          >
            Get <span className="text-nim-mint">audit-proof</span> and{" "}
            <span className="text-nim-mint">grant-ready</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>— in <span className="text-nim-mint">6 weeks.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light mb-8 sm:mb-10">
            A hands-on implementation cohort for{" "}
            <span className="text-white font-medium">Canadian nonprofits with 1–15 staff.</span>
          </p>

          {/* Logistics Bar - Mobile Optimized */}
          <div className="grid grid-cols-2 sm:inline-flex sm:flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-8 py-4 sm:py-5 bg-white/[0.05] border border-white/10 rounded-xl sm:rounded-2xl mb-8 sm:mb-12">
            <span className="flex items-center justify-center gap-2 text-nim-mint text-sm sm:text-base md:text-lg font-semibold col-span-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Starts Feb 11
            </span>
            <span className="text-white/70 text-sm sm:text-base md:text-lg text-center">100% Virtual</span>
            <span className="text-white font-semibold text-sm sm:text-base md:text-lg text-center">$9,450 CAD</span>
            <span className="text-white/70 text-sm sm:text-base md:text-lg text-center col-span-2">15 spots</span>
          </div>

          {/* Benefit Bullets */}
          <ul className="flex flex-col items-start sm:items-center gap-4 sm:gap-6 mb-10 sm:mb-14" aria-label="Key benefits">
            {bullets.map((bullet) => (
              <li key={bullet.main} className="flex items-start gap-3 sm:gap-4 text-left max-w-lg">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-nim-mint/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-nim-mint" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-medium block">{bullet.main}</span>
                  <span className="text-white/50 text-base sm:text-lg">{bullet.sub}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Primary CTA */}
          <div className="mb-4 sm:mb-6">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl sm:rounded-2xl px-8 sm:px-16 py-6 sm:py-8 text-lg sm:text-xl md:text-2xl font-semibold shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
              asChild
            >
              <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
                Apply for a seat
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* Secondary Link */}
          <a 
            href="#what-you-get" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-base sm:text-lg font-medium transition-colors mb-10 sm:mb-14"
          >
            See the 4 systems you'll build
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </a>

          {/* Trust Bar */}
          <p className="text-base sm:text-lg md:text-xl text-white/40">
            4 hours/week • Full refund if we don't deliver
          </p>
        </div>
      </section>

      {/* Section 2: Is This a Fit? - LIGHT */}
      <section 
        className="w-full px-5 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-36 lg:py-44 bg-nim-cloud"
        aria-labelledby="fit-heading"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12 sm:mb-16 md:mb-24">
            <p className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-nim-teal mb-4 sm:mb-8">
              Is this a fit?
            </p>
            <h2 
              id="fit-heading"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-nim-navy tracking-[-0.02em] leading-[1.15] mb-4 sm:mb-8"
            >
              We only accept <span className="text-nim-teal">15 organizations</span>{" "}
              <span className="md:hidden">per cohort.</span>
              <br className="hidden md:block" />
              <span className="hidden md:inline">per cohort.</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-nim-slate-dark font-light max-w-2xl mx-auto">
              We filter strictly to ensure every team graduates audit-proof.
            </p>
          </header>

          {/* Two-Column Layout */}
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-20 lg:gap-28 mb-12 sm:mb-16 md:mb-20">
            {/* Left Column - Fit */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-nim-teal mb-6 sm:mb-10">
                This is a fit if
              </h3>
              <ul className="space-y-5 sm:space-y-8" aria-label="Good fit criteria">
                <li className="flex items-start gap-3 sm:gap-5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-nim-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-nim-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-nim-navy text-lg sm:text-xl md:text-2xl font-medium leading-relaxed block">
                      You have a ~$10k budget.
                    </span>
                    <span className="text-nim-slate-dark text-base sm:text-lg">
                      Tuition is $9,450 CAD and eligible for Capacity Building grants.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-nim-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-nim-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-nim-navy text-lg sm:text-xl md:text-2xl font-medium leading-relaxed block">
                      You use a cloud stack.
                    </span>
                    <span className="text-nim-slate-dark text-base sm:text-lg">
                      Specifically Google Workspace or Microsoft 365.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-nim-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-nim-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-nim-navy text-lg sm:text-xl md:text-2xl font-medium leading-relaxed block">
                      You can commit 4 hours/week.
                    </span>
                    <span className="text-nim-slate-dark text-base sm:text-lg">
                      We do the real work together in labs; we don't just lecture.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-nim-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-nim-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-nim-navy text-lg sm:text-xl md:text-2xl font-medium leading-relaxed block">
                      You are a Canadian Nonprofit.
                    </span>
                    <span className="text-nim-slate-dark text-base sm:text-lg">
                      Current cohort is optimized for Canadian reporting standards.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column - Not a Fit */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-nim-slate mb-6 sm:mb-10">
                Not a fit if
              </h3>
              <ul className="space-y-5 sm:space-y-8" aria-label="Not a good fit criteria">
                <li className="flex items-start gap-3 sm:gap-5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-nim-slate/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-nim-slate" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-nim-slate-dark text-lg sm:text-xl md:text-2xl font-medium leading-relaxed block">
                      You want 'Done-For-You.'
                    </span>
                    <span className="text-nim-slate text-base sm:text-lg">
                      This is a collaborative implementation; your team must learn the systems to keep them.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-nim-slate/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-nim-slate" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-nim-slate-dark text-lg sm:text-xl md:text-2xl font-medium leading-relaxed block">
                      You are still paper-based.
                    </span>
                    <span className="text-nim-slate text-base sm:text-lg">
                      We cannot automate physical filing cabinets or manual ledgers.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-nim-slate/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-nim-slate" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-nim-slate-dark text-lg sm:text-xl md:text-2xl font-medium leading-relaxed block">
                      You can't share screens.
                    </span>
                    <span className="text-nim-slate text-base sm:text-lg">
                      We need to see your folders and workflows to fix them in real-time.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-nim-slate/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-nim-slate" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-nim-slate-dark text-lg sm:text-xl md:text-2xl font-medium leading-relaxed block">
                      You don't have a dedicated Ops Lead.
                    </span>
                    <span className="text-nim-slate text-base sm:text-lg">
                      The ED cannot do this alone; you need an admin/ops lead to own the system.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-nim-teal hover:bg-nim-teal/90 text-white rounded-xl sm:rounded-2xl px-8 sm:px-14 py-6 sm:py-8 text-lg sm:text-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-teal/50"
              asChild
            >
              <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
                Apply for a seat
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: What You Get - LIGHT with Cards */}
      <section 
        id="what-you-get" 
        className="w-full px-5 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-36 lg:py-44 bg-nim-cloud"
        aria-labelledby="what-you-get-heading"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12 sm:mb-16 md:mb-24">
            <p className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-nim-slate mb-4 sm:mb-8">
              What you get
            </p>
            <h2 
              id="what-you-get-heading"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-nim-navy tracking-[-0.02em] leading-[1.15] mb-4 sm:mb-8"
            >
              4 systems built with you
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="text-nim-teal">— in 6 weeks.</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-nim-slate-dark font-light max-w-2xl mx-auto">
              We implement these 4 pillars during our labs. You walk away with a 90-day plan to keep them running.
            </p>
          </header>

          {/* 4 Features - 2x2 Grid with Card Styling */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
            {/* Feature 1: Spending Proof */}
            <article className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-border shadow-soft">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-nim-cloud border border-border flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-nim-navy" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-nim-navy mb-3 sm:mb-4 tracking-[-0.02em]">
                Spending Proof System
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-nim-slate-dark font-light leading-relaxed">
                Stop hunting for receipts. One central location for invoices, approvals, and payment proof.
              </p>
            </article>

            {/* Feature 2: Board Decision */}
            <article className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-border shadow-soft">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-nim-cloud border border-border flex items-center justify-center">
                  <ClipboardList className="w-6 h-6 sm:w-8 sm:h-8 text-nim-navy" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-nim-navy mb-3 sm:mb-4 tracking-[-0.02em]">
                Board Decision System
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-nim-slate-dark font-light leading-relaxed">
                Professional governance made simple. Live action trackers, automated minutes, and decision logs.
              </p>
            </article>

            {/* Feature 3: Simple Reporting */}
            <article className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-border shadow-soft">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-nim-cloud border border-border flex items-center justify-center">
                  <LineChart className="w-6 h-6 sm:w-8 sm:h-8 text-nim-navy" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-nim-navy mb-3 sm:mb-4 tracking-[-0.02em]">
                Simple Reporting System
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-nim-slate-dark font-light leading-relaxed">
                Report to funders in minutes, not days. A 10-number dashboard and a 2-page update template.
              </p>
            </article>

            {/* Feature 4: Find-It-Fast Files */}
            <article className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-border shadow-soft">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-nim-cloud border border-border flex items-center justify-center">
                  <FolderSearch className="w-6 h-6 sm:w-8 sm:h-8 text-nim-navy" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-nim-navy mb-3 sm:mb-4 tracking-[-0.02em]">
                Find-It-Fast File System
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-nim-slate-dark font-light leading-relaxed">
                Your organization's 'Source of Truth.' Optimized folder maps, naming rules, and access controls.
              </p>
            </article>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-nim-navy hover:bg-nim-navy/90 text-white rounded-xl sm:rounded-2xl px-8 sm:px-14 py-6 sm:py-8 text-lg sm:text-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-navy/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-base sm:text-lg text-nim-slate mt-6 sm:mt-8">
              <span className="text-nim-navy font-semibold">$9,450 CAD</span> • 15 spots per cohort • 4 hours/week
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works - LIGHT */}
      <section 
        id="how-it-works" 
        className="w-full px-5 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-36 lg:py-44 bg-nim-cloud"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12 sm:mb-16 md:mb-28">
            <p className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-nim-teal mb-6 sm:mb-10">
              How it works
            </p>
            <h2 
              id="how-it-works-heading"
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-nim-navy tracking-[-0.03em] leading-[1.1] mb-6 sm:mb-10"
            >
              4 hours a week.
              <br />
              <span className="text-nim-slate-dark">100% Online.</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-3xl text-nim-slate-dark font-light max-w-2xl mx-auto leading-relaxed">
              One Ops Lead. We build the infrastructure with you.
            </p>
          </header>

          {/* Weekly Schedule Detail */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-border shadow-soft p-6 sm:p-8 md:p-14 mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-nim-navy mb-6 sm:mb-8 md:mb-10 text-center">Your Weekly Commitment</h3>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-12">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full bg-nim-teal/10 flex items-center justify-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-nim-teal" aria-hidden="true" />
                </div>
                <p className="text-nim-navy font-semibold text-sm sm:text-base md:text-xl mb-1 sm:mb-2">Strategy</p>
                <p className="text-nim-slate-dark text-xs sm:text-sm md:text-lg">90 min</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full bg-nim-teal/10 flex items-center justify-center">
                  <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-nim-teal" aria-hidden="true" />
                </div>
                <p className="text-nim-navy font-semibold text-sm sm:text-base md:text-xl mb-1 sm:mb-2">Lab</p>
                <p className="text-nim-slate-dark text-xs sm:text-sm md:text-lg">90 min</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full bg-nim-teal/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-nim-teal" aria-hidden="true" />
                </div>
                <p className="text-nim-navy font-semibold text-sm sm:text-base md:text-xl mb-1 sm:mb-2">Prep</p>
                <p className="text-nim-slate-dark text-xs sm:text-sm md:text-lg">1 hour</p>
              </div>
            </div>
          </div>

          {/* 6-Week Timeline */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-nim-navy mb-6 sm:mb-8 md:mb-12 text-center">6-Week Roadmap</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
              {[
                { week: "Week 1", date: "Feb 11", focus: "Files", highlight: true },
                { week: "Week 2", date: "Feb 18", focus: "Spending", highlight: true },
                { week: "Week 3", date: "Feb 25", focus: "Board", highlight: false },
                { week: "Week 4", date: "Mar 4", focus: "Reports", highlight: false },
                { week: "Week 5", date: "Mar 11", focus: "Integrate", highlight: false },
                { week: "Week 6", date: "Mar 18", focus: "Test", highlight: true },
              ].map((item, index) => (
                <div 
                  key={item.week}
                  className={`relative p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl text-center ${
                    item.highlight 
                      ? 'bg-nim-teal/10 border-2 border-nim-teal/30' 
                      : 'bg-white border border-border'
                  }`}
                >
                  <p className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1 sm:mb-2 ${
                    item.highlight ? 'text-nim-teal' : 'text-nim-slate'
                  }`}>{item.week}</p>
                  <p className="text-xs sm:text-sm md:text-base text-nim-slate-dark mb-1 sm:mb-2">{item.date}</p>
                  <p className={`text-xs sm:text-sm md:text-base font-medium ${
                    item.highlight ? 'text-nim-navy' : 'text-nim-slate-dark'
                  }`}>{item.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Step Flow */}
          <ol className="grid sm:grid-cols-3 gap-8 sm:gap-10 md:gap-16 lg:gap-20 mb-12 sm:mb-16 md:mb-20" aria-label="Program steps">
            <li className="text-center">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-nim-teal/40 text-nim-teal text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8"
                aria-hidden="true"
              >
                01
              </div>
              <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-nim-navy mb-2 sm:mb-4 tracking-[-0.02em]">
                Build Your Source of Truth
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-nim-slate-dark font-light leading-relaxed">
                Stop losing documents. We set up your digital folder map and access controls.
              </p>
            </li>

            <li className="text-center">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-nim-teal/40 text-nim-teal text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8"
                aria-hidden="true"
              >
                02
              </div>
              <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-nim-navy mb-2 sm:mb-4 tracking-[-0.02em]">
                Install the 4 Systems
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-nim-slate-dark font-light leading-relaxed">
                Direct implementation. We build your spending proof, board, and reporting workflows.
              </p>
            </li>

            <li className="text-center">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-nim-teal/40 text-nim-teal text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8"
                aria-hidden="true"
              >
                03
              </div>
              <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-nim-navy mb-2 sm:mb-4 tracking-[-0.02em]">
                The Stress Test
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-nim-slate-dark font-light leading-relaxed">
                Prove it works. Live-test your ability to find any document in under 3 minutes.
              </p>
            </li>
          </ol>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-nim-navy hover:bg-nim-navy/90 text-white rounded-xl sm:rounded-2xl px-8 sm:px-14 py-6 sm:py-8 text-lg sm:text-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-navy/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-base sm:text-lg text-nim-slate mt-6 sm:mt-8">
              <span className="text-nim-navy font-semibold">$9,450 CAD</span> per org • Starts Feb 11
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Early Win - DARK */}
      <section 
        className="w-full px-6 md:px-10 lg:px-16 py-28 md:py-36 lg:py-44 bg-nim-navy"
        aria-labelledby="early-win-heading"
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-20">
            <p className="text-base font-medium uppercase tracking-[0.25em] text-nim-mint mb-8">
              Early win
            </p>
            <h2 
              id="early-win-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.03em] leading-[1.08] mb-8"
            >
              Feel the relief by <span className="text-nim-mint">February 25.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto">
              Just 14 days after start. We don't wait 6 weeks to show results.
            </p>
          </header>

          {/* Week 1 and Week 2 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16">
            {/* Week 1 */}
            <article className="bg-white/[0.03] border border-white/10 rounded-3xl p-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-nim-mint/10 text-nim-mint mb-8">
                Week 1 • Feb 11–18
              </span>
              <div className="mb-6">
                <FolderOpen className="w-12 h-12 text-nim-mint" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 tracking-[-0.02em]">
                Your File System is Done.
              </h3>
              <ul className="space-y-4" aria-label="Week 1 deliverables">
                <li className="flex items-center gap-4 text-lg md:text-xl text-white/70">
                  <Check className="w-5 h-5 text-nim-mint flex-shrink-0" aria-hidden="true" />
                  A 'Source of Truth' folder map installed.
                </li>
                <li className="flex items-center gap-4 text-lg md:text-xl text-white/70">
                  <Check className="w-5 h-5 text-nim-mint flex-shrink-0" aria-hidden="true" />
                  Key docs found in &lt; 2 mins.
                </li>
              </ul>
            </article>

            {/* Week 2 */}
            <article className="bg-white/[0.03] border border-white/10 rounded-3xl p-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-nim-mint/10 text-nim-mint mb-8">
                Week 2 • Feb 18–25
              </span>
              <div className="mb-6">
                <ShieldCheck className="w-12 h-12 text-nim-mint" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 tracking-[-0.02em]">
                10 Audit-Ready Bundles.
              </h3>
              <ul className="space-y-4" aria-label="Week 2 deliverables">
                <li className="flex items-center gap-4 text-lg md:text-xl text-white/70">
                  <Check className="w-5 h-5 text-nim-mint flex-shrink-0" aria-hidden="true" />
                  Your first 10 expenses fully documented.
                </li>
                <li className="flex items-center gap-4 text-lg md:text-xl text-white/70">
                  <Check className="w-5 h-5 text-nim-mint flex-shrink-0" aria-hidden="true" />
                  Approval + Invoice + Payment proof linked.
                </li>
              </ul>
            </article>
          </div>

          {/* Emotional Closer */}
          <p className="text-center text-lg md:text-xl text-white/40 italic mb-14">
            Most Executive Directors feel the weight lift right here.
          </p>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-14 py-8 text-xl font-semibold shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-lg text-white/40 mt-8">
              <span className="text-white font-semibold">$9,450 CAD</span> • 15 spots per cohort
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Ultimate Proof - DARK */}
      <section 
        className="w-full px-6 md:px-10 lg:px-16 py-28 md:py-36 lg:py-44 bg-nim-navy"
        aria-labelledby="ultimate-proof-heading"
      >
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <p className="text-base font-medium uppercase tracking-[0.25em] text-nim-mint mb-8">
              Ultimate proof
            </p>
            <h2 
              id="ultimate-proof-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.08] mb-8"
            >
              We check that it works in real life.
            </h2>
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto">
              Before you graduate, we live-test your new systems.
            </p>
          </header>

          {/* Card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 md:p-14 mb-14">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              The Week 6 Stress Test
            </h3>

            <p className="text-white/50 text-lg mb-8">
              You will show:
            </p>

            <ul className="space-y-6 mb-10" aria-label="Stress test requirements">
              <li className="flex items-start gap-4 text-lg">
                <Check className="w-6 h-6 text-nim-mint flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-white font-medium">Proof for a real purchase:</span>
                  <span className="text-white/50 ml-2">(Linked invoice, approval, and payment).</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-lg">
                <Check className="w-6 h-6 text-nim-mint flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-white font-medium">A board decision record:</span>
                  <span className="text-white/50 ml-2">(Minute log and action tracker).</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-lg">
                <Check className="w-6 h-6 text-nim-mint flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-white font-medium">Your latest funder report:</span>
                  <span className="text-white/50 ml-2">(Generated via your new dashboard).</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-lg">
                <Check className="w-6 h-6 text-nim-mint flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-white font-medium">The 3-Minute Rule:</span>
                  <span className="text-white/50 ml-2">Find any key document in under 180 seconds.</span>
                </div>
              </li>
            </ul>

            <p className="text-white/40 text-base border-t border-white/10 pt-8 italic">
              If you can't show it fast, we stay with you until it's fixed.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-14 py-8 text-xl font-semibold shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 7: Guarantee - DARK */}
      <section 
        className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 lg:py-36 bg-nim-navy"
        aria-labelledby="guarantee-heading"
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-10 sm:mb-14 md:mb-20">
            <p className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-nim-mint mb-4 sm:mb-6 md:mb-8">
              Guarantee
            </p>
            <h2 
              id="guarantee-heading"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] sm:tracking-[-0.03em] leading-[1.1] sm:leading-[1.08] mb-4 sm:mb-6 md:mb-8"
            >
              We take the risk seriously.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/50">
              A clear, fair promise. No long fine print.
            </p>
          </header>

          {/* Main Guarantee Statement */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-14 mb-8 sm:mb-10 md:mb-14 max-w-3xl mx-auto">
            {/* Primary Refund Statement */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 pb-6 sm:pb-8 md:pb-12 border-b border-white/10">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
                If we do not set up the 4 systems, you get a full refund{' '}
                <span className="text-nim-mint">($9,450 CAD)</span>.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              {/* To Qualify */}
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 md:mb-8">
                  To qualify, you must:
                </h4>
                <ul className="space-y-3 sm:space-y-4 md:space-y-5" aria-label="Qualification requirements">
                  <li className="flex items-center gap-3 sm:gap-4 text-white/70 text-base sm:text-lg md:text-xl">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-mint flex-shrink-0" aria-hidden="true" />
                    Attend 5 of the 6 weeks.
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-white/70 text-base sm:text-lg md:text-xl">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-mint flex-shrink-0" aria-hidden="true" />
                    Submit the weekly items.
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-white/70 text-base sm:text-lg md:text-xl">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-mint flex-shrink-0" aria-hidden="true" />
                    Share the needed documents.
                  </li>
                </ul>
              </div>

              {/* The 4 Systems */}
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 md:mb-8">
                  The 4 systems are:
                </h4>
                <ul className="space-y-3 sm:space-y-4 md:space-y-5" aria-label="The 4 systems">
                  <li className="flex items-center gap-3 sm:gap-4 text-white/70 text-base sm:text-lg md:text-xl">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-nim-mint flex-shrink-0" aria-hidden="true" />
                    Audit-Ready Spending Proof
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-white/70 text-base sm:text-lg md:text-xl">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-nim-mint flex-shrink-0" aria-hidden="true" />
                    Professional Board Decisions
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-white/70 text-base sm:text-lg md:text-xl">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-nim-mint flex-shrink-0" aria-hidden="true" />
                    Simple Funder Reporting
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-white/70 text-base sm:text-lg md:text-xl">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-nim-mint flex-shrink-0" aria-hidden="true" />
                    Find-it-Fast File System
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Action Section */}
          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl text-white/50 mb-6 sm:mb-8 md:mb-10 italic">
              Designed for Executive Directors who need systems that actually work.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl sm:rounded-2xl px-8 sm:px-10 md:px-14 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-semibold shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-sm sm:text-base text-white/40 mt-5 sm:mt-6 md:mt-8">
              Starts Feb 11 • 15 spots total
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Price and Seats - DARK */}
      <section 
        id="price" 
        className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 lg:py-36 bg-nim-navy"
        aria-labelledby="price-heading"
      >
        <div className="max-w-xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-10 sm:mb-14 md:mb-20">
            <p className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-nim-mint mb-4 sm:mb-6 md:mb-8">
              Price and seats
            </p>
            <h2 
              id="price-heading"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] sm:tracking-[-0.03em] leading-[1.1] sm:leading-[1.08]"
            >
              Simple and <span className="text-nim-mint">clear.</span>
            </h2>
          </header>

          {/* Main Pricing Card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-14 mb-8 sm:mb-10 md:mb-12">
            {/* Price */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-2 sm:mb-3 md:mb-4">
                $9,450
              </p>
              <p className="text-white/50 text-base sm:text-lg md:text-xl font-light">
                CAD per organization
              </p>
            </div>

            {/* Seats Badge */}
            <div className="flex justify-center mb-8 sm:mb-10 md:mb-14">
              <span className="inline-flex items-center px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold bg-nim-mint/10 text-nim-mint border border-nim-mint/20">
                15 seats per cohort
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 my-8 sm:my-10 md:my-12" />

            {/* What's Included */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h4 className="text-xs sm:text-sm font-semibold text-white/40 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 md:mb-8">
                What's included
              </h4>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5" aria-label="What's included">
                <li className="flex items-center gap-3 sm:gap-4 md:gap-5 text-white text-base sm:text-lg md:text-xl">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-mint flex-shrink-0" aria-hidden="true" />
                  4 systems set up with you
                </li>
                <li className="flex items-center gap-3 sm:gap-4 md:gap-5 text-white text-base sm:text-lg md:text-xl">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-mint flex-shrink-0" aria-hidden="true" />
                  Weekly labs and office hours
                </li>
                <li className="flex items-center gap-3 sm:gap-4 md:gap-5 text-white text-base sm:text-lg md:text-xl">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-mint flex-shrink-0" aria-hidden="true" />
                  Week 6 stress test
                </li>
                <li className="flex items-center gap-3 sm:gap-4 md:gap-5 text-white text-base sm:text-lg md:text-xl">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-mint flex-shrink-0" aria-hidden="true" />
                  90-day plan
                </li>
              </ul>
            </div>

            {/* Payment Options */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h4 className="text-xs sm:text-sm font-semibold text-white/40 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 md:mb-8">
                Payment options
              </h4>
              <ul className="space-y-3 sm:space-y-4" aria-label="Payment options">
                <li className="flex items-center gap-3 sm:gap-4 text-white/50 text-sm sm:text-base md:text-lg">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/30 flex-shrink-0" aria-hidden="true" />
                  50% now / 50% in week 3
                </li>
                <li className="flex items-center gap-3 sm:gap-4 text-white/50 text-sm sm:text-base md:text-lg">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/30 flex-shrink-0" aria-hidden="true" />
                  Or 3 payments (week 0 / week 2 / week 4)
                </li>
              </ul>
            </div>

            {/* Next Cohort Info */}
            <p className="text-sm sm:text-base text-nim-mint text-center mb-8 sm:mb-10 md:mb-12 font-medium">
              Next cohort: Wednesday, February 11, 2025
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <Button
                size="lg"
                className="w-full bg-nim-mint hover:bg-nim-mint/90 text-nim-navy rounded-xl sm:rounded-2xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-mint/50"
                asChild
              >
                <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
                  Apply for a seat
                  <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </a>
              </Button>
              <a 
                href="#faq" 
                className="text-white/50 hover:text-white text-base sm:text-lg font-medium transition-colors text-center"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Micro note */}
          <p className="text-xs sm:text-sm md:text-base text-white/30 text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Section 9: FAQ - LIGHT */}
      <section 
        id="faq" 
        className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 lg:py-36 bg-nim-cloud"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-10 sm:mb-14 md:mb-20">
            <p className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-nim-teal mb-4 sm:mb-6 md:mb-8">
              FAQ
            </p>
            <h2 
              id="faq-heading"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-nim-navy tracking-[-0.02em] sm:tracking-[-0.03em] leading-[1.1] sm:leading-[1.08]"
            >
              Quick <span className="text-nim-teal">answers.</span>
            </h2>
          </header>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mb-10 sm:mb-12 md:mb-16">
            <AccordionItem value="item-1" className="bg-white rounded-xl sm:rounded-2xl border border-border mb-3 sm:mb-4 px-4 sm:px-6 md:px-8 data-[state=open]:bg-nim-cloud transition-all shadow-soft">
              <AccordionTrigger className="text-left text-nim-navy text-base sm:text-lg md:text-xl font-medium py-4 sm:py-5 md:py-7 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-nim-slate">
                How do I know if we can afford the $9,450 CAD tuition?
              </AccordionTrigger>
              <AccordionContent className="text-nim-slate-dark text-sm sm:text-base md:text-lg pb-4 sm:pb-5 md:pb-7 leading-relaxed">
                Most of our participants use Capacity Building Grants or Operational Funding to cover the full cost. If you have a budget line for "Organizational Development" or "Systems Improvement," this program is a perfect fit. We provide all the documentation and receipts your funder needs to approve the expense.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-xl sm:rounded-2xl border border-border mb-3 sm:mb-4 px-4 sm:px-6 md:px-8 data-[state=open]:bg-nim-cloud transition-all shadow-soft">
              <AccordionTrigger className="text-left text-nim-navy text-base sm:text-lg md:text-xl font-medium py-4 sm:py-5 md:py-7 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-nim-slate">
                Can we actually build 4 systems in just 6 weeks?
              </AccordionTrigger>
              <AccordionContent className="text-nim-slate-dark text-sm sm:text-base md:text-lg pb-4 sm:pb-5 md:pb-7 leading-relaxed">
                Yes, because this is not a lecture series—it is a hands-on implementation lab. We "install" the systems alongside you during our weekly 90-minute working sessions. By the end of Week 1, your file system is already set up; by the end of Week 6, you pass a live "Stress Test" to prove your systems work under pressure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-xl sm:rounded-2xl border border-border mb-3 sm:mb-4 px-4 sm:px-6 md:px-8 data-[state=open]:bg-nim-cloud transition-all shadow-soft">
              <AccordionTrigger className="text-left text-nim-navy text-base sm:text-lg md:text-xl font-medium py-4 sm:py-5 md:py-7 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-nim-slate">
                What happens if our Ops Lead is already at capacity?
              </AccordionTrigger>
              <AccordionContent className="text-nim-slate-dark text-sm sm:text-base md:text-lg pb-4 sm:pb-5 md:pb-7 leading-relaxed">
                The "Nimara Smart Team" approach is designed to give time back, not take it away. While we require a 4-hour weekly block for 6 weeks, this investment eliminates the 10+ hours a month currently wasted hunting for receipts, prepping for board meetings, and manually building funder reports.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-xl sm:rounded-2xl border border-border mb-3 sm:mb-4 px-4 sm:px-6 md:px-8 data-[state=open]:bg-nim-cloud transition-all shadow-soft">
              <AccordionTrigger className="text-left text-nim-navy text-base sm:text-lg md:text-xl font-medium py-4 sm:py-5 md:py-7 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-nim-slate">
                Do we need to buy new software or change how we work?
              </AccordionTrigger>
              <AccordionContent className="text-nim-slate-dark text-sm sm:text-base md:text-lg pb-4 sm:pb-5 md:pb-7 leading-relaxed">
                No. We build your 4 systems using the tools you already have, specifically Google Workspace or Microsoft 365. We don't add "new tech" to your plate; we simply organize your current environment so that it is audit-proof and easy for any staff member to use.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-xl sm:rounded-2xl border border-border px-4 sm:px-6 md:px-8 data-[state=open]:bg-nim-cloud transition-all shadow-soft">
              <AccordionTrigger className="text-left text-nim-navy text-base sm:text-lg md:text-xl font-medium py-4 sm:py-5 md:py-7 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-nim-slate">
                What is the "Stress Test," and what if we fail it?
              </AccordionTrigger>
              <AccordionContent className="text-nim-slate-dark text-sm sm:text-base md:text-lg pb-4 sm:pb-5 md:pb-7 leading-relaxed">
                The Stress Test is our live verification that your organization is truly funder-ready. You will be asked to find a specific key document, board decision, or expense proof bundle in under 3 minutes. If you can't, we stay with you and keep working until the system is fixed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-6 sm:mb-8 md:mb-10">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-nim-navy hover:bg-nim-navy/90 text-white rounded-xl sm:rounded-2xl px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-navy/50"
              asChild
            >
              <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
                Apply for a seat
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-xl sm:rounded-2xl px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-semibold border-nim-navy/20 text-nim-navy hover:bg-nim-navy/10 hover:text-nim-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-navy/20"
              asChild
            >
              <a href="/book">
                Book a call
              </a>
            </Button>
          </div>

          {/* Micro note */}
          <p className="text-xs sm:text-sm md:text-base text-nim-slate text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Section 10: Final CTA Strip - DARK */}
      <section 
        id="apply" 
        className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 lg:py-36 bg-nim-navy"
        aria-labelledby="apply-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Guarantee Badge */}
          <div className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-semibold bg-nim-mint/10 text-nim-mint border border-nim-mint/20 mb-6 sm:mb-8 md:mb-10">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" aria-hidden="true" />
            Full refund guarantee: $9,450 CAD
          </div>

          {/* Heading */}
          <h2 
            id="apply-heading"
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] sm:tracking-[-0.03em] leading-[1.1] sm:leading-[1.08] mb-4 sm:mb-6 md:mb-8"
          >
            Ready to get <span className="text-nim-mint">funder-ready?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 font-light mb-8 sm:mb-10 md:mb-14 max-w-xl mx-auto">
            Apply now. We'll review your application and send next steps within 2 business days.
          </p>

          {/* Main CTA */}
          <Button
            size="lg"
            className="w-full sm:w-auto bg-nim-mint hover:bg-nim-mint/90 text-nim-navy rounded-xl sm:rounded-2xl px-8 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-mint/50 mb-5 sm:mb-6 md:mb-8"
            asChild
          >
            <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
              Apply for a seat
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            </a>
          </Button>

          {/* Time note */}
          <p className="text-white/40 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-14">
            Takes about 2 minutes.
          </p>

          {/* Trust reinforcement */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-10 md:mb-12">
            <span className="inline-flex items-center gap-2 sm:gap-3 text-white/60 text-sm sm:text-base md:text-lg font-medium">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-nim-mint" aria-hidden="true" />
              15 seats only
            </span>
            <span className="inline-flex items-center gap-2 sm:gap-3 text-white/60 text-sm sm:text-base md:text-lg font-medium">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-nim-mint" aria-hidden="true" />
              6 weeks
            </span>
            <span className="inline-flex items-center gap-2 sm:gap-3 text-white/60 text-sm sm:text-base md:text-lg font-medium">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-nim-mint" aria-hidden="true" />
              $9,450 CAD
            </span>
          </div>

          {/* Staff size clarity */}
          <p className="text-xs sm:text-sm md:text-base text-white/30">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-10 lg:px-16 py-14 bg-nim-navy border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-nim-mint rounded-xl flex items-center justify-center">
              <span className="text-nim-navy font-bold text-lg">N</span>
            </div>
            <span className="text-lg text-white/60">© 2025 Nimara</span>
          </div>
          <nav className="flex items-center gap-12 text-lg text-white/40" aria-label="Footer navigation">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:hello@nimara.ca" className="hover:text-white transition-colors">hello@nimara.ca</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default SmartTeamCohortHero;