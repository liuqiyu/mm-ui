import Test from './advanced/test/index.js'
import Bob from './advanced/bob/index.js'
import './element'

const components = [Test, Bob]

const install = (Vue, opts = {}) => {
  console.log(opts)
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$ASPWEBLIB = {
    style: opts.style || ''
  }
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  Test,
  Bob
}