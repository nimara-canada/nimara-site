import { Header } from "@/components/Header";
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
      <Header activeRoute="/consultants" />
      
      <main id="main-content" className="pb-20 md:pb-0">
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

      {/* Trust micro-strip */}
      <div className="border-t border-border bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span>Data in Canada</span>
            <span>·</span>
            <span>Records kept 7 years</span>
            <span>·</span>
            <span>Aligned with common Canadian funder requirements</span>
            <span>·</span>
            <span>PM oversight on every engagement</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultants;
