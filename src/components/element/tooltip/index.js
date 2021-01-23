import ASPTooltip from './src/tooltip.js'

/* istanbul ignore next */
ASPTooltip.install = function (Vue) {
  Vue.component(ASPTooltip.name, ASPTooltip)
}

export default ASPTooltip
