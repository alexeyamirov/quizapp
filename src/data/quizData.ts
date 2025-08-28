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
          "The Departed (2006)",
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
          "From Dusk till Dawn (1996)",
          "Jackie Brown (1997)"
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
        imageUrl: "/images/cinema/e_t_the_extra_terrestrial_1982.jpg",
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
        imageUrl: "/images/cinema/alien_1979_01.jpg",
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
      },
      {
        id: 25,
        imageUrl: "/images/cinema/the_godfather_1972_shot.jpg",
        question: "Who directed 'The Godfather' (1972)?",
        options: [
          "Martin Scorsese",
          "Francis Ford Coppola",
          "Marlon Brando",
          "Brian De Palma"
        ],
        correctAnswer: 1
      },
      {
        id: 26,
        imageUrl: "/images/cinema/star_wars_episode_4_a_new_hope_1977_poster.jpg",
        question: "In what year was the first Star Wars film released?",
        options: [
          "1975",
          "1977",
          "1980",
          "1983"
        ],
        correctAnswer: 1
      },
      {
        id: 27,
        imageUrl: "/images/cinema/roy_scheider_as_martyn_brody_in_jaws_1975.jpg",
        question: "Which Steven Spielberg film features a mechanical shark?",
        options: [
          "E.T. the Extra-Terrestrial (1982)",
          "Close Encounters of the Third Kind (1977)",
          "Jaws (1975)",
          "Jurassic Park (1993)"
        ],
        correctAnswer: 2
      },
      {
        id: 28,
        imageUrl: "/images/cinema/james_cameron_on_set_avatar_2009.jpg",
        question: "Which James Cameron film became the highest-grossing movie of all time in 2009?",
        options: [
          "Titanic (1997)",
          "Avatar (2009)",
          "Terminator 2: Judgment Day (1991)",
          "Aliens (1986)"
        ],
        correctAnswer: 1
      },
      {
        id: 29,
        imageUrl: "/images/cinema/psycho_1960_shower_scene.jpg",
        question: "Which Alfred Hitchcock film features the famous shower scene?",
        options: [
          "Vertigo (1958)",
          "Rear Window (1954)",
          "The Birds (1963)",
          "Psycho (1960)"
        ],
        correctAnswer: 3
      },
      {
        id: 30,
        imageUrl: "/images/cinema/anthony_hopkins_as_hannibal_lecter_in_the_silence_of_lambs_1991.jpg",
        question: "Who played Hannibal Lecter in 'The Silence of the Lambs' (1991)?",
        options: [
          "Anthony Hopkins",
          "Jack Nicholson",
          "Robert De Niro",
          "Al Pacino"
        ],
        correctAnswer: 0
      },
      {
        id: 31,
        imageUrl: "/images/cinema/tom_hanks_as_forrest_gump_in_forrest_gump_1994.jpg",
        question: "What famous quote is from the movie 'Forrest Gump' (1994)?",
        options: [
          "Here's looking at you, kid",
          "I'll be back",
          "Life is like a box of chocolates",
          "May the Force be with you"
        ],
        correctAnswer: 2
      },
      {
        id: 32,
        imageUrl: "/images/cinema/gone_with_the_wind_1939.jpg",
        question: "Which 1939 film is considered the highest-grossing film of all time when adjusted for inflation?",
        options: [
          "The Wizard of Oz (1939)",
          "Gone with the Wind (1939)",
          "Casablanca (1942)",
          "Citizen Kane (1941)"
        ],
        correctAnswer: 1
      },
      {
        id: 33,
        imageUrl: "/images/cinema/2001_a_space_odyssey_1968.jpg",
        question: "Who directed '2001: A Space Odyssey' (1968)?",
        options: [
          "Alfred Hitchcock",
          "George Lucas",
          "Stanley Kubrick",
          "Ridley Scott"
        ],
        correctAnswer: 2
      },
      {
        id: 34,
        imageUrl: "/images/cinema/steven_spielberg_oscars.jpg",
        question: "Which Spielberg film won the Academy Award for Best Picture in 1994?",
        options: [
          "Jurassic Park (1993)",
          "Saving Private Ryan (1998)",
          "E.T. the Extra-Terrestrial (1982)",
          "Schindler's List (1993)"
        ],
        correctAnswer: 3
      },
      {
        id: 35,
        imageUrl: "/images/cinema/the_shining_1980_01.jpg",
        question: "Which Stephen King novel was adapted into a film by Stanley Kubrick?",
        options: [
          "Carrie (1976)",
          "The Shining (1980)",
          "Misery (1990)",
          "It (1990)"
        ],
        correctAnswer: 1
      },
      {
        id: 36,
        imageUrl: "/images/cinema/john_travolta_as_vincent_vega_in_pulp_fiction_1994.jpg",
        question: "Which actor played Vincent Vega in 'Pulp Fiction' (1994)?",
        options: [
          "Samuel L. Jackson",
          "Bruce Willis",
          "John Travolta",
          "Harvey Keitel"
        ],
        correctAnswer: 2
      },
      {
        id: 37,
        imageUrl: "/images/cinema/the_lord_of_the_rings_2001.jpg",
        question: "Who directed 'The Lord of the Rings' trilogy?",
        options: [
          "James Cameron",
          "Peter Jackson",
          "Christopher Nolan",
          "Guillermo del Toro"
        ],
        correctAnswer: 1
      },
      {
        id: 38,
        imageUrl: "/images/cinema/back_to_the_future_1985.jpg",
        question: "What year does Marty McFly travel to in 'Back to the Future' (1985)?",
        options: [
          "1945",
          "1955",
          "1965",
          "1975"
        ],
        correctAnswer: 1
      },
      {
        id: 39,
        imageUrl: "/images/cinema/fight_club_1999.jpg",
        question: "Who directed 'Fight Club' (1999)?",
        options: [
          "Frank Darabont",
          "David Fincher",
          "Christopher Nolan",
          "Martin Scorsese"
        ],
        correctAnswer: 1
      },
      {
        id: 40,
        imageUrl: "/images/cinema/jurassic_park_1993_01.jpg",
        question: "In which year was 'Jurassic Park' released?",
        options: [
          "1992",
          "1993",
          "1994",
          "1995"
        ],
        correctAnswer: 1
      },
      {
        id: 41,
        imageUrl: "/images/cinema/goodfellas_1990.jpg",
        question: "Who directed 'Goodfellas' (1990)?",
        options: [
          "Francis Ford Coppola",
          "Martin Scorsese",
          "Brian De Palma",
          "John McTiernan"
        ],
        correctAnswer: 1
      },
      {
        id: 42,
        imageUrl: "/images/cinema/the_dark_knight_2008.jpg",
        question: "Which actor played Batman in 'The Dark Knight' trilogy?",
        options: [
          "Christian Bale",
          "Michael Keaton",
          "Ben Affleck",
          "Val Kilmer"
        ],
        correctAnswer: 0
      },
      {
        id: 43,
        imageUrl: "/images/cinema/the_truman_show_1998.jpg",
        question: "Who starred as Truman Burbank in 'The Truman Show' (1998)?",
        options: [
          "Tom Hanks",
          "Jim Carrey",
          "Robin Williams",
          "Will Smith"
        ],
        correctAnswer: 1
      },
      {
        id: 44,
        imageUrl: "/images/cinema/the_shawshank_redemption_1994.jpg",
        question: "Which Stephen King novella was adapted into 'The Shawshank Redemption' (1994)?",
        options: [
          "The Green Mile",
          "Rita Hayworth and Shawshank Redemption",
          "Pet Sematary",
          "The Long Walk"
        ],
        correctAnswer: 1
      },
      {
        id: 45,
        imageUrl: "/images/cinema/judy_garland_as_dorothy_gale_in_the_wizard_of_oz_1939.jpg",
        question: "What color are Dorothy's slippers in the 1939 film 'The Wizard of Oz'?",
        options: [
          "Silver",
          "Gold",
          "Ruby Red",
          "Emerald Green"
        ],
        correctAnswer: 2
      },
      {
        id: 46,
        imageUrl: "/images/cinema/humphrey_bogart_as_rick_blaine_in_casablanca_1942.jpg",
        question: "Who played Rick Blaine in 'Casablanca' (1942)?",
        options: [
          "Clark Gable",
          "Humphrey Bogart",
          "Cary Grant",
          "James Stewart"
        ],
        correctAnswer: 1
      },
      {
        id: 47,
        imageUrl: "/images/cinema/gladiator_2000_01.jpg",
        question: "Which actor played Maximus in 'Gladiator' (2000)?",
        options: [
          "Russell Crowe",
          "Joaquin Phoenix",
          "Gerard Butler",
          "Richard Harris"
        ],
        correctAnswer: 0
      },
      {
        id: 48,
        imageUrl: "/images/cinema/the_green_mile_1999.jpg",
        question: "Who played John Coffey in 'The Green Mile' (1999)?",
        options: [
          "Morgan Freeman",
          "Denzel Washington",
          "Michael Clarke Duncan",
          "Samuel L. Jackson"
        ],
        correctAnswer: 2
      },
      {
        id: 49,
        imageUrl: "/images/cinema/the_sixth_sense_1999_01.jpg",
        question: "Who directed 'The Sixth Sense' (1999)?",
        options: [
          "James Wan",
          "M. Night Shyamalan",
          "David Fincher",
          "John Carpenter"
        ],
        correctAnswer: 1
      },
      {
        id: 50,
        imageUrl: "/images/cinema/the_terminator_1984_02.jpg",
        question: "Who played the Terminator in the 1984 film?",
        options: [
          "Michael Biehn",
          "Robert Patrick",
          "Arnold Schwarzenegger",
          "Lance Henriksen"
        ],
        correctAnswer: 2
      },
      {
        id: 51,
        imageUrl: "/images/cinema/the_princess_bride_1987_01.jpg",
        question: "Which actor played Westley in 'The Princess Bride' (1987)?",
        options: [
          "Cary Elwes",
          "Mandy Patinkin",
          "Chris Sarandon",
          "Christopher Guest"
        ],
        correctAnswer: 0
      },
      {
        id: 52,
        imageUrl: "/images/cinema/the_breakfast_club_1985_01.jpg",
        question: "Who directed 'The Breakfast Club' (1985)?",
        options: [
          "Martin Sheen",
          "John Hughes",
          "John Voight",
          "Robert Zemeckis"
        ],
        correctAnswer: 1
      },
      {
        id: 53,
        imageUrl: "/images/cinema/die_hard_1988_01.jpg",
        question: "Which actor played John McClane in the 'Die Hard' series?",
        options: [
          "Alan Rickman",
          "Samuel L. Jackson",
          "Bruce Willis",
          "Jeremy Irons"
        ],
        correctAnswer: 2
      },
      {
        id: 54,
        imageUrl: "/images/cinema/the_exorcist_1973_01.jpg",
        question: "In what year was 'The Exorcist' released?",
        options: [
          "1970",
          "1973",
          "1976",
          "1979"
        ],
        correctAnswer: 1
      },
      {
        id: 55,
        imageUrl: "/images/cinema/the_sound_of_music_1965.jpg",
        question: "Who played Maria von Trapp in 'The Sound of Music' (1965)?",
        options: [
          "Audrey Hepburn",
          "Julie Andrews",
          "Debbie Reynolds",
          "Doris Day"
        ],
        correctAnswer: 1
      },
      {
        id: 56,
        imageUrl: "/images/cinema/rocky_1976_01.jpg",
        question: "Who played Rocky Balboa in the 'Rocky' film series?",
        options: [
          "Carl Weathers",
          "Sylvester Stallone",
          "Dolph Lundgren",
          "Talia Shire"
        ],
        correctAnswer: 1
      },
      {
        id: 57,
        imageUrl: "/images/cinema/the_lion_king_1994.jpg",
        question: "Who directed the original animated 'The Lion King' (1994)?",
        options: [
          "John Musker and Ron Clements",
          "Roger Allers and Rob Minkoff",
          "Don Bluth",
          "Brad Bird"
        ],
        correctAnswer: 1
      },
      {
        id: 58,
        imageUrl: "/images/cinema/scarface_1983.jpg",
        question: "Who played Tony Montana in 'Scarface' (1983)?",
        options: [
          "Robert De Niro",
          "Al Pacino",
          "Joe Pesci",
          "Ray Liotta"
        ],
        correctAnswer: 1
      },
      {
        id: 59,
        imageUrl: "/images/cinema/mel_gibson_as_william_wallace_in_braveheart_1995.jpg",
        question: "Who directed and starred in 'Braveheart' (1995)?",
        options: [
          "Mel Gibson",
          "Kevin Costner",
          "Clint Eastwood",
          "Robert Redford"
        ],
        correctAnswer: 0
      },
      {
        id: 60,
        imageUrl: "/images/cinema/jeff_bridges_as_the_dude_in_the_big_lebowski_1998_01.jpg",
        question: "Who directed 'The Big Lebowski' (1998)?",
        options: [
          "Lloyd Bridges",
          "The Coen Brothers",
          "Paul Thomas Anderson",
          "Wes Anderson"
        ],
        correctAnswer: 1
      },
      {
        id: 61,
        imageUrl: "/images/cinema/the_departed_2006.jpg",
        question: "Which Martin Scorsese film won him his first Academy Award for Best Director?",
        options: [
          "Goodfellas (1990)",
          "The Departed (2006)",
          "Raging Bull (1980)",
          "The Wolf of Wall Street (2013)"
        ],
        correctAnswer: 1
      },
      {
        id: 62,
        imageUrl: "/images/cinema/the_social_network_2010.jpg",
        question: "Who directed 'The Social Network' (2010)?",
        options: [
          "Ari Aster",
          "Christopher Nolan",
          "David Fincher",
          "Aaron Sorkin"
        ],
        correctAnswer: 2
      },
      {
        id: 63,
        imageUrl: "/images/cinema/tom_hanks_as_captain_john_miller_in_saving_private_ryan_1998.jpg",
        question: "Which actor played Captain John Miller in 'Saving Private Ryan' (1998)?",
        options: [
          "Matt Damon",
          "Tom Hanks",
          "Edward Burns",
          "Tom Sizemore"
        ],
        correctAnswer: 1
      },
      {
        id: 64,
        imageUrl: "/images/cinema/the_notebook_2004_02.jpg",
        question: "Who played Noah Calhoun in 'The Notebook' (2004)?",
        options: [
          "Ryan Wilson",
          "Ryan Gosling",
          "Ryan Reynolds",
          "Ryan Guzman"
        ],
        correctAnswer: 1
      },
      {
        id: 65,
        imageUrl: "/images/cinema/jennifer_lawrence_as_kitniss_everdeen_in_the_hunger_games_2012_02.jpg",
        question: "Who played Katniss Everdeen in 'The Hunger Games' film series?",
        options: [
          "Jennifer Jason Leigh",
          "Jennifer Lawrence",
          "Jennifer Lopez",
          "Jennifer Garner"
        ],
        correctAnswer: 1
      },
      {
        id: 66,
        imageUrl: "/images/cinema/the_revenant_2015.jpg",
        question: "For which film did Leonardo DiCaprio win his first Academy Award for Best Actor?",
        options: [
          "The Wolf of Wall Street (2013)",
          "The Revenant (2015)",
          "The Departed (2006)",
          "Once Upon a Time in Hollywood (2019)"
        ],
        correctAnswer: 1
      },
      {
        id: 67,
        imageUrl: "/images/cinema/no_country_for_old_men_2007_01.jpg",
        question: "Who played Anton Chigurh in 'No Country for Old Men' (2007)?",
        options: [
          "Woody Harrelson",
          "Javier Bardem",
          "Josh Brolin",
          "Tommy Lee Jones"
        ],
        correctAnswer: 1
      },
      {
        id: 68,
        imageUrl: "/images/cinema/the_grand_budapest_hotel_2014.jpg",
        question: "Who directed 'The Grand Budapest Hotel' (2014)?",
        options: [
          "Paul William Scott Anderson",
          "Wes Anderson",
          "Brad Anderson",
          "Paul Thomas Anderson"
        ],
        correctAnswer: 1
      },
      {
        id: 69,
        imageUrl: "/images/cinema/the_godfather_part_ii_1974.jpg",
        question: "Who played the young Vito Corleone in 'The Godfather Part II' (1974)?",
        options: [
          "Al Pacino",
          "Robert De Niro",
          "James Caan",
          "Marlon Brando"
        ],
        correctAnswer: 1
      },
      {
        id: 70,
        imageUrl: "/images/cinema/the_matrix_reloaded_2003_01.jpg",
        question: "In which year was 'The Matrix Reloaded' released?",
        options: [
          "2001",
          "2003",
          "2005",
          "2007"
        ],
        correctAnswer: 1
      },
      {
        id: 71,
        imageUrl: "/images/cinema/interstellar_2014_01.jpg",
        question: "Who composed the soundtrack for 'Interstellar' (2014)?",
        options: [
          "John Williams",
          "Hans Zimmer",
          "Howard Shore",
          "Alexandre Desplat"
        ],
        correctAnswer: 1
      },
      {
        id: 72,
        imageUrl: "/images/cinema/the_dark_knight_rises_2012.jpg",
        question: "Who played Bane in 'The Dark Knight Rises' (2012)?",
        options: [
          "Tom Hardy",
          "Michael Fassbender",
          "James McAvoy",
          "Cillian Murphy"
        ],
        correctAnswer: 0
      },
      {
        id: 73,
        imageUrl: "/images/cinema/the_avengers_2012.jpg",
        question: "Who directed 'The Avengers' (2012)?",
        options: [
          "Taika Waititi",
          "Joss Whedon",
          "James Gunn",
          "The Russo Brothers"
        ],
        correctAnswer: 1
      },
      {
        id: 74,
        imageUrl: "/images/cinema/jodie_foster_as_clarice_starling_in_the_silence_of_lambs_1991.jpg",
        question: "Who played Clarice Starling in 'The Silence of the Lambs' (1991)?",
        options: [
          "Meryl Streep",
          "Jodie Foster",
          "Glenn Close",
          "Susan Sarandon"
        ],
        correctAnswer: 1
      },
      {
        id: 75,
        imageUrl: "/images/cinema/the_pianist_2002.jpg",
        question: "Who directed 'The Pianist' (2002)?",
        options: [
          "Brady Corbet",
          "Roman Polanski",
          "Nicolas Winding Refn",
          "Luc Besson"
        ],
        correctAnswer: 1
      },
      {
        id: 76,
        imageUrl: "/images/cinema/the_shining_1980_02.jpg",
        question: "Who played Jack Torrance in 'The Shining' (1980)?",
        options: [
          "Robert De Niro",
          "Jack Nicholson",
          "Dennis Hopper",
          "Christopher Walken"
        ],
        correctAnswer: 1
      },
      {
        id: 77,
        imageUrl: "/images/cinema/the_princess_diaries_2001.jpg",
        question: "Who played Mia Thermopolis in 'The Princess Diaries' (2001)?",
        options: [
          "Anne Hathaway",
          "Lindsay Lohan",
          "Amanda Bynes",
          "Hilary Duff"
        ],
        correctAnswer: 0
      },
      {
        id: 78,
        imageUrl: "/images/cinema/the_martian_2015.jpg",
        question: "Who played Mark Watney in 'The Martian' (2015)?",
        options: [
          "Brad Pitt",
          "Matt Damon",
          "Leonardo DiCaprio",
          "Chris Pratt"
        ],
        correctAnswer: 1
      },
      {
        id: 79,
        imageUrl: "/images/cinema/the_devil_wears_prada_2006_01.jpg",
        question: "Who played Miranda Priestly in 'The Devil Wears Prada' (2006)?",
        options: [
          "Glenn Close",
          "Meryl Streep",
          "Helen Mirren",
          "Emily Blunt"
        ],
        correctAnswer: 1
      },
      {
        id: 80,
        imageUrl: "/images/cinema/the_kings_speech_2010.jpg",
        question: "Who played King George VI in 'The King's Speech' (2010)?",
        options: [
          "Benedict Cumberbatch",
          "Colin Firth",
          "Ralph Fiennes",
          "Hugh Grant"
        ],
        correctAnswer: 1
      },
      {
        id: 81,
        imageUrl: "/images/cinema/the_bourne_identity_2002.jpg",
        question: "Who played Jason Bourne in 'The Bourne Identity' (2002)?",
        options: [
          "Brad Pitt",
          "Matt Damon",
          "Leonardo DiCaprio",
          "Tom Cruise"
        ],
        correctAnswer: 1
      },
      {
        id: 82,
        imageUrl: "/images/cinema/the_prestige_2006.jpg",
        question: "Who directed 'The Prestige' (2006)?",
        options: [
          "David Fincher",
          "Christopher Nolan",
          "Darren Aronofsky",
          "Denis Villeneuve"
        ],
        correctAnswer: 1
      },
      {
        id: 83,
        imageUrl: "/images/cinema/the_incredibles_2004.jpg",
        question: "Who directed 'The Incredibles' (2004)?",
        options: [
          "John Lasseter",
          "Brad Bird",
          "Andrew Stanton",
          "Pete Docter"
        ],
        correctAnswer: 1
      },
      {
        id: 84,
        imageUrl: "/images/cinema/the_wolf_of_wall_street_2013.jpg",
        question: "Who played Jordan Belfort in 'The Wolf of Wall Street' (2013)?",
        options: [
          "Brad Pitt",
          "Leonardo DiCaprio",
          "Matt Damon",
          "Christian Bale"
        ],
        correctAnswer: 1
      },
      {
        id: 85,
        imageUrl: "/images/cinema/the_matrix_1999_morpheus.jpg",
        question: "Who played Morpheus in 'The Matrix' (1999)?",
        options: [
          "Samuel L. Jackson",
          "Laurence Fishburne",
          "Morgan Freeman",
          "Denzel Washington"
        ],
        correctAnswer: 1
      },
      {
        id: 86,
        imageUrl: "/images/cinema/the_dark_knight_2008_joker.jpg",
        question: "Which Batman film features the line 'Why so serious?'",
        options: [
          "Batman Begins",
          "The Dark Knight",
          "The Dark Knight Rises",
          "Batman vs. Superman"
        ],
        correctAnswer: 1
      },
      {
        id: 87,
        imageUrl: "/images/cinema/the_godfather_1972_marlon.jpg",
        question: "Who played Vito Corleone in 'The Godfather' (1972)?",
        options: [
          "Al Pacino",
          "Marlon Brando",
          "Robert De Niro",
          "James Caan"
        ],
        correctAnswer: 1
      },
      {
        id: 88,
        imageUrl: "/images/cinema/the_truman_show_1998_scene.jpg",
        question: "What is the name of the fictional town in 'The Truman Show' (1998)?",
        options: [
          "Seahaven",
          "Paradise Cove",
          "Port Haven",
          "New Eden"
        ],
        correctAnswer: 0
      },
      {
        id: 89,
        imageUrl: "/images/cinema/the_shawshank_redemption_1994_scene.jpg",
        question: "Who directed 'The Shawshank Redemption' (1994)?",
        options: [
          "Steven Spielberg",
          "Frank Darabont",
          "Rob Reiner",
          "Brian De Palma"
        ],
        correctAnswer: 1
      },
      {
        id: 90,
        imageUrl: "/images/cinema/the_princess_bride_1987_scene.jpg",
        question: "What is the name of the six-fingered man in 'The Princess Bride' (1987)?",
        options: [
          "Count Rugen",
          "Prince Humperdinck",
          "Vizzini",
          "Fezzik"
        ],
        correctAnswer: 0
      },
      {
        id: 91,
        imageUrl: "/images/cinema/the_breakfast_club_1985_scene.jpg",
        question: "How many students are in detention in 'The Breakfast Club' (1985)?",
        options: [
          "3",
          "4",
          "5",
          "6"
        ],
        correctAnswer: 2
      },
      {
        id: 92,
        imageUrl: "/images/cinema/the_lion_king_1994_scene.jpg",
        question: "Who voiced adult Simba in the original 'The Lion King' (1994)?",
        options: [
          "James Earl Jones",
          "Matthew Broderick",
          "Jeremy Irons",
          "Nathan Lane"
        ],
        correctAnswer: 1
      },
      {
        id: 93,
        imageUrl: "/images/cinema/the_matrix_1999_scene.jpg",
        question: "What color pill does Neo take in 'The Matrix' (1999)?",
        options: [
          "Blue",
          "Red",
          "Green",
          "Yellow"
        ],
        correctAnswer: 1
      },
      {
        id: 94,
        imageUrl: "/images/cinema/the_silence_of_the_lambs_1991_scene.jpg",
        question: "What is the name of the serial killer Clarice Starling is hunting in 'The Silence of the Lambs' (1991)?",
        options: [
          "Hannibal Lecter",
          "Buffalo Bill",
          "Norman Bates",
          "John Doe"
        ],
        correctAnswer: 1
      },
      {
        id: 95,
        imageUrl: "/images/cinema/the_godfather_1972_scene.jpg",
        question: "What object is used as a threat in the famous 'offer he can't refuse' scene in 'The Godfather'?",
        options: [
          "A gun",
          "A knife",
          "A horse's head",
          "A garrote"
        ],
        correctAnswer: 2
      },
      {
        id: 96,
        imageUrl: "/images/cinema/the_wizard_of_oz_1939_scene.jpg",
        question: "What does the Scarecrow want from the Wizard in 'The Wizard of Oz' (1939)?",
        options: [
          "Courage",
          "A heart",
          "A brain",
          "To go home"
        ],
        correctAnswer: 2
      },
      {
        id: 97,
        imageUrl: "/images/cinema/the_sound_of_music_1965.jpg",
        question: "In 'The Sound of Music' (1965), what country does the von Trapp family escape from?",
        options: [
          "Germany",
          "Austria",
          "Switzerland",
          "Italy"
        ],
        correctAnswer: 1
      },
      {
        id: 98,
        imageUrl: "/images/cinema/the_sixth_sense_1999_scene.jpg",
        question: "What is the famous twist in 'The Sixth Sense' (1999)?",
        options: [
          "The boy is imaginary",
          "The doctor is dead",
          "The mother is the killer",
          "It was all a dream"
        ],
        correctAnswer: 1
      },
      {
        id: 99,
        imageUrl: "/images/cinema/the_departed_2006_scene.jpg",
        question: "In which city is 'The Departed' (2006) set?",
        options: [
          "New York",
          "Boston",
          "Chicago",
          "Philadelphia"
        ],
        correctAnswer: 1
      },
      {
        id: 100,
        imageUrl: "/images/cinema/the_lord_of_the_rings_2001_scene.jpg",
        question: "Who played Gandalf in 'The Lord of the Rings' trilogy?",
        options: [
          "Patrick Stewart",
          "Ian McKellen",
          "Christopher Lee",
          "Michael Gambon"
        ],
        correctAnswer: 1
      },
      {
        id: 101,
        imageUrl: "/images/cinema/the_green_mile_1999_scene.jpg",
        question: "What is John Coffey's special ability in 'The Green Mile' (1999)?",
        options: [
          "Super strength",
          "Mind reading",
          "Healing",
          "Invisibility"
        ],
        correctAnswer: 2
      },
      {
        id: 102,
        imageUrl: "/images/cinema/the_shining_1980_03.jpg",
        question: "What is the name of the hotel in 'The Shining' (1980)?",
        options: [
          "The Stanley Hotel",
          "The Overlook Hotel",
          "The Bates Motel",
          "The Dolphin Hotel"
        ],
        correctAnswer: 1
      },
      {
        id: 103,
        imageUrl: "/images/cinema/the_terminator_1984_01.jpg",
        question: "What famous line does the Terminator say in the 1984 film?",
        options: [
          "Hasta la vista, baby",
          "I'll be back",
          "Come with me if you want to live",
          "I need your clothes, your boots, and your motorcycle"
        ],
        correctAnswer: 1
      },
      {
        id: 104,
        imageUrl: "/images/cinema/jeff_bridges_as_the_dude_in_the_big_lebowski_1998_02.jpg",
        question: "What is the main character's nickname in 'The Big Lebowski' (1998)?",
        options: [
          "The Dude",
          "The Guy",
          "The Man",
          "The Boss"
        ],
        correctAnswer: 0
      },
      {
        id: 105,
        imageUrl: "/images/cinema/the_notebook_2004_01.jpg",
        question: "In 'The Notebook' (2004), what does Noah build for Allie?",
        options: [
          "A boat",
          "A house",
          "A garden",
          "A library"
        ],
        correctAnswer: 1
      },
      {
        id: 106,
        imageUrl: "/images/cinema/the_avengers_2012_shot.jpg",
        question: "Which city is attacked by Loki and the Chitauri in 'The Avengers' (2012)?",
        options: [
          "Los Angeles",
          "New York",
          "Chicago",
          "Washington D.C."
        ],
        correctAnswer: 1
      },
      {
        id: 107,
        imageUrl: "/images/cinema/the_social_network_2010.jpg",
        question: "Which university is featured in 'The Social Network' (2010)?",
        options: [
          "Stanford",
          "Harvard",
          "Yale",
          "MIT"
        ],
        correctAnswer: 1
      },
      {
        id: 108,
        imageUrl: "/images/cinema/jennifer_lawrence_as_kitniss_everdeen_in_the_hunger_games_2012_01.jpg",
        question: "What is the name of Katniss Everdeen's sister in 'The Hunger Games' (2012)?",
        options: [
          "Rue",
          "Primrose",
          "Effie",
          "Clove"
        ],
        correctAnswer: 1
      },
      {
        id: 109,
        imageUrl: "/images/cinema/leonardo_dicaprio_as_hugh_glass_in_the_revenant_2015.jpg",
        question: "What animal attacks Hugh Glass in 'The Revenant' (2015)?",
        options: [
          "Wolf",
          "Bear",
          "Mountain Lion (Puma)",
          "Wolverine"
        ],
        correctAnswer: 1
      },
      {
        id: 110,
        imageUrl: "/images/cinema/ralph_fiennes_as_gustave_h_in_the_grand_budapesht_hotel_2014_shot.jpg",
        question: "What is the profession of the main character Gustave H. in 'The Grand Budapest Hotel' (2014)?",
        options: [
          "Chef",
          "Concierge",
          "Detective",
          "Architect"
        ],
        correctAnswer: 1
      },
      {
        id: 111,
        imageUrl: "/images/cinema/the_martian_2015_shot.jpg",
        question: "What crop does Mark Watney grow on Mars in 'The Martian' (2015)?",
        options: [
          "Sweetpotatoes",
          "Potatoes",
          "Carrots",
          "Tomatoes"
        ],
        correctAnswer: 1
      },
      {
        id: 112,
        imageUrl: "/images/cinema/kristen_wiig_as_annie_walker_in_the_bridesmaids_2011.jpg",
        question: "What is the name of the movie featuring Kristen Wiig as Annie Walker?",
        options: [
          "Date Night (2010)",
          "American Pie (1999)",
          "The Bridesmaids (2011)",
          "The Secret Life of Walter Mitty (2013)"
        ],
        correctAnswer: 2
      },
      {
        id: 113,
        imageUrl: "/images/cinema/alan_smithee_hollywood_star.jpg",
        question: "Which of these films was NOT directed by Alan Smithee?",
        options: [
          "Another Night of the Living Dead (2011)",
          "My Left Foot (1989)",
          "Bloodsucking Pharaohs in Pittsburgh (1991)",
          "Anatar (2023)"
        ],
        correctAnswer: 1
      },
      {
        id: 114,
        imageUrl: "/images/cinema/glenn_close_as_cruella_de_vil_in_101_dalmatians_1996_premiere.jpg",
        question: "What is the name of the character played by Glenn Close in '101 Dalmatians' (1996)?",
        options: [
          "Cruella de Vil",
          "Anita Radcliffe",
          "Dana Barrett",
          "Morticia Addams"
        ],
        correctAnswer: 0
      },
      {
        id: 115,
        imageUrl: "/images/cinema/the_lord_of_the_rings.jpg",
        question: "What is the nickname of Ian McKellen's character in 'The Lord of the Rings' (2001-2003)?",
        options: [
          "White",
          "Blue",
          "Black",
          "Indigo"
        ],
        correctAnswer: 1
      },
      {
        id: 116,
        imageUrl: "/images/cinema/glenn_close_as_cruella_de_vil_in_101_dalmatians_1996_premiere.jpg",
        question: "What is the name of the character played by Glenn Close in '101 Dalmatians' (1996)?",
        options: [
          "Cruella de Vil",
          "Anita Radcliffe",
          "Dana Barrett",
          "Morticia Addams"
        ],
        correctAnswer: 0
      },
      {
        id: 117,
        imageUrl: "/images/cinema/the_phoenician_scheme_2025_01.jpg",
        question: "What movie is this shot from?",
        options: [
          "The Phoenician Scheme (2025)",
          "The Asteroid City (2023)",
          "The French Dispatch (2021)",
          "The Grand Budapest Hotel (2014)"
        ],
        correctAnswer: 0
      },
      {
        id: 118,
        imageUrl: "/images/cinema/the_big_lebowski_1998_01.jpg",
        question: "What is the surname of the character played by John Goodman in The Coen Brothers movie 1998?",
        options: [
          "Sobchak",
          "Stone",
          "Lebowski",
          "Kerabatsos"
        ],
        correctAnswer: 0
      },
      // Add more questions as needed
    ]
  }
  // Add more themes as needed
];