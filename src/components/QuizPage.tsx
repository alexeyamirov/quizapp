import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { QuizQuestion } from '../data/quizData';
import { getLocalizedQuizData } from '../data/multilingualQuizData';
import { LanguageContext } from '../contexts/LanguageContext';
import { getImageUrl } from '../utils/imageUtils'; // Import the utility function

interface ShuffledOption {
  text: string;
  originalIndex: number;
}

const QuizPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  const { themeId } = useParams<{ themeId: string }>();
  const navigate = useNavigate();

  // State for quiz
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<ShuffledOption[]>([]);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  // Function to shuffle options for a question
  const shuffleOptions = useCallback((question: QuizQuestion) => {
    const options = question.options.map((text, originalIndex) => ({
      text,
      originalIndex
    }));
    
    // Fisher-Yates shuffle algorithm
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    
    return options;
  }, []);

  // Function to get a random feedback message
  const getRandomFeedbackMessage = useCallback((correct: boolean) => {
    const messageKey = correct ? 'quiz.correct' : 'quiz.incorrect';
    const messages = t(messageKey, { returnObjects: true });
    
    // If messages is an array, pick a random one, otherwise use the string as is
    if (Array.isArray(messages)) {
      const randomIndex = Math.floor(Math.random() * messages.length);
      return messages[randomIndex];
    }
    return messages;
  }, [t]);
  
  // Initialize quiz with random questions
  useEffect(() => {
    // Get localized quiz data based on current language
    const localizedQuizData = getLocalizedQuizData(language);
    const theme = localizedQuizData.find(theme => theme.id === themeId);
    
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
    setIsCorrect(null);
    
    // Shuffle options for the first question
    if (shuffledQuestions.length > 0) {
      setShuffledOptions(shuffleOptions(shuffledQuestions[0]));
    }
  }, [themeId, navigate, shuffleOptions, language]);

  // Handle next question - using useCallback to memoize the function
  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null);
      setAnswered(false);
      setIsCorrect(null);
      
      // Shuffle options for the next question
      setShuffledOptions(shuffleOptions(questions[nextIndex]));
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
  }, [currentQuestionIndex, questions, userAnswers, navigate, themeId, shuffleOptions]);

  // Effect to handle automatic transition to next question
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (answered) {
      timer = setTimeout(() => {
        handleNextQuestion();
      }, 2000); // 2 seconds delay
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [answered, handleNextQuestion]);

  // Current question
  const currentQuestion = questions[currentQuestionIndex];

  // Handle option selection
  const handleOptionSelect = (shuffledIndex: number) => {
    if (answered) return;
    
    // Get the original index from the shuffled options
    const originalIndex = shuffledOptions[shuffledIndex].originalIndex;
    const correct = originalIndex === currentQuestion.correctAnswer;
    
    setIsCorrect(correct);
    setSelectedOption(shuffledIndex);
    setAnswered(true);

    // Set random feedback message
    setFeedbackMessage(getRandomFeedbackMessage(correct));
    
    // Save user's answer (using the original index)
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = originalIndex;
    setUserAnswers(newUserAnswers);
  };

  // If questions are not loaded yet or shuffled options aren't ready
  if (!currentQuestion || shuffledOptions.length === 0) {
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
        
        {/* Question image - Using the getImageUrl utility function */}
        <div className="mb-6 overflow-hidden rounded-lg">
          <img 
            src={getImageUrl(currentQuestion.imageUrl)} 
            alt="Quiz question" 
            className="object-cover w-full h-96"
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
        
        {/* Answer options - now using shuffled options */}
        <div className="space-y-3">
          {shuffledOptions.map((option, shuffledIndex) => (
            <button
              key={shuffledIndex}
              onClick={() => handleOptionSelect(shuffledIndex)}
              className={`w-full p-3 text-left rounded-lg transition-colors ${
                selectedOption === shuffledIndex
                  ? isCorrect
                    ? 'bg-green-100 border-green-500 border-2' // Correct answer
                    : 'bg-red-100 border-red-500 border-2'     // Wrong answer
                  : 'bg-gray-100 hover:bg-gray-200'            // Unanswered
              }`}
              disabled={answered}
            >
              {option.text}
            </button>
          ))}
        </div>
        
        {/* Feedback message */}
        {answered && (
          <div className={`mt-4 p-3 text-center rounded ${
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {feedbackMessage}
          </div>
        )}
        
        {/* Loading indicator for next question */}
        {answered && (
          <div className="mt-4 text-center text-sm text-gray-500">
            {t('quiz.nextQuestionIn')}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;