'use strict';

const
    clientRouter = require('./client'),
    userRouter = require('./user');


function routerAdapter(app) {
    clientRouter(app);
    userRouter(app);
}

module.exports = routerAdapter;
