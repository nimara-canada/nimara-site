import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 border-2 border-border rounded-2xl p-1" role="group" aria-label="Language selection">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
        className="text-xs h-8 px-3"
      >
        EN
      </Button>
      <Button
        variant={language === 'fr' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('fr')}
        aria-pressed={language === 'fr'}
        aria-label="Passer au français"
        className="text-xs h-8 px-3"
      >
        FR
      </Button>
    </div>
  );
};
