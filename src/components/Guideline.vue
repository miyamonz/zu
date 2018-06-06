<template>
    <line v-bind="lineAttr" ></line>
</template>
<script>
const HORIZONTAL = "HORIZONTAL";
const VERTICAL = "VERTICAL";
export default {
  props: ["x", "y"],
  computed: {
    lineType() {
      if (this.x) return VERTICAL;
      if (this.y) return HORIZONTAL;
    },
    lineAttr() {
      if (this.lineType === VERTICAL)
        return {
          x1: this.x,
          x2: this.x,
          y1: 0,
          y2: "100%"
        };
      if (this.lineType === HORIZONTAL)
        return {
          y1: this.y,
          y2: this.y,
          x1: 0,
          x2: "100%"
        };
    }
  }
};
</script>
<style>
line {
  stroke: black;
}
</style>
