import { useEffect, useRef, ReactNode } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

interface ScrollSnapWrapperProps {
  children: ReactNode;
}

export const ScrollSnapWrapper = ({ children }: ScrollSnapWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (isScrolling) return;
      
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const sections = container.querySelectorAll('[data-scroll-section]');
        const viewportHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        lastScrollTop = scrollTop;

        let closestSection: Element | null = null;
        let closestDistance = Infinity;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          
          // Calculate distance from viewport center to section start
          const distanceFromTop = Math.abs(sectionTop);
          
          // Only snap if section is within reasonable range (40% of viewport)
          if (distanceFromTop < viewportHeight * 0.4 && distanceFromTop < closestDistance) {
            // Don't snap if we're already at the section
            if (Math.abs(sectionTop) > 20) {
              closestDistance = distanceFromTop;
              closestSection = section;
            }
          }
        });

        if (closestSection && closestDistance > 20) {
          isScrolling = true;
          
          const targetTop = (closestSection as HTMLElement).offsetTop;
          
          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });

          // Reset scrolling flag after animation
          setTimeout(() => {
            isScrolling = false;
          }, 800);
        }
      }, 150); // Debounce scroll snap
    };

    // Use passive listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-snap-wrapper">
      {children}
    </div>
  );
};

// HOC to wrap sections with scroll-snap behavior
interface ScrollSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const ScrollSection = ({ children, id, className = '' }: ScrollSectionProps) => {
  return (
    <div 
      data-scroll-section
      id={id}
      className={`scroll-snap-section ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollSnapWrapper;
