import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage || i18n.language || "en";

  useEffect(() => {
    document.documentElement.lang = current;
  }, [current]);

  const setLang = (lng: "en" | "fr") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("nim_language_preference", lng);
    // Update URL param but keep the current path
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lng);
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Language selection">
      <button
        onClick={() => setLang('en')}
        aria-pressed={current === 'en'}
        aria-label="Switch to English"
        className={`text-sm font-medium px-2 py-1 transition-colors min-h-[44px] min-w-[44px] inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg ${
          current === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <span className="text-muted-foreground" aria-hidden="true">|</span>
      <button
        onClick={() => setLang('fr')}
        aria-pressed={current === 'fr'}
        aria-label="Passer au français"
        className={`text-sm font-medium px-2 py-1 transition-colors min-h-[44px] min-w-[44px] inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg ${
          current === 'fr' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        FR
      </button>
    </div>
  );
};
