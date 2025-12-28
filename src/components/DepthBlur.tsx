import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface DepthBlurProps {
  children: ReactNode;
  className?: string;
  maxBlur?: number;
  fadeOpacity?: boolean;
}

export const DepthBlur = ({ 
  children, 
  className = '', 
  maxBlur = 4,
  fadeOpacity = true 
}: DepthBlurProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const clarity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0.7, 1, 0.7, 0]);
  
  const smoothClarity = useSpring(clarity, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const blur = useTransform(smoothClarity, [0, 1], [maxBlur, 0]);
  const opacity = useTransform(smoothClarity, [0, 1], fadeOpacity ? [0.6, 1] : [1, 1]);
  const scale = useTransform(smoothClarity, [0, 1], [0.98, 1]);

  const [filterStyle, setFilterStyle] = useState('blur(0px)');
  
  useEffect(() => {
    const unsubscribe = blur.on('change', (v) => {
      setFilterStyle(`blur(${v.toFixed(2)}px)`);
    });
    return unsubscribe;
  }, [blur]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        filter: filterStyle,
        opacity,
        scale,
        willChange: 'filter, opacity, transform'
      }}
    >
      {children}
    </motion.div>
  );
};

// Modern section wrapper with clean intro/exit transitions
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
    offset: ["start end", "end start"]
  });

  const intensityConfig = {
    subtle: { blur: 2, opacityRange: [0.85, 1], scaleRange: [0.995, 1] },
    medium: { blur: 4, opacityRange: [0.7, 1], scaleRange: [0.98, 1] },
    strong: { blur: 6, opacityRange: [0.5, 1], scaleRange: [0.96, 1] }
  };

  const config = intensityConfig[intensity];

  // Bell curve for clarity - peaks at center of viewport
  const clarity = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    [0, 0.6, 1, 1, 0.6, 0]
  );
  
  const smoothClarity = useSpring(clarity, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Visual transforms
  const blur = useTransform(smoothClarity, [0, 1], [config.blur, 0]);
  const opacity = useTransform(smoothClarity, [0, 1], config.opacityRange as [number, number]);
  const scale = useTransform(smoothClarity, [0, 1], config.scaleRange as [number, number]);
  
  // Entry/exit Y movement
  const entryY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const exitY = useTransform(scrollYProgress, [0.7, 1], [0, -40]);
  const combinedY = useTransform([entryY, exitY], ([entry, exit]) => {
    return (entry as number) + (exit as number);
  });
  
  const smoothY = useSpring(combinedY, {
    stiffness: 80,
    damping: 25
  });

  const [filterStyle, setFilterStyle] = useState('blur(0px)');
  
  useEffect(() => {
    const unsubscribe = blur.on('change', (v) => {
      setFilterStyle(`blur(${v.toFixed(2)}px)`);
    });
    return unsubscribe;
  }, [blur]);

  return (
    <motion.section
      ref={ref}
      id={id}
      data-scroll-section
      className={`relative ${className}`}
      style={{
        filter: filterStyle,
        opacity,
        scale,
        y: smoothY,
        willChange: 'filter, opacity, transform'
      }}
    >
      {/* Top fade-in gradient overlay for clean section entry */}
      <div 
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10 opacity-50"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 100%)'
        }}
      />
      
      {children}
      
      {/* Bottom fade-out gradient overlay for clean section exit */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10 opacity-50"
        style={{
          background: 'linear-gradient(to top, transparent 0%, transparent 100%)'
        }}
      />
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

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScaleX = useSpring(scaleX, { stiffness: 100, damping: 30 });

  if (variant === 'gradient') {
    return (
      <motion.div 
        ref={ref}
        className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-0"
        style={{ opacity: smoothOpacity, scaleX: smoothScaleX }}
      />
    );
  }

  if (variant === 'fade') {
    return (
      <motion.div 
        ref={ref}
        className="h-32 relative overflow-hidden"
        style={{ opacity: smoothOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      </motion.div>
    );
  }

  return (
    <motion.div 
      ref={ref}
      className="h-px bg-border/50 mx-auto max-w-4xl"
      style={{ opacity: smoothOpacity, scaleX: smoothScaleX }}
    />
  );
};

export default DepthBlur;
