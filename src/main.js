import Vue from 'vue'
import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'
import App from './App.vue'

import 'vuetify/dist/vuetify.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(DaySpanVuetify, {
  data: {
    supports: {
      title:          true,
      description:    true,
      color:          true,
      location:       true,
      calendar:       true,
      busy:           false,
      icon:           true,
      guests:         false
    },
    features: {
      exclude:        true,
      include:        true,
      cancel:         true,
      move:           false,
      moveDuplicate:  true,
      moveInstance:   true,
      moveAll:        true,
      drag:           true,
      forecast:       true,
      addDay:         true,
      addTime:        true,
      hideOnMove:     true
    }
  },
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
