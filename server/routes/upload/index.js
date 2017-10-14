'use strict';

const
    path = '/api/v1/uploads';

function uploadRouter(app) {    

    app.route(path)
        .post(require('./upload-data'));
}


module.exports = uploadRouter;