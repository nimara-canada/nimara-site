import React from "react";
import { Button } from "./ui/button";
const HeroSection: React.FC = () => {
  return <section className="relative bg-nimara-navy text-white overflow-hidden">
      {/* Background gradient + glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-nimara-navy via-nimara-navy to-[#060822]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-nimara-mint/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 lg:pt-28 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT: COPY + CTA */}
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-nimara-mint mb-4">
              For Canadian nonprofits & charities
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">Finish the work that keeps you 14 days<span className="text-nimara-mint">14 days</span>, not months.
            </h1>

            <p className="text-base sm:text-lg text-slate-100/80 max-w-xl leading-relaxed mb-6">
              We fix your inside work – board, money, HR, and fundraising – so funders can say “yes” faster. Clear
              scope. Fixed price. Refund if we don’t finish.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <a href="#how-we-help">
                <Button size="lg" className="bg-nimara-mint text-nimara-navy hover:bg-white hover:text-nimara-purple border-0 font-semibold px-8">
                  Start free capacity check
                </Button>
              </a>

              <button type="button" className="text-sm font-semibold text-white/80 hover:text-nimara-mint underline-offset-4 hover:underline">
                Watch 2-minute overview
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm text-white/70 mb-4">
              <div className="flex flex-col">
                <span className="font-semibold text-white">72 hrs</span>
                <span className="text-white/60">to match support</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white">$3–8k</span>
                <span className="text-white/60">typical project</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white">100%</span>
                <span className="text-white/60">fix or refund</span>
              </div>
            </div>

            {/* Reassurance line */}
            <p className="text-[11px] sm:text-xs text-white/50">
              No credit card required · 7-minute check · instant results
            </p>
          </div>

          {/* RIGHT: SNAPSHOT CARD */}
          <div className="lg:justify-self-end">
            <div className="bg-nimara-purple/90 border border-white/20 rounded-3xl shadow-2xl backdrop-blur px-5 py-5 sm:px-7 sm:py-7 max-w-md w-full mx-auto">
              {/* Card header */}
              <div className="bg-nimara-purple rounded-2xl px-4 py-3 mb-4 shadow-md">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-white/80">
                  Your organization health
                </p>
                <p className="text-sm text-white/90">Snapshot of where you’re strong and where you need support.</p>
              </div>

              <p className="text-xs text-slate-200/80 mb-4">
                Most groups have gaps in 3+ areas. You don’t need to fix everything at once.
              </p>

              {/* Snapshot rows */}
              <div className="space-y-2.5">
                {[{
                label: "Board & governance",
                status: "OK",
                dot: "bg-emerald-400"
              }, {
                label: "Financial systems",
                status: "Needs update",
                dot: "bg-amber-400"
              }, {
                label: "Fundraising data",
                status: "Missing data",
                dot: "bg-rose-400"
              }, {
                label: "People & HR",
                status: "OK",
                dot: "bg-emerald-400"
              }].map((row, i) => <div key={row.label} className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${row.dot}`} />
                      <span className="text-xs sm:text-sm text-white">{row.label}</span>
                    </div>
                    <span className="text-[11px] sm:text-xs text-white/70">{row.status}</span>
                  </div>)}
              </div>

              <p className="mt-4 text-[11px] sm:text-xs text-white/60">
                We’ll show you where you’re strong and which gaps to fix first to stay fundable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;