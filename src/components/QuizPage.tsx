import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { quizData, QuizQuestion } from '../data/quizData';

const QuizPage: React.FC = () => {
  const { t } = useTranslation();
  const { themeId } = useParams<{ themeId: string }>();
  const navigate = useNavigate();

  // State for quiz
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  // Initialize quiz with random questions
  useEffect(() => {
    const theme = quizData.find(theme => theme.id === themeId);
    
    if (!theme) {
      // If theme not found, redirect to welcome page
      navigate('/');
      return;
    }

    // Shuffle questions and take first 10
    const shuffledQuestions = [...theme.questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    
    setQuestions(shuffledQuestions);
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswered(false);
  }, [themeId, navigate]);

  // Current question
  const currentQuestion = questions[currentQuestionIndex];

  // Handle option selection
  const handleOptionSelect = (optionIndex: number) => {
    if (answered) return;
    
    setSelectedOption(optionIndex);
    setAnswered(true);

    // Save user's answer
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newUserAnswers);
  };

  // Handle next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setAnswered(false);
    } else {
      // Calculate score
      const correctAnswers = userAnswers.filter(
        (answer, index) => answer === questions[index].correctAnswer
      ).length;
      
      // Navigate to results page with score
      navigate('/results', { 
        state: { 
          score: correctAnswers, 
          total: questions.length,
          themeId 
        } 
      });
    }
  };

  // If questions are not loaded yet
  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-t-4 border-b-4 border-indigo-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4 text-sm text-gray-500">
          {t('quiz.question')} {currentQuestionIndex + 1} {t('quiz.of')} {questions.length}
        </div>
        
        {/* Question image */}
        <div className="mb-6 overflow-hidden rounded-lg">
          <img 
            src={currentQuestion.imageUrl} 
            alt="Quiz question" 
            className="object-cover w-full h-64"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/640x360?text=Image+Not+Found';
            }}
          />
        </div>
        
        {/* Question text */}
        <h2 className="mb-6 text-xl font-bold text-gray-800">
          {currentQuestion.question}
        </h2>
        
        {/* Answer options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              className={`w-full p-3 text-left rounded-lg transition-colors ${
                selectedOption === index
                  ? selectedOption === currentQuestion.correctAnswer
                    ? 'bg-green-100 border-green-500 border-2'
                    : 'bg-red-100 border-red-500 border-2'
                  : answered && index === currentQuestion.correctAnswer
                  ? 'bg-green-100 border-green-500 border-2'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              disabled={answered}
            >
              {option}
            </button>
          ))}
        </div>
        
        {/* Next button */}
        <div className="mt-6 text-right">
          <button
            onClick={handleNextQuestion}
            className={`px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              !answered && 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!answered}
          >
            {currentQuestionIndex < questions.length - 1 ? t('quiz.next') : t('results.playAgain')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;