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
let x = 0;
let y = 0;
const height = 50;

const repeatAfter = (func, after) => (...args) => {
  const ret = func(...args);
  after();
  return ret;
};
const textToRect = text => {
  return {
    text,
    x,
    y,
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
      x = this.x;
      y = this.y;
      const { words } = this.$store.state;
      const mapWithIncrement = repeatAfter(
        textToRect,
        () => (y += height + 10)
      );
      return words.map(mapWithIncrement);
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
