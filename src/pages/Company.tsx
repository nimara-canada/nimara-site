import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompanyHero } from "@/components/company/CompanyHero";
import { OurStory } from "@/components/company/OurStory";
import { WhatWeBelieve } from "@/components/company/WhatWeBelieve";
import { HowWeWork } from "@/components/company/HowWeWork";
import { TheTeam } from "@/components/company/TheTeam";
import { CompanyFinalCTA } from "@/components/company/CompanyFinalCTA";

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header activeRoute="/company" />
      
      <main id="main-content">
        <CompanyHero />
        <OurStory />
        <WhatWeBelieve />
        <HowWeWork />
        <TheTeam />
        
        {/* Trust micro-strip */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground text-center">
              <span>Data stored in Canada</span>
              <span className="text-muted">·</span>
              <span>Records kept 7 years</span>
              <span className="text-muted">·</span>
              <span>Aligned with common Canadian funder requirements</span>
              <span className="text-muted">·</span>
              <span>PM oversight on every engagement</span>
            </div>
            <div className="text-center mt-4">
              <a href="/trust" className="text-primary hover:underline text-sm">
                View our commitment →
              </a>
            </div>
          </div>
        </section>

        <CompanyFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Company;
