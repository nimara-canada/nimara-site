import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";

function App() {
  return <div />;
}

function Home() {
  return (
    <>
      <Helmet>
        <title>Nimara | Premium Nonprofit Consulting in Canada — Get 3 Quotes in 72 Hours</title>
        <meta
          name="description"
          content="Nimara matches Canadian nonprofits with vetted consultants for audit-ready delivery. Edmonton-based, serving Alberta and Canada. Get 3 quotes in 72 hours."
        />
        <link rel="canonical" href="https://nimara.ca/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context":"https://schema.org",
            "@type":"LocalBusiness",
            "name":"Nimara",
            "url":"https://nimara.ca",
            "logo":"https://nimara.ca/logo.png",
            "image":"https://nimara.ca/og-image.jpg",
            "description":"Premium nonprofit consulting — get 3 quotes in 72 hours.",
            "address":{"@type":"PostalAddress","addressLocality":"Edmonton","addressRegion":"AB","addressCountry":"CA"},
            "areaServed":"CA",
            "email":"hello@nimara.ca"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"What is Nimara?","acceptedAnswer":{"@type":"Answer","text":"Nimara is a Canadian nonprofit consulting platform that matches charities with vetted experts and delivers audit-ready work."}},
              {"@type":"Question","name":"Where do you operate?","acceptedAnswer":{"@type":"Answer","text":"We’re based in Edmonton and serve nonprofits across Alberta and Canada."}},
              {"@type":"Question","name":"How fast are quotes?","acceptedAnswer":{"@type":"Answer","text":"You’ll get three comparable quotes within 72 hours."}}
            ]
          })}
        </script>
      </Helmet>

      <section>
        <p><strong>Nimara</strong> is an <strong>Edmonton-based nonprofit consulting</strong> platform serving <strong>Alberta and Canada</strong>.</p>
        <p>Get <strong>three Nimara consulting quotes</strong> in <strong>72 hours</strong> across governance, finance, and systems—delivered audit-ready.</p>
      </section>

      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    </>
  );
}

export default Home;