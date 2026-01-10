import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WithNimara from "@/components/WithNimara";

import StartingPointSplit from "@/components/StartingPointSplit";
import TheProcess from "@/components/company/TheProcess";
import HelpOrbitCarousel from "@/components/HelpOrbitCarousel";
import OutcomesSection from "@/components/OutcomesSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import StickyFooterCTA from "@/components/StickyFooterCTA";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MotionControls } from "@/components/MotionControls";
import { MotionPreferencesProvider } from "@/hooks/use-scroll-reveal";
import { ScrollReveal, RevealSection } from "@/components/ScrollReveal";

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
        
        <main id="main" className="space-y-0" style={{ paddingTop: '5rem' }}>
          {/* Hero - full height entry */}
          <HeroSection />
          
          {/* With Nimara, you can - 3 Features */}
          <WithNimara />
          
          
          {/* Start Here - Pick what fits you */}
          <StartingPointSplit />
          
          
          {/* How It Works - 4 Steps */}
          <TheProcess />
          
          {/* What We Help With - 7 Areas */}
          <HelpOrbitCarousel />
          
          {/* What You Get - Outcomes */}
          <OutcomesSection />
          
          
          {/* FAQ */}
          <RevealSection id="faq">
            <ScrollReveal>
              <FAQ />
            </ScrollReveal>
          </RevealSection>
          
          {/* Final CTA */}
          <FinalCTA />
        </main>
        
        
        <Footer />
      </div>
    </MotionPreferencesProvider>
  );
};

export default Index;
