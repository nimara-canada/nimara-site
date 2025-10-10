import { Header } from "@/components/Header";
import { CompanyHero } from "@/components/company/CompanyHero";
import { OurStory } from "@/components/company/OurStory";
import { WhatWeBelieve } from "@/components/company/WhatWeBelieve";
import { HowWeWork } from "@/components/company/HowWeWork";
import { TheTeam } from "@/components/company/TheTeam";
import { WhyNow } from "@/components/company/WhyNow";
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
        <WhyNow />
        
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

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Nimara</h3>
              <p className="text-sm text-muted-foreground">
                Building infrastructure for Canada's nonprofit ecosystem.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">For</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-muted-foreground hover:text-foreground">Nonprofits</a></li>
                <li><a href="/funders" className="text-muted-foreground hover:text-foreground">Funders</a></li>
                <li><a href="/consultants" className="text-muted-foreground hover:text-foreground">Consultants</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/company" className="text-muted-foreground hover:text-foreground">About</a></li>
                <li><a href="/trust" className="text-muted-foreground hover:text-foreground">Trust</a></li>
                <li><a href="/resources" className="text-muted-foreground hover:text-foreground">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@nimara.ca" className="text-muted-foreground hover:text-foreground">hello@nimara.ca</a></li>
                <li><a href="/book-a-call" className="text-muted-foreground hover:text-foreground">Book a call</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Nimara. Built for Canada's nonprofit sector.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Company;
