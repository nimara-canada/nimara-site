import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewConsultantHero } from "@/components/consultant/NewConsultantHero";
import { NewWhyJoin } from "@/components/consultant/NewWhyJoin";
import { NewWorkTypes } from "@/components/consultant/NewWorkTypes";
import { NewWhoWeWant } from "@/components/consultant/NewWhoWeWant";
import { NewHowItWorks } from "@/components/consultant/NewHowItWorks";

import { NewPrimaryCTA } from "@/components/consultant/NewPrimaryCTA";
import { NewComingSoon } from "@/components/consultant/NewComingSoon";
import { NewTrustLine } from "@/components/consultant/NewTrustLine";

const Consultants = () => {
  return (
    <>
      <Helmet>
        <title>Nimara Consultants — Vetted Nonprofit Experts (Canada)</title>
        <meta
          name="description"
          content="Vetted nonprofit consultants with PM oversight and audit-ready delivery. Request three quotes within 72 hours."
        />
        <link rel="canonical" href="https://nimara.ca/consultants" />
      </Helmet>

      <Header activeRoute="/consultants" />

      <main id="main" className="pb-20 md:pb-0">
        <NewConsultantHero />
        <NewWhyJoin />
        <NewWorkTypes />
        <NewWhoWeWant />
        <NewHowItWorks />
        <NewPrimaryCTA />
        <NewComingSoon />
        <NewTrustLine />
      </main>

      <Footer />
    </>
  );
};

export default Consultants;
