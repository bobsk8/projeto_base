'use strict';

const  
  dao = require('../dao/index').clientDao,
  dataModel = require('./dataModel');

let
  clientModel;

clientModel = new dataModel(dao);

module.exports.clientModel = clientModel;