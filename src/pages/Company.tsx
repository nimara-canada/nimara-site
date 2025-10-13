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
        <title>About Nimara — Building Infrastructure for Canada's Nonprofit Sector</title>
        <meta name="description" content="Nimara connects Canadian nonprofits with vetted consultants. People first, simple rules, clean files. Building the infrastructure nonprofits deserve." />
        
        <link rel="canonical" href="https://nimara.ca/company" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="About Nimara — Building Infrastructure for Canada's Nonprofit Sector" />
        <meta property="og:description" content="Nimara connects Canadian nonprofits with vetted consultants. People first, simple rules, clean files. Building the infrastructure nonprofits deserve." />
        <meta property="og:url" content="https://nimara.ca/company" />
        <meta property="og:image" content="https://nimara.ca/og-image.jpg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Nimara — Building Infrastructure for Canada's Nonprofit Sector" />
        <meta name="twitter:description" content="Nimara connects Canadian nonprofits with vetted consultants. People first, simple rules, clean files. Building the infrastructure nonprofits deserve." />
        <meta name="twitter:image" content="https://nimara.ca/og-image.jpg" />
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
