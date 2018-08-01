<template>
  <g>
    <text v-if="!fetched" :x="tx" :y="ty">{{text}}</text>
    <image :x="x" :y="y" :width="width" :href="url"/>
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
      return this.x + this.width / 2;
    },
    ty() {
      return this.y + this.height / 2;
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
  methods: {},
  data() {
    return {
      fetched: false
    };
  }
};
</script>
