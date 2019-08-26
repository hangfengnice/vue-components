<template>
  <i :class="classes" :style="styles"></i>
</template>

<script>
export default {
  name: "iconfont",
  props: {
    icon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#515a6e"
    },
    size: {
      type: Number,
      default: 12
    }
  },
  computed: {
    classes() {
      return ["iconfont", `${this.icon}`];
    },
    styles() {
      return {
        color: this.color,
        fontSize: `${this.size}px`
      };
    }
  }
};
</script>

<style lang='scss' scoped>
.iconfont {
  font-family: "iconfont";
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
