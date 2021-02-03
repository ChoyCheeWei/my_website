import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import VueLodash from 'vue-lodash'
import '@/plugins/vuetify'
import LayoutMaster from '@/components/layout/LayoutMaster.vue'
import BlankLayoutMaster from '@/components/layout/BlankLayoutMaster.vue'
import VueClipboard from 'vue-clipboard2'
import VueAnalytics from 'vue-analytics'
import VueGTag from 'vue-gtag'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(VueClipboard)
Vue.use(vuetify)
Vue.use(VueGTag, {
  id: 'G-BWGHLJLE63'
})
Vue.component('layout-master', LayoutMaster)
Vue.component('blank-layout-master', BlankLayoutMaster)

Vue.config.productionTip = false
export const eventBus = new Vue()
Vue.prototype.$eventHub = new Vue()
new Vue({
  router,
  vuetify,
  VueLodash,
  AOS,
  render: h => h(App)
}).$mount('#app')
