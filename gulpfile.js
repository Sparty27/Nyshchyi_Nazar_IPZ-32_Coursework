const {src, dest, watch, parallel} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();


function scripts() {
    const jsBundle = () => {
      src([
        'node_modules/jquery-circle-progress/dist/circle-progress.min.js',
      ])
      .pipe(concat('circle-progress.min.js'))
      .pipe(dest('dist/js'));
    }
    jsBundle();
    return src([
        'src/js/*.js',
        '!dist/js/main.min.js'
    ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('src/scss/main.scss')
        .pipe(concat('main.min.css'))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream())
}

function watching() {
    watch(['src/scss/main.scss'], styles)
    watch(['src/js/main.js'], scripts)
    watch(['src/*.html']).on('change', browserSync.reload);
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;

exports.default = parallel(styles, scripts, browsersync, watching);