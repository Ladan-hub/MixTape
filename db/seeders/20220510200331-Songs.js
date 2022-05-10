"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Songs",
      [
        {
          name: "About Damn Time",
          listenCount: 35842774,
          releaseDate: '2022-01-17',
          artistName: "Lizzo",
          album: "About Damn Time",
          songImg: "https://i.scdn.co/image/ab67616d0000b2737bb9f03ad65d1bd0b656fe68",
          youtubeURL: "https://youtu.be/IXXxciRUMzE",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "Big Energy",
          listenCount: 91137099,
          releaseDate: '2022-01-17',
          artistName: "Latto",
          album: "777",
          songImg: "https://upload.wikimedia.org/wikipedia/en/d/df/Latto_-_Big_Energy.png",
          youtubeURL: "https://youtu.be/T8GpG8C0YzA",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "First Class",
          listenCount: 180801293,
          releaseDate: '2022-01-17',
          artistName: "Jack Harlow",
          album: "Come Home The Kids Miss You",
          songImg: "https://i.scdn.co/image/ab67616d0000b2730fbbde391655703a7c8cdc79",
          youtubeURL: "https://youtu.be/HmP_wGYw1_g",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "Ghost",
          listenCount: 521550744,
          releaseDate: '2021-01-17',
          artistName: "Justin Bieber",
          album: "Justice",
          songImg: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431",
          youtubeURL: "https://youtu.be/Fp8msa5uYsc",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "As It Was",
          listenCount: 400237180,
          releaseDate: '2022-01-17',
          artistName: "Harry Styles",
          album: "As It Was",
          songImg: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14",
          youtubeURL: "https://youtu.be/H5v3kku4y6Q",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "NASA Is On Your Side",
          listenCount: 2022,
          releaseDate: '2010-01-17',
          artistName: "Everything Everything",
          album: "Man Alive",
          songImg: "https://i1.sndcdn.com/artworks-wDhfpF1fCxia-0-t500x500.jpg",
          youtubeURL: "https://www.youtube.com/watch?v=m4D_h9cDFh0",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "White Whale",
          listenCount: 2022,
          releaseDate: '2017-01-17',
          artistName: "Everything Everything",
          album: "A Fever Dream",
          songImg: "https://f4.bcbits.com/img/a0171710181_10.jpg",
          youtubeURL: "https://www.youtube.com/watch?v=M5Gk-61ZQ8g",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "Youth",
          listenCount: 2010,
          releaseDate: '2015-01-17',
          artistName: "Parks, Squares, and Alleys",
          album: "Against Illusions and Reality",
          songImg:
            "https://i.discogs.com/-P7cC4ZhuNbogtnyNyh3S5KT80SESmZPsh_EUvZnY8w/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYxNDMy/ODUtMTQxMjE1NzM3/Ny05OTEwLmpwZWc.jpeg",
          youtubeURL: "https://www.youtube.com/watch?v=w0eZYjjM3sQ",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "We're Not Just Friends",
          listenCount: 2011,
          releaseDate: '2018-01-17',
          artistName: "Parks, Squares, and Alleys",
          album: "Cold Blood Magic",
          songImg:
            "https://images.genius.com/3896a037198d9f0f4758310515bbd7f3.1000x1000x1.jpg",
          youtubeURL: "https://www.youtube.com/watch?v=M3IWsWzSo14",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "Into the West",
          listenCount: 3000,
          releaseDate: '2003-01-17',
          artistName: "Annie Lennox, Howard Shore",
          album: "The Lord of the Rings: The Return of the King",
          songImg:
            "https://upload.wikimedia.org/wikipedia/en/e/ed/Intothewest.jpg",
          youtubeURL: "https://www.youtube.com/watch?v=HvF31-2bVNE",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "THATS WHAT I WANT",
          listenCount: 545100554,
          releaseDate: '2021-01-17',
          artistName: "Lil Nas X",
          album: "Montero",
          songImg:
            "https://i.scdn.co/image/ab67616d0000b273be82673b5f79d9658ec0a9fd",
          youtubeURL: "https://youtu.be/QDYDRA5JPLE",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "Easy On Me",
          listenCount: 869063268,
          releaseDate: '2021-01-17',
          artistName: "Adele",
          album: "30",
          songImg:
            "https://i.scdn.co/image/ab67616d0000b27350dba34377a595e35f81b0e4",
          youtubeURL: "https://youtu.be/U3ASj1L6_sY",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "The Bridge Of Khazad-Dûm",
          listenCount: 2900,
          releaseDate: '2001-01-17',
          artistName: "Howard Shore",
          album: "The Lord of the Rings: The Fellowship of the Ring",
          songImg: "https://images.genius.com/4218472effa0cd4d6dd469811c805c7f.900x900x1.png",
          youtubeURL: "https://www.youtube.com/watch?v=NUIZvAe3RBg",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "May It Be",
          listenCount: 3100,
          releaseDate: '2001-01-17',
          artistName: "Enya",
          album: "The Lord of the Rings: The Fellowship of the Ring",
          songImg: "https://i1.sndcdn.com/artworks-000076978286-1064r8-t500x500.jpg",
          youtubeURL: "https://www.youtube.com/watch?v=NJVxEaGrHS4",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "Zelda's Lullaby",
          listenCount: 1990,
          releaseDate: '1998-01-17',
          artistName: "Koji Kondo",
          album: "The Legend of Zelda: Ocarina of Time",
          songImg: "https://direct.rhapsody.com/imageserver/images/alb.358761267/600x600.jpg",
          youtubeURL: "https://www.youtube.com/watch?v=EPhfbtjqWM8",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "Lost Woods",
          listenCount: 1991,
          releaseDate: '1998-01-17',
          artistName: "Koji Kondo",
          album: "The Legend of Zelda: Ocarina of Time",
          songImg: "https://direct.rhapsody.com/imageserver/images/alb.357701070/500x500.jpg",
          youtubeURL: "https://www.youtube.com/watch?v=Ljqe4Nj7nBA",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "Please",
          listenCount: 4000,
          releaseDate: '2008-01-17',
          artistName: "Ludo",
          album: "You're Awful, I Love You",
          songImg: "https://images.genius.com/692cd38e42ae0bbcb702cdf09ace9921.549x549x1.jpg",
          youtubeURL: "https://www.youtube.com/watch?v=sMX9VIv2v-c",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "Eye of the Storm",
          listenCount: 3500,
          releaseDate: '2004-01-17',
          artistName: "Blindside",
          album: "About a Burning Fire",
          songImg: "https://i.scdn.co/image/ab67616d0000b2737d77cb054b29d5a458f537d1",
          youtubeURL: "https://www.youtube.com/watch?v=8txX9WEuKZU",
          createdAt: new Date(), 
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Songs", null, {});
  },
};
