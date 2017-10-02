'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload
var nodemon = require('gulp-nodemon');

gulp.task('default', ['browser-sync'], () => {
});

gulp.task('browser-sync', ['nodemon'], () => {
    browserSync.init(null, {
        proxy: "http://localhost:5000",
        files: ["public/**/*.*"],
        port: 7000
    });
});

gulp.task('nodemon', (cb) => {
    var started = false;

    return nodemon({
        script: 'index.js'
    }).on('start', () => {
        if (!started) {
            cb();
            started = true;
        }
    }).on('restart', () => {
        setTimeout(() => {
            reload({ stream: false });
        }, 1000);
    });
});
