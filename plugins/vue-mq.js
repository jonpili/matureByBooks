import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    xs: 576,
    sm: 992,
    lg: Infinity
  },
  defaultBreakpoint: 'lg'
})
