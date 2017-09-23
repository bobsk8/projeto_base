'use strict';

const
  DataTypes = require('sequelize').DataTypes;

const clientDaoModel = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  }
};


//// Export //////
module.exports = (sequelize) => {
  return sequelize.define(
    'client',
    clientDaoModel,
    {underscored: true}
  );
};
