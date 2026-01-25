import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "nim_announce_cohort_feb_2026";
const END_DATE = new Date("2026-02-11T00:00:00");

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          role="region"
          aria-label="Site announcement"
          id="announcement_cohort_feb_2026"
          className="sticky top-0 z-[60] bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#7C3AED] text-white shadow-sm"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5">
            {/* Left: badge + message */}
            <div className="flex min-w-0 flex-1 items-center justify-center gap-3 sm:gap-4">
              <span className="hidden sm:inline-flex shrink-0 items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold tracking-widest uppercase">
                Feb 11
              </span>
              <p className="min-w-0 text-sm sm:text-[15px] font-medium tracking-wide opacity-95">
                <span className="hidden sm:inline">Smart Team Cohort launching Feb 11, 2026</span>
                <span className="sm:hidden">Smart Team Cohort — Feb 11</span>
              </p>
              <a
                href="/smart-team-cohort"
                onClick={handleLinkClick}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#6D28D9] rounded-sm"
              >
                <span className="underline underline-offset-[3px] decoration-white/40 group-hover:decoration-white/70 transition-all">
                  Learn more
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Right: dismiss */}
            <button
              type="button"
              aria-label="Dismiss announcement"
              onClick={handleDismiss}
              className="ml-4 shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <X className="h-4 w-4 opacity-80" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
