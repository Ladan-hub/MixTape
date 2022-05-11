'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RatingSongs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ratingId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Ratings"}
      },
      songId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Songs"}
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
    return queryInterface.dropTable('RatingSongs');
  }
};
