import React from "react";
import { Helmet } from "react-helmet";

// Nimara brand tokens
const brand = {
  navy: "#202654",
  purple: "#6945D8",
  mint: "#ACFCE3",
  bg: "#F4F6FB",
};

function Thumb({ label }: { label: string }) {
  return (
    <div className="w-28 h-28 rounded-xl flex items-center justify-center" style={{ background: brand.mint }}>
      <svg width="72" height="72" viewBox="0 0 72 72" role="img" aria-label={label}>
        <circle cx="36" cy="36" r="30" fill="white" />
        <rect x="18" y="28" width="36" height="6" rx="3" fill={brand.purple} />
        <rect x="18" y="38" width="26" height="6" rx="3" fill={brand.navy} />
      </svg>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold tracking-wide px-2 py-1 rounded-full border" style={{ color: brand.navy, borderColor: brand.navy + "33" }}>
      {children}
    </span>
  );
}

function TemplateCard({
  badge,
  title,
  subtitle,
  href = "#",
}: {
  badge: string;
  title: string;
  subtitle?: string;
  href?: string;
}) {
  return (
    <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
      <Thumb label={title} />
      <div className="flex-1">
        <div className="mb-2">
          <Badge>{badge}</Badge>
        </div>
        <h3 className="text-base font-semibold" style={{ color: brand.navy }}>{title}</h3>
        {subtitle && (
          <p className="text-sm mt-1 text-slate-600">{subtitle}</p>
        )}
        <a
          className="inline-flex items-center gap-2 text-sm font-semibold mt-3 hover:underline"
          href={href}
          style={{ color: brand.purple }}
        >
          Get template
          <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function FreeResources() {
  return (
    <>
      <Helmet>
        <title>Free Resources - Nimara Templates | Nonprofit Management Tools</title>
        <meta name="description" content="Access free Nimara templates to streamline nonprofit operations. Download checklists, AI prompts, and grant management tools." />
      </Helmet>
      
      <div className="min-h-screen" style={{ background: brand.bg }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left column */}
            <div className="md:col-span-7">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: brand.navy }}>
                Nimara Templates
              </h1>
              <p className="mt-6 text-lg text-slate-700 max-w-2xl">
                Our templates remove repetitive prep so your team can focus on what matters: running programs and staying audit‑ready.
                Subscribe to get new Nimara templates in your inbox.
              </p>

              {/* Email subscribe */}
              <form
                className="mt-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! We'll email you new templates.");
                }}
                aria-label="Subscribe to Nimara templates"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="flex-1 rounded-xl px-4 py-3 bg-white ring-1 ring-black/10 focus:outline-none focus:ring-2"
                    style={{ color: brand.navy }}
                  />
                  <button
                    type="submit"
                    className="rounded-xl px-6 py-3 font-semibold text-white"
                    style={{ background: brand.navy }}
                  >
                    SUBSCRIBE
                  </button>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  By sharing your email, you agree to Nimara's
                  {" "}
                  <a href="/privacy" className="underline" style={{ color: brand.purple }}>
                    Privacy Policy
                  </a>
                  {" "}
                  and
                  {" "}
                  <a href="/terms" className="underline" style={{ color: brand.purple }}>
                    Terms of Service
                  </a>
                  .
                </p>
              </form>
            </div>

            {/* Right column */}
            <div className="md:col-span-5">
              <h2 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
                Featured
              </h2>
              <div className="flex flex-col gap-5">
                <TemplateCard
                  badge="NEWEST"
                  title="Nonprofit Spending Checklist"
                  subtitle="A step‑by‑step list to keep spending clean, compliant, and easy to reconcile."
                  href="#spending-checklist"
                />
                <TemplateCard
                  badge="RECOMMENDED"
                  title="AI Prompting Starter Kit"
                  subtitle="Plain‑language prompts for email, scopes, board updates, and grant close‑outs."
                  href="#ai-prompting"
                />
                <TemplateCard
                  badge="RECOMMENDED"
                  title="Grant Close‑Out Binder Template"
                  subtitle="Collect receipts, variance notes, and outcomes in one audit‑ready export."
                  href="#closeout-binder"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
