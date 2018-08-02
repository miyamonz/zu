<template>
  <g>
    <text v-if="!fetched" :x="tx" :y="ty">{{text}}</text>
    <image :x="tx" :y="ty" :width="width" :height="height" :href="url"
    @mousedown="mousedown"
    @mouseup="release"
    @mouseleave="release"
    @mousemove="mousemove"
    />
  </g>
</template>
<script>
const loadImg = src => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = reject;
    img.src = src;
  });
};

const type = object => ({
  default() {
    return object;
  }
});
const getIconURL = project => name =>
  `https://scrapbox.io/api/pages/${project}/${name}/icon`;

export default {
  props: {
    text: "",
    x: type(0),
    y: type(0),
    width: type(100),
    height: type(100)
  },
  computed: {
    tx() {
      return this.pos.x - this.width / 2;
    },
    ty() {
      return this.pos.y - this.height / 2;
    },
    url() {
      return getIconURL("icons")(this.text);
    }
  },
  watch: {
    url(url) {
      loadImg(url).then(() => (this.fetched = true));
    }
  },
  methods: {
    mousedown(e) {
      this.pos = { x: e.clientX, y: e.clientY };
      this.dragging = true;
    },
    release(e) {
      this.dragging = false;
    },
    mousemove(e) {
      if (this.dragging) {
        this.pos = { x: e.clientX, y: e.clientY };
        this.$emit("update:x", this.pos.x);
        this.$emit("update:y", this.pos.y);
      }
    }
  },
  data() {
    return {
      downPos: { x: this.x, y: this.y },
      pos: { x: this.x, y: this.y },
      dragging: false,
      fetched: false
    };
  }
};
</script>
