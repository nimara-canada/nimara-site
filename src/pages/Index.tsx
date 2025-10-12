import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ThreeColumnSection } from "@/components/ThreeColumnSection";
import { ExpertsSection } from "@/components/ExpertsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CategoryTiles } from "@/components/CategoryTiles";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PackagesSection } from "@/components/PackagesSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { useState } from "react";

const Index = () => {
  const [isPackagesWaitlistOpen, setIsPackagesWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>For Nonprofits | Nimara</title>
        <meta name="description" content="Get 3 vetted nonprofit consulting quotes in 3 days. Free scope. PM oversight. Data in Canada; records kept 7 years." />
        
        <link rel="canonical" href="https://nimara.ca/" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="For Nonprofits | Nimara" />
        <meta property="og:description" content="Get 3 vetted nonprofit consulting quotes in 3 days. Free scope. PM oversight. Data in Canada; records kept 7 years." />
        <meta property="og:url" content="https://nimara.ca/" />
        <meta property="og:image" content="https://nimara.ca/og.jpg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="For Nonprofits | Nimara" />
        <meta name="twitter:description" content="Get 3 vetted nonprofit consulting quotes in 3 days. Free scope. PM oversight. Data in Canada; records kept 7 years." />
        <meta name="twitter:image" content="https://nimara.ca/og.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nimara Technology",
            "url": "https://nimara.ca",
            "logo": "https://nimara.ca/assets/logo.png",
            "email": "hello@nimara.ca",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "#1017 - 9580 170th St NW",
              "addressLocality": "Edmonton",
              "addressRegion": "AB",
              "postalCode": "T5T 5R5",
              "addressCountry": "CA"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Nimara",
            "url": "https://nimara.ca",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://nimara.ca/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      <Header />
      <main id="main">
        <HeroSection />
        <ThreeColumnSection />
        <ExpertsSection />
        <HowItWorksSection />
        <CategoryTiles />
        <BenefitsSection />
        <PricingSection onOpenPackagesWaitlist={() => setIsPackagesWaitlistOpen(true)} />
        <PackagesSection isOpen={isPackagesWaitlistOpen} onClose={() => setIsPackagesWaitlistOpen(false)} />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
