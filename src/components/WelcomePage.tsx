import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLocalizedQuizData } from '../data/multilingualQuizData';
import LanguageSelector from './LanguageSelector';
import { LanguageContext } from '../contexts/LanguageContext';

const WelcomePage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState('cinema');
  const [quizThemes, setQuizThemes] = useState(getLocalizedQuizData(language));

  // Update quiz themes when language changes
  useEffect(() => {
    setQuizThemes(getLocalizedQuizData(language));
  }, [language]);

  const handlePlay = () => {
    // When Play button is clicked, navigate to the quiz page with the selected theme
    navigate(`/quiz/${selectedTheme}`);
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTheme(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-indigo-600">
          {t('welcome.title')}
        </h1>
        
        {/* Language Selector */}
        <LanguageSelector />
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-700">
            {t('welcome.chooseTopic')}
          </h2>
          
          <div className="mt-4 space-y-4">
            {quizThemes.map((theme) => (
              <div key={theme.id} className="flex items-center">
                <input
                  type="radio"
                  id={theme.id}
                  name="theme"
                  value={theme.id}
                  checked={selectedTheme === theme.id}
                  onChange={handleThemeChange}
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor={theme.id} className="ml-2 text-gray-700">
                  {theme.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <button
            onClick={handlePlay}
            className="w-full px-4 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {t('welcome.playButton')}
          </button>
        </div>
      </div>
      <p className="mt-6 text-gray-500 text-sm">
        Powered by <code className="bg-gray-200 px-1 py-0.5 rounded">Tailwind CSS</code> v. 3.3.3
      </p>
    </div>
  );
};

export default WelcomePage;