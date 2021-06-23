const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  lintOnSave: false,
  // 部署应用包时的基本 URL 为相对路径
  publicPath: './',
  // 运行时编译
  runtimeCompiler: true,
  css: {
    sourceMap: !IS_PROD,
    loaderOptions: {
      scss: {
        // 引入全局变量
        additionalData: `@import "@/assets/scss/_utils.scss";`
      }
    }
  },
  devServer: {
    progress: false
  }
}
