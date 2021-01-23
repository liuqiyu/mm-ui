import ASPBacktop from './src/backtop.js'

/* istanbul ignore next */
ASPBacktop.install = function (Vue) {
  Vue.component(ASPBacktop.name, ASPBacktop)
}

export default ASPBacktop
