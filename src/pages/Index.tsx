import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FundingProofSection from "@/components/FundingProofSection";
import { ScrollNarrative } from "@/components/ScrollNarrative";
import { SystemLadder } from "@/components/SystemLadder";
import { FitCheck } from "@/components/FitCheck";
import { Expertise } from "@/components/Expertise";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
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
          <title>Nonprofit Operations & Grant Readiness Systems in Canada | Nimara</title>
          <meta name="description" content="Nimara helps Canadian nonprofits build funder-ready systems—finance, governance, operations, and capacity—so funding is easier to win and manage." />
          <meta name="keywords" content="nonprofit consulting Canada, Canadian nonprofit experts, nonprofit finance compliance, CRA compliance requirements, nonprofit strategic planning, governance best practices, program evaluation frameworks, financial management solutions, audit ready documentation" />
          <link rel="canonical" href="https://nimara.ca/" />
          <meta property="og:site_name" content="Nimara" />
          <meta property="og:title" content="Nonprofit Operations & Grant Readiness Systems in Canada | Nimara" />
          <meta property="og:description" content="Nimara helps Canadian nonprofits build funder-ready systems—finance, governance, operations, and capacity—so funding is easier to win and manage." />
          <meta property="og:url" content="https://nimara.ca/" />
          <meta property="og:image" content="https://nimara.ca/og-image.svg" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <script type="application/ld+json">
            {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nimara",
            "url": "https://nimara.ca",
            "logo": "https://nimara.ca/assets/nimara-logo.png",
            "description": "Nimara matches Canadian nonprofits with vetted consultants for finance, governance, digital systems, and strategic work."
          })}
          </script>
        </Helmet>
        
        <Header />
        
        <main id="main" className="space-y-0" style={{ paddingTop: '5rem' }}>
          {/* Hero - full height entry */}
          <HeroSection />
          
          {/* Funding Proof - 2-column messaging */}
          <FundingProofSection />
          
          {/* Scroll Narrative - Assess/Fix/Prove/Report */}
          <RevealSection background="gradient">
            <ScrollNarrative />
          </RevealSection>
          
          {/* Fit Check */}
          <RevealSection background="muted">
            <ScrollReveal>
              <FitCheck />
            </ScrollReveal>
          </RevealSection>
          
          {/* Expertise - What we cover */}
          <RevealSection>
            <ScrollReveal>
              <Expertise />
            </ScrollReveal>
          </RevealSection>
          
          {/* System Ladder - 5 Levels */}
          <SystemLadder />
          
          {/* Integrations */}
          <RevealSection background="gradient">
            <IntegrationsSection />
          </RevealSection>
          
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
