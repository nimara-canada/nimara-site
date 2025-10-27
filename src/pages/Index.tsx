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
        <title>Get Up to 3 Free Nonprofit Consulting Quotes in 72 Hours | Nimara</title>
        <meta name="description" content="Get up to 3 vetted nonprofit consulting quotes in 72 hours. Free scope. PM oversight. Clear briefs. Audit-ready work from trusted Canadian experts." />
        <meta name="keywords" content="nonprofit consulting Canada, Canadian nonprofit experts, nonprofit finance compliance, CRA compliance requirements, nonprofit strategic planning, governance best practices, program evaluation frameworks, financial management solutions, audit ready documentation" />
        
        <link rel="canonical" href="https://nimara.ca/" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="Get Up to 3 Free Nonprofit Consulting Quotes in 72 Hours" />
        <meta property="og:description" content="Get up to 3 vetted nonprofit consulting quotes in 72 hours. Free scope. PM oversight. Clear briefs. Audit-ready work from trusted Canadian experts." />
        <meta property="og:url" content="https://nimara.ca/" />
        <meta property="og:image" content="https://nimara.ca/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Up to 3 Free Nonprofit Consulting Quotes in 72 Hours" />
        <meta name="twitter:description" content="Get up to 3 vetted nonprofit consulting quotes in 72 hours. Free scope. PM oversight. Clear briefs. Audit-ready work from trusted Canadian experts." />
        <meta name="twitter:image" content="https://nimara.ca/og-image.svg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
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
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does it cost to get quotes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting quotes is completely free. You only pay if you choose to work with one of the consultants we match you with."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to get quotes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You'll receive up to 3 vetted quotes within 72 hours of submitting your request."
                }
              },
              {
                "@type": "Question",
                "name": "What categories do you support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We support Governance, Finance & Audit, Program Design, Digital & Data, Fundraising, Research, Legal & Compliance, and custom projects."
                }
              },
              {
                "@type": "Question",
                "name": "How does pricing work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Single-category projects: Consultant rate + 12% Nimara PM fee (separate line). Multi-category projects: Consultant rate + 15% PM fee. Payment terms are Net-15 after acceptance."
                }
              },
              {
                "@type": "Question",
                "name": "Are your consultants vetted?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All consultants are independently vetted, have 3-10+ years of experience, and are matched based on their expertise and your specific needs."
                }
              }
            ]
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
