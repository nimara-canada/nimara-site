import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewConsultantHero } from "@/components/consultant/NewConsultantHero";
import { NewWhyJoin } from "@/components/consultant/NewWhyJoin";
import { NewWorkTypes } from "@/components/consultant/NewWorkTypes";
import { NewWhoWeWant } from "@/components/consultant/NewWhoWeWant";
import { NewHowItWorks } from "@/components/consultant/NewHowItWorks";
import { NewTestimonials } from "@/components/consultant/NewTestimonials";
import { NewPrimaryCTA } from "@/components/consultant/NewPrimaryCTA";
import { NewComingSoon } from "@/components/consultant/NewComingSoon";
import { NewTrustLine } from "@/components/consultant/NewTrustLine";

const Consultants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>For Consultants | Nimara — Consultant Roster (Canada)</title>
        <meta name="description" content="We're building a small, high-signal roster of independent consultants for Canadian nonprofits. Submit interest to join the waitlist or check eligibility. PM oversight, clear briefs, net-15." />
        
        <link rel="canonical" href="https://nimara.ca/consultants" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="For Consultants | Nimara — Consultant Roster (Canada)" />
        <meta property="og:description" content="We're building a small, high-signal roster of independent consultants for Canadian nonprofits. Submit interest to join the waitlist or check eligibility. PM oversight, clear briefs, net-15." />
        <meta property="og:url" content="https://nimara.ca/consultants" />
        <meta property="og:image" content="https://nimara.ca/og.jpg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="For Consultants | Nimara — Consultant Roster (Canada)" />
        <meta name="twitter:description" content="We're building a small, high-signal roster of independent consultants for Canadian nonprofits. Submit interest to join the waitlist or check eligibility. PM oversight, clear briefs, net-15." />
        <meta name="twitter:image" content="https://nimara.ca/og.jpg" />
      </Helmet>
      <Header activeRoute="/consultants" />
      
      <main id="main" className="pb-20 md:pb-0">
        <NewConsultantHero />
        <NewWhyJoin />
        <NewWorkTypes />
        <NewWhoWeWant />
        <NewHowItWorks />
        <NewTestimonials />
        <NewPrimaryCTA />
        <NewComingSoon />
        <NewTrustLine />
      </main>
      <Footer />
    </div>
  );
};

export default Consultants;
