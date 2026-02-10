import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const NimaraLoop = () => {
  const steps = [
    { title: "Quick check", detail: "6 minutes (free)" },
    { title: "Pick one area", detail: "Board • Money & grants • Files • Team" },
    { title: "We build it with you", detail: "Templates + simple routines" },
    { title: "You move up a level", detail: "Tier 0 → Tier 4 over time" },
  ];

  return (
    <section 
      className="py-24 md:py-32 lg:py-40 bg-background"
      aria-labelledby="progress-heading"
    >
      <div className="container max-w-4xl mx-auto px-4">
        {/* Label */}
        <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase text-center mb-4">
          How Progress Works
        </p>

        {/* H2 */}
        <h2 
          id="progress-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 tracking-tight"
        >
          Move up one level at a time.
        </h2>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 md:mb-20">
          Pick one area. Fix it. Use it every month.
        </p>

        {/* Stepper */}
        <div className="mb-16 md:mb-20">
          {/* Desktop: Horizontal stepper */}
          <ol 
            className="hidden md:flex items-start justify-between relative"
            aria-label="Progress steps"
          >
            {/* Connecting line */}
            <div 
              className="absolute top-3 left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-border"
              aria-hidden="true"
            />
            
            {steps.map((step, index) => (
              <li 
                key={index} 
                className="flex flex-col items-center text-center relative z-10 w-1/4"
              >
                {/* Dot */}
                <div className="w-6 h-6 rounded-full bg-primary mb-4 shadow-sm" aria-hidden="true" />
                
                {/* Content */}
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground max-w-[140px]">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>

          {/* Mobile: Vertical stepper */}
          <ol 
            className="md:hidden space-y-0 relative"
            aria-label="Progress steps"
          >
            {/* Vertical connecting line */}
            <div 
              className="absolute top-3 bottom-3 left-3 w-px bg-border"
              aria-hidden="true"
            />
            
            {steps.map((step, index) => (
              <li 
                key={index} 
                className="flex items-start gap-5 relative py-5 first:pt-0 last:pb-0"
              >
                {/* Dot */}
                <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 relative z-10 shadow-sm" aria-hidden="true" />
                
                {/* Content */}
                <div className="pt-0.5">
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
            variant="ghost" 
            className="text-muted-foreground hover:text-foreground"
            asChild
          >
            <a href="/capacity-buildout">
              Book a free call
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        {/* Footnote */}
        <p className="text-sm text-muted-foreground text-center">
          Built for teams with 0–50 staff in Canada.
        </p>
      </div>
    </section>
  );
};

export default NimaraLoop;
