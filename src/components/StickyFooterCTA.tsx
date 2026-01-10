import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const DISMISS_KEY = "nimara_sticky_cta_dismissed";
const DISMISS_DURATION_DAYS = 7;

export default function StickyFooterCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    // Check localStorage for dismissal
    const dismissedAt = localStorage.getItem(DISMISS_KEY);
    if (dismissedAt) {
      const dismissedDate = new Date(parseInt(dismissedAt));
      const now = new Date();
      const daysSinceDismissed = (now.getTime() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < DISMISS_DURATION_DAYS) {
        return; // Stay dismissed
      }
      localStorage.removeItem(DISMISS_KEY);
    }
    setIsDismissed(false);
  }, []);

  useEffect(() => {
    if (isDismissed) return;

    let hasShown = false;

    const showCTA = () => {
      if (!hasShown) {
        hasShown = true;
        setIsVisible(true);
      }
    };

    // Timer: show after 8 seconds
    const timer = setTimeout(showCTA, 8000);

    // Scroll: show after 25% scroll
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent >= 0.25) {
        showCTA();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem(DISMISS_KEY, Date.now().toString());
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/50 bg-background/95 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="mx-auto max-w-[900px] px-4 py-4 sm:px-6 sm:py-5">
            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center justify-between gap-6">
              <div className="flex-1 min-w-0">
                <p className="text-foreground font-medium text-base">
                  Ready to get your systems in order?
                </p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Built for teams with 0–50 staff in Canada.
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <a
                  href={TYPEFORM_HEALTH_CHECK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                >
                  Take the free 6-minute check →
                </a>
                <Button asChild size="default" className="gap-2">
                  <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book a free call
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <button
                  onClick={handleDismiss}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted ml-2"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden space-y-3 pb-2 pr-10">
              <p className="text-foreground font-medium text-sm">
                Ready to get your systems in order?
              </p>
              
              <Button asChild size="default" className="w-full gap-2">
                <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a free call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              
              <div className="flex items-center justify-between">
                <a
                  href={TYPEFORM_HEALTH_CHECK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Take the free 6-minute check →
                </a>
              </div>
              
              <p className="text-muted-foreground text-[10px]">
                Built for teams with 0–50 staff in Canada.
              </p>

              {/* Mobile close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
