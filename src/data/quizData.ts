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

export const quizData: QuizTheme[] = [
  {
    id: "cinema",
    name: "Cinema",
    questions: [
      {
        id: 1,
        imageUrl: "/images/cinema/movie1.jpg",
        question: "Which actor played the character Tony Stark in the Marvel Cinematic Universe?",
        options: [
          "Chris Evans",
          "Robert Downey Jr.",
          "Chris Hemsworth",
          "Mark Ruffalo"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        imageUrl: "/images/cinema/movie2.jpg",
        question: "Which film won the Academy Award for Best Picture in 2020?",
        options: [
          "1917",
          "Joker",
          "Parasite",
          "Once Upon a Time in Hollywood"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        imageUrl: "/images/cinema/movie3.jpg",
        question: "Who directed the movie 'Inception'?",
        options: [
          "Christopher Nolan",
          "Steven Spielberg",
          "James Cameron",
          "Martin Scorsese"
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        imageUrl: "/images/cinema/movie4.jpg",
        question: "Which actress played Hermione Granger in the Harry Potter films?",
        options: [
          "Jennifer Lawrence",
          "Emma Watson",
          "Bonnie Wright",
          "Emma Stone"
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        imageUrl: "/images/cinema/movie5.jpg",
        question: "Which movie features a character named Jack Dawson?",
        options: [
          "The Departed",
          "Catch Me If You Can",
          "Titanic",
          "Inception"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        imageUrl: "/images/cinema/movie6.jpg",
        question: "Who played the Joker in 'The Dark Knight'?",
        options: [
          "Jared Leto",
          "Jack Nicholson",
          "Joaquin Phoenix",
          "Heath Ledger"
        ],
        correctAnswer: 3
      },
      {
        id: 7,
        imageUrl: "/images/cinema/movie7.jpg",
        question: "Which of these films was NOT directed by Quentin Tarantino?",
        options: [
          "Pulp Fiction",
          "Reservoir Dogs",
          "The Departed",
          "Django Unchained"
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        imageUrl: "/images/cinema/movie8.jpg",
        question: "Which actor has won the most Academy Awards for Best Actor?",
        options: [
          "Jack Nicholson",
          "Daniel Day-Lewis",
          "Tom Hanks",
          "Leonardo DiCaprio"
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        imageUrl: "/images/cinema/movie9.jpg",
        question: "Which film franchise has the highest box office revenue?",
        options: [
          "Star Wars",
          "Marvel Cinematic Universe",
          "Harry Potter",
          "James Bond"
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        imageUrl: "/images/cinema/movie10.jpg",
        question: "Who directed 'E.T. the Extra-Terrestrial'?",
        options: [
          "George Lucas",
          "James Cameron",
          "Steven Spielberg",
          "Ridley Scott"
        ],
        correctAnswer: 2
      },
      {
        id: 11,
        imageUrl: "/images/cinema/movie11.jpg",
        question: "Which movie won the first Academy Award for Best Animated Feature?",
        options: [
          "Toy Story",
          "Shrek",
          "Finding Nemo",
          "Monsters, Inc."
        ],
        correctAnswer: 1
      },
      {
        id: 12,
        imageUrl: "/images/cinema/movie12.jpg",
        question: "Who played Neo in 'The Matrix'?",
        options: [
          "Keanu Reeves",
          "Laurence Fishburne",
          "Hugo Weaving",
          "Will Smith"
        ],
        correctAnswer: 0
      }
      // Add more questions as needed
    ]
  }
  // Add more themes as needed
];