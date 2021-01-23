import ASPRadio from './src/radio.js'

/* istanbul ignore next */
ASPRadio.install = function (Vue) {
  Vue.component(ASPRadio.name, ASPRadio)
}

export default ASPRadio
