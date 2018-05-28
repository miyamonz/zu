import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    words: []
  },
  mutations: {
    add(state, w) {
      state.words.push(w);
    }
  },
  actions: {}
});
