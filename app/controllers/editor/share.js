'use strict';

const Translate = require('../../templates/helpers/t');
const Crypto = require('crypto');
const Joi = require('joi');

exports.show = {
    auth: {
        scope: ['block', 'editor']
    },
    handler: function(request, reply) {
        var share = Translate('/web/editor/share', request.auth.credentials, null);
        reply.view('editor/share', { data: share });
    }
};

exports.postShareForm = {
    auth: {
        mode: 'try',
        strategy: 'standard',
        scope: 'block'
    },
    plugins: {
        'hapi-auth-cookie': {
            redirectTo: false // To stop from redirect loop
        }
    },
    validate: {
        payload: {
            name_email: Joi.string().email().required(),
            share_region: Joi.string().min(2).max(20).required()
        },
        failAction: function(request, reply, source, error) {
            // Boom bad request
            request.yar.flash('error', 'Please enter a valid email address');
            return reply.redirect('/editor/share');
        }
    },
    handler: function(request, reply) {
        var tempPass = Math.random().toString(36).substr(2, 7);
        var tempUsername = Math.random().toString(36).substr(2, 4);

        Crypto.randomBytes(8, function(err, buffer) {
            var newUser = {
                email: request.payload.name_email.toLowerCase(),
                username: tempUsername,
                password: Crypto.createHash('md5').update(tempPass).digest('hex'),
                scope: 'editor'
            };

            var User = request.server.plugins.sequelize.db.User;
            var User_Regions = request.server.plugins.sequelize.db.user_regions;
            var Blocks = request.server.plugins.sequelize.db.Blocks;

            User.create(newUser)
                .then(function(user) {
                    Blocks.findOne({
                        where: {
                            block_code: request.payload.share_region
                        }
                    }).then(function(block) {
                        var newUserRegion = {
                            region_code: request.payload.share_region,
                            region_name: block.block_name,
                            user_id: user.id
                        };

                        User_Regions.create(newUserRegion).then(function(user_region) {
                            var data = {
                                from: 'epodindianrega@gmail.com',
                                to: user.email,
                                subject: 'Invitation for Data Entry - PayDash',
                                path: 'emails/editor-share',
                                context: {
                                    name: request.auth.credentials.firstname +
                                        request.auth.credentials.lastname,
                                    url: request.connection.info.protocol +
                                        '://' +
                                        request.info.host +
                                        '/login',
                                    username: tempUsername,
                                    password: tempPass
                                }
                            };
                            //  Send Email
                            var Mailer = request.server.plugins.mailer;
                            Mailer.sendMail(data, function(err, info) {
                                console.log(err);
                            });
                            request.yar.flash(
                                'success',
                                Translate(
                                    '/web/editor/share/success',
                                    request.auth.credentials,
                                    null
                                )
                            );
                            return reply.redirect('/editor/info');
                        });
                    });
                })
                .catch(function(err) {
                    request.yar.flash(
                        'error',
                        Translate('/web/editor/share/user_exists', request.auth.credentials, null)
                    );
                    return reply.redirect('/editor/share');
                });
        });
    }
};
