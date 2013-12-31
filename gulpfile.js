var gulp = require('gulp');

gulp.task('copyAllToTemp', function () {
	gulp.src('./src/**')
	.pipe(gulp.dest('./.temp/'));
});

var coffee = require('gulp-coffee');

gulp.task('coffee', function () {
	gulp.src('./.temp/**/*.coffee')
	.pipe(coffee())
	.pipe(gulp.dest('./.temp/'));
});

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('uglify', function () {
	gulp.src('./.temp/**/*.js')
	.pipe(concat('z.js'))
	.pipe(gulp.dest('./.temp/scripts/'))
	.pipe(uglify())
	.pipe(gulp.dest('./.temp/scripts/z.min.js'));
});

// var less = require('gulp-less');

// gulp.task('less', function () {
// 	gulp.src('./temp/styles/styles.less')
// 	.pipe(less())
// 	.pipe(gulp.dest('./.temp/styles/styles.css'));
// });

// var gulp = require('gulp');
// var path = require('path');
// var gutil = require('gulp-util');
// var coffee = require('gulp-coffee');
// var less = require('gulp-less');

// gulp.task('coffee', function () {
// 	gulp
// 	.src('./src/**/*.coffee')
// 	.pipe(coffee())
// 	.pipe(gulp.dest('./.temp/'));
// });

// gulp.task('less', function () {
// 	gulp
// 	.src('./src/styles/styles.less')
// 	.pipe(less())
// 	.pipe(gulp.dest('./.temp/styles/styles.css'));
// });

// gulp.task('default', function () {
// 	gulp.run('less');
// });