var config = require('../config');

exports.auth = function(req, res, next) {
    // TODO check user permission.
};

exports.panel = function(req, res) {
    // TODO admin area, system information & forum status.
    // all admin settings, forum settings, etc, should split by tabs, with '/admin#'.
};
