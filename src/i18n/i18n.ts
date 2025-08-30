import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import englishTranslation from './locales/en_US.json';
import belarusianTranslation from './locales/be_BY.json';
import russianTranslation from './locales/ru_RU.json';

// Configure i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: englishTranslation
      },
      be: {
        translation: belarusianTranslation
      },
      ru: {
        translation: russianTranslation
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;