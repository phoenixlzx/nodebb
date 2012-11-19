var config = require('../config');
var gravatar = require('gravatar');

exports.auth = function(req, res, next) {
    // TODO check user permission.
}

exports.reg = function(req, res) {
    // TODO registration page, only visitor NOT logged in could view.
}

exports.login = function(req, res) {
    // TODO login page, only visitor NOT logged in could view.
}

exports.logout = function(req, res) {
    // TODO logout page, only logged in user could logout.
}

exports.control = function(req, res) {
    // TODO user control panel. Logged in user could edit his
    // own profile. Admin could edit everyone profile.
}
