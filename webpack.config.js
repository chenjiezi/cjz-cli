/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-06-06 11:58:30
 * @LastEditors: chenjz
 * @LastEditTime: 2022-06-07 18:03:13
 */
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    // print: './src/assets/js/print.js'
  },
  devtool: 'inline-source-map', // 开启source map方便追踪到error和warning在源代码的原始位置（副作用是增大体积）
  devServer: {
    static: './dist',
    compress: true,
    port: 9527,
    // hot: true, // 从 webpack-dev-server v4.0.0 开始，热模块替换是默认开启的
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Development',
      template: 'src/index.html',
      // hash: true, // 文件路径后面附加hash，防止缓存
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 每次构建项目，删除原有的dist文件夹
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
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
      // css
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // less
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
      },
      // Asset Modules
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource'
      },
      // 没配置下面的规则，照样能转换ttf
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  }
}