import Vue from 'vue'

export const timeMixin = Vue.extend({
  methods: {
    addMonths(date = new Date(), months = 0) {
      const newDate = new Date(date)
      newDate.setMonth(date.getMonth() + months)
      return newDate
    },
    weeksBetween(d1, d2) {
      return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
    },
  }
})