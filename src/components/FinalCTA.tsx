import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

export const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        {/* Card */}
        <div className="bg-background rounded-2xl border border-border/50 shadow-soft p-8 sm:p-12 md:p-16 text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Ready to start?
          </h2>
          
          {/* Subtext */}
          <p className="text-muted-foreground text-base sm:text-lg mb-8">
            Pick one: talk to us, or take the quick check.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
            <Button asChild size="lg" className="w-full sm:w-auto gap-2">
              <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a free call
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Take the free 6-minute check →
            </a>
          </div>
          
          {/* Helper line */}
          <p className="text-xs text-muted-foreground/70">
            Built for teams with 0–50 staff in Canada.
          </p>
        </div>
      </div>
    </section>
  );
};
