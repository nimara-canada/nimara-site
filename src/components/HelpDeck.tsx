import { motion, useScroll, useTransform, useSpring, useMotionValue, animate, PanInfo } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";
import { 
  Users, 
  Wallet, 
  UserCog, 
  LayoutGrid, 
  Heart, 
  HandHeart, 
  FolderOpen,
  LucideIcon
} from "lucide-react";

interface CardData {
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  detail: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

const cards: CardData[] = [
  { 
    icon: Users, 
    title: "Board", 
    shortTitle: "Board",
    description: "Decisions, minutes, approvals",
    detail: "Get your board organized with clear agendas, tracked decisions, and easy-to-find minutes.",
    color: "#8B5CF6",
    gradientFrom: "#8B5CF6",
    gradientTo: "#6D28D9"
  },
  { 
    icon: Wallet, 
    title: "Money & Grants", 
    shortTitle: "Money",
    description: "Track spending, find proof",
    detail: "Know where every dollar goes and find grant receipts in seconds, not hours.",
    color: "#10B981",
    gradientFrom: "#10B981",
    gradientTo: "#059669"
  },
  { 
    icon: UserCog, 
    title: "People", 
    shortTitle: "People",
    description: "Roles, hiring, handoffs",
    detail: "Clear job descriptions, smooth onboarding, and handoffs that actually work.",
    color: "#3B82F6",
    gradientFrom: "#3B82F6",
    gradientTo: "#2563EB"
  },
  { 
    icon: LayoutGrid, 
    title: "Programs", 
    shortTitle: "Programs",
    description: "Plans, updates, tracking",
    detail: "Simple dashboards that show what's working and what needs attention.",
    color: "#F97316",
    gradientFrom: "#F97316",
    gradientTo: "#EA580C"
  },
  { 
    icon: Heart, 
    title: "Fundraising", 
    shortTitle: "Fundraising",
    description: "Donors + thank-yous",
    detail: "Keep track of who gave, when to follow up, and never miss a thank-you.",
    color: "#EC4899",
    gradientFrom: "#EC4899",
    gradientTo: "#DB2777"
  },
  { 
    icon: HandHeart, 
    title: "Volunteers", 
    shortTitle: "Volunteers",
    description: "Roles + onboarding",
    detail: "Clear expectations, easy sign-ups, and volunteers who know what to do.",
    color: "#F59E0B",
    gradientFrom: "#F59E0B",
    gradientTo: "#D97706"
  },
  { 
    icon: FolderOpen, 
    title: "Tools & Files", 
    shortTitle: "Tools",
    description: "Folders + templates",
    detail: "One place for everything. Templates that save time. Files you can find.",
    color: "#06B6D4",
    gradientFrom: "#06B6D4",
    gradientTo: "#0891B2"
  },
];

const useReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return prefersReduced;
};

