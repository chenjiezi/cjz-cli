/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-08-04 17:55:05
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-09 11:28:06
 */
const HtmlwebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { VueLoaderPlugin } = require('vue-loader')

const paths = require('./paths.js')

module.exports = {
  // profile: true,
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
      template: paths.public + '/index.html',
    }),
    new VueLoaderPlugin(),
    // bundle体积可视化
    // new BundleAnalyzerPlugin()
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