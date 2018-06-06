<template>
    <div>
      <textarea 
          style="position: relative " 
          :style="textPos" 
          v-model="text"
          @keyup="keyup"
          @keydown="keydown"
      />
    </div>
</template>
<script>
export default {
  methods: {
    clear() {
      this.text = "";
    },
    keyup(e) {
      if (e.key == "Enter") {
        this.text = this.text.slice(0, -1);
        if (this.text !== "") this.$emit("enter", this.text);
        this.clear();
      }
    },
    keydown() {}
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
    return {
      text: ""
    };
  }
};
</script>
