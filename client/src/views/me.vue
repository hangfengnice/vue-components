<template>
  <div class='mine'>
    <Header title="我"  />
    <div class="container">
      <div class="cell-wrapper">
        <div class="cell-title" v-if='user'>
          <img :src="user.avatar" alt="">
          <span>{{user.name}}</span>
        </div>
        
      </div>
      <div class="btn_wrapper">
          <YButton @click='logOut' >退出登录</YButton>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import jwt_decode from 'jwt-decode'
import YButton from '../components/YButton'

export default {
  name: "me",
  components: {
    Header,
    YButton
  },
  computed: {
    user(){
      const token = localStorage.wxToken
      // 解析token
      const decode = jwt_decode(token)
      return decode
    }
  },
  methods: {
    logOut(){
      localStorage.removeItem('wxToken')
      this.$router.push('/login')
    }
  }

};
</script>

<style scoped>
.mine{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container{
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 50px;
}
.cell-wrapper{
  background-color: #fff;
  box-sizing: border-box;
  color: inherit;
  min-height: 80px;
  display: flex;
  font-size: 16px;
  line-height: 1;
  overflow: hidden;
  padding: 0 8px;
  width: 100%;
  line-height: 80px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;

}
.cell-title{
  flex: 1;

}
.cell-title img{
  width : 4rem;
  height: 4rem;
  vertical-align: middle;
  margin-right: .6rem;

}
.cell-title span{
  display: inline-block;
  vertical-align: middle;
}
.btn_wrapper{
  box-sizing: border-box;
  margin: 20px 10px;
  padding: 20px;
}
</style>
