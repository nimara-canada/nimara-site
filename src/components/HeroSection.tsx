import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Fundable", "Compliant", "Impactful"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px]">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/40 to-transparent blur-3xl animate-float" />
        </div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px]">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-muted/40 to-transparent blur-3xl animate-float-reverse" />
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-block mb-8 animate-fade-in">
              <div className="flex items-center gap-3 px-5 py-2.5 bg-card rounded-full shadow-sm border border-border">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: "200ms" }} />
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: "400ms" }} />
                </div>
                <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                  Trusted by 200+ Canadian Nonprofits
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-foreground leading-[1.05] mb-8 animate-fade-in">
              Close the gaps
              <br />
              that keep you
              <br />
              <span className="relative inline-flex items-baseline">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/10 blur-2xl" />
                <span className="relative font-normal bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                  {words[currentWordIndex]}
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light animate-fade-in">
              We install the files that pass audits and satisfy funders—
              <span className="text-foreground font-normal">board rules</span>,{" "}
              <span className="text-foreground font-normal">money tracking</span>,{" "}
              <span className="text-foreground font-normal">staff folders</span>.
            </p>

            {/* CTAs */}
            <div className="space-y-4 mb-16 animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Get Your Health Score
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <div className="relative w-5 h-5 mr-2">
                    <div className="absolute inset-0 bg-muted-foreground/20 rounded-full animate-ping" />
                    <Play className="relative w-5 h-5" />
                  </div>
                  Watch Overview
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 animate-fade-in">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extralight text-foreground">6</span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">weeks</span>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extralight text-foreground">100%</span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">guarantee</span>
              </div>
            </div>
          </div>

          {/* Right: Dashboard */}
          <div className="relative animate-scale-in">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-muted/20 rounded-3xl blur-2xl opacity-50" />

            {/* Card */}
            <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
              {/* Header */}
              <div className="px-8 pt-8 pb-6 border-b border-border bg-gradient-to-b from-muted/50 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary rounded-2xl flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-2xl">N</span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-card animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Health Dashboard</h3>
                      <p className="text-xs text-muted-foreground font-medium mt-0.5">Live monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">LIVE</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                {/* Metrics */}
                <div className="space-y-8">
                  {/* Metric 1 */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📋</span>
                        <span className="text-sm font-medium text-foreground">Governance & Board</span>
                      </div>
                      <span className="text-sm font-bold text-foreground tabular-nums">98%</span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary rounded-full"
                        style={{ width: "98%" }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-shimmer" />
                      </div>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">💰</span>
                        <span className="text-sm font-medium text-foreground">Financial Systems</span>
                      </div>
                      <span className="text-sm font-bold text-foreground tabular-nums">92%</span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        style={{ width: "92%" }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-shimmer" />
                      </div>
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">👥</span>
                        <span className="text-sm font-medium text-foreground">HR & Compliance</span>
                      </div>
                      <span className="text-sm font-bold text-foreground tabular-nums">88%</span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                        style={{ width: "88%" }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-shimmer" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Score */}
                <div className="mt-10 pt-8 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        Overall Score
                      </p>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm font-semibold text-foreground">Funding Ready</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-6xl font-extralight text-foreground">92</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
