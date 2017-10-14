'use strict';

const
    clientRouter = require('./client'),
    userRouter = require('./user'),
    googleRouter = require('./google'),
    uploadRouter = require('./upload');


function routerAdapter(app) {
    clientRouter(app);
    userRouter(app);
    googleRouter(app);
    uploadRouter(app);
}

module.exports = routerAdapter;
