import Vue from 'vue'

const ASPSlider  = Vue.component('asp-slider', {
  functional: true,
  render (h, self) {
    return h('el-slider', self.data, self.children)
  }
})

export default ASPSlider
