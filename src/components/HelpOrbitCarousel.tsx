import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, animate, PanInfo } from "framer-motion";
import { 
  Users, 
  Wallet, 
  UserCog, 
  LayoutGrid, 
  Heart, 
  HandHeart, 
  FolderOpen,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TYPEFORM_HEALTH_CHECK_URL, CALENDLY_BOOKING_URL } from "@/constants/urls";

interface CardData {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  detail: string;
  gradientFrom: string;
  gradientTo: string;
  textColor: string;
}

const cards: CardData[] = [
  { 
    icon: Users, 
    title: "Board", 
    shortDescription: "Decisions stay written down",
    detail: "Get your board organized with clear agendas, tracked decisions, and easy-to-find minutes.",
    gradientFrom: "hsl(220, 53%, 12%)",
    gradientTo: "hsl(220, 53%, 22%)",
    textColor: "text-white"
  },
  { 
    icon: Wallet, 
    title: "Money", 
    shortDescription: "Spending is easy to prove",
    detail: "Know where every dollar goes and find grant receipts in seconds, not hours.",
    gradientFrom: "hsl(162, 91%, 78%)",
    gradientTo: "hsl(162, 75%, 60%)",
    textColor: "text-nim-navy"
  },
  { 
    icon: UserCog, 
    title: "People", 
    shortDescription: "Roles and handoffs are clear",
    detail: "Clear job descriptions, smooth onboarding, and handoffs that actually work.",
    gradientFrom: "hsl(262, 82%, 55%)",
    gradientTo: "hsl(262, 82%, 42%)",
    textColor: "text-white"
  },
  { 
    icon: LayoutGrid, 
    title: "Programs", 
    shortDescription: "Plans and updates in one place",
    detail: "Simple dashboards that show what's working and what needs attention.",
    gradientFrom: "hsl(220, 53%, 15%)",
    gradientTo: "hsl(262, 70%, 35%)",
    textColor: "text-white"
  },
  { 
    icon: Heart, 
    title: "Fundraising", 
    shortDescription: "Grant work stays organized",
    detail: "Keep track of who gave, when to follow up, and never miss a thank-you.",
    gradientFrom: "hsl(262, 82%, 48%)",
    gradientTo: "hsl(162, 65%, 55%)",
    textColor: "text-white"
  },
  { 
    icon: HandHeart, 
    title: "Volunteers", 
    shortDescription: "Simple onboarding and tracking",
    detail: "Clear expectations, easy sign-ups, and volunteers who know what to do.",
    gradientFrom: "hsl(162, 85%, 72%)",
    gradientTo: "hsl(162, 70%, 52%)",
    textColor: "text-nim-navy"
  },
  { 
    icon: FolderOpen, 
    title: "Tools & Files", 
    shortDescription: "Templates your team can use",
    detail: "One place for everything. Templates that save time. Files you can find.",
    gradientFrom: "hsl(220, 53%, 14%)",
    gradientTo: "hsl(220, 53%, 24%)",
    textColor: "text-white"
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

// Orbit Card Component
const OrbitCard = ({ 
  card, 
  index, 
  activeIndex, 
  totalCards,
  dragOffset,
  isMobile
}: { 
  card: CardData; 
  index: number; 
  activeIndex: number;
  totalCards: number;
  dragOffset: number;
  isMobile: boolean;
}) => {
  const Icon = card.icon;
  
  // Calculate position on orbit
  const anglePerCard = (2 * Math.PI) / totalCards;
  const baseAngle = (index - activeIndex) * anglePerCard;
  const dragAngle = (dragOffset / 300) * anglePerCard;
  const angle = baseAngle + dragAngle;
  
  // Orbit dimensions
  const orbitRadiusX = isMobile ? 140 : 380;
  const orbitRadiusZ = isMobile ? 80 : 200;
  
  // Calculate 3D position
  const x = Math.sin(angle) * orbitRadiusX;
  const z = Math.cos(angle) * orbitRadiusZ;
  
  // Normalize z for scaling (0 = back, 1 = front)
  const normalizedZ = (z + orbitRadiusZ) / (2 * orbitRadiusZ);
  
  // Scale based on depth
  const minScale = isMobile ? 0.5 : 0.55;
  const maxScale = 1;
  const scale = minScale + normalizedZ * (maxScale - minScale);
  
  // Opacity based on depth
  const opacity = 0.3 + normalizedZ * 0.7;
  
  // Y rotation for perspective tilt
  const rotateY = -angle * (180 / Math.PI) * 0.15;
  
  // Card dimensions
  const cardWidth = isMobile ? 200 : 420;
  const cardHeight = isMobile ? 140 : 280;
  
  // Z-index based on depth
  const zIndex = Math.round(normalizedZ * 100);
  
  const isActive = Math.abs(angle) < 0.1;

  return (
    <motion.div
      className="absolute"
      style={{
        width: cardWidth,
        height: cardHeight,
        x: x - cardWidth / 2,
        y: 0,
        scale,
        opacity,
        zIndex,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div 
        className={`w-full h-full rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-2xl ${card.textColor}`}
        style={{
          background: `linear-gradient(135deg, ${card.gradientFrom} 0%, ${card.gradientTo} 100%)`,
          boxShadow: isActive 
            ? '0 25px 60px -15px rgba(0,0,0,0.4), 0 0 40px rgba(124,58,237,0.15)'
            : '0 15px 40px -10px rgba(0,0,0,0.3)',
        }}
      >
        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${card.textColor === 'text-white' ? 'bg-white/15' : 'bg-nim-navy/10'}`}>
          <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
        </div>
        
        <div className="mt-auto">
          <h3 className="text-xl md:text-3xl font-bold mb-2">{card.title}</h3>
          <p className="text-sm md:text-lg opacity-85 leading-snug">{card.shortDescription}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Detail Panel Component
const DetailPanel = ({ card }: { card: CardData }) => {
  return (
    <motion.div
      key={card.title}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="text-center max-w-xl mx-auto"
    >
      <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        {card.title}
      </h4>
      <p className="text-lg md:text-xl text-muted-foreground mb-4">
        {card.detail}
      </p>
      <a 
        href="/start-here" 
        className="inline-flex items-center text-primary font-medium hover:underline group"
      >
        See what you get
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
};

// Reduced Motion Fallback Grid
const FallbackGrid = ({ activeIndex, onSelect }: { activeIndex: number; onSelect: (i: number) => void }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const isActive = index === activeIndex;
        
        return (
          <button
            key={card.title}
            onClick={() => onSelect(index)}
            className={`rounded-2xl p-5 md:p-6 text-left transition-all duration-200 ${card.textColor} ${isActive ? 'ring-2 ring-primary ring-offset-2' : ''}`}
            style={{
              background: `linear-gradient(135deg, ${card.gradientFrom} 0%, ${card.gradientTo} 100%)`,
            }}
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 ${card.textColor === 'text-white' ? 'bg-white/15' : 'bg-nim-navy/10'}`}>
              <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1">{card.title}</h3>
            <p className="text-sm opacity-80">{card.shortDescription}</p>
          </button>
        );
      })}
    </div>
  );
};

