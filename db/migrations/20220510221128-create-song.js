'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      listenCount: {
        type: Sequelize.INTEGER
      },
      releaseDate: {
        type: Sequelize.DATE
      },
      artistName: {
        type: Sequelize.STRING
      },
      album: {
        type: Sequelize.STRING
      },
      songImg: {
        type: Sequelize.STRING
      },
      youtubeURL: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Songs');
  }
};