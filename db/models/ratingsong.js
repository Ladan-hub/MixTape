'use strict';
module.exports = (sequelize, DataTypes) => {
  const RatingSong = sequelize.define('RatingSong', {
    ratingId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});
  RatingSong.associate = function(models) {
    //none
  };
  return RatingSong;
};
