import ASPMenu from './src/menu.js'

/* istanbul ignore next */
ASPMenu.install = function (Vue) {
  Vue.component(ASPMenu.name, ASPMenu)
}

export default ASPMenu