// Individual 3D Card component
const Card3D = ({ 
  card, 
  index, 
  activeIndex, 
  totalCards,
  onSelect,
  isHovered,
  onHover
}: { 
  card: CardData; 
  index: number; 
  activeIndex: number;
  totalCards: number;
  onSelect: (index: number) => void;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}) => {
  const Icon = card.icon;
  const offset = index - activeIndex;
  const isActive = offset === 0;
  
  // Calculate 3D position
  const rotateY = offset * 15;
  const translateX = offset * 120;
  const translateZ = isActive ? 100 : -Math.abs(offset) * 80;
  const scale = isActive ? 1 : 0.85 - Math.abs(offset) * 0.05;
  const opacity = Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.15;
  const zIndex = totalCards - Math.abs(offset);

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        zIndex,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateY: isActive && isHovered ? 0 : rotateY,
        x: translateX,
        z: translateZ,
        scale: isActive && isHovered ? 1.02 : scale,
        opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onClick={() => onSelect(index)}
      onMouseEnter={() => isActive && onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <motion.div
        className="relative w-[520px] h-[320px] rounded-[28px] p-8 flex flex-col justify-between overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${card.gradientFrom} 0%, ${card.gradientTo} 100%)`,
          boxShadow: isActive 
            ? `0 25px 80px -20px ${card.color}80, 0 10px 40px -15px rgba(0,0,0,0.3)`
            : `0 10px 30px -10px ${card.color}40`,
        }}
        whileHover={isActive ? {
          rotateX: 2,
          rotateY: -2,
        } : {}}
      >
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Shine effect on hover */}
        {isActive && isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 0.15, x: "100%" }}
            transition={{ duration: 0.6 }}
            style={{
              background: "linear-gradient(90deg, transparent, white, transparent)",
            }}
          />
        )}

        {/* Card content */}
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">{card.title}</h3>
          <p className="text-lg text-white/80">{card.description}</p>
        </div>

        {/* Card number indicator */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-white/40 text-sm font-medium">
            {String(index + 1).padStart(2, '0')} / {String(totalCards).padStart(2, '0')}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Mobile Card component
const MobileCard = ({ card, isActive }: { card: CardData; isActive: boolean }) => {
  const Icon = card.icon;
  
  return (
    <motion.div
      className="w-[300px] h-[200px] rounded-3xl p-6 flex flex-col justify-between shrink-0 snap-center"
      style={{
        background: `linear-gradient(135deg, ${card.gradientFrom} 0%, ${card.gradientTo} 100%)`,
        boxShadow: isActive 
          ? `0 20px 60px -15px ${card.color}60`
          : `0 10px 30px -10px ${card.color}30`,
      }}
      animate={{
        scale: isActive ? 1 : 0.92,
        opacity: isActive ? 1 : 0.7,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div>
        <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-3">
          <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
        <p className="text-sm text-white/80">{card.description}</p>
      </div>
    </motion.div>
  );
};

// Reduced motion fallback grid
const ReducedMotionGrid = ({ activeIndex, onSelect }: { activeIndex: number; onSelect: (i: number) => void }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {cards.map((card, index) => {
      const Icon = card.icon;
      const isActive = index === activeIndex;
      
      return (
        <button
          key={card.title}
          onClick={() => onSelect(index)}
          className={`p-5 rounded-2xl text-left transition-all duration-200 ${
            isActive ? 'ring-2 ring-primary ring-offset-2' : ''
          }`}
          style={{
            background: `linear-gradient(135deg, ${card.gradientFrom} 0%, ${card.gradientTo} 100%)`,
          }}
        >
          <Icon className="w-6 h-6 text-white mb-3" strokeWidth={1.5} />
          <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
          <p className="text-sm text-white/80">{card.description}</p>
        </button>
      );
    })}
  </div>
);

export const HelpDeck = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  const dragX = useMotionValue(0);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll-linked animation for desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll to card index
  const scrollIndex = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, cards.length - 1]
  );

  const springIndex = useSpring(scrollIndex, {
    stiffness: 100,
    damping: 20,
  });

  // Update active index based on scroll (desktop only, non-reduced motion)
  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;
    
    const unsubscribe = springIndex.on("change", (latest) => {
      const snappedIndex = Math.round(latest);
      if (snappedIndex !== activeIndex && snappedIndex >= 0 && snappedIndex < cards.length) {
        setActiveIndex(snappedIndex);
      }
    });
    
    return unsubscribe;
  }, [springIndex, activeIndex, isMobile, prefersReducedMotion]);

  // Handle drag on deck
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold && activeIndex < cards.length - 1) {
      setActiveIndex(prev => prev + 1);
    } else if (info.offset.x > threshold && activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
    animate(dragX, 0, { type: "spring", stiffness: 300, damping: 30 });
  };

  // Handle card selection
  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  const activeCard = cards[activeIndex];

  // Reduced motion fallback
  if (prefersReducedMotion) {
    return (
      <section className="py-24 lg:py-32 bg-background" aria-labelledby="help-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mb-12">
            <h2 id="help-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-4">
              What we help with
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Pick one. Start there. Add more later.
            </p>
          </div>

          <ReducedMotionGrid activeIndex={activeIndex} onSelect={handleSelect} />

          {/* Detail panel */}
          <div className="mt-8 p-6 bg-muted/30 rounded-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-2">{activeCard.title}</h3>
            <p className="text-muted-foreground mb-3">{activeCard.detail}</p>
            <a href="#" className="text-primary font-medium hover:underline">
              See what you get →
            </a>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <p className="text-muted-foreground">Not sure where to start?</p>
            <div className="flex gap-3">
              <Button asChild size="lg" className="px-6 rounded-full">
                <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a free call
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-6 rounded-full">
                <a href={TYPEFORM_HEALTH_CHECK_URL} target="_blank" rel="noopener noreferrer">
                  Take the free check
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Mobile layout
  if (isMobile) {
    return (
      <section className="py-20 bg-background overflow-hidden" aria-labelledby="help-heading-mobile">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 id="help-heading-mobile" className="text-3xl font-semibold text-foreground tracking-tight mb-3">
              What we help with
            </h2>
            <p className="text-base text-muted-foreground">
              Pick one. Start there. Add more later.
            </p>
          </div>

          {/* Swipeable cards */}
          <div className="relative -mx-4 px-4 mb-8">
            <div 
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cards.map((card, index) => (
                <div key={card.title} onClick={() => setActiveIndex(index)}>
                  <MobileCard card={card} isActive={index === activeIndex} />
                </div>
              ))}
              <div className="w-4 shrink-0" />
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mb-8">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === activeIndex 
                    ? 'w-6 bg-foreground' 
                    : 'bg-foreground/20'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>

          {/* Detail panel */}
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-muted/30 rounded-2xl p-5 mb-10"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">{activeCard.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{activeCard.detail}</p>
            <a href="#" className="text-primary text-sm font-medium">
              See what you get →
            </a>
          </motion.div>

          {/* CTA */}
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">Not sure where to start?</p>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a free call
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href={TYPEFORM_HEALTH_CHECK_URL} target="_blank" rel="noopener noreferrer">
                  Take the free check
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop 3D deck layout
  return (
    <section 
      ref={containerRef}
      className="relative bg-background"
      style={{ height: '300vh' }}
      aria-labelledby="help-heading-desktop"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Background glow */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${activeCard.color}15 0%, transparent 70%)`,
            transition: 'background 0.5s ease',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Header */}
          <div className="mb-16">
            <h2 id="help-heading-desktop" className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-4">
              What we help with
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Pick one. Start there. Add more later.
            </p>
          </div>

          {/* 3D Card Deck */}
          <motion.div 
            ref={deckRef}
            className="relative h-[400px] flex items-center justify-center mb-12"
            style={{ perspective: 1200 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            <div 
              className="relative flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {cards.map((card, index) => (
                <Card3D
                  key={card.title}
                  card={card}
                  index={index}
                  activeIndex={activeIndex}
                  totalCards={cards.length}
                  onSelect={handleSelect}
                  isHovered={isHovered && index === activeIndex}
                  onHover={setIsHovered}
                />
              ))}
            </div>
          </motion.div>

          {/* Detail Panel */}
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="max-w-xl mx-auto text-center mb-12"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-3">{activeCard.title}</h3>
            <p className="text-muted-foreground mb-4">{activeCard.detail}</p>
            <a 
              href="#" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              See what you get →
            </a>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mb-12">
            {cards.map((card, index) => (
              <button
                key={card.title}
                onClick={() => handleSelect(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8' 
                    : 'w-2 hover:bg-foreground/40'
                }`}
                style={{
                  backgroundColor: index === activeIndex ? card.color : 'hsl(var(--foreground) / 0.2)',
                }}
                aria-label={`Go to ${card.title}`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <p className="text-muted-foreground">Not sure where to start?</p>
            <div className="flex gap-3">
              <Button asChild size="lg" className="px-6 rounded-full">
                <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a free call
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-6 rounded-full">
                <a href={TYPEFORM_HEALTH_CHECK_URL} target="_blank" rel="noopener noreferrer">
                  Take the free check
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpDeck;