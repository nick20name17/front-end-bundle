const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sassglob = require('gulp-sass-glob');
const gulpif = require('gulp-if');
const size = require('gulp-size');
const sourcemaps = require('gulp-sourcemaps');

const style = async () => {
  $.gulp.src($.path.style.src)
    .pipe(gulpif($.config.isProd, sourcemaps.init()))
    .pipe(gulpif($.config.isProd, size({ title: 'Before compress' })))
    .pipe(sassglob())
    .pipe(sass($.config.style.sass))
    .pipe(autoprefixer($.config.style.autoprefixer))
    .pipe(rename($.config.style.rename))
    .pipe(gulpif($.config.isProd, size({ title: 'After compress' })))
    .pipe(gulpif($.config.isProd, sourcemaps.write('.')))
    .pipe($.gulp.dest($.path.style.dest))
    .pipe($.browserSync.stream());
};

module.exports = style;
