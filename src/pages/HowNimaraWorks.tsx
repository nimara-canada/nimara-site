import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HowWeWork } from "@/components/company/HowWeWork";

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
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary-background/5 to-background overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              How Nimara Works
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A simple but strict model for matching nonprofits with the right support
            </p>
          </div>
        </section>

        <HowWeWork />
      </main>
      
      <Footer />
    </div>
  );
};

export default HowNimaraWorks;