// Main Component
export default function HelpOrbitCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const dragX = useMotionValue(0);
  const springX = useSpring(dragX, { stiffness: 300, damping: 30 });
  
  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Auto-rotate carousel
  useEffect(() => {
    if (prefersReducedMotion || isPaused || isDragging) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000); // Rotate every 4 seconds
    
    return () => clearInterval(interval);
  }, [prefersReducedMotion, isPaused, isDragging]);
  
  // Navigate to next/prev card
  const goTo = useCallback((index: number) => {
    const newIndex = ((index % cards.length) + cards.length) % cards.length;
    setActiveIndex(newIndex);
  }, []);
  
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);
  
  // Mouse wheel navigation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let wheelTimeout: NodeJS.Timeout;
    let wheelDelta = 0;
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      wheelDelta += e.deltaX || e.deltaY;
      
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (Math.abs(wheelDelta) > 30) {
          if (wheelDelta > 0) goNext();
          else goPrev();
        }
        wheelDelta = 0;
      }, 50);
    };
    
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [goNext, goPrev]);
  
  // Handle drag
  const handleDragStart = () => setIsDragging(true);
  
  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    dragX.set(info.offset.x);
  };
  
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    
    const threshold = isMobile ? 40 : 80;
    const velocity = info.velocity.x;
    const offset = info.offset.x;
    
    // Factor in velocity for momentum
    const momentum = velocity * 0.1;
    const totalOffset = offset + momentum;
    
    if (totalOffset < -threshold) {
      goNext();
    } else if (totalOffset > threshold) {
      goPrev();
    }
    
    animate(dragX, 0, { type: "spring", stiffness: 400, damping: 35 });
  };

  // Reduced motion fallback
  if (prefersReducedMotion) {
    return (
      <section className="py-20 md:py-32 bg-background overflow-hidden" aria-labelledby="help-orbit-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h2 id="help-orbit-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              What we help with
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Pick one. Start there. Add more later.
            </p>
          </div>
          
          <FallbackGrid activeIndex={activeIndex} onSelect={setActiveIndex} />
          
          {/* Detail Panel */}
          <div className="mt-12 md:mt-16">
            <DetailPanel card={cards[activeIndex]} />
          </div>
          
          {/* CTA Row */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">Not sure where to start?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a free call
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
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

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden" aria-labelledby="help-orbit-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <motion.h2 
            id="help-orbit-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4"
          >
            What we help with
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Pick one. Start there. Add more later.
          </motion.p>
        </div>
        
        {/* Orbit Carousel */}
        <div
          ref={containerRef}
          className="relative mx-auto"
          style={{ height: isMobile ? 280 : 420 }}
          onMouseEnter={() => { setShowArrows(true); setIsPaused(true); }}
          onMouseLeave={() => { setShowArrows(false); setIsPaused(false); }}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Orbit Ring Glow */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: isMobile ? 320 : 820,
              height: isMobile ? 180 : 420,
              background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.05) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />
          
          {/* Subtle orbit line */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none border border-primary/5 rounded-full"
            style={{
              width: isMobile ? 280 : 760,
              height: isMobile ? 160 : 400,
            }}
          />
          
          {/* Draggable area */}
          <motion.div
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            style={{ perspective: 1200 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
            {/* Cards container */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-y-1/2"
              style={{ transformStyle: "preserve-3d" }}
            >
              {cards.map((card, index) => (
                <OrbitCard
                  key={card.title}
                  card={card}
                  index={index}
                  activeIndex={activeIndex}
                  totalCards={cards.length}
                  dragOffset={isDragging ? springX.get() : 0}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Navigation Arrows */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: showArrows || isMobile ? 0.8 : 0 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            onClick={goPrev}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-background transition-colors"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: showArrows || isMobile ? 0.8 : 0 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            onClick={goNext}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-background transition-colors"
            aria-label="Next card"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
          
          {/* Dot indicators */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Detail Panel */}
        <motion.div 
          className="mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <DetailPanel card={cards[activeIndex]} />
        </motion.div>
        
        {/* CTA Row */}
        <motion.div 
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-6">Not sure where to start?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8 py-6 text-base">
              <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a free call
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-base">
              <a href={TYPEFORM_HEALTH_CHECK_URL} target="_blank" rel="noopener noreferrer">
                Take the free check
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
