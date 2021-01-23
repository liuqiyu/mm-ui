import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.scss'

// import Bob from 'asp-web-lib-demo'
import 'asp-web-lib-demo/lib/theme-chalk/server/index.css'
import components from '@/components'
import router from '@/router'

// import { isObject } from 'asp-web-lib-demo/lib/utils'
console.log(components)
Vue.use(ElementUI, {
  size: 'mini'
})

Vue.use(components, {
  style: 'server'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')