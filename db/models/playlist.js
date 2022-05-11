'use strict';

module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    TapeSongs: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    tapeId: DataTypes.INTEGER
  }, {});
  Playlist.associate = function(models) {
    Playlist.hasMany(models.Song, { foreignKey: 'songId' })
    Playlist.belongsTo(models.Tape, {foreignKey: 'tapeId'})
  };
  return Playlist;
};
