import Vue from "vue"
import vuex from "vuex"
import login from './Mlogin/login.js'
Vue.use(vuex);
export default new vuex.Store({
    modules:{
        login
    }
})