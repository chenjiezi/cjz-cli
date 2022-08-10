# cjz-cli

进度：
- webpack构建生成的js文件中还存在ES6语法(=>、const)没被转为ES5语法


遇到的问题：
Q:
// 没配置下面的规则，照样能转换ttf
{
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
},
A:webpack5新增了资源模块，资源模块(asset module)是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader。


Q:webpack-dev-server不能监听到index.html的变化？？？
A:设置index.html一同监听
devServer {
  static: {
    directory: path.join(__dirname, 'src/index.html')
  }
}

Q:webpack5热更新失效，且只有css修改后失效
A:https://blog.csdn.net/weixin_42349568/article/details/124287361

Q:webpack构建生成的js文件中还存在ES6语法(=>、const)没被转为ES5语法

Q: runtime bundle 是什么
A: 在运行时，webpack用来连接模块化应用程序所需的代码。它包含：在模块交互时，
连接模块所需的加载和解析逻辑。