import { useEffect, useRef, useState, useCallback, createContext, useContext } from 'react';

// Dropbox-inspired easing
export const DROPBOX_EASING = 'cubic-bezier(0.65, 0, 0.45, 1)';
export const DROPBOX_EASING_CSS = 'cubic-bezier(0.65, 0, 0.45, 1)';

// Timing constants
export const TIMING = {
  micro: 180, // 150-220ms
  reveal: 450, // 350-600ms
  stagger: 80, // 60-100ms
} as const;

// Motion preferences context
interface MotionPreferences {
  reducedMotion: boolean;
  stickyHeaderAutoHide: boolean;
  setReducedMotion: (value: boolean) => void;
  setStickyHeaderAutoHide: (value: boolean) => void;
}

const MotionContext = createContext<MotionPreferences | null>(null);

export function MotionPreferencesProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('nimara-reduced-motion');
    if (stored !== null) return stored === 'true';
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  
  const [stickyHeaderAutoHide, setStickyHeaderAutoHide] = useState(() => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem('nimara-sticky-autohide');
    return stored !== null ? stored === 'true' : true;
  });

  useEffect(() => {
    localStorage.setItem('nimara-reduced-motion', String(reducedMotion));
  }, [reducedMotion]);

  useEffect(() => {
    localStorage.setItem('nimara-sticky-autohide', String(stickyHeaderAutoHide));
  }, [stickyHeaderAutoHide]);

  return (
    <MotionContext.Provider value={{ reducedMotion, stickyHeaderAutoHide, setReducedMotion, setStickyHeaderAutoHide }}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotionPreferences() {
  const context = useContext(MotionContext);
  if (!context) {
    // Return defaults if used outside provider
    return {
      reducedMotion: false,
      stickyHeaderAutoHide: true,
      setReducedMotion: () => {},
      setStickyHeaderAutoHide: () => {},
    };
  }
  return context;
}

// Intersection observer hook for reveal animations
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}) {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options || {};
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const { reducedMotion } = useMotionPreferences();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If reduced motion, show immediately
    if (reducedMotion) {
      setIsVisible(true);
      setHasTriggered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.disconnect();
          }
        } else if (!triggerOnce && !hasTriggered) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, hasTriggered, reducedMotion]);

  return { ref, isVisible };
}

// Staggered children reveal hook
export function useStaggeredReveal<T extends HTMLElement = HTMLDivElement>(
  itemCount: number,
  options?: { staggerDelay?: number; baseDelay?: number }
) {
  const { staggerDelay = TIMING.stagger, baseDelay = 0 } = options || {};
  const { ref, isVisible } = useScrollReveal<T>();
  const { reducedMotion } = useMotionPreferences();

  const getItemDelay = useCallback(
    (index: number) => {
      if (reducedMotion) return 0;
      return baseDelay + index * staggerDelay;
    },
    [baseDelay, staggerDelay, reducedMotion]
  );

  const getItemStyle = useCallback(
    (index: number): React.CSSProperties => {
      if (reducedMotion) {
        return { opacity: 1, transform: 'none' };
      }
      
      const delay = getItemDelay(index);
      return {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} ${delay}ms, transform ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} ${delay}ms`,
      };
    },
    [isVisible, getItemDelay, reducedMotion]
  );

  return { ref, isVisible, getItemStyle, getItemDelay };
}

// Sticky header scroll state hook
export function useStickyHeader() {
  const [scrollState, setScrollState] = useState<{
    isScrolled: boolean;
    isHidden: boolean;
    scrollDirection: 'up' | 'down' | null;
  }>({
    isScrolled: false,
    isHidden: false,
    scrollDirection: null,
  });
  
  const { stickyHeaderAutoHide, reducedMotion } = useMotionPreferences();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 40;
      const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
      
      // Auto-hide logic: hide when scrolling down fast (more than 10px), show on scroll up
      const shouldHide = stickyHeaderAutoHide && 
        isScrolled && 
        scrollDirection === 'down' && 
        currentScrollY - lastScrollY.current > 10;
      
      const shouldShow = scrollDirection === 'up' || currentScrollY < 100;

      setScrollState(prev => ({
        isScrolled,
        scrollDirection,
        isHidden: shouldHide ? true : shouldShow ? false : prev.isHidden,
      }));

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollState);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stickyHeaderAutoHide]);

  return { ...scrollState, reducedMotion };
}

// Active section tracker for sticky media panels
export function useActiveSection(sectionIds: string[]) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    sectionIds.forEach((id, index) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, [sectionIds]);

  return activeIndex;
}
