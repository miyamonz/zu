<template>
    <g>
    <rect v-bind="rect"></rect>
    <text :x="tx" :y="ty">{{text}}</text>
    </g>
</template>
<script>
export default {
  props: ["rect", "text"],
  computed: {
    tx() {
      let { x, width } = this.rect;
      return x + width / 5;
    },
    ty() {
      let { y, height } = this.rect;
      return y + height / 2;
    }
  }
};
</script>
