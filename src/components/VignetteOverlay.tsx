import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const VignetteOverlay = () => {
  const { scrollYProgress } = useScroll();
  
  // Vignette intensity increases as you scroll
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.4, 0.4, 0]);
  
  const smoothOpacity = useSpring(vignetteOpacity, {
    stiffness: 100,
    damping: 30
  });

  return (
    <>
      {/* Top vignette - gradient from dark to transparent */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-32 pointer-events-none z-30"
        style={{
          opacity: smoothOpacity,
          background: 'linear-gradient(to bottom, rgba(11, 17, 32, 0.6) 0%, rgba(11, 17, 32, 0.3) 40%, transparent 100%)'
        }}
      />
      
      {/* Bottom vignette */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-30"
        style={{
          opacity: smoothOpacity,
          background: 'linear-gradient(to top, rgba(11, 17, 32, 0.6) 0%, rgba(11, 17, 32, 0.3) 40%, transparent 100%)'
        }}
      />
      
      {/* Left edge vignette */}
      <motion.div
        className="fixed top-0 bottom-0 left-0 w-24 pointer-events-none z-30"
        style={{
          opacity: smoothOpacity,
          background: 'linear-gradient(to right, rgba(11, 17, 32, 0.3) 0%, transparent 100%)'
        }}
      />
      
      {/* Right edge vignette */}
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-24 pointer-events-none z-30"
        style={{
          opacity: smoothOpacity,
          background: 'linear-gradient(to left, rgba(11, 17, 32, 0.3) 0%, transparent 100%)'
        }}
      />
      
      {/* Corner accents for depth */}
      <motion.div
        className="fixed top-0 left-0 w-48 h-48 pointer-events-none z-30"
        style={{
          opacity: useTransform(smoothOpacity, [0, 0.4], [0, 0.5]),
          background: 'radial-gradient(ellipse at top left, rgba(11, 17, 32, 0.4) 0%, transparent 70%)'
        }}
      />
      <motion.div
        className="fixed top-0 right-0 w-48 h-48 pointer-events-none z-30"
        style={{
          opacity: useTransform(smoothOpacity, [0, 0.4], [0, 0.5]),
          background: 'radial-gradient(ellipse at top right, rgba(11, 17, 32, 0.4) 0%, transparent 70%)'
        }}
      />
      <motion.div
        className="fixed bottom-0 left-0 w-48 h-48 pointer-events-none z-30"
        style={{
          opacity: useTransform(smoothOpacity, [0, 0.4], [0, 0.5]),
          background: 'radial-gradient(ellipse at bottom left, rgba(11, 17, 32, 0.4) 0%, transparent 70%)'
        }}
      />
      <motion.div
        className="fixed bottom-0 right-0 w-48 h-48 pointer-events-none z-30"
        style={{
          opacity: useTransform(smoothOpacity, [0, 0.4], [0, 0.5]),
          background: 'radial-gradient(ellipse at bottom right, rgba(11, 17, 32, 0.4) 0%, transparent 70%)'
        }}
      />
    </>
  );
};

export default VignetteOverlay;
