const del = require('del');

const reset = async () => del($.path.root);

module.exports = reset;
