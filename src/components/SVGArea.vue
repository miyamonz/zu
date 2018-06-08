<template>
    <div>
      <svg @mousedown="click">
          <TextNode 
          v-for="(r,i) in rects"
          :key="i" 
          :rect="r"
          :text="r.text"
          />
          <Guideline :x="x"/>
          <Guideline :y="y"/>
      </svg>
    </div>
</template>
<script>
import TextNode from "@/components/TextNode";
import Guideline from "@/components/Guideline";
import { merge } from "@/util";

const height = 50;

const textToRect = text => {
  return {
    text,
    width: 100,
    height,
    style: {
      fill: "yellow"
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
        x: x + 300,
        y: y + 300
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
      x: 100,
      y: 10
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
