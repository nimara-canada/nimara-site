import { useScroll, useTransform, useSpring, useMotionValue, MotionValue } from 'framer-motion';
import { useEffect, useRef, useState, RefObject } from 'react';

interface SmoothScrollResult {
  scrollY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
  scrollVelocity: MotionValue<number>;
  isScrollingDown: boolean;
}

export const useSmoothScroll = (): SmoothScrollResult => {
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);
  
  // Smooth spring for scroll values
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate scroll velocity
  const scrollVelocity = useMotionValue(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const velocity = currentScrollY - lastScrollY.current;
      scrollVelocity.set(velocity);
      setIsScrollingDown(velocity > 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollVelocity]);

  return {
    scrollY: smoothScrollY,
    scrollYProgress: smoothScrollYProgress,
    scrollVelocity,
    isScrollingDown
  };
};

interface ParallaxResult {
  ref: RefObject<HTMLDivElement>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

export const useParallax = (
  speed: number = 0.5,
  fadeOut: boolean = true
): ParallaxResult => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], fadeOut ? [1, 0.8, 0.3] : [1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return {
    ref,
    y: smoothY,
    opacity: smoothOpacity,
    scale: smoothScale
  };
};

interface SectionRevealResult {
  ref: RefObject<HTMLDivElement>;
  progress: MotionValue<number>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
}

export const useSectionReveal = (): SectionRevealResult => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  const y = useTransform(smoothProgress, [0, 1], [80, 0]);
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);

  return {
    ref,
    progress: smoothProgress,
    y,
    opacity
  };
};

// Hook for staggered children animations
export const useStaggerReveal = (childCount: number, baseDelay: number = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.7"]
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  // Generate delays for each child
  const delays = Array.from({ length: childCount }, (_, i) => i * baseDelay);

  return {
    ref,
    progress,
    delays
  };
};
