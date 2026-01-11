import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MotionControls } from "@/components/MotionControls";
import { MotionPreferencesProvider } from "@/hooks/use-scroll-reveal";

// New MindMarket-style sections
import TheProblem from "@/components/landing/TheProblem";
import TheProofTrail from "@/components/landing/TheProofTrail";
import ComparisonSection from "@/components/landing/ComparisonSection";
import ProcessSection from "@/components/landing/ProcessSection";
import WhatWeHelp from "@/components/landing/WhatWeHelp";
import OutcomesGrid from "@/components/landing/OutcomesGrid";
import TrustSection from "@/components/landing/TrustSection";
import SimpleFAQ from "@/components/landing/SimpleFAQ";
import FinalCTASection from "@/components/landing/FinalCTASection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#path-comparison") {
      setTimeout(() => {
        const element = document.getElementById("path-comparison");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <MotionPreferencesProvider>
      <div className="min-h-screen">
        <ScrollProgress />
        <ScrollToTop />
        <MotionControls />
        
        <Helmet>
          <title>Nimara | Simple Systems for Canadian Nonprofits</title>
          <meta name="description" content="Nimara helps Canadian nonprofits build systems that hold up when funders ask questions. Track it. Prove it. Keep it." />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Nimara" />
          <meta name="geo.region" content="CA" />
          <meta name="language" content="English" />
          <link rel="canonical" href="https://nimara.ca" />
          
          <meta property="og:title" content="Nimara | Simple Systems for Canadian Nonprofits" />
          <meta property="og:description" content="Nimara helps Canadian nonprofits build systems that hold up when funders ask questions. Track it. Prove it. Keep it." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nimara.ca" />
          <meta property="og:image" content="https://nimara.ca/og-image.png" />
          <meta property="og:site_name" content="Nimara" />
          <meta property="og:locale" content="en_CA" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Nimara | Simple Systems for Canadian Nonprofits" />
          <meta name="twitter:description" content="Nimara helps Canadian nonprofits build systems that hold up when funders ask questions. Track it. Prove it. Keep it." />
          <meta name="twitter:image" content="https://nimara.ca/og-image.png" />
          
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nimara",
              "url": "https://nimara.ca",
              "logo": "https://nimara.ca/logo.png",
              "description": "Nimara helps Canadian nonprofits build simple systems for grant tracking, financial accountability, and funder trust.",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Bernard Serunyigo",
                "jobTitle": "Founder"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Canada"
              },
              "serviceType": ["Nonprofit Consulting", "Capacity Building", "Grant Management Systems"],
              "sameAs": [
                "https://www.linkedin.com/company/nimara",
                "https://www.linkedin.com/in/bernard-serunyigo"
              ]
            })}
          </script>
        </Helmet>
        
        <Header />
        
        <main id="main" style={{ paddingTop: '5rem' }}>
          {/* 1. Hero - Entry point, unchanged H1 and CTAs */}
          <HeroSection />
          
          {/* 2. The Problem - Set up the pain point */}
          <TheProblem />
          
          {/* 3. The Proof Trail - The solution framework */}
          <TheProofTrail />
          
          {/* 4. Traditional vs Nimara - Clear comparison */}
          <ComparisonSection />
          
          {/* 5. How It Works - 6-step process with scroll interaction */}
          <ProcessSection />
          
          {/* 6. What We Help With - 7 areas */}
          <WhatWeHelp />
          
          {/* 7. What You Get - Outcomes */}
          <OutcomesGrid />
          
          {/* 8. Trust Section - Guarantees */}
          <TrustSection />
          
          {/* 9. FAQ */}
          <SimpleFAQ />
          
          {/* 10. Final CTA */}
          <FinalCTASection />
        </main>
        
        <Footer />
      </div>
    </MotionPreferencesProvider>
  );
};

export default Index;
