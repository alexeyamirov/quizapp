import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ResultsState {
  score: number;
  total: number;
  themeId: string;
}

const ResultsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total, themeId } = (location.state as ResultsState) || { score: 0, total: 10, themeId: 'cinema' };

  // Calculate percentage for visual representation
  const percentage = (score / total) * 100;

  // Get the appropriate feedback message based on score
  const getFeedbackMessage = () => {
    return t(`results.feedback.${score}`);
  };

  // Handle play again button
  const handlePlayAgain = () => {
    navigate(`/quiz/${themeId}`);
  };

  // Handle return to main button
  const handleReturnToMain = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-center text-indigo-600">
          {t('results.title')}
        </h1>

        {/* Score display */}
        <div className="mb-8 text-center">
          <div className="relative w-40 h-40 mx-auto mb-4">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200 stroke-current"
                strokeWidth="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              <circle
                className="text-indigo-600 stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 * (1 - percentage / 100)}
                transform="rotate(-90 50 50)"
              ></circle>
              <text
                x="50"
                y="50"
                fontFamily="Verdana"
                fontSize="20"
                textAnchor="middle"
                alignmentBaseline="middle"
                fill="#4F46E5"
              >
                {score}/{total}
              </text>
            </svg>
          </div>
          <p className="text-xl text-gray-700">
            {t('results.score', { correct: score, total })}
          </p>
        </div>

        {/* Feedback message */}
        <div className="p-4 mb-6 text-center bg-indigo-50 rounded-lg">
          <p className="text-lg text-indigo-800">{getFeedbackMessage()}</p>
        </div>

        {/* Play again button */}
        <button
          onClick={handlePlayAgain}
          className="w-full px-4 py-3 mb-3 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {t('results.playAgain')}
        </button>

        {/* Return to main button */}
        <button
          onClick={handleReturnToMain}
          className="w-full px-4 py-3 font-semibold text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {t('results.returnToMain')}
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;