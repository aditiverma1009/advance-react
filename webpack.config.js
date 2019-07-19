const path = require('path');
module.exports = {
  entry: './lib/components',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle2.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  }
};