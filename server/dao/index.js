'use strict';

function server(config) {
    const
        Sequelize = require('sequelize'),
        sequelize = new Sequelize(
            config.dbAccess.DATABASE,
            config.dbAccess.MYSQL_USER,
            config.dbAccess.PASSWORD,
            config.dbHost
        ),

        clientDao = sequelize.import('./clientDao'),
        userDao = sequelize.import('./userDao');

    //Relations


    sequelize
        .authenticate()
        .then((err) => {
            console.log('Conected to DB');
        })
        .catch((err) => {
            console.log(`DB Conection failed: ${err}`);
        });

    module.exports = {
        sequelize,
        clientDao,
        userDao
    };

    return {
        sequelize,
        clientDao,
        userDao
    };
}

module.exports = server;
