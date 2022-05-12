'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tape = sequelize.define('Tape', {
    tapeName: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Tape.associate = function(models) {
    Tape.belongsTo(models.User,
      {
          foreignKey: 'userId',
      })
    Tape.belongsToMany(models.Song,
      {
          foreignKey: 'tapeId',
          through: 'Playlists',
          otherId: 'songId'
      })
  };
  return Tape;
};