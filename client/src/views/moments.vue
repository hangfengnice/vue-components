<template>
  <div class="circle">
    <Header title="朋友圈" btn_icon="camera" :isLeft="true" />
    <div class="container">
      <div class="scroll-wrap">
        <div class="head_wrapper">
          <div class="user_head">
            <span>{{user.name}}</span>
            <div class="user_img">
              <img :src="user.avatar" alt class="head_img" />
            </div>
          </div>
        </div>

        <div class="content_wrapper">
          <CellView :momentObj="moment" v-for="(moment, index) of momentsList" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import jwt_decode from "jwt-decode";
import CellView from "../components/cellView";

export default {
  name: "moments",
  components: {
    Header,
    CellView
  },
  computed: {
    user() {
      const token = localStorage.wxToken;
      // 解析 token
      const decode = jwt_decode(token);
      return decode;
    }
  },
  data() {
    return {
      momentsList: []
    };
  },
  methods: {
    getLatesData() {
      this.$axios.get("/api/profile/latest").then(res => {
        // console.log(res.data)
        this.momentsList = [...res.data];
        console.log(this.momentsList);
      });
    }
  },
  created() {
    this.getLatesData();
  }
};
</script>

<style scoped>
.circle {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: calc(100% - 50px);
  padding-top: 50px;
  overflow: visible;
}
.head_wrapper {
  width: 100%;
  position: relative;
  height: 200px;
  background: url(../assets/cha.jpg) no-repeat;
  background-size: 100% 100%;
}
.head_wrapper .user_head {
  position: absolute;
  bottom: -30px;
  right: 16px;
}
.user_img {
  width: 60px;
  height: 60px;
  padding: 3px;
  border: 1px solid #c5c5c5;
  box-sizing: border-box;
}
.user_head img {
  width: 100%;
  height: 100%;
}
.user_head span {
  line-height: 30px;
  position: absolute;
  right: 76px;
  width: 200px;
  text-align: right;
  color: white;
}
.content_wrapper {
  padding-top: 20px;
}
</style>
