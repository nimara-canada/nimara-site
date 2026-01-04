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
                Good work isn't enough. Funders need working systems.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                When money, files, and decisions are hard to track, funders pause.
                <br />
                Not because your mission is weak — but because it's hard to follow.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Nimara helps Canadian nonprofits set up simple systems for money, files, and reporting — so funding is easier to win and manage.
              </p>

              <div className="pt-4 flex flex-col items-start gap-3">
                <Button asChild size="lg">
                  <a href="/start-here">
                    Get Started
                  </a>
                </Button>
                <a 
                  href="/free-check" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Try the free check →
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
