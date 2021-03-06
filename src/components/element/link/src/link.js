import Vue from 'vue'

const ASPLink = Vue.component('asp-link', {
  functional: true,
  render (h, self) {
    return h('el-link', self.data, self.children)
  }
})

export default ASPLink
