/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-06-06 11:58:30
 * @LastEditors: chenjz
 * @LastEditTime: 2022-06-20 16:53:05
 */
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const FileListPlugin = require('./plugin/file-list-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// 修改文件内容
function optimize(str) {
  return ['displays', 'assets', 'symbols'].reduce((pre, cur) => {
    return pre.replace(new RegExp(`${cur}\/`, 'g'), `static/${cur}/`)
  }, str.toString())
}

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
    }),
    // new FileListPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/3D/**/*',
          to: '',
          // to({ context, absoluteFilename }) {
          //   console.log('path.relative(context, absoluteFilename):', path.relative(context, absoluteFilename));
          //   return `static/3D/${path.relative(context, absoluteFilename)}`;
          // },
          // to: '[name][ext]',
          transform(content, path) {
            // console.log('contentToString:', content.toString());
            // console.log('path:', path);
            return /(.json)$|(.md)$/.test(path) ? optimize(content) : content
          }
        },
        {
          from: 'src/assets/3D/test.json',
          to: 'a/b/',
          transform(content, path) {
            // console.log('contentToString:', content.toString());
            // console.log('path:', path);
            return /(.json)$|(.md)$/.test(path) ? optimize(content) : content
          }
        },
      ]
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