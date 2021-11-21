import { createStore, createLogger } from 'vuex';
import state from './_state.js';
import getters from './_getters.js';
import mutations from './_mutations.js';
import actions from './_actions.js';
// import moduleBBS from './module/board/index.js';

const store = createStore({
  plugins: [createLogger()],
  state,
  getters,
  mutations,
  actions,
  modules: {
    test: {
      namespaced: true,
      state: {
        count: 0,
      },
      getters: {
        GET_DOUBLE_TEST(state) {
          return state.count * 2;
        },
      },
      mutations: {
        SET_INCREMENT_TEST(state) {
          state.count += 1;
        },
        SET_DECREMENT_TEST(state) {
          state.count -= 1;
        },
      },
      actions: {
        SET_INCREMENT_TEST({ commit }) {
          commit('SET_INCREMENT_TEST');
        },
        SET_DECREMENT_TEST({ commit }) {
          commit('SET_DECREMENT_TEST');
        },
      },
    },
  },
});

export default store;
