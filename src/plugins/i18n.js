import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { SHARED } from '@/constants/constants'
import en from '@/locales/en.json'
import zh from '@/locales/zh.json'
//import th from '@/locales/th.json'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  fallbackLocale: SHARED.FALLBACK_LANGUAGE,
  messages: { zh, en }
})

export default i18n
