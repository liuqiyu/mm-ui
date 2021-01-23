import Vue from 'vue'

const ASPRow  = Vue.component('asp-row', {
  functional: true,
  render (h, self) {
    return h('el-row', self.data, self.children)
  }
})

export default ASPRow 
