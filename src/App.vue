<template>
  <div id="app" style="width:800px;height:800px">
      <input type="text" placeholder="请输入验证码" style="vertical-align: text-bottom">
      <img :src="authImg" class="showImg" @click='changeImg'>
      <div style="width:50px;background:red" :style="{height:changeHeight}" id='testDom'></div>
      <button @click= 'goWaterMark'>加水印</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      authImg: '',
      changeHeight: '50px'
    }
  },
  methods: {
    changeImg() {
      this.authImg = 'http://localhost:8088/' + '?' + new Date().getTime();
    },
    rollNumberTest(n) {
      let rollNum = '1234567898765432';
      let x = n % 16;
      if (x) {
        return rollNum.charAt(x - 1); 
      } else {
        return 2
      }
    },
    goWaterMark() {
      this.$router.push({
        path: '/watermark'
      })
    }
  },
  mounted() {
    this.authImg = 'http://localhost:8088/';
    let that = this;
    let testDom = document.getElementById('testDom');
    // setInterval(function(){
    //     console.log(testDom.offsetHeight);
    //     console.dir(testDom);
    //     that.changeHeight = (parseInt(that.changeHeight) + 10) + 'px'
    // },2000)
  }
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.showImg {
  border: 1px solid darkgray;
  vertical-align: text-bottom; 
}
</style>
