const size = require('gulp-size');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const gulpif = require('gulp-if');

const images = async () => {
  $.gulp.src($.path.images.src)
    .pipe(newer($.path.images.dest))
    .pipe(gulpif($.config.isProd, size({ title: 'Before Images compressed' })))
    .pipe(gulpif($.config.isProd, imagemin($.config.images.imagemin)))
    .pipe(gulpif($.config.isProd, size({ title: 'After Images compressed' })))
    .pipe($.gulp.dest($.path.images.dest))
    .pipe($.browserSync.stream());
};

module.exports = images;
