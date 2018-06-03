<template>
    <div>
      <svg @mousedown="click">
          <TextNode 
          v-for="(r,i) in rects"
          :key="i" 
          :rect="r"
          :text="`hoge`"
          />
      </svg>
    </div>
</template>
<script>
import TextNode from "@/components/TextNode";
export default {
  components: {
    TextNode
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
      rects: []
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
