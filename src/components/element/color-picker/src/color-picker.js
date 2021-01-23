import Vue from 'vue'

const ASPColorPicker  = Vue.component('asp-color-picker', {
  functional: true,
  render (h, self) {
    return h('el-color-picker', self.data, self.children)
  }
})

export default ASPColorPicker
