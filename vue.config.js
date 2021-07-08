const IS_PROD = process.env.NODE_ENV === 'production';
const path = require('path');
module.exports = {
  lintOnSave: false,
  // 部署应用包时的基本 URL 为相对路径
  publicPath: '/',
  // 运行时编译
  runtimeCompiler: true,
  css: {
    sourceMap: !IS_PROD,
    loaderOptions: {
      scss: {
        // 引入全局变量
        additionalData: `@import "@/views/style/myDemo.scss";`
      }
    }
  },
  devServer: {
    progress: false
  },
  chainWebpack: config => {
    config.resolve.alias.set('vue', 'vue/dist/vue.esm-bundler.js');

    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('markdown-loader')
      .loader(path.resolve(__dirname, './src/views/myLoader.js'))
      .end();

    config.module
      .rule('codepoints')
      .test(/\.codepoints$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  }
}
