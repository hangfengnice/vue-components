<template>
  <li class='menu-item-wrapper'>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  props: {},
  data() {
    return {
      
    }
  }
}
</script>

<style lang='scss' scoped>
  .menu-item-wrapper{ 
    background-color: rgb(170, 240, 199);
    list-style: none;
    text-align: left;
  }
</style>