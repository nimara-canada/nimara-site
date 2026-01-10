import { useState, useCallback, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
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
  ChevronDown,
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

// Brand colors for cycling
const brandColors = [
  { bg: '#7c3aed', glow: 'rgba(124, 58, 237, 0.4)' },  // Deep purple
  { bg: '#6366f1', glow: 'rgba(99, 102, 241, 0.4)' },   // Indigo
  { bg: '#1e1b4b', glow: 'rgba(30, 27, 75, 0.4)' },     // Dark navy
  { bg: '#4c1d95', glow: 'rgba(76, 29, 149, 0.4)' },    // Slate purple
];

const getCardColor = (cardIndex: number, isActive: boolean) => {
  const colorIndex = cardIndex % brandColors.length;
  const color = brandColors[colorIndex];
  
  if (isActive) {
    return {
      background: color.bg,
      boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px ${color.glow}`,
    };
  }
  
  // Muted version for inactive cards (40% darker)
  return {
    background: `color-mix(in srgb, ${color.bg} 60%, #000000)`,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  };
};

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

// Card widths for calculating slide distances
const CARD_WIDTH_MOBILE = 260;
const CARD_WIDTH_DESKTOP = 300;
const CARD_GAP = 24; // gap-6 = 24px

function Card({ 
  card, 
  cardIndex,
  isActive, 
  onClick,
  prefersReducedMotion
}: { 
  card: CardData; 
  cardIndex: number;
  isActive: boolean;
  onClick: () => void;
  prefersReducedMotion: boolean;
}) {
  const Icon = card.icon;
  const colorStyle = getCardColor(cardIndex, isActive);
  
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative flex-shrink-0 rounded-2xl p-6
        border border-white/[0.08]
        backdrop-blur-sm
        flex flex-col items-start text-left
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
        cursor-pointer
        w-[260px] h-[200px] md:w-[300px] md:h-[200px]
        overflow-hidden
      `}
      style={{
        background: colorStyle.background,
      }}
      animate={{
        opacity: isActive ? 1 : 0.6,
        scale: isActive ? 1.05 : 1,
        boxShadow: colorStyle.boxShadow,
      }}
      whileHover={!isActive ? { 
        opacity: 0.8, 
        y: -4,
      } : {
        boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px ${brandColors[cardIndex % brandColors.length].glow}`,
      }}
      transition={{ 
        duration: prefersReducedMotion ? 0 : 0.3, 
        ease: [0.4, 0, 0.2, 1] 
      }}
      tabIndex={0}
      aria-label={`${card.title}: ${card.shortDesc}`}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
      
      <Icon className="w-9 h-9 text-white mb-3 relative z-10" strokeWidth={1.5} />
      <h3 className="text-xl font-semibold text-white mb-2 relative z-10">{card.title}</h3>
      <p className="text-sm text-white/80 leading-relaxed line-clamp-3 relative z-10">{card.shortDesc}</p>
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
            const colorStyle = getCardColor(index, isActive);
            return (
              <button
                key={card.id}
                onClick={() => setActiveIndex(index)}
                style={{ background: colorStyle.background }}
                className={`
                  p-6 rounded-2xl text-left
                  border border-white/[0.08]
                  transition-all duration-300
                  ${isActive ? 'ring-2 ring-primary' : 'hover:opacity-80'}
                `}
              >
                <Icon className="w-9 h-9 text-white mb-3" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-white/70">{card.shortDesc}</p>
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

const STORAGE_KEY = "helpOrbitCarousel";

function loadStoredProgress(): { viewedCards: Set<number>; completed: boolean } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      return {
        viewedCards: new Set(Array.isArray(data.viewedCards) ? data.viewedCards : [0]),
        completed: !!data.completed,
      };
    }
  } catch {
    // ignore
  }
  return { viewedCards: new Set([0]), completed: false };
}

function saveProgress(viewedCards: Set<number>, completed: boolean) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ viewedCards: Array.from(viewedCards), completed })
    );
  } catch {
    // ignore
  }
}

