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
  ctaExternal?: boolean;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
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

  // Mobile: card grid layout (matching other sections)
  if (isMobile) {
    return (
      <div className={cn('py-8', className)}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <MobileNarrativeStep key={step.id} step={step} index={index} />
            ))}
          </div>
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
        <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
          <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
            {index + 1}
          </span>
          {step.label}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-[1.1] text-white mb-6">{step.heading}</h2>
        <p className="text-lg text-white/70 mb-8 max-w-lg">
          {step.description}
        </p>
        {step.timeNote && (
          <p className="text-sm text-white/50 mb-4">{step.timeNote}</p>
        )}
        {step.ctaText && step.ctaHref && (
          <div className="flex flex-col gap-3">
            <a
              href={step.ctaHref}
              target={step.ctaExternal ? "_blank" : undefined}
              rel={step.ctaExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-secondary-background rounded-lg font-medium hover:bg-white/90 transition-colors w-fit"
            >
              {step.ctaText}
            </a>
            {step.secondaryCtaText && step.secondaryCtaHref && (
              <a
                href={step.secondaryCtaHref}
                className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-accent transition-colors"
              >
                {step.secondaryCtaText}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Mobile step (card-based, matching other sections)
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
    <article 
      ref={ref} 
      className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden" 
      style={style}
    >
      {/* Visual preview - compact version */}
      <div className="bg-white/5 border-b border-white/10">
        <div className="max-h-48 overflow-hidden [&>div]:!p-3 [&>div>div]:!max-w-none [&>div>div]:!shadow-none [&>div>div]:!border-0 [&>div>div]:!rounded-none">
          {step.visual}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Step number and label */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-accent">
              {index + 1}
            </span>
          </div>
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent">
            {step.label}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-white">{step.heading}</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          {step.description}
        </p>
        {step.timeNote && (
          <p className="text-xs text-white/50">{step.timeNote}</p>
        )}
        {step.ctaText && step.ctaHref && (
          <div className="flex flex-col gap-3 pt-2">
            <a
              href={step.ctaHref}
              target={step.ctaExternal ? "_blank" : undefined}
              rel={step.ctaExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-secondary-background rounded-lg font-medium text-sm hover:bg-white/90 transition-colors"
            >
              {step.ctaText}
            </a>
            {step.secondaryCtaText && step.secondaryCtaHref && (
              <a
                href={step.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-1 text-xs text-white/60 hover:text-accent transition-colors"
              >
                {step.secondaryCtaText}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
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
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
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
              index === activeIndex ? 'bg-accent w-6' : 'bg-white/30'
            )}
          />
        ))}
      </div>
    </div>
  );
}
