const size = require('gulp-size');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const gulpif = require('gulp-if');

const icons = async () => {
  $.gulp.src($.path.icons.src)
    .pipe(newer($.path.icons.dest))
    .pipe(gulpif($.config.isProd, size({ title: 'Before Icons compressed' })))
    .pipe(gulpif($.config.isProd, imagemin($.config.images.imagemin)))
    .pipe(gulpif($.config.isProd, size({ title: 'After Icons compressed' })))
    .pipe($.gulp.dest($.path.icons.dest))
    .pipe($.browserSync.stream());
};

module.exports = icons;
