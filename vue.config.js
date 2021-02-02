'use strict'

const port = process.env.port || process.env.npm_config_port || 8080 // dev port

// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

module.exports = {
  publicPath: './', // 署应用包时的基本 URL。 vue-router hash 模式使用
  outputDir: 'dist', //  生产环境构建文件的目录
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }
  // configureWebpack: {
  //   // provide the app's title in webpack's name field, so that
  //   // it can be accessed in index.html to inject the correct title.
  //   resolve: {
  //     alias: {
  //       "@": resolve("src") // 主目录
  //     }
  //   }
  // }
}
