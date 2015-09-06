'use strict';
// This GULP process sass and give you browsersync
// It's set up for standard Jekyll sass structure
// w/ svgo command to clean SVGs...
var gulp         = require('gulp'),
    sass         = require('gulp-ruby-sass'),
    filter       = require('gulp-filter'),
    browserSync  = require('browser-sync'),
    svgmin       = require('gulp-svgmin'),
    reload       = browserSync.reload;

//SVGO
// gulp.task('svg', function () {
//     return gulp.src('_svg-pre-opt/*.svg')
//         .pipe(svgmin({
//             js2svg: {
//                 pretty: true
//             }
//         }))
//         .pipe(gulp.dest('_svg-optimized'))
// });    

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync({
        // "jekyll serve" uses "0.0.0.0:4000" so lets use it also for brosync
        proxy: "http://0.0.0.0:4000"
    });

    gulp.watch("_sass/*.scss", ['sass']);

    gulp.watch("_site/assets/css/main.css").on('change', reload);
    // gulp.watch("_site/*.*").on('change', reload);
    // gulp.watch("_posts/*.*", ['jekyll']);
    // gulp.watch("css/main.*").on('change', reload);
    // gulp.watch("_site/css/main.*").on('change', reload);
    // gulp.watch("_site/*.html").on('change', reload);
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

// howto:
// 1. "gulp" to process styles + new terminal window
// 2. "jekyll serve" to make jekyll do his job (cos git uses jekyll 2.4.0)


