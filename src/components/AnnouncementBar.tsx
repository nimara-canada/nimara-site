import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "nim_announce_hiring_2025_v2";
const END_DATE = new Date("2026-03-31T00:00:00");

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { i18n } = useTranslation();
  const language = i18n.language as 'en' | 'fr';

  useEffect(() => {
    const isDismissed = localStorage.getItem(STORAGE_KEY) === "dismissed";
    const isExpired = new Date() >= END_DATE;
    setIsVisible(!isDismissed && !isExpired);

    if (!isDismissed && !isExpired) {
      const updateHeight = () => {
        const bar = document.getElementById("announcement_hiring_2025");
        if (bar) {
          document.documentElement.style.setProperty("--announcement-height", `${bar.offsetHeight}px`);
        }
      };
      requestAnimationFrame(() => {
        requestAnimationFrame(updateHeight);
      });
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    } else {
      document.documentElement.style.setProperty("--announcement-height", "0px");
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, "dismissed");
    setIsVisible(false);
    document.documentElement.style.setProperty("--announcement-height", "0px");

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "announcement_dismiss", {
        slug: "hiring-2025"
      });
    }
  };

  const handleLinkClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "announcement_click", {
        slug: "hiring-2025"
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          role="region"
          aria-label="Site announcement"
          id="announcement_hiring_2025"
          className="fixed top-0 left-0 right-0 z-[60] bg-accent"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Content */}
              <div className="flex-1 flex items-center justify-center gap-2 sm:gap-4">
              <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-secondary-background/20 text-secondary-background text-xs font-medium tracking-wide uppercase">
                Now Hiring
              </span>
              <p className="text-sm sm:text-base text-secondary-background text-center font-medium">
                {language === 'fr' 
                  ? "Nimara recrute les meilleurs experts canadiens sans but lucratif." 
                  : "Nimara is hiring top Canadian nonprofit experts."
                }
              </p>
              <a
                href="https://www.notion.so/Consultant-Hire-2bb227f1ee3a8018b693d47e9610c583?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary-background hover:text-secondary-background/80 transition-colors group whitespace-nowrap"
              >
                  <span className="relative">
                    {language === 'fr' ? "Postulez" : "Apply now"}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-secondary-background transition-all duration-300 group-hover:w-full" />
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              </div>

              {/* Dismiss button */}
              <motion.button
                type="button"
                aria-label="Dismiss announcement"
                onClick={handleDismiss}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary-background/10 transition-colors"
              >
                <X aria-hidden="true" className="w-5 h-5 text-secondary-background" />
              </motion.button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
