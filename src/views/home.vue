<template>
  <div>
    <nav class='home-nav'>
      <router-link to='icon-font'>icon-font</router-link>
      <router-link to='menu-page'>menu-page</router-link>

    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.home-nav {
  padding: 10px 0;
  a {
    font-weight: bold;
    padding: 0 5px;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
 
</style>
