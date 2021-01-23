import Vue from 'vue'

const ASPTabs = Vue.component('asp-tabs', {
  functional: true,
  render (h, self) {
    return h('el-tabs', self.data, self.children)
  }
})

export default ASPTabs
