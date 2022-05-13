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
      return queryInterface.bulkInsert('Tapes', [{
        tapeName: 'Listened',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Interested',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tapeName: 'Jogging',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
