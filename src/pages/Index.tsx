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
        <meta name="description" content="Get 3 free nonprofit consulting quotes in 72 hours. We turn your outcome into a simple brief, match you with vetted Canadian experts, and a Nimara PM manages delivery." />
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
