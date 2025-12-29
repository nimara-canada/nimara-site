import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CompanyFinalCTA = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
          Ready to get <span className="italic">system-strong</span>?
        </h2>
        
        <p className="text-lg sm:text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-10">
          Book a free 15-minute discovery call. We'll figure out if Nimara is the right fit—no pressure, no pitch.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            asChild
            className="w-full sm:w-auto px-8 h-14 text-base font-semibold"
          >
            <a href="https://calendly.com/hello-nimara/nohc-intake-call" target="_blank" rel="noopener noreferrer">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="w-full sm:w-auto px-8 h-14 text-base font-semibold bg-secondary-foreground/10 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/20 hover:text-secondary-foreground"
          >
            <a href="mailto:hello@nimara.ca">
              Email Us Instead
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
