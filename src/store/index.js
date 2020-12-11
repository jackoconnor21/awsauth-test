import Vue from 'vue'
import Vuex from 'vuex'
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import AuthModule from './auth';

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    auth: AuthModule
  },
  state() {
    return {
      todos: []
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
})
