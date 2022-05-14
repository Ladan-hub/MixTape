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
      return queryInterface.bulkInsert('Tapes', [
      {
        tapeName: 'listened',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Interested',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Morning K-Pop',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Heart Beats',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Work Out',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Happy Beats',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Choice Edit',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Soft Pop Hits',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Pop Party',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Chill Tracks',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Confidence Boost',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Moody Mix',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Tropical House',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Pop Remix',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Just Good Music',
        userId: 5,
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
      return queryInterface.bulkDelete('Tapes', null, {});
  }
};
