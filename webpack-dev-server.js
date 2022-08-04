/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-08-04 20:32:57
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-04 20:38:53
 */
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./build/webpack.dev.js');

const compiler = Webpack(webpackConfig);
const devServerOptions = {
  ...webpackConfig.devServer,
  progress: true,
  open: '/autonomy/rsh/'
};
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();