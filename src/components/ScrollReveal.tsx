import React from 'react';
import { useScrollReveal, useStaggeredReveal, useMotionPreferences, TIMING, DROPBOX_EASING_CSS } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: keyof JSX.IntrinsicElements;
}

// Single element reveal with fade + rise
export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = TIMING.reveal,
  as: Component = 'div',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();
  const { reducedMotion } = useMotionPreferences();

  const style: React.CSSProperties = reducedMotion
    ? { opacity: 1, transform: 'none' }
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity ${duration}ms ${DROPBOX_EASING_CSS} ${delay}ms, transform ${duration}ms ${DROPBOX_EASING_CSS} ${delay}ms`,
      };

  return React.createElement(
    Component,
    { ref, className, style },
    children
  );
}

// Staggered reveal for lists/grids
interface StaggerRevealProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
  as?: keyof JSX.IntrinsicElements;
  itemAs?: keyof JSX.IntrinsicElements;
}

export function StaggerReveal({
  children,
  className,
  itemClassName,
  staggerDelay = TIMING.stagger,
  as: Container = 'div',
  itemAs: ItemComponent = 'div',
}: StaggerRevealProps) {
  const { ref, getItemStyle } = useStaggeredReveal(
    React.Children.count(children),
    { staggerDelay }
  );

  return React.createElement(
    Container,
    { ref, className },
    React.Children.map(children, (child, index) =>
      React.createElement(
        ItemComponent,
        { className: itemClassName, style: getItemStyle(index), key: index },
        child
      )
    )
  );
}

// Scale reveal for images/media
interface ScaleRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleReveal({ children, className, delay = 0 }: ScaleRevealProps) {
  const { ref, isVisible } = useScrollReveal();
  const { reducedMotion } = useMotionPreferences();

  const style: React.CSSProperties = reducedMotion
    ? { opacity: 1, transform: 'none' }
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.98)',
        transition: `opacity ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} ${delay}ms, transform ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} ${delay}ms`,
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

// Section wrapper with reveal and background transitions
interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'muted' | 'dark' | 'gradient';
}

export function RevealSection({
  children,
  className,
  id,
  background = 'default',
}: RevealSectionProps) {
  const bgClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    dark: 'bg-secondary-background text-white',
    gradient: 'bg-secondary-background text-white',
  };

  const isDark = background === 'dark' || background === 'gradient';

  return (
    <section
      id={id}
      className={cn(
        'relative',
        bgClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
}

// Soft section divider
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div 
      className={cn(
        'relative h-px w-full max-w-4xl mx-auto',
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

// Two-column narrative section (Dropbox style)
interface NarrativeSectionProps {
  label: string;
  heading: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  visual: React.ReactNode;
  reversed?: boolean;
  className?: string;
  id?: string;
}

export function NarrativeSection({
  label,
  heading,
  description,
  ctaText,
  ctaHref,
  visual,
  reversed = false,
  className,
  id,
}: NarrativeSectionProps) {
  const { ref, isVisible } = useScrollReveal();
  const { reducedMotion } = useMotionPreferences();

  const textStyle: React.CSSProperties = reducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity ${TIMING.reveal}ms ${DROPBOX_EASING_CSS}, transform ${TIMING.reveal}ms ${DROPBOX_EASING_CSS}`,
      };

  const visualStyle: React.CSSProperties = reducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.98)',
        transition: `opacity ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} 100ms, transform ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} 100ms`,
      };

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'py-20 md:py-28 lg:py-32',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={cn(
          'grid lg:grid-cols-2 gap-12 lg:gap-20 items-center',
          reversed && 'lg:grid-flow-dense'
        )}>
          {/* Text content */}
          <div style={textStyle} className={reversed ? 'lg:col-start-2' : ''}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              {label}
            </span>
            <h2 className="heading-2 mb-6">{heading}</h2>
            <p className="text-body-lg text-body-muted mb-8 max-w-lg">
              {description}
            </p>
            {ctaText && ctaHref && (
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200 group"
              >
                {ctaText}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            )}
          </div>

          {/* Visual */}
          <div style={visualStyle} className={reversed ? 'lg:col-start-1' : ''}>
            {visual}
          </div>
        </div>
      </div>
    </section>
  );
}
