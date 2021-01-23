import ASPPopover from './src/popover.js'

/* istanbul ignore next */
ASPPopover.install = function (Vue) {
  Vue.component(ASPPopover.name, ASPPopover)
}

export default ASPPopover
