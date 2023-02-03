const pathSrc = 'src/';
const pathDest = 'dist/';

module.exports = {
  root: pathDest,

  html: {
    src: `${pathSrc}*.html`,
    watcher: `${pathSrc}**/*.html`,
    dest: pathDest,
  },

  style: {
    src: `${pathSrc}scss/**/*.scss`,
    watcher: `${pathSrc}scss/**/*.scss`,
    dest: `${pathDest}css`,
  },

  fonts: {
    src: `${pathSrc}fonts/*`,
    watcher: `${pathSrc}fonts/**/*`,
    dest: `${pathDest}fonts`,
  },

  script: {
    src: `${pathSrc}js/index.js`,
    watcher: `${pathSrc}js/**/*.js`,
    dest: `${pathDest}js`,
  },

  images: {
    src: `${pathSrc}img/**/*`,
    watcher: `${pathSrc}img/**/*`,
    dest: `${pathDest}img`,
  },

  icons: {
    src: [
      `${pathSrc}icons/**.jpg`,
      `${pathSrc}icons/**.jpeg`,
      `${pathSrc}icons/**.png`,
    ],
    watcher: `${pathSrc}icons/**/*`,
    dest: `${pathDest}icons`,
  },

  svg: {
    src: `${pathSrc}icons/**/*.svg`,
    watcher: `${pathSrc}icons/**/*.svg`,
    dest: `${pathDest}icons`,
  },
};
