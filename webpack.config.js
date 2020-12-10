var path = require('path')
var webpack = require('webpack')
var SRC_DIR = path.join(__dirname, './react-client/src')

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: SRC_DIR,
        options: {
          presets: ['@babel/react', '@babel/preset-env']
        }
      }
    ]
  }
}