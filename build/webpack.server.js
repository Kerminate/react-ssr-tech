const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const config = require('./webpack.base')

console.log(__dirname)

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: path.join(__dirname, '../src/server/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist')
  },
  externals: [nodeExternals()]
}

module.exports = merge(config, serverConfig)