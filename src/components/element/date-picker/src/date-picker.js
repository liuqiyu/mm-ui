import Vue from 'vue'

const ASPDatePicker  = Vue.component('asp-date-picker', {
  functional: true,
  render (h, self) {
    return h('el-date-picker', self.data, self.children)
  }
})

export default ASPDatePicker
