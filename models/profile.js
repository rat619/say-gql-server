'use strict';
module.exports = (sequelize, DataTypes) => {
  var profile = sequelize.define('profile', {
    name: DataTypes.STRING
  }, {});
  profile.associate = function(models) {
    // associations can be defined here
    profile.hasMany(models.permission,{
      foreignKey:'profile_id',
    })
  };
  return profile;
};