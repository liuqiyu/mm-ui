import ASPUpload from './src/upload.js'

/* istanbul ignore next */
ASPUpload.install = function (Vue) {
  Vue.component(ASPUpload.name, ASPUpload)
}

export default ASPUpload
