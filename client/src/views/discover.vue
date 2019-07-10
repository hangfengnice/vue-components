<template>
  <div class="find">
    <Header title="发现" />
    <div class="content">
      <Cell :path="cellData.path" :src="cellData.src" :title="cellData.title" />
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import Cell from "../components/cell";

export default {
  name: "discover",
  components: {
    Header,
    Cell
  },
  data() {
    return {
      cellData: {
        src: "pyq.jpg",
        title: "朋友圈",
        path: "/moments"
      }
    };
  }
};
</script>

<style scoped>
.find {
  width: 100%;
  height: calc(100% - 55px);
  position: relative;
  box-sizing: border-box;
}
.content {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 50px;
}
</style>
