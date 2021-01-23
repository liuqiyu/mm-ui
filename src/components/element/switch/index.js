import ASPSwitch from './src/switch.js'

/* istanbul ignore next */
ASPSwitch.install = function (Vue) {
  Vue.component(ASPSwitch.name, ASPSwitch)
}

export default ASPSwitch
