'use strict';

process.env.NODE_ENV = 'test';

const
    assert = require('chai').assert,
    request = require('supertest'),
    uri = 'http://localhost/api/v1',
    agent = request.agent(uri),
    
    config   = require('config'),
    dbModel = require('../model/dbModel'),
    server  = require('../dao/index');
 

before(function() {
  });


after(function() {
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
  });

describe('crud clients', function () {

    it('insert client', function (done) {
        var client = {name:'Alberto'}
        agent.post('/clients')            
            .send(client)
            .expect(200)
            .end(done);
    });

    it('get clients by id', function (done) {
        agent.get('/clients/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(response => {
                assert.equal(response.body.name, 'Alberto');
            })
            .end(done);
    });
});