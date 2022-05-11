'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    ratings: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Rating.associate = function(models) {
    Rating.belongsTo(models.User, { foreignKey: 'userId' })
    Rating.belongsTo(models.Song, { 
      foreignKey: 'ratingId',
      through: 'RatingSongs',
      otherId: 'songId'
     })
  };
  return Rating;
};
