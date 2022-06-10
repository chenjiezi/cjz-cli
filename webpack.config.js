/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-06-06 11:58:30
 * @LastEditors: chenjz
 * @LastEditTime: 2022-06-10 16:53:50
 */
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: './src/index.js',
  },
  // devtool: 'source-map', // 开启source map方便追踪到error和warning在源代码的原始位置（副作用是增大体积）
  devServer: {
    static: {
      // html文件没有参与打包，需要额外加入
      directory: path.join(__dirname, 'src/index.html')
    },
    compress: true,
    port: 9527,
    hot: true, // 从 webpack-dev-server v4.0.0 开始，热模块替换是默认开启的
    // liveReload: true,
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Development',
      template: 'src/index.html',
      // hash: true, // 文件路径后面附加hash，防止缓存
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      ignoreOrder: false,
    })
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
    // splitChunks: {
    //   cacheGroups: {
    //     styles: {
    //       name: 'styles',
    //       type: 'css/mini-extract',
    //       chunks: 'all',
    //       enforce: true
    //     }
    //   }
    // }
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
      // css | less
      {
        test: /\.(le|c)ss$/i,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'less-loader'
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