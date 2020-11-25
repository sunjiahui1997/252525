<template>
  <div id="app">
    <div class="tabbar">
      <div class="nav">
        <div class="logo"></div>
        <div class="navbar">
          <div class="nav-item" :class="{active:0 === currentIndex}" @click="btnclick(0) ;home()">首页</div>
          <div class="nav-item" :class="{active:1 === currentIndex}" @click="btnclick(1) ;news()">新闻中心</div>
          <div class="nav-item" :class="{active:2 === currentIndex}" @click="btnclick(2) ; introduce()">公司介绍</div>
          <div class="nav-item" :class="{active:3 === currentIndex}" @click="btnclick(3) ; product()">产品中心</div>
          <div class="nav-item" :class="{active:4 === currentIndex}" @click="btnclick(4) ;comment()">在线留言</div>
          <div class="nav-item" :class="{active:5 === currentIndex}" @click="btnclick(5) ;contact()">联系我们</div>
        </div>
      </div>
    </div>
    <div><div class="swiper-item">1</div></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    news(){
      this.$router.push("/news")
    },
    home(){
      this.$router.push("/home")
    },
     btnclick(index){
            this.currentIndex = index
        },
         introduce(){
      this.$router.push("/intro")
    },
     product(){
      this.$router.push("/product")
    },
     comment(){
      this.$router.push("/comment")
    },
     contact(){
      this.$router.push("/contact")
    },
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 1920px;
}
.swiper {
  width: 1920px;
  height: 450px;
}
.swiper-item {
  width: 1920px;
  height: 450px;
  background: #4489b0;
}
.logo {
  position: absolute;
  top: 14px;
  width: 126px;
  height: 42px;
  background: #4489b0;
}

.tabbar {
  position: relative;
  width: 1920px;
  height: 70px;
  background: #ffffff;
}

.nav {
  position: relative;
  height: 42px;
  width: 1200px;
  display: flex;
  left: 420px;
  align-items: center;
}

.navbar {
  display: flex;
  margin-left: 272px;
  justify-content: center;
  position: absolute;
  top: 27px;
}

.nav-item {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  margin-right: 67px;
  /* line-height: 70px; */
  cursor: pointer;
}
.active{
  color: #359EAE
}
</style>
