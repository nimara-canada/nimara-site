import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CALENDLY_BOOKING_URL } from "@/constants/urls";
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
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Big Headline with Parallax */}
          <ScrollReveal>
            <motion.h2 
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FundingProofSection;
