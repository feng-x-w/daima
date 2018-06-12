import App from '../App'
const download = r => require.ensure([], () => r(require('../page/download/download')), 'download')
const service = r => require.ensure([], () => r(require('../page/service/service')), 'service')
const questionDetail = r => require.ensure([], () => r(require('../page/service/children/questionDetail')), 'questionDetail')

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const balance = r => require.ensure([], () => r(require('../page/balance/balance')), 'balance')
const detail = r => require.ensure([], () => r(require('../page/balance/children/detail')), 'detail')

const points = r => require.ensure([], () => r(require('../page/points/points')), 'points')

const benefit = r => require.ensure([], () => r(require('../page/benefit/benefit')), 'benefit')
const commend = r => require.ensure([], () => r(require('../page/benefit/children/commend')), 'commend')
const exchange = r => require.ensure([], () => r(require('../page/benefit/children/exchange')), 'exchange')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const order = r => require.ensure([], () => r(require('../page/order/order')), 'order')
const orderDetail = r => require.ensure([], () => r(require('../page/order/children/orderDetail')), 'orderDetail')
// import order from '../page/order/order'
const shopDetail = r => require.ensure([], () => r(require('../page/shop/children/shopDetail')), 'shopDetail')
const foodDetail = r => require.ensure([], () => r(require('../page/shop/children/foodDetail')), 'foodDetail')
const shopSafe = r => require.ensure([], () => r(require('../page/shop/children/children/shopSafe')), 'shopSafe')

const find = r => require.ensure([], () => r(require('../page/find/find')), 'find')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const info = r => require.ensure([], () => r(require('../page/profile/children/info')), 'info')
const vipcard = r => require.ensure([], () => r(require('../page/vipcard/vipcard')), 'vipcard')
const address = r => require.ensure([], () => r(require('../page/profile/children/children/address')), 'address')
const add = r => require.ensure([], () => r(require('../page/profile/children/children/children/add')), 'add')
const addDetail = r => require.ensure([], () => r(require('../page/profile/children/children/children/children/addDetail')), 'addDetail')
const vipDescription = r => require.ensure([], () => r(require('../page/vipcard/children/vipDescription')), 'vipDescription')
const useCart = r => require.ensure([], () => r(require('../page/vipcard/children/useCart')), 'useCart')
const invoiceRecord = r => require.ensure([], () => r(require('../page/vipcard/children/invoiceRecord')), 'invoiceRecord')
const confirmOrder = r => require.ensure([], () => r(require('../page/confirmOrder/confirmOrder')), 'confirmOrder')
const chooseAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/chooseAddress')), 'chooseAddress')

const invoice = r => require.ensure([], () => r(require('../page/confirmOrder/children/invoice')), 'invoice')
const remark = r => require.ensure([], () => r(require('../page/confirmOrder/children/remark')), 'remark')
const userValidation = r => require.ensure([], () => r(require('../page/confirmOrder/children/userValidation')), 'userValidation')

const addAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/addAddress')), 'addAddress')
const searchAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/children/searchAddress')), 'searchAddress')

const payment = r => require.ensure([], () => r(require('../page/confirmOrder/children/payment')), 'payment')
const coupon = r => require.ensure([], () => r(require('../page/benefit/children/coupon')), 'coupon')
const hbDescription = r => require.ensure([], () => r(require('../page/benefit/children/hbDescription')), 'hbDescription')
const hbHistory = r => require.ensure([], () => r(require('../page/benefit/children/hbHistory')), 'hbHistory')

const setusername = r => require.ensure([], () => r(require('../page/profile/children/setusername')), 'setusername')
export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    //地址为空时跳转home页面
    {
      path: '/profile/setusername',
      component: setusername
    },
    {
      path: '/balance',
      component: balance
    },
    {
      path: '/balance/detail',
      component: detail
    },
    {
      path: '/shop/foodDetail',
      component: foodDetail
    },
    {
      path: '/shop/shopDetail',
      component: shopDetail
    },
    {
      path: '/order/orderDetail',
      component: orderDetail
    },
    {
      path: '/confirmOrder/userValidation',
      component: userValidation
    },
    {
      path: '/confirmOrder/chooseAddress',
      component: chooseAddress
    },
    {
      path: '/confirmOrder/chooseAddress/addAddress',
      component: addAddress
    },
    {
      path: '/confirmOrder/chooseAddress/addAddress/searchAddress',
      component: searchAddress
    },
    {
      path: '/confirmOrder/invoice',
      component: invoice
    },
    {
      path: '/confirmOrder/remark',
      component: remark
    },
    {
      path: '/points',
      component: points
    },
    {
      path: '/points/detail',
      component: detail
    },
    {
      path: '/benefit/hbDescription',
      component: hbDescription
    },
    {
      path: '/benefit/hbHistory',
      component: hbHistory
    },
    {
      path: '/benefit',
      component: benefit
    },
    {
      path: '/service',
      component: service
    },
    {
      path: '/service/questionDetail',
      component: questionDetail
    },
    {
      path: '/download',
      component: download
    },
    {
      path: '/benefit/commend',
      component: commend
    },
    {
      path: '/benefit/coupon',
      component: coupon
    },
    {
      path: '/benefit/exchange',
      component: exchange
    },
    {
      path: '/vipcard',
      component: vipcard
    },
    {
      path: '/confirmOrder',
      component: confirmOrder
    },
    {
      path: '/confirmOrder/payment',
      component: payment
    },
    {
      path: '/vipcard/useCart',
      component: useCart
    },
    {
      path: '/vipcard/vipDescription',
      component: vipDescription
    },
    {
      path: '/vipcard/invoiceRecord',
      component: invoiceRecord
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/profile/info',
      component: info
    },
    {
      path: '/profile/info/address',
      component: address
    },
    {
      path: '/profile/info/address/add',
      component: add
    },
    {
      path: '/profile/info/address/add/addDetail',
      component: addDetail
    },
    {
      path: '/shop',
      component: shop
    },
    {
      path: '/find',
      component: find
    },
    {
      path: '/order',
      component: order
    },
    {
      path: '/search/geohash',
      component: search
    },
    {
      path: '/forget',
      component: forget
    },
    {
      path: '/food',
      component: food
    },
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
      path: '/msite',
      component: msite
    },
    {
      path: '/city/:cityid',
      component: city
    },

  ]
}]
