import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConsultantHero } from "@/components/consultant/ConsultantHero";
import { WhatYouGet } from "@/components/consultant/WhatYouGet";
import { HowItWorksNew } from "@/components/consultant/HowItWorksNew";
import { WhoWereLookingFor } from "@/components/consultant/WhoWereLookingFor";
import { WhoShouldApplyNew } from "@/components/consultant/WhoShouldApplyNew";
import { ExpectationsNew } from "@/components/consultant/ExpectationsNew";
import { IndependenceCompliance } from "@/components/consultant/IndependenceCompliance";
import { QuickFAQ } from "@/components/consultant/QuickFAQ";
import { ConsultantFinalCTA } from "@/components/consultant/ConsultantFinalCTA";

const Consultants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>For Consultants | Nimara — Consultant Roster (Canada)</title>
        <meta name="description" content="We're building a small, high-signal roster of independent consultants for Canadian nonprofits. Submit interest to join the waitlist or check eligibility. PM oversight, clear briefs, net-15." />
        
        <link rel="canonical" href="https://nimara.ca/consultants" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="For Consultants | Nimara — Consultant Roster (Canada)" />
        <meta property="og:description" content="We're building a small, high-signal roster of independent consultants for Canadian nonprofits. Submit interest to join the waitlist or check eligibility. PM oversight, clear briefs, net-15." />
        <meta property="og:url" content="https://nimara.ca/consultants" />
        <meta property="og:image" content="https://nimara.ca/og.jpg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="For Consultants | Nimara — Consultant Roster (Canada)" />
        <meta name="twitter:description" content="We're building a small, high-signal roster of independent consultants for Canadian nonprofits. Submit interest to join the waitlist or check eligibility. PM oversight, clear briefs, net-15." />
        <meta name="twitter:image" content="https://nimara.ca/og.jpg" />
      </Helmet>
      <Header activeRoute="/consultants" />
      
      <main id="main" className="pb-20 md:pb-0">
        <ConsultantHero />
        <WhatYouGet />
        <HowItWorksNew />
        <WhoWereLookingFor />
        <WhoShouldApplyNew />
        <ExpectationsNew />
        <IndependenceCompliance />
        <QuickFAQ />
        <ConsultantFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Consultants;
