import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>About Nimara — Nonprofit Consulting Platform in Canada</title>
        <meta
          name="description"
          content="Meet Nimara, a Canadian platform connecting nonprofits with vetted consultants and PM oversight. Edmonton HQ; serving Alberta and Canada."
        />
        <link rel="canonical" href="https://nimara.ca/company" />
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
    </>
  );
};

export default Company;
