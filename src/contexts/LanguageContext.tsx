import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'nim_language_preference';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check localStorage first
    const saved = localStorage.getItem(STORAGE_KEY) as Language;
    if (saved === 'en' || saved === 'fr') {
      setLanguageState(saved);
      return;
    }

    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('fr')) {
      setLanguageState('fr');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string) => {
    const translations = language === 'fr' ? translationsFr : translationsEn;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

// Translations
const translationsEn: Record<string, string> = {
  // Header
  'nav.company': 'Company',
  'nav.consultants': 'Consultants',
  'nav.signin': 'Sign In',
  'nav.bookCall': 'Book a call',
  
  // Hero
  'hero.title': 'Expert Nonprofit Consulting. On Demand.',
  'hero.subtitle': 'Get matched with a vetted nonprofit consultant within 48 hours. No contracts. Just expert help when you need it.',
  'hero.cta': 'Get started',
  
  // Announcement
  'announce.text': 'AI for Nonprofit Leaders—Free 60-min live class (Canada) • Oct 30, 2025 • Seats limited →',
  'announce.cta': 'Save your seat',
  'announce.dismiss': 'Dismiss announcement',
  
  // Three Column
  'three.speed.title': 'Speed',
  'three.speed.desc': 'Get matched with the right consultant in 48 hours or less',
  'three.quality.title': 'Quality',
  'three.quality.desc': 'All consultants are pre-vetted and have deep nonprofit experience',
  'three.trust.title': 'Trust',
  'three.trust.desc': 'Fixed rates, clear deliverables, and satisfaction guaranteed',
  
  // Experts
  'experts.title': 'Meet our experts',
  'experts.subtitle': 'Every consultant in our network has been carefully vetted for expertise and cultural fit with the nonprofit sector.',
  
  // How It Works
  'how.title': 'How it works',
  'how.step1.title': 'Tell us what you need',
  'how.step1.desc': 'Share your challenge and timeline',
  'how.step2.title': 'Get matched',
  'how.step2.desc': 'We connect you with the right expert within 48 hours',
  'how.step3.title': 'Start working',
  'how.step3.desc': 'Clear scope, fixed price, satisfaction guaranteed',
  
  // Categories
  'categories.title': 'We can help with...',
  
  // Benefits
  'benefits.title': 'Why nonprofits choose Nimara',
  
  // Pricing
  'pricing.title': 'Simple, transparent pricing',
  'pricing.subtitle': 'No hidden fees. No surprises. Just expert help at fair rates.',
  
  // FAQ
  'faq.title': 'Frequently asked questions',
  
  // Final CTA
  'final.title': 'Ready to get started?',
  'final.subtitle': 'Tell us what you need and get matched with the perfect consultant.',
  'final.cta': 'Book a free consultation',
  
  // Footer
  'footer.tagline': 'Expert nonprofit consulting, on demand',
  'footer.company': 'Company',
  'footer.about': 'About us',
  'footer.consultants': 'For consultants',
  'footer.resources': 'Resources',
  'footer.blog': 'Blog',
  'footer.contact': 'Contact',
  'footer.legal': 'Legal',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'footer.accessibility': 'Accessibility',
  'footer.trust': 'Trust & Safety',
  'footer.rights': 'All rights reserved.',
};

const translationsFr: Record<string, string> = {
  // Header
  'nav.company': 'Entreprise',
  'nav.consultants': 'Consultants',
  'nav.signin': 'Connexion',
  'nav.bookCall': 'Réserver un appel',
  
  // Hero
  'hero.title': 'Consultation experte pour OBNL. Sur demande.',
  'hero.subtitle': 'Soyez jumelé avec un consultant OBNL qualifié en 48 heures. Sans contrat. Juste de l\'aide experte quand vous en avez besoin.',
  'hero.cta': 'Commencer',
  
  // Announcement
  'announce.text': 'IA pour dirigeants d\'OBNL—Cours en direct gratuit de 60 min (Canada) • 30 oct 2025 • Places limitées →',
  'announce.cta': 'Réservez votre place',
  'announce.dismiss': 'Fermer l\'annonce',
  
  // Three Column
  'three.speed.title': 'Rapidité',
  'three.speed.desc': 'Jumelé avec le bon consultant en 48 heures ou moins',
  'three.quality.title': 'Qualité',
  'three.quality.desc': 'Tous les consultants sont présélectionnés avec une expérience approfondie en OBNL',
  'three.trust.title': 'Confiance',
  'three.trust.desc': 'Tarifs fixes, livrables clairs et satisfaction garantie',
  
  // Experts
  'experts.title': 'Rencontrez nos experts',
  'experts.subtitle': 'Chaque consultant de notre réseau a été soigneusement sélectionné pour son expertise et son adéquation culturelle avec le secteur OBNL.',
  
  // How It Works
  'how.title': 'Comment ça fonctionne',
  'how.step1.title': 'Dites-nous ce dont vous avez besoin',
  'how.step1.desc': 'Partagez votre défi et votre échéancier',
  'how.step2.title': 'Soyez jumelé',
  'how.step2.desc': 'Nous vous connectons avec le bon expert en 48 heures',
  'how.step3.title': 'Commencez à travailler',
  'how.step3.desc': 'Portée claire, prix fixe, satisfaction garantie',
  
  // Categories
  'categories.title': 'Nous pouvons vous aider avec...',
  
  // Benefits
  'benefits.title': 'Pourquoi les OBNL choisissent Nimara',
  
  // Pricing
  'pricing.title': 'Tarification simple et transparente',
  'pricing.subtitle': 'Pas de frais cachés. Pas de surprises. Juste de l\'aide experte à des tarifs équitables.',
  
  // FAQ
  'faq.title': 'Questions fréquemment posées',
  
  // Final CTA
  'final.title': 'Prêt à commencer?',
  'final.subtitle': 'Dites-nous ce dont vous avez besoin et soyez jumelé avec le consultant parfait.',
  'final.cta': 'Réserver une consultation gratuite',
  
  // Footer
  'footer.tagline': 'Consultation experte pour OBNL, sur demande',
  'footer.company': 'Entreprise',
  'footer.about': 'À propos',
  'footer.consultants': 'Pour consultants',
  'footer.resources': 'Ressources',
  'footer.blog': 'Blogue',
  'footer.contact': 'Contact',
  'footer.legal': 'Légal',
  'footer.privacy': 'Politique de confidentialité',
  'footer.terms': 'Conditions d\'utilisation',
  'footer.accessibility': 'Accessibilité',
  'footer.trust': 'Confiance et sécurité',
  'footer.rights': 'Tous droits réservés.',
};
