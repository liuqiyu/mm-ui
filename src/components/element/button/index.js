import ASPButton from './src/button.js'

/* istanbul ignore next */
ASPButton.install = function (Vue) {
  Vue.component(ASPButton.name, ASPButton)
}

export default ASPButton
