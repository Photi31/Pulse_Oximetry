const {src, dest, watch, parallel} = require('gulp');

const browserSync    = require('browser-sync').create();
const sass           = require('gulp-sass')(require('sass'));
const cleanCSS       = require('gulp-clean-css');
const autoprefixer   = require('gulp-autoprefixer');
const rename         = require("gulp-rename");
const concat         = require('gulp-concat');
const uglify         = require('gulp-uglify-es').default;

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
}

function scripts() {
    return src([
        
        'src/js/script.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('src/js'))
    .pipe(browserSync.stream());     
}

function styles() {
    return src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest("src/css"))
        .pipe(browserSync.stream());     
}

function watching() {
    watch(['src/sass/**/*.+(scss|sass)'], styles);
    watch(['src/js/**/*.js', '!src/js/main.min.js'], scripts);
    watch("src/*.html").on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;

exports.default = parallel(scripts, browsersync, watching);