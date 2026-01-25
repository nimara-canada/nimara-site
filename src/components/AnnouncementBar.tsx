import { useState, useEffect } from "react";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "nim_announce_cohort_feb_2026";
const END_DATE = new Date("2026-02-11T00:00:00");

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
        const bar = document.getElementById("announcement_cohort_feb_2026");
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
        slug: "cohort-feb-2026"
      });
    }
  };

  const handleLinkClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "announcement_click", {
        slug: "cohort-feb-2026"
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
          id="announcement_cohort_feb_2026"
          className="fixed top-0 left-0 right-0 z-[60] bg-primary"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Content */}
              <div className="flex-1 flex items-center justify-center gap-2 sm:gap-4">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-xs font-medium tracking-wide uppercase">
                  <Sparkles className="w-3 h-3" />
                  Feb 11
                </span>
                <p className="text-sm sm:text-base text-primary-foreground text-center font-medium">
                  {language === 'fr' 
                    ? "Cohorte Smart Team — Lancement le 11 février 2026" 
                    : "Smart Team Cohort launching Feb 11, 2026"
                  }
                </p>
                <a
                  href="/smart-team-cohort"
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors group whitespace-nowrap"
                >
                  <span className="relative">
                    {language === 'fr' ? "En savoir plus" : "Learn more"}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary-foreground transition-all duration-300 group-hover:w-full" />
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
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                <X aria-hidden="true" className="w-5 h-5 text-primary-foreground" />
              </motion.button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
