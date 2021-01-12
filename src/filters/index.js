import Vue from 'vue'

import currencyFormat from './currency-format'
import shortDateFormat from './date-format'
import longDateFormat from './date-time-format'
import emptyDataFormat from './empty-data-format'
import isActiveStatusDesc from './is-active-status-desc'
import lockUnlockStatusDesc from './lock-unlock-status-desc'
import yesNoStatusDesc from './yes-no-status-desc'
import genderDesc from './gender-desc'
import isVerifiedStatusDesc from './is-verified-status-desc'
import stripHtml from './strip-html'
import halftimeFormat from './time-format'
import timerFormat from './timer-format'
import dateWeekFormat from './date-week-format'

Vue.filter('currency', currencyFormat)
Vue.filter('shortDate', shortDateFormat)
Vue.filter('longDate', longDateFormat)
Vue.filter('emptyDataFormat', emptyDataFormat)
Vue.filter('isActiveStatusDesc', isActiveStatusDesc)
Vue.filter('lockUnlockStatusDesc', lockUnlockStatusDesc)
Vue.filter('yesNoStatusDesc', yesNoStatusDesc)
Vue.filter('genderDesc', genderDesc)
Vue.filter('isVerifiedStatusDesc', isVerifiedStatusDesc)
Vue.filter('stripHtml', stripHtml)
Vue.filter('halfTime', halftimeFormat)
Vue.filter('timer', timerFormat)
Vue.filter('weekDate', dateWeekFormat)
