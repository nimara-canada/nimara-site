import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const NimaraLoop = () => {
  const steps = [
    { num: 1, text: "Check where you stand", position: "top-left" },
    { num: 2, text: "Fix one area", position: "top-right" },
    { num: 3, text: "Use it every month", position: "bottom-right" },
    { num: 4, text: "Add the next area", position: "bottom-left" },
  ];

  return (
    <section 
      className="py-20 md:py-32 bg-muted/30"
      aria-labelledby="nimara-loop-heading"
    >
      <div className="container max-w-5xl mx-auto px-4">
        {/* Eyebrow */}
        <p className="text-sm font-semibold tracking-widest text-primary uppercase text-center mb-4">
          The Nimara Approach
        </p>

        {/* Top Headline */}
        <h2 
          id="nimara-loop-heading"
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          Build one system. Make it stick. Then build the next.
        </h2>

        {/* Racetrack Loop Graphic */}
        <div 
          className="relative w-full max-w-3xl mx-auto mb-12 md:mb-16"
          role="img"
          aria-label="The Nimara Loop: a continuous improvement cycle with four steps"
        >
          {/* Desktop/Tablet: Racetrack */}
          <div className="hidden md:block relative">
            {/* The racetrack SVG */}
            <svg 
              viewBox="0 0 600 240" 
              className="w-full h-auto"
              aria-hidden="true"
            >
              {/* Outer track */}
              <rect 
                x="20" 
                y="20" 
                width="560" 
                height="200" 
                rx="100" 
                ry="100"
                fill="hsl(var(--primary))"
                className="opacity-10"
              />
              <rect 
                x="20" 
                y="20" 
                width="560" 
                height="200" 
                rx="100" 
                ry="100"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
              />
              
              {/* Inner track line */}
              <rect 
                x="50" 
                y="50" 
                width="500" 
                height="140" 
                rx="70" 
                ry="70"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                className="opacity-40"
              />

              {/* Directional arrows on the track */}
              {/* Top arrow (going right) */}
              <path 
                d="M 320 35 L 330 30 L 330 40 Z" 
                fill="hsl(var(--primary))"
              />
              {/* Right arrow (going down) */}
              <path 
                d="M 565 130 L 570 120 L 560 120 Z" 
                fill="hsl(var(--primary))"
              />
              {/* Bottom arrow (going left) */}
              <path 
                d="M 280 205 L 270 210 L 270 200 Z" 
                fill="hsl(var(--primary))"
              />
              {/* Left arrow (going up) */}
              <path 
                d="M 35 110 L 30 120 L 40 120 Z" 
                fill="hsl(var(--primary))"
              />
            </svg>

            {/* Labels positioned around the track */}
            {/* Step 1: Top-left */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[12%] -translate-x-1/2 flex flex-col items-center">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-base font-bold mb-2 shadow-lg">
                1
              </span>
              <p className="text-sm font-medium text-foreground text-center max-w-[100px] leading-tight">
                Check where you stand
              </p>
            </div>

            {/* Step 2: Top-right */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[12%] translate-x-1/2 flex flex-col items-center">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-base font-bold mb-2 shadow-lg">
                2
              </span>
              <p className="text-sm font-medium text-foreground text-center max-w-[100px] leading-tight">
                Fix one area
              </p>
            </div>

            {/* Step 3: Bottom-right */}
            <div className="absolute -bottom-8 right-[22%] flex flex-col items-center">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-base font-bold mb-2 shadow-lg">
                3
              </span>
              <p className="text-sm font-medium text-foreground text-center max-w-[100px] leading-tight">
                Use it every month
              </p>
            </div>

            {/* Step 4: Bottom-left */}
            <div className="absolute -bottom-8 left-[22%] flex flex-col items-center">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-base font-bold mb-2 shadow-lg">
                4
              </span>
              <p className="text-sm font-medium text-foreground text-center max-w-[100px] leading-tight">
                Add the next area
              </p>
            </div>
          </div>

          {/* Mobile: Clean vertical flow */}
          <div className="md:hidden">
            <div className="relative bg-primary/5 rounded-3xl border-2 border-primary p-6">
              <ol className="space-y-6" aria-label="The Nimara Loop steps">
                {steps.map((step, index) => (
                  <li key={step.num} className="flex items-start gap-4">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-base font-bold shadow-md">
                      {step.num}
                    </span>
                    <div className="pt-2">
                      <p className="text-base font-medium text-foreground">
                        {step.text}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute left-[29px] mt-12 text-primary/40" aria-hidden="true">
                        <svg width="2" height="16" viewBox="0 0 2 16">
                          <line x1="1" y1="0" x2="1" y2="16" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
              {/* Loop indicator */}
              <div className="mt-6 pt-4 border-t border-primary/20 flex items-center justify-center gap-2 text-primary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 10a7 7 0 0 1 7-7m7 7a7 7 0 0 1-7 7m0 0l2-2m-2 2l-2-2m9-5l2-2m-2 2l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-medium">Repeat & level up</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Headline & Subhead */}
        <div className="text-center mb-10 md:mb-12 mt-16 md:mt-20">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4">
            Start with what matters. Grow from there.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-3">
            You don't need to fix everything at once. One area, done right, builds the foundation for the next.
          </p>
          <p className="text-sm text-muted-foreground">
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
