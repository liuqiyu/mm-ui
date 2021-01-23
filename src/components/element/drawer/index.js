import ASPDrawer from './src/drawer.js'

/* istanbul ignore next */
ASPDrawer.install = function (Vue) {
  Vue.component(ASPDrawer.name, ASPDrawer)
}

export default ASPDrawer
