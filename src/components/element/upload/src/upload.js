import Vue from 'vue'

const ASPUpload  = Vue.component('asp-upload', {
  functional: true,
  render (h, self) {
    return h('el-upload', self.data, self.children)
  }
})

export default ASPUpload
