import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HowItWorksHero from "@/components/company/HowItWorksHero";
import TwoStartingPoints from "@/components/company/TwoStartingPoints";
import TheProcess from "@/components/company/TheProcess";
import WhatYouGet from "@/components/company/WhatYouGet";
import WhatWeAreNot from "@/components/company/WhatWeAreNot";
import OurPromise from "@/components/company/OurPromise";
import HowItWorksFinalCTA from "@/components/company/HowItWorksFinalCTA";
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
          <title>How It Works | Nimara - Simple Systems for Nonprofits</title>
          <meta name="description" content="Learn how Nimara helps nonprofits set up simple systems for money, files, and reporting. Choose Grant Setup or Organization Check to get started." />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Nimara" />
          <meta name="geo.region" content="CA" />
          <meta name="language" content="English" />
          
          <link rel="canonical" href="https://nimara.ca/how-nimara-works" />
          
          <meta property="og:site_name" content="Nimara" />
          <meta property="og:title" content="How It Works | Nimara - Simple Systems for Nonprofits" />
          <meta property="og:description" content="Learn how Nimara helps nonprofits set up simple systems for money, files, and reporting. Choose Grant Setup or Organization Check to get started." />
          <meta property="og:url" content="https://nimara.ca/how-nimara-works" />
          <meta property="og:image" content="https://nimara.ca/og-image.png" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_CA" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="How It Works | Nimara - Simple Systems for Nonprofits" />
          <meta name="twitter:description" content="Learn how Nimara helps nonprofits set up simple systems for money, files, and reporting. Choose Grant Setup or Organization Check to get started." />
          <meta name="twitter:image" content="https://nimara.ca/og-image.png" />
          
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Nonprofit Systems Setup",
              "provider": {
                "@type": "Organization",
                "name": "Nimara"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Canada"
              },
              "description": "Simple systems for money, files, and reporting — so funding is easier to win and manage.",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock"
              }
            })}
          </script>
        </Helmet>
        
        <Header />
        
        <main id="main" className="space-y-0" style={{ paddingTop: 'calc(var(--announcement-height, 0px) + 4rem)' }}>
          {/* Section 1 - Hero */}
          <HowItWorksHero />
          
          {/* Section 2 - Two Starting Points */}
          <RevealSection background="muted">
            <ScrollReveal>
              <TwoStartingPoints />
            </ScrollReveal>
          </RevealSection>
          
          {/* Section 3 - The Process */}
          <RevealSection background="gradient">
            <ScrollReveal>
              <TheProcess />
            </ScrollReveal>
          </RevealSection>
          
          {/* Section 4 - What You Get */}
          <RevealSection>
            <ScrollReveal>
              <WhatYouGet />
            </ScrollReveal>
          </RevealSection>
          
          {/* Section 5 - What We Are Not */}
          <RevealSection background="muted">
            <ScrollReveal>
              <WhatWeAreNot />
            </ScrollReveal>
          </RevealSection>
          
          {/* Section 6 - Our Promise (Quality + Refunds) */}
          <RevealSection>
            <ScrollReveal>
              <OurPromise />
            </ScrollReveal>
          </RevealSection>
          
          {/* Section 7 - Final CTA */}
          <HowItWorksFinalCTA />
        </main>
        
        <Footer />
      </div>
    </MotionPreferencesProvider>
  );
};

export default HowNimaraWorks;
