<template>
    <div>
      <svg>
        <Guideline :x="$store.state.x"/>
        <Guideline :y="$store.state.y"/>

        <tree-node :root="$store.state.root" />
      </svg>
    </div>
</template>
<script>
import ImageNode from "@/components/ImageNode";
import TreeNode from "@/components/TreeNode";
import BaseNode from "@/components/BaseNode";
import Guideline from "@/components/Guideline";

export default {
  components: {
    ImageNode,
    TreeNode,
    BaseNode,
    Guideline
  },
  computed: {
    json() {
      return this.$store.state.root;
    }
  },
  methods: {
    addRect(param) {
      this.rects.push(param);
    },
    rect(node) {
      let getPos = this.$store.getters.getPositionById;
      let { x, y } = getPos(node.id);
      let width = 50;
      let height = 50;
      return {
        x: x - width / 2,
        y: y - height / 2,
        width,
        height
      };
    }
  }
};
</script>

<style scoped>
svg {
  width: 100vw;
  height: 50vh;
}
rect {
  fill: yellow;
  stroke: blue;
}
</style>
