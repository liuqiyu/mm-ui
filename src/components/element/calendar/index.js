import ASPCalendar from './src/calendar.js'

/* istanbul ignore next */
ASPCalendar.install = function (Vue) {
  Vue.component(ASPCalendar.name, ASPCalendar)
}

export default ASPCalendar
