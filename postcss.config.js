const functions = require('./src/styles/functions');

module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer'),
    require('postcss-functions')({ functions }),
  ],
};
