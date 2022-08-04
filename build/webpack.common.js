/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-08-04 17:55:05
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-04 19:33:33
 */
const HtmlwebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const paths = require('./paths.js')

module.exports = {
  entry: {
    index: paths.src + '/main.js',
  },
  output: {
    filename: 'static/js/[name].[contenthash].js',
    path: paths.dist,
    clean: true
  },
  resolve: {
    alias: {
      '@': paths.src,
      public: paths.public
    },
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'cjz-cli',
      favicon: paths.public + '/favicon.ico',
      template: paths.public + '/index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}