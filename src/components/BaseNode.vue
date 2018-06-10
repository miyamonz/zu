<template>
    <g
    @mouseover="active = true"
    @mouseleave="active = false"
    >
    <circle
    :class="{active}"
    :cx="pos.x" :cy="pos.y" r="20"/>
    <text
    :x="pos.x" :y="pos.y"
    >{{node.id}}
    </text>
    <line
    :x1="beforePos.x" :y1="beforePos.y"
    :x2="pos.x" :y2="pos.y"
    />
    </g>
</template>
<script>
export default {
  props: ["node"],
  computed: {
    pos() {
      let getPos = this.$store.getters.getPositionById;
      return getPos(this.node.id);
    },
    beforePos() {
      let getPos = this.$store.getters.getPositionById;
      return getPos(this.node.before) || this.pos;
    },
    afterPos() {
      let getPos = this.$store.getters.getPositionById;
      return getPos(this.node.after);
    }
  },
  data() {
    return {
      active: false
    };
  }
};
</script>
<style scoped>
* {
  /* transition: all 1.2s; */
}
circle {
  fill: white;
  stroke: black;
  stroke-width: 2px;
}
.active {
  stroke-width: 10px;
}
text {
  fill: black;
}
</style>
