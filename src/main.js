import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import IconFont from '_c/icon-font/icon-font.vue'
import IconSvg from "./components/icon-svg/icon-svg.vue"

Vue.config.productionTip = false
Vue.component('icon-font', IconFont)
Vue.component("icon-svg", IconSvg);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
