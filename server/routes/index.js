'use strict';

const
    clientRouter = require('./client');


function routerAdapter(app) {
    clientRouter(app);
}

module.exports = routerAdapter;
