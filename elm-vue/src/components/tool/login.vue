/*<template>
    <div class="">
       <head-top class="head">
              <span slot='logo' class="span_a">eleme</span>
        </head-top>
        <div class="bnn"></div>
        <div class="box_ipt">
            账&nbsp;&nbsp;&nbsp;号<input type="text" ref="ipt1">
        </div>
        <div class="box_ipt">
            密&nbsp;&nbsp;&nbsp;码<input type="password" ref="ipt2">
        </div>
        <div class="box_ipt xw_yzm">
            验证码<input type="text" ref="ipt3"><img :src="captchaCodeImg" @click="getcaptchaCode">
        </div>
        <p class="p_a">
            温馨提示:未注册过的账号,登录时将自动注册
            <span>注册过的用户可凭账号密码登录</span>
        </p>
        <button class="btn" @click="mobileLogin">
                登录 
        </button>
        <p class="p_chong">重置密码?</p>
        <alert-tip v-if="la" @closeTip="la=!la"></alert-tip>
    </div>
</template>


<script>
import headTop from '../header/head'
import alertTip from '../common/alertTip.vue'
import {cityGuess, hotcity, groupcity,getcaptchas,mobileCode, accountLogin} from '../../service/getData'
import { MessageBox } from 'mint-ui';
export default {
    data () {
        return {
            la:false,
            lang:false,
            mobileCode:[],
            captchaCodeImg:''
        }
    },
    created(){
        this.getCaptchaCode();
    },
    mounted () {
        // mobileCode().then(res=>{
        //     console.log(res)
        //     this.mobileCode=res
        // }) 
    },
    methods: {
        async mobileLogin(){
                if (this.loginWay) {
                    if (!this.rightPhoneNumber) {
                        this.showAlert = true;
                        this.alertText = '手机号码不正确';
                        return
                    }else if(!(/^\d{6}$/gi.test(this.mobileCode))){
                        this.showAlert = true;
                        this.alertText = '短信验证码不正确';
                        return
                    }
                    //手机号登录
                    this.userInfo = await sendLogin(this.mobileCode, this.phoneNumber, this.validate_token);
                }else{
                    if (!this.userAccount) {
                        this.showAlert = true;
                        this.alertText = '请输入手机号/邮箱/用户名';
                        return
                    }else if(!this.passWord){
                        this.showAlert = true;
                        this.alertText = '请输入密码';
                        return
                    }else if(!this.codeNumber){
                        this.showAlert = true;
                        this.alertText = '请输入验证码';
                        return
                    }
                    //用户名登录
                    this.userInfo = await accountLogin(this.userAccount, this.passWord, this.codeNumber);
                }
                //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
                if (!this.userInfo.user_id) {
                    this.showAlert = true;
                    this.alertText = this.userInfo.message;
                    if (!this.loginWay) this.getCaptchaCode();
                }else{
                    this.RECORD_USERINFO(this.userInfo);
                    this.$router.go(-1);

                }
            },
        // deng(){
        //     let a=this.$refs.ipt1.value
        //     let b=this.$refs.ipt2.value
        //     let c=this.$refs.ipt3.value
        //     if(a!=''&&b!=''&&c!=''){
        //         this.la=false
        //         window.location.href="http://localhost:8000/#/home"
        //     }else{
        //         this.la=true
        //     }
        // },
        async getcaptchaCode(){
            let res = await getcaptchas();
            this.captchaCodeImg = res.code;
            console.log(res.code)
        },
        // async mobileLogin(){
        //     this.userInfo = await accountLogin(this.userAccount,this.passWord,this.codeNumber);
        //     console.log(this.userInfo)
        // },

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
    },
    watch: {
        la(v){
            // console.log(v)
            this.$emit('closeTid',v)
        }  
    },
    components: {
        headTop,
        alertTip
    }
}
</script>


<style scope lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .alet_container{
        background: rgba(0, 0, 0, 0.5);
    }
    .mint-msgbox{
        button{
            background:#4CD964;
            color: white;
        }
    }
    .btn{
        border: none;
        background: #4CD964;
        font-weight: bold;
        width: 90%;
        height: 1.5rem;
        margin-left: 5%;
        border-radius: .25rem;
        color: white;
        // a{
        //     color: white;
        // }
    }
    .p_chong{
        color: blue;
        margin-left: 80%;
        font-size: .2rem;
        padding: 1rem 0;
    }
    .p_a{
        font-size: .2rem;
        color: red;
        display: flex;
        flex-direction: column;
        padding: .5rem;
        box-sizing: border-box;
        span{
            color: red;
        }
    }
    .box_ipt{
        width: 100%;
        padding: .2rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .6rem;
        background: white;
        border: 1px dotted gainsboro;
        padding-left: 0.6rem;
        input{
            width: 80%;
            height: 2rem;
            // background-color: rgb(150, 91, 91);
        }
    }
    .bnn{
        height: 2rem;
        width: 100%;
    }
    .head{
        display: flex;
        align-items: center;
    }
    .span_a{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
    .xw_yzm{
        img{
            width: 20%;
            height: 40px;
            background-color: rgb(219, 219, 219);
        }
        input{
            width: 52%;
        }
    }
</style>
*/