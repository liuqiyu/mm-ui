import ASPTable from './src/table.js'

/* istanbul ignore next */
ASPTable.install = function (Vue) {
  Vue.component(ASPTable.name, ASPTable)
}

export default ASPTable
