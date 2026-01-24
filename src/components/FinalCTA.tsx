import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

export const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 bg-nim-navy">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-black text-primary-foreground mb-6 sm:mb-8 md:mb-10 lg:mb-12 tracking-[-0.04em] leading-[0.95] uppercase">
          READY TO GET ORGANIZED?
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>START WITH ONE AREA.
        </h2>
        
        {/* Button */}
        <Button 
          asChild 
          size="lg" 
          variant="secondary"
          className="w-full sm:w-auto bg-white text-nim-navy hover:bg-white/90 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 lg:py-7 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300"
        >
          <a href={TYPEFORM_HEALTH_CHECK_URL} target="_blank" rel="noopener noreferrer">
            Take the free check
            <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </section>
  );
};
