import Vue from 'vue'

const ASPDropdown  = Vue.component('asp-dropdown', {
  functional: true,
  render (h, self) {
    return h('el-dropdown', self.data, self.children)
  }
})

export default ASPDropdown
