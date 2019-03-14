var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var del = require('del');

// var concat = require("gulp-concat");

gulp.task('build', async () => {
    return gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});

gulp.task('bin', async () => {
    return gulp.src('src/bin/www')
        .pipe(gulp.dest('dist/bin'));
});

gulp.task('views', () => {
    return gulp.src('src/views/**/*')
        .pipe(gulp.dest('dist/views/'));
});

gulp.task('static', async () => {
    return gulp.src('src/public/**/*')
        .pipe(gulp.dest('dist/public/'));
});

gulp.task('clean', async () => {
    del('dist');
});

gulp.task("default", gulp.series('clean', 'bin', 'views', 'static', 'build'), () => {
    console.log('all done!');
});
