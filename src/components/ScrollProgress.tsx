import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Create gradient opacity based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
        style={{ 
          scaleX,
          opacity,
          background: 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--primary)) 100%)',
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[8px] z-[59] origin-left blur-sm"
        style={{ 
          scaleX,
          opacity: glowOpacity,
          background: 'linear-gradient(90deg, hsl(var(--primary) / 0.6) 0%, hsl(var(--accent) / 0.4) 50%, hsl(var(--primary) / 0.6) 100%)',
        }}
      />
    </>
  );
};

export default ScrollProgress;
