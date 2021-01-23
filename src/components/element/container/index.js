import ASPContainer from './src/container.js'

/* istanbul ignore next */
ASPContainer.install = function (Vue) {
  Vue.component(ASPContainer.name, ASPcontainer)
}

export default ASPContainer
