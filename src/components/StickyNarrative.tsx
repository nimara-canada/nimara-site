import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useMotionPreferences, TIMING, DROPBOX_EASING_CSS } from '@/hooks/use-scroll-reveal';

interface NarrativeStep {
  id: string;
  label: string;
  heading: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  timeNote?: string;
  visual: React.ReactNode;
}

interface StickyNarrativeProps {
  steps: NarrativeStep[];
  className?: string;
}

export function StickyNarrative({ steps, className }: StickyNarrativeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { reducedMotion } = useMotionPreferences();

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track active step using intersection observer
  useEffect(() => {
    if (isMobile) return;

    const stepElements = steps.map((step) => 
      document.getElementById(`narrative-step-${step.id}`)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepElements.indexOf(entry.target as HTMLElement);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    stepElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [steps, isMobile]);

  // Mobile: stack layout
  if (isMobile) {
    return (
      <div className={cn('py-16 md:py-24', className)}>
        <div className="max-w-7xl mx-auto px-6">
          {steps.map((step, index) => (
            <MobileNarrativeStep key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    );
  }

  // Desktop: sticky layout
  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: scrolling text content */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <DesktopNarrativeStep
                key={step.id}
                step={step}
                index={index}
                isActive={activeIndex === index}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>

          {/* Right: sticky media panel */}
          <div className="hidden lg:block">
            <div className="sticky top-32 h-[70vh] flex items-center">
              <StickyMediaPanel
                steps={steps}
                activeIndex={activeIndex}
                reducedMotion={reducedMotion}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Desktop step (left side)
function DesktopNarrativeStep({
  step,
  index,
  isActive,
  reducedMotion,
}: {
  step: NarrativeStep;
  index: number;
  isActive: boolean;
  reducedMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style: React.CSSProperties = reducedMotion
    ? {}
    : {
        opacity: isInView ? 1 : 0.3,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${TIMING.reveal}ms ${DROPBOX_EASING_CSS}, transform ${TIMING.reveal}ms ${DROPBOX_EASING_CSS}`,
      };

  return (
    <div
      ref={ref}
      id={`narrative-step-${step.id}`}
      className="min-h-[70vh] flex items-center py-16"
      style={style}
    >
      <div className={cn(
        'transition-opacity duration-300',
        isActive ? 'opacity-100' : 'opacity-60'
      )}>
        <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            {index + 1}
          </span>
          {step.label}
        </span>
        <h2 className="heading-2 mb-6">{step.heading}</h2>
        <p className="text-body-lg text-body-muted mb-8 max-w-lg">
          {step.description}
        </p>
        {step.timeNote && (
          <p className="text-sm text-muted-foreground mb-4">{step.timeNote}</p>
        )}
        {step.ctaText && step.ctaHref && (
          <a
            href={step.ctaHref}
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200 group"
          >
            {step.ctaText}
          </a>
        )}
      </div>
    </div>
  );
}

// Mobile step (stacked)
function MobileNarrativeStep({
  step,
  index,
}: {
  step: NarrativeStep;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { reducedMotion } = useMotionPreferences();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (reducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const style: React.CSSProperties = reducedMotion
    ? {}
    : {
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity ${TIMING.reveal}ms ${DROPBOX_EASING_CSS}, transform ${TIMING.reveal}ms ${DROPBOX_EASING_CSS}`,
      };

  return (
    <div ref={ref} className="py-12 border-b border-border last:border-b-0" style={style}>
      {/* Visual first on mobile */}
      <div className="mb-8 rounded-xl overflow-hidden bg-muted/30">
        {step.visual}
      </div>

      <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
        <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
          {index + 1}
        </span>
        {step.label}
      </span>
      <h3 className="heading-3 mb-4">{step.heading}</h3>
      <p className="text-body text-body-muted mb-6">
        {step.description}
      </p>
      {step.timeNote && (
        <p className="text-xs text-muted-foreground mb-3">{step.timeNote}</p>
      )}
      {step.ctaText && step.ctaHref && (
        <a
          href={step.ctaHref}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm"
        >
          {step.ctaText}
        </a>
      )}
    </div>
  );
}

// Sticky media panel (right side on desktop)
function StickyMediaPanel({
  steps,
  activeIndex,
  reducedMotion,
}: {
  steps: NarrativeStep[];
  activeIndex: number;
  reducedMotion: boolean;
}) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30">
      {steps.map((step, index) => {
        const isActive = index === activeIndex;
        
        const style: React.CSSProperties = reducedMotion
          ? { opacity: isActive ? 1 : 0, visibility: isActive ? 'visible' : 'hidden' }
          : {
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateX(0)' : `translateX(${index < activeIndex ? -20 : 20}px)`,
              transition: `opacity ${TIMING.reveal}ms ${DROPBOX_EASING_CSS}, transform ${TIMING.reveal}ms ${DROPBOX_EASING_CSS}`,
              position: 'absolute',
              inset: 0,
              zIndex: isActive ? 10 : 0,
            };

        return (
          <div key={step.id} style={style} className="w-full h-full">
            {step.visual}
          </div>
        );
      })}
      
      {/* Step indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              index === activeIndex ? 'bg-primary w-6' : 'bg-primary/30'
            )}
          />
        ))}
      </div>
    </div>
  );
}
