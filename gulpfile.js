var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var focus = require('postcss-focus');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var path = require('path');

// Transpiling LESS to CSS, autoprefix, minifying, sourcemaps and :focus plugin
gulp.task('css', function () {
    console.log("Transpiling LESS to CSS, autoprefix, minifying, sourcemaps and :focus plugin");
    return gulp.src('./app/assets/css/Default.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(postcss([ require('postcss-focus') ]))
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/assets/css/'));
});

//Creating angularJS minified, concatenated and sourcemap files
gulp.task('scriptsConcat', function () {
    console.log("Creating angularJS minified, concatenated and sourcemap files");
    return gulp.src([
            'bower_components/angular/angular.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-animate/angular-animate.min.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'assets/js/ui-bootstrap-tpls-2.5.0.min.js',
            'app.js',
            'app.services.js',
            'repo-search/*.js',
            'repo-issues/*.js',
            'services/*.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/js/prod/'));
});

gulp.task('watch', function () {
    gulp.watch('./app/assets/css/*.less', ['css']);
});

gulp.task('default', ['css', 'scriptsConcat']);
