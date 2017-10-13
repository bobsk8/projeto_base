'use strict';

const
    clientRouter = require('./client'),
    userRouter = require('./user'),
    googleRouter = require('./google');


function routerAdapter(app) {
    clientRouter(app);
    userRouter(app);
    googleRouter(app);
}

module.exports = routerAdapter;
