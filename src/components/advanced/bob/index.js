import ASPBob from './src/bob.vue'

/* istanbul ignore next */
ASPBob.install = function (Vue) {
  Vue.component(ASPBob.name, ASPBob)
}

export default ASPBob
