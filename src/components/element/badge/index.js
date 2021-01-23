import ASPBadge from './src/badge.js'

/* istanbul ignore next */
ASPBadge.install = function (Vue) {
  Vue.component(ASPBadge.name, ASPBadge)
}

export default ASPBadge
