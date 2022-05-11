'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: DataTypes.STRING,
    listenCount: DataTypes.INTEGER,
    releaseDate: DataTypes.DATE,
    artistName: DataTypes.STRING,
    album: DataTypes.STRING,
    songImg: DataTypes.STRING,
    youtubeURL: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.hasMany(models.Rating, { foreignKey: 'songId' })
  };
  return Song;
};
