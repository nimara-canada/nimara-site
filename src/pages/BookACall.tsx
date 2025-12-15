import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const BookACall = () => {
  const scrollToScheduler = () => {
    const scheduler = document.getElementById("scheduler");
    scheduler?.scrollIntoView({ behavior: "smooth" });
  };

  const bullets = [
    "Listen to what's happening (the one urgent problem)",
    "Ask a few quick questions so we don't guess",
    "Tell you the best next step (and timing)",
    "Leave you with a clear plan for the next 7 days",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Urgent Help Call | Nimara</title>
        <meta name="description" content="Tell us what's going on. We'll help you choose the fastest fix." />
        
        <link rel="canonical" href="https://nimara.ca/book-a-call" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="Urgent Help Call | Nimara" />
        <meta property="og:description" content="Tell us what's going on. We'll help you choose the fastest fix." />
        <meta property="og:url" content="https://nimara.ca/book-a-call" />
        <meta property="og:image" content="https://nimara.ca/og.jpg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Urgent Help Call | Nimara" />
        <meta name="twitter:description" content="Tell us what's going on. We'll help you choose the fastest fix." />
        <meta name="twitter:image" content="https://nimara.ca/og.jpg" />
      </Helmet>
      <Header activeRoute="/book-a-call" />

      {/* Hero + Bullets + CTA */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
            Urgent help call{" "}
            <span className="text-muted-foreground font-normal">(15–30 minutes)</span>
          </h1>
          
          {/* Subhead */}
          <p className="text-lg md:text-xl text-body leading-relaxed mb-12">
            Tell us what's going on. We'll help you choose the fastest fix.
          </p>

          {/* What we'll do */}
          <div className="text-left mb-10">
            <h2 className="text-sm tracking-widest text-muted-foreground uppercase mb-6 text-center">
              What we'll do on the call
            </h2>
            <ul className="space-y-4 max-w-md mx-auto">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </span>
                  <span className="text-body leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Primary CTA */}
          <Button 
            size="lg" 
            onClick={scrollToScheduler} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium"
          >
            Schedule my urgent help call →
          </Button>
        </div>
      </section>

      {/* Scheduler */}
      <section id="scheduler" className="py-16 md:py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-10">
            Pick a time
          </h2>

          <div className="bg-background rounded-2xl border border-border overflow-hidden">
            <div className="w-full" style={{ minHeight: "680px" }}>
              <iframe
                src="https://calendly.com/hello-nimara/30min"
                width="100%"
                height="680"
                frameBorder="0"
                title="Book an urgent help call"
                className="w-full"
              />
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Times show in your local timezone
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookACall;
