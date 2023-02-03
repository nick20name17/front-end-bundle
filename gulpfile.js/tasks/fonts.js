const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");
const gulpif = require('gulp-if');
const size = require('gulp-size');

const fonts = async () => {
  $.gulp.src($.path.fonts.src)
    .pipe(gulpif($.config.isProd, fonter($.config.fonts.fonter)))
    .pipe(gulpif($.config.isProd, size({ title: 'Before convert' })))
    .pipe(gulpif($.config.isProd, ttf2woff2()))
    .pipe(gulpif($.config.isProd, size({ title: 'After convert' })))
    .pipe($.gulp.dest($.path.fonts.dest))
    .pipe($.browserSync.stream());
};

module.exports = fonts;
