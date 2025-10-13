import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompanyHero } from "@/components/company/CompanyHero";
import { OurStory } from "@/components/company/OurStory";
import { WhatWeBelieve } from "@/components/company/WhatWeBelieve";
import { HowWeWork } from "@/components/company/HowWeWork";
import { OurCommitments } from "@/components/company/OurCommitments";
import { TeamSection } from "@/components/company/TeamSection";
import { WhereWeAre } from "@/components/company/WhereWeAre";
import { ReadyToWork } from "@/components/company/ReadyToWork";
import { SmallPrint } from "@/components/company/SmallPrint";

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Company | Nimara</title>
        <meta name="description" content="Building the infrastructure for Canada's nonprofit ecosystem. People first, simple rules, clean files." />
        
        <link rel="canonical" href="https://nimara.ca/company" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="Company | Nimara" />
        <meta property="og:description" content="Building the infrastructure for Canada's nonprofit ecosystem. People first, simple rules, clean files." />
        <meta property="og:url" content="https://nimara.ca/company" />
        <meta property="og:image" content="https://nimara.ca/og.jpg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Company | Nimara" />
        <meta name="twitter:description" content="Building the infrastructure for Canada's nonprofit ecosystem. People first, simple rules, clean files." />
        <meta name="twitter:image" content="https://nimara.ca/og.jpg" />
      </Helmet>
      <Header activeRoute="/company" />
      
      <main id="main">
        <CompanyHero />
        <OurStory />
        <WhatWeBelieve />
        <HowWeWork />
        <OurCommitments />
        <TeamSection />
        <WhereWeAre />
        <ReadyToWork />
        <SmallPrint />
      </main>
      <Footer />
    </div>
  );
};

export default Company;
