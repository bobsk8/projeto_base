'use strict';

const
  clientModel = require('../../model/clientModel').clientModel;

module.exports = (req, res) => {
  let
    client = req.body;

    clientModel.create(client).then(data => res.send(data));

};
