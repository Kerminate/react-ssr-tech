const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
require('@babel/polyfill')
const config = require('./webpack.base')

const serverConfig = {
  target: 'node',
  mode: 'development',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: ['@babel/polyfill', path.join(__dirname, '../src/server/index.js')],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIndetName: '[name]_[local]_[hash:base64:5]'
            }
          },
          'less-loader'
        ]
      }
    ]
  }
}

module.exports = merge(config, serverConfig)