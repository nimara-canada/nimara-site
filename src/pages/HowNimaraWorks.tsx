import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheNimaraModel } from "@/components/company/TheNimaraModel";
import HowItWorksHero from "@/components/company/HowItWorksHero";
import HealthCheckRule from "@/components/company/HealthCheckRule";
import YourJourney from "@/components/company/YourJourney";
import QualityAndRefundsAlt from "@/components/company/QualityAndRefundsAlt";
import Glossary from "@/components/company/Glossary";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MotionControls } from "@/components/MotionControls";
import { MotionPreferencesProvider } from "@/hooks/use-scroll-reveal";
import { ScrollReveal, RevealSection } from "@/components/ScrollReveal";

const HowNimaraWorks = () => {
  return (
    <MotionPreferencesProvider>
      <div className="min-h-screen bg-background">
        <ScrollProgress />
        <ScrollToTop />
        <MotionControls />
        
        <Helmet>
          <title>Services | Nimara Organization Health Check & Systems</title>
          <meta name="description" content="Diagnose where your nonprofit systems are weak. The NOHC assessment shows you what to fix first — so funders trust what they see." />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Nimara" />
          <meta name="geo.region" content="CA" />
          
          <link rel="canonical" href="https://nimara.ca/how-nimara-works" />
          
          <meta property="og:site_name" content="Nimara" />
          <meta property="og:title" content="Services | Nimara Organization Health Check & Systems" />
          <meta property="og:description" content="Diagnose where your nonprofit systems are weak. The NOHC assessment shows you what to fix first — so funders trust what they see." />
          <meta property="og:url" content="https://nimara.ca/how-nimara-works" />
          <meta property="og:image" content="https://nimara.ca/og-image.png" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_CA" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Services | Nimara Organization Health Check & Systems" />
          <meta name="twitter:description" content="Diagnose where your nonprofit systems are weak. The NOHC assessment shows you what to fix first — so funders trust what they see." />
          <meta name="twitter:image" content="https://nimara.ca/og-image.png" />
          
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Nonprofit Capacity Building",
              "provider": {
                "@type": "Organization",
                "name": "Nimara"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Canada"
              },
              "description": "Systems assessment and implementation for nonprofits. Includes the Nimara Organization Health Check (NOHC) and grant tracking tools.",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock"
              }
            })}
          </script>
        </Helmet>
        
        <Header />
        
        <main id="main" className="space-y-0" style={{ paddingTop: 'calc(var(--announcement-height, 0px) + 4rem)' }}>
          {/* Hero */}
          <HowItWorksHero />
          
          {/* Health Check Rule */}
          <RevealSection background="muted">
            <ScrollReveal>
              <HealthCheckRule />
            </ScrollReveal>
          </RevealSection>
          
          {/* The Nimara Model - Tier Section */}
          <RevealSection id="tier-section" background="gradient">
            <ScrollReveal>
              <TheNimaraModel />
            </ScrollReveal>
          </RevealSection>
          
          {/* Your Journey */}
          <RevealSection>
            <ScrollReveal>
              <YourJourney />
            </ScrollReveal>
          </RevealSection>
          
          {/* Quality and Refunds */}
          <RevealSection background="muted">
            <ScrollReveal>
              <QualityAndRefundsAlt />
            </ScrollReveal>
          </RevealSection>
          
          {/* Glossary */}
          <RevealSection>
            <ScrollReveal>
              <Glossary />
            </ScrollReveal>
          </RevealSection>
        </main>
        
        <Footer />
      </div>
    </MotionPreferencesProvider>
  );
};

export default HowNimaraWorks;
