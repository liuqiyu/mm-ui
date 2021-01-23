import Vue from 'vue'

const ASPCascader  = Vue.component('asp-cascader', {
  functional: true,
  render (h, self) {
    return h('el-cascader', self.data, self.children)
  }
})

export default ASPCascader
