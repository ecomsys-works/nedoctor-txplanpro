import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/locales/en/translation.json";
import ru from "@/locales/ru/translation.json";

// http://localhost:5173/?lang=en

// http://localhost:5173/?lang=ru

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    supportedLngs: ["en", "ru"],

    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },

    detection: {
      order: ["querystring", "navigator"],
      lookupQuerystring: "lang",
      caches: [],
    },

    interpolation: {
      escapeValue: false,
    },

    debug: false
  });

export default i18n;