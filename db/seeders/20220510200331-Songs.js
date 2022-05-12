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
          albumName: "About Damn Time",
          songImg: "https://i.scdn.co/image/ab67616d0000b2737bb9f03ad65d1bd0b656fe68",
          youtubeURL: "https://www.youtube.com/embed/IXXxciRUMzE",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Big Energy",
          listenCount: 91137099,
          releaseDate: '2022-01-17',
          artistName: "Latto",
          albumName: "777",
          songImg: "https://upload.wikimedia.org/wikipedia/en/d/df/Latto_-_Big_Energy.png",
          youtubeURL: "https://www.youtube.com/embed/T8GpG8C0YzA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "First Class",
          listenCount: 180801293,
          releaseDate: '2022-01-17',
          artistName: "Jack Harlow",
          albumName: "Come Home The Kids Miss You",
          songImg: "https://i.scdn.co/image/ab67616d0000b2730fbbde391655703a7c8cdc79",
          youtubeURL: "https://www.youtube.com/embed/HmP_wGYw1_g",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ghost",
          listenCount: 521550744,
          releaseDate: '2021-01-17',
          artistName: "Justin Bieber",
          albumName: "Justice",
          songImg: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431",
          youtubeURL: "https://www.youtube.com/embed/Fp8msa5uYsc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "As It Was",
          listenCount: 400237180,
          releaseDate: '2022-01-17',
          artistName: "Harry Styles",
          albumName: "As It Was",
          songImg: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14",
          youtubeURL: "https://www.youtube.com/embed/H5v3kku4y6Q",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "NASA Is On Your Side",
          listenCount: 2022,
          releaseDate: '2010-01-17',
          artistName: "Everything Everything",
          albumName: "Man Alive",
          songImg: "https://i1.sndcdn.com/embed/artworks-wDhfpF1fCxia-0-t500x500.jpg",
          youtubeURL: "https://www.youtube.com/embed/m4D_h9cDFh0",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "White Whale",
          listenCount: 2022,
          releaseDate: '2017-01-17',
          artistName: "Everything Everything",
          albumName: "A Fever Dream",
          songImg: "https://f4.bcbits.com/embed/img/a0171710181_10.jpg",
          youtubeURL: "https://www.youtube.com/embed/M5Gk-61ZQ8g",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Youth",
          listenCount: 2010,
          releaseDate: '2015-01-17',
          artistName: "Parks, Squares, and Alleys",
          albumName: "Against Illusions and Reality",
          songImg:
            "https://i.discogs.com/embed/-P7cC4ZhuNbogtnyNyh3S5KT80SESmZPsh_EUvZnY8w/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYxNDMy/ODUtMTQxMjE1NzM3/Ny05OTEwLmpwZWc.jpeg",
          youtubeURL: "https://www.youtube.com/embed/w0eZYjjM3sQ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "We're Not Just Friends",
          listenCount: 2011,
          releaseDate: '2018-01-17',
          artistName: "Parks, Squares, and Alleys",
          albumName: "Cold Blood Magic",
          songImg:
            "https://images.genius.com/embed/3896a037198d9f0f4758310515bbd7f3.1000x1000x1.jpg",
          youtubeURL: "https://www.youtube.com/embed/M3IWsWzSo14",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Into the West",
          listenCount: 3000,
          releaseDate: '2003-01-17',
          artistName: "Annie Lennox, Howard Shore",
          albumName: "The Lord of the Rings: The Return of the King",
          songImg:
            "https://upload.wikimedia.org/wikipedia/en/e/ed/Intothewest.jpg",
          youtubeURL: "https://www.youtube.com/embed/HvF31-2bVNE",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "THATS WHAT I WANT",
          listenCount: 545100554,
          releaseDate: '2021-01-17',
          artistName: "Lil Nas X",
          albumName: "Montero",
          songImg:
            "https://i.scdn.co/image/ab67616d0000b273be82673b5f79d9658ec0a9fd",
          youtubeURL: "https://www.youtube.com/embed/QDYDRA5JPLE",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Easy On Me",
          listenCount: 869063268,
          releaseDate: '2021-01-17',
          artistName: "Adele",
          albumName: "30",
          songImg:
            "https://i.scdn.co/image/ab67616d0000b27350dba34377a595e35f81b0e4",
          youtubeURL: "https://www.youtube.com/embed/U3ASj1L6_sY",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "The Bridge Of Khazad-Dûm",
          listenCount: 2900,
          releaseDate: '2001-01-17',
          artistName: "Howard Shore",
          albumName: "The Lord of the Rings: The Fellowship of the Ring",
          songImg: "https://images.genius.com/embed/4218472effa0cd4d6dd469811c805c7f.900x900x1.png",
          youtubeURL: "https://www.youtube.com/embed/NUIZvAe3RBg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "May It Be",
          listenCount: 3100,
          releaseDate: '2001-01-17',
          artistName: "Enya",
          albumName: "The Lord of the Rings: The Fellowship of the Ring",
          songImg: "https://i1.sndcdn.com/embed/artworks-000076978286-1064r8-t500x500.jpg",
          youtubeURL: "https://www.youtube.com/embed/NJVxEaGrHS4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Zelda's Lullaby",
          listenCount: 1990,
          releaseDate: '1998-01-17',
          artistName: "Koji Kondo",
          albumName: "The Legend of Zelda: Ocarina of Time",
          songImg: "https://direct.rhapsody.com/embed/imageserver/images/alb.358761267/600x600.jpg",
          youtubeURL: "https://www.youtube.com/embed/EPhfbtjqWM8",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lost Woods",
          listenCount: 1991,
          releaseDate: '1998-01-17',
          artistName: "Koji Kondo",
          albumName: "The Legend of Zelda: Ocarina of Time",
          songImg: "https://direct.rhapsody.com/embed/imageserver/images/alb.357701070/500x500.jpg",
          youtubeURL: "https://www.youtube.com/embed/Ljqe4Nj7nBA",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Please",
          listenCount: 4000,
          releaseDate: '2008-01-17',
          artistName: "Ludo",
          albumName: "You're Awful, I Love You",
          songImg: "https://images.genius.com/embed/692cd38e42ae0bbcb702cdf09ace9921.549x549x1.jpg",
          youtubeURL: "https://www.youtube.com/embed/sMX9VIv2v-c",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Eye of the Storm",
          listenCount: 3500,
          releaseDate: '2004-01-17',
          artistName: "Blindside",
          albumName: "About a Burning Fire",
          songImg: "https://i.scdn.co/image/ab67616d0000b2737d77cb054b29d5a458f537d1",
          youtubeURL: "https://www.youtube.com/embed/8txX9WEuKZU",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No Roots",
          listenCount: 297825258,
          releaseDate: '2016-12-02',
          artistName: "Alice Merton",
          albumName: "Mint +4",
          songImg: "https://en.wikipedia.org/wiki/No_Roots_(song)#/media/File:Alice_Merton_No_Roots.jpg",
          youtubeURL: "https://www.youtube.com/embed/PUdyuKaGQd4&ab_channel=AliceMerton",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Unstoppable",
          listenCount: 44608322,
          releaseDate: '2021-09-27',
          artistName: "Sia",
          albumName: "This Is Acting",
          songImg: "https://i.ytimg.com/embed/vi/cxjvTXo9WWM/maxresdefault.jpg",
          youtubeURL: "https://www.youtube.com/embed/YaEG2aWJnZ8",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Stitches",
          listenCount: 1443443639,
          releaseDate: '2021-09-27',
          artistName: "Shawn Mendes",
          albumName: "Stitches",
          songImg: "https://i.ytimg.com/embed/vi/DqO1lLavWGo/maxresdefault.jpg",
          youtubeURL: "https://www.youtube.com/embed/VbfpW0pbvaU&ab_channel=ShawnMendesVEVO",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Lost",
          listenCount: 26959104,
          releaseDate: '2012-06-10',
          artistName: "Maroon 5",
          albumName: "Jordi",
          songImg: "https://i.ytimg.com/embed/an/U05fwua9-D4/13147714373421743624_mq.jpg?v=60c35156",
          youtubeURL: "https://www.youtube.com/embed/U05fwua9-D4&ab_channel=Maroon5VEVO",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Happier Than Ever",
          listenCount: 196628891,
          releaseDate: '2021-07-30',
          artistName: "Billie Eilish",
          albumName: "Happier Than Ever",
          songImg: "https://i.ytimg.com/embed/vi/NSTUVHsb9xw/maxresdefault.jpg",
          youtubeURL: "https://www.youtube.com/embed/5GJWxDKyk3A&ab_channel=BillieEilishVEVO",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Wrecked",
          listenCount: 67137978,
          releaseDate: '2021-07-15',
          artistName: "Imagine Dragons",
          albumName: "Hello Autumn 2021",
          songImg: "https://upload.wikimedia.org/wikipedia/en/b/b2/Wrecked_song_cover.jpg",
          youtubeURL: "https://www.youtube.com/embed/Y2NkuFIlLEo&ab_channel=ImagineDragonsVEVO",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Dance Monkey",
          listenCount: 1833308170,
          releaseDate: '2019-06-24',
          artistName: "Tones And I",
          albumName: "Ultratop Hit Connection Best Of 2019.3",
          songImg: "https://i.ytimg.com/embed/vi/Hx4nWW9z0ig/maxresdefault.jpg",
          youtubeURL: "https://www.youtube.com/embed/q0hyYWKXF0Q&ab_channel=TonesAndI",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Let Me Down Slowly",
          listenCount: 370751710,
          releaseDate: '2018-06-04',
          artistName: "Alec Benjamin",
          albumName: "Narrated For You",
          songImg: "https://i.ytimg.com/embed/vi/jLNrvmXboj8/maxresdefault.jpg",
          youtubeURL: "https://www.youtube.com/embed/50VNCymT-Cs&ab_channel=AlecBenjamin",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Salt",
          listenCount: 64615132,
          releaseDate: '2020-04-14',
          artistName: "Ava Max",
          albumName: "Heaven & Hell",
          songImg: "https://i.ytimg.com/embed/an/2EfE0vhxt1o/43ae7069-b9ee-4ba8-bb5e-0883067c2a71_mq.jpg?v=5deffdc4",
          youtubeURL: "https://www.youtube.com/embed/PKWHYLtmAGA&ab_channel=AvaMax",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Lose You To Love Me",
          listenCount: 396666510,
          releaseDate: '2019-10-22',
          artistName: "Selena Gomez",
          albumName: "Rare",
          songImg: "https://i.ytimg.com/embed/vi/KE12jhXAdws/maxresdefault.jpg",
          youtubeURL: "https://www.youtube.com/embed/zlJDTxahav0",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Light Switch",
          listenCount: 70429327,
          releaseDate: '2022-01-20',
          artistName: "Charlie Puth",
          albumName: "Light Switch",
          songImg: "https://i.ytimg.com/embed/vi/oW5vH7y76yc/hqdefault.jpg",
          youtubeURL: "https://www.youtube.com/embed/WFsAon_TWPQ&ab_channel=CharliePuth",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Out of Time",
          listenCount: 70429327,
          releaseDate: '2022-01-20',
          artistName: "The Weeknd",
          albumName: "Dawn FM",
          songImg: "https://i.ytimg.com/embed/vi/2fDzCWNS3ig/maxresdefault.jpg",
          youtubeURL: "https://www.youtube.com/embed/2fDzCWNS3ig&ab_channel=TheWeekndVEVO",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "Don't Go Yet",
          listenCount: 34274280,
          releaseDate: '2021-07-22',
          artistName: "Camila Cabello",
          albumName: "Familia",
          songImg: "https://i.ytimg.com/embed/vi/iFPkd-7AcDM/maxresdefault.jpg",
          youtubeURL: "https://www.youtube.com/embed/iFPkd-7AcDM&ab_channel=CamilaCabelloVEVO",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "You Were Loved",
          listenCount: 2530557,
          releaseDate: '2022-04-01',
          artistName: "OneRepublic & Gryffin",
          albumName: "You Were Loved",
          songImg: "https://i.ytimg.com/embed/vi/8d9Ma7vp7Sc/maxresdefault.jpg",
          youtubeURL: "https://www.youtube.com/embed/8d9Ma7vp7Sc&ab_channel=GryffinVEVO",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: "All 4 Nothing (I'm So In Love)",
          listenCount: 3334134,
          releaseDate: '2022-04-08',
          artistName: "Lauv",
          albumName: "All 4 Nothing (I'm So In Love)",
          songImg: "https://i.ytimg.com/embed/vi/AH8b7EynJ60/maxresdefault.jpg",
          youtubeURL: "https://www.youtube.com/embed/AH8b7EynJ60&ab_channel=Lauv",
          createdAt: new Date(),
          updatedAt: new Date()
      }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Songs", null, {});
  },
};
