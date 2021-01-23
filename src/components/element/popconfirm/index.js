import ASPPopconfirm from './src/popconfirm.js'

/* istanbul ignore next */
ASPPopconfirm.install = function (Vue) {
  Vue.component(ASPPopconfirm.name, ASPPopconfirm)
}

export default ASPPopconfirm
