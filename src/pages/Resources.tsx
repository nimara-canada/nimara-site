import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResourceSection } from "@/components/resources";
import { MotionPreferencesProvider } from "@/hooks/use-scroll-reveal";
import { CALENDLY_BOOKING_URL, TYPEFORM_GRANT_TRACKER_URL } from "@/constants/urls";

const GRANT_PROOF_TRACKER = {
  title: "Grant Proof Pack Tracker (Free)",
  subhead:
    "This free tracker helps you collect spending proof and deliverables as you go — so reporting is fast and stress-free.",
  bullets: [],
  typeformUrl: TYPEFORM_GRANT_TRACKER_URL,
  calendlyUrl: CALENDLY_BOOKING_URL,
};

export default function Resources() {
  return (
    <MotionPreferencesProvider>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Free Nonprofit Tools | Grant Proof Tracker | Nimara</title>
          <meta name="description" content="Free tools for nonprofits. Download the Grant Proof Tracker and learn what documentation funders actually need." />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Nimara" />
          <meta name="geo.region" content="CA" />
          <link rel="canonical" href="https://nimara.ca/resources" />
          
          <meta property="og:site_name" content="Nimara" />
          <meta property="og:title" content="Free Nonprofit Tools | Grant Proof Tracker | Nimara" />
          <meta property="og:description" content="Free tools for nonprofits. Download the Grant Proof Tracker and learn what documentation funders actually need." />
          <meta property="og:url" content="https://nimara.ca/resources" />
          <meta property="og:image" content="https://nimara.ca/og-image.png" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_CA" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Free Nonprofit Tools | Grant Proof Tracker | Nimara" />
          <meta name="twitter:description" content="Free tools for nonprofits. Download the Grant Proof Tracker and learn what documentation funders actually need." />
          <meta name="twitter:image" content="https://nimara.ca/og-image.png" />
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
