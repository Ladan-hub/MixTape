'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    TapeSongs: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    tapeId: DataTypes.INTEGER
  }, {});
  Playlist.associate = function(models) {
    // associations can be defined here
  };
  return Playlist;
};