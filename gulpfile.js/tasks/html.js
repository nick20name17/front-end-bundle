const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const gulpif = require('gulp-if');

const html = async () => {
  $.gulp.src($.path.html.src)
    .pipe(fileinclude($.config.html.fileinclude))
    .pipe(gulpif($.config.isProd, size({ title: 'Before HTML' })))
    .pipe(gulpif($.config.isProd, htmlmin($.config.html.htmlmin)))
    .pipe(gulpif($.config.isProd, size({ title: 'After HTML' })))
    .pipe($.gulp.dest($.path.html.dest))
    .pipe($.browserSync.stream());
};

module.exports = html;
