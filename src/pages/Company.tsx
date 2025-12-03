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
        <title>Company | Nimara — We build the systems that make social impact measurable</title>
        <meta name="description" content="Operators turned builders. Vetted Canadian experts, PM on every project, organized evidence, Canada-hosted data (7 years). Plain language, no lock-in." />
        <meta name="keywords" content="nonprofit consulting company, Canadian nonprofit consulting, social impact measurement, nonprofit project management, governance framework support, compliance audit preparation, Canadian charity consultants" />
        
        <link rel="canonical" href="https://nimara.ca/company" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="Company | Nimara — We build the systems that make social impact measurable" />
        <meta property="og:description" content="Operators turned builders. Vetted Canadian experts, PM on every project, organized evidence, Canada-hosted data (7 years). Plain language, no lock-in." />
        <meta property="og:url" content="https://nimara.ca/company" />
        <meta property="og:image" content="https://nimara.ca/og-image.svg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Company | Nimara — We build the systems that make social impact measurable" />
        <meta name="twitter:description" content="Operators turned builders. Vetted Canadian experts, PM on every project, organized evidence, Canada-hosted data (7 years). Plain language, no lock-in." />
        <meta name="twitter:image" content="https://nimara.ca/og-image.svg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Nimara",
            "url": "https://nimara.ca/company",
            "description": "Operators turned builders. Vetted Canadian experts, PM on every project, organized evidence, Canada-hosted data (7 years). Plain language, no lock-in.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Nimara",
              "url": "https://nimara.ca",
              "logo": "https://nimara.ca/assets/nimara-logo.png",
              "description": "Nimara matches Canadian nonprofits with vetted consultants for finance, governance, digital systems, and strategic work.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Edmonton",
                "addressRegion": "AB",
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
