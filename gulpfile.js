const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));;
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compileSass() {
    return gulp.src('./assets/css/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

gulp.task('sass', compileSass);

function minifyImages() {
    return gulp.src('./assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function minifyJS() {
    return gulp.src('./assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function watch() {
    gulp.watch('assets/css/*.scss', compileSass);
    gulp.watch('assets/images/*', minifyImages);
    gulp.watch('assets/js/*.js', minifyJS);
}

exports.default = gulp.series(
    gulp.parallel(compileSass, minifyImages, minifyJS), watch);
