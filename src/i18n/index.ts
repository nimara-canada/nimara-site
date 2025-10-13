import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/common.json";
import fr from "./locales/fr/common.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: { en: { common: en }, fr: { common: fr } },
      lng: localStorage.getItem("nim_language_preference") || undefined,
      fallbackLng: "en",
      supportedLngs: ["en", "fr"],
      ns: ["common"],
      defaultNS: "common",
      debug: false,
      detection: {
        order: ["querystring", "localStorage", "navigator"],
        lookupQuerystring: "lang",
        lookupLocalStorage: "nim_language_preference",
        caches: ["localStorage"],
      },
      interpolation: {
        escapeValue: false,
        format(value, format, lng) {
          if (format === "datetime") {
            return new Intl.DateTimeFormat(lng, { dateStyle: "medium" }).format(value);
          }
          if (format === "number") {
            return new Intl.NumberFormat(lng).format(value);
          }
          return value;
        },
      },
      react: { useSuspense: false },
    });
}

export default i18n;
