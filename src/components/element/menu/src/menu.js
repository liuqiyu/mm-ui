import Vue from 'vue'

const ASPMenu = Vue.component('asp-menu', {
  functional: true,
  render (h, self) {
    return h('el-menu', self.data, self.children)
  }
})

export default ASPMenu
