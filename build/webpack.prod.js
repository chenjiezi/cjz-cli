const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const paths = require('./paths.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: paths.prodPublicPath,
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      '...'
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      ignoreOrder: false,
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
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
})