import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

const GoodsDetails = () => import ('../views/details-goods/GoodsDetails')
const SingleItem = () => import ('../views/cart/childCoponent/SingleItem')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    linkActiveClass: 'active'
  },
  {
    path: '/details/:iid',
    name: 'details',
    component: GoodsDetails
  },
  {
    path: '/cart/:iid',
    name: 'singleItem',
    component: SingleItem
    // meta: {
    //   keepAlive: false
    // }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
