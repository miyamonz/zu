import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import * as getters from "./getters";
import * as mutations from "./mutations";

const child = {
  x: 0,
  y: 200,
  text: "folder"
};
const json = {
  x: 100,
  y: 100,
  text: "mac",
  children: [child, { x: 200, y: 0, text: "すごい" }]
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
