import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  
  const languages: LanguageOption[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'be', name: 'Беларуская', flag: '🇧🇾' }
  ];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  // Helper function to check if a language is currently active
  const isCurrentLanguage = (code: string): boolean => {
    return i18n.language === code || i18n.language.startsWith(`${code}-`);
};

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700">
        {t('welcome.chooseLanguage')}
      </h2>

      <div className="flex space-x-4 mt-4">
        {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`px-4 py-2 rounded-md flex-1 items-center space-x-2 transition-colors ${
                isCurrentLanguage(language.code)
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <span>{language.name}</span>
            </button>
          ))}
        </div>
    </div>
  );
};

export default LanguageSelector;