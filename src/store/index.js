import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import * as getters from "./getters";
import * as mutations from "./mutations";

const json = {
  x: 0,
  y: 0,
  name: "",
  children: []
};

export default new Vuex.Store({
  state: {
    x: 300,
    y: 300,
    root: json,
    radius: 100,
    nodes: [],
    words: []
  },
  mutations,
  getters,
  actions: {}
});
