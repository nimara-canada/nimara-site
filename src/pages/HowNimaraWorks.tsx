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
          <title>How Nimara Works | Nimara — Systems for nonprofits</title>
          <meta name="description" content="Learn how Nimara's five-tier model and two engagement paths help Canadian nonprofits build lasting operational systems." />
          <meta name="keywords" content="nonprofit consulting process, nonprofit tier assessment, nonprofit system building, organizational health tiers, nonprofit engagement models" />
          
          <link rel="canonical" href="https://nimara.ca/how-nimara-works" />
          
          <meta property="og:site_name" content="Nimara" />
          <meta property="og:title" content="How Nimara Works | Nimara — Systems for nonprofits" />
          <meta property="og:description" content="Learn how Nimara's five-tier model and two engagement paths help Canadian nonprofits build lasting operational systems." />
          <meta property="og:url" content="https://nimara.ca/how-nimara-works" />
          <meta property="og:image" content="https://nimara.ca/og-image.svg" />
          <meta property="og:type" content="website" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="How Nimara Works | Nimara — Systems for nonprofits" />
          <meta name="twitter:description" content="Learn how Nimara's five-tier model and two engagement paths help Canadian nonprofits build lasting operational systems." />
          <meta name="twitter:image" content="https://nimara.ca/og-image.svg" />
        </Helmet>
        
        <Header activeRoute="/how-nimara-works" />
        
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
