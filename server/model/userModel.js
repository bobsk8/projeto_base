'use strict';

const  
  dao = require('../dao/index').userDao,
  dataModel = require('./dataModel'),
  crypto    = require('crypto');

let
  userModel;

userModel = new dataModel(dao);

userModel._login        = _login;
userModel.createUser    = _createUser;

module.exports.userModel = userModel;



function _sha256(password){
  let hash = crypto.createHash('sha256', 'Projeto:Base');
  hash.update(password);
  return hash.digest('hex');
}

function _login(user){
  return this.DAO.findOne({
    where: {
      username: user.username,
      pass: _sha256(user.pass)
    }
  });
}

function _createUser(data) {
  data.pass = _sha256(data.pass);
  return this.DAO.create(data);
}