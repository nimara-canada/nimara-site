import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResourceSection } from "@/components/resources";
import { MotionPreferencesProvider } from "@/hooks/use-scroll-reveal";

const GRANT_PROOF_TRACKER = {
  title: "Grant Proof Pack Tracker (Free)",
  subhead:
    "This free tracker helps you collect spending proof and deliverables as you go — so reporting is fast and stress-free.",
  bullets: [],
  typeformUrl:
    "https://form.typeform.com/to/gcRQHINk#resource_id=grant-proof-pack-tracker&source=nimara-resource-page",
  calendlyUrl: "https://calendly.com/hello-nimara/nohc-intake-call",
};

export default function Resources() {
  return (
    <MotionPreferencesProvider>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Free Grant Proof Tracker for Nonprofits | Nimara</title>
          <meta
            name="description"
            content="Stop scrambling for proof. Get our free tracker to collect spending proof and deliverables as you go. Works in Excel or Google Sheets."
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
          style={{ paddingTop: "5rem" }}
        >
          {/* Resource Section */}
          <ResourceSection
            title={GRANT_PROOF_TRACKER.title}
            subhead={GRANT_PROOF_TRACKER.subhead}
            bullets={GRANT_PROOF_TRACKER.bullets}
            typeformUrl={GRANT_PROOF_TRACKER.typeformUrl}
            calendlyUrl={GRANT_PROOF_TRACKER.calendlyUrl}
          />
        </main>

        <Footer />
      </div>
    </MotionPreferencesProvider>
  );
}
