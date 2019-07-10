import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index.vue";
import Login from "./views/login.vue";
import Register from "./views/register.vue";
import Chats from "./views/chats.vue";
import Concats from "./views/concats.vue";
import Discover from "./views/discover.vue";
import Me from "./views/me.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "",
    //   redirect:'/chats'
    // },
    {
      path: "/",
      name: "index",
      component: Index,
      children: [
        { path: "/chats", name: "chats", component: Chats },
        { path: "/concats", name: "concats", component: Concats },
        { path: "/discover", name: "discover", component: Discover },
        { path: "/me", name: "me", component: Me }
      ]
    },
    { path: "/register", name: "register", component: Register },
    { path: "/login", name: "login", component: Login }
  ]
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.wxToken ? true : false;
  if (to.path == "/login" || to.oath == "/register") next();
  isLogin ? next() : next("/login");
});

export default router;
