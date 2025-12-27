import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ResourceSectionProps {
  title: string;
  subhead: string;
  bullets: string[];
  typeformUrl: string;
  calendlyUrl?: string;
}

export function ResourceSection({
  title,
  subhead,
  bullets,
  typeformUrl,
  calendlyUrl,
}: ResourceSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column - Copy (3 cols) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Title area */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-5 leading-tight tracking-tight">
                {title}
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                {subhead}
              </p>
            </div>

            {/* What You Get */}
            <div className="pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                What you get
              </h3>
              <ul className="space-y-4" role="list" aria-label="Features">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mt-0.5 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors">
                      <Check className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    </span>
                    <span className="text-foreground/90 text-base md:text-lg leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - CTA Card (2 cols) */}
          <div className="lg:col-span-2">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card rounded-2xl p-8 md:p-10 border border-border/50 shadow-soft">
                <div className="text-center space-y-6">
                  {/* Tag */}
                  <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full bg-gradient-to-r from-primary/15 to-primary/5 text-primary border border-primary/10">
                    <Sparkles className="w-3.5 h-3.5" />
                    Free template
                  </span>

                  {/* What's included */}
                  <div className="py-4 border-y border-border/50">
                    <p className="text-sm text-muted-foreground mb-3">Includes:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {["Excel tracker", "Step-by-step guide", "5-min video"].map((item) => (
                        <span key={item} className="text-xs font-medium text-foreground/80 px-3 py-1.5 bg-secondary/80 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Primary CTA */}
                  <Button
                    asChild
                    className="w-full h-14 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                    size="lg"
                  >
                    <a href={typeformUrl} className="flex items-center justify-center gap-2">
                      Get the free tracker
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>

                  {/* Privacy note */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We'll email you the download links. Unsubscribe anytime.
                  </p>

                  {/* Secondary CTA */}
                  {calendlyUrl && (
                    <div className="pt-2">
                      <a
                        href={calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary/80 hover:text-primary transition-colors font-medium"
                      >
                        Prefer to talk first? Book a 15-minute call
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
