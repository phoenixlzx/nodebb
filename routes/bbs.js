var config = require('../config');
var data2xml = require('data2xml');
var gravatar = require('gravatar');

exports.auth_permission = function(req, res, next) {
    // TODO auth user status or permission to view/post/edit/delete 
    //posts, user profile and control user menubar.
};

exports.index = function(req, res) {
    // TODO Display all forum info
};

exports.viewForum = function(req, res) {
    // TODO Diplay posts under forum req.body.formid
};

exports.viewTopic = function(req, res) {
    // TODO Display topic contents req.body.topicid
    // How to protect user private? dynamicHelper or auth_permission?
};

exports.newTopic = function(req, res) {
    // TODO post new topic. Need BBCode support
};

exports.editTopic = function(req, res) {
    // TODO edit topic req.body.topicid, should be done by Admin, 
    // forum moderators, or the author himself. 
};

exports.deleteTopic = function(req, res) {
    // TODO delete topic req.body.topicid, should be done by Admin,
    // forum moderators, if no reply then it can be done by author.
};

exports.reply = function(req, res) {
    // TODO post reply to req.body.topicid, BBCode support needed.
}

exports.viewProfile = function(req, res) {
    // TODO view user req.body.userid profile, view user posts
    // and send mail via forum. only logged in user could do this op.
}

exports.feedIndex = function(req, res) {
    // TODO generate bbs new posts to XML feed.
}

exports.feedForum = function(req, res) {
    // TODO generate req.body.formid to XML feed.
