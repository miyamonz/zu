import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

class GraphNode {
  static id = 0;
  constructor(before, after) {
    Object.assign(this, { before, after });
    this.id = GraphNode.id;
    GraphNode.id++;
  }
}

const addNode = state => {
  let nodes = state.nodes;
  if (nodes.length == 0) {
    state.nodes.push(new GraphNode(null, null));
    return;
  }
  let last = nodes[nodes.length - 1];
  let next = new GraphNode(last.id, null);
  last.after = next.id;

  nodes.push(next);
};

export default new Vuex.Store({
  state: {
    radius: 100,
    nodes: [],
    words: []
  },
  mutations: {
    addNode,
    addWord(state, w) {
      state.words.push(w);
      addNode(state);
    },
    clear(state) {
      state.words = [];
    }
  },
  getters: {
    scan({ nodes }) {
      let ret = [];

      let current = nodes[0];
      while (current) {
        ret.push(current);
        current = nodes.find(n => n.id === current.after);
      }
      return ret;
    },
    points({ radius }, { scan }) {
      let len = scan.length;
      let rotate = i => ({
        x: radius * Math.sin((i * 2 * Math.PI) / len),
        y: radius * Math.cos((i * 2 * Math.PI) / len)
      });

      return scan.map((node, i) => rotate(i));
    }
  },
  actions: {}
});
