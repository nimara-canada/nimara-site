import { FileCheck, Users, BarChart3, FolderSearch, ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      {/* Placeholder for next section */}
      <section id="what-you-get" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-foreground/40 text-sm uppercase tracking-widest">
            What you get section placeholder
          </p>
        </div>
      </section>
    </div>
  );
};

export default SmartTeamCohortHero;
