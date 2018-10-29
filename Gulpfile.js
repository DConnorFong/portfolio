// Gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('build', function() {
    console.log('')
    gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./src/css/'))
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['build']);
});

gulp.task('default', ['build', 'watch']);