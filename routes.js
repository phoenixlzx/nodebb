var bbs = require('./routes/bbs');
var user = require('./routes/user');
var admin = require('./routes/admin');

module.exports = function(app) {
    // BBS routes.
    // TODO merge bbs.auth_permission with user.auth
    app.get('/', bbs.index);
    app.get('/forum/:forumid', bbs.viewForum);
    app.get('/topic/:topicid', bbs.viewTopic);
    app.get('/topic/:topicid/edit', bbs.auth_permission, bbs.editTopic);
    app.post('/topic/:topicid/edit', bbs.auth_permission, bbs.editTopic);
    app.post('/topic/:topicid/delete', bbs.auth_permission, bbs.delTopic);
    app.get('/member/:userid', bbs.auth_permission, bbs.viewProfile);

    // user routes. Need idea for user permission check.
    app.get('/reg', user.auth, user.reg);
    app.post('/reg', user.auth, user.reg);
    app.get('/login', user.auth, user.login);
    app.post('/login', user.auth, user.login);
    app.get('/logout', user.auth, user.logout);
    app.get('/ucp', user.auth, user.control);
    app.post('/ucp', user.auth, user.control);

    // admin routes.
    app.get('/admin', admin.auth, admin.panel);
    app.post('/admin', admin.auth, admin.panel);
    
    // try_uri return to homepage.
    app.get('*', bbs.index);
}
