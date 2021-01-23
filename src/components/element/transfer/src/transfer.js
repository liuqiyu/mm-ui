import Vue from 'vue'

const ASPTransfer  = Vue.component('asp-transfer', {
  functional: true,
  render (h, self) {
    return h('el-transfer', self.data, self.children)
  }
})

export default ASPTransfer
