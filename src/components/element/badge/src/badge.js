import Vue from 'vue'

const ASPBadge = Vue.component('asp-badge', {
  functional: true,
  render (h, self) {
    return h('el-badge', self.data, self.children)
  }
})

export default ASPBadge
