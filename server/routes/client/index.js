'use strict';

const
  path = '/api/v1/clients';

function clientRouter(app) {

  app.route(path)
    .get(require('./get-clients'))
    .post(require('./create-client'));

  app.route(path + '/export-clients')
    .get(require('./export-clients'))

  app.route(path + '/:id')
    .get(require('./get-client-by-id'))
    .put(require('./edit-client'))
    .delete(require('./delete-client'));


}


module.exports = clientRouter;