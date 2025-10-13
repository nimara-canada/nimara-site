import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompanyHero } from "@/components/company/CompanyHero";
import { OurStory } from "@/components/company/OurStory";
import { WhatWeBuilt } from "@/components/company/WhatWeBuilt";
import { HowWeWork } from "@/components/company/HowWeWork";
import { WhatWeBelieve } from "@/components/company/WhatWeBelieve";
import { OurCommitments } from "@/components/company/OurCommitments";
import { TeamSection } from "@/components/company/TeamSection";
import { WhereWeAre } from "@/components/company/WhereWeAre";
import { ReadyToWork } from "@/components/company/ReadyToWork";
import { TLDR } from "@/components/company/TLDR";
import { SmallPrint } from "@/components/company/SmallPrint";

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Company | Nimara — We build the systems that make social impact measurable</title>
        <meta name="description" content="Operators turned builders. Vetted Canadian experts, PM on every project, organized evidence, Canada-hosted data (7 years). Plain language, no lock-in." />
        
        <link rel="canonical" href="https://nimara.ca/company" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="Company | Nimara — We build the systems that make social impact measurable" />
        <meta property="og:description" content="Operators turned builders. Vetted Canadian experts, PM on every project, organized evidence, Canada-hosted data (7 years). Plain language, no lock-in." />
        <meta property="og:url" content="https://nimara.ca/company" />
        <meta property="og:image" content="https://nimara.ca/og-image.jpg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Company | Nimara — We build the systems that make social impact measurable" />
        <meta name="twitter:description" content="Operators turned builders. Vetted Canadian experts, PM on every project, organized evidence, Canada-hosted data (7 years). Plain language, no lock-in." />
        <meta name="twitter:image" content="https://nimara.ca/og-image.jpg" />
      </Helmet>
      <Header activeRoute="/company" />
      
      <main id="main">
        <CompanyHero />
        <OurStory />
        <WhatWeBuilt />
        <HowWeWork />
        <WhatWeBelieve />
        <OurCommitments />
        <TeamSection />
        <WhereWeAre />
        <ReadyToWork />
        <TLDR />
        <SmallPrint />
      </main>
      <Footer />
    </div>
  );
};

export default Company;
