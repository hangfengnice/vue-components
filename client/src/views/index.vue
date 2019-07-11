<template>
    <div class="index">
        <router-view></router-view>
        <TabBar :data='tabberData'></TabBar>
    </div>
</template>

<script>
import TabBar from "../components/tabBar";

export default {
  name: "index",
  data() {
    return {
      tabberData: [
        { title: "微信", icon: "comment", path: "/wechat" },
        { title: "通讯录", icon: "address-book", path: "/compass" },
        { title: "发现", icon: "compass", path: "/discover" },
        { title: "我", icon: "user", path: "/me" }
      ]
    };
  },
  components: {
    TabBar
  }
};
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
}
</style>


