import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '',
          redirect: '/wechat'
        },
        {
          path: '/wechat',
          name: 'wechat',
          component: () => import('./views/wechat.vue')
        },
        {
          path: '/compass',
          name: 'compass',
          component: () => import('./views/compass.vue')
        },
        {
          path: '/discover',
          name: 'discover',
          component: () => import('./views/discover.vue')
        },
        {
          path: '/me',
          name: 'me',
          component: () => import('./views/me.vue')
        }
      ]
    },
    { path: '/login', name: 'login', component: () => import('./views/login.vue') },
    { path: '/register', name: 'register', component: () => import('./views/register.vue') },
    { path: '/moments', name: 'moments', component: () => import('./views/moments.vue') },
    { path: '/publish', name: 'publish', component: () => import('./views/publish.vue') }
  ]
})

// 添加路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.wxToken ? true : false;
  if (to.path == "/login" || to.path == "/register") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
})

export default router
