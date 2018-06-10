import GraphNode from "./GraphNode";
import * as getters from "./getters";

export const appendAfter = (state, target) => {
  let findById = getters.findById(state);

  let after = findById(target.after);
  const node = new GraphNode(target.id, after.id);

  target.after = node.id;
  after.before = node.id;
};
export const addNode = state => {
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

export const addWord = (state, w) => {
  state.words.push(w);
  addNode(state);
};

export const clear = state => {
  state.words = [];
};