export default function HelpOrbitCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewedCards, setViewedCards] = useState<Set<number>>(() => loadStoredProgress().viewedCards);
  const [hasCompletedViewing, setHasCompletedViewing] = useState(() => loadStoredProgress().completed);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth < 768 : false));
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const scrollLockEngaged = useRef(false);
  const lastWheelTime = useRef(0);
  const wheelDeltaAccum = useRef(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prevBodyOverflow = useRef<string | null>(null);
  const lockedScrollY = useRef(0);
  
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { once: false, margin: "-45% 0px -45% 0px" });
  
  // Track x offset for sliding animation
  const trackX = useMotionValue(0);
  const smoothTrackX = useSpring(trackX, { stiffness: 300, damping: 30 });
  
  // Calculate card step size
  const cardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
  const stepSize = cardWidth + CARD_GAP;
  const baseX = -stepSize;

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (isSliding) return;
    trackX.set(baseX);
  }, [baseX, isSliding, prefersReducedMotion, trackX]);
  
  // Visible cards: 1 on mobile, 3 on desktop
  const visibleCount = isMobile ? 1 : 3;
  
  // Auto-play interval (2.5s desktop, 2s mobile)
  const autoPlayInterval = isMobile ? 2000 : 2500;
  
  // Handle responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Mark section as entered (for one-time entrance animations)
  useEffect(() => {
    if (isInView && !hasEntered) {
      setHasEntered(true);
    }
  }, [isInView, hasEntered]);
  
  // Track viewed cards and persist to localStorage
  useEffect(() => {
    setViewedCards(prev => {
      const next = new Set([...prev, activeIndex]);
      saveProgress(next, hasCompletedViewing);
      return next;
    });
  }, [activeIndex, hasCompletedViewing]);
  
  // Check if all cards have been viewed and unlock scroll
  useEffect(() => {
    if (viewedCards.size === cards.length && !hasCompletedViewing) {
      setHasCompletedViewing(true);
      setIsScrollLocked(false);
      setShowScrollIndicator(true);
      saveProgress(viewedCards, true);
      
      // Hide scroll indicator after user starts scrolling
      const hideIndicator = () => {
        setShowScrollIndicator(false);
        window.removeEventListener('scroll', hideIndicator);
      };
      window.addEventListener('scroll', hideIndicator);
      
      return () => window.removeEventListener('scroll', hideIndicator);
    }
  }, [viewedCards, hasCompletedViewing]);
  
  // Engage scroll lock when section comes into view (only once)
  useEffect(() => {
    if (!isInView || hasCompletedViewing || scrollLockEngaged.current || prefersReducedMotion) {
      return;
    }

    scrollLockEngaged.current = true;

    // Put the section in a deterministic position before locking scroll.
    // Using "auto" avoids smooth-scroll fighting the hard lock.
    sectionRef.current?.scrollIntoView({ behavior: "auto", block: "center" });

    // Lock shortly after scrollIntoView has taken effect (prevents locking at the wrong Y).
    const t = window.setTimeout(() => {
      setIsScrollLocked(true);
      // Show tutorial hint
      setShowTutorial(true);
    }, 60);
    return () => window.clearTimeout(t);
  }, [isInView, hasCompletedViewing, prefersReducedMotion]);

  // Hide tutorial after first card change or after 4 seconds
  useEffect(() => {
    if (!showTutorial) return;

    // Hide after first interaction (card change)
    if (viewedCards.size > 1) {
      setShowTutorial(false);
      return;
    }

    // Auto-hide after 4 seconds
    const t = window.setTimeout(() => setShowTutorial(false), 4000);
    return () => window.clearTimeout(t);
  }, [showTutorial, viewedCards.size]);

  // Hard scroll lock: prevent the page from scrolling past this section until complete/skip
  useEffect(() => {
    if (!isScrollLocked || prefersReducedMotion) {
      if (prevBodyOverflow.current !== null) {
        document.body.style.overflow = prevBodyOverflow.current;
        prevBodyOverflow.current = null;
      }
      return;
    }

    prevBodyOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lockedScrollY.current = window.scrollY;

    const enforceScroll = () => {
      if (window.scrollY !== lockedScrollY.current) {
        window.scrollTo({ top: lockedScrollY.current });
      }
    };

    window.addEventListener("scroll", enforceScroll);
    return () => {
      window.removeEventListener("scroll", enforceScroll);
      document.body.style.overflow = prevBodyOverflow.current ?? "";
      prevBodyOverflow.current = null;
    };
  }, [isScrollLocked, prefersReducedMotion]);
  
  // Unified slide function - animates track then updates index
  const slideTo = useCallback(
    (direction: "next" | "prev") => {
      if (isSliding) return;

      setIsSliding(true);

      const targetX = baseX + (direction === "next" ? -stepSize : stepSize);

      animate(trackX, targetX, {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        onComplete: () => {
          setActiveIndex((prev) =>
            direction === "next"
              ? (prev + 1) % cards.length
              : (prev - 1 + cards.length) % cards.length
          );

          // Reset to base position (the window of cards shifts, so this should be visually seamless)
          trackX.set(baseX);
          setIsSliding(false);
        },
      });
    },
    [isSliding, baseX, stepSize, trackX]
  );
  
  const slideToNext = useCallback(() => slideTo('next'), [slideTo]);
  const slideToPrev = useCallback(() => slideTo('prev'), [slideTo]);
  
  // Jump to specific index (for dots that are far away)
  const jumpTo = useCallback((index: number) => {
    if (isSliding || index === activeIndex) return;
    setActiveIndex(index);
  }, [isSliding, activeIndex]);
  
  // Wheel event handler - navigate cards instead of scrolling
  useEffect(() => {
    if (!isScrollLocked || prefersReducedMotion) return;

    const handleWheel = (e: WheelEvent) => {
      // While locked, always intercept wheel so the page doesn't move.
      e.preventDefault();

      // Accumulate small trackpad deltas until they cross a threshold.
      wheelDeltaAccum.current += e.deltaY;
      if (Math.abs(wheelDeltaAccum.current) < 35) return;

      // Throttle to one slide per ~animation
      const now = Date.now();
      if (now - lastWheelTime.current < 520) {
        wheelDeltaAccum.current = 0;
        return;
      }
      lastWheelTime.current = now;

      const dir: "next" | "prev" = wheelDeltaAccum.current > 0 ? "next" : "prev";
      wheelDeltaAccum.current = 0;

      // Pause autoplay temporarily after wheel interaction
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 2000);

      if (dir === "next") slideToNext();
      else slideToPrev();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isScrollLocked, prefersReducedMotion, slideToNext, slideToPrev]);
  
  // Auto-play functionality with proper cleanup
  useEffect(() => {
    if (isPaused || prefersReducedMotion || !isInView || isSliding) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }
    
    // Small delay before starting auto-play when entering view
    const startDelay = setTimeout(() => {
      autoPlayRef.current = setInterval(() => {
        slideToNext();
      }, autoPlayInterval);
    }, 500);
    
    return () => {
      clearTimeout(startDelay);
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [isPaused, prefersReducedMotion, isInView, autoPlayInterval, slideToNext, isSliding]);
  
  const handleSkip = useCallback(() => {
    // Mark all cards as viewed
    const allViewed = new Set(cards.map((_, i) => i));
    setViewedCards(allViewed);
    setHasCompletedViewing(true);
    setIsScrollLocked(false);
    setShowScrollIndicator(true);
    saveProgress(allViewed, true);
  }, []);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // When locked, block scroll-related keys and translate them into carousel navigation
      if (isScrollLocked) {
        if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          setIsPaused(true);
          slideToNext();
          setTimeout(() => setIsPaused(false), 2000);
          return;
        }

        if (e.key === "ArrowUp" || e.key === "PageUp") {
          e.preventDefault();
          setIsPaused(true);
          slideToPrev();
          setTimeout(() => setIsPaused(false), 2000);
          return;
        }
      }

      if (e.key === 'ArrowLeft') {
        slideToPrev();
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000);
      }
      if (e.key === 'ArrowRight') {
        slideToNext();
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideToNext, slideToPrev, isScrollLocked]);
  
  // Touch/swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        slideToNext();
      } else {
        slideToPrev();
      }
    }
    
    // Resume auto-play after a delay
    setTimeout(() => setIsPaused(false), 1500);
  };
  
  // Build a small window of cards around the active card (buffers on each side)
  const getWindowItems = () => {
    const half = Math.floor(visibleCount / 2);
    const span = half + 1;
    const items: { cardIndex: number; offset: number }[] = [];

    for (let offset = -span; offset <= span; offset++) {
      const idx = (activeIndex + offset + cards.length) % cards.length;
      items.push({ cardIndex: idx, offset });
    }

    return items;
  };
  
  // Calculate progress percentage
  const progressPercentage = (viewedCards.size / cards.length) * 100;
  
  if (prefersReducedMotion) {
    return <ReducedMotionFallback />;
  }
  
  const windowItems = getWindowItems();
  const activeCard = cards[activeIndex];
  const viewportWidth = visibleCount * cardWidth + (visibleCount - 1) * CARD_GAP;
  
  // Content panel animation
  const contentKey = `content-${activeIndex}`;
  
  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-28 bg-background overflow-hidden relative"
      onMouseEnter={() => {
        if (!isScrollLocked) setIsPaused(true);
      }}
      onMouseLeave={() => {
        if (!isScrollLocked) setIsPaused(false);
      }}
    >
      {/* Skip Button for Accessibility */}
      {isScrollLocked && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 text-sm text-white/60 hover:text-white transition-colors underline underline-offset-2"
          onClick={handleSkip}
        >
          Skip
        </motion.button>
      )}
      
      <div className="container mx-auto px-4">
        {/* Header - animates once on enter */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-sm font-medium text-primary uppercase tracking-wider mb-3"
          >
            What We Help With
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Pick an area. Start there.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
          animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Arrow Buttons - Desktop Only */}
          <motion.button
            onClick={() => {
              slideToPrev();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            className="hidden md:flex absolute -left-16 lg:-left-20 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full items-center justify-center
              bg-white/[0.05] border border-white/[0.1]
              hover:bg-white/[0.1] transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Previous domain"
            initial={{ opacity: 0, x: -20 }}
            animate={hasEntered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>
          
          <motion.button
            onClick={() => {
              slideToNext();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            className="hidden md:flex absolute -right-16 lg:-right-20 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full items-center justify-center
              bg-white/[0.05] border border-white/[0.1]
              hover:bg-white/[0.1] transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Next domain"
            initial={{ opacity: 0, x: 20 }}
            animate={hasEntered ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
          
          {/* Cards Track - slides horizontally */}
          <div
            ref={containerRef}
            className="relative overflow-hidden mx-auto"
            style={{ minHeight: 240, width: viewportWidth, maxWidth: "100%" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div 
              className="flex items-center gap-6"
              style={{ x: smoothTrackX }}
            >
              {windowItems.map(({ cardIndex, offset }, i) => {
                const card = cards[cardIndex];
                const isCenter = offset === 0;

                return (
                  <div key={`window-${i}-${cardIndex}`} className="flex-shrink-0">
                    <Card
                      card={card}
                      cardIndex={cardIndex}
                      isActive={isCenter}
                      onClick={() => {
                        if (offset > 0) slideToNext();
                        if (offset < 0) slideToPrev();
                        setIsPaused(true);
                        setTimeout(() => setIsPaused(false), 3000);
                      }}
                      prefersReducedMotion={!!prefersReducedMotion}
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Dot Indicators */}
          <motion.div 
            className="flex items-center justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {cards.map((card, index) => (
              <button
                key={card.id}
                onClick={() => {
                  jumpTo(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 3000);
                }}
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
          animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            key={contentKey}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
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
        </motion.div>
      </div>
      
      {/* Progress Bar */}
      {!hasCompletedViewing && isScrollLocked && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          />
        </motion.div>
      )}
      
      {/* Tutorial Overlay */}
      {showTutorial && (
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
            <span className="text-sm text-white/80">
              {isMobile ? "Swipe to cycle through cards, then continue" : "Scroll to cycle through cards, then continue"}
            </span>
          </div>
        </motion.div>
      )}

      {/* Scroll Unlock Indicator */}
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
