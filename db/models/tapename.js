'use strict';
module.exports = (sequelize, DataTypes) => {
  const TapeName = sequelize.define('TapeName', {
    tapeName: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  TapeName.associate = function(models) {
    Tape.belongsTo(models.User,
      {
          foreignKey: 'userId',
      })
    Tape.hasMany(models.Song,
      {
          foreignKey: 'tapeId',
          through: 'Playlists',
          otherId: 'userId'
      })
  };
  return TapeName;
};