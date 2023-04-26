const medias = [
    {
      id: 1,
      title: "Rick et Morty",
      img: "rick-et-morty.jpg",
      type: "serie",
      api: "https://rickandmortyapi.com/api/character/",
      year: 2013
    },
    {
      id: 2,
      title: "Retour vers le futur",
      img: "retour-vers-le-futur.jpg",
      type: "movie",
      year: 1985,
      tube: "Psxktpxkc6o"
    },
    {
      id: 3,
      title: "Monty Python",
      img: "monty-python.jpg",
      type: "serie",
      year: 1969,
      tube: "Hz1JWzyvv8A"
    },
    {
      id: 4,
      title: "Poupée Russe",
      img: "poupee-russe.jpg",
      type: "serie",
      year: 2019,
      tube: "iJAm3vbFx2I"
    },
    {
      id: 5,
      title: "Sherlock",
      img: "sherlock.jpg",
      type: "serie",
      year: 2010,
      tube: "xK7S9mrFWL4"
    },
    {
      id: 6,
      title: "Au service de la France",
      img: "au-service-de-la-france.jpg",
      type: "serie",
      year: 2015,
      tube: "hUcr1VVmeO0"
    },
    {
      id: 7,
      title: "IT Crowd",
      img: "it-crowd.jpg",
      type: "serie",
      year: 2016,
      tube: "iDbyYGrswtg"
    },
    {
      id: 8,
      title: "Gravity",
      img: "gravity.jpg",
      type: "movie",
      year: 2013,
      tube: "OiTiKOy59o4"
    },
    {
      id: 9,
      title: "The Good Place",
      img: "the-good-place.jpg",
      type: "serie",
      year: 2016,
      tube: "RfBgT5djaQw"
    },
    {
      id: 10,
      title: "Breaking Bad",
      img: "breaking-bad.jpg",
      type: "serie",
      year: 2008,
      tube: "HhesaQXLuRY"
    },
    {
      id: 11,
      title: "Fargo",
      img: "fargo.jpg",
      type: "serie",
      year: 2014,
      tube: "gKs8DzjPDMU"
    },
    {
      id: 12,
      title: "Final Space",
      img: "final-space.jpg",
      type: "serie",
      year: 2018,
      tube: "4EHbt_kSkG8"
    },
    {
      id: 13,
      title: "How I met your mother",
      img: "himym.jpg",
      type: "serie",
      year: 2005,
      tube: "C8-4jMTOUJI"
    },
    {
      id: 14,
      title: "Notre planète",
      img: "notre-planete.jpg",
      type: "movie",
      year: 2019,
      tube: "DRX-RJoaQLg"
    },
    {
      id: 15,
      title: "Le dernier pub avant la fin du monde",
      img: "dernier-pub.jpg",
      type: "movie",
      year: 2013,
      tube: "NWpurm6e-vY"
    },
    {
      id: 16,
      title: "Avril et le monde truqué",
      img: "avril.jpg",
      type: "movie",
      year: 2015,
      tube: "0CeRmyassi4"
    },
    {
      id: 17,
      title: "Matrix",
      img: "matrix.jpg",
      type: "movie",
      year: 1999,
      tube: "m8e-FF8MsqU"
    },
    {
      id: 18,
      title: "Burn after reading",
      img: "burn-after-reading.jpg",
      type: "movie",
      year: 2008,
      tube: "eMWu6i7l5ec"
    },
    {
      id: 19,
      title: "Godzilla",
      img: "godzilla.jpg",
      type: "movie",
      year: 2014,
      tube: "QjKO10hKtYw"
    },
    {
      id: 20,
      title: "Mr. Holmes",
      img: "mr-holmes.jpg",
      type: "movie",
      year: 2015,
      tube: "0G1lIBgk4PA"
    },
    {
      id: 21,
      title: "Interstellar",
      img: "interstellar.jpg",
      type: "movie",
      year: 2014,
      tube: "zSWdZVtXT7E"
    },
    {
      id: 22,
      title: "Mad max",
      img: "mad-max.jpg",
      type: "movie",
      year: 1979,
      tube: "caHnaRq8Qlg"
    },
    {
      id: 23,
      title: "Johnny English",
      img: "johnny-english.jpg",
      type: "movie",
      year: 2011,
      tube: "-Qv6p6pTz5I"
    },
    {
      id: 24,
      title: "Better call saul",
      img: "better-call-saul.jpg",
      type: "serie",
      year: 2015,
      tube: "9q4qzYrHVmI"
    },
    {
      id: 25,
      title: "Birdman",
      img: "birdman.jpg",
      type: "movie",
      year: 2014,
      tube: "uJfLoE6hanc"
    },
    {
      id: 26,
      title: "The big short",
      img: "the-big-short.jpg",
      type: "movie",
      year: 2015,
      tube: "vgqG3ITMv1Q"
    },
    {
      id: 27,
      title: "Bob l'éponge",
      img: "bob-leponge.jpg",
      type: "serie",
      year: 1999,
      tube: "e9awLSibQ80"
    },
    {
      id: 28,
      title: "Minions",
      img: "minions.jpg",
      type: "movie",
      year: 2015,
      tube: "eisKxhjBnZ0"
    },
    {
      id: 29,
      title: "E.T.",
      img: "et.jpg",
      type: "movie",
      year: 1982,
      tube: "DSx8Jobx-Gs"
    },
    {
      id: 30,
      title: "Flash",
      img: "flash.jpg",
      type: "serie",
      year: 2014,
      tube: "Yj0l7iGKh8g"
    },
    {
      id: 31,
      title: "Silicon Valley",
      img: "silicon-valley.jpg",
      type: "serie",
      year: 2014,
      tube: "H7pYslGR6GU"
    },
    {
      id: 32,
      title: "Top Gear",
      img: "top-gear.jpg",
      type: "serie",
      year: 1977,
      tube: "kNTnrpL1Uw0"
    }
  ]
  
  export default medias
  