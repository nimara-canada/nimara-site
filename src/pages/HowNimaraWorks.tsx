import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheNimaraModel } from "@/components/company/TheNimaraModel";
import HowItWorksHero from "@/components/company/HowItWorksHero";

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
      
      <main id="main">
        <HowItWorksHero />
        
        {/* Subtle visual connector */}
        <div className="relative -mt-1 bg-white">
          <div className="absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-white/0 to-white pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="flex items-center justify-center py-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-px h-12 bg-gradient-to-b from-slate-200 to-slate-300" />
                <div className="w-2 h-2 rounded-full bg-slate-300 animate-pulse" />
                <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-slate-200" />
              </div>
            </div>
          </div>
        </div>
        
        <TheNimaraModel />
      </main>
      
      <Footer />
    </div>
  );
};

export default HowNimaraWorks;
