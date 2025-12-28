import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

interface DepthBlurProps {
  children: ReactNode;
  className?: string;
  maxBlur?: number; // Maximum blur in pixels
  fadeOpacity?: boolean; // Also fade opacity
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

  // Create a bell curve: 0 at edges, 1 at center
  // scrollYProgress goes from 0 (element entering from bottom) to 1 (element exiting at top)
  // We want max clarity (no blur) when element is centered (around 0.5)
  const clarity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0.7, 1, 0.7, 0]);
  
  const smoothClarity = useSpring(clarity, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Invert for blur: max blur at edges, no blur at center
  const blur = useTransform(smoothClarity, [0, 1], [maxBlur, 0]);
  const opacity = useTransform(smoothClarity, [0, 1], fadeOpacity ? [0.6, 1] : [1, 1]);
  const scale = useTransform(smoothClarity, [0, 1], [0.98, 1]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        filter: useMotionTemplate(blur, (b) => `blur(${b}px)`),
        opacity,
        scale,
        willChange: 'filter, opacity, transform'
      }}
    >
      {children}
    </motion.div>
  );
};

// Helper to create filter string from motion value
function useMotionTemplate(value: MotionValue<number>, template: (v: number) => string) {
  const [filterString, setFilterString] = useState(template(0));
  
  useEffect(() => {
    const unsubscribe = value.on('change', (v) => {
      setFilterString(template(v));
    });
    return unsubscribe;
  }, [value, template]);
  
  return filterString;
}

// Wrapper component for sections that should have depth effect
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

  // Bell curve for clarity
  const clarity = useTransform(
    scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    [0, 0.8, 1, 0.8, 0]
  );
  
  const smoothClarity = useSpring(clarity, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const blur = useTransform(smoothClarity, [0, 1], [config.blur, 0]);
  const opacity = useTransform(smoothClarity, [0, 1], config.opacityRange as [number, number]);
  const scale = useTransform(smoothClarity, [0, 1], config.scaleRange as [number, number]);
  const y = useTransform(smoothClarity, [0, 1], [20, 0]);

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
      id={id}
      data-scroll-section
      className={className}
      style={{
        filter: filterStyle,
        opacity,
        scale,
        y,
        willChange: 'filter, opacity, transform'
      }}
    >
      {children}
    </motion.div>
  );
};

export default DepthBlur;
