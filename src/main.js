import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/plugins/i18n'
import vuetify from '@/plugins/vuetify'
import VueLodash from 'vue-lodash'
import { SHARED } from '@/constants/constants'
import '@/filters'
import '@/plugins/vuetify'
import LayoutMaster from '@/components/layout/LayoutMaster.vue'
import BlankLayoutMaster from '@/components/layout/BlankLayoutMaster.vue'
import AppFormField from '@/components/FormField.vue'
import AppButton from '@/components/Button.vue'
import AppDialog from '@/components/dialog.vue'
import AppDateTimePicker from '@/components/DateTimePicker.vue'
import VueClipboard from 'vue-clipboard2'
import VueAnalytics from 'vue-analytics'

Vue.use(VueClipboard)
Vue.use(VueAnalytics, {
  id: SHARED.GA_TRACKING_CODE,
  router
})
Vue.component('layout-master', LayoutMaster)
Vue.component('blank-layout-master', BlankLayoutMaster)
Vue.component('app-form-field', AppFormField)
Vue.component('app-button', AppButton)
Vue.component('app-dialog', AppDialog)
Vue.component('app-date-time-picker', AppDateTimePicker)

Vue.config.productionTip = false
export const eventBus = new Vue()
Vue.prototype.$eventHub = new Vue()
new Vue({
  router,
  store,
  i18n,
  vuetify,
  VueLodash,
  render: h => h(App)
}).$mount('#app')
