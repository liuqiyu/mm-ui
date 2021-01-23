import ASPPagination from './src/pagination.js'

/* istanbul ignore next */
ASPPagination.install = function (Vue) {
  Vue.component(ASPPagination.name, ASPPagination)
}

export default ASPPagination
