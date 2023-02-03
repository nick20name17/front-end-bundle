const webpackconfig = require('../../webpack.config');
const size = require('gulp-size');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');

const script = async () => {
  $.gulp.src($.path.script.src)
    .pipe(gulpif($.config.isProd, sourcemaps.init()))
    .pipe(webpack({
      config: webpackconfig,
    }))
    .pipe(babel($.config.script.babel))
    .pipe(gulpif($.config.isProd, size({ title: 'Before uglify' })))
    .pipe(gulpif($.config.isProd, uglify()))
    .pipe(gulpif($.config.isProd, size({ title: 'After uglify' })))
    .pipe(gulpif($.config.isProd, sourcemaps.write()))
    .pipe($.gulp.dest($.path.script.dest))
    .pipe($.browserSync.stream());
};

module.exports = script;
