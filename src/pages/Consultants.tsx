import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConsultantHero } from "@/components/consultant/ConsultantHero";
import { WhyJoin } from "@/components/consultant/WhyJoin";
import { WhoWereLookingFor } from "@/components/consultant/WhoWereLookingFor";
import { WhoShouldApply } from "@/components/consultant/WhoShouldApply";
import { ConsultantHowItWorks } from "@/components/consultant/ConsultantHowItWorks";
import { WorkingStandards } from "@/components/consultant/WorkingStandards";
import { WhatYoullSee } from "@/components/consultant/WhatYoullSee";
import { ConsultantFAQ } from "@/components/consultant/ConsultantFAQ";
import { ConsultantFinalCTA } from "@/components/consultant/ConsultantFinalCTA";

const Consultants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>For Consultants | Nimara</title>
        <meta name="description" content="Join the founding bench. Standard briefs, PM-led delivery, on-time pay." />
        
        <link rel="canonical" href="https://nimara.ca/consultants" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="For Consultants | Nimara" />
        <meta property="og:description" content="Join the founding bench. Standard briefs, PM-led delivery, on-time pay." />
        <meta property="og:url" content="https://nimara.ca/consultants" />
        <meta property="og:image" content="https://nimara.ca/og.jpg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="For Consultants | Nimara" />
        <meta name="twitter:description" content="Join the founding bench. Standard briefs, PM-led delivery, on-time pay." />
        <meta name="twitter:image" content="https://nimara.ca/og.jpg" />
      </Helmet>
      <Header activeRoute="/consultants" />
      
      <main id="main" className="pb-20 md:pb-0">
        <ConsultantHero />
        <WhyJoin />
        <WhoWereLookingFor />
        <WhoShouldApply />
        <ConsultantHowItWorks />
        <WorkingStandards />
        <WhatYoullSee />
        <ConsultantFAQ />
        <ConsultantFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Consultants;
