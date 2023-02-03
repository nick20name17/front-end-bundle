const size = require('gulp-size');
const gulpif = require('gulp-if');
const svgsprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');

const svg = async () => {
  $.gulp.src($.path.svg.src)
    .pipe(gulpif($.config.isProd, size({ title: 'Before SvgMin' })))
    .pipe(svgmin())
    .pipe(gulpif($.config.isProd, size({ title: 'After SvgMin' })))
    .pipe(svgsprite($.config.svg.svgmin))
    .pipe($.gulp.dest($.path.svg.dest))
    .pipe($.browserSync.stream());
};

module.exports = svg;
