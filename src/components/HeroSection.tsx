import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle2, MoreHorizontal } from "lucide-react";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Rotating text state
  const [wordIndex, setWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const words = ["Fundable", "Compliant", "Impactful"];

  useEffect(() => {
    // Card entry animation with slight delay to ensure browser paints initial state
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Text rotation interval
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsFading(false);
      }, 300); // Wait for fade out transition to complete
    }, 3000); // Change word every 3 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative bg-secondary-background text-primary-foreground overflow-hidden min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary rounded-full blur-[128px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent rounded-full blur-[128px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:items-center">
          {/* LEFT: TYPOGRAPHY & ACTION */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-accent uppercase mb-4">
              For Canadian nonprofits & charities
            </p>
            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-primary-foreground mb-8 leading-tight">
              Close the gaps that keep you{" "}
              <span
                className={`text-accent inline-block transition-all duration-300 ease-in-out transform ${
                  isFading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
              >
                {words[wordIndex]}
              </span>
            </h1>

            <p className="text-xl text-primary-foreground/70 mb-10 max-w-2xl leading-relaxed">
              We install the files that pass audits and satisfy funders—board rules, money tracking, staff folders. Done
              in 14 days or your money back
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-background hover:text-foreground border-0 font-bold px-8 shadow-lg shadow-accent/20"
                asChild
              >
                <a href="#capacity-check">Get Your Health Score</a>
              </Button>

              <button
                type="button"
                className="text-sm font-semibold text-primary-foreground/60 hover:text-primary-foreground underline-offset-4 hover:underline px-2 transition-colors"
              >
                Watch 2-minute overview
              </button>
            </div>

            {/* Subtle Social Proof */}
            <div className="flex items-center gap-8 border-t border-primary-foreground/10 pt-6">
              <div>
                <p className="text-2xl font-bold text-primary-foreground">6 weeks</p>
                <p className="text-xs text-primary-foreground/60 uppercase tracking-wide">Typical close out</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">100%</p>
                <p className="text-xs text-primary-foreground/60 uppercase tracking-wide">Fix or refund</p>
              </div>
            </div>
          </div>

          {/* RIGHT: THE PROOF VISUAL (Dashboard Card) */}
          <div
            className={`relative lg:justify-self-end w-full max-w-[500px] transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
          >
            {/* Glassy Back Card (Offset Layer) */}
            <div className="absolute inset-0 bg-primary-foreground/5 backdrop-blur-md rounded-[2.5rem] transform translate-x-4 translate-y-4 border border-primary-foreground/10" />

            {/* Main Card */}
            <div className="bg-card rounded-[2.5rem] shadow-2xl p-8 sm:p-10 relative z-10">
              {/* Card Header */}
              <div className="flex items-start justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <span className="font-bold text-primary text-2xl">N</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground text-lg leading-tight">Organization Health</h3>
                    <p className="text-[11px] text-muted-foreground font-bold tracking-widest uppercase mt-1">
                      Capacity Snapshot
                    </p>
                  </div>
                </div>
                <button className="text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                  <MoreHorizontal className="w-6 h-6" />
                </button>
              </div>

              {/* Health Indicators List */}
              <div className="space-y-8">
                {[
                  { label: "Governance & Board", status: "Healthy" },
                  { label: "Financial Systems", status: "Healthy" },
                  { label: "HR & Compliance", status: "Healthy" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`group transition-all duration-1000 transform ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                    style={{
                      transitionDelay: `${600 + i * 200}ms`,
                      transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-card-foreground font-bold text-sm">{item.label}</span>

                      <div
                        className={`flex items-center gap-1.5 bg-accent/20 px-3 py-1 rounded-full transition-all duration-500 origin-center ${
                          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                        }`}
                        style={{
                          transitionDelay: `${900 + i * 200}ms`,
                          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                        }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] font-bold text-accent-foreground uppercase tracking-wider">
                          {item.status}
                        </span>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-accent rounded-full transition-all duration-1000 ease-out w-full transform origin-left ${isVisible ? "scale-x-100" : "scale-x-0"}`}
                        style={{ transitionDelay: `${800 + i * 200}ms` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div
                className={`mt-10 pt-8 border-t border-border flex items-end justify-between transition-all duration-700 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "1400ms" }}
              >
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
                    Fundability Score
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wide">Ready for funding</span>
                  </div>
                </div>
                <div className="text-right leading-none">
                  <span className="text-6xl font-bold text-card-foreground tracking-tighter">92</span>
                  <span className="text-xl text-muted-foreground font-medium ml-1">/100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
