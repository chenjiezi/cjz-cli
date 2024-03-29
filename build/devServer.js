/*
 * @Description:
 * @Author: chenjz
 * @Date: 2022-08-04 20:32:57
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-10 14:19:59
 */
const Webpack = require('webpack');
const chalk = require('chalk');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.dev.js');
const devServerOptions = {
  ...webpackConfig.devServer,
  host: WebpackDevServer.internalIPSync('v4')
};
const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');

  compiler.hooks.done.tap('devServer', stats => {
    if (stats.hasErrors()) {
      return;
    }

    const { host, port } = server.options;
    const { publicPath } = webpackConfig.output;
    const local = `http://localhost:${port}${publicPath}`;
    const network = `http://${host}:${port}${publicPath}`;

    console.log();
    console.log(`  App running at:`);
    console.log(`  - Local:   ${chalk.cyan(local)}`);
    console.log(`  - Network: ${chalk.cyan(network)}`);
    console.log();
  });

  await server.start();
};

runServer();
