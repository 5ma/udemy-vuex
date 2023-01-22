import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";

// Vue Routerを使うという宣言
Vue.use(Router);

// routesに配列で、どのURLに度のコンポーネントを表示させるかの設定を書く
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/users/:id",
      component: Users,
      children: [
        {
          path: "posts",
          component: UsersPosts,
        },
        {
          path: "profile",
          component: UsersProfile,
          name: "users-id-profile",
        },
      ],
    },
  ],
});
