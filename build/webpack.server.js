const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const serverConfig = {
  target: 'node',
  mode: 'development',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: path.join(__dirname, '../src/server/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist')
  },
  externals: [nodeExternals()]
}

module.exports = merge(config, serverConfig)