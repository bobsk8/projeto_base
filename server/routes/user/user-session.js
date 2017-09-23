'use strict';

let
  model = require('../../model/userModel').userModel;

module.exports = (req, res) => {
  let
    user = { login: false };

  if (!req.session.user) {
    res.send(user);
    return;
  }

  model.findById(req.session.user.id).then(userData => {
    if (userData) {
      user = setUser(userData);
    }
    res.send(user);
  }, err => {
    console.log(err);
    res.send({ login: false });
  });
};

function setUser(data) {
  let
    user = {};

  user.name = data.dataValues.name;
  user.username = data.dataValues.username;
  user.login = true;
  return user;
};
