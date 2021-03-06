
export default [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home.vue"),
    children: [
      {
        path: "icon-font",
        name: "iconfont",
        component: () => import("../views/icon-font.vue")
      },
      {
        path: "menu-page",
        name: "menupage",
        component: () => import("../views/menu-page.vue")
      }
    ]
  }
];
