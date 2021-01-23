import Vue from 'vue'

const ASPBacktop  = Vue.component('asp-backtop', {
  functional: true,
  render (h, self) {
    return h('el-backtop', self.data, self.children)
  }
})

export default ASPBacktop
