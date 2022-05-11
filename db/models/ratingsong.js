'use strict';
module.exports = (sequelize, DataTypes) => {
  const RatingSongs = sequelize.define('RatingSongs', {
    ratingId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});
  RatingSongs.associate = function(models) {
    // associations can be defined here
    
    
  };
  return RatingSongs;
};
