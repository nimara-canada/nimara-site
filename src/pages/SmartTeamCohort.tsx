import { Search, Wrench, ShieldCheck, Users, BarChart3, FolderSearch, ArrowRight, Check, X, Calendar, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const SmartTeamCohortHero = () => {
  return (
    <div className="min-h-screen bg-nim-cloud">
      {/* Sticky Mobile CTA */}
      <StickyMobileCTA href="https://form.typeform.com/to/Dsi3pXkx" label="Apply Now" />

      {/* Hero Section with Nimara Dark Navy */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
        {/* Deep Navy Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-nim-navy via-nim-navy-deep to-nim-navy" />
        
        {/* Premium dotted pattern overlay */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(62, 207, 178, 0.4) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
        
        {/* Subtle gradient glow from center */}
        <div className="absolute inset-0 bg-gradient-radial from-[#3ECFB2]/5 via-transparent to-transparent" />
        
        {/* Top edge glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3ECFB2]/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full px-5 sm:px-6 md:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge - Mint accent pill */}
            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#3ECFB2]/10 backdrop-blur-sm border border-[#3ECFB2]/20 text-[#3ECFB2] text-sm font-semibold uppercase tracking-[3px] mb-10 sm:mb-12">
              <span className="w-2 h-2 rounded-full bg-[#3ECFB2] animate-pulse" />
              For Canadian Nonprofits • 1-15 Staff
            </div>

            {/* Headline - 72px, font-weight: 900 */}
            <h1 id="hero-heading" className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[4.5rem] font-black text-white leading-[1.1] tracking-[-0.03em] mb-5">
              Stop Running Your
              <br />
              Nonprofit From Your Head
            </h1>

            {/* Subhead - 20px, font-weight: 500 */}
            <p className="text-lg sm:text-xl md:text-[1.25rem] text-white/85 font-medium leading-[1.7] mb-12 sm:mb-14 max-w-2xl mx-auto">
              When you can't find a receipt, can't show your impact, or can't explain where the money went — funders notice. And they don't come back. We help you build simple systems that prove you're fundable.
            </p>

            {/* Logistics Bar - Glassmorphic horizontal strip */}
            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 px-8 sm:px-12 py-5 sm:py-6 bg-white/[0.05] backdrop-blur-md border border-[#3ECFB2]/15 rounded-2xl mb-12 sm:mb-14">
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#3ECFB2]/70" aria-hidden="true" />
                <span className="text-sm sm:text-base md:text-lg font-medium">Feb 11, 2026</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-[#3ECFB2]/20" />
              <span className="text-white/80 text-sm sm:text-base md:text-lg">100% Virtual</span>
              <div className="hidden sm:block w-px h-5 bg-[#3ECFB2]/20" />
              <span className="text-[#3ECFB2] font-semibold text-sm sm:text-base md:text-lg">$9,450 CAD</span>
              <div className="hidden sm:block w-px h-5 bg-[#3ECFB2]/20" />
              <span className="text-white/80 text-sm sm:text-base md:text-lg">15 spots</span>
            </div>

            {/* Primary CTA - Mint accent button */}
            <div className="mb-4">
              <Button 
                size="lg" 
                className="group w-full sm:w-auto min-h-[48px] bg-[#3ECFB2] hover:bg-[#35b89d] text-nim-navy rounded-full px-12 sm:px-16 py-6 sm:py-7 text-base sm:text-lg font-bold shadow-[0_8px_30px_rgba(62,207,178,0.4)] hover:shadow-[0_12px_40px_rgba(62,207,178,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]" 
                asChild
              >
                <a 
                  href="https://form.typeform.com/to/Dsi3pXkx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Apply now - opens application form in new tab"
                >
                  Apply Now
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </Button>
            </div>

            {/* Microcopy */}
            <p className="text-sm sm:text-base text-white/60 font-normal mb-4">
              Covers capacity building grants • 5-minute application
            </p>

            {/* Urgency line */}
            <p className="text-sm text-white/50 font-normal">
              Applications close January 31, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Sound Familiar? - DARK */}
      <section className="w-full px-5 sm:px-6 md:px-10 lg:px-16 py-16 md:py-[100px] bg-nim-navy" aria-labelledby="familiar-heading">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[3px] text-white/60 mb-4">
              Sound Familiar?
            </p>
            <h2 id="familiar-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-white tracking-[-0.02em] leading-[1.1] mb-5">
              Everything Lives in Your Head
            </h2>
            <p className="text-lg sm:text-xl text-white/80 font-medium">
              And funders can tell.
            </p>
          </header>

          {/* Pain Point Cards - 2x2 Grid */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-16">
            {/* Card 1 */}
            <article className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-xl sm:rounded-2xl p-8 border-l-4 border-l-[#3ECFB2]">
              <h3 className="text-xl font-bold text-nim-navy mb-3">
                "Where's that receipt?"
              </h3>
              <p className="text-[17px] text-nim-slate-dark font-normal leading-[1.6]">
                When funders ask for proof and you can't find it fast — they notice.
              </p>
            </article>

            {/* Card 2 */}
            <article className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-xl sm:rounded-2xl p-8 border-l-4 border-l-[#3ECFB2]">
              <h3 className="text-xl font-bold text-nim-navy mb-3">
                "I can't take a vacation."
              </h3>
              <p className="text-[17px] text-nim-slate-dark font-normal leading-[1.6]">
                If you step away, nobody can answer funder questions. That's a red flag.
              </p>
            </article>

            {/* Card 3 */}
            <article className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-xl sm:rounded-2xl p-8 border-l-4 border-l-[#3ECFB2]">
              <h3 className="text-xl font-bold text-nim-navy mb-3">
                "What if we get audited?"
              </h3>
              <p className="text-[17px] text-nim-slate-dark font-normal leading-[1.6]">
                Messy records lead to audit findings. Audit findings mean funders don't come back.
              </p>
            </article>

            {/* Card 4 */}
            <article className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-xl sm:rounded-2xl p-8 border-l-4 border-l-[#3ECFB2]">
              <h3 className="text-xl font-bold text-nim-navy mb-3">
                "We do good work, but..."
              </h3>
              <p className="text-[17px] text-nim-slate-dark font-normal leading-[1.6]">
                You can't prove it. No proof = no trust. No trust = no second grant.
              </p>
            </article>
          </div>

          {/* Bottom Line - styled as requested */}
          <p className="text-center text-2xl font-semibold text-[#3ECFB2] mt-16">
            Organized nonprofits get funded. Messy ones get passed over.
          </p>
        </div>
      </section>

      {/* Section 3: The Solution - What You Get */}
      <section id="what-you-get" className="w-full px-5 sm:px-6 md:px-10 lg:px-16 py-16 md:py-[100px] bg-nim-navy" aria-labelledby="what-you-get-heading">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#3ECFB2] mb-4">
              The Solution
            </p>
            <h2 id="what-you-get-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-white tracking-[-0.02em] leading-[1.1] mb-5">
              We Don't Teach. We Build With You.
            </h2>
            <p className="text-lg sm:text-xl text-white/80 font-medium max-w-3xl mx-auto">
              4 systems. 6 weeks. Built right inside your Google or Microsoft tools.
            </p>
          </header>

          {/* 6 Feature Cards - 3x2 Grid with icon backgrounds */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-12 sm:gap-y-16 md:gap-y-20">
            {/* Card 1: Money System */}
            <article className="text-left">
              <div className="w-16 h-16 rounded-full bg-[#3ECFB2]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 52V28M24 52V20M36 52V32M48 52V16" className="text-white" />
                  <path d="M12 52h4M24 52h4M36 52h4M48 52h4" className="text-white" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Your Money System
              </h3>
              <p className="text-[17px] text-white/85 font-normal leading-[1.6]">
                Every dollar tracked. Every receipt in one place. Ready when funders ask.
              </p>
            </article>

            {/* Card 2: Board System */}
            <article className="text-left">
              <div className="w-16 h-16 rounded-full bg-[#3ECFB2]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 20L32 8L44 20M32 8V40" className="text-white" />
                  <path d="M20 44L32 56L44 44M32 56V40" className="text-white" />
                  <path d="M8 32L20 20M56 32L44 20" className="text-white" />
                  <path d="M8 32L20 44M56 32L44 44" className="text-white" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Your Board System
              </h3>
              <p className="text-[17px] text-white/85 font-normal leading-[1.6]">
                Every decision logged. Clear signing rules. Funders see a professional board.
              </p>
            </article>

            {/* Card 3: File System */}
            <article className="text-left">
              <div className="w-16 h-16 rounded-full bg-[#3ECFB2]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="8" width="20" height="20" className="text-white" />
                  <rect x="36" y="8" width="20" height="20" className="text-white" />
                  <rect x="8" y="36" width="20" height="20" className="text-white" />
                  <rect x="36" y="36" width="20" height="20" className="text-white" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Your File System
              </h3>
              <p className="text-[17px] text-white/85 font-normal leading-[1.6]">
                One place for everything. Anyone finds any file in 2 minutes — even without you.
              </p>
            </article>

            {/* Card 4: Impact System */}
            <article className="text-left">
              <div className="w-16 h-16 rounded-full bg-[#3ECFB2]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="12" y="8" width="40" height="28" rx="2" className="text-white" />
                  <path d="M20 20h24M20 28h16" className="text-white" />
                  <circle cx="18" cy="48" r="4" className="text-white" />
                  <circle cx="32" cy="48" r="4" className="text-white" />
                  <circle cx="46" cy="48" r="4" className="text-white" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Your Impact System
              </h3>
              <p className="text-[17px] text-white/85 font-normal leading-[1.6]">
                Your results in 3 clicks. Numbers and stories ready for any funder report.
              </p>
            </article>

            {/* Card 5: Dedicated Support */}
            <article className="text-left">
              <div className="w-16 h-16 rounded-full bg-[#3ECFB2]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="24" r="12" className="text-white" />
                  <path d="M16 56c0-8.837 7.163-16 16-16s16 7.163 16 16" className="text-white" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Dedicated Support
              </h3>
              <p className="text-[17px] text-white/85 font-normal leading-[1.6]">
                One Ops Lead the whole time. A real person who knows your org. Not a call center.
              </p>
            </article>

            {/* Card 6: Proven Process */}
            <article className="text-left">
              <div className="w-16 h-16 rounded-full bg-[#3ECFB2]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="12" y="12" width="40" height="40" rx="4" className="text-white" />
                  <path d="M24 32l6 6 10-12" className="text-white" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                <span className="text-[#3ECFB2] mr-2">✓</span>Proven Process
              </h3>
              <p className="text-[17px] text-white/85 font-normal leading-[1.6]">
                Built from real nonprofit work. Systems that actually stick.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works - DARK */}
      <section id="how-it-works" className="w-full px-5 sm:px-6 md:px-10 lg:px-16 py-16 md:py-[100px] bg-nim-navy" aria-labelledby="how-it-works-heading">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#3ECFB2] mb-4">
              How It Works
            </p>
            <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-white tracking-[-0.02em] leading-[1.1] mb-5">
              6 Weeks. 4 Systems. Done With You.
            </h2>
            <p className="text-lg sm:text-xl text-white/80 font-medium">
              One Ops Lead works with you the whole time. We build it in your tools.
            </p>
          </header>

          {/* 3-Step Process - Fixed icons */}
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
            {/* Step 1 - Search/Magnifying glass icon */}
            <article className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#3ECFB2]/10 flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-[#3ECFB2]" />
              </div>
              <div className="w-12 h-12 mx-auto mb-5 rounded-full border-2 border-[#3ECFB2]/30 text-[#3ECFB2] flex items-center justify-center text-xl font-light">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                We Find the Gaps
              </h3>
              <p className="text-[17px] text-white/85 font-normal leading-[1.7]">
                Week 1: We look at what you have. We find what's missing.
              </p>
            </article>

            {/* Step 2 - Wrench/tool icon */}
            <article className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#3ECFB2]/10 flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-[#3ECFB2]" />
              </div>
              <div className="w-12 h-12 mx-auto mb-5 rounded-full border-2 border-[#3ECFB2]/30 text-[#3ECFB2] flex items-center justify-center text-xl font-light">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                We Build Together
              </h3>
              <p className="text-[17px] text-white/85 font-normal leading-[1.7]">
                Weeks 2-5: One system per week. Built with you watching.
              </p>
            </article>

            {/* Step 3 - Shield/checkmark icon */}
            <article className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#3ECFB2]/10 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-[#3ECFB2]" />
              </div>
              <div className="w-12 h-12 mx-auto mb-5 rounded-full border-2 border-[#3ECFB2]/30 text-[#3ECFB2] flex items-center justify-center text-xl font-light">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                We Test Everything
              </h3>
              <p className="text-[17px] text-white/85 font-normal leading-[1.7]">
                Week 6: We test it like an auditor would. If it breaks, we fix it.
              </p>
            </article>
          </div>

          {/* Time Commitment Card - WHITE ACCENT */}
          <div className="bg-white border border-border rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 text-center shadow-sm">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-nim-navy mb-3">
              4 hours a week. <span className="text-nim-teal">100% Online.</span>
            </h3>
            <p className="text-[17px] text-nim-slate-dark mb-12 leading-[1.7]">
              Your weekly time commitment:
            </p>
            <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-xl mx-auto">
              <div className="text-center">
                <p className="text-nim-slate-dark font-medium text-lg mb-1">Group Call</p>
                <p className="text-nim-teal font-semibold text-xl">90 min</p>
              </div>
              <div className="text-center">
                <p className="text-nim-slate-dark font-medium text-lg mb-1">Build Session</p>
                <p className="text-nim-teal font-semibold text-xl">90 min</p>
              </div>
              <div className="text-center">
                <p className="text-nim-slate-dark font-medium text-lg mb-1">Your Prep</p>
                <p className="text-nim-teal font-semibold text-xl">1 hour</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Is This Right For You? - DARK PREMIUM */}
      <section className="w-full px-5 sm:px-6 md:px-10 lg:px-16 py-16 md:py-[100px] bg-nim-navy" aria-labelledby="right-for-you-heading">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[3px] text-white/60 mb-4">
              Is This Right For You?
            </p>
            <h2 id="right-for-you-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-white tracking-[-0.02em] leading-[1.1]">
              This Works Best If...
            </h2>
          </header>

          {/* Two Column Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Apply If... Card */}
            <article className="bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl p-8 md:p-10">
              <h3 className="flex items-center gap-2 text-xl font-bold text-[#3ECFB2] mb-8">
                <Check className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                Apply if you...
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#3ECFB2] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[17px] text-white/85 leading-[1.7]">Have 1-15 staff members</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#3ECFB2] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[17px] text-white/85 leading-[1.7]">Use Google or Microsoft for your files</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#3ECFB2] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[17px] text-white/85 leading-[1.7]">Are tired of being the "only one who knows"</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#3ECFB2] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[17px] text-white/85 leading-[1.7]">Want working systems, not another workshop</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#3ECFB2] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[17px] text-white/85 leading-[1.7]">Can commit 4 hours a week for 6 weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#3ECFB2] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[17px] text-white/85 leading-[1.7]">Have Capacity Building grant or similar grant</span>
                </li>
              </ul>
            </article>

            {/* Don't Apply If... Card */}
            <article className="bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl p-8 md:p-10">
              <h3 className="flex items-center gap-2 text-xl font-bold text-red-400 mb-8">
                <X className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                Don't apply if you...
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[17px] text-white/85 leading-[1.7]">Want to figure it out yourself</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[17px] text-white/85 leading-[1.7]">Are looking for training videos to watch</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[17px] text-white/85 leading-[1.7]">Can't make time for weekly sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[17px] text-white/85 leading-[1.7]">Already have smooth-running systems</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Section 6: Guarantee - DARK */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-[100px] bg-nim-navy" aria-labelledby="guarantee-heading">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#3ECFB2] mb-4">
              Our Promise
            </p>
            <h2 id="guarantee-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-white tracking-[-0.02em] leading-[1.1] mb-5">
              We Don't Leave Until It Works.
            </h2>
            <p className="text-lg text-white/60 font-medium">
              No fine print. No excuses.
            </p>
          </header>

          {/* Main Guarantee Statement - Enhanced styling */}
          <div className="bg-white/[0.04] border border-[#3ECFB2]/30 rounded-[20px] p-8 sm:p-10 md:p-12 mb-8 sm:mb-10 md:mb-14 max-w-3xl mx-auto">
            {/* Primary Statement */}
            <div className="mb-10 md:mb-12">
              <p className="text-[17px] sm:text-lg text-white/80 leading-[1.7] mb-8">
                In Week 6, we stress-test everything. We act like an auditor. We ask for receipts. We ask for board decisions. We ask for files.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3ECFB2] leading-snug">
                If your systems don't pass, we keep working with you — at no extra cost — until they do.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid sm:grid-cols-2 gap-10 md:gap-12">
              {/* The 4 Systems */}
              <div>
                <h4 className="text-sm font-bold text-[#3ECFB2] uppercase tracking-[3px] mb-8">
                  The 4 systems we build:
                </h4>
                <ul className="space-y-5" aria-label="The 4 systems">
                  <li className="flex items-center gap-4 text-white/80 text-[17px] leading-[1.7]">
                    <span className="w-2 h-2 rounded-full bg-[#3ECFB2] flex-shrink-0" aria-hidden="true" />
                    Audit-Ready Spending Proof
                  </li>
                  <li className="flex items-center gap-4 text-white/80 text-[17px] leading-[1.7]">
                    <span className="w-2 h-2 rounded-full bg-[#3ECFB2] flex-shrink-0" aria-hidden="true" />
                    Professional Board Decisions
                  </li>
                  <li className="flex items-center gap-4 text-white/80 text-[17px] leading-[1.7]">
                    <span className="w-2 h-2 rounded-full bg-[#3ECFB2] flex-shrink-0" aria-hidden="true" />
                    Find-it-Fast File System
                  </li>
                  <li className="flex items-center gap-4 text-white/80 text-[17px] leading-[1.7]">
                    <span className="w-2 h-2 rounded-full bg-[#3ECFB2] flex-shrink-0" aria-hidden="true" />
                    Simple Funder Reporting
                  </li>
                </ul>
              </div>

              {/* We Expect You To */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-[3px] mb-8">
                  We expect you to:
                </h4>
                <ul className="space-y-5" aria-label="Expectations">
                  <li className="flex items-center gap-4 text-white/80 text-[17px] leading-[1.7]">
                    <Check className="w-6 h-6 text-[#3ECFB2] flex-shrink-0" aria-hidden="true" />
                    Attend 5 of the 6 weeks
                  </li>
                  <li className="flex items-center gap-4 text-white/80 text-[17px] leading-[1.7]">
                    <Check className="w-6 h-6 text-[#3ECFB2] flex-shrink-0" aria-hidden="true" />
                    Complete the weekly tasks
                  </li>
                  <li className="flex items-center gap-4 text-white/80 text-[17px] leading-[1.7]">
                    <Check className="w-6 h-6 text-[#3ECFB2] flex-shrink-0" aria-hidden="true" />
                    Share the documents we need
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-10 md:mt-12 pt-8 border-t border-white/10">
              <p className="text-[17px] text-white/60 italic text-center leading-[1.7]">
                Designed for Executive Directors who need systems that actually work.
              </p>
            </div>
          </div>

          {/* Final Action Section */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-h-[48px] bg-[#3ECFB2] hover:bg-[#35b89d] text-nim-navy rounded-xl sm:rounded-2xl px-10 md:px-14 py-6 md:py-8 text-lg md:text-xl font-bold shadow-[0_8px_30px_rgba(62,207,178,0.4)] transition-all hover:-translate-y-0.5 active:scale-[0.98]" 
              asChild
            >
              <a href="#apply" aria-label="Apply now - scroll to application section">
                Apply Now
                <ArrowRight className="ml-3 w-6 h-6" aria-hidden="true" />
              </a>
            </Button>
            <p className="text-base text-white/50 mt-8">
              Starts Feb 11 • 15 spots total
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Price and Seats - DARK */}
      <section id="price" className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-[100px] bg-nim-navy" aria-labelledby="price-heading">
        <div className="max-w-xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#3ECFB2] mb-4">
              Your Investment
            </p>
            <h2 id="price-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-white tracking-[-0.02em] leading-[1.1]">
              One Price. <span className="text-[#3ECFB2]">Everything Included.</span>
            </h2>
          </header>

          {/* Main Pricing Card */}
          <div className="bg-white border border-border rounded-2xl sm:rounded-3xl p-8 md:p-12 lg:p-14 mb-8 sm:mb-10 md:mb-12 shadow-sm">
            {/* Price */}
            <div className="text-center mb-12">
              <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-nim-navy tracking-tight mb-3">
                $9,450
              </p>
              <p className="text-nim-slate-dark text-lg md:text-xl font-normal">
                CAD per organization
              </p>
              <p className="text-sm text-nim-slate mt-2">
                100% covered by most capacity building grants
              </p>
            </div>

            {/* Seats Badge */}
            <div className="flex justify-center mb-14">
              <span className="inline-flex items-center px-6 md:px-8 py-3.5 md:py-4 rounded-full text-base md:text-lg font-semibold bg-nim-teal/10 text-nim-teal border border-nim-teal/20">
                15 seats per cohort
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-12" />

            {/* What's Included */}
            <div className="mb-12">
              <h4 className="text-sm font-bold text-nim-slate uppercase tracking-[3px] mb-8">
                What's included
              </h4>
              <ul className="space-y-4" aria-label="What's included">
                <li className="flex items-center gap-5 text-nim-navy text-lg md:text-xl">
                  <Check className="w-6 h-6 text-nim-teal flex-shrink-0" aria-hidden="true" />
                  4 systems set up with you
                </li>
                <li className="flex items-center gap-5 text-nim-navy text-lg md:text-xl">
                  <Check className="w-6 h-6 text-nim-teal flex-shrink-0" aria-hidden="true" />
                  Weekly labs and office hours
                </li>
                <li className="flex items-center gap-5 text-nim-navy text-lg md:text-xl">
                  <Check className="w-6 h-6 text-nim-teal flex-shrink-0" aria-hidden="true" />
                  Week 6 stress test
                </li>
                <li className="flex items-center gap-5 text-nim-navy text-lg md:text-xl">
                  <Check className="w-6 h-6 text-nim-teal flex-shrink-0" aria-hidden="true" />
                  90-day maintenance guide
                </li>
              </ul>
            </div>

            {/* Payment Options */}
            <div className="mb-12">
              <h4 className="text-sm font-bold text-nim-slate uppercase tracking-[3px] mb-8">
                Payment options
              </h4>
              <ul className="space-y-4" aria-label="Payment options">
                <li className="flex items-center gap-4 text-nim-slate-dark text-base md:text-lg">
                  <span className="w-2 h-2 rounded-full bg-nim-slate/30 flex-shrink-0" aria-hidden="true" />
                  50% now / 50% in week 3
                </li>
                <li className="flex items-center gap-4 text-nim-slate-dark text-base md:text-lg">
                  <span className="w-2 h-2 rounded-full bg-nim-slate/30 flex-shrink-0" aria-hidden="true" />
                  Or 3 payments (week 0 / week 2 / week 4)
                </li>
              </ul>
            </div>

            {/* Next Cohort Info */}
            <p className="text-base text-nim-teal text-center mb-12 font-medium">
              Next cohort: Wednesday, February 11, 2026
            </p>

            {/* CTA - Changed to mint */}
            <div className="flex flex-col gap-5">
              <Button 
                size="lg" 
                className="w-full min-h-[48px] bg-[#3ECFB2] hover:bg-[#35b89d] text-nim-navy rounded-xl sm:rounded-2xl px-8 md:px-10 py-6 md:py-8 text-lg md:text-xl font-bold shadow-[0_8px_30px_rgba(62,207,178,0.4)] transition-all hover:-translate-y-0.5 active:scale-[0.98]" 
                asChild
              >
                <a 
                  href="https://form.typeform.com/to/Dsi3pXkx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Apply now - opens application form in new tab"
                >
                  Apply Now
                  <ArrowRight className="ml-3 w-6 h-6" aria-hidden="true" />
                </a>
              </Button>
              <a 
                href="#faq" 
                className="min-h-[44px] flex items-center justify-center text-nim-slate hover:text-nim-navy text-lg font-medium transition-colors text-center"
                aria-label="View frequently asked questions"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Micro note */}
          <p className="text-sm md:text-base text-white/60 text-center">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Section 8: FAQ - DARK PREMIUM */}
      <section id="faq" className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-[100px] bg-nim-navy" aria-labelledby="faq-heading">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[3px] text-white/60 mb-4">
              Questions
            </p>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-white tracking-[-0.02em] leading-[1.1]">
              Quick <span className="text-[#3ECFB2]">Answers</span>
            </h2>
          </header>

          {/* FAQ Accordion - Updated padding */}
          <Accordion type="single" collapsible className="mb-12 md:mb-16">
            <AccordionItem value="item-1" className="bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl mb-4 px-6 md:px-8 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-lg md:text-xl font-medium py-6 md:py-8 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/60">
                When does it start?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base md:text-lg pb-6 md:pb-8 leading-[1.7]">
                February 11, 2026. The cohort runs for 6 weeks and ends March 25, 2026.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl mb-4 px-6 md:px-8 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-lg md:text-xl font-medium py-6 md:py-8 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/60">
                How much time do I need each week?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base md:text-lg pb-6 md:pb-8 leading-[1.7]">
                About 4 hours: one 90-minute group call, one 90-minute build session, and about an hour of prep. All online.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl mb-4 px-6 md:px-8 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-lg md:text-xl font-medium py-6 md:py-8 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/60">
                Do I need to buy new software?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base md:text-lg pb-6 md:pb-8 leading-[1.7]">
                No. We build everything in the tools you already have — Google Workspace or Microsoft 365.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl mb-4 px-6 md:px-8 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-lg md:text-xl font-medium py-6 md:py-8 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/60">
                What if I don't have a capacity building grant?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base md:text-lg pb-6 md:pb-8 leading-[1.7]">
                This works for any nonprofit. Capacity building grants just make it easier to pay for. Other grants work too.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl mb-4 px-6 md:px-8 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-lg md:text-xl font-medium py-6 md:py-8 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/60">
                Is this just training?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base md:text-lg pb-6 md:pb-8 leading-[1.7]">
                No. Training gives you knowledge and leaves. We build the actual systems in your actual tools. When we leave, the systems work.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl mb-4 px-6 md:px-8 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-lg md:text-xl font-medium py-6 md:py-8 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/60">
                Why only 15 spots?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base md:text-lg pb-6 md:pb-8 leading-[1.7]">
                We give each organization personal attention. More than 15 means less attention for you.
              </AccordionContent>
            </AccordionItem>

            {/* New FAQ item */}
            <AccordionItem value="item-7" className="bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl px-6 md:px-8 data-[state=open]:bg-white/[0.05] transition-all">
              <AccordionTrigger className="text-left text-white text-lg md:text-xl font-medium py-6 md:py-8 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white/60">
                Is this covered by my capacity building grant?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base md:text-lg pb-6 md:pb-8 leading-[1.7]">
                Yes. The Nonprofit Machine qualifies as a capacity building expense under most grant programs. You're building operational systems — that's exactly what these grants are for.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-h-[48px] bg-[#3ECFB2] hover:bg-[#35b89d] text-nim-navy rounded-xl sm:rounded-2xl px-10 md:px-12 py-6 md:py-8 text-lg md:text-xl font-bold shadow-[0_8px_30px_rgba(62,207,178,0.4)] transition-all hover:-translate-y-0.5 active:scale-[0.98]" 
              asChild
            >
              <a 
                href="https://form.typeform.com/to/Dsi3pXkx" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Apply now - opens application form in new tab"
              >
                Apply Now
                <ArrowRight className="ml-3 w-6 h-6" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* Micro note */}
          <p className="text-sm md:text-base text-white/50 text-center">
            Nimara supports Canadian Non-Profits with 0-50 staff. This cohort is only for organizations with 1-15 staff.
          </p>
        </div>
      </section>

      {/* Section 9: Final CTA Strip - DARK */}
      <section id="apply" className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-[100px] bg-nim-navy" aria-labelledby="apply-heading">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency Badge - Updated */}
          <div className="inline-flex items-center px-6 py-3 rounded-full text-base font-semibold bg-[#3ECFB2]/15 text-[#3ECFB2] mb-10">
            ⚡ Only 15 spots — February 2026
          </div>

          {/* Heading - Updated */}
          <h2 id="apply-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-white tracking-[-0.02em] leading-[1.1] mb-5">
            Ready to Get <span className="text-[#3ECFB2]">Organized?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-normal mb-14 max-w-xl mx-auto leading-[1.7]">
            Apply now. We'll review your application and send next steps within 2 business days.
          </p>

          {/* Main CTA - Updated */}
          <Button 
            size="lg" 
            className="w-full sm:w-auto min-h-[48px] bg-[#3ECFB2] hover:bg-[#35b89d] text-nim-navy rounded-xl sm:rounded-2xl px-12 md:px-16 py-6 md:py-8 text-lg md:text-xl font-bold shadow-[0_8px_30px_rgba(62,207,178,0.4)] transition-all hover:-translate-y-0.5 active:scale-[0.98] mb-8" 
            asChild
          >
            <a 
              href="https://form.typeform.com/to/Dsi3pXkx" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Apply now - opens application form in new tab"
            >
              Apply Now
              <ArrowRight className="ml-3 w-6 h-6" aria-hidden="true" />
            </a>
          </Button>

          {/* Time note */}
          <p className="text-white/50 text-base md:text-lg mb-14">
            Takes about 2 minutes.
          </p>

          {/* Trust reinforcement */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12">
            <span className="inline-flex items-center gap-3 text-white/70 text-base md:text-lg font-medium">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-[#3ECFB2]" aria-hidden="true" />
              15 seats only
            </span>
            <span className="inline-flex items-center gap-3 text-white/70 text-base md:text-lg font-medium">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#3ECFB2]" aria-hidden="true" />
              6 weeks
            </span>
            <span className="inline-flex items-center gap-3 text-white/70 text-base md:text-lg font-medium">
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#3ECFB2]" aria-hidden="true" />
              $9,450 CAD
            </span>
          </div>

          {/* Staff size clarity */}
          <p className="text-sm md:text-base text-white/40">
            Nimara supports 0–50 staff. This cohort is only for 1–15 staff.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-10 lg:px-16 py-14 bg-nim-navy border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-[#3ECFB2] rounded-xl flex items-center justify-center">
              <span className="text-nim-navy font-bold text-lg">N</span>
            </div>
            <span className="text-lg text-white/60">© 2025 Nimara</span>
          </div>
          <nav className="flex items-center gap-8 md:gap-12 text-lg text-white/40" aria-label="Footer navigation">
            <a 
              href="/privacy" 
              className="min-h-[44px] flex items-center hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a 
              href="/terms" 
              className="min-h-[44px] flex items-center hover:text-white transition-colors"
            >
              Terms
            </a>
            <a 
              href="mailto:hello@nimara.ca" 
              className="min-h-[44px] flex items-center hover:text-white transition-colors"
              aria-label="Send email to hello@nimara.ca"
            >
              hello@nimara.ca
            </a>
          </nav>
        </div>
      </footer>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-20 md:hidden bg-nim-navy" />
    </div>
  );
};

export default SmartTeamCohortHero;
