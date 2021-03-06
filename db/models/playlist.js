'use strict';

module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    songId: DataTypes.INTEGER,
    tapeId: DataTypes.INTEGER
  }, {});
  Playlist.associate = function(models) {
    //none
    Playlist.belongsTo(models.Song, {foreignKey: 'songId'})
    Playlist.belongsTo(models.Tape, {foreignKey: 'tapeId'})
  };
  return Playlist;
};
