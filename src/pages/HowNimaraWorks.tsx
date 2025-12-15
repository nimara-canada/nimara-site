import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheNimaraModel } from "@/components/company/TheNimaraModel";
import HowItWorksHero from "@/components/company/HowItWorksHero";
import HealthCheckRule from "@/components/company/HealthCheckRule";
import YourJourney from "@/components/company/YourJourney";
import QualityAndRefundsAlt from "@/components/company/QualityAndRefundsAlt";
import Glossary from "@/components/company/Glossary";

const HowNimaraWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>How Nimara Works | Nimara — Systems for small nonprofits</title>
        <meta name="description" content="Learn how Nimara's five-tier model and two engagement paths help Canadian nonprofits build lasting operational systems." />
        <meta name="keywords" content="nonprofit consulting process, nonprofit tier assessment, nonprofit system building, organizational health tiers, nonprofit engagement models" />
        
        <link rel="canonical" href="https://nimara.ca/how-nimara-works" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="How Nimara Works | Nimara — Systems for small nonprofits" />
        <meta property="og:description" content="Learn how Nimara's five-tier model and two engagement paths help Canadian nonprofits build lasting operational systems." />
        <meta property="og:url" content="https://nimara.ca/how-nimara-works" />
        <meta property="og:image" content="https://nimara.ca/og-image.svg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Nimara Works | Nimara — Systems for small nonprofits" />
        <meta name="twitter:description" content="Learn how Nimara's five-tier model and two engagement paths help Canadian nonprofits build lasting operational systems." />
        <meta name="twitter:image" content="https://nimara.ca/og-image.svg" />
      </Helmet>
      
      <Header />
      
      <main id="main" style={{ paddingTop: 'calc(var(--announcement-height, 0px) + 4rem)' }}>
        <HowItWorksHero />
        <HealthCheckRule />
        <div id="tier-section">
          <TheNimaraModel />
        </div>
        <YourJourney />
        <QualityAndRefundsAlt />
        <Glossary />
      </main>
      
      <Footer />
    </div>
  );
};

export default HowNimaraWorks;
