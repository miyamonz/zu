<template>
  <div id="app">
      <div @mousedown="e =>log(e)">
      <SVGArea />
      </div>
      <KeyInput @enter="text => $store.commit('addWord', text)"/>
     {{$store.state}}
     <textarea cols="30" rows="10" onfocus="this.select()"> {{jsonStr}} </textarea>
  </div>
</template>
<script>
import SVGArea from "@/components/SVGArea";
import KeyInput from "@/components/KeyInput";
export default {
  components: {
    SVGArea,
    KeyInput
  },
  computed: {
    jsonStr() {
      return JSON.stringify(this.$store.state.root);
    }
  },
  methods: {
    log(e) {
      if (e.target.tagName === "rect") {
        console.log(e.target);
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
