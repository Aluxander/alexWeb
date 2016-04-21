var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-nap',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './src'
  ],
  output: {
    path: path.join(__dirname, 'public')
    filename: bundle.js
  },
  resolve: {
    modulesDirectories: []
  }
};
