'use strict';

exports.register = function(server, options, next) {

    server.auth.strategy('standard', 'cookie', {
        password: options.cookieSecret, // cookie secret
        cookie: options.cookieName, // Cookie name
        isSecure: false, // required for non-https applications
        clearInvalid: true,
        ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
        redirectTo: '/login'
    });

    // Blacklist all routes.
    server.auth.default({
        strategy: 'standard',
        scope: ['district', 'block']
    });

    return next();

};

exports.register.attributes = {
    name: 'auth',
    dependencies: ['hapi-auth-cookie', 'sequelize']
};
