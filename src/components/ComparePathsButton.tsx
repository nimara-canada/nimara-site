import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitCompare } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const ComparePathsButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtComparison, setIsAtComparison] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const comparisonSection = document.getElementById("path-comparison");
      
      // Show button after scrolling 400px
      setIsVisible(scrollY > 400);
      
      // Hide when at comparison section (only on homepage)
      if (comparisonSection && isHomepage) {
        const rect = comparisonSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsAtComparison(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  const handleClick = () => {
    if (isHomepage) {
      const comparisonSection = document.getElementById("path-comparison");
      if (comparisonSection) {
        comparisonSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#path-comparison");
    }
  };

  return (
    <AnimatePresence>
      {isVisible && !isAtComparison && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={handleClick}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg hover:bg-[#5835B8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 min-h-[44px]"
          aria-label="Compare Path A and Path B"
        >
          <GitCompare className="w-5 h-5" />
          <span className="hidden sm:inline">Compare Paths</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
