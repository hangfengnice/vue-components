<template>
  <sub-menu>
    <div slot="title">{{parent.title}}</div>
    <template v-for="(item, index) in parent.children">
      <menu-item v-if="!item.children" :key="index">{{item.title}}</menu-item>
      <re-sub-menu v-else :key="index" :parent="item"></re-sub-menu>
    </template>
  </sub-menu>
</template>

<script>
import menuComponents from "../../components/menu-page";
const { MenuItem, SubMenu } = menuComponents;

export default {
  name: "ReSubMenu",
  props: {
    parent: {
      type: Object,
      default: () => {{}}
    }
  },
  components: {
    MenuItem,
    SubMenu
  }
};
</script>

<style lang='scss' scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>