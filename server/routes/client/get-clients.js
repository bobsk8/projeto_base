'use strict';

const
  model = require('../../model/clientModel').clientModel;

module.exports = (req, res) => {

  model.findAll().then(data => res.send(data));

};
