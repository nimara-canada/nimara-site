import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const cards = [
  {
    title: "Find proof fast",
    description: "Receipts, approvals, and reports stay organized so you're not scrambling.",
  },
  {
    title: "Stay funder-ready",
    description: "Simple routines keep your records clean and easy to show.",
  },
  {
    title: "Hand over a system",
    description: "We set it up. Your team runs it without us.",
  },
];

const WithNimara = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate Y transforms for each card based on scroll progress
  // Card 1: Always at 0 (base layer)
  // Card 2: Moves from 100% to 0% during first half of scroll
  // Card 3: Moves from 100% to 0% during second half of scroll
  const card2Y = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
  const card3Y = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]);

  // Reduced motion fallback - show cards stacked normally
  if (prefersReducedMotion) {
    return (
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-16 md:mb-20">
            With Nimara, you can
          </h2>
          <div className="space-y-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  {card.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-background"
      style={{ height: `${cards.length * 100}vh` }}
    >
      {/* Sticky container that pins during scroll */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section heading - pinned at top */}
        <div className="absolute top-0 left-0 right-0 z-50 pt-16 md:pt-20 pb-8 bg-gradient-to-b from-background via-background to-transparent pointer-events-none">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center">
            With Nimara, you can
          </h2>
        </div>

        {/* Cards container */}
        <div className="relative h-full w-full">
          {/* Card 1 - Base layer, always visible */}
          <div
            className="absolute inset-0 flex items-center justify-center p-6 md:p-12"
            style={{ zIndex: 1 }}
          >
            <CardContent card={cards[0]} />
          </div>

          {/* Card 2 - Slides up over Card 1 */}
          {isMounted && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-6 md:p-12"
              style={{ 
                zIndex: 2,
                y: card2Y,
                willChange: "transform",
              }}
            >
              <CardContent card={cards[1]} />
            </motion.div>
          )}

          {/* Card 3 - Slides up over Card 2 */}
          {isMounted && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-6 md:p-12"
              style={{ 
                zIndex: 3,
                y: card3Y,
                willChange: "transform",
              }}
            >
              <CardContent card={cards[2]} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

interface CardContentProps {
  card: {
    title: string;
    description: string;
  };
}

const CardContent = ({ card }: CardContentProps) => {
  return (
    <div className="w-full max-w-[980px] bg-card rounded-2xl md:rounded-3xl p-8 md:p-16 lg:p-20 shadow-lg border border-border/50">
      <div className="text-center">
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 md:mb-6">
          {card.title}
        </h3>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default WithNimara;
