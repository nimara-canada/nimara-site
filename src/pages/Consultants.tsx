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
