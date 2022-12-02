import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    lng: "vn",
    fallbackLng: "vn",
    debug: false,
    defaultNS: "common",
    interpolation: {
      escapeValue: true,
    },
    react: {
      useSuspense: false,
    },
  });

export { i18n };
