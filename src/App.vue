<template>
  <div id="app" @mousemove="mousemove">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <textarea id="" name="" cols="30" rows="10"></textarea>
    <textarea 
        style="position: relative " 
        :style="textPos" 
        v-model="text"
        @keyup="key"
    />
    {{$store.state.words}}
  </div>
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
