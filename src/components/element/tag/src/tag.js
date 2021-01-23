import Vue from 'vue'

const ASPTag = Vue.component('asp-tag', {
  functional: true,
  render (h, self) {
    return h('el-tag', self.data, self.children)
  }
})

export default ASPTag
