import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { 
  ClipboardList, 
  DollarSign, 
  Users, 
  BarChart3, 
  Heart, 
  HandHelping, 
  FolderOpen,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  LucideIcon
} from "lucide-react";
import { Link } from "react-router-dom";

interface CardData {
  id: number;
  title: string;
  icon: LucideIcon;
  shortDesc: string;
  longDesc: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Board & Governance",
    icon: ClipboardList,
    shortDesc: "Meetings, decisions, and approvals you can find later.",
    longDesc: "Your board meets, makes decisions, and approves things. We help you track it all — so nothing gets lost and everything holds up when funders ask."
  },
  {
    id: 2,
    title: "Money & Grants",
    icon: DollarSign,
    shortDesc: "Spending, receipts, and grant records that hold up.",
    longDesc: "Grant tracking, proof of payment, budget vs. actual — all in one place. When accountability is due, your proof is ready."
  },
  {
    id: 3,
    title: "People",
    icon: Users,
    shortDesc: "Roles, contracts, and onboarding basics.",
    longDesc: "Clear job descriptions, contractor vs. employee clarity, and simple onboarding steps your team can follow."
  },
  {
    id: 4,
    title: "Programs",
    icon: BarChart3,
    shortDesc: "Clear services, outcomes, and delivery tracking.",
    longDesc: "What you deliver, who you serve, and how you measure it — documented so you can report with confidence."
  },
  {
    id: 5,
    title: "Fundraising",
    icon: Heart,
    shortDesc: "Donor records and giving history in one place.",
    longDesc: "Track who gave, when, and how much. No more digging through spreadsheets before a campaign."
  },
  {
    id: 6,
    title: "Volunteers",
    icon: HandHelping,
    shortDesc: "Simple onboarding and tracking for volunteers.",
    longDesc: "Know who's helping, what they signed, and when they started. Simple records that protect your org."
  },
  {
    id: 7,
    title: "Tools & Files",
    icon: FolderOpen,
    shortDesc: "Folders, templates, and routines your team will use.",
    longDesc: "A file system that makes sense. Templates your team will actually use. Routines that keep it clean."
  }
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

