'use strict';
var Confidence = require('confidence');

// Confidence criteria 
var criteria = {
    env: process.env.NODE_ENV
};

//  Confidence document object for gulp tasks 
var paths = {
    fonts: ['./assets/fonts/*'],
    styles: ['./assets/styles/**/*'],
    images: ['./assets/images/**/*'],
    misc: ['./assets/misc/*'],
    scripts: {
        main: ['./assets/scripts/**/*'],
        vendor: ['./assets/scripts/vendor/*.js'],
    },
    lint: [
        './assets/scripts/**/*.js',
        './models/**/*.js',
        './routes/**/*.js',
        './controllers/**/*.js',
        './lib/**/*.js',
        './test/**/*.js',
    ]
};

var store = new Confidence.Store(paths);

exports.get = function(key) {
    return store.get(key, criteria);
};
exports.meta = function(key) {
    return store.meta(key, criteria);
};
