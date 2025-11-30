import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
const STORAGE_KEY = "nim_announce_hiring_2025";
const END_DATE = new Date("2026-03-31T00:00:00");
export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    i18n
  } = useTranslation();
  const language = i18n.language as 'en' | 'fr';
  useEffect(() => {
    // Check if announcement should be visible
    const isDismissed = localStorage.getItem(STORAGE_KEY) === "dismissed";
    const isExpired = new Date() >= END_DATE;
    setIsVisible(!isDismissed && !isExpired);

    // Set CSS variable for announcement height
    if (!isDismissed && !isExpired) {
      const updateHeight = () => {
        const bar = document.getElementById("announcement_hiring_2025");
        if (bar) {
          document.documentElement.style.setProperty("--announcement-height", `${bar.offsetHeight}px`);
        }
      };
      updateHeight();
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

    // Fire analytics event (if you have analytics setup)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "announcement_dismiss", {
        slug: "hiring-2025"
      });
    }
  };
  const handleLinkClick = () => {
    // Fire analytics event (if you have analytics setup)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "announcement_click", {
        slug: "hiring-2025"
      });
    }
  };
  if (!isVisible) return null;
  return <aside role="region" aria-label="Site announcement" id="announcement_hiring_2025" className="sticky top-0 z-[60] bg-[hsl(var(--nimara-purple))] text-white">
      <div className="container mx-auto px-4 py-3 sm:py-3.5 rounded border-accent bg-accent">
        <div className="flex items-center justify-between gap-4">
          <p className="text-base leading-tight flex-1 text-center px-[2px] py-[2px] sm:text-center font-medium text-secondary-foreground">
            {language === 'fr' ? "Nimara recrute les meilleurs experts canadiens sans but lucratif pour notre première équipe de livraison. " : "Nimara is hiring top Canadian nonprofit experts for our first delivery team. "}
            <a href={`/consultants?utm_source=site&utm_medium=announcement_bar&utm_campaign=hiring-2025`} onClick={handleLinkClick} className="underline hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[hsl(var(--nimara-purple))] rounded-sm font-semibold">
              {language === 'fr' ? "Postulez maintenant →" : "Apply now →"}
            </a>
          </p>
          <button type="button" aria-label="Dismiss announcement" id="announcement_close" onClick={handleDismiss} className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[hsl(var(--nimara-purple))] transition-colors bg-secondary-foreground">
            <X aria-hidden="true" className="w-5 h-5 bg-destructive-foreground text-accent" />
          </button>
        </div>
      </div>
    </aside>;
};