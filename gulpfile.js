'use strict';

/**
 * Module dependencies
 */
var gulp = require('gulp');
var	args = require('get-gulp-args')();
var path = require('path');
var assert = require('assert');

var Karma = require('karma').Server;

gulp.task('test', function(done) {
    return new Karma({
        configFile: path.resolve('karma.conf.js'),
        singleRun: true,
        browsers: ['PhantomJS']
    }, done).start();
});

// Karma test runner task
gulp.task('karma', function (done) {
    assert(args.conf, '--conf="path to karma.conf"');

    return new Karma({
        configFile: path.resolve(args.conf),
        singleRun: true,
        browsers: ['PhantomJS']
    }, done).start();
});

gulp.task('default', function (done) {
    console.log('\n\
gulp karma --conf=../path/to/karma.conf\n\n\
    "browsers" set to ["PhantomJS"]\n');
});
