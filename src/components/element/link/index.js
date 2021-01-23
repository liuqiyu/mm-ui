import ASPLink from './src/link.js'

/* istanbul ignore next */
ASPLink.install = function (Vue) {
  Vue.component(ASPLink.name, ASPLink)
}

export default ASPLink
