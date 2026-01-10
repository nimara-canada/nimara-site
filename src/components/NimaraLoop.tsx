import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const NimaraLoop = () => {
  return (
    <section 
      className="py-20 md:py-32 bg-background"
      aria-labelledby="nimara-loop-heading"
    >
      <div className="container max-w-5xl mx-auto px-4">
        {/* Headline */}
        <h2 
          id="nimara-loop-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12 md:mb-16"
        >
          Feel like you're always catching up?
        </h2>

        {/* Loop Graphic */}
        <div 
          className="relative w-full max-w-3xl mx-auto mb-12 md:mb-16"
          role="img"
          aria-label="The Nimara Loop: a continuous improvement cycle with four steps"
        >
          {/* Desktop/Tablet: Horizontal oval */}
          <div className="hidden md:block">
            <svg 
              viewBox="0 0 700 280" 
              className="w-full h-auto"
              aria-hidden="true"
            >
              {/* Outer oval track */}
              <ellipse 
                cx="350" 
                cy="140" 
                rx="320" 
                ry="110" 
                fill="none" 
                stroke="hsl(var(--primary))" 
                strokeWidth="3"
                className="opacity-20"
              />
              
              {/* Inner oval track */}
              <ellipse 
                cx="350" 
                cy="140" 
                rx="280" 
                ry="80" 
                fill="hsl(var(--primary))" 
                className="opacity-10"
              />
              <ellipse 
                cx="350" 
                cy="140" 
                rx="280" 
                ry="80" 
                fill="none" 
                stroke="hsl(var(--primary))" 
                strokeWidth="2"
              />

              {/* Arrows on the track */}
              {/* Top-left arrow */}
              <path 
                d="M 180 75 L 195 65 L 195 85 Z" 
                fill="hsl(var(--primary))"
              />
              {/* Top-right arrow */}
              <path 
                d="M 520 75 L 535 65 L 535 85 Z" 
                fill="hsl(var(--primary))"
              />
              {/* Bottom-right arrow */}
              <path 
                d="M 520 205 L 505 215 L 505 195 Z" 
                fill="hsl(var(--primary))"
              />
              {/* Bottom-left arrow */}
              <path 
                d="M 180 205 L 165 215 L 165 195 Z" 
                fill="hsl(var(--primary))"
              />
            </svg>

            {/* Labels positioned around the loop */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Step 1: Top-left */}
              <div className="absolute top-0 left-8 md:left-12 lg:left-16 max-w-[140px] text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-2">1</span>
                <p className="text-sm md:text-base font-medium text-foreground leading-tight">Check where you stand</p>
              </div>

              {/* Step 2: Top-right */}
              <div className="absolute top-0 right-4 md:right-8 lg:right-12 max-w-[160px] text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-2">2</span>
                <p className="text-sm md:text-base font-medium text-foreground leading-tight">Fix one area <span className="text-muted-foreground">(Board / Money & Grants / Files)</span></p>
              </div>

              {/* Step 3: Bottom-right */}
              <div className="absolute bottom-0 right-8 md:right-16 lg:right-24 max-w-[140px] text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-2">3</span>
                <p className="text-sm md:text-base font-medium text-foreground leading-tight">Use it every month</p>
              </div>

              {/* Step 4: Bottom-left */}
              <div className="absolute bottom-0 left-4 md:left-8 lg:left-12 max-w-[160px] text-center">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-2">4</span>
                <p className="text-sm md:text-base font-medium text-foreground leading-tight">Add the next area <span className="text-muted-foreground">(move up a level)</span></p>
              </div>
            </div>
          </div>

          {/* Mobile: Vertical stacked steps */}
          <div className="md:hidden">
            <ol className="relative border-l-2 border-primary/30 ml-4 space-y-8" aria-label="The Nimara Loop steps">
              {[
                { num: 1, text: "Check where you stand" },
                { num: 2, text: "Fix one area", sub: "(Board / Money & Grants / Files)" },
                { num: 3, text: "Use it every month" },
                { num: 4, text: "Add the next area", sub: "(move up a level)" },
              ].map((step, index) => (
                <li key={step.num} className="pl-6 relative">
                  <span className="absolute -left-4 top-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    {step.num}
                  </span>
                  <p className="text-base font-medium text-foreground">
                    {step.text}
                    {step.sub && <span className="text-muted-foreground block text-sm">{step.sub}</span>}
                  </p>
                  {index < 3 && (
                    <div className="absolute -left-[9px] top-10 text-primary" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 12L4 8h8L8 12z" />
                      </svg>
                    </div>
                  )}
                </li>
              ))}
              {/* Loop back arrow */}
              <li className="pl-6 relative" aria-hidden="true">
                <div className="absolute -left-[9px] -top-2 text-primary">
                  <svg width="16" height="24" viewBox="0 0 16 24" fill="currentColor">
                    <path d="M8 0v16M4 12l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground italic">Repeat & level up</p>
              </li>
            </ol>
          </div>
        </div>

        {/* Promise Lines */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3">
            Start with one fix. Make it stick. Then build the next.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Built for teams with 0–50 staff in Canada.
          </p>
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button 
            size="lg" 
            className="w-full sm:w-auto group"
            asChild
          >
            <a href={TYPEFORM_HEALTH_CHECK_URL} target="_blank" rel="noopener noreferrer">
              Take the free 6-minute check
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Button>
          <Button 
            variant="link" 
            className="text-foreground hover:text-primary"
            asChild
          >
            <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a free call
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NimaraLoop;
