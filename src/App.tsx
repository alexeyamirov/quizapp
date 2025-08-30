import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n/i18n';

// Import components
import WelcomePage from './components/WelcomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';

// Import language context
import { LanguageContext } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  // Update language when i18n language changes
  useEffect(() => {
    const changeLanguage = (lang: string) => {
      setCurrentLanguage(lang);
    };

    i18n.on('languageChanged', changeLanguage);

    return () => {
      i18n.off('languageChanged', changeLanguage);
    };
  }, [i18n]);

  return (
    <LanguageContext.Provider value={{ language: currentLanguage, setLanguage: (lang: string) => i18n.changeLanguage(lang) }}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/quiz/:themeId" element={<QuizPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;