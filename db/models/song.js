'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: DataTypes.STRING,
    listenCount: DataTypes.INTEGER,
    releaseDate: DataTypes.DATE,
    artistName: DataTypes.STRING,
    albumName: DataTypes.STRING,
    songImg: DataTypes.STRING,
    youtubeURL: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    Song.belongsToMany(models.Rating,
      {
        foreignKey: 'songId',
        through: 'RatingSongs',
        otherId: 'ratingId'
    })
    // Song.belongsToMany(models.Tape,
    //   {
    //     foreignKey: 'songId',
    //     through: 'Playlists',
    //     otherId: 'tapeId',
    //     as: 'something'
    // })
    Song.hasMany(models.Playlist, {
      foreignKey: 'songId'
    })
  };
  return Song;
};
