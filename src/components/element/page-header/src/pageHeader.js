import Vue from 'vue'

const ASPPageHeader  = Vue.component('asp-page-header', {
  functional: true,
  render (h, self) {
    return h('el-page-header', self.data, self.children)
  }
})

export default ASPPageHeader
