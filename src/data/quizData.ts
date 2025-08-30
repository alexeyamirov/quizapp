export interface QuizQuestion {
  id: number;
  imageUrl: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct answer in the options array
}

export interface QuizTheme {
  id: string;
  name: string;
  questions: QuizQuestion[];
}

// Function to limit options to exactly 4, always including the correct answer
export function limitOptionsToFour(question: QuizQuestion): QuizQuestion {
  const { options, correctAnswer } = question;
  
  // If we already have 4 or fewer options, return the question as is
  if (options.length <= 4) {
    return question;
  }
  
  // Get the correct answer option
  const correctOption = options[correctAnswer];
  
  // Filter out the correct answer from the pool of options
  const otherOptions = options.filter((_, index) => index !== correctAnswer);
  
  // Randomly select 3 other options
  const selectedOtherOptions = otherOptions
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, 3); // Take only 3
  
  // Combine the correct answer with the 3 random options
  const combinedOptions = [...selectedOtherOptions, correctOption];
  
  // Shuffle the final 4 options
  const finalOptions = combinedOptions.sort(() => 0.5 - Math.random());
  
  // Find the new index of the correct answer in the shuffled array
  const newCorrectAnswerIndex = finalOptions.indexOf(correctOption);
  
  // Return the question with updated options and correct answer index
  return {
    ...question,
    options: finalOptions,
    correctAnswer: newCorrectAnswerIndex
  };
}

// Process all quiz data to ensure each question has exactly 4 options
export const processQuizData = (data: QuizTheme[]): QuizTheme[] => {
  return data.map(theme => ({
    ...theme,
    questions: theme.questions.map(question => limitOptionsToFour(question))
  }));
};

// Original quiz data
export const originalQuizData: QuizTheme[] = [
  {
    id: "cinema",
    name: "Cinema",
    questions: [
      // All your existing questions here
      {
        id: 41,
        imageUrl: "/images/cinema/goodfellas_1990_01.jpg",
        question: "Who directed 'Goodfellas' (1990)?",
        options: [
          "Francis Ford Coppola",
          "Martin Scorsese",
          "Brian De Palma",
          "John McTiernan"
        ],
        correctAnswer: 1
      },
      // ... all other questions
      {
        id: 148,
        imageUrl: "/images/cinema/power_of_the_dog_2021_01.jpg",
        question: "Who directed 'The Power of the Dog' (2021)?",
        options: [
          "Sofia Coppola",
          "Jane Campion",
          "Greta Gerwig",
          "Kathryn Bigelow"
        ],
        correctAnswer: 1
      },
    ]
  }
  // Add more themes as needed
];

// Export the processed quiz data with exactly 4 options per question
export const quizData = processQuizData(originalQuizData);