import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Section {
  id: string;
  label: string;
}

interface SectionNavProps {
  sections: Section[];
}

export const SectionNav = ({ sections }: SectionNavProps) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);

      // Find which section is currently in view
      const viewportHeight = window.innerHeight;
      const viewportCenter = scrollY + viewportHeight * 0.4;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          
          if (viewportCenter >= elementTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Page sections"
        >
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            
            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group flex items-center gap-3 py-1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                aria-label={`Go to ${section.label}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {/* Label - shows on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: 10, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className={`
                        text-xs font-medium whitespace-nowrap px-3 py-1.5 rounded-full
                        backdrop-blur-md border transition-colors
                        ${isActive 
                          ? 'bg-primary/90 text-primary-foreground border-primary/50' 
                          : 'bg-background/80 text-muted-foreground border-border/50 group-hover:text-foreground group-hover:border-border'
                        }
                      `}
                    >
                      {section.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Dot indicator */}
                <div className="relative flex items-center justify-center">
                  {/* Active glow */}
                  {isActive && (
                    <motion.div
                      layoutId="sectionGlow"
                      className="absolute w-6 h-6 rounded-full bg-primary/20 blur-sm"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Dot */}
                  <motion.div
                    className={`
                      relative w-2.5 h-2.5 rounded-full transition-all duration-300
                      ${isActive 
                        ? 'bg-primary scale-100' 
                        : 'bg-muted-foreground/40 scale-75 group-hover:scale-100 group-hover:bg-muted-foreground/70'
                      }
                    `}
                    whileHover={{ scale: 1.2 }}
                  />
                  
                  {/* Active ring */}
                  {isActive && (
                    <motion.div
                      layoutId="sectionRing"
                      className="absolute w-5 h-5 rounded-full border-2 border-primary/50"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              </motion.button>
            );
          })}
          
          {/* Progress line connecting dots */}
          <div className="absolute right-[4px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border/30 to-transparent pointer-events-none" />
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default SectionNav;
