'use strict';

module.exports.init = _init;

/// Declarations ////

function _init(dao) {
  return dao.sequelize.sync({ force: true })
    .then(() => {
    });
}
