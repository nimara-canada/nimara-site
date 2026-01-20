import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
const cards = [{
  title: "Clarity",
  description: "A shared system everyone follows.",
  microLine: "Decisions, roles, and files stay consistent.",
  bgClass: "bg-background",
  textClass: "text-foreground",
  subtextClass: "text-foreground/80"
}, {
  title: "Control",
  description: "Tracking that stays clean.",
  microLine: "Money, work, donors, and volunteers stay up to date.",
  bgClass: "bg-[hsl(var(--nim-purple))]",
  textClass: "text-white",
  subtextClass: "text-white/80"
}, {
  title: "Proof",
  description: "A complete story for funders.",
  microLine: "What was done, what was spent, and what was delivered.",
  bgClass: "bg-[hsl(var(--nim-mint))]",
  textClass: "text-[hsl(var(--nim-navy))]",
  subtextClass: "text-[hsl(var(--nim-navy))]/70"
}];
const WithNimara = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Track scroll progress through the section
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate Y transforms for each card based on scroll progress
  const card2Y = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
  const card3Y = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]);

  // Reduced motion fallback - show cards stacked normally
  if (prefersReducedMotion) {
    return <section className="bg-[#f5f5f0]">
        {cards.map((card, index) => <div key={index} className={`${card.bgClass} min-h-[60vh] flex items-center justify-center px-6 py-20`}>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className={`text-3xl md:text-5xl font-bold mb-6 ${card.textClass}`}>
                {card.title}
              </h3>
              <p className={`text-xl md:text-2xl leading-relaxed ${card.subtextClass}`}>
                {card.description}
              </p>
            </div>
          </div>)}
      </section>;
  }
  return <section ref={containerRef} className="relative bg-[#f5f5f0]" style={{
    height: `${cards.length * 100}vh`
  }}>
      {/* Sticky container that pins during scroll */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Cards container */}
        <div className="relative h-full w-full">
          {/* Card 1 - Base layer (Navy) */}
          <div className="absolute inset-0" style={{
          zIndex: 1
        }}>
            <FullScreenCard card={cards[0]} />
          </div>

          {/* Card 2 - Slides up (Purple) */}
          {isMounted && <motion.div className="absolute inset-0" style={{
          zIndex: 2,
          y: card2Y,
          willChange: "transform"
        }}>
              <FullScreenCard card={cards[1]} />
            </motion.div>}

          {/* Card 3 - Slides up (Mint) */}
          {isMounted && <motion.div className="absolute inset-0" style={{
          zIndex: 3,
          y: card3Y,
          willChange: "transform"
        }}>
              <FullScreenCard card={cards[2]} />
            </motion.div>}
        </div>
      </div>
    </section>;
};
interface FullScreenCardProps {
  card: {
    title: string;
    description: string;
    microLine: string;
    bgClass: string;
    textClass: string;
    subtextClass: string;
  };
}
const FullScreenCard = ({
  card
}: FullScreenCardProps) => {
  return <div className={`h-full w-full ${card.bgClass} flex items-center justify-center px-6 md:px-12`}>
      <div className="max-w-4xl mx-auto text-center">
        <p className={`text-sm md:text-base uppercase tracking-widest mb-4 md:mb-6 ${card.subtextClass}`}>WITH NIMARA, YOU GET</p>
        <h3 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 ${card.textClass}`}>
          {card.title}
        </h3>
        <p className={`text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-2xl mx-auto mb-4 ${card.subtextClass}`}>
          {card.description}
        </p>
        <p className={`text-lg md:text-xl leading-relaxed max-w-2xl mx-auto ${card.subtextClass} opacity-80`}>
          {card.microLine}
        </p>
      </div>
    </div>;
};
export default WithNimara;