import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResourceSection } from "@/components/resources";

// Placeholder URLs - replace with actual URLs when available
const CAPACITY_GRANT_TRACKER = {
  title: "Capacity Grant Proof Tracker",
  tag: "Free template",
  description:
    "Track spend, link each expense to one deliverable, and stay pack-ready with invoice + payment proof links.",
  bullets: [
    "Shows READY vs BLOCKED automatically",
    "Keeps proof links organized as you spend (not at the end)",
    "Helps you reduce reporting stress",
  ],
  assets: {
    excel_url: "{{EXCEL_DOWNLOAD_URL}}",
    pdf_url: "{{PDF_DOWNLOAD_URL}}",
    youtube_url: "{{YOUTUBE_URL}}",
  },
  resource_id: "capacity-grant-proof-tracker-v0",
  webhook_url: "{{N8N_WEBHOOK_URL}}",
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
        {/* Page Header */}
        <section className="pt-12 pb-8 md:pt-16 md:pb-12 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs tracking-widest text-muted-foreground uppercase mb-4">
              Resources
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Free Tools for Nonprofits
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Templates, guides, and walkthroughs to help Canadian nonprofits
              stay organized and audit-ready.
            </p>
          </div>
        </section>

        {/* Resource Section */}
        <ResourceSection
          title={CAPACITY_GRANT_TRACKER.title}
          tag={CAPACITY_GRANT_TRACKER.tag}
          description={CAPACITY_GRANT_TRACKER.description}
          bullets={CAPACITY_GRANT_TRACKER.bullets}
          assets={CAPACITY_GRANT_TRACKER.assets}
          resource_id={CAPACITY_GRANT_TRACKER.resource_id}
          webhook_url={CAPACITY_GRANT_TRACKER.webhook_url}
        />

        {/* Secondary CTA */}
        <section className="pb-16 md:pb-24 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">
              Need help with something else?{" "}
              <a
                href="/book-a-call"
                className="text-primary font-medium hover:underline"
              >
                Get urgent help →
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
