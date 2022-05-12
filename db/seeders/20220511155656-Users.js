'use strict';
const bcrypt = require('bcryptjs')
// css
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'friend',
        email: 'demouser@gmail.com',
        hashedpassword: bcrypt.hashSync('friend', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'sunnyvale',
        email: 'sunnyvale@gmail.com',
        hashedpassword: bcrypt.hashSync('sunnyvale', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'cupertino',
        email: 'cupertino@gmail.com',
        hashedpassword: bcrypt.hashSync('cupertino', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'santaclara',
        email: 'santaclara@gmail.com',
        hashedpassword: bcrypt.hashSync('santaclara', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'unioncity',
        email: 'unioncity@gmail.com',
        hashedpassword: bcrypt.hashSync('unioncity', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
