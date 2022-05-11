
'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                name: "No Roots",
                listenCount: 297825258,
                releaseDate: '2016-12-02',
                artistName: "Alice Merton",
                album: "Mint +4",
                songImg: "https://en.wikipedia.org/wiki/No_Roots_(song)#/media/File:Alice_Merton_No_Roots.jpg",
                youtubeURL: "https://www.youtube.com/watch?v=PUdyuKaGQd4&ab_channel=AliceMerton",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Unstoppable",
                listenCount: 44608322,
                releaseDate: '2021-09-27',
                artistName: "Sia",
                album: "This Is Acting",
                songImg: "https://i.ytimg.com/vi/cxjvTXo9WWM/maxresdefault.jpg",
                youtubeURL: "https://www.youtube.com/watch?v=YaEG2aWJnZ8",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Stitches",
                listenCount: 1443443639,
                releaseDate: '2021-09-27',
                artistName: "Shawn Mendes",
                album: "Stitches",
                songImg: "https://i.ytimg.com/vi/DqO1lLavWGo/maxresdefault.jpg",
                youtubeURL: "https://www.youtube.com/watch?v=VbfpW0pbvaU&ab_channel=ShawnMendesVEVO",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Lost",
                listenCount: 26959104,
                releaseDate: '2012-06-10',
                artistName: "Maroon 5",
                album: "Jordi",
                songImg: "https://i.ytimg.com/an/U05fwua9-D4/13147714373421743624_mq.jpg?v=60c35156",
                youtubeURL: "https://www.youtube.com/watch?v=U05fwua9-D4&ab_channel=Maroon5VEVO",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Happier Than Ever",
                listenCount: 196628891,
                releaseDate: '2021-07-30',
                artistName: "Billie Eilish",
                album: "Happier Than Ever",
                songImg: "https://i.ytimg.com/vi/NSTUVHsb9xw/maxresdefault.jpg",
                youtubeURL: "https://www.youtube.com/watch?v=5GJWxDKyk3A&ab_channel=BillieEilishVEVO",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Wrecked",
                listenCount: 67137978,
                releaseDate: '2021-07-15',
                artistName: "Imagine Dragons",
                album: "Hello Autumn 2021",
                songImg: "https://upload.wikimedia.org/wikipedia/en/b/b2/Wrecked_song_cover.jpg",
                youtubeURL: "https://www.youtube.com/watch?v=Y2NkuFIlLEo&ab_channel=ImagineDragonsVEVO",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Dance Monkey",
                listenCount: 1833308170,
                releaseDate: '2019-06-24',
                artistName: "Tones And I",
                album: "Ultratop Hit Connection Best Of 2019.3",
                songImg: "https://i.ytimg.com/vi/Hx4nWW9z0ig/maxresdefault.jpg",
                youtubeURL: "https://www.youtube.com/watch?v=q0hyYWKXF0Q&ab_channel=TonesAndI",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Let Me Down Slowly",
                listenCount: 370751710,
                releaseDate: '2018-06-04',
                artistName: "Alec Benjamin",
                album: "Narrated For You",
                songImg: "https://i.ytimg.com/vi/jLNrvmXboj8/maxresdefault.jpg",
                youtubeURL: "https://www.youtube.com/watch?v=50VNCymT-Cs&ab_channel=AlecBenjamin",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Salt",
                listenCount: 64615132,
                releaseDate: '2020-04-14',
                artistName: "Ava Max",
                album: "Heaven & Hell",
                songImg: "https://i.ytimg.com/an/2EfE0vhxt1o/43ae7069-b9ee-4ba8-bb5e-0883067c2a71_mq.jpg?v=5deffdc4",
                youtubeURL: "https://www.youtube.com/watch?v=PKWHYLtmAGA&ab_channel=AvaMax",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Lose You To Love Me",
                listenCount: 396666510,
                releaseDate: '2019-10-22',
                artistName: "Selena Gomez",
                album: "Rare",
                songImg: "https://i.ytimg.com/vi/KE12jhXAdws/maxresdefault.jpg",
                youtubeURL: "https://www.youtube.com/watch?v=zlJDTxahav0",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Light Switch",
                listenCount: 70429327,
                releaseDate: '2022-01-20',
                artistName: "Charlie Puth",
                album: "Light Switch",
                songImg: "https://i.ytimg.com/vi/oW5vH7y76yc/hqdefault.jpg",
                youtubeURL: "https://www.youtube.com/watch?v=WFsAon_TWPQ&ab_channel=CharliePuth",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Out of Time",
                listenCount: 70429327,
                releaseDate: '2022-01-20',
                artistName: "The Weeknd",
                album: "Dawn FM",
                songImg: "https://i.ytimg.com/vi/2fDzCWNS3ig/maxresdefault.jpg",
                youtubeURL: "https://www.youtube.com/watch?v=2fDzCWNS3ig&ab_channel=TheWeekndVEVO",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Don't Go Yet",
                listenCount: 34274280,
                releaseDate: '2021-07-22',
                artistName: "Camila Cabello",
                album: "Familia",
                songImg: "https://i.ytimg.com/vi/iFPkd-7AcDM/maxresdefault.jpg",
                youtubeURL: "https://www.youtube.com/watch?v=iFPkd-7AcDM&ab_channel=CamilaCabelloVEVO",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "You Were Loved",
                listenCount: 2530557,
                releaseDate: '2022-04-01',
                artistName: "OneRepublic & Gryffin",
                album: "You Were Loved",
                songImg: "https://i.ytimg.com/vi/8d9Ma7vp7Sc/maxresdefault.jpg",
                youtubeURL: "https://www.youtube.com/watch?v=8d9Ma7vp7Sc&ab_channel=GryffinVEVO",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "All 4 Nothing (I'm So In Love)",
                listenCount: 3334134,
                releaseDate: '2022-04-08',
                artistName: "Lauv",
                album: "All 4 Nothing (I'm So In Love)",
                songImg: "https://i.ytimg.com/vi/AH8b7EynJ60/maxresdefault.jpg",
                youtubeURL: "https://www.youtube.com/watch?v=AH8b7EynJ60&ab_channel=Lauv",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};