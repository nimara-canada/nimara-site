import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

export const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-primary">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-10 md:mb-12 tracking-tight leading-tight">
          Ready to get organized?
          <br />
          Start with one area.
        </h2>
        
        {/* Button */}
        <Button 
          asChild 
          size="lg" 
          variant="secondary"
          className="bg-accent text-primary hover:bg-accent/90 px-10 py-7 text-lg font-semibold rounded-full shadow-[0_0_30px_rgba(172,252,227,0.4)] hover:shadow-[0_0_40px_rgba(172,252,227,0.6)] transition-all duration-300 hover:scale-105"
        >
          <a href={TYPEFORM_HEALTH_CHECK_URL} target="_blank" rel="noopener noreferrer">
            Take the free check
            <ArrowRight className="ml-3 w-5 h-5" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </section>
  );
};
