'use strict';

let
  model = require('../../model/userModel').userModel;

module.exports = (req, res) => {  

    req.session.destroy();
    console.log('logout');
    res.send({ success: true });
};