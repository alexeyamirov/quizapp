import { QuizTheme } from './quizData';
import cinemaData from './topics/cinema.json';
import geographyData from './topics/geography.json';
import historyData from './topics/history.json';
import scienceData from './topics/science.json';

// Supported locales
export type Locale = 'en' | 'ru' | 'be';

// Multilingual question interface
export interface MultilingualQuizQuestion {
  id: number;
  imageUrl: string;
  question: Record<Locale, string>;
  options: Record<Locale, string[]>;
  correctAnswer: number; // index into options[en]
}

// Multilingual theme
export interface MultilingualQuizTheme {
  id: string;
  name: Record<Locale, string>;
  questions: MultilingualQuizQuestion[];
}

// Combine all topic data into one array
export const multilingualQuizData: MultilingualQuizTheme[] = [
  cinemaData,
  geographyData,
  historyData,
  scienceData
];

// Transform multilingual data into single-language QuizTheme[]
export const getLocalizedQuizData = (language: string): QuizTheme[] => {
  return multilingualQuizData.map(theme => ({
    id: theme.id,
    name: theme.name[(language as Locale)] || theme.name.en,
    questions: theme.questions.map(q => {
      const allOptions = q.options[(language as Locale)] || q.options.en;
      
      // If there are exactly 4 options, use them as is
      if (allOptions.length === 4) {
        return {
          id: q.id,
          imageUrl: q.imageUrl,
          question: q.question[(language as Locale)] || q.question.en,
          options: allOptions,
      correctAnswer: q.correctAnswer
      };
    }

    // If there are more than 4 options, randomly select 4 with the correct answer included
    const correctOption = allOptions[q.correctAnswer];
    
    // Create a copy of options without the correct answer
    const otherOptions = [...allOptions];
    otherOptions.splice(q.correctAnswer, 1);
      
    // Shuffle the other options and take 3
    const shuffledOtherOptions = otherOptions.sort(() => Math.random() - 0.5).slice(0, 3);
      
    // Create the final 4 options with the correct answer at a random position
    const randomPosition = Math.floor(Math.random() * 4);
    const finalOptions = [...shuffledOtherOptions];
    finalOptions.splice(randomPosition, 0, correctOption);
      
    return {
        id: q.id,
        imageUrl: q.imageUrl,
        question: q.question[(language as Locale)] || q.question.en,
        options: finalOptions,
        correctAnswer: randomPosition // Update the correctAnswer to match the new position
      };
    })
  }));
};

// Optional: type guard to enforce locale
export const isLocale = (val: string): val is Locale =>
  ['en', 'ru', 'be'].includes(val);