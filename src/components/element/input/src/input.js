import Vue from 'vue'

const ASPInput = Vue.component('asp-input', {
  functional: true,
  render (h, self) {
    return h('el-input', self.data, self.children)
  }
})

export default ASPInput
