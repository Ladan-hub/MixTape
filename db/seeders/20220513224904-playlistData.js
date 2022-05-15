'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Playlists', [
      {
        songId: 1,
        tapeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 30,
        tapeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 2,
        tapeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 3,
        tapeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 4,
        tapeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 5,
        tapeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 6,
        tapeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 7,
        tapeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 8,
        tapeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 9,
        tapeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 10,
        tapeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 11,
        tapeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 12,
        tapeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 13,
        tapeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 14,
        tapeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 15,
        tapeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 16,
        tapeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 17,
        tapeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 18,
        tapeId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 19,
        tapeId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 20,
        tapeId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 1,
        tapeId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 2,
        tapeId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 4,
        tapeId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 5,
        tapeId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 10,
        tapeId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 30,
        tapeId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        songId: 32,
        tapeId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 31,
        tapeId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 29,
        tapeId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 28,
        tapeId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 26,
        tapeId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 24,
        tapeId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 22,
        tapeId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 15,
        tapeId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 16,
        tapeId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 18,
        tapeId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 19,
        tapeId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 20,
        tapeId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 21,
        tapeId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 24,
        tapeId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 25,
        tapeId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        songId: 26,
        tapeId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 26,
        tapeId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 30,
        tapeId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 31,
        tapeId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 10,
        tapeId: 13, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 2,
        tapeId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 1,
        tapeId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 2,
        tapeId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 3,
        tapeId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 4,
        tapeId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 5,
        tapeId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 7,
        tapeId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 8,
        tapeId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        songId: 10,
        tapeId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Playlists', null, {});
  }
};
