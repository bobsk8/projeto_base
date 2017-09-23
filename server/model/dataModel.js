'use strict';

function dataModel(dao) {
  this.DAO = dao;
}

dataModel.prototype.update   = _update;
dataModel.prototype.destroy  = _destroy;
dataModel.prototype.create   = _create;
dataModel.prototype.findById = _findById;
dataModel.prototype.findAll  = _findAll;

module.exports = dataModel;

/* //////////
Declarations 
////////// */
function _create(data) {
  return this.DAO.create(data);
}

function _findById(id) {
  return this.DAO.findOne({where:{id}});
}

function _findAll() {
  return this.DAO.findAll();
}

function _destroy(id) {
  return this.DAO.findOne({where:{id}})
    .then(function(persisted){
      return persisted.destroy();
    });
}

function _update(id, data) {
  return this.DAO.findOne({where:{id}})
    .then(function(persisted){
      return persisted.update(data);
    });
}
