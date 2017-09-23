'use strict';

const
  DataTypes = require('sequelize').DataTypes;

const userDaoModel = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  username: {
    type: DataTypes.STRING
  },
  pass: {
    type: DataTypes.STRING
  },
  role_id: {
    type: DataTypes.INTEGER
  }
};


//// Export //////
module.exports = (sequelize) => {
  return sequelize.define(
    'user',
    userDaoModel,
    {underscored: true}
  );
};