function Card({ 
  card, 
  isActive, 
  onClick,
  prefersReducedMotion
}: { 
  card: CardData; 
  isActive: boolean;
  onClick: () => void;
  prefersReducedMotion: boolean;
}) {
  const Icon = card.icon;
  
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative flex-shrink-0 rounded-2xl p-6
        bg-[#1a1a2e] border border-white/[0.08]
        backdrop-blur-sm
        flex flex-col items-start text-left
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
        cursor-pointer
        w-[260px] h-[200px] md:w-[300px] md:h-[200px]
      `}
      animate={{
        opacity: isActive ? 1 : 0.6,
        scale: isActive ? 1.05 : 1,
        y: 0,
        boxShadow: isActive 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 246, 0.1)' 
          : '0 4px 20px rgba(0, 0, 0, 0.2)',
      }}
      whileHover={!isActive ? { 
        opacity: 0.8, 
        y: -4,
      } : {
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px rgba(139, 92, 246, 0.15)',
      }}
      transition={{ 
        duration: prefersReducedMotion ? 0 : 0.35, 
        ease: [0.4, 0, 0.2, 1] 
      }}
      tabIndex={0}
      aria-label={`${card.title}: ${card.shortDesc}`}
    >
      <Icon className="w-9 h-9 text-primary mb-3" strokeWidth={1.5} />
      <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{card.shortDesc}</p>
    </motion.button>
  );
}

function ReducedMotionFallback() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            What We Help With
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pick an area. Start there.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            You don't need to fix everything. Choose one domain — we'll build it with you.
          </p>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isActive = activeIndex === index;
            return (
              <button
                key={card.id}
                onClick={() => setActiveIndex(index)}
                className={`
                  p-6 rounded-2xl text-left
                  bg-[#1a1a2e] border border-white/[0.08]
                  transition-all duration-300
                  ${isActive ? 'ring-2 ring-primary shadow-[0_0_30px_rgba(139,92,246,0.2)]' : 'hover:bg-[#1f1f35]'}
                `}
              >
                <Icon className="w-9 h-9 text-primary mb-3" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.shortDesc}</p>
              </button>
            );
          })}
        </div>
        
        {/* Dynamic Content */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-3">{cards[activeIndex].title}</h3>
          <p className="text-muted-foreground mb-4">{cards[activeIndex].longDesc}</p>
          <Link 
            to="/start-here" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            See what you get <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HelpOrbitCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const parallaxScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // Handle responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const goTo = useCallback((index: number) => {
    let newIndex = index;
    if (newIndex < 0) newIndex = cards.length - 1;
    if (newIndex >= cards.length) newIndex = 0;
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
  
  // Touch/swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goNext();
      } else {
        goPrev();
      }
    }
  };
  
  // Get visible card indices (centered around active)
  const getVisibleIndices = () => {
    const indices: number[] = [];
    const half = Math.floor(visibleCount / 2);
    
    for (let i = -half; i <= half; i++) {
      let idx = activeIndex + i;
      // Wrap around for infinite loop
      if (idx < 0) idx = cards.length + idx;
      if (idx >= cards.length) idx = idx - cards.length;
      indices.push(idx);
    }
    
    return indices;
  };
  
  if (prefersReducedMotion) {
    return <ReducedMotionFallback />;
  }
  
  const visibleIndices = getVisibleIndices();
  const activeCard = cards[activeIndex];
  
  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-sm font-medium text-primary uppercase tracking-wider mb-3"
          >
            What We Help With
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Pick an area. Start there.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            You don't need to fix everything. Choose one domain — we'll build it with you.
          </motion.p>
        </div>
        
        {/* Carousel Container */}
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Arrow Buttons - Desktop Only */}
          <motion.button
            onClick={goPrev}
            className="hidden md:flex absolute -left-16 lg:-left-20 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full items-center justify-center
              bg-white/[0.05] border border-white/[0.1]
              hover:bg-white/[0.1] transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Previous domain"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>
          
          <motion.button
            onClick={goNext}
            className="hidden md:flex absolute -right-16 lg:-right-20 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full items-center justify-center
              bg-white/[0.05] border border-white/[0.1]
              hover:bg-white/[0.1] transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Next domain"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
          
          {/* Cards Container with Parallax */}
          <motion.div
            ref={containerRef}
            className="relative flex items-center justify-center gap-6"
            style={{ 
              minHeight: 240,
              y: prefersReducedMotion ? 0 : parallaxY,
              scale: prefersReducedMotion ? 1 : parallaxScale,
              opacity: prefersReducedMotion ? 1 : parallaxOpacity,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="popLayout">
              {visibleIndices.map((cardIndex) => {
                const card = cards[cardIndex];
                const isCenter = cardIndex === activeIndex;
                
                return (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.4, 0, 0.2, 1],
                      layout: { duration: 0.4 }
                    }}
                    className={visibleCount === 1 && !isCenter ? 'hidden' : 'flex-shrink-0'}
                  >
                    <Card
                      card={card}
                      isActive={isCenter}
                      onClick={() => setActiveIndex(cardIndex)}
                      prefersReducedMotion={!!prefersReducedMotion}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
          
          {/* Dot Indicators */}
          <motion.div 
            className="flex items-center justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {cards.map((card, index) => (
              <button
                key={card.id}
                onClick={() => setActiveIndex(index)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-200 ease-out
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
                  ${activeIndex === index 
                    ? 'bg-primary' 
                    : 'bg-white/30 hover:bg-white/50'
                  }
                `}
                aria-label={`Go to ${card.title}`}
                aria-current={activeIndex === index ? 'true' : 'false'}
              />
            ))}
          </motion.div>
        </motion.div>
        
        {/* Dynamic Content Panel */}
        <motion.div 
          className="mt-10 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <h3 className="text-[28px] font-bold text-white mb-3">
                {activeCard.title}
              </h3>
              <p className="text-base text-[#9ca3af] mb-6 max-w-[600px] mx-auto leading-[1.6]">
                {activeCard.longDesc}
              </p>
              <Link 
                to="/start-here" 
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium transition-colors group"
              >
                See what you get 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
