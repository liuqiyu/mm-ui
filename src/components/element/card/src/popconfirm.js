import Vue from 'vue'

const ASPCard = Vue.component('asp-card', {
  functional: true,
  render (h, self) {
    return h('el-card', self.data, self.children)
  }
})

export default ASPCard
