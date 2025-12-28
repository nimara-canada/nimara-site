import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'two-ways', label: 'Paths' },
  { id: 'fit-check', label: 'Fit' },
  { id: 'how-we-help', label: 'Process' },
  { id: 'system', label: 'System' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'integrations', label: 'Tools' },
  { id: 'faq', label: 'FAQ' },
];

export const SectionIndicator = () => {
  const { scrollYProgress } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after first viewport
      setIsVisible(scrollTop > windowHeight * 0.5);

      // Find active section
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
    >
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group flex items-center gap-3 justify-end"
          aria-label={`Go to ${section.label}`}
        >
          <span className={`
            text-[10px] uppercase tracking-wider font-medium transition-all duration-300
            ${index === activeIndex 
              ? 'opacity-100 text-foreground' 
              : 'opacity-0 group-hover:opacity-60 text-muted-foreground'
            }
          `}>
            {section.label}
          </span>
          <motion.div
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === activeIndex 
                ? 'bg-primary scale-125' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }
            `}
            animate={{
              scale: index === activeIndex ? 1.25 : 1
            }}
          />
        </button>
      ))}
    </motion.div>
  );
};

export default SectionIndicator;
