'use strict';
const
  config   = require('config'),
  dbModel = require('../model/dbModel'),
  server  = require('../dao/index');

//Config server
let dao = server(config);

(function create() {
  dbModel.init(dao)
    .then(() => {
      console.log('DB initialized');
    })
    .catch((err) => {
      console.log('Err: Role initialized - ' + err);
    });
})();
