// Include gulp
var gulp = require('gulp');

// Include Our Plugins
const sass = require('gulp-sass')(require('sass'));
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('src/assets/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/assets/main/'))
        .pipe(livereload());
});

// Compile Our JavaScript
gulp.task('js', function () {
    return gulp.src('src/assets/js/**/*')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('src/assets/main'))
        .pipe(livereload());
});

// Watch Files For Changes
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/assets/scss/**/*', gulp.series('sass'));
    gulp.watch('src/assets/js/**/*', gulp.series('js'));
});

// Default Task
gulp.task('default', gulp.series('sass', 'js', 'watch'));