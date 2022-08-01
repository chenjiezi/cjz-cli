/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-06-06 11:58:30
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-01 22:52:46
 */
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const FileListPlugin = require('./plugin/file-list-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// console.log('process.env.NODE_ENV:', process.env.NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: './src/main.js',
  },
  // devtool: 'source-map', // 开启source map方便追踪到error和warning在源代码的原始位置（副作用是增大体积）
  // HMR
  // devServer: {},
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Development',
      template: 'src/index.html',
      // hash: true, // 文件路径后面附加hash，防止缓存
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      ignoreOrder: false,
    }),
    new VueLoaderPlugin()
    // new FileListPlugin(),
  ],
  output: {
    filename: 'static/js/[name].[contenthash].js',
    path: path.join(__dirname, 'dist'),
    clean: true, // 每次构建项目，删除原有的dist文件夹
    // assetModuleFilename: 'static/image/[hash][ext][query]',
  },
  optimization: {
    runtimeChunk: 'single',
    minimizer: [
      new CssMinimizerPlugin(),
      '...'
    ]
  },
  module: {
    rules: [
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // babel
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // css | scss
      {
        test: /\.(sc|c)ss$/i,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // Asset Modules
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/image/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/font/[hash][ext][query]'
        }
      },
    ]
  }
}