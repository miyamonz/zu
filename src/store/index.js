import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import * as getters from "./getters";
import * as mutations from "./mutations";

export default new Vuex.Store({
  state: {
    root: { x: 300, y: 300 },
    radius: 100,
    nodes: [],
    words: []
  },
  mutations,
  getters,
  actions: {}
});
