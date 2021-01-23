import bob from './src/test.vue'

/* istanbul ignore next */
bob.install = function (Vue) {
  Vue.component(bob.name, bob)
}

export default bob
