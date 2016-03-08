var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefix');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');

gulp.task('default', ['clean', 'watch', 'sass:watch', 'sass', 'webpack']);

gulp.task('clean', () => {
    return gulp.src(['build/*'], {
        read: false
    }).pipe(clean());
});

gulp.task('watch', () => {
    gulp.watch('app/components/*/*.js', ['webpack']);
    gulp.watch('app/resources/*/*.js', ['webpack']);
});

gulp.task('sass:watch', () => {
    gulp.watch('app/components/*/*.scss', ['sass']);
    gulp.watch('app/resources/*/*.scss', ['sass']);
});

gulp.task('sass', () => {
    gulp.src(['app/resources/*/*.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(minifycss())
        .pipe(gulp.dest('build/'));
});

gulp.task('webpack', () => {
    return gulp
            .src('./')
            .pipe(webpack(webpackConfig))
            .pipe(uglify())
            .pipe(gulp.dest('build/'));
});