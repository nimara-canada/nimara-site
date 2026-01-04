import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewConsultantHero } from "@/components/consultant/NewConsultantHero";
import { NewWhyJoin } from "@/components/consultant/NewWhyJoin";
import { NewWorkTypes } from "@/components/consultant/NewWorkTypes";
import { NewWhoWeWant } from "@/components/consultant/NewWhoWeWant";
import { NewHowItWorks } from "@/components/consultant/NewHowItWorks";

import { NewPrimaryCTA } from "@/components/consultant/NewPrimaryCTA";
import { NewComingSoon } from "@/components/consultant/NewComingSoon";

const Consultants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Join the Nimara Bench | Consulting for Canadian Nonprofits</title>
        <meta name="description" content="Real projects for independent consultants. Clear briefs, PM oversight, Net-15 payment. Join Canada's consulting bench for nonprofits and public-interest work." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Nimara" />
        <meta name="geo.region" content="CA" />
        <meta name="language" content="English" />
        
        <link rel="canonical" href="https://nimara.ca/consultants" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="Join the Nimara Bench | Consulting for Canadian Nonprofits" />
        <meta property="og:description" content="Real projects for independent consultants. Clear briefs, PM oversight, Net-15 payment. Join Canada's consulting bench for nonprofits." />
        <meta property="og:url" content="https://nimara.ca/consultants" />
        <meta property="og:image" content="https://nimara.ca/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join the Nimara Bench | Consulting for Canadian Nonprofits" />
        <meta name="twitter:description" content="Real projects for independent consultants. Clear briefs, PM oversight, Net-15 payment. Join Canada's consulting bench for nonprofits." />
        <meta name="twitter:image" content="https://nimara.ca/og-image.png" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Join the Nimara Consulting Bench",
            "description": "Real projects for independent consultants. Clear briefs, PM oversight, Net-15 payment. Join Canada's consulting bench for nonprofits and public-interest work.",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Nimara",
              "url": "https://nimara.ca",
              "logo": "https://nimara.ca/logo.png"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA"
              }
            },
            "employmentType": "CONTRACTOR",
            "datePosted": "2025-01-01",
            "validThrough": "2026-12-31"
          })}
        </script>
      </Helmet>
      <Header activeRoute="/consultants" />
      
      <main id="main" className="pb-20 md:pb-0" style={{ paddingTop: 'calc(var(--announcement-height, 0px) + 4rem)' }}>
        <NewConsultantHero />
        <NewWhyJoin />
        <NewWorkTypes />
        <NewWhoWeWant />
        <NewHowItWorks />
        <NewPrimaryCTA />
        <NewComingSoon />
      </main>
      <Footer />
    </div>
  );
};

export default Consultants;
