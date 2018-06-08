<template>
    <div>
      <textarea 
          style="position: relative " 
          :style="textPos" 
          v-model="text"
          @keypress.prevent.enter="send"
      />
    </div>
</template>
<script>
export default {
  methods: {
    send() {
      if (this.text === "") return;

      this.$emit("enter", this.text);
      this.text = "";
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
    return {
      text: ""
    };
  }
};
</script>
