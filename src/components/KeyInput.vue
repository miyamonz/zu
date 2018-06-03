<template>
    <textarea id="" name="" cols="30" rows="10"></textarea>
    <textarea 
        style="position: relative " 
        :style="textPos" 
        v-model="text"
        @keyup="key"
    />
    {{$store.state.words}}
</template>
<script>
export default {
  methods: {
    mousemove(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    clear() {
      this.$nextTick(() => (this.text = ""));
    },
    key(e) {
      if (e.key == "Enter") {
        if (this.text !== "") this.$store.commit("add", this.text);
        this.clear();
      }
    }
  },
  computed: {
    textPos() {
      return {
        left: this.x + "px",
        top: this.y + "px"
      };
    }
  },
  data() {
    return { x: 0, y: 0, text: "" };
  }
};
</script>
