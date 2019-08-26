<template>
  <svg class="icon" aria-hidden="true" :style="style">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "iconsvg",
  props: {
    icon: {
      type: String,
      default: ""
    },
    size: {
      type: Number,
      default: 20
    }
  },
  computed: {
    iconName() {
      return `#${this.icon}`;
    },
    style() {
      return {
        fontSize: `${this.size}px`
      };
    }
  }
};
</script>

<style lang='scss' scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
