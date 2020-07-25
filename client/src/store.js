import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cover: null,
  },
  mutations: {
    setCoverLeft(state) {
      state.cover = 'left';
    },
    setCoverCenter(state) {
      state.cover = 'center';
    },
    setCoverRight(state) {
      state.cover = 'right';
    },
  },
});
