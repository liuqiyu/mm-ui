import Vue from 'vue'

const ASPCheckbox  = Vue.component('asp-checkbox', {
  functional: true,
  render (h, self) {
    return h('el-checkbox', self.data, self.children)
  }
})

export default ASPCheckbox 
