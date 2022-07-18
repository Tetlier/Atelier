const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, 'client', 'src');
const OUT_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: path.join(SRC_DIR, 'index.jsx'),
  output: {
    path: OUT_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  node: {
    fs: 'empty'
  },

  plugins: [
    // Can refer to process.env variables within client-side files
    new webpack.DefinePlugin({
      'process.env': {
        TOKEN: JSON.stringify(process.env.TOKEN),
      },
    }),
  ],
};

