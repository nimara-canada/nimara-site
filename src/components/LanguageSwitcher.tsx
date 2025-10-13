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
    <div className="flex items-center gap-1 border-2 border-border rounded-2xl p-1" role="group" aria-label="Language selection">
      <Button
        variant={current === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLang('en')}
        aria-pressed={current === 'en'}
        aria-label="Switch to English"
        className="text-xs h-8 px-3"
      >
        EN
      </Button>
      <Button
        variant={current === 'fr' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLang('fr')}
        aria-pressed={current === 'fr'}
        aria-label="Passer au français"
        className="text-xs h-8 px-3"
      >
        FR
      </Button>
    </div>
  );
};
