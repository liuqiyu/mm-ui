import ASPDropdown from './src/dropdown.js'

/* istanbul ignore next */
ASPDropdown.install = function (Vue) {
  Vue.component(ASPDropdown.name, ASPDropdown)
}

export default ASPDropdown
