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
    "Prove spending in minutes",
    "Run clean board meetings",
    "Send reports fast when funders ask",
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

      {/* Hero Section - Minimal & Focused */}
      <section className="w-full px-5 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 bg-[#0a0f1a]">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-[-0.03em] mb-5">
            Get{" "}
            <span className="text-[#5eead4]">funder-ready</span>
            <br className="hidden sm:block" />
            {" "}— in{" "}
            <span className="text-[#5eead4]">6 weeks.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-white/90 mb-10">
            For Canadian nonprofits with 1–15 staff.
          </p>

          {/* 3 Short Bullets */}
          <div className="flex flex-col items-center gap-3 mb-10">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#5eead4] flex-shrink-0" />
                <span className="text-white text-base md:text-lg">{bullet}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="mb-5">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-full px-12 py-7 text-lg font-semibold shadow-xl shadow-[#8b5cf6]/30 transition-all hover:shadow-2xl hover:shadow-[#8b5cf6]/40 hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Secondary Link */}
          <a 
            href="#what-you-get" 
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors mb-10"
          >
            See what you get
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Price Line */}
          <p className="text-sm text-white/50">
            $12,000 CAD per org • 15 seats • 2–3 hours/week
          </p>
        </div>
      </section>

      {/* Section 2: Is This For You? */}
      <section className="w-full px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36 bg-[#0a0f1a]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#5eead4] mb-6 block">
              Is this for you?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6">
              Built for teams that are
              <br />
              <span className="text-[#5eead4]">ready to get organized.</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
              Not free advice. Real systems, built with you.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 mb-16 md:mb-20">
            {/* Left Column - Fit */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/40 mb-8">
                This is a fit if
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#5eead4]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#5eead4]" />
                  </div>
                  <span className="text-white text-base md:text-lg leading-relaxed">
                    You have funding (or budget set aside)
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#5eead4]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#5eead4]" />
                  </div>
                  <span className="text-white text-base md:text-lg leading-relaxed">
                    You can assign one Ops Lead
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#5eead4]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#5eead4]" />
                  </div>
                  <span className="text-white text-base md:text-lg leading-relaxed">
                    You can commit 2–3 hours/week for 6 weeks
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column - Not a Fit */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/40 mb-8">
                Not a fit if
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-white/40" />
                  </div>
                  <span className="text-white/50 text-base md:text-lg leading-relaxed">
                    You want free advice
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-white/40" />
                  </div>
                  <span className="text-white/50 text-base md:text-lg leading-relaxed">
                    You can't share documents
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-white/40" />
                  </div>
                  <span className="text-white/50 text-base md:text-lg leading-relaxed">
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
              className="w-full sm:w-auto bg-[#5eead4] hover:bg-[#5eead4]/90 text-[#0a0f1a] rounded-lg px-10 py-7 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <p className="text-xs text-white/30 mt-6">
              Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: What You Get */}
      <section id="what-you-get" className="w-full px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36 bg-[#0a0f1a]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-6 block">
              What you get
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6">
              4 systems built with you
              <br />
              <span className="text-[#5eead4]">— in 6 weeks.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10">
              We set up these 4 systems with you. Plus a 90-day plan to keep it running.
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-[#0a0f1a] rounded-lg px-8 py-6 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#apply">Get started</a>
            </Button>
          </div>

          {/* 4 Features - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-14 md:gap-y-16">
            {/* Feature 1: Spending Proof */}
            <div>
              <div className="mb-6">
                <Receipt className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Spending Proof System
              </h3>
              <p className="text-white/50 text-base leading-relaxed">
                Pull proof fast when funders ask. Approval + invoice, payment proof + delivery — all in one place.
              </p>
            </div>

            {/* Feature 2: Board Decision */}
            <div>
              <div className="mb-6">
                <Gavel className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Board Decision System
              </h3>
              <p className="text-white/50 text-base leading-relaxed">
                Meetings that lead to action. Agenda + minutes, decisions + action tracker ready to go.
              </p>
            </div>

            {/* Feature 3: Simple Reporting */}
            <div>
              <div className="mb-6">
                <LineChart className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Simple Reporting System
              </h3>
              <p className="text-white/50 text-base leading-relaxed">
                Updates without stress. Small dashboard (5–10 numbers) and a 2-page update template.
              </p>
            </div>

            {/* Feature 4: Find-It-Fast Files */}
            <div>
              <div className="mb-6">
                <FolderOpen className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Find-It-Fast File System
              </h3>
              <p className="text-white/50 text-base leading-relaxed">
                Find key documents in minutes. Folder map + naming rules and basic access controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section id="how-it-works" className="w-full px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36 bg-[#0a0f1a]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-6 block">
              How it works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6">
              Simple, made for
              <br />
              <span className="text-[#5eead4]">small teams.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
              2–3 hours/week for 6 weeks. One Ops Lead. We build it with you.
            </p>
          </div>

          {/* 3-Step Flow */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-28">
            {/* Step 1 */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/60 text-sm font-medium mb-6">
                01
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Set up your files
              </h3>
              <p className="text-white/50 text-base leading-relaxed">
                So you stop losing documents. Everything in one place with clear naming.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/60 text-sm font-medium mb-6">
                02
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Set up 4 systems
              </h3>
              <p className="text-white/50 text-base leading-relaxed">
                Proof, board, reporting, and files. Built with you in working labs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/60 text-sm font-medium mb-6">
                03
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Prove it works
              </h3>
              <p className="text-white/50 text-base leading-relaxed">
                Stress test everything. Get a 90-day plan to keep it running.
              </p>
            </div>
          </div>

          {/* Weekly Schedule + Time and Team */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 mb-16 md:mb-20">
            {/* Weekly Schedule */}
            <div>
              <div className="mb-6">
                <Calendar className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Weekly schedule
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                  1 group session (90 min)
                </li>
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                  1 working lab (90 min)
                </li>
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                  Office hours (optional)
                </li>
              </ul>
            </div>

            {/* Time and Team */}
            <div>
              <div className="mb-6">
                <UserCheck className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Time and team
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                  2–3 hours/week total
                </li>
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                  One Ops Lead needed
                </li>
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                  We build it with you in labs
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Row */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-[#0a0f1a] rounded-lg px-8 py-6 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <p className="text-xs text-white/30 mt-6">
              Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Early Win */}
      <section className="w-full px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36 bg-[#0a0f1a]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#5eead4] mb-6 block">
              Early win
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6">
              You will feel
              <br />
              <span className="text-[#5eead4]">progress fast.</span>
            </h2>
          </div>

          {/* Week 1 and Week 2 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 mb-16">
            {/* Week 1 */}
            <div>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#5eead4]/10 text-[#5eead4] mb-6">
                By the end of Week 1
              </span>
              <div className="mb-6">
                <Folder className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Your file system is set up.
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                  A clear folder map
                </li>
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                  Simple naming rules
                </li>
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                  Key documents easy to find
                </li>
              </ul>
            </div>

            {/* Week 2 */}
            <div>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#5eead4]/10 text-[#5eead4] mb-6">
                By the end of Week 2
              </span>
              <div className="mb-6">
                <Receipt className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                You will finish 10 proof bundles.
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                  Approval, invoice, and payment proof
                </li>
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                  What was delivered
                </li>
                <li className="flex items-center gap-3 text-white/50 text-base">
                  <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                  Saved in the right place
                </li>
              </ul>
            </div>
          </div>

          {/* Reassurance Line */}
          <p className="text-center text-white/40 text-base mb-12">
            This is when most teams feel the biggest relief.
          </p>

          {/* CTA Row */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#0a0f1a] rounded-lg px-8 py-6 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: Stress Test */}
      <section className="w-full px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36 bg-[#0a0f1a]">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#5eead4] mb-6 block">
              Stress test
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6">
              We check that it
              <br />
              <span className="text-[#5eead4]">works in real life.</span>
            </h2>
          </div>

          {/* Week 6 stress test content */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#5eead4]/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#5eead4]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Week 6 stress test
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5eead4]">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
            </div>

            <p className="text-white/50 text-base mb-8">
              You will be asked to show:
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4 text-white text-base">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white/60" />
                </div>
                Proof for a real purchase
              </li>
              <li className="flex items-center gap-4 text-white text-base">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white/60" />
                </div>
                A board decision record
              </li>
              <li className="flex items-center gap-4 text-white text-base">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white/60" />
                </div>
                Your latest report
              </li>
              <li className="flex items-center gap-4 text-white text-base">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white/60" />
                </div>
                A key document in under 3 minutes
              </li>
            </ul>

            <p className="text-white/40 text-sm border-t border-white/10 pt-6 mb-12">
              If you can't show it fast, we help fix it.
            </p>

            {/* CTA Row */}
            <div className="text-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#0a0f1a] rounded-lg px-8 py-6 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <a href="#apply">
                  Apply for a seat
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Guarantee */}
      <section className="w-full px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36 bg-[#0a0f1a]">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#5eead4] mb-6 block">
              Guarantee
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6">
              We take the
              <br />
              <span className="text-[#5eead4]">risk seriously.</span>
            </h2>
          </div>

          {/* Main Guarantee Statement */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 mb-12 max-w-2xl mx-auto">
            <div className="flex items-start gap-5 mb-8">
              <div className="w-14 h-14 rounded-full bg-[#5eead4]/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-7 h-7 text-[#5eead4]" />
              </div>
              <p className="text-xl md:text-2xl font-semibold text-white leading-snug pt-2">
                If we do not set up the 4 systems, you get a full refund.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* To Qualify */}
              <div>
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-5">
                  To qualify, you must:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white/70 text-base">
                    <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                    Attend 5 of the 6 weeks
                  </li>
                  <li className="flex items-center gap-3 text-white/70 text-base">
                    <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                    Submit the weekly items
                  </li>
                  <li className="flex items-center gap-3 text-white/70 text-base">
                    <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                    Share the needed documents
                  </li>
                </ul>
              </div>

              {/* The 4 Systems */}
              <div>
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-5">
                  The 4 systems are:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white/50 text-base">
                    <div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                    Spending proof
                  </li>
                  <li className="flex items-center gap-3 text-white/50 text-base">
                    <div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                    Board decisions
                  </li>
                  <li className="flex items-center gap-3 text-white/50 text-base">
                    <div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                    Simple reporting
                  </li>
                  <li className="flex items-center gap-3 text-white/50 text-base">
                    <div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                    Find-it-fast files
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-white/40 text-sm text-center border-t border-white/10 pt-6">
              Clear and fair. No long fine print.
            </p>
          </div>

          {/* CTA Row */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#5eead4] hover:bg-[#5eead4]/90 text-[#0a0f1a] rounded-lg px-8 py-6 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <p className="text-xs text-white/30 mt-6">
              Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Price and Seats */}
      <section id="price" className="w-full px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36 bg-[#0a0f1a]">
        <div className="max-w-xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#5eead4] mb-6 block">
              Price and seats
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1]">
              Simple and <span className="text-[#5eead4]">clear.</span>
            </h2>
          </div>

          {/* Main Pricing Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 mb-10">
            {/* Price */}
            <div className="text-center mb-8">
              <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-2">
                $12,000
              </p>
              <p className="text-white/50 text-base">
                CAD per organization
              </p>
            </div>

            {/* Seats Badge */}
            <div className="flex justify-center mb-10">
              <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[#5eead4]/10 text-[#5eead4] border border-[#5eead4]/20">
                15 seats per cohort
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 my-8" />

            {/* What's Included */}
            <div className="mb-8">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-5">
                What's included
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white text-base">
                  <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                  4 systems set up with you
                </li>
                <li className="flex items-center gap-3 text-white text-base">
                  <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                  Weekly labs and office hours
                </li>
                <li className="flex items-center gap-3 text-white text-base">
                  <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                  Week 6 stress test
                </li>
                <li className="flex items-center gap-3 text-white text-base">
                  <Check className="w-4 h-4 text-[#5eead4] flex-shrink-0" />
                  90-day plan
                </li>
              </ul>
            </div>

            {/* Payment Options */}
            <div className="mb-8">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-5">
                Payment options
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-white/50 text-sm">
                  <div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                  50% now / 50% in week 3
                </li>
                <li className="flex items-center gap-3 text-white/50 text-sm">
                  <div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                  Or 3 payments (week 0 / week 2 / week 4)
                </li>
              </ul>
            </div>

            {/* Next Cohort Info */}
            <p className="text-xs text-white/30 text-center mb-8">
              Next cohort start date shown after you apply.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="w-full bg-[#5eead4] hover:bg-[#5eead4]/90 text-[#0a0f1a] rounded-lg px-8 py-6 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <a href="#apply">
                  Apply for a seat
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <a 
                href="#faq" 
                className="text-white/50 hover:text-white text-sm font-medium transition-colors text-center"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Micro note */}
          <p className="text-xs text-white/30 text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section id="faq" className="w-full px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36 bg-[#0a0f1a]">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#5eead4] mb-6 block">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1]">
              Quick <span className="text-[#5eead4]">answers.</span>
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mb-12">
            <AccordionItem value="item-1" className="bg-white/5 rounded-xl border border-white/10 mb-3 px-5 data-[state=open]:bg-white/[0.07] transition-all">
              <AccordionTrigger className="text-left text-white font-medium py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/50">
                Do we need special software?
              </AccordionTrigger>
              <AccordionContent className="text-white/50 pb-5 leading-relaxed">
                No. We use what you already have (Google Drive or Microsoft, plus simple sheets).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/5 rounded-xl border border-white/10 mb-3 px-5 data-[state=open]:bg-white/[0.07] transition-all">
              <AccordionTrigger className="text-left text-white font-medium py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/50">
                What if our files are messy?
              </AccordionTrigger>
              <AccordionContent className="text-white/50 pb-5 leading-relaxed">
                That's normal. Week 1 sets up the structure, and you clean up as you go.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/5 rounded-xl border border-white/10 mb-3 px-5 data-[state=open]:bg-white/[0.07] transition-all">
              <AccordionTrigger className="text-left text-white font-medium py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/50">
                We don't have a finance person. Can we still do this?
              </AccordionTrigger>
              <AccordionContent className="text-white/50 pb-5 leading-relaxed">
                Yes. The proof process is simple and built for small teams.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/5 rounded-xl border border-white/10 mb-3 px-5 data-[state=open]:bg-white/[0.07] transition-all">
              <AccordionTrigger className="text-left text-white font-medium py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/50">
                How do you handle privacy?
              </AccordionTrigger>
              <AccordionContent className="text-white/50 pb-5 leading-relaxed">
                We use limited access and clear rules. You control what we see.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/5 rounded-xl border border-white/10 px-5 data-[state=open]:bg-white/[0.07] transition-all">
              <AccordionTrigger className="text-left text-white font-medium py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/50">
                We have 16–50 staff. Can we still work with Nimara?
              </AccordionTrigger>
              <AccordionContent className="text-white/50 pb-5 leading-relaxed">
                Yes. This cohort is only for 1–15 staff. For 16–50 staff, book a call instead.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-[#0a0f1a] rounded-lg px-8 py-6 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-lg px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href="/book">
                Book a call
              </a>
            </Button>
          </div>

          {/* Micro note */}
          <p className="text-xs text-white/30 text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Section 10: Final CTA Strip */}
      <section id="apply" className="w-full px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36 bg-[#5eead4]">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a0f1a] tracking-[-0.03em] mb-5">
            Ready to get funder-ready?
          </h2>
          <p className="text-[#0a0f1a]/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Apply now. We'll review your application and send next steps within 2 business days.
          </p>

          {/* Main CTA */}
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#0a0f1a] hover:bg-[#0a0f1a]/90 text-white rounded-lg px-12 py-7 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] mb-6"
            asChild
          >
            {/* 
              TRACKING PLACEHOLDER: 
              - GA4: Track 'apply_click' event on click
              - Google Ads: Track conversion on /apply or form submission
            */}
            <a href="/apply">
              Apply for a seat
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>

          {/* Time note */}
          <p className="text-[#0a0f1a]/50 text-sm mb-10">
            Takes about 2 minutes.
          </p>

          {/* Trust reinforcement */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <span className="inline-flex items-center gap-2 text-[#0a0f1a]/70 text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              Full refund guarantee
            </span>
            <span className="inline-flex items-center gap-2 text-[#0a0f1a]/70 text-sm font-medium">
              <Check className="w-4 h-4" />
              15 seats only
            </span>
            <span className="inline-flex items-center gap-2 text-[#0a0f1a]/70 text-sm font-medium">
              <Clock className="w-4 h-4" />
              6 weeks
            </span>
          </div>

          {/* Staff size clarity */}
          <p className="text-xs text-[#0a0f1a]/40">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="w-full px-5 md:px-8 lg:px-12 py-10 bg-[#0a0f1a] border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#5eead4] rounded-lg flex items-center justify-center">
              <span className="text-[#0a0f1a] font-bold text-sm">N</span>
            </div>
            <span className="text-sm text-white/60">© 2025 Nimara</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-white/40">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:hello@nimara.ca" className="hover:text-white transition-colors">hello@nimara.ca</a>
          </div>
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
