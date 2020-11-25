import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../components/Home')
const news = () => import('../views/News')
const comment = () => import('../views/Comment')
const contact = () => import('../views/Contact')
const intro = () => import('../views/Intro')
const product = () => import('../views/Product')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/news',
    component: news
  },
  {
    path: '/comment',
    component: comment
  },
  {
    path: '/contact',
    component: contact
  },
  {
    path: '/intro',
    component: intro
  },
  {
    path: '/product',
    component: product
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

export default router