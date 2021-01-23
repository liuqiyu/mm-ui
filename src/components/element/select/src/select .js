import Vue from 'vue'

const ASPSelect  = Vue.component('asp-select', {
  functional: true,
  render (h, self) {
    return h('el-select', self.data, self.children)
  }
})

export default ASPSelect
