'use strict';
module.exports = (sequelize, DataTypes) => {
  const task_manager = sequelize.define('task_manager', {
    name: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  task_manager.associate = function(models) {
    // associations can be defined here
  };
  return task_manager;
};