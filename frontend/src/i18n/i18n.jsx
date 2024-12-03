// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locals/en/english.json';
import frTranslation from '../locals/fr/dari.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
  },
  lng: 'en', // default language
  fallbackLng: 'en', // fallback language if the selected language doesn't have translations
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
