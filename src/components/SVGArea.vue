<template>
    <div>
      <svg>
          <Guideline :x="$store.state.root.x"/>
          <Guideline :y="$store.state.root.y"/>
          <transition-group tag="g">
          <BaseNode 
          v-for=" node in $store.state.nodes"
          :key="node.id"
          :node="node"/>
          </transition-group>
      </svg>
    </div>
</template>
<script>
import TextNode from "@/components/TextNode";
import BaseNode from "@/components/BaseNode";
import Guideline from "@/components/Guideline";

export default {
  components: {
    TextNode,
    BaseNode,
    Guideline
  },
  computed: {},
  methods: {
    addRect(param) {
      this.rects.push(param);
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
