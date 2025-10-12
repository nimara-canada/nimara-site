import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "nim_announce_ai_2025";
const END_DATE = new Date("2025-11-05T00:00:00");

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if announcement should be visible
    const isDismissed = localStorage.getItem(STORAGE_KEY) === "dismissed";
    const isExpired = new Date() >= END_DATE;

    setIsVisible(!isDismissed && !isExpired);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, "dismissed");
    setIsVisible(false);
    
    // Fire analytics event (if you have analytics setup)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "announcement_dismiss", {
        slug: "ai-masterclass-2025",
      });
    }
  };

  const handleLinkClick = () => {
    // Fire analytics event (if you have analytics setup)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "announcement_click", {
        slug: "ai-masterclass-2025",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      role="region"
      aria-label="Site announcement"
      id="announcement_ai_2025"
      className="bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4 py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[15px] sm:text-base font-semibold leading-tight flex-1">
            AI Masterclass for Nonprofit Leaders — Nov 4. Few spots left —{" "}
            <a
              href="/resources/ai-masterclass?utm_source=site&utm_medium=announcement&utm_campaign=aimc-nov4"
              onClick={handleLinkClick}
              className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-sm"
            >
              Register now
            </a>
            .
          </p>
          <button
            type="button"
            aria-label="Dismiss announcement"
            id="announcement_close"
            onClick={handleDismiss}
            className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-sm hover:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </aside>
  );
};
