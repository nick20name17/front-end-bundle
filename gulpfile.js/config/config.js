const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
  isProd,
  isDev,

  script: {
    babel: {
      presets: ['@babel/env'],
    },
  },
  html: {
    fileinclude: {
      prefix: '@',
    },
    htmlmin: {
      collapseWhitespace: isProd,
    },
  },
  style: {
    sass: {
      outputStyle: isProd ? 'compressed' : 'expanded',
    },
    autoprefixer: {
      cascade: false,
      grid: true,
    },
    rename: {
      suffix: '.min', prefix: '',
    },
  },
  images: {
    imagemin: {
      verbose: true,
    },
  },
  svg: {
    svgmin: {
      mode: {
        stack: {
          sprite: '../sprite.svg',
        },
      },
    },
  },
  fonts: {
    fonter: {
      formats: ['ttf'],
    },
  },
};
