const path = require('./gulpfile.js/config/path');
const config = require('./gulpfile.js/config/config');

module.exports = {
  mode: config.isProd ? 'production' : 'development',
  output: {
    filename: 'app.js',
  },
  entry: `./${path.script.src}`,
};
