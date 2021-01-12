/* Refer: https://cli.vuejs.org/config/#vue-config-js */

module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: process.env.BASE_URL,
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
