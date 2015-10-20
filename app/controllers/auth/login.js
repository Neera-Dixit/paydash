'use strict';

var mongoose = require('mongoose');
var Boom = require('boom');
var Joi = require('joi');
var User = mongoose.model('User');

var lockoutInterval = 60; // seconds
var maxAttemptsBeforeLockout = 5;


exports.showForm = {
    description: 'Returns the login page',
    auth: {
        mode: 'try',
        strategy: 'standard'
    },
    plugins: {
        'hapi-auth-cookie': {
            redirectTo: false // To stop from redirect loop
        }
    },
    handler: function(request, reply) {

        if (request.auth.isAuthenticated) {
            return reply.redirect('/account');
        }
        reply.view('auth/login');

    }
};

exports.postForm = {
    description: 'Post to the login page',
    auth: {
        mode: 'try',
        strategy: 'standard'
    },
    plugins: {
        'hapi-auth-cookie': {
            redirectTo: false
        },
        crumb: {
            key: 'crumb',
            source: 'payload', // this tests payload crumb value.
            restful: true // do not need to make Joi validation for crumb.
        }
    },
    validate: {
        payload: { // payload for POST, query for GET
            username: Joi.string().min(3).max(20),
            password: Joi.string().min(6).max(20)
        },
        failAction: function(request, reply, source, error) {
            // Username, passowrd minimum validation failed
            request.session.flash('error', 'Invalid username or password');
            return reply.redirect('/login');
        },
    },
    handler: function(request, reply) {
        if (request.auth.isAuthenticated) {
            return reply.redirect('/account');
        }
        User.findByCredentials(request.payload.username, request.payload.password, function(err, user, msg) {
            var context = {};
            if (err) {
                // Boom bad implementation
                request.session.flash('error', 'An internal server error occurred');
                return reply.redirect('/login');
            }
            if (user) {
                // TO DO : Check having before session set is good or bad
                request.auth.session.set(user);
                return reply.redirect('/account');
            } else {
                // User not fond in database
                request.session.flash('error', 'Invalid username or password');
                return reply.redirect('/login');
            }
        });


    }
};
