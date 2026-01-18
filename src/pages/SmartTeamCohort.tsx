import { FileCheck, Users, BarChart3, FolderSearch, ArrowRight, Check, X, Receipt, Gavel, LineChart, FolderOpen, Plus, Folder, ClipboardList, ShieldCheck, Calendar, Clock, UserCheck, BadgeCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SmartTeamCohortHero = () => {
  const systems = [
    { icon: FileCheck, label: "Spending proof" },
    { icon: Users, label: "Board decisions" },
    { icon: BarChart3, label: "Simple reporting" },
    { icon: FolderSearch, label: "Find-it-fast files" },
  ];

  const trustChips = [
    "Canada-only",
    "Confidentiality-first",
    "Built for small teams",
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Minimal Header */}
      <header className="w-full px-5 md:px-8 lg:px-12 py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-foreground rounded-md flex items-center justify-center">
            <span className="text-background font-bold text-sm">N</span>
          </div>
          <span className="font-semibold text-foreground tracking-tight">Nimara</span>
        </div>
        <Button 
          className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-5 py-2 text-sm font-semibold"
          asChild
        >
          <a href="#apply">Apply</a>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="w-full px-5 md:px-8 lg:px-12 pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* Left Column - Copy */}
            <div className="order-1">
              {/* Headline */}
              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-foreground leading-[1.08] tracking-[-0.03em] mb-5">
                Get funder-ready<br className="hidden sm:block" /> in 6 weeks.
              </h1>

              {/* Subhead */}
              <p className="text-lg md:text-xl text-foreground/70 mb-6 leading-relaxed max-w-lg">
                Nimara Smart Team Cohort for Canadian nonprofits with 1–15 staff.
              </p>

              {/* Support line */}
              <p className="text-base md:text-[1.05rem] text-foreground/60 mb-8 leading-relaxed max-w-lg">
                We set up 4 simple systems so you can prove spending, run clean board meetings, report faster, and find documents in minutes.
              </p>

              {/* Pricing */}
              <div className="mb-6">
                <p className="text-sm md:text-base font-semibold text-foreground tracking-tight">
                  $12,000 CAD per organization • 15 seats • 2–3 hours/week
                </p>
              </div>

              {/* Trust Chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {trustChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-foreground/5 text-foreground/70 border border-foreground/10"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-foreground/10 transition-all hover:shadow-xl hover:shadow-foreground/15 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a href="#apply" id="apply">
                    Apply for a seat
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <a 
                  href="#what-you-get" 
                  className="text-foreground/70 hover:text-foreground text-sm font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/50 transition-colors"
                >
                  See what you get
                </a>
              </div>

              {/* Micro note */}
              <p className="text-xs text-foreground/40 max-w-sm">
                Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
              </p>
            </div>

            {/* Right Column - Visual Card */}
            <div className="order-2 lg:pt-4">
              <div className="bg-white rounded-2xl border border-foreground/[0.08] shadow-xl shadow-foreground/[0.04] p-6 md:p-8 max-w-sm lg:max-w-none lg:ml-auto">
                {/* Card Label */}
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-foreground/40 mb-6 block">
                  What you'll set up
                </span>

                {/* Systems List */}
                <div className="space-y-4">
                  {systems.map((system, index) => (
                    <div
                      key={system.label}
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#FAFAF8] border border-foreground/[0.05]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-foreground/[0.06] flex items-center justify-center flex-shrink-0">
                        <system.icon className="w-5 h-5 text-foreground/60" />
                      </div>
                      <span className="text-base font-medium text-foreground/80">
                        {system.label}
                      </span>
                      <span className="ml-auto text-xs font-medium text-foreground/30">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-5 border-t border-foreground/[0.06]">
                  <p className="text-xs text-foreground/40 text-center">
                    All 4 systems installed in 6 weeks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Is This For You? */}
      <section className="w-full px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em] mb-3">
              Is this for you?
            </h2>
            <p className="text-foreground/50 text-sm md:text-base">
              Answer these quickly.
            </p>
          </div>

          {/* Two-Column Cards */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-10">
            {/* Left Card - Fit */}
            <div className="bg-white rounded-2xl border border-foreground/[0.08] shadow-lg shadow-foreground/[0.03] p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-5">
                This is a fit if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-foreground/70 text-[0.95rem] leading-relaxed">
                    You have capacity building funding (or budget set aside)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-foreground/70 text-[0.95rem] leading-relaxed">
                    You can assign one Ops Lead
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-foreground/70 text-[0.95rem] leading-relaxed">
                    You can commit 2–3 hours/week for 6 weeks
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Card - Not a Fit */}
            <div className="bg-white rounded-2xl border border-foreground/[0.08] shadow-lg shadow-foreground/[0.03] p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-5">
                Not a fit if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <span className="text-foreground/70 text-[0.95rem] leading-relaxed">
                    You want free advice
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <span className="text-foreground/70 text-[0.95rem] leading-relaxed">
                    You can't share documents
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <span className="text-foreground/70 text-[0.95rem] leading-relaxed">
                    You can't make weekly time
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-foreground/10 transition-all hover:shadow-xl hover:shadow-foreground/15 hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <a 
              href="#what-you-get" 
              className="text-foreground/70 hover:text-foreground text-sm font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/50 transition-colors"
            >
              See what you get
            </a>
          </div>

          {/* Micro note */}
          <p className="text-xs text-foreground/40 text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Section 3: What You Get */}
      <section id="what-you-get" className="w-full px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em] mb-3">
              What you get
            </h2>
            <p className="text-foreground/60 text-base md:text-lg">
              We set up these 4 systems with you:
            </p>
          </div>

          {/* 4 System Cards - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-8">
            {/* Card 1: Spending Proof */}
            <div className="bg-[#FAFAF8] rounded-2xl border border-foreground/[0.06] p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-foreground/[0.05] flex items-center justify-center">
                  <Receipt className="w-5 h-5 text-foreground/60" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Spending Proof System
                </h3>
              </div>
              <p className="text-foreground/60 text-[0.95rem] mb-4 leading-relaxed">
                So you can show where money went, fast.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  Who approved it
                </li>
                <li className="flex items-center gap-2.5 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  Invoice and payment proof
                </li>
                <li className="flex items-center gap-2.5 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  What was delivered
                </li>
              </ul>
            </div>

            {/* Card 2: Board Decision */}
            <div className="bg-[#FAFAF8] rounded-2xl border border-foreground/[0.06] p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-foreground/[0.05] flex items-center justify-center">
                  <Gavel className="w-5 h-5 text-foreground/60" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Board Decision System
                </h3>
              </div>
              <p className="text-foreground/60 text-[0.95rem] mb-4 leading-relaxed">
                So board meetings lead to action.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  Simple agenda and minutes
                </li>
                <li className="flex items-center gap-2.5 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  Decisions written down
                </li>
                <li className="flex items-center gap-2.5 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  Action tracker
                </li>
              </ul>
            </div>

            {/* Card 3: Simple Reporting */}
            <div className="bg-[#FAFAF8] rounded-2xl border border-foreground/[0.06] p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-foreground/[0.05] flex items-center justify-center">
                  <LineChart className="w-5 h-5 text-foreground/60" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Simple Reporting System
                </h3>
              </div>
              <p className="text-foreground/60 text-[0.95rem] mb-4 leading-relaxed">
                So you can send updates without stress.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  Small dashboard (5–10 numbers)
                </li>
                <li className="flex items-center gap-2.5 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  2-page update template
                </li>
                <li className="flex items-center gap-2.5 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  Simple reporting schedule
                </li>
              </ul>
            </div>

            {/* Card 4: Find-It-Fast Files */}
            <div className="bg-[#FAFAF8] rounded-2xl border border-foreground/[0.06] p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-foreground/[0.05] flex items-center justify-center">
                  <FolderOpen className="w-5 h-5 text-foreground/60" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Find-It-Fast File System
                </h3>
              </div>
              <p className="text-foreground/60 text-[0.95rem] mb-4 leading-relaxed">
                So your team can find key documents in minutes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  Where files go
                </li>
                <li className="flex items-center gap-2.5 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  What to name them
                </li>
                <li className="flex items-center gap-2.5 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  Basic access rules
                </li>
              </ul>
            </div>
          </div>

          {/* Plus Box */}
          <div className="bg-foreground/[0.03] border border-foreground/[0.08] rounded-xl p-5 md:p-6 mb-10 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-foreground/[0.06] flex items-center justify-center flex-shrink-0">
              <Plus className="w-5 h-5 text-foreground/50" />
            </div>
            <div>
              <span className="font-semibold text-foreground text-sm">Plus: </span>
              <span className="text-foreground/70 text-sm">
                A 90-day plan to keep it running after week 6.
              </span>
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-foreground/10 transition-all hover:shadow-xl hover:shadow-foreground/15 hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <a 
              href="#how-it-works" 
              className="text-foreground/70 hover:text-foreground text-sm font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/50 transition-colors"
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section id="how-it-works" className="w-full px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em] mb-3">
              How it works
            </h2>
            <p className="text-foreground/60 text-base md:text-lg">
              Simple, and made for small teams.
            </p>
          </div>

          {/* 3-Step Flow */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-10">
            {/* Step 1 */}
            <div className="relative bg-white rounded-2xl border border-foreground/[0.06] p-6 md:p-7">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-foreground/35 mb-5 block">
                Step 1
              </span>
              <div className="w-11 h-11 rounded-xl bg-foreground/[0.05] flex items-center justify-center mb-4">
                <Folder className="w-5 h-5 text-foreground/60" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Set up your files
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                So you stop losing documents.
              </p>
              {/* Connector arrow - hidden on mobile */}
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2 text-foreground/20">
                →
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-2xl border border-foreground/[0.06] p-6 md:p-7">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-foreground/35 mb-5 block">
                Step 2
              </span>
              <div className="w-11 h-11 rounded-xl bg-foreground/[0.05] flex items-center justify-center mb-4">
                <ClipboardList className="w-5 h-5 text-foreground/60" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Set up the 4 systems
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Proof, board, reporting, and files.
              </p>
              {/* Connector arrow - hidden on mobile */}
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2 text-foreground/20">
                →
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl border border-foreground/[0.06] p-6 md:p-7">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-foreground/35 mb-5 block">
                Step 3
              </span>
              <div className="w-11 h-11 rounded-xl bg-foreground/[0.05] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-foreground/60" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Prove it works
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Stress test + a 90-day plan.
              </p>
            </div>
          </div>

          {/* Weekly Schedule + Time and Team Cards */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-10">
            {/* Weekly Schedule Card */}
            <div className="bg-white rounded-2xl border border-foreground/[0.06] p-6 md:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-foreground/[0.05] flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-foreground/60" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Weekly schedule
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  1 group session (90 min)
                </li>
                <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  1 working lab (90 min)
                </li>
                <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  Office hours (optional)
                </li>
              </ul>
            </div>

            {/* Time and Team Card */}
            <div className="bg-white rounded-2xl border border-foreground/[0.06] p-6 md:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-foreground/[0.05] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-foreground/60" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Time and team
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  2–3 hours/week total
                </li>
                <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  One Ops Lead needed
                </li>
                <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  We build it with you in labs
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-foreground/10 transition-all hover:shadow-xl hover:shadow-foreground/15 hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <a 
              href="#weekly-plan" 
              className="text-foreground/70 hover:text-foreground text-sm font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/50 transition-colors"
            >
              See the weekly plan
            </a>
          </div>

          {/* Micro note */}
          <p className="text-xs text-foreground/40 text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Section 5: Early Win */}
      <section className="w-full px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em] mb-3">
              Early win
            </h2>
            <p className="text-foreground/60 text-base md:text-lg">
              You will feel progress fast.
            </p>
          </div>

          {/* Week 1 and Week 2 Cards */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-8">
            {/* Card A: Week 1 */}
            <div className="bg-[#FAFAF8] rounded-2xl border border-foreground/[0.08] p-6 md:p-8 relative overflow-hidden">
              {/* Subtle accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400/40 to-emerald-400/10" />
              
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 mb-5">
                By the end of Week 1
              </span>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-foreground/[0.05] flex items-center justify-center">
                  <Folder className="w-5 h-5 text-foreground/60" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Your file system is set up.
                </h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  A clear folder map
                </li>
                <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Simple naming rules
                </li>
                <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Key documents easy to find
                </li>
              </ul>
            </div>

            {/* Card B: Week 2 */}
            <div className="bg-[#FAFAF8] rounded-2xl border border-foreground/[0.08] p-6 md:p-8 relative overflow-hidden">
              {/* Subtle accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/40 to-blue-400/10" />
              
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 mb-5">
                By the end of Week 2
              </span>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-foreground/[0.05] flex items-center justify-center">
                  <Receipt className="w-5 h-5 text-foreground/60" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  You will finish 10 proof bundles.
                </h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  Approval, invoice, and payment proof
                </li>
                <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  What was delivered
                </li>
                <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  Saved in the right place
                </li>
              </ul>
            </div>
          </div>

          {/* Reassurance Line */}
          <p className="text-center text-foreground/50 text-sm md:text-base mb-10">
            This is when most teams feel the biggest relief.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-foreground/10 transition-all hover:shadow-xl hover:shadow-foreground/15 hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <a 
              href="#what-you-get" 
              className="text-foreground/70 hover:text-foreground text-sm font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/50 transition-colors"
            >
              See what you get
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Stress Test */}
      <section className="w-full px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em] mb-3">
              Stress test
            </h2>
            <p className="text-foreground/60 text-base md:text-lg">
              We check that it works in real life.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl border border-foreground/[0.08] shadow-lg shadow-foreground/[0.04] p-6 md:p-8 mb-10">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-foreground/[0.05] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-foreground/60" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Week 6 stress test
                </h3>
              </div>
              {/* Verified Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                <BadgeCheck className="w-3.5 h-3.5" />
                Verified
              </span>
            </div>

            {/* Card Intro */}
            <p className="text-foreground/70 text-[0.95rem] mb-5">
              You will be asked to show:
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-foreground/80 text-[0.95rem]">
                <div className="w-6 h-6 rounded-full bg-foreground/[0.05] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-foreground/50" />
                </div>
                Proof for a real purchase
              </li>
              <li className="flex items-center gap-3 text-foreground/80 text-[0.95rem]">
                <div className="w-6 h-6 rounded-full bg-foreground/[0.05] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-foreground/50" />
                </div>
                A board decision record
              </li>
              <li className="flex items-center gap-3 text-foreground/80 text-[0.95rem]">
                <div className="w-6 h-6 rounded-full bg-foreground/[0.05] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-foreground/50" />
                </div>
                Your latest report
              </li>
              <li className="flex items-center gap-3 text-foreground/80 text-[0.95rem]">
                <div className="w-6 h-6 rounded-full bg-foreground/[0.05] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-foreground/50" />
                </div>
                A key document in under 3 minutes
              </li>
            </ul>

            {/* Why it matters */}
            <div className="pt-5 border-t border-foreground/[0.06]">
              <p className="text-foreground/60 text-sm">
                If you can't show it fast, we help fix it.
              </p>
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-foreground/10 transition-all hover:shadow-xl hover:shadow-foreground/15 hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <a 
              href="#how-it-works" 
              className="text-foreground/70 hover:text-foreground text-sm font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/50 transition-colors"
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* Section 7: Guarantee */}
      <section className="w-full px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em] mb-3">
              Guarantee
            </h2>
            <p className="text-foreground/60 text-base md:text-lg">
              We take the risk seriously.
            </p>
          </div>

          {/* Main Guarantee Card */}
          <div className="bg-[#FAFAF8] rounded-2xl border border-foreground/[0.08] shadow-lg shadow-foreground/[0.04] p-6 md:p-8 mb-10">
            {/* Guarantee Statement */}
            <div className="bg-white rounded-xl border border-foreground/[0.06] p-5 md:p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-lg md:text-xl font-semibold text-foreground leading-snug pt-2">
                  If we do not set up the 4 systems, you get a full refund.
                </p>
              </div>
            </div>

            {/* Two Column Layout on Desktop */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* To Qualify */}
              <div>
                <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide mb-4">
                  To qualify, you must:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                    <div className="w-5 h-5 rounded-full bg-foreground/[0.06] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-foreground/50" />
                    </div>
                    Attend 5 of the 6 weeks
                  </li>
                  <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                    <div className="w-5 h-5 rounded-full bg-foreground/[0.06] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-foreground/50" />
                    </div>
                    Submit the weekly items
                  </li>
                  <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                    <div className="w-5 h-5 rounded-full bg-foreground/[0.06] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-foreground/50" />
                    </div>
                    Share the needed documents
                  </li>
                </ul>
              </div>

              {/* The 4 Systems */}
              <div>
                <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide mb-4">
                  The 4 systems are:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                    Spending proof
                  </li>
                  <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                    Board decisions
                  </li>
                  <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                    Simple reporting
                  </li>
                  <li className="flex items-center gap-3 text-foreground/70 text-[0.95rem]">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                    Find-it-fast files
                  </li>
                </ul>
              </div>
            </div>

            {/* Reassurance Line */}
            <div className="pt-5 border-t border-foreground/[0.06]">
              <p className="text-foreground/50 text-sm text-center">
                Clear and fair. No long fine print.
              </p>
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-foreground/10 transition-all hover:shadow-xl hover:shadow-foreground/15 hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#apply">
                Apply for a seat
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <a 
              href="#price" 
              className="text-foreground/70 hover:text-foreground text-sm font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/50 transition-colors"
            >
              Price and seats
            </a>
          </div>

          {/* Micro note */}
          <p className="text-xs text-foreground/40 text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Section 8: Price and Seats */}
      <section id="price" className="w-full px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-[#FAFAF8]">
        <div className="max-w-xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em] mb-3">
              Price and seats
            </h2>
            <p className="text-foreground/60 text-base md:text-lg">
              Simple and clear.
            </p>
          </div>

          {/* Main Pricing Card */}
          <div className="bg-white rounded-2xl border border-foreground/[0.08] shadow-xl shadow-foreground/[0.05] p-6 md:p-8 mb-10">
            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-1">
                $12,000 CAD
              </p>
              <p className="text-foreground/50 text-sm md:text-base">
                per organization
              </p>
            </div>

            {/* Seats Badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-foreground/[0.06] text-foreground border border-foreground/[0.08]">
                15 seats per cohort
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-foreground/[0.06] my-6" />

            {/* What's Included */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-4">
                What's included
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground/80 text-[0.95rem]">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  4 systems set up with you
                </li>
                <li className="flex items-center gap-3 text-foreground/80 text-[0.95rem]">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Weekly labs and office hours
                </li>
                <li className="flex items-center gap-3 text-foreground/80 text-[0.95rem]">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Week 6 stress test
                </li>
                <li className="flex items-center gap-3 text-foreground/80 text-[0.95rem]">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  90-day plan
                </li>
              </ul>
            </div>

            {/* Payment Options */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-4">
                Payment options
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  50% now / 50% in week 3
                </li>
                <li className="flex items-center gap-3 text-foreground/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                  Or 3 payments (week 0 / week 2 / week 4)
                </li>
              </ul>
            </div>

            {/* Next Cohort Info */}
            <p className="text-xs text-foreground/40 text-center mb-6">
              Next cohort start date shown after you apply.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-foreground/10 transition-all hover:shadow-xl hover:shadow-foreground/15 hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <a href="#apply">
                  Apply for a seat
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <a 
                href="#faq" 
                className="text-foreground/70 hover:text-foreground text-sm font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/50 transition-colors text-center"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Micro note */}
          <p className="text-xs text-foreground/40 text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section id="faq" className="w-full px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em] mb-3">
              FAQ
            </h2>
            <p className="text-foreground/60 text-base md:text-lg">
              Quick answers.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mb-10">
            <AccordionItem value="item-1" className="bg-[#FAFAF8] rounded-xl border border-foreground/[0.06] mb-3 px-5 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="text-left text-foreground font-medium py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                Do we need special software?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pb-5 leading-relaxed">
                No. We use what you already have (Google Drive or Microsoft, plus simple sheets).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-[#FAFAF8] rounded-xl border border-foreground/[0.06] mb-3 px-5 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="text-left text-foreground font-medium py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                What if our files are messy?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pb-5 leading-relaxed">
                That's normal. Week 1 sets up the structure, and you clean up as you go.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-[#FAFAF8] rounded-xl border border-foreground/[0.06] mb-3 px-5 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="text-left text-foreground font-medium py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                We don't have a finance person. Can we still do this?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pb-5 leading-relaxed">
                Yes. The proof process is simple and built for small teams.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-[#FAFAF8] rounded-xl border border-foreground/[0.06] mb-3 px-5 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="text-left text-foreground font-medium py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                How do you handle privacy?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pb-5 leading-relaxed">
                We use limited access and clear rules. You control what we see.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-[#FAFAF8] rounded-xl border border-foreground/[0.06] px-5 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="text-left text-foreground font-medium py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                We have 16–50 staff. Can we still work with Nimara?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pb-5 leading-relaxed">
                Yes. This cohort is only for 1–15 staff. For 16–50 staff, book a call instead.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-foreground/10 transition-all hover:shadow-xl hover:shadow-foreground/15 hover:scale-[1.02] active:scale-[0.98]"
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
              className="rounded-full px-8 py-6 text-base font-semibold border-foreground/20 hover:bg-foreground/5"
              asChild
            >
              <a href="/book">
                Book a call
              </a>
            </Button>
          </div>

          {/* Micro note */}
          <p className="text-xs text-foreground/40 text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Placeholder for next section */}
      <section className="py-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-foreground/40 text-sm uppercase tracking-widest">
            Final CTA section placeholder
          </p>
        </div>
      </section>
    </div>
  );
};

export default SmartTeamCohortHero;
