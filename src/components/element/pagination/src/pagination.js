import Vue from 'vue'

const ASPPagination = Vue.component('asp-pagination', {
  functional: true,
  render (h, self) {
    return h('el-pagination', self.data, self.children)
  }
})

export default ASPPagination
