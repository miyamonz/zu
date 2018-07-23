<template>
  <g>
    <text v-if="!fetched" :x="tx" :y="ty">{{text}}</text>
    <image :x="rect.x" :y="rect.y" :width="rect.width" :href="url"/>
  </g>
</template>
<script>
const loadImg = src => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.src = src;
  });
};

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
    },
    url() {
      const project = "icons";
      const url = `https://scrapbox.io/api/pages/${project}/${this.text}/icon`;
      loadImg(url).then(() => (this.fetched = true));
      return url;
    }
  },
  methods: {},
  data() {
    return {
      fetched: false
    };
  }
};
</script>
