import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme : {
    primary : '#9652FF',
    success : '#3CD1C2',
    info : '#FFAA2C',
    error : '#F83E70'
  }
})
