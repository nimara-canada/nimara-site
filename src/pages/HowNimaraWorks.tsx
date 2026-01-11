import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HowItWorksPageHero from "@/components/how-it-works/HowItWorksPageHero";
import StepsSection from "@/components/how-it-works/StepsSection";
import YourPartSection from "@/components/how-it-works/YourPartSection";
import OurPartSection from "@/components/how-it-works/OurPartSection";
import ProofTrailSection from "@/components/how-it-works/ProofTrailSection";
import WhereWeWorkSection from "@/components/how-it-works/WhereWeWorkSection";
import WhatWeAreNotSection from "@/components/how-it-works/WhatWeAreNotSection";
import NextStepSection from "@/components/how-it-works/NextStepSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MotionControls } from "@/components/MotionControls";
import { MotionPreferencesProvider } from "@/hooks/use-scroll-reveal";

const HowNimaraWorks = () => {
  return (
    <MotionPreferencesProvider>
      <div className="min-h-screen bg-background">
        <ScrollProgress />
        <ScrollToTop />
        <MotionControls />
        
        <Helmet>
          <title>How It Works | Nimara - Simple Systems for Nonprofits</title>
          <meta name="description" content="Learn how Nimara helps nonprofits set up simple systems for money, files, and reporting. 6 clear steps from start to handover." />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Nimara" />
          <meta name="geo.region" content="CA" />
          <meta name="language" content="English" />
          
          <link rel="canonical" href="https://nimara.ca/how-nimara-works" />
          
          <meta property="og:site_name" content="Nimara" />
          <meta property="og:title" content="How It Works | Nimara - Simple Systems for Nonprofits" />
          <meta property="og:description" content="Learn how Nimara helps nonprofits set up simple systems for money, files, and reporting. 6 clear steps from start to handover." />
          <meta property="og:url" content="https://nimara.ca/how-nimara-works" />
          <meta property="og:image" content="https://nimara.ca/og-image.png" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_CA" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="How It Works | Nimara - Simple Systems for Nonprofits" />
          <meta name="twitter:description" content="Learn how Nimara helps nonprofits set up simple systems for money, files, and reporting. 6 clear steps from start to handover." />
          <meta name="twitter:image" content="https://nimara.ca/og-image.png" />
          
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How Nimara Works",
              "description": "A step-by-step guide to how Nimara helps Canadian nonprofits set up simple systems.",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Start",
                  "text": "Book a free call or try the 6-minute check."
                },
                {
                  "@type": "HowToStep",
                  "name": "Check",
                  "text": "We review what you have. (2 weeks for Full Health Check)"
                },
                {
                  "@type": "HowToStep",
                  "name": "Choose",
                  "text": "Pick the areas that matter most right now."
                },
                {
                  "@type": "HowToStep",
                  "name": "Set up",
                  "text": "We put simple systems in place. (4–8 weeks)"
                },
                {
                  "@type": "HowToStep",
                  "name": "Keep it going",
                  "text": "We train your team and check in for 90 days."
                },
                {
                  "@type": "HowToStep",
                  "name": "Handover",
                  "text": "You own it. We step back."
                }
              ]
            })}
          </script>
        </Helmet>
        
        <Header />
        
        <main id="main" className="space-y-0" style={{ paddingTop: 'calc(var(--announcement-height, 0px) + 4rem)' }}>
          {/* Hero - minimal, clean */}
          <HowItWorksPageHero />
          
          {/* Section 1 - 6-step process (main feature) */}
          <StepsSection />
          
          {/* Section 2 - Your part */}
          <YourPartSection />
          
          {/* Section 3 - Our part */}
          <OurPartSection />
          
          {/* Section 4 - Proof Trail */}
          <ProofTrailSection />
          
          {/* Section 5 - Where we work (7 areas) */}
          <WhereWeWorkSection />
          
          {/* Section 6 - What we are not */}
          <WhatWeAreNotSection />
          
          {/* Section 7 - Next step (small CTA) */}
          <NextStepSection />
        </main>
        
        <Footer />
      </div>
    </MotionPreferencesProvider>
  );
};

export default HowNimaraWorks;
