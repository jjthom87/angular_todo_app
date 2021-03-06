'use strict';
module.exports = function(sequelize, DataTypes) {
  var Guestbook = sequelize.define('Guestbook', {
    name: DataTypes.STRING,
    message: DataTypes.STRING,
    isCompleted: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Guestbook;
};