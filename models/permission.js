'use strict';
module.exports = (sequelize, DataTypes) => {
  var permission = sequelize.define('permission', {
    name: DataTypes.STRING
  }, {});
  permission.associate = function(models) {
    // associations can be defined here
  };
  return permission;
};