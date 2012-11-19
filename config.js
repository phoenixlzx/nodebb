var mongodb = require('mongodb');

exports.config = {
    name: 'NodeBB',
    description: 'A lightweight forum software powered by Express & MongoDB',
    version: '0.0.1',
    
    // Site settings
    host: 'http://yourdomain.tld',
    logo: '',
    port: 8000
    
    rss: {
        title: 'NodeBB',
        link: 'http://yourdomain.tld',
        language: 'zh-cn',
        description: 'A lightweight forum software powered by Express & MongoDB',
        max_items: '20'
    };

    // Mail service settings
    mail_port: 25,
    mail_name: 'user@mail.tld'


    // Database settings
    session_secret: 'session_secret',
    auth_cookie_name: 'cookie_auth',
    var mongoStore = require('connect-mongo')(express);
};
