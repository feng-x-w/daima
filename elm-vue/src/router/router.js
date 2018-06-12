import App from '../App'
import login from '../components/tool/login'
import myHome from '../components/myfour/myhome.vue'
import city from '../components/tool/city.vue'
import city1 from '../components/tool/city.vue'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },

        {
            path: '/login',  
            component: login
        },
     
        {
            path: '/myhome',  
            component: myHome
        }, 

        {
            path: '/city/:cityid',  
            component: city
        }, 

        {
            path: '/city',  
            component: city1
        }, 

    ]
}]