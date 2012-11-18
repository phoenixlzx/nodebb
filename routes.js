var bbs = require('./routes/bbs');
    user = require('./routes/user');
    admin = require('./routes/admin');

module.exports = function(app) {
    app.get('/', bbs.index);
    app.get('/forum/:forumid', bbs.viewForum);
    app.get('/topic/:topicid', bbs.viewTopic);
    app.get('/topic/:topicid/edit', bbs.auth_permission, bbs.editTopic);
    app.post('/topic/:topicid/edit', bbs.auth_permission, bbs.editTopic);
    app.post('/topic/:topicid/delete', bbs.auth_permission, bbs.delTopic);
