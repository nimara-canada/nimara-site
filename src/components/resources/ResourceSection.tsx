import React from "react";
import { Check } from "lucide-react";
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
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Copy */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
              {title}
            </h2>

            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              {subhead}
            </p>

            {/* What You Get */}
            <div className="mb-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                What you get
              </h3>
              <ul className="space-y-3" role="list" aria-label="Features">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" aria-hidden="true" />
                    </span>
                    <span className="text-foreground/80 text-sm md:text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 shadow-sm">
            <div className="text-center">
              <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full bg-primary/10 text-primary mb-6">
                Free template
              </span>

              <p className="text-foreground font-medium mb-6">
                Excel tracker + guide + short video
              </p>

              <Button
                asChild
                className="w-full h-12 text-base font-semibold mb-4"
                size="lg"
              >
                <a href={typeformUrl}>
                  Get the free tracker
                </a>
              </Button>

              <p className="text-xs text-muted-foreground mb-6">
                We'll email you the download links. Unsubscribe anytime.
              </p>

              {calendlyUrl && (
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                >
                  Prefer to talk first? Book a 15-minute call
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
