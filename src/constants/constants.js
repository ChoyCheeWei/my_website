import { ROUTE_NAME } from '@/constants/route.constants'
/* e.g. import { SHARED, SESSION } from '@/constants/constants' */
const SHARED = Object.freeze({
  GA_TRACKING_CODE: process.env.VUE_APP_GOOGLE_ANALYTICS,
  // SUPPORTED_LANGUAGES: process.env.VUE_APP_AVAILABLE_LANGUAGE.split(','),
  DEFAULT_LAYOUT: 'layout-master',
  BLANK_LAYOUT: 'blank-layout-master',
  DEFAULT_LANGUAGE: process.env.VUE_APP_DEFAULT_LANGUAGE,
  FALLBACK_LANGUAGE: 'zh',
  DEFAULT_CURRENCY: 'CNY',
  DEFAULT_DATE: new Date().toISOString().substr(0, 10),
  DEFAULT_PAGE_NUMBER: 1,
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_ALL_VALUE: -1,
  DEFAULT_ALL_VALUE_STR: '',
  PAGE_SIZE_LIST: [10, 50, 100],
  CONFIG_PAGE_SIZE: 100,
  DIVIDER_CLOSE: 'close',
  DIVIDER_NEXT: 'arrow_forward_ios',
  HISTORY_STATUS: 'history',
  PENDING_STATUS: 'pending',
})

const SESSION = Object.freeze({
  CURRENCY: 'currency',
  LANGUAGE: 'language',
})

const DATE = Object.freeze({
  SHORT: 'YYYY-MM-DD',
  LONG: 'YYYY-MM-DD HH:mm:ss',
  WEEK: 'ddd YYYY-MM-DD',
  TIMER: 'MMM DD, YYYY',
  TIME: 'HH:mm:ss'
})

const TIME = Object.freeze({
  FULL: 'HH:mm',
  HALF: 'hh:mm A'
})

const REGEX = Object.freeze({
  username: /^[a-zA-Z0-9]+$/,
  password: /^[a-zA-Z0-9]+$/,
  mobileNumberChina: /^(?=\d{11}$)^1(?:3\d|4[57]|5[^4\D]|66|7[^249\D]|8\d|9[89])\d{8}$/,
  mobileNumber: /[0-9]{8,14}$/,
  referralCode: /^[a-zA-Z0-9]+$/,
  realname: /^[a-zA-Z\u4e00-\u9eff-\u0E00-\u0E7F./_]+( [a-zA-Z\u4e00-\u9eff-\u0E00-\u0E7F./_]+)*$/,
  invalidCharacters: /^[^;:：；<>《》=*]+$/,
  address: /^[a-zA-Z\u4e00-\u9eff-\u0E00-\u0E7F./_]+( [a-zA-Z\u4e00-\u9eff-\u0E00-\u0E7F./_]+)*$/,
  number: /^[\d]+$/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  line: /^[a-zA-Z0-9_-]+$/,
  integer: /^[0-9]+(\.[0-9]{0,0})?$/,
  decimalTwo: /^-?[0-9]+(\.[0-9]{0,2})?$/,
  decimalFour: /^-?[0-9]+(\.[0-9]{0,4})?$/,
  bankNumberSixDigit: /^[0-9]{6}$/,
  notAllowMultipleSpace: /^\S+(?: \S+)*$/
})

export { SHARED, SESSION, DATE, TIME, REGEX }
