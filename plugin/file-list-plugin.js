/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-06-13 17:20:20
 * @LastEditors: chenjz
 * @LastEditTime: 2022-06-20 15:51:19
 */

const { SyncHook } = require('tapable')

class FileListPlugin {
  static defaultOptions = {
    outputFile: 'assets.md'
  };

  constructor(options = {}) {
    this.options = { ...FileListPlugin.defaultOptions, ...options };
  }

  apply(compiler) {
    const pluginName = FileListPlugin.name;
    const { webpack } = compiler;
    const { Compilation } = webpack;
    const { RawSource } = webpack.sources;

    compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: pluginName,
          stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
        },
        (assets) => {
          // console.log('assets:', assets);
          const content =
            '# In this build:\n\n' +
            Object.keys(assets)
              .map((filename) => `- ${filename}`)
              .join('\n');
          compilation.emitAsset(this.options.outputFile, new RawSource(content));

          // let result = null;
          // for (let key of Object.keys(assets)) {
          //   if (key.indexOf('.css') >= 0) {
          //     result = assets[key];
          //   }
          // }
          // compilation.emitAsset(this.options.outputFile, result);

        }
      );
    });

  }

}

module.exports = FileListPlugin;