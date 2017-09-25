
var gulp = require('gulp');
var concat = require('gulp-concat');
var angularFilesort = require('gulp-angular-filesort');
var strip = require('gulp-strip-line');
var templateCache = require('gulp-angular-templatecache');


gulp.task('buildMenuTemplateCache', function () {
    return gulp
        .src([
            './ext-modules/jnMenu/**/*.html'
        ])
        .pipe(templateCache({
            root: 'ext-modules/jnMenu/',
            module: 'jnMenu'
        }))
        .pipe(gulp.dest('./ext-modules/jnMenu/'))
    ;
});

gulp.task('buildDashboardTemplateCache', function () {
    return gulp
        .src([
            './ext-modules/jnDashboard/**/*.html'
        ])
        .pipe(templateCache({
            root: 'ext-modules/jnDashboard/',
            module: 'jnDashboard'
        }))
        .pipe(gulp.dest('./ext-modules/jnDashboard/'))
    ;
});

gulp.task('buildFrameworkTemplateCache', function () {
    return gulp
        .src([
            './ext-modules/jnFramework/**/*.html'
        ])
        .pipe(templateCache({
            root: 'ext-modules/jnFramework/',
            module: 'jnFramework'
        }))
        .pipe(gulp.dest('./ext-modules/jnFramework/'))
    ;
});

gulp.task('buildJavaScript', function () {
    return gulp
        .src([
            './ext-modules/**/*.js'
        ])
        .pipe(angularFilesort())
        .pipe(strip(["use strict"]))
        .pipe(concat('jnFramework.js'))
        .pipe(gulp.dest('./dist/'))
    ;
});

gulp.task('buildCSS', function () {
    return gulp
        .src([
            './ext-modules/**/*.css'
        ])
        .pipe(concat('jnFramework.css'))
        .pipe(gulp.dest('./dist/'))
    ;
});