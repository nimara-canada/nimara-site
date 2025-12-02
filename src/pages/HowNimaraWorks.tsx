import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheNimaraModel } from "@/components/company/TheNimaraModel";
import HowItWorksHero from "@/components/company/HowItWorksHero";
import { ChevronDown } from "lucide-react";

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
        
        {/* Subtle visual connector with arrows */}
        <div className="relative -mt-1 bg-white">
          <div className="absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-white/0 to-white pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="flex items-center justify-center py-8">
              <div className="flex flex-col items-center gap-1">
                {/* Animated arrows pointing down */}
                <div className="flex flex-col items-center animate-bounce">
                  <ChevronDown className="w-5 h-5 text-slate-400" strokeWidth={2} />
                  <ChevronDown className="w-5 h-5 text-slate-400 -mt-3" strokeWidth={2} />
                </div>
                
                {/* Vertical line */}
                <div className="w-px h-8 bg-gradient-to-b from-slate-300 to-slate-400" />
                
                {/* Pulsing dot */}
                <div className="w-3 h-3 rounded-full bg-slate-400 animate-pulse shadow-sm" />
                
                {/* Vertical line */}
                <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-slate-300" />
                
                {/* Bottom arrows */}
                <div className="flex flex-col items-center animate-bounce" style={{ animationDelay: '0.15s' }}>
                  <ChevronDown className="w-5 h-5 text-slate-400 -mb-3" strokeWidth={2} />
                  <ChevronDown className="w-5 h-5 text-slate-400" strokeWidth={2} />
                </div>
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
