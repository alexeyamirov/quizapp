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
        imageUrl: "/images/cinema/tony_stark.jpg",
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
        imageUrl: "/images/cinema/oscars_2020.jpg",
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
        imageUrl: "/images/cinema/inception_2010.jpg",
        question: "Who directed the movie 'Inception' (2010)?",
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
        imageUrl: "/images/cinema/emma_watson_as_hermione_granger_in_harry_potter.jpg",
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
        imageUrl: "/images/cinema/leonardo_dicaprio_as_jack_dawson_in_titanic_1997.jpg",
        question: "Which movie features a character named Jack Dawson?",
        options: [
          "The Departed (2005)",
          "Catch Me If You Can (2002)",
          "Titanic (1997)",
          "Inception (2010)"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        imageUrl: "/images/cinema/heath_ledger_as_joker_in_dark_knight_2008.jpg",
        question: "Who played the Joker in 'The Dark Knight' (2008)?",
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
        imageUrl: "/images/cinema/quentin_tarantino_dancing.jpg",
        question: "Which of these films was NOT directed by Quentin Tarantino?",
        options: [
          "Pulp Fiction (1994)",
          "Reservoir Dogs (1992)",
          "The Departed (2006)",
          "Django Unchained (2012)"
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        imageUrl: "/images/cinema/daniel_day_lewis_as_butcher_in_gangs_of_new_york_2002.jpg",
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
        imageUrl: "/images/cinema/highest_box_office_francise_2024.jpg",
        question: "Which film franchise has the highest box office revenue by the end of 2024?",
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
        imageUrl: "/images/cinema/e_t_the_extra_terrestria_1982.jpg",
        question: "Who directed 'E.T. the Extra-Terrestrial' (1982)?",
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
        imageUrl: "/images/cinema/oscars_2001.jpg",
        question: "Which movie won the first Academy Award for Best Animated Feature?",
        options: [
          "Toy Story (1995)",
          "Shrek (2001)",
          "Finding Nemo (2003)",
          "Monsters, Inc. (2001)"
        ],
        correctAnswer: 1
      },
      {
        id: 12,
        imageUrl: "/images/cinema/keanu_reeves_as_neo_in_the_matrix_1999.jpg",
        question: "Who played Neo in 'The Matrix' (1999)?",
        options: [
          "Keanu Reeves",
          "Laurence Fishburne",
          "Hugo Weaving",
          "Will Smith"
        ],
        correctAnswer: 0
      },
      {
        id: 13,
        imageUrl: "/images/cinema/desperado_1995.jpg",
        question: "What movie is this shot from?",
        options: [
          "Desperado (1995)",
          "El Mariachi (1992)",
          "Once Upon a Time in Mexico (2003)",
          "From Dusk Till Dawn (1996)"
        ],
        correctAnswer: 0
      },
      {
        id: 14,
        imageUrl: "/images/cinema/dune_1984.jpg",
        question: "What movie is this shot from?",
        options: [
          "Dune (1984)",
          "Dune (2021)",
          "The Road Warrior (1981)",
          "Mad Max Beyond Thunderdome (1985)"
        ],
        correctAnswer: 0
      },
      {
        id: 15,
        imageUrl: "/images/cinema/citizen_kane_1941.jpg",
        question: "What movie is this shot from?",
        options: [
          "Citizen Kane (1941)",
          "It's a Wonderful Life (1946)",
          "The Grapes of Wrath (1940)",
          "Casablanca (1942)"
        ],
        correctAnswer: 0
      },
      {
        id: 16,
        imageUrl: "/images/cinema/citizen_kane_1941.jpg",
        question: "Who is the director of the movie the shot from?",
        options: [
          "Orson Welles",
          "Frank Capra",
          "John Ford",
          "Michael Curtiz"
        ],
        correctAnswer: 0
      },
      {
        id: 17,
        imageUrl: "/images/cinema/philadelphia_1993.jpg",
        question: "What city is the movie set in?",
        options: [
          "Philadelphia",
          "New York",
          "Los Angeles",
          "Dallas"
        ],
        correctAnswer: 0
      },
      {
        id: 18,
        imageUrl: "/images/cinema/philadelphia_1993.jpg",
        question: "Who played Andrew Beckett in 'Philadelphia' (1993)?",
        options: [
          "Tom Hanks",
          "Denzel Washington",
          "Antonio Banderas",
          "Morgan Freeman"
        ],
        correctAnswer: 0
      },
      {
        id: 19,
        imageUrl: "/images/cinema/the_talented_mr_ripley_1999.jpg",
        question: "Who played Tom Ripley in 'The Talented Mr. Ripley' (1999)?",
        options: [
          "Matt Damon",
          "Jude Law",
          "Gwyneth Paltrow",
          "Tom Hanks"
        ],
        correctAnswer: 0
      },
      {
        id: 20,
        imageUrl: "/images/cinema/toy_story_1995_shot.jpg",
        question: "Who directed the 'Toy Story' (1995)?",
        options: [
          "Woody Pride",
          "Buzz Lightyear",
          "Steve Jobs",
          "John Lasseter",       
        ],
        correctAnswer: 3
      },
      {
        id: 21,
        imageUrl: "/images/cinema/alien_1979_shot.jpg",
        question: "What movie is this shot from?",
        options: [
          "Prometheus (2012)",
          "Aliens (1986)",
          "Alien (1979)",
          "Alien: Romulus (2024)",       
        ],
        correctAnswer: 2
      },
      {
        id: 22,
        imageUrl: "/images/cinema/some_like_it_hot_1959_shot.jpg",
        question: "What movie is this shot from?",
        options: [
          "Some Like It Hot (1959)",
          "Sunset Boulevard (1950)",
          "Gentlemen Prefer Blondes (1953)",
          "Breakfast at Tiffany's (1961)",
        ],
        correctAnswer: 0
      },
      {
        id: 23,
        imageUrl: "/images/cinema/julia_roberts_childhood_photo.jpg",
        question: "Who is this?",
        options: [
          "Ann Hathaway",
          "Julia Roberts",
          "Sarah Jessica Parker",
          "Shawn Young"
        ],
        correctAnswer: 1
      },
      {
        id: 24,
        imageUrl: "/images/cinema/shawn_young_as_rachel_in_blade_runner_1982.jpg",
        question: "Who played Rachel in 'Blade Runner' (1982)?",
        options: [
          "Daryl Hannah",
          "Shawn Young",
          "Lara Flynn Boyle",
          "Laura Dern"
        ],
        correctAnswer: 1
      } 
      // Add more questions as needed
    ]
  }
  // Add more themes as needed
];