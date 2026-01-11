import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

export const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-nim-navy">
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
          className="bg-white text-nim-navy hover:bg-white/90 px-10 py-7 text-lg font-semibold rounded-full transition-all duration-300"
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
