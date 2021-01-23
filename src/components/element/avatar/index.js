import ASPAvatar from './src/avatar.js'

/* istanbul ignore next */
ASPAvatar.install = function (Vue) {
  Vue.component(ASPAvatar.name, ASPAvatar)
}

export default ASPAvatar
