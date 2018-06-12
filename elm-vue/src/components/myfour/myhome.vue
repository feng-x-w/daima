<template>
  <div class="box">
      <head-top signin-up='home'>
          <span slot='logo'><span class="logo">logo</span><router-link tag="p" to="/home" class="ding">{{msiteTitle}}</router-link></span>
      </head-top>
      <div class="swiper-container banner">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                  <ul class="slide_ul">
                      <li v-for="im in arr"><img :src="'https://fuss10.elemecdn.com'+im.image_url+'?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'"><p>{{im.title}}</p></li>
                  </ul>
              </div>
              <div class="swiper-slide">
                  <ul class="slide_ul">
                      <li v-for="im in arr1"><img :src="'https://fuss10.elemecdn.com'+im.image_url+'?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'"><p>{{im.title}}</p></li>
                  </ul>
              </div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
      <div class="xw_main">
      </div>
      <div class="xw_main_top">
          <p>附近商家</p>
          <div class='zhong' v-for="i in arr2">
            <div class="xw_top">
                <div class="xw_left_img">
                    <img :src="'http://cangdu.org:8001/img/'+i.image_path" class="imgg">
                </div>
                <div class="xw_right_text">
                    <div class="xw_text_left">
                        <p><span class="xw_span_1">品牌</span><span class="xiao_guo">{{i.name}}</span></p><p><span class="xw_span_one">保 准 票</span></p>
                    </div>
                    <div class="xw_text_left">
                        <p><span class="xw_span_2">五星</span><span class="yue_shou">月售{{i.recent_order_num}}单</span></p>
                        <p class="p_p"><span class="feng_niao">{{i.delivery_mode.text}}</span><span class="zhun_shi">准时达</span></p>
                    </div>
                    <div class="xw_text_left">
                        <p><span class="xw_span_3">¥20起送 / 配送费约¥5</span></p>
                        <p class="times">{{i.distance}} / {{i.order_lead_time}}</p>
                    </div>
                </div>
            </div>
          </div>
      </div>

  </div>
</template>

<script>
import headTop from '../header/head.vue'
import {shopList,msiteAddress,msiteFoodTypes,cityGuess} from '../../service/getData'
export default {
    data(){
        return{
            arr:[],
            arr1:[],
            arr2:[],
            msiteTitle:'请选择地址'
        }
    },
    components:{
        headTop
    },
    mounted(){
        var swiper = new Swiper('.swiper-container',{
            pagination:".swiper-pagination",
            observer:true,
            // loop:true,
            // autoplay:1000,
            observeParents:true
        })
    },
    async beforeMount(){
        let geohash = this.$route.query.geohash;
        msiteAddress(geohash).then(res=>{
            this.msiteTitle = res.address;
        })
        let res = await msiteFoodTypes();
        let ress = res.slice(0,10)
        let res1 = res.slice(10)
        this.arr = ress;
        this.arr1 = res1;
        console.log(this.arr);

        shopList().then(res=>{
            console.log(res)
            this.arr2 = res;
        })
    }
}
</script>

<style lang="less" scoped>
    .box{
        width: 100%;
        font-size: 0.14rem;
        background-color: rgb(255, 255, 255);
        
    }
    .logo{
        font-size: 14px;
        float: left;
        margin: 0.5rem;
        color: white;
    }
    .ding{
        font-size: 14px;
        color: white;
        float: left;
        margin-left: 3.5rem;
        margin-top: 0.5rem;
    }
    .zhong{
        margin: 8px 0;
        padding-bottom: 10px;
        border-bottom: .5px solid rgb(221, 221, 221);
    }
    .slide_ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 2rem;
        background-color: white;
        padding-bottom: 25px;
        li{
            width: 20%;
            text-align: center;
            margin-top: 10px;
            img{
                width: 70%;
            }
            p{
                font-size: 12px;
            }
        } 
    }
    .xw_main{
        width: 100%;
        background-color: rgb(211, 211, 211);
        height: 10px;
        border: 1px solid rgb(180, 180, 180);
        border-left: none;
        border-right: none;
    }
    .xw_main_top{
        width: 100%;
        // background-color: rgb(247, 196, 196);
        box-sizing: border-box;
        p{
            font-size: 13px;
            // background-color: aqua;
            padding: 10px 0;
            margin-left: 20px;
        }
        .xw_top{
            width: 95%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            .xw_left_img{
                width: 20%;
                background-color: rgb(243, 104, 104); 
                .imgg{
                    width: 100%;
                    height: 100%;

                }
            }
            .xw_right_text{
                width: 80%;
                .xw_text_left{
                    display: flex;
                    justify-content: space-between;
                    p{
                        width: 100%;
                        margin: 3px 0 3px 10px;
                        background-color: white;
                        padding: 0;
                        .xw_span_1{
                            font-size: 12px;
                            background-color: rgb(255, 238, 0);
                        }
                        .xiao_guo{
                            width: 95px;
                            display: inline-block;
                            // background-color: red;
                            font-size: 14px;
                            font-weight: bold;
                            margin-left: 10px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        .xw_span_one{
                            display: inline-block;
                            width: 100%;
                            text-align: right;
                            font-size: 8px;
                        }
                        .xw_span_2{
                            font-size: 10px;
                        }
                        .yue_shou{
                            font-size: 10px;
                            margin-left: 5px;
                        }
                        .xw_span_3{
                            font-size: 8px;
                        }
                    }
                    .p_p{
                        text-align: right;
                        .feng_niao{
                            display: inline-block;
                            background-color: rgb(6, 164, 212);
                            border-radius: 1px;
                            color: white;
                            font-size: 6px;
                            padding: 1px 2px;
                        }
                        .zhun_shi{
                            display: inline-block;
                            border-radius: 1px;
                            border: 1px solid rgb(6, 164, 212);
                            color: rgb(6, 164, 212);
                            font-size: 6px;
                            padding: 1px 2px;
                            margin-left: 1px;
                        }
                    }
                    .times{
                        font-size: 8px;
                        text-align: right;
                    }
                }
            }
        }
    }
</style>
