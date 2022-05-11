'use strict';
module.exports = (sequelize, DataTypes) => {
  const RatingSongs = sequelize.define('RatingSongs', {
    ratingId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});
  RatingSong.associate = function(models) {
    RatingSong.hasMany(models.Rating,
      {
          foreignKey: 'ratingId',
      })
      RatingSong.hasOne(models.Song,
      {
          foreignKey: 'songId',
      })
  };
  return RatingSongs;
};
