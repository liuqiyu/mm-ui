const path = require('path')
const resolve = function (dir) {
  return path.join(__dirname, dir)
}
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  // css: { extract: false },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('public', resolve('public'))
      .set('static', resolve('public/static'))
      .set('@pages', resolve('src/pages'))
      .set('@aspSmartTable', resolve('src/components/asp-smart-table'))
      .set('@aspSmartPortal', resolve('src/components/asp-smart-portal'))
    // config.optimization.runtimeChunk('single')
    // config.module
    //   .rule('js')
    //   .include
    //   .add('/packages')
    //   .end()
    //   .use('babel')
    //   .loader('babel-loader')
    //   .tap(options => {
    //     // 修改它的选项...
    //     return options
    //   })
  },
  devServer: {
    port: 9393,
    // headers: {
    //   test: 'webpack-test'
    // },
    proxy: {
      '/api': {
        target: 'http://10.12.3.251:8002', // 目标代理接口地址
        // target: 'http://127.0.0.1:7001', // 目标代理接口地址
        // target: 'http://10.1.5.103:8002', // 目标代理接口地址
        // target: 'http://127.0.0.1:7001', // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  configureWebpack: config => {
    const arr = [
      new CompressionPlugin({
        filename: '[path].gzip[query]', // 提示compression-webpack-plugin@2.0.0的话filename改为asset
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240, // 内容超过10KB进行压缩
        minRatio: 0.8
      })
    ]
    // if (process.env.NODE_ENV !== 'development') {
    //   arr.push(new BundleAnalyzerPlugin())
    // }
    config.plugins = [...config.plugins, ...arr];
    config.externals = {
      // 'axios': 'https://cdn.bootcss.com/axios/0.19.2/axios.min.js'
    }
  }
}
