import { FileCheck, Users, BarChart3, FolderSearch, ArrowRight, Check, X, Receipt, Gavel, LineChart, FolderOpen, Plus, Folder, ClipboardList, ShieldCheck, Calendar, Clock, UserCheck, BadgeCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeInSection from "@/components/FadeInSection";

const SmartTeamCohortHero = () => {
  const bullets = [
    "Prove spending in minutes",
    "Run clean board meetings",
    "Send reports fast when funders ask",
  ];

  return (
    <div className="min-h-screen bg-nim-cloud">
      {/* Minimal Header */}
      <header className="w-full px-5 md:px-8 lg:px-12 py-4 md:py-5 flex items-center justify-between bg-nim-navy">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-nim-mint rounded-md flex items-center justify-center">
            <span className="text-nim-navy font-bold text-sm">N</span>
          </div>
          <span className="font-semibold text-white tracking-tight">Nimara</span>
        </div>
        <Button 
          className="bg-nim-purple hover:bg-nim-purple/90 text-white rounded-full px-5 py-2 text-sm font-semibold transition-all"
          asChild
        >
          <a href="#apply">Apply</a>
        </Button>
      </header>

      {/* Hero Section */}
      <FadeInSection>
        <section 
          className="w-full px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-36 bg-nim-cloud"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-nim-navy leading-[1.05] tracking-[-0.04em] mb-8"
          >
            Get <span className="text-nim-purple">funder-ready</span>
            <br className="hidden sm:block" />
            — in <span className="text-nim-purple">6 weeks.</span>
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-nim-slate font-light mb-12">
            For Canadian nonprofits with 1–15 staff.
          </p>

          {/* 3 Short Bullets */}
          <ul className="flex flex-col items-center gap-4 mb-12" aria-label="Key benefits">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-4">
                <Check className="w-5 h-5 text-nim-purple flex-shrink-0" aria-hidden="true" />
                <span className="text-nim-navy text-lg md:text-xl font-light">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Primary CTA */}
          <div className="mb-6">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-nim-purple hover:bg-nim-purple/90 text-white rounded-xl px-14 py-8 text-lg md:text-xl font-semibold shadow-xl shadow-nim-purple/30 transition-all hover:shadow-2xl hover:shadow-nim-purple/40 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-purple/50"
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
            className="inline-flex items-center gap-2 text-nim-slate hover:text-nim-navy text-base font-medium transition-colors mb-12"
          >
            See what you get
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>

          {/* Price Line */}
          <p className="text-base md:text-lg text-nim-slate">
            $12,000 CAD per org • 15 seats • 2–3 hours/week
          </p>
        </div>
        </section>
      </FadeInSection>

      {/* Section 2: Is This For You? */}
      <FadeInSection delay={0.1}>
        <section 
          className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-white"
          aria-labelledby="fit-heading"
        >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-20">
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.25em] text-nim-purple mb-6">
              Is this for you?
            </p>
            <h2 
              id="fit-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-nim-navy tracking-[-0.03em] leading-[1.1] mb-6"
            >
              Built for teams that are
              <br />
              <span className="text-nim-purple">ready to get organized.</span>
            </h2>
            <p className="text-lg md:text-xl text-nim-slate font-light max-w-2xl mx-auto">
              Not free advice. Real systems, built with you.
            </p>
          </header>

          {/* Two-Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 mb-16 md:mb-20">
            {/* Left Column - Fit */}
            <div>
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-nim-slate mb-8">
                This is a fit if
              </h3>
              <ul className="space-y-5" aria-label="Good fit criteria">
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-nim-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-nim-purple" aria-hidden="true" />
                  </div>
                  <span className="text-nim-navy text-lg md:text-xl font-light leading-relaxed">
                    You have funding (or budget set aside)
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-nim-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-nim-purple" aria-hidden="true" />
                  </div>
                  <span className="text-nim-navy text-lg md:text-xl font-light leading-relaxed">
                    You can assign one Ops Lead
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-nim-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-nim-purple" aria-hidden="true" />
                  </div>
                  <span className="text-nim-navy text-lg md:text-xl font-light leading-relaxed">
                    You can commit 2–3 hours/week for 6 weeks
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column - Not a Fit */}
            <div>
              <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-nim-slate mb-8">
                Not a fit if
              </h3>
              <ul className="space-y-5" aria-label="Not a good fit criteria">
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-nim-mist flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-nim-slate" aria-hidden="true" />
                  </div>
                  <span className="text-nim-slate text-lg md:text-xl font-light leading-relaxed">
                    You want free advice
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-nim-mist flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-nim-slate" aria-hidden="true" />
                  </div>
                  <span className="text-nim-slate text-lg md:text-xl font-light leading-relaxed">
                    You can't share documents
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-nim-mist flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-nim-slate" aria-hidden="true" />
                  </div>
                  <span className="text-nim-slate text-lg md:text-xl font-light leading-relaxed">
                    You can't make weekly time
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Single CTA - Centered */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-nim-purple hover:bg-nim-purple/90 text-white rounded-xl px-12 py-8 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-purple/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-sm text-nim-slate mt-8">
              Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
            </p>
          </div>
        </div>
        </section>
      </FadeInSection>

      {/* Section 3: What You Get */}
      <FadeInSection delay={0.1}>
        <section 
          id="what-you-get" 
          className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-nim-cloud"
          aria-labelledby="what-you-get-heading"
        >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-24">
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.25em] text-nim-slate mb-6">
              What you get
            </p>
            <h2 
              id="what-you-get-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-nim-navy tracking-[-0.03em] leading-[1.1] mb-6"
            >
              4 systems built with you
              <br />
              <span className="text-nim-purple">— in 6 weeks.</span>
            </h2>
            <p className="text-lg md:text-xl text-nim-slate font-light max-w-2xl mx-auto mb-10">
              We set up these 4 systems with you. Plus a 90-day plan to keep it running.
            </p>
            <Button
              size="lg"
              className="bg-nim-navy hover:bg-nim-navy/90 text-white rounded-xl px-10 py-7 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-navy/50"
              asChild
            >
              <a href="#apply">Get started</a>
            </Button>
          </header>

          {/* 4 Features - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16 md:gap-y-20">
            {/* Feature 1: Spending Proof */}
            <article>
              <div className="mb-6">
                <Receipt className="w-12 h-12 md:w-14 md:h-14 text-nim-navy" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-nim-navy mb-4 tracking-[-0.01em]">
                Spending Proof System
              </h3>
              <p className="text-lg md:text-xl text-nim-slate font-light leading-relaxed">
                Pull proof fast when funders ask. Approval + invoice, payment proof + delivery — all in one place.
              </p>
            </article>

            {/* Feature 2: Board Decision */}
            <article>
              <div className="mb-6">
                <Gavel className="w-12 h-12 md:w-14 md:h-14 text-nim-navy" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-nim-navy mb-4 tracking-[-0.01em]">
                Board Decision System
              </h3>
              <p className="text-lg md:text-xl text-nim-slate font-light leading-relaxed">
                Meetings that lead to action. Agenda + minutes, decisions + action tracker ready to go.
              </p>
            </article>

            {/* Feature 3: Simple Reporting */}
            <article>
              <div className="mb-6">
                <LineChart className="w-12 h-12 md:w-14 md:h-14 text-nim-navy" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-nim-navy mb-4 tracking-[-0.01em]">
                Simple Reporting System
              </h3>
              <p className="text-lg md:text-xl text-nim-slate font-light leading-relaxed">
                Updates without stress. Small dashboard (5–10 numbers) and a 2-page update template.
              </p>
            </article>

            {/* Feature 4: Find-It-Fast Files */}
            <article>
              <div className="mb-6">
                <FolderOpen className="w-12 h-12 md:w-14 md:h-14 text-nim-navy" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-nim-navy mb-4 tracking-[-0.01em]">
                Find-It-Fast File System
              </h3>
              <p className="text-lg md:text-xl text-nim-slate font-light leading-relaxed">
                Find key documents in minutes. Folder map + naming rules and basic access controls.
              </p>
            </article>
          </div>
        </div>
        </section>
      </FadeInSection>

      {/* Section 4: How It Works */}
      <FadeInSection delay={0.1}>
        <section 
          id="how-it-works" 
          className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-white"
          aria-labelledby="how-it-works-heading"
        >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-20 md:mb-28">
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.25em] text-nim-purple mb-8">
              How it works
            </p>
            <h2 
              id="how-it-works-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-nim-navy tracking-[-0.04em] leading-[1.05] mb-8"
            >
              2–3 hours/week.
              <br />
              <span className="text-nim-slate">6 weeks total.</span>
            </h2>
            <p className="text-xl md:text-2xl text-nim-slate font-light max-w-xl mx-auto leading-relaxed">
              One Ops Lead. We build it with you.
            </p>
          </header>

          {/* 3-Step Flow */}
          <ol className="grid md:grid-cols-3 gap-12 md:gap-16 lg:gap-20 mb-20 md:mb-28" aria-label="Program steps">
            {/* Step 1 */}
            <li className="text-center">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-nim-purple/40 text-nim-purple text-xl md:text-2xl font-bold mb-8"
                aria-hidden="true"
              >
                01
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-nim-navy mb-4 tracking-[-0.02em]">
                Set up your files
              </h3>
              <p className="text-lg md:text-xl text-nim-slate font-light">
                Stop losing documents.
              </p>
            </li>

            {/* Step 2 */}
            <li className="text-center">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-nim-purple/40 text-nim-purple text-xl md:text-2xl font-bold mb-8"
                aria-hidden="true"
              >
                02
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-nim-navy mb-4 tracking-[-0.02em]">
                Set up 4 systems
              </h3>
              <p className="text-lg md:text-xl text-nim-slate font-light">
                Proof, board, reporting, and files.
              </p>
            </li>

            {/* Step 3 */}
            <li className="text-center">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-nim-purple/40 text-nim-purple text-xl md:text-2xl font-bold mb-8"
                aria-hidden="true"
              >
                03
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-nim-navy mb-4 tracking-[-0.02em]">
                Prove it works
              </h3>
              <p className="text-lg md:text-xl text-nim-slate font-light">
                Stress test + 90-day plan.
              </p>
            </li>
          </ol>

          {/* Schedule Row */}
          <div className="border-t border-nim-mist pt-12 mb-16 md:mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
              <span className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-nim-slate">
                Weekly schedule
              </span>
              <span className="hidden sm:block text-nim-slate/40 text-2xl" aria-hidden="true">—</span>
              <span className="text-lg md:text-xl text-nim-slate font-light">
                1 group (90 min) • 1 lab (90 min) • office hours (optional)
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-nim-purple hover:bg-nim-purple/90 text-white rounded-xl px-12 py-8 text-lg md:text-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-purple/50"
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
      </FadeInSection>

      {/* Section 5: Early Win */}
      <FadeInSection delay={0.1}>
        <section 
          className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-nim-cloud"
          aria-labelledby="early-win-heading"
        >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-20">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-nim-purple mb-6">
              Early win
            </p>
            <h2 
              id="early-win-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-nim-navy tracking-[-0.03em] leading-[1.1]"
            >
              You will feel progress fast.
            </h2>
          </header>

          {/* Week 1 and Week 2 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 mb-14">
            {/* Week 1 */}
            <article>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-nim-purple/10 text-nim-purple mb-6">
                By the end of Week 1
              </span>
              <div className="mb-5">
                <Folder className="w-10 h-10 text-nim-navy" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-nim-navy mb-5 tracking-[-0.01em]">
                Your file system is set up.
              </h3>
              <ul className="space-y-3" aria-label="Week 1 deliverables">
                <li className="flex items-center gap-3 text-base md:text-lg text-nim-slate">
                  <span className="w-1.5 h-1.5 rounded-full bg-nim-purple/50 flex-shrink-0" aria-hidden="true" />
                  A clear folder map
                </li>
                <li className="flex items-center gap-3 text-base md:text-lg text-nim-slate">
                  <span className="w-1.5 h-1.5 rounded-full bg-nim-purple/50 flex-shrink-0" aria-hidden="true" />
                  Key documents easy to find
                </li>
              </ul>
            </article>

            {/* Week 2 */}
            <article>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-nim-purple/10 text-nim-purple mb-6">
                By the end of Week 2
              </span>
              <div className="mb-5">
                <Receipt className="w-10 h-10 text-nim-navy" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-nim-navy mb-5 tracking-[-0.01em]">
                You finish 10 proof bundles.
              </h3>
              <ul className="space-y-3" aria-label="Week 2 deliverables">
                <li className="flex items-center gap-3 text-base md:text-lg text-nim-slate">
                  <span className="w-1.5 h-1.5 rounded-full bg-nim-purple/50 flex-shrink-0" aria-hidden="true" />
                  Approval, invoice, and payment proof
                </li>
                <li className="flex items-center gap-3 text-base md:text-lg text-nim-slate">
                  <span className="w-1.5 h-1.5 rounded-full bg-nim-purple/50 flex-shrink-0" aria-hidden="true" />
                  Saved in the right place
                </li>
              </ul>
            </article>
          </div>

          {/* Reassurance Line */}
          <p className="text-center text-base md:text-lg text-nim-slate mb-12">
            Most teams feel relief here.
          </p>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-nim-navy hover:bg-nim-navy/90 text-white rounded-xl px-10 py-7 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-navy/50"
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
      </FadeInSection>

      {/* Section 6: Stress Test */}
      <FadeInSection delay={0.1}>
        <section 
          className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-white"
          aria-labelledby="stress-test-heading"
        >
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-14 md:mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-nim-purple mb-6">
              Stress test
            </p>
            <h2 
              id="stress-test-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-nim-navy tracking-[-0.03em] leading-[1.1]"
            >
              We check that it works in real life.
            </h2>
          </header>

          {/* Card */}
          <div className="bg-nim-cloud border border-nim-mist rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-xl md:text-2xl font-semibold text-nim-navy mb-6">
              Week 6 stress test
            </h3>

            <p className="text-nim-slate text-base mb-6">
              You show:
            </p>

            <ul className="space-y-3 mb-8" aria-label="Stress test requirements">
              <li className="flex items-center gap-3 text-nim-navy text-base">
                <Check className="w-4 h-4 text-nim-purple flex-shrink-0" aria-hidden="true" />
                Proof for a real purchase
              </li>
              <li className="flex items-center gap-3 text-nim-navy text-base">
                <Check className="w-4 h-4 text-nim-purple flex-shrink-0" aria-hidden="true" />
                A board decision record
              </li>
              <li className="flex items-center gap-3 text-nim-navy text-base">
                <Check className="w-4 h-4 text-nim-purple flex-shrink-0" aria-hidden="true" />
                Your latest report
              </li>
              <li className="flex items-center gap-3 text-nim-navy text-base">
                <Check className="w-4 h-4 text-nim-purple flex-shrink-0" aria-hidden="true" />
                A key document in under 3 minutes
              </li>
            </ul>

            <p className="text-nim-slate text-sm border-t border-nim-mist pt-6">
              If you can't show it fast, we help fix it.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-nim-navy hover:bg-nim-navy/90 text-white rounded-xl px-10 py-7 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-navy/50"
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
      </FadeInSection>

      {/* Section 7: Guarantee */}
      <FadeInSection delay={0.1}>
        <section 
          className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-nim-cloud"
          aria-labelledby="guarantee-heading"
        >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-20">
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.25em] text-nim-purple mb-6">
              Guarantee
            </p>
            <h2 
              id="guarantee-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-nim-navy tracking-[-0.03em] leading-[1.1]"
            >
              We take the risk <span className="text-nim-purple">seriously.</span>
            </h2>
          </header>

          {/* Main Guarantee Statement */}
          <div className="bg-white border border-nim-mist rounded-2xl p-8 md:p-12 mb-12 max-w-2xl mx-auto shadow-soft">
            <div className="flex items-start gap-5 mb-10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-nim-purple/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-nim-purple" aria-hidden="true" />
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-nim-navy leading-snug pt-2">
                If we do not set up the 4 systems, you get a full refund.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-10 mb-10">
              {/* To Qualify */}
              <div>
                <h4 className="text-sm font-semibold text-nim-slate uppercase tracking-[0.2em] mb-6">
                  To qualify, you must:
                </h4>
                <ul className="space-y-4" aria-label="Qualification requirements">
                  <li className="flex items-center gap-3 text-nim-navy text-lg">
                    <Check className="w-4 h-4 text-nim-purple flex-shrink-0" aria-hidden="true" />
                    Attend 5 of the 6 weeks
                  </li>
                  <li className="flex items-center gap-3 text-nim-navy text-lg">
                    <Check className="w-4 h-4 text-nim-purple flex-shrink-0" aria-hidden="true" />
                    Submit the weekly items
                  </li>
                  <li className="flex items-center gap-3 text-nim-navy text-lg">
                    <Check className="w-4 h-4 text-nim-purple flex-shrink-0" aria-hidden="true" />
                    Share the needed documents
                  </li>
                </ul>
              </div>

              {/* The 4 Systems */}
              <div>
                <h4 className="text-sm font-semibold text-nim-slate uppercase tracking-[0.2em] mb-6">
                  The 4 systems are:
                </h4>
                <ul className="space-y-4" aria-label="The 4 systems">
                  <li className="flex items-center gap-3 text-nim-slate text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-nim-slate/50 flex-shrink-0" aria-hidden="true" />
                    Spending proof
                  </li>
                  <li className="flex items-center gap-3 text-nim-slate text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-nim-slate/50 flex-shrink-0" aria-hidden="true" />
                    Board decisions
                  </li>
                  <li className="flex items-center gap-3 text-nim-slate text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-nim-slate/50 flex-shrink-0" aria-hidden="true" />
                    Simple reporting
                  </li>
                  <li className="flex items-center gap-3 text-nim-slate text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-nim-slate/50 flex-shrink-0" aria-hidden="true" />
                    Find-it-fast files
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-nim-slate text-base text-center border-t border-nim-mist pt-8">
              Clear and fair. No long fine print.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-nim-purple hover:bg-nim-purple/90 text-white rounded-xl px-12 py-8 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-purple/50"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-sm text-nim-slate mt-8">
              Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
            </p>
          </div>
        </div>
        </section>
      </FadeInSection>

      {/* Section 8: Price and Seats */}
      <FadeInSection delay={0.1}>
        <section 
          id="price" 
          className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-white"
          aria-labelledby="price-heading"
        >
        <div className="max-w-xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-20">
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.25em] text-nim-purple mb-6">
              Price and seats
            </p>
            <h2 
              id="price-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-nim-navy tracking-[-0.03em] leading-[1.1]"
            >
              Simple and <span className="text-nim-purple">clear.</span>
            </h2>
          </header>

          {/* Main Pricing Card */}
          <div className="bg-nim-cloud border border-nim-mist rounded-2xl p-8 md:p-12 mb-10">
            {/* Price */}
            <div className="text-center mb-10">
              <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-nim-navy tracking-tight mb-3">
                $12,000
              </p>
              <p className="text-nim-slate text-lg md:text-xl font-light">
                CAD per organization
              </p>
            </div>

            {/* Seats Badge */}
            <div className="flex justify-center mb-12">
              <span className="inline-flex items-center px-6 py-3 rounded-full text-base font-semibold bg-nim-purple/10 text-nim-purple border border-nim-purple/20">
                15 seats per cohort
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-nim-mist my-10" />

            {/* What's Included */}
            <div className="mb-10">
              <h4 className="text-sm font-semibold text-nim-slate uppercase tracking-[0.2em] mb-6">
                What's included
              </h4>
              <ul className="space-y-4" aria-label="What's included">
                <li className="flex items-center gap-4 text-nim-navy text-lg">
                  <Check className="w-5 h-5 text-nim-purple flex-shrink-0" aria-hidden="true" />
                  4 systems set up with you
                </li>
                <li className="flex items-center gap-4 text-nim-navy text-lg">
                  <Check className="w-5 h-5 text-nim-purple flex-shrink-0" aria-hidden="true" />
                  Weekly labs and office hours
                </li>
                <li className="flex items-center gap-4 text-nim-navy text-lg">
                  <Check className="w-5 h-5 text-nim-purple flex-shrink-0" aria-hidden="true" />
                  Week 6 stress test
                </li>
                <li className="flex items-center gap-4 text-nim-navy text-lg">
                  <Check className="w-5 h-5 text-nim-purple flex-shrink-0" aria-hidden="true" />
                  90-day plan
                </li>
              </ul>
            </div>

            {/* Payment Options */}
            <div className="mb-10">
              <h4 className="text-sm font-semibold text-nim-slate uppercase tracking-[0.2em] mb-6">
                Payment options
              </h4>
              <ul className="space-y-3" aria-label="Payment options">
                <li className="flex items-center gap-3 text-nim-slate text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-nim-slate/50 flex-shrink-0" aria-hidden="true" />
                  50% now / 50% in week 3
                </li>
                <li className="flex items-center gap-3 text-nim-slate text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-nim-slate/50 flex-shrink-0" aria-hidden="true" />
                  Or 3 payments (week 0 / week 2 / week 4)
                </li>
              </ul>
            </div>

            {/* Next Cohort Info */}
            <p className="text-sm text-nim-slate text-center mb-10">
              Next cohort start date shown after you apply.
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="w-full bg-nim-purple hover:bg-nim-purple/90 text-white rounded-xl px-8 py-7 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-purple/50"
                asChild
              >
                <a href="#apply">
                  Apply for a seat
                  <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
              <a 
                href="#faq" 
                className="text-nim-slate hover:text-nim-navy text-base font-medium transition-colors text-center"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Micro note */}
          <p className="text-sm text-nim-slate text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
        </section>
      </FadeInSection>

      {/* Section 9: FAQ */}
      <FadeInSection delay={0.1}>
        <section 
          id="faq" 
          className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-nim-cloud"
          aria-labelledby="faq-heading"
        >
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16 md:mb-20">
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.25em] text-nim-purple mb-6">
              FAQ
            </p>
            <h2 
              id="faq-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-nim-navy tracking-[-0.03em] leading-[1.1]"
            >
              Quick <span className="text-nim-purple">answers.</span>
            </h2>
          </header>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mb-14">
            <AccordionItem value="item-1" className="bg-white rounded-xl border border-nim-mist mb-4 px-6 data-[state=open]:bg-nim-cloud transition-all">
              <AccordionTrigger className="text-left text-nim-navy text-lg font-medium py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-nim-slate">
                Do we need special software?
              </AccordionTrigger>
              <AccordionContent className="text-nim-slate text-base pb-6 leading-relaxed">
                No. We use what you already have (Google Drive or Microsoft, plus simple sheets).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-xl border border-nim-mist mb-4 px-6 data-[state=open]:bg-nim-cloud transition-all">
              <AccordionTrigger className="text-left text-nim-navy text-lg font-medium py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-nim-slate">
                What if our files are messy?
              </AccordionTrigger>
              <AccordionContent className="text-nim-slate text-base pb-6 leading-relaxed">
                That's normal. Week 1 sets up the structure, and you clean up as you go.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-xl border border-nim-mist mb-4 px-6 data-[state=open]:bg-nim-cloud transition-all">
              <AccordionTrigger className="text-left text-nim-navy text-lg font-medium py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-nim-slate">
                We don't have a finance person. Can we still do this?
              </AccordionTrigger>
              <AccordionContent className="text-nim-slate text-base pb-6 leading-relaxed">
                Yes. The proof process is simple and built for small teams.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-xl border border-nim-mist mb-4 px-6 data-[state=open]:bg-nim-cloud transition-all">
              <AccordionTrigger className="text-left text-nim-navy text-lg font-medium py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-nim-slate">
                How do you handle privacy?
              </AccordionTrigger>
              <AccordionContent className="text-nim-slate text-base pb-6 leading-relaxed">
                We use limited access and clear rules. You control what we see.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-xl border border-nim-mist px-6 data-[state=open]:bg-nim-cloud transition-all">
              <AccordionTrigger className="text-left text-nim-navy text-lg font-medium py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-nim-slate">
                We have 16–50 staff. Can we still work with Nimara?
              </AccordionTrigger>
              <AccordionContent className="text-nim-slate text-base pb-6 leading-relaxed">
                Yes. This cohort is only for 1–15 staff. For 16–50 staff, book a call instead.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-nim-navy hover:bg-nim-navy/90 text-white rounded-xl px-10 py-7 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-navy/50"
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
              className="w-full sm:w-auto rounded-xl px-10 py-7 text-lg font-semibold border-nim-navy/20 text-nim-navy hover:bg-nim-navy/5 hover:text-nim-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-navy/20"
              asChild
            >
              <a href="/book">
                Book a call
              </a>
            </Button>
          </div>

          {/* Micro note */}
          <p className="text-sm text-nim-slate text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
        </section>
      </FadeInSection>

      {/* Section 10: Final CTA Strip */}
      <FadeInSection delay={0.1}>
        <section 
          id="apply" 
          className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-40 bg-nim-mint"
          aria-labelledby="apply-heading"
        >
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 
            id="apply-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-nim-navy tracking-[-0.03em] mb-6"
          >
            Ready to get funder-ready?
          </h2>
          <p className="text-lg md:text-xl text-nim-navy/70 font-light mb-12 max-w-xl mx-auto">
            Apply now. We'll review your application and send next steps within 2 business days.
          </p>

          {/* Main CTA */}
          <Button
            size="lg"
            className="w-full sm:w-auto bg-nim-navy hover:bg-nim-navy/90 text-white rounded-xl px-14 py-8 text-lg md:text-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-navy/50 mb-6"
            asChild
          >
            <a href="/apply">
              Apply for a seat
              <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
            </a>
          </Button>

          {/* Time note */}
          <p className="text-nim-navy/50 text-base mb-12">
            Takes about 2 minutes.
          </p>

          {/* Trust reinforcement */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
            <span className="inline-flex items-center gap-2 text-nim-navy/70 text-base font-medium">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              Full refund guarantee
            </span>
            <span className="inline-flex items-center gap-2 text-nim-navy/70 text-base font-medium">
              <Check className="w-5 h-5" aria-hidden="true" />
              15 seats only
            </span>
            <span className="inline-flex items-center gap-2 text-nim-navy/70 text-base font-medium">
              <Clock className="w-5 h-5" aria-hidden="true" />
              6 weeks
            </span>
          </div>

          {/* Staff size clarity */}
          <p className="text-sm text-nim-navy/40">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <footer className="w-full px-6 md:px-10 lg:px-16 py-12 bg-nim-navy border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-nim-mint rounded-lg flex items-center justify-center">
              <span className="text-nim-navy font-bold text-base">N</span>
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
