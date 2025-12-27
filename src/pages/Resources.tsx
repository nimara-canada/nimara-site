import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResourceSection } from "@/components/resources";

const CAPACITY_GRANT_TRACKER = {
  title: "Free Capacity Grant Proof Tracker (Excel)",
  subhead:
    "Track spending, keep proof links, and stay ready for funder reporting — without extra software.",
  bullets: [
    "Simple setup (under 5 minutes)",
    "Track spend vs remaining",
    "Track what's accounted vs missing proof",
    "Optional caps (Admin + one Other cap)",
    "Proof Pack tab to keep links organized",
  ],
  typeformUrl:
    "https://form.typeform.com/to/gcRQHINk#resource_id=capacity-grant-proof-tracker-free&source=nimara-resource-page",
  calendlyUrl: "https://calendly.com/hello-nimara/nohc-intake-call",
};

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free Resources for Nonprofits | Nimara</title>
        <meta
          name="description"
          content="Free templates, guides, and tools for Canadian nonprofits. Download the Capacity Grant Proof Tracker and stay audit-ready."
        />
        <link rel="canonical" href="https://nimara.ca/resources" />
      </Helmet>

      <Header />

      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-primary focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        style={{ paddingTop: "calc(var(--announcement-height, 0px) + 5rem)" }}
      >
        {/* Hero Header */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-primary uppercase rounded-full bg-primary/10 mb-6">
              Resources
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Free Tools for
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Canadian Nonprofits
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Templates, guides, and walkthroughs to help you stay organized and audit-ready.
            </p>
          </div>
        </section>

        {/* Resource Section */}
        <ResourceSection
          title={CAPACITY_GRANT_TRACKER.title}
          subhead={CAPACITY_GRANT_TRACKER.subhead}
          bullets={CAPACITY_GRANT_TRACKER.bullets}
          typeformUrl={CAPACITY_GRANT_TRACKER.typeformUrl}
          calendlyUrl={CAPACITY_GRANT_TRACKER.calendlyUrl}
        />

        {/* Secondary CTA */}
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-secondary/80 to-secondary/40 border border-border/50">
              <p className="text-lg text-muted-foreground">
                Need help with something else?
              </p>
              <a
                href="/book-a-call"
                className="inline-flex items-center gap-2 mt-4 text-primary font-semibold text-lg hover:text-primary/80 transition-colors group"
              >
                Get urgent help
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
