import Vue from 'vue'

const ASPAvatar = Vue.component('asp-avatar', {
  functional: true,
  render (h, self) {
    return h('el-avatar', self.data, self.children)
  }
})

export default ASPAvatar
