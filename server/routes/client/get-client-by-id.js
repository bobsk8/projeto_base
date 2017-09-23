'use strict';

const
  clientModel = require('../../model/clientModel').clientModel;

module.exports = (req, res) => {
  let
    id = req.params.id;

  clientModel.findById(id).then(data => res.send(data));

};
