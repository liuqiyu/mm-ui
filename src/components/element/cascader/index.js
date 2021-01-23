import ASPCascader from './src/cascader.js'

/* istanbul ignore next */
ASPCascader.install = function (Vue) {
  Vue.component(ASPCascader.name, ASPCascader)
}

export default ASPCascader
