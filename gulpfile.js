'use strict';
// This GULP process sass + give you browsersync
// It's set up for standard Jekyll sass structure
// w/ svgo command to clean SVGs...
var gulp         = require('gulp'),
    sass         = require('gulp-ruby-sass'),
    filter       = require('gulp-filter'),
    browserSync  = require('browser-sync'),
    svgmin       = require('gulp-svgmin'),
    reload       = browserSync.reload;

//SVGO
gulp.task('svg', function () {
    return gulp.src('_svg/sources/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(gulp.dest('_svg/optimized'))
});    

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync({
        // • JEKYLL GITHUB USER|ORGANIZATION PAGES (user.github.io)
        // ```jekyll s``` uses "0.0.0.0:4000" so use it 4 brosync too.
        // using jekyll (3.0.0.pre.beta8) w/ Incremental build!
        proxy: "http://0.0.0.0:4000"

        // • JEKYLL GITHUB PROJECT PAGES (user.github.io/user)
        // ```bundle exec jekyll serve --baseurl ''```
        // uses "0.0.0.0:4000/baseurl" 
        // using jekyll (2.4.0)
        // proxy: "0.0.0.0:4000/baseurl"
    });

    gulp.watch("_sass/*.scss", ['sass']);

    gulp.watch("_site/assets/css/main.css").on('change', reload);

});

gulp.task('sass', function () {
    return sass('_sass/')
        .pipe(gulp.dest('assets/css'))// Write the CSS & Source maps
        .pipe(filter('**/*.css')) // Filtering stream to only css files
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('default', ['serve']);

// to autoprefix use sublime (alt+super+p) > autoprefixer 
// https://github.com/sindresorhus/sublime-autoprefixer

// QUICKSTART:
// 0. open 2 terminal windows:
// 1. ```jekyll s --trace``` to run jekyll (cos this repo uses jekyll 3.0.0.pre.beta8)
// 2. ```gulp``` to process styles + new terminal window
// optional
// A. ```gulp svg``` to clean SVGs...

