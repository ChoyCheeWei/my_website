import Vue from 'vue'
import Vuex from 'vuex'
import shared from './shared.module'

Vue.use(Vuex)

export default new Vuex.Store({
  /*plugins: [
    createPersistedState({
      paths: ["game", "lookup"],
    })
  ],*/
  modules: {
    shared
  }
})
