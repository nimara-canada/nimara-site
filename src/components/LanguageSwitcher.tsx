import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const language = i18n.language as 'en' | 'fr';

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
    localStorage.setItem("nim_language_preference", lang);
    document.documentElement.lang = lang;
  };

  return (
    <div className="flex items-center gap-1 border-2 border-border rounded-2xl p-1" role="group" aria-label="Language selection">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleLanguageChange('en')}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
        className="text-xs h-8 px-3"
      >
        EN
      </Button>
      <Button
        variant={language === 'fr' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleLanguageChange('fr')}
        aria-pressed={language === 'fr'}
        aria-label="Passer au français"
        className="text-xs h-8 px-3"
      >
        FR
      </Button>
    </div>
  );
};
