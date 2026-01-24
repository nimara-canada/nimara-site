import { FileCheck, Users, BarChart3, FolderSearch, ArrowRight, Check, X, Receipt, Gavel, LineChart, FolderOpen, Plus, Folder, ClipboardList, ShieldCheck, Shield, Calendar, Clock, UserCheck, BadgeCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const SmartTeamCohortHero = () => {
  return <div className="min-h-screen bg-nim-cloud">
      {/* Hero Section with Nimara Dark Navy */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
        {/* Deep Navy Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-nim-navy via-nim-navy-deep to-nim-navy" />
        
        {/* Premium dotted pattern overlay */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(172, 252, 227, 0.4) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />
        
        {/* Subtle gradient glow from center */}
        <div className="absolute inset-0 bg-gradient-radial from-nim-mint/5 via-transparent to-transparent" />
        
        {/* Top edge glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nim-mint/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full px-5 sm:px-6 md:px-10 lg:px-16 py-20 sm:py-28 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge - Mint accent pill */}
            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-nim-mint/10 backdrop-blur-sm border border-nim-mint/20 text-nim-mint text-xs sm:text-sm font-medium uppercase tracking-[0.12em] mb-10 sm:mb-12">
              <span className="w-2 h-2 rounded-full bg-nim-mint animate-pulse" />
              For Canadian Nonprofits • 1-15 Staff
            </div>

            {/* Headline - Bold and clean */}
            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-8 sm:mb-10">
              Stop Running Your
              <br />
              Nonprofit From Your Head
            </h1>

            {/* Subhead - Elegant and light */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 sm:mb-14 max-w-2xl mx-auto">
              When you can't find a receipt, can't show your impact, or can't explain where the money went — funders notice. And they don't come back. We help you build simple systems that prove you're fundable.
            </p>

            {/* Logistics Bar - Glassmorphic horizontal strip */}
            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 px-8 sm:px-12 py-5 sm:py-6 bg-white/[0.05] backdrop-blur-md border border-nim-mint/15 rounded-2xl mb-12 sm:mb-14">
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-nim-mint/70" aria-hidden="true" />
                <span className="text-sm sm:text-base md:text-lg font-medium">Feb 11, 2026</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-nim-mint/20" />
              <span className="text-white/70 text-sm sm:text-base md:text-lg">100% Virtual</span>
              <div className="hidden sm:block w-px h-5 bg-nim-mint/20" />
              <span className="text-nim-mint font-semibold text-sm sm:text-base md:text-lg">$9,450 CAD</span>
              <div className="hidden sm:block w-px h-5 bg-nim-mint/20" />
              <span className="text-white/70 text-sm sm:text-base md:text-lg">15 spots</span>
            </div>

            {/* Primary CTA - Mint accent button */}
            <div className="mb-5 sm:mb-6">
              <Button size="lg" className="group w-full sm:w-auto bg-nim-mint hover:bg-nim-mint/90 text-nim-navy rounded-full px-12 sm:px-16 py-6 sm:py-7 text-base sm:text-lg font-bold shadow-[0_8px_32px_rgba(172,252,227,0.25)] hover:shadow-[0_12px_40px_rgba(172,252,227,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-mint/50" asChild>
                <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
                  Apply for a Seat
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </Button>
            </div>

            {/* Microcopy */}
            <p className="text-sm sm:text-base text-white/50 font-light">
              Capacity building grant eligible • Application takes 5 minutes
            </p>
          </div>
        </div>

      </section>

      {/* Section 2: Sound Familiar? - DARK */}
      <section className="w-full px-5 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 lg:py-36 bg-nim-navy" aria-labelledby="familiar-heading">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#F5F0E8]/60 mb-4 sm:mb-6">
              Sound Familiar?
            </p>
            <h2 id="familiar-heading" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] leading-[1.15] mb-4 sm:mb-6">
              Everything Lives in Your Head
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#F5F0E8]/80 font-light">
              And funders can tell.
            </p>
          </header>

          {/* Pain Point Cards - 2x2 Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
            {/* Card 1 */}
            <article className="bg-white/[0.03] border border-[#F5F0E8]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-l-nim-mint">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                "Where's that receipt?"
              </h3>
              <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed">
                When funders ask for proof and you can't find it fast — they notice.
              </p>
            </article>

            {/* Card 2 */}
            <article className="bg-white/[0.03] border border-[#F5F0E8]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-l-nim-mint">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                "I can't take a vacation."
              </h3>
              <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed">
                If you step away, nobody can answer funder questions. That's a red flag.
              </p>
            </article>

            {/* Card 3 */}
            <article className="bg-white/[0.03] border border-[#F5F0E8]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-l-nim-mint">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                "What if we get audited?"
              </h3>
              <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed">
                Messy records lead to audit findings. Audit findings mean funders don't come back.
              </p>
            </article>

            {/* Card 4 */}
            <article className="bg-white/[0.03] border border-[#F5F0E8]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-l-nim-mint">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                "We do good work, but..."
              </h3>
              <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed">
                You can't prove it. No proof = no trust. No trust = no second grant.
              </p>
            </article>
          </div>

          {/* Bottom Line */}
          <p className="text-center text-lg sm:text-xl md:text-2xl text-nim-mint font-medium">
            Organized nonprofits get funded. Messy ones get passed over.
          </p>
        </div>
      </section>

      {/* Section 3: The Solution - What You Get */}
      <section id="what-you-get" className="w-full px-5 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 lg:py-36 bg-nim-navy" aria-labelledby="what-you-get-heading">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-nim-mint mb-4 sm:mb-6">
              The Solution
            </p>
            <h2 id="what-you-get-heading" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] leading-[1.15] mb-4 sm:mb-6">
              We Don't Teach. We Build With You.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#F5F0E8]/80 font-light max-w-3xl mx-auto">
              4 systems. 6 weeks. Built right inside your Google or Microsoft tools.
            </p>
          </header>

          {/* 6 Feature Cards - 3x2 Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-12 sm:gap-y-16 md:gap-y-20">
            {/* Card 1: Money System */}
            <article className="text-left">
              {/* Minimal Line Icon */}
              <div className="mb-6 sm:mb-8">
                <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 52V28M24 52V20M36 52V32M48 52V16" className="text-[#F5F0E8]" />
                  <path d="M12 52h4M24 52h4M36 52h4M48 52h4" className="text-[#F5F0E8]" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Your Money System
              </h3>
              <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed">
                Every dollar tracked. Every receipt in one place. Ready when funders ask.
              </p>
            </article>

            {/* Card 2: Board System */}
            <article className="text-left">
              {/* Minimal Line Icon */}
              <div className="mb-6 sm:mb-8">
                <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 20L32 8L44 20M32 8V40" className="text-[#F5F0E8]" />
                  <path d="M20 44L32 56L44 44M32 56V40" className="text-[#F5F0E8]" />
                  <path d="M8 32L20 20M56 32L44 20" className="text-[#F5F0E8]" />
                  <path d="M8 32L20 44M56 32L44 44" className="text-[#F5F0E8]" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Your Board System
              </h3>
              <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed">
                Every decision logged. Clear signing rules. Funders see a professional board.
              </p>
            </article>

            {/* Card 3: File System */}
            <article className="text-left">
              {/* Minimal Line Icon */}
              <div className="mb-6 sm:mb-8">
                <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="8" width="20" height="20" className="text-[#F5F0E8]" />
                  <rect x="36" y="8" width="20" height="20" className="text-[#F5F0E8]" />
                  <rect x="8" y="36" width="20" height="20" className="text-[#F5F0E8]" />
                  <rect x="36" y="36" width="20" height="20" className="text-[#F5F0E8]" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Your File System
              </h3>
              <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed">
                One place for everything. Anyone finds any file in 2 minutes — even without you.
              </p>
            </article>

            {/* Card 4: Impact System */}
            <article className="text-left">
              {/* Minimal Line Icon */}
              <div className="mb-6 sm:mb-8">
                <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="12" y="8" width="40" height="28" rx="2" className="text-[#F5F0E8]" />
                  <path d="M20 20h24M20 28h16" className="text-[#F5F0E8]" />
                  <circle cx="18" cy="48" r="4" className="text-[#F5F0E8]" />
                  <circle cx="32" cy="48" r="4" className="text-[#F5F0E8]" />
                  <circle cx="46" cy="48" r="4" className="text-[#F5F0E8]" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Your Impact System
              </h3>
              <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed">
                Your results in 3 clicks. Numbers and stories ready for any funder report.
              </p>
            </article>

            {/* Card 5: Dedicated Support */}
            <article className="text-left">
              {/* Minimal Line Icon */}
              <div className="mb-6 sm:mb-8">
                <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="24" r="12" className="text-[#F5F0E8]" />
                  <path d="M16 56c0-8.837 7.163-16 16-16s16 7.163 16 16" className="text-[#F5F0E8]" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Dedicated Support
              </h3>
              <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed">
                One Ops Lead the whole time. A real person who knows your org. Not a call center.
              </p>
            </article>

            {/* Card 6: Proven Process */}
            <article className="text-left">
              {/* Minimal Line Icon */}
              <div className="mb-6 sm:mb-8">
                <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="12" y="12" width="40" height="40" rx="4" className="text-[#F5F0E8]" />
                  <path d="M24 32l6 6 10-12" className="text-[#F5F0E8]" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                <span className="text-nim-mint mr-2">✓</span>Proven Process
              </h3>
              <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed">
                Built from real nonprofit installs. Systems that actually stick.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works - DARK */}
      <section id="how-it-works" className="w-full px-5 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 lg:py-36 bg-nim-navy" aria-labelledby="how-it-works-heading">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-nim-mint mb-4 sm:mb-6">
              How It Works
            </p>
            <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] leading-[1.15] mb-4 sm:mb-6">
              6 Weeks. 4 Systems. Done With You.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#F5F0E8]/80 font-light">
              One Ops Lead works with you the whole time. We build it in your tools.
            </p>
          </header>

          {/* 3-Step Process */}
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
            {/* Step 1 */}
            <article className="text-center">
              <div className="mb-6 sm:mb-8">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="32" r="24" className="text-nim-mint" />
                  <path d="M24 32l5 5 11-11" className="text-nim-mint" />
                </svg>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-5 rounded-full border-2 border-nim-mint/30 text-nim-mint flex items-center justify-center text-lg sm:text-xl font-light">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                We Find the Gaps
              </h3>
              <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed">
                Week 1: We look at what you have. We find what's missing.
              </p>
            </article>

            {/* Step 2 */}
            <article className="text-center">
              <div className="mb-6 sm:mb-8">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="12" y="16" width="40" height="32" rx="3" className="text-nim-mint" />
                  <path d="M20 28h24M20 36h16" className="text-nim-mint" />
                </svg>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-5 rounded-full border-2 border-nim-mint/30 text-nim-mint flex items-center justify-center text-lg sm:text-xl font-light">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                We Build Together
              </h3>
              <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed">
                Weeks 2-5: One system per week. Built with you watching.
              </p>
            </article>

            {/* Step 3 */}
            <article className="text-center">
              <div className="mb-6 sm:mb-8">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 32h32M32 16v32" className="text-nim-mint" />
                  <circle cx="32" cy="32" r="20" className="text-nim-mint" />
                </svg>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-5 rounded-full border-2 border-nim-mint/30 text-nim-mint flex items-center justify-center text-lg sm:text-xl font-light">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                We Test Everything
              </h3>
              <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed">
                Week 6: We test it like an auditor would. If it breaks, we fix it.
              </p>
            </article>
          </div>

          {/* Time Commitment Card - WHITE ACCENT */}
          <div className="bg-white border border-border rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 text-center shadow-sm">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-nim-navy mb-2 sm:mb-3">
              4 hours a week. <span className="text-nim-teal">100% Online.</span>
            </h3>
            <p className="text-base sm:text-lg text-nim-slate-dark mb-8 sm:mb-10">
              Your weekly time commitment:
            </p>
            <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-xl mx-auto">
              <div className="text-center">
                <p className="text-nim-slate-dark font-medium text-base sm:text-lg mb-1">Group Call</p>
                <p className="text-nim-teal font-semibold text-lg sm:text-xl">90 min</p>
              </div>
              <div className="text-center">
                <p className="text-nim-slate-dark font-medium text-base sm:text-lg mb-1">Build Session</p>
                <p className="text-nim-teal font-semibold text-lg sm:text-xl">90 min</p>
              </div>
              <div className="text-center">
                <p className="text-nim-slate-dark font-medium text-base sm:text-lg mb-1">Your Prep</p>
                <p className="text-nim-teal font-semibold text-lg sm:text-xl">1 hour</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Is This Right For You? - DARK PREMIUM */}
      <section className="w-full px-5 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 lg:py-36 bg-nim-navy" aria-labelledby="right-for-you-heading">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#F5F0E8]/60 mb-4 sm:mb-6">
              Is This Right For You?
            </p>
            <h2 id="right-for-you-heading" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] leading-[1.15]">
              This Works Best If...
            </h2>
          </header>

          {/* Two Column Cards */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Apply If... Card */}
            <article className="bg-white/[0.03] border border-[#F5F0E8]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10">
              <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-nim-mint mb-6 sm:mb-8">
                <Check className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                Apply if you...
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-nim-mint flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base sm:text-lg text-[#F5F0E8]/80">Have 1-15 staff members</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-nim-mint flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base sm:text-lg text-[#F5F0E8]/80">Use Google or Microsoft for your files</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-nim-mint flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base sm:text-lg text-[#F5F0E8]/80">Are tired of being the "only one who knows"</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-nim-mint flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base sm:text-lg text-[#F5F0E8]/80">Want working systems, not another workshop</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-nim-mint flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base sm:text-lg text-[#F5F0E8]/80">Can commit 4 hours a week for 6 weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-nim-mint flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base sm:text-lg text-[#F5F0E8]/80">Have Capacity Building grant or similar grant</span>
                </li>
              </ul>
            </article>

            {/* Don't Apply If... Card */}
            <article className="bg-white/[0.03] border border-[#F5F0E8]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10">
              <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-red-400 mb-6 sm:mb-8">
                <X className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                Don't apply if you...
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base sm:text-lg text-[#F5F0E8]/80">Want to figure it out yourself</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base sm:text-lg text-[#F5F0E8]/80">Are looking for training videos to watch</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base sm:text-lg text-[#F5F0E8]/80">Can't make time for weekly sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base sm:text-lg text-[#F5F0E8]/80">Already have smooth-running systems</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Section 7: Guarantee - DARK */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 lg:py-36 bg-nim-navy" aria-labelledby="guarantee-heading">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-10 sm:mb-14 md:mb-20">
            <p className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-nim-mint mb-4 sm:mb-6 md:mb-8">
              Our Promise
            </p>
            <h2 id="guarantee-heading" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] sm:tracking-[-0.03em] leading-[1.1] sm:leading-[1.08] mb-4 sm:mb-6 md:mb-8">
              We Don't Leave Until It Works.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/50">
              No fine print. No excuses.
            </p>
          </header>

          {/* Main Guarantee Statement */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-14 mb-8 sm:mb-10 md:mb-14 max-w-3xl mx-auto">
            {/* Primary Statement */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-6 sm:mb-8">
                In Week 6, we stress-test everything. We act like an auditor. We ask for receipts. We ask for board decisions. We ask for files.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-nim-mint leading-snug">
                If your systems don't pass, we keep working with you — at no extra cost — until they do.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              {/* The 4 Systems */}
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-nim-mint uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 md:mb-8">
                  The 4 systems we build:
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
                    Find-it-Fast File System
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-white/70 text-base sm:text-lg md:text-xl">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-nim-mint flex-shrink-0" aria-hidden="true" />
                    Simple Funder Reporting
                  </li>
                </ul>
              </div>

              {/* We Expect You To */}
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 md:mb-8">
                  We expect you to:
                </h4>
                <ul className="space-y-3 sm:space-y-4 md:space-y-5" aria-label="Expectations">
                  <li className="flex items-center gap-3 sm:gap-4 text-white/70 text-base sm:text-lg md:text-xl">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-mint flex-shrink-0" aria-hidden="true" />
                    Attend 5 of the 6 weeks
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-white/70 text-base sm:text-lg md:text-xl">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-mint flex-shrink-0" aria-hidden="true" />
                    Complete the weekly tasks
                  </li>
                  <li className="flex items-center gap-3 sm:gap-4 text-white/70 text-base sm:text-lg md:text-xl">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-mint flex-shrink-0" aria-hidden="true" />
                    Share the documents we need
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-base sm:text-lg text-white/50 italic text-center">
                Designed for Executive Directors who need systems that actually work.
              </p>
            </div>
          </div>

          {/* Final Action Section */}
          <div className="text-center">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl sm:rounded-2xl px-8 sm:px-10 md:px-14 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-semibold shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50" asChild>
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
      <section id="price" className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 lg:py-36 bg-nim-navy" aria-labelledby="price-heading">
        <div className="max-w-xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-10 sm:mb-14 md:mb-20">
            <p className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-nim-mint mb-4 sm:mb-6 md:mb-8">
              Your Investment
            </p>
            <h2 id="price-heading" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] sm:tracking-[-0.03em] leading-[1.1] sm:leading-[1.08]">
              One Price. <span className="text-nim-mint">Everything Included.</span>
            </h2>
          </header>

          {/* Main Pricing Card */}
          <div className="bg-white border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-14 mb-8 sm:mb-10 md:mb-12 shadow-sm">
            {/* Price */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-nim-navy tracking-tight mb-2 sm:mb-3 md:mb-4">
                $9,450
              </p>
              <p className="text-nim-slate-dark text-base sm:text-lg md:text-xl font-light">
                CAD per organization
              </p>
            </div>

            {/* Seats Badge */}
            <div className="flex justify-center mb-8 sm:mb-10 md:mb-14">
              <span className="inline-flex items-center px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold bg-nim-teal/10 text-nim-teal border border-nim-teal/20">
                15 seats per cohort
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-8 sm:my-10 md:my-12" />

            {/* What's Included */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h4 className="text-xs sm:text-sm font-semibold text-nim-slate uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 md:mb-8">
                What's included
              </h4>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5" aria-label="What's included">
                <li className="flex items-center gap-3 sm:gap-4 md:gap-5 text-nim-navy text-base sm:text-lg md:text-xl">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-teal flex-shrink-0" aria-hidden="true" />
                  4 systems set up with you
                </li>
                <li className="flex items-center gap-3 sm:gap-4 md:gap-5 text-nim-navy text-base sm:text-lg md:text-xl">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-teal flex-shrink-0" aria-hidden="true" />
                  Weekly labs and office hours
                </li>
                <li className="flex items-center gap-3 sm:gap-4 md:gap-5 text-nim-navy text-base sm:text-lg md:text-xl">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-teal flex-shrink-0" aria-hidden="true" />
                  Week 6 stress test
                </li>
                <li className="flex items-center gap-3 sm:gap-4 md:gap-5 text-nim-navy text-base sm:text-lg md:text-xl">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-nim-teal flex-shrink-0" aria-hidden="true" />
                  90-day plan
                </li>
              </ul>
            </div>

            {/* Payment Options */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h4 className="text-xs sm:text-sm font-semibold text-nim-slate uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 md:mb-8">
                Payment options
              </h4>
              <ul className="space-y-3 sm:space-y-4" aria-label="Payment options">
                <li className="flex items-center gap-3 sm:gap-4 text-nim-slate-dark text-sm sm:text-base md:text-lg">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-nim-slate/30 flex-shrink-0" aria-hidden="true" />
                  50% now / 50% in week 3
                </li>
                <li className="flex items-center gap-3 sm:gap-4 text-nim-slate-dark text-sm sm:text-base md:text-lg">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-nim-slate/30 flex-shrink-0" aria-hidden="true" />
                  Or 3 payments (week 0 / week 2 / week 4)
                </li>
              </ul>
            </div>

            {/* Next Cohort Info */}
            <p className="text-sm sm:text-base text-nim-teal text-center mb-8 sm:mb-10 md:mb-12 font-medium">
              Next cohort: Wednesday, February 11, 2026
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <Button size="lg" className="w-full bg-nim-navy hover:bg-nim-navy/90 text-white rounded-xl sm:rounded-2xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-navy/50" asChild>
                <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
                  Apply for a seat
                  <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </a>
              </Button>
              <a href="#faq" className="text-nim-slate hover:text-nim-navy text-base sm:text-lg font-medium transition-colors text-center">
                FAQ
              </a>
            </div>
          </div>

          {/* Micro note */}
          <p className="text-xs sm:text-sm md:text-base text-[#F5F0E8]/60 text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Section 9: FAQ - DARK PREMIUM */}
      <section id="faq" className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 lg:py-36 bg-nim-navy" aria-labelledby="faq-heading">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-10 sm:mb-14 md:mb-20">
            <p className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#F5F0E8]/60 mb-4 sm:mb-6 md:mb-8">
              Questions
            </p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] sm:tracking-[-0.03em] leading-[1.1] sm:leading-[1.08]">
              Quick <span className="text-nim-mint">Answers</span>
            </h2>
          </header>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mb-10 sm:mb-12 md:mb-16">
            <AccordionItem value="item-1" className="bg-white/[0.03] border border-[#F5F0E8]/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 px-4 sm:px-6 md:px-8 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-base sm:text-lg md:text-xl font-medium py-4 sm:py-5 md:py-7 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-[#F5F0E8]/60">
                When does it start?
              </AccordionTrigger>
              <AccordionContent className="text-[#F5F0E8]/70 text-sm sm:text-base md:text-lg pb-4 sm:pb-5 md:pb-7 leading-relaxed">
                February 11, 2026. The cohort runs for 6 weeks and ends March 25, 2026.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/[0.03] border border-[#F5F0E8]/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 px-4 sm:px-6 md:px-8 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-base sm:text-lg md:text-xl font-medium py-4 sm:py-5 md:py-7 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-[#F5F0E8]/60">
                How much time do I need each week?
              </AccordionTrigger>
              <AccordionContent className="text-[#F5F0E8]/70 text-sm sm:text-base md:text-lg pb-4 sm:pb-5 md:pb-7 leading-relaxed">
                About 4 hours: one 90-minute group call, one 90-minute build session, and about an hour of prep. All online.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/[0.03] border border-[#F5F0E8]/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 px-4 sm:px-6 md:px-8 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-base sm:text-lg md:text-xl font-medium py-4 sm:py-5 md:py-7 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-[#F5F0E8]/60">
                Do I need to buy new software?
              </AccordionTrigger>
              <AccordionContent className="text-[#F5F0E8]/70 text-sm sm:text-base md:text-lg pb-4 sm:pb-5 md:pb-7 leading-relaxed">
                No. We build everything in the tools you already have — Google Workspace or Microsoft 365.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/[0.03] border border-[#F5F0E8]/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 px-4 sm:px-6 md:px-8 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-base sm:text-lg md:text-xl font-medium py-4 sm:py-5 md:py-7 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-[#F5F0E8]/60">
                What if I don't have a capacity building grant?
              </AccordionTrigger>
              <AccordionContent className="text-[#F5F0E8]/70 text-sm sm:text-base md:text-lg pb-4 sm:pb-5 md:pb-7 leading-relaxed">
                This works for any nonprofit. Capacity building grants just make it easier to pay for. Other grants work too.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/[0.03] border border-[#F5F0E8]/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 px-4 sm:px-6 md:px-8 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-base sm:text-lg md:text-xl font-medium py-4 sm:py-5 md:py-7 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-[#F5F0E8]/60">
                Is this just training?
              </AccordionTrigger>
              <AccordionContent className="text-[#F5F0E8]/70 text-sm sm:text-base md:text-lg pb-4 sm:pb-5 md:pb-7 leading-relaxed">
                No. Training gives you knowledge and leaves. We build the actual systems in your actual tools. When we leave, the systems work.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white/[0.03] border border-[#F5F0E8]/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-base sm:text-lg md:text-xl font-medium py-4 sm:py-5 md:py-7 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-[#F5F0E8]/60">
                Why only 15 spots?
              </AccordionTrigger>
              <AccordionContent className="text-[#F5F0E8]/70 text-sm sm:text-base md:text-lg pb-4 sm:pb-5 md:pb-7 leading-relaxed">
                We give each organization personal attention. More than 15 means less attention for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-6 sm:mb-8 md:mb-10">
            <Button size="lg" className="w-full sm:w-auto bg-nim-mint hover:bg-nim-mint/90 text-nim-navy rounded-xl sm:rounded-2xl px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-mint/50" asChild>
              <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
                Apply for a seat
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-xl sm:rounded-2xl px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-semibold border-[#F5F0E8]/20 text-white hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20" asChild>
              
            </Button>
          </div>

          {/* Micro note */}
          <p className="text-xs sm:text-sm md:text-base text-[#F5F0E8]/40 text-center">
            Nimara supports Canadian Non-Profits with 0-50 staff. This cohort is only for organizations with 1-15 staff.
          </p>
        </div>
      </section>

      {/* Section 10: Final CTA Strip - DARK */}
      <section id="apply" className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 lg:py-36 bg-nim-navy" aria-labelledby="apply-heading">
        <div className="max-w-3xl mx-auto text-center">
          {/* Guarantee Badge */}
          <div className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-semibold bg-nim-mint/10 text-nim-mint border border-nim-mint/20 mb-6 sm:mb-8 md:mb-10">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" aria-hidden="true" />
            Full refund guarantee: $9,450 CAD
          </div>

          {/* Heading */}
          <h2 id="apply-heading" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] sm:tracking-[-0.03em] leading-[1.1] sm:leading-[1.08] mb-4 sm:mb-6 md:mb-8">
            Ready to get <span className="text-nim-mint">funder-ready?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 font-light mb-8 sm:mb-10 md:mb-14 max-w-xl mx-auto">
            Apply now. We'll review your application and send next steps within 2 business days.
          </p>

          {/* Main CTA */}
          <Button size="lg" className="w-full sm:w-auto bg-nim-mint hover:bg-nim-mint/90 text-nim-navy rounded-xl sm:rounded-2xl px-8 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-nim-mint/50 mb-5 sm:mb-6 md:mb-8" asChild>
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
    </div>;
};
export default SmartTeamCohortHero;