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
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>For Nonprofits | Nimara</title>
        <meta name="description" content="Get 3 vetted nonprofit consulting quotes in 72 hours. Free scope. PM oversight. Data in Canada; records kept 7 years." />
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
        <PackagesSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
