/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-06-06 11:58:30
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-04 11:45:37
 */
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: './src/main.js',
  },
  output: {
    filename: 'static/js/[name].[contenthash].js',
    path: path.join(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new CssMinimizerPlugin(),
      '...'
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      'Assets': path.resolve(__dirname, 'src/assets/')
    },
  },
  // devtool: 'source-map', // 开启source map方便追踪到error和warning在源代码的原始位置（副作用是增大体积）
  plugins: [
    // new BundleAnalyzerPlugin(), // bundle体积可视化
    new HtmlwebpackPlugin({
      title: 'cjz-cli',
      template: 'public/index.html',
      // hash: true, // 文件路径后面附加hash，防止缓存
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      ignoreOrder: false,
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
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