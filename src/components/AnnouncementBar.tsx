import { useState, useEffect } from "react";
import { X } from "lucide-react";
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          role="region"
          aria-label="Site announcement"
          id="announcement_cohort_feb_2026"
          className="sticky top-0 z-[60] bg-[#6D28D9] text-white"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2">
            {/* Left: badge + message */}
            <div className="flex min-w-0 items-center gap-3">
              <span className="hidden sm:inline-flex shrink-0 items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                <span className="opacity-90">FEB 11</span>
              </span>
              <p className="min-w-0 truncate text-sm font-medium">
                Smart Team Cohort launching Feb 11, 2026
              </p>
            </div>

            {/* Right: actions */}
            <div className="flex shrink-0 items-center gap-2">
              <a
                href="/smart-team-cohort"
                onClick={handleLinkClick}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-semibold underline underline-offset-4 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
              <button
                type="button"
                aria-label="Dismiss announcement"
                onClick={handleDismiss}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
