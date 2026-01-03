import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompanyHero } from "@/components/company/CompanyHero";
import { OurStory } from "@/components/company/OurStory";
import { TheGap } from "@/components/company/TheGap";
import { FunderWaitlist } from "@/components/company/FunderWaitlist";
import { OurCommitments } from "@/components/company/OurCommitments";
import { OperatorsSection } from "@/components/company/OperatorsSection";
import { WhereWeAre } from "@/components/company/WhereWeAre";
import { ReadyToWork } from "@/components/company/ReadyToWork";
import { TLDR } from "@/components/company/TLDR";
import { SmallPrint } from "@/components/company/SmallPrint";

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Nimara | Our Story</title>
        <meta name="description" content="Nimara was founded to help Canadian nonprofits build systems that hold up under funding pressure. Learn how we help organizations become funder-ready." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Nimara" />
        <meta name="geo.region" content="CA" />
        <meta name="language" content="English" />
        
        <link rel="canonical" href="https://nimara.ca/company" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="About Nimara | Our Story" />
        <meta property="og:description" content="Nimara was founded to help Canadian nonprofits build systems that hold up under funding pressure. Learn how we help organizations become funder-ready." />
        <meta property="og:url" content="https://nimara.ca/company" />
        <meta property="og:image" content="https://nimara.ca/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Nimara | Our Story" />
        <meta name="twitter:description" content="Nimara was founded to help Canadian nonprofits build systems that hold up under funding pressure. Learn how we help organizations become funder-ready." />
        <meta name="twitter:image" content="https://nimara.ca/og-image.png" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Nimara",
            "url": "https://nimara.ca/company",
            "description": "Nimara was founded by an ex-fund manager who saw why good nonprofits lose funding. We help Canadian organizations build systems that hold up.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Nimara",
              "url": "https://nimara.ca",
              "logo": "https://nimara.ca/logo.png",
              "description": "Nimara helps Canadian nonprofits build simple systems for grant tracking, financial accountability, and funder trust.",
              "founder": {
                "@type": "Person",
                "name": "Bernard Serunyigo",
                "jobTitle": "Founder"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "hello@nimara.ca"
              }
            }
          })}
        </script>
      </Helmet>
      <Header activeRoute="/company" />
      
      <main id="main" style={{ paddingTop: 'calc(var(--announcement-height, 0px) + 4rem)' }}>
        <CompanyHero />
        <OurStory />
        <TheGap />
        <FunderWaitlist />
        <OurCommitments />
        <OperatorsSection />
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
