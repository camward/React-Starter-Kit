const path = require('path');

module.exports = {
  autoprefixer: {
    browsers: ['last 3 version', 'ie >= 10'],
  },
  plugins: [
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    require('autoprefixer')(),
  ],
  context: path.join(__dirname, './src'),
};
