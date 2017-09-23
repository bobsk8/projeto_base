'use strict';

const
    path = '/api/v1/users';

function userRouter(app) {

    app.route(path)
        .post(require('./user-create'))

    app.route(path + '/login')
        .post(require('./login'));

    app.route(path + '/user-session')
        .get(require('./user-session'))

    app.route(path + '/user-logout')
        .get(require('./user-logout'))

}


module.exports = userRouter;