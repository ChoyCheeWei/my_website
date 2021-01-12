import axios from 'axios'
import { API, SESSION } from '@/constants/constants'

export function apiHelper(apiUrl = null, appendAuthHeader = true) {
  let baseURL = apiUrl === null ? API.BASE_URL : apiUrl
  let token = localStorage.getItem(SESSION.TOKEN)
  let authHeader = token && appendAuthHeader ? { Authorization: 'Bearer ' + token } : {}

  const responseHandler = response => {
    localStorage.setItem(SESSION.LAST_ACTIVITY_TIME, JSON.stringify(new Date().getTime()))
    return response.data
  }

  const errorHandler = error => {
    if (!error.response) {
      if (error.message === 'Network Error') {
        error.response.status = 503
        error.response.data = {
          success: false,
          code: '0.96',
          error: 'Network Error'
        }
        console.log('Error 503: Network Error')
      } else {
        error.response.data = {
          success: error.response.data.success,
          code: error.response.data.code,
          error: error.response.data.error
        }
      }
    }
    throw error.response.data
  }

  let apiInstance = axios.create({
    baseURL,
    headers: authHeader
  })

  apiInstance.interceptors.response.use(
    response => responseHandler(response),
    error => errorHandler(error)
  )

  return apiInstance
}
