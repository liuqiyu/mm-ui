import ASPImage from './src/image.js'

/* istanbul ignore next */
ASPImage.install = function (Vue) {
  Vue.component(ASPImage.name, ASPImage)
}

export default ASPImage
