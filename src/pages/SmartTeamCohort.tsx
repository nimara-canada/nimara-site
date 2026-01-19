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
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Minimal Header */}
      <header className="w-full px-5 md:px-8 lg:px-12 py-4 md:py-5 flex items-center justify-between bg-[#0a0f1a]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="font-semibold text-white tracking-tight">Nimara</span>
        </div>
        <Button 
          className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-full px-5 py-2 text-sm font-semibold transition-all"
          asChild
        >
          <a href="#apply">Apply</a>
        </Button>
      </header>

      {/* Hero Section */}
      <section 
        className="w-full px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-36 bg-[#0a0f1a]"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-[-0.03em] mb-6"
          >
            Get <span className="text-[#5eead4]">audit-proof</span> and{" "}
            <span className="text-[#5eead4]">grant-ready</span>
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>— in <span className="text-[#5eead4]">6 weeks.</span>
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-white/70 font-light mb-12">
            A hands-on implementation cohort for{" "}
            <span className="text-white font-medium">Canadian nonprofits with 1–15 staff.</span>
          </p>

          {/* Benefit Bullets */}
          <ul className="flex flex-col items-center gap-5 mb-12" aria-label="Key benefits">
            {bullets.map((bullet) => (
              <li key={bullet.main} className="flex items-start gap-4 text-left max-w-md">
                <div className="w-6 h-6 rounded-full bg-[#5eead4]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#5eead4]" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-white text-lg md:text-xl font-medium block">{bullet.main}</span>
                  <span className="text-white/50 text-base font-light">{bullet.sub}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Primary CTA */}
          <div className="mb-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-xl px-14 py-8 text-lg md:text-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8b5cf6]/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* Secondary Link */}
          <a 
            href="#what-you-get" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-base font-medium transition-colors mb-12"
          >
            See the 4 systems you'll build
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </a>

          {/* Trust Bar */}
          <p className="text-base md:text-lg text-white/50">
            <span className="text-white font-semibold">$9,450 CAD</span> per org • 15 seats per cohort • 4 hours/week
          </p>
        </div>
      </section>

      {/* Section 2: Is This a Fit? */}
      <section 
        className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-[#0a0f1a]"
        aria-labelledby="fit-heading"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-20">
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.25em] text-[#5eead4] mb-6">
              Is this a fit?
            </p>
            <h2 
              id="fit-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6"
            >
              We only accept <span className="text-[#5eead4]">15 organizations</span>
              <br />
              per cohort.
            </h2>
            <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto">
              We filter strictly to ensure every team graduates audit-proof.
            </p>
          </header>

          {/* Two-Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 mb-16 md:mb-20">
            {/* Left Column - Fit */}
            <div>
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[#5eead4] mb-8">
                This is a fit if
              </h3>
              <ul className="space-y-6" aria-label="Good fit criteria">
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#5eead4]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#5eead4]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-white text-lg md:text-xl font-medium leading-relaxed block">
                      You have a ~$10k budget.
                    </span>
                    <span className="text-white/50 text-base font-light">
                      Tuition is $9,450 CAD and eligible for Capacity Building grants.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#5eead4]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#5eead4]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-white text-lg md:text-xl font-medium leading-relaxed block">
                      You use a cloud stack.
                    </span>
                    <span className="text-white/50 text-base font-light">
                      Specifically Google Workspace or Microsoft 365.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#5eead4]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#5eead4]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-white text-lg md:text-xl font-medium leading-relaxed block">
                      You can commit 4 hours/week.
                    </span>
                    <span className="text-white/50 text-base font-light">
                      We do the real work together in labs; we don't just lecture.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#5eead4]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#5eead4]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-white text-lg md:text-xl font-medium leading-relaxed block">
                      You are a Canadian Nonprofit.
                    </span>
                    <span className="text-white/50 text-base font-light">
                      Current cohort is optimized for Canadian reporting standards.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column - Not a Fit */}
            <div>
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-white/40 mb-8">
                Not a fit if
              </h3>
              <ul className="space-y-6" aria-label="Not a good fit criteria">
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-white/40" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-white/70 text-lg md:text-xl font-medium leading-relaxed block">
                      You want 'Done-For-You.'
                    </span>
                    <span className="text-white/40 text-base font-light">
                      This is a collaborative implementation; your team must learn the systems to keep them.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-white/40" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-white/70 text-lg md:text-xl font-medium leading-relaxed block">
                      You are still paper-based.
                    </span>
                    <span className="text-white/40 text-base font-light">
                      We cannot automate physical filing cabinets or manual ledgers.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-white/40" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-white/70 text-lg md:text-xl font-medium leading-relaxed block">
                      You can't share screens.
                    </span>
                    <span className="text-white/40 text-base font-light">
                      We need to see your folders and workflows to fix them in real-time.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-white/40" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-white/70 text-lg md:text-xl font-medium leading-relaxed block">
                      You don't have a dedicated Ops Lead.
                    </span>
                    <span className="text-white/40 text-base font-light">
                      The ED cannot do this alone; you need an admin/ops lead to own the system.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Single CTA - Centered */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#5eead4] hover:bg-[#5eead4]/90 text-[#0a0f1a] rounded-xl px-12 py-8 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#5eead4]/50"
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

      {/* Section 3: What You Get */}
      <section 
        id="what-you-get" 
        className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-[#0a0f1a]"
        aria-labelledby="what-you-get-heading"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-20">
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.25em] text-white/40 mb-6">
              What you get
            </p>
            <h2 
              id="what-you-get-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6"
            >
              4 systems built with you
              <br />
              <span className="text-[#5eead4]">— in 6 weeks.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto">
              We implement these 4 pillars during our labs. You walk away with a 90-day plan to keep them running effortlessly.
            </p>
          </header>

          {/* 4 Features - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-20">
            {/* Feature 1: Spending Proof */}
            <article className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="mb-5">
                <div className="w-14 h-14 rounded-xl bg-[#5eead4]/10 flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-[#5eead4]" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-[-0.01em]">
                Spending Proof System
              </h3>
              <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                Stop hunting for receipts. One central location for invoices, approvals, and payment proof.
              </p>
            </article>

            {/* Feature 2: Board Decision */}
            <article className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="mb-5">
                <div className="w-14 h-14 rounded-xl bg-[#5eead4]/10 flex items-center justify-center">
                  <ClipboardList className="w-7 h-7 text-[#5eead4]" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-[-0.01em]">
                Board Decision System
              </h3>
              <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                Professional governance made simple. Live action trackers, automated minutes, and decision logs.
              </p>
            </article>

            {/* Feature 3: Simple Reporting */}
            <article className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="mb-5">
                <div className="w-14 h-14 rounded-xl bg-[#5eead4]/10 flex items-center justify-center">
                  <LineChart className="w-7 h-7 text-[#5eead4]" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-[-0.01em]">
                Simple Reporting System
              </h3>
              <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                Report to funders in minutes, not days. A 10-number dashboard and a 2-page update template.
              </p>
            </article>

            {/* Feature 4: Find-It-Fast Files */}
            <article className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="mb-5">
                <div className="w-14 h-14 rounded-xl bg-[#5eead4]/10 flex items-center justify-center">
                  <FolderSearch className="w-7 h-7 text-[#5eead4]" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-[-0.01em]">
                Find-It-Fast File System
              </h3>
              <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                Your organization's 'Source of Truth.' Optimized folder maps, naming rules, and access controls.
              </p>
            </article>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-xl px-12 py-8 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8b5cf6]/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-sm md:text-base text-white/40 mt-6">
              <span className="text-white font-semibold">$9,450 CAD</span> • 15 spots per cohort • 4 hours/week
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section 
        id="how-it-works" 
        className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-[#0a0f1a]"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-24">
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.25em] text-[#5eead4] mb-8">
              How it works
            </p>
            <h2 
              id="how-it-works-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.04em] leading-[1.05] mb-8"
            >
              4 hours a week.
              <br />
              <span className="text-white/70">6 weeks total.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              One Ops Lead. We build the infrastructure with you.
            </p>
          </header>

          {/* 3-Step Flow */}
          <ol className="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-16 md:mb-20" aria-label="Program steps">
            {/* Step 1 */}
            <li className="text-center">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#5eead4]/40 text-[#5eead4] text-xl md:text-2xl font-bold mb-6"
                aria-hidden="true"
              >
                01
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-[-0.02em]">
                Build Your Source of Truth
              </h3>
              <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                Stop losing documents. We set up your digital folder map, naming rules, and access controls in Week 1.
              </p>
            </li>

            {/* Step 2 */}
            <li className="text-center">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#5eead4]/40 text-[#5eead4] text-xl md:text-2xl font-bold mb-6"
                aria-hidden="true"
              >
                02
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-[-0.02em]">
                Install the 4 Systems
              </h3>
              <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                Direct implementation. We build your spending proof, board decision, and reporting workflows together in our weekly labs.
              </p>
            </li>

            {/* Step 3 */}
            <li className="text-center">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#5eead4]/40 text-[#5eead4] text-xl md:text-2xl font-bold mb-6"
                aria-hidden="true"
              >
                03
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-[-0.02em]">
                The Stress Test
              </h3>
              <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                Prove it works. We live-test your ability to find any document or proof bundle in under 3 minutes before you graduate.
              </p>
            </li>
          </ol>

          {/* Schedule Row */}
          <div className="border-t border-white/10 pt-10 mb-14 md:mb-16">
            <div className="flex flex-col items-center text-center gap-3">
              <span className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-white/50">
                Weekly schedule
              </span>
              <p className="text-base md:text-lg text-white/70 font-light max-w-xl">
                1 Group Strategy Session (90 min) + 1 Implementation Lab (90 min) + 1 hour of prep/sorting
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-xl px-12 py-8 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8b5cf6]/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-sm md:text-base text-white/40 mt-6">
              <span className="text-white font-semibold">$9,450 CAD</span> per org • 15 spots per cohort
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Early Win */}
      <section 
        className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-[#0a0f1a]"
        aria-labelledby="early-win-heading"
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-20">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#5eead4] mb-6">
              Early win
            </p>
            <h2 
              id="early-win-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6"
            >
              Feel the relief in the first 14 days.
            </h2>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
              We don't wait 6 weeks to show results. We engineer early wins so your team can breathe.
            </p>
          </header>

          {/* Week 1 and Week 2 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 mb-14">
            {/* Week 1 */}
            <article>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#5eead4]/10 text-[#5eead4] mb-6">
                By the end of Week 1
              </span>
              <div className="mb-5">
                <FolderOpen className="w-10 h-10 text-white/80" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-5 tracking-[-0.01em]">
                Your File System is Done.
              </h3>
              <ul className="space-y-3" aria-label="Week 1 deliverables">
                <li className="flex items-center gap-3 text-base md:text-lg text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5eead4]/50 flex-shrink-0" aria-hidden="true" />
                  A 'Source of Truth' folder map installed.
                </li>
                <li className="flex items-center gap-3 text-base md:text-lg text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5eead4]/50 flex-shrink-0" aria-hidden="true" />
                  Key docs (Charity status, Bylaws) found in &lt; 2 mins.
                </li>
              </ul>
            </article>

            {/* Week 2 */}
            <article>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#5eead4]/10 text-[#5eead4] mb-6">
                By the end of Week 2
              </span>
              <div className="mb-5">
                <ShieldCheck className="w-10 h-10 text-white/80" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-5 tracking-[-0.01em]">
                10 Audit-Ready Bundles.
              </h3>
              <ul className="space-y-3" aria-label="Week 2 deliverables">
                <li className="flex items-center gap-3 text-base md:text-lg text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5eead4]/50 flex-shrink-0" aria-hidden="true" />
                  Your first 10 expenses fully documented.
                </li>
                <li className="flex items-center gap-3 text-base md:text-lg text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5eead4]/50 flex-shrink-0" aria-hidden="true" />
                  Approval + Invoice + Payment proof linked perfectly.
                </li>
              </ul>
            </article>
          </div>

          {/* Emotional Closer */}
          <p className="text-center text-base md:text-lg text-white/40 italic mb-12">
            Most Executive Directors feel the weight lift right here.
          </p>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#7c3aed] hover:opacity-90 text-white rounded-xl px-10 py-7 text-base font-semibold shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#a855f7]/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-sm md:text-base text-white/40 mt-6">
              <span className="text-white font-semibold">$9,450 CAD</span> • 15 spots per cohort
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Stress Test */}
      <section 
        className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-[#0a0f1a]"
        aria-labelledby="stress-test-heading"
      >
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-14 md:mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#5eead4] mb-6">
              Stress test
            </p>
            <h2 
              id="stress-test-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.1]"
            >
              We check that it works in real life.
            </h2>
          </header>

          {/* Card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
              Week 6 stress test
            </h3>

            <p className="text-white/50 text-base mb-6">
              You show:
            </p>

            <ul className="space-y-3 mb-8" aria-label="Stress test requirements">
              <li className="flex items-center gap-3 text-white/70 text-base">
                <Check className="w-4 h-4 text-[#5eead4]/70 flex-shrink-0" aria-hidden="true" />
                Proof for a real purchase
              </li>
              <li className="flex items-center gap-3 text-white/70 text-base">
                <Check className="w-4 h-4 text-[#5eead4]/70 flex-shrink-0" aria-hidden="true" />
                A board decision record
              </li>
              <li className="flex items-center gap-3 text-white/70 text-base">
                <Check className="w-4 h-4 text-[#5eead4]/70 flex-shrink-0" aria-hidden="true" />
                Your latest report
              </li>
              <li className="flex items-center gap-3 text-white/70 text-base">
                <Check className="w-4 h-4 text-[#5eead4]/70 flex-shrink-0" aria-hidden="true" />
                A key document in under 3 minutes
              </li>
            </ul>

            <p className="text-white/40 text-sm border-t border-white/10 pt-6">
              If you can't show it fast, we help fix it.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#0a0f1a] rounded-xl px-10 py-7 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 7: Guarantee */}
      <section 
        className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-[#0a0f1a]"
        aria-labelledby="guarantee-heading"
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-20">
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.25em] text-[#5eead4] mb-6">
              Guarantee
            </p>
            <h2 
              id="guarantee-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1]"
            >
              We take the risk <span className="text-[#5eead4]">seriously.</span>
            </h2>
          </header>

          {/* Main Guarantee Statement */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 mb-12 max-w-2xl mx-auto">
            <div className="flex items-start gap-5 mb-10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#5eead4]/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-[#5eead4]" aria-hidden="true" />
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-snug pt-2">
                If we do not set up the 4 systems, you get a full refund.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-10 mb-10">
              {/* To Qualify */}
              <div>
                <h4 className="text-sm font-semibold text-white/40 uppercase tracking-[0.2em] mb-6">
                  To qualify, you must:
                </h4>
                <ul className="space-y-4" aria-label="Qualification requirements">
                  <li className="flex items-center gap-3 text-white/70 text-lg">
                    <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" aria-hidden="true" />
                    Attend 5 of the 6 weeks
                  </li>
                  <li className="flex items-center gap-3 text-white/70 text-lg">
                    <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" aria-hidden="true" />
                    Submit the weekly items
                  </li>
                  <li className="flex items-center gap-3 text-white/70 text-lg">
                    <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" aria-hidden="true" />
                    Share the needed documents
                  </li>
                </ul>
              </div>

              {/* The 4 Systems */}
              <div>
                <h4 className="text-sm font-semibold text-white/40 uppercase tracking-[0.2em] mb-6">
                  The 4 systems are:
                </h4>
                <ul className="space-y-4" aria-label="The 4 systems">
                  <li className="flex items-center gap-3 text-white/50 text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" aria-hidden="true" />
                    Spending proof
                  </li>
                  <li className="flex items-center gap-3 text-white/50 text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" aria-hidden="true" />
                    Board decisions
                  </li>
                  <li className="flex items-center gap-3 text-white/50 text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" aria-hidden="true" />
                    Simple reporting
                  </li>
                  <li className="flex items-center gap-3 text-white/50 text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" aria-hidden="true" />
                    Find-it-fast files
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-white/40 text-base text-center border-t border-white/10 pt-8">
              Clear and fair. No long fine print.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#5eead4] hover:bg-[#5eead4]/90 text-[#0a0f1a] rounded-xl px-12 py-8 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#5eead4]/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-sm text-white/30 mt-8">
              Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Price and Seats */}
      <section 
        id="price" 
        className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-[#0a0f1a]"
        aria-labelledby="price-heading"
      >
        <div className="max-w-xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-20">
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.25em] text-[#5eead4] mb-6">
              Price and seats
            </p>
            <h2 
              id="price-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1]"
            >
              Simple and <span className="text-[#5eead4]">clear.</span>
            </h2>
          </header>

          {/* Main Pricing Card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 mb-10">
            {/* Price */}
            <div className="text-center mb-10">
              <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-3">
                $12,000
              </p>
              <p className="text-white/50 text-lg md:text-xl font-light">
                CAD per organization
              </p>
            </div>

            {/* Seats Badge */}
            <div className="flex justify-center mb-12">
              <span className="inline-flex items-center px-6 py-3 rounded-full text-base font-semibold bg-[#5eead4]/10 text-[#5eead4] border border-[#5eead4]/20">
                15 seats per cohort
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 my-10" />

            {/* What's Included */}
            <div className="mb-10">
              <h4 className="text-sm font-semibold text-white/40 uppercase tracking-[0.2em] mb-6">
                What's included
              </h4>
              <ul className="space-y-4" aria-label="What's included">
                <li className="flex items-center gap-4 text-white text-lg">
                  <Check className="w-5 h-5 text-[#5eead4] flex-shrink-0" aria-hidden="true" />
                  4 systems set up with you
                </li>
                <li className="flex items-center gap-4 text-white text-lg">
                  <Check className="w-5 h-5 text-[#5eead4] flex-shrink-0" aria-hidden="true" />
                  Weekly labs and office hours
                </li>
                <li className="flex items-center gap-4 text-white text-lg">
                  <Check className="w-5 h-5 text-[#5eead4] flex-shrink-0" aria-hidden="true" />
                  Week 6 stress test
                </li>
                <li className="flex items-center gap-4 text-white text-lg">
                  <Check className="w-5 h-5 text-[#5eead4] flex-shrink-0" aria-hidden="true" />
                  90-day plan
                </li>
              </ul>
            </div>

            {/* Payment Options */}
            <div className="mb-10">
              <h4 className="text-sm font-semibold text-white/40 uppercase tracking-[0.2em] mb-6">
                Payment options
              </h4>
              <ul className="space-y-3" aria-label="Payment options">
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" aria-hidden="true" />
                  50% now / 50% in week 3
                </li>
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" aria-hidden="true" />
                  Or 3 payments (week 0 / week 2 / week 4)
                </li>
              </ul>
            </div>

            {/* Next Cohort Info */}
            <p className="text-sm text-white/30 text-center mb-10">
              Next cohort start date shown after you apply.
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="w-full bg-[#5eead4] hover:bg-[#5eead4]/90 text-[#0a0f1a] rounded-xl px-8 py-7 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#5eead4]/50"
                asChild
              >
                <a href="#apply">
                  Apply for a seat
                  <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
              <a 
                href="#faq" 
                className="text-white/50 hover:text-white text-base font-medium transition-colors text-center"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Micro note */}
          <p className="text-sm text-white/30 text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section 
        id="faq" 
        className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-[#0a0f1a]"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-20">
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.25em] text-[#5eead4] mb-6">
              FAQ
            </p>
            <h2 
              id="faq-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1]"
            >
              Quick <span className="text-[#5eead4]">answers.</span>
            </h2>
          </header>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mb-14">
            <AccordionItem value="item-1" className="bg-white/[0.03] rounded-xl border border-white/10 mb-4 px-6 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-lg font-medium py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/50">
                Do we need special software?
              </AccordionTrigger>
              <AccordionContent className="text-white/50 text-base pb-6 leading-relaxed">
                No. We use what you already have (Google Drive or Microsoft, plus simple sheets).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/[0.03] rounded-xl border border-white/10 mb-4 px-6 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-lg font-medium py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/50">
                What if our files are messy?
              </AccordionTrigger>
              <AccordionContent className="text-white/50 text-base pb-6 leading-relaxed">
                That's normal. Week 1 sets up the structure, and you clean up as you go.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/[0.03] rounded-xl border border-white/10 mb-4 px-6 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-lg font-medium py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/50">
                We don't have a finance person. Can we still do this?
              </AccordionTrigger>
              <AccordionContent className="text-white/50 text-base pb-6 leading-relaxed">
                Yes. The proof process is simple and built for small teams.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/[0.03] rounded-xl border border-white/10 mb-4 px-6 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-lg font-medium py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/50">
                How do you handle privacy?
              </AccordionTrigger>
              <AccordionContent className="text-white/50 text-base pb-6 leading-relaxed">
                We use limited access and clear rules. You control what we see.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/[0.03] rounded-xl border border-white/10 px-6 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-lg font-medium py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/50">
                We have 16–50 staff. Can we still work with Nimara?
              </AccordionTrigger>
              <AccordionContent className="text-white/50 text-base pb-6 leading-relaxed">
                Yes. This cohort is only for 1–15 staff. For 16–50 staff, book a call instead.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#0a0f1a] rounded-xl px-10 py-7 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-xl px-10 py-7 text-lg font-semibold border-white/20 text-white hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              asChild
            >
              <a href="/book">
                Book a call
              </a>
            </Button>
          </div>

          {/* Micro note */}
          <p className="text-sm text-white/30 text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Section 10: Final CTA Strip */}
      <section 
        id="apply" 
        className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-[#5eead4]"
        aria-labelledby="apply-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 
            id="apply-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0f1a] tracking-[-0.03em] mb-6"
          >
            Ready to get funder-ready?
          </h2>
          <p className="text-lg md:text-xl text-[#0a0f1a]/70 font-light mb-12 max-w-xl mx-auto">
            Apply now. We'll review your application and send next steps within 2 business days.
          </p>

          {/* Main CTA */}
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#0a0f1a] hover:bg-[#0a0f1a]/90 text-white rounded-xl px-14 py-8 text-lg md:text-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0a0f1a]/50 mb-6"
            asChild
          >
            <a href="/apply">
              Apply for a seat
              <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
            </a>
          </Button>

          {/* Time note */}
          <p className="text-[#0a0f1a]/50 text-base mb-12">
            Takes about 2 minutes.
          </p>

          {/* Trust reinforcement */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
            <span className="inline-flex items-center gap-2 text-[#0a0f1a]/70 text-base font-medium">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              Full refund guarantee
            </span>
            <span className="inline-flex items-center gap-2 text-[#0a0f1a]/70 text-base font-medium">
              <Check className="w-5 h-5" aria-hidden="true" />
              15 seats only
            </span>
            <span className="inline-flex items-center gap-2 text-[#0a0f1a]/70 text-base font-medium">
              <Clock className="w-5 h-5" aria-hidden="true" />
              6 weeks
            </span>
          </div>

          {/* Staff size clarity */}
          <p className="text-sm text-[#0a0f1a]/40">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-10 lg:px-16 py-12 bg-[#0a0f1a] border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#5eead4] rounded-lg flex items-center justify-center">
              <span className="text-[#0a0f1a] font-bold text-base">N</span>
            </div>
            <span className="text-base text-white/60">© 2025 Nimara</span>
          </div>
          <nav className="flex items-center gap-10 text-base text-white/40" aria-label="Footer navigation">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:hello@nimara.ca" className="hover:text-white transition-colors">hello@nimara.ca</a>
          </nav>
        </div>
      </footer>

      {/* 
        TRACKING PLACEHOLDERS:
        
        Google Analytics 4 (GA4):
        - Page view: automatically tracked
        - Scroll depth: track 25%, 50%, 75%, 100%
        - CTA clicks: track 'apply_click' event with button location
        - Form submission: track 'apply_submit' event
        
        Google Ads Conversion:
        - Primary conversion: form submission or /thank-you page load
        - Add conversion snippet to /thank-you page:
          gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/XXXXXXX'});
        
        Thank-you page should display:
        "We received your application. We'll review it and send next steps within 2 business days."
      */}
    </div>
  );
};

export default SmartTeamCohortHero;
