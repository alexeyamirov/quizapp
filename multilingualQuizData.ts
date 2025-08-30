// Transform multilingual data into single-language QuizTheme[]
export const getLocalizedQuizData = (language: string): QuizTheme[] => {
  return multilingualQuizData.map(theme => ({
    id: theme.id,
    name: theme.name[(language as Locale)] || theme.name.en,
    questions: theme.questions.map(q => {
      // Get the options in the appropriate language
      const allOptions = q.options[(language as Locale)] || q.options.en;
      
      // If we have more than 4 options, we need to select only 4 (including the correct one)
      let displayOptions = allOptions;
      if (allOptions.length > 4) {
        // Always include the correct answer
        const correctOption = allOptions[q.correctAnswer];
        
        // Filter out the correct answer from the pool of options
        const otherOptions = allOptions.filter((_, index) => index !== q.correctAnswer);
        
        // Randomly select 3 other options
        const selectedOtherOptions = otherOptions
          .sort(() => 0.5 - Math.random()) // Shuffle
          .slice(0, 3); // Take only 3
        
        // Combine the correct answer with the 3 random options
        const combinedOptions = [...selectedOtherOptions, correctOption];
        
        // Shuffle the final 4 options
        displayOptions = combinedOptions.sort(() => 0.5 - Math.random());
        
        // Find the new index of the correct answer in the shuffled array
        const newCorrectAnswerIndex = displayOptions.indexOf(correctOption);
        
        // Return the question with updated options and correct answer index
        return {
          id: q.id,
          imageUrl: q.imageUrl,
          question: q.question[(language as Locale)] || q.question.en,
          options: displayOptions,
          correctAnswer: newCorrectAnswerIndex
        };
      }
      
      // If we have 4 or fewer options, return as is
      return {
        id: q.id,
        imageUrl: q.imageUrl,
        question: q.question[(language as Locale)] || q.question.en,
        options: displayOptions,
        correctAnswer: q.correctAnswer
      };
    })
  }));
};