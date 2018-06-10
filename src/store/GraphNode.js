export default class GraphNode {
  static id = 0;
  constructor(before, after) {
    Object.assign(this, { before, after });
    this.id = GraphNode.id;
    GraphNode.id++;
  }
}
