global.$ = {
  gulp: require("gulp"),

  path: require("./config/path"),
  config: require('./config/config'),

  browserSync: require("browser-sync").create(),
};

const requieDir = require('require-dir');

const tasks = requieDir('./tasks', { recurse: true });

const watcher = () => {
  $.gulp.watch($.path.html.watcher, tasks.html);
  $.gulp.watch($.path.style.watcher, tasks.style);
  $.gulp.watch($.path.script.watcher, tasks.script);
  $.gulp.watch($.path.images.watcher, tasks.images);
  $.gulp.watch($.path.icons.watcher, tasks.icons);
  $.gulp.watch($.path.svg.watcher, tasks.svg);
  $.gulp.watch($.path.fonts.watcher, tasks.fonts);
};

const build = $.gulp.series(
  tasks.reset,
  $.gulp.parallel(tasks.fonts, tasks.images, tasks.svg, tasks.icons),
  tasks.html,
  tasks.style,
  tasks.script,
);

const dev = $.gulp.series(build, $.gulp.parallel(watcher, tasks.server));

exports.default = $.config.isProd ? build : dev;
