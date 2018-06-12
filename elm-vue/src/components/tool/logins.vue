<template>
  <div>
      <head-top :head-title="loginWay? '登录':'密码登录'" goBack="true"></head-top>
      <!-- <span class="jiant"></span> -->
      <div class="tis">
        <div class="tis-a">
          <input type="text" placeholder="账号" v-model="userAccount">
        </div>
        <div class="tis-b">
          <input type="password" placeholder="密码" v-model="passWord">
          <div class="tis-b-r">
            <p>abc</p>
            <p>...</p>
            <div class="tis-b-ra" ref="bos" ></div>
          </div>
        </div>
        <div class="tis-c">
          <input type="text" placeholder="验证码" v-model="codeNumber">
          <div class="tis-c-r">
            <img :src="captchaCodeImg">
          </div>
          <div class="tis-c-rr">
            看不清
            <span @click="getCaptchaCode">换一张</span>
          </div>
        </div>
      </div>
      <div class="tishi">
          <p>温馨提示: 为注册过的账号,登录时将自动注册</p>
          <p>注册过的用户可凭账号密码登录</p>
      </div>
      <div class="btn" @click="mobileLogin">
        登录
      </div>
      <div class="wang">
        <p>重置密码？</p>
      </div>
      <div class="tan" v-show="istan">
        <div>
          !
        </div>
        <p>{{userInfo.message}}</p>
        <span @click="queren">确认</span>
      </div>
  </div>
</template>


<script>
import headTop from '../../components/header/head'
import { accountLogin,getcaptchas } from '../../service/getData';
export default {
  components: {
    headTop
  },
  data () {
    return {
      userAccount:'',
      passWord:'',
      codeNumber:'',
      captchaCodeImg:'',
      userInfo:'',
      istan:false,
      loginWay:false
    }
  },
  created () {
    this.getCaptchaCode();
  },
  methods: {
    //获取验证码 线上环境使用固定的图片
    async getCaptchaCode(){
      let res = await getcaptchas();
      this.captchaCodeImg = res.code;
      // console.log(res.code)
    },
    async mobileLogin(){
      //用户名登录
      //传递三个参数(用户名,密码,验证码)
      this.userInfo = await accountLogin(this.userAccount,this.passWord,this.codeNumber);
      // console.log(this.userInfo);
      if(this.userInfo.status == 0){
        this.istan = true
      }else{
        this.$router.go(-1);
      }
      //返回用户信息,根据这个信息判断是否登录成功  成功的话返回城市选择首页 
      //如果返回的值不正确，则弹出提示框,返回的值正确则返回上一页
    },
    queren(){
      this.istan = false;
    }
  }
};
</script>


<style lang="scss" scope>
// @import '../../style/mixin';
// .head_logo{
//     left: 0.4rem;
//     font-weight: 400;
//     @include sc(0.7rem, #fff);
//     @include wh(2.3rem, 0.7rem);
//     @include ct;
// }   
* {
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
  background: #F5F5F5;
}
.mint-header{
  background: #3190e8 !important;
  font-size: .8rem !important;
  height: 2rem !important;
  h1{
    margin-top: .3rem;
    font-weight: 700;
  }
}
.mint-header-title{
  color: #fff;
}
.jiant{
  width: .62rem;
  height: .62rem;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  top: .8rem;
  position: absolute;
  left: .7rem;
  transform: rotate(135deg);
}
.tishi{
  width: 100%;
  box-sizing: border-box;
  padding: 0 .4rem .4rem .4rem;
  p{
    margin-top: .4rem;
    color: red;
    font-size: .4rem;
  }
  p:nth-of-type(2){}
    margin-top: .6rem;  
  }
.btn{
  width: 95%;
  margin-left: 2.5%;
  background: #4CD964;
  padding: .5rem;
  text-align: center;
  color: #fff;
  font-size: .7rem;
  border-radius: 3px;
}
.wang{
  width: 100%;
  p{
    float: right;
    margin-top: .7rem;
    color: #3B95E9;
    font-size: .6rem;
  }
}
.tis{
  width: 100%;
  background: #fff;
  margin-top: 0.6rem;
  .tis-a{
    border-bottom: 1px solid #F1F1F1;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: .6rem;
    height: 1.75rem;
    input{
      height: 1.75rem;
      width: 100%;
      outline: none;
    }
  }
  .tis-b{
    border-bottom: 1px solid #F1F1F1;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: .6rem;
    height: 1.75rem;
    margin-top: 0.12rem;
    input{
      width: 85%;
      height: 1.75rem;
      outline: none;
    }
    .tis-b-r{
      display: flex;
      font-size: 0.2rem;
      border: 1px solid;
      position: relative;
      color: #fff;
      background: #CCCCCC;
      width: 2rem;
      border-radius: 7px;
      p{
        color: #fff;
        margin-left: .3rem;
      }
      p:nth-of-type(2){
        position: absolute;
        top: -.2rem;
        right: .3rem;
        color: #fff;
      }
      .tis-b-ra{
        position: absolute;
        width:1rem;
        height: 1rem;
        background: #F1F1F1;
        border-radius: 50%;
        left: -.1rem;
        top: -.15rem;
      }
    }
  }
  .tis-c{
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 .6rem;
      input{
        width: 60%;
        height: 1.75rem;
        outline: none;
      }
      .tis-c-r{
        width: 27%;
        height: 1.5rem;
        img{
          width: