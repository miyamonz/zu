<template>
    <div>
      <svg>
        <Guideline :x="$store.state.x"/>
        <Guideline :y="$store.state.y"/>
        <transition-group tag="g">
          <BaseNode 
           v-for="node in $store.state.nodes"
           :key="node.id"
           :node="node"
          >
            <ImageNode :rect="rect(node)" :text="$store.state.words[node.id]"/>
          </BaseNode>
        </transition-group>
      </svg>
    </div>
</template>
<script>
import ImageNode from "@/components/ImageNode";
import BaseNode from "@/components/BaseNode";
import Guideline from "@/components/Guideline";

export default {
  components: {
    ImageNode,
    BaseNode,
    Guideline
  },
  computed: {},
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
