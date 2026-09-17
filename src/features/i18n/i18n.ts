import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
const ar = { common: { navigation: "التنقل", workspace: "المنشأة", switchWorkspace: "تبديل المنشأة", skipToMain: "انتقل للمحتوى", logout: "تسجيل الخروج" }, login: { welcomeTitle: "مرحبًا بك في OnOneBox", subtitle: "سجّل الدخول إلى لوحة التحكم", orSignInWith: "أو الدخول باستخدام", needAssistance: "تحتاج مساعدة؟", helpCenter: "مركز المساعدة" } };

export const supportedLanguages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      es: { translation: es },
      fr: { translation: fr },
    },
    fallbackLng: "ar",
    supportedLngs: ["ar", "en", "es", "fr"],
    load: "languageOnly",
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "ononebox:lang",
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
