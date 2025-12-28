import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface DepthBlurProps {
  children: ReactNode;
  className?: string;
}

// Simplified - removed blur effect which can feel laggy
export const DepthBlur = ({ 
  children, 
  className = '' 
}: DepthBlurProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

// Clean section wrapper with subtle fade-in only (no blur, no aggressive transforms)
interface DepthSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
}

export const DepthSection = ({ 
  children, 
  className = '',
  id,
  intensity = 'subtle'
}: DepthSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"]
  });

  // Simple fade-in on scroll into view
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  
  const smoothOpacity = useSpring(opacity, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative ${className}`}
      style={{
        opacity: smoothOpacity,
        y: smoothY
      }}
    >
      {children}
    </motion.section>
  );
};

// Clean divider between sections
export const SectionDivider = ({ variant = 'gradient' }: { variant?: 'gradient' | 'line' | 'fade' }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 0]);
  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScaleX = useSpring(scaleX, { stiffness: 100, damping: 30 });

  if (variant === 'gradient') {
    return (
      <motion.div 
        ref={ref}
        className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent my-4"
        style={{ opacity: smoothOpacity, scaleX: smoothScaleX }}
      />
    );
  }

  if (variant === 'fade') {
    return (
      <motion.div 
        ref={ref}
        className="h-16 relative overflow-hidden"
        style={{ opacity: smoothOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />
      </motion.div>
    );
  }

  return (
    <motion.div 
      ref={ref}
      className="h-px bg-border/30 mx-auto max-w-4xl"
      style={{ opacity: smoothOpacity, scaleX: smoothScaleX }}
    />
  );
};

export default DepthBlur;
