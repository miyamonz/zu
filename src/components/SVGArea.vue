<template>
    <div>
      <svg @mousedown="click">
          <Guideline :x="x"/>
          <Guideline :y="y"/>
          <TextNode 
          v-for="(r,i) in rects"
          :key="i" 
          :rect="r"
          :text="r.text"
          :style="r.style"
          />
      </svg>
    </div>
</template>
<script>
import TextNode from "@/components/TextNode";
import Guideline from "@/components/Guideline";
import { merge } from "@/util";

const textToRect = text => {
  return {
    text,
    width: 50,
    height: 50,
    style: {
      fill: "none"
      // visibility: "hidden"
    }
  };
};

export default {
  components: {
    TextNode,
    Guideline
  },
  computed: {
    rects() {
      const { words } = this.$store.state;
      const { points } = this.$store.getters;
      return merge(words.map(textToRect), points).map(([rect, { x, y }]) => ({
        ...rect,
        x: x + this.x - rect.width / 2,
        y: y + this.y - rect.height / 2
      }));
    }
  },
  methods: {
    addRect(param) {
      this.rects.push(param);
    },
    click(e) {
      this.addRect({
        x: e.clientX,
        y: e.clientY,
        width: 100 * Math.random(),
        height: 100 * Math.random(),
        style: {
          fill: "yellow"
        }
      });
    }
  },
  data() {
    return {
      x: 300,
      y: 300
    };
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
