import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const STORAGE_KEY = "nim_announce_ai_2025";
const END_DATE = new Date("2025-10-31T00:00:00");

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t, language } = useLanguage();

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
      className="sticky top-0 z-50 bg-[#6945D8] text-white"
    >
      <div className="container mx-auto px-4 py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-base font-normal leading-tight flex-1 text-center sm:text-left">
            {language === 'fr' 
              ? "Classe de maître IA pour les dirigeants d'organismes à but non lucratif — 30 octobre. Quelques places restantes — " 
              : "AI Masterclass for Nonprofit Leaders — Oct 30. Few spots left — "}
            <a
              href={`/ai-masterclass?utm_source=site&utm_medium=announcement_bar&utm_campaign=aimc-oct30-2025&lang=${language}`}
              onClick={handleLinkClick}
              className="underline hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6945D8] rounded-sm"
            >
              {language === 'fr' ? "inscrivez-vous maintenant" : "register now"}
            </a>
          </p>
          <button
            type="button"
            aria-label="Dismiss announcement"
            id="announcement_close"
            onClick={handleDismiss}
            className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6945D8] transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </aside>
  );
};
