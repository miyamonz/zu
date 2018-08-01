<template>
    <g>
    <ImageNode v-bind="root" />
    <tree-node
      v-for="(item,i) in root.children"
      :key="i"
      v-if="item"
      :root="childRoot(item)"
    />
    </g>
</template>
<script>
import ImageNode from "@/components/ImageNode";
export default {
  components: { ImageNode },
  name: "tree-node",
  props: {
    root: Object
  },
  methods: {
    childRoot(item) {
      const child = { ...item };
      child.x += this.root.x;
      child.y += this.root.y;
      return child;
    }
  }
};
</script>
