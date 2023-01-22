import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/UsersProfile.vue";
import HeaderHome from "./views/HeaderHome.vue";
import HeaderUsers from "./views/HeaderUsers.vue";

// Vue Routerを使うという宣言
Vue.use(Router);

// routesに配列で、どのURLに度のコンポーネントを表示させるかの設定を書く
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        default: Home,
        header: HeaderHome,
      },
    },
    {
      path: "/users/:id",
      components: {
        default: Users,
        header: HeaderUsers,
      },
      props: {
        default: true, // 名前付きビューごとにpropdを定義する必要がある事に注意
        header: false,
      },
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
    {
      path: "/test*", // testから始まるURLは全てTOPにリダイレクト ex) /testdsadsdasd
      redirect: "/",
    },
    {
      path: "*", // この記述は、上記で設定したものにあてはまらないURLにアクセスしたらTOPにリダイレクトさせるというもの
      redirect: "/",
    },
  ],
});
