import Vue from 'vue'

const ASPImage = Vue.component('asp-image', {
  functional: true,
  render (h, self) {
    return h('el-image', self.data, self.children)
  }
})

export default ASPImage
