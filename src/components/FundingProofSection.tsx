import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

const FundingProofSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect - headline moves slower than scroll
  const headlineY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-28 overflow-hidden relative"
      aria-labelledby="funding-proof-heading"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Big Headline with Parallax */}
          <ScrollReveal>
            <motion.h2 
              id="funding-proof-heading"
              style={{ y: headlineY }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-muted-foreground leading-tight"
            >
              Funding doesn't follow hustle.
              <br />
              <span className="text-foreground">It follows proof.</span>
            </motion.h2>
          </ScrollReveal>

          {/* Right - Body Text */}
          <ScrollReveal delay={150}>
            <div className="space-y-6">
              <p className="text-lg md:text-xl font-medium text-foreground">
                Good work isn't enough. Funders need to see it.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                When files are scattered and decisions aren't tracked, funders pause.
                <br />
                Not because your mission is weak — but because it's hard to follow.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We help you build the systems that make proof easy to find.
              </p>

              <div className="pt-4 flex flex-col items-start gap-3">
                <Button asChild size="lg">
                  <a 
                    href="https://calendly.com/thabani-nimara/fit-call"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a 20-min Fit Call →
                  </a>
                </Button>
                <a 
                  href="https://form.typeform.com/to/hpY1Ikmr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Or try the Free Health Check →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FundingProofSection;
