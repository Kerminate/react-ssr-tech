const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const clientConfig = {
  mode: 'development',
  entry: path.join(__dirname, '../src/client/index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../public')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
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

module.exports = merge(config, clientConfig)