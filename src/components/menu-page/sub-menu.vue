<template>
  <ul class="submenu" >
    <div @click="handleClick" class="sub-menu-title">
      <slot name="title"></slot>
      <icon-svg :size="16" :icon="icon"></icon-svg>
    </div>
    <div v-show="showChild" class='childbox'>
      <slot></slot>
    </div>
  </ul>
</template>

<script>
import IconSvg from "../icon-svg/icon-svg";

export default {
  name: "subMenu",
  components: {
    IconSvg
  },
  data() {
    return {
      showChild: false
    };
  },
  methods: {
    handleClick() {
      console.log(1);
      this.showChild = !this.showChild;
    }
  },
  computed: {
    icon() {
      return this.showChild ? "icon-wenjiandakai" : "icon-wenjianguanbi";
    }
  }
};
</script>

<style lang='scss' scoped>
.sub-menu-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.childbox{
  padding-left: 10px;
}
</style>