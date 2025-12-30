import { Button } from "@/components/ui/button";
import { CALENDLY_BOOKING_URL } from "@/constants/urls";

const FundingProofSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Big Headline */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-muted-foreground leading-tight">
              Funding doesn't follow hustle.
              <br />
              <span className="text-foreground">It follows proof.</span>
            </h2>
          </div>

          {/* Right - Body Text */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl font-medium text-foreground">
              You can't "fundraise" your way out of messy basics.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              When spending, decisions, and files don't line up, funders pause.
              <br />
              Not because your mission is weak — because the risk feels unclear.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Nimara helps you build simple, funder-ready systems: clear rules, clean records, and reporting that doesn't turn into a panic.
            </p>

            <div className="pt-4">
              <Button asChild size="lg">
                <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingProofSection;
