import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import { ROUTE_NAME } from '@/constants/route.constants'
Vue.use(VueRouter)
Vue.use(VueMeta)
const homePage = { name: ROUTE_NAME.HOME }

// const loginGuard = function(to, from, next) {
//   uiHelper.isAuthenticated() ? next() : next(homePage)
// }

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: ROUTE_NAME.HOME,
      meta: { layout: 'layout-master' },
      component: () => import('@/views/home.vue')
    },
    {
      path: '/error',
      component: () => import('@/views/error/errorLayout.vue'),
      children: [
        {
          path: 'page-not-found',
          name: ROUTE_NAME.ERROR_404,
          component: () => import('@/views/error/404.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: { name: ROUTE_NAME.HOME }
    }
    // {
    //   path: '*',
    //   redirect: { name: ROUTE_NAME.ERROR_404 }
    // }
  ],
  /* TO AUTO BACK TO TOP */
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
