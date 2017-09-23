'use strict';

let
    model = require('../../model/userModel').userModel;

module.exports = (req, res) => {
    let
        user = req.body,
        userR = {};

    model._login(user).then((data) => {

        if (data) {
            userR = setUser(data)
            req.session.user = setUserSession(data);
            res.send(userR);
        }else{
            res.send({ login: false });
        }
    }).catch((err) => {
        console.log(err);
        res.send({ login: false });
    });
};

function setUser(data) {
    let
        user = {};

    user.name = data.dataValues.name;
    user.username = data.dataValues.username;
    user.login = true;
    return user;
};

function setUserSession(data) {
    let
        user = {};

    user.id = data.dataValues.id;
    user.name = data.dataValues.name;
    user.username = data.dataValues.username;
    user.login = true;
    return user;
};
