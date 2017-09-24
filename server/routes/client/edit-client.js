'use strict';

const
  clientModel = require('../../model/clientModel').clientModel;

module.exports = (req, res) => {
  let
    id = req.params.id,
    client = req.body;

    clientModel.update(id,client).then(data => res.send(data));

};
